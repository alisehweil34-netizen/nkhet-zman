/* =========================================================
   نكهة زمان — محرك الإعدادات المشترك
   يُستخدم في index.html و settings.html
   الآن يعتمد على قاعدة بيانات سحابية (JSONBin) بحيث أي تعديل
   من لوحة الإعدادات يظهر لكل الزوار من أي متصفح/جهاز.
   يبقى فيه نسخة محلية (localStorage) تُستخدم فقط كـ"احتياط"
   وقت ما يكون في مشكلة اتصال بالإنترنت.
   ========================================================= */

const NZ_KEYS = {
  PREFS: 'nz_user_prefs_v1',           // تفضيلات شخصية بالجهاز فقط (وضع ليلي/حجم خط)
  ADMIN_PASS: 'nz_admin_password_v1',
  ADMIN_SESSION: 'nz_admin_session_v1',
  CLOUD_CACHE: 'nz_cloud_cache_v1'     // نسخة احتياطية محلية من بيانات السحابة
};

/* ---------- إعداد الاتصال بقاعدة البيانات السحابية (JSONBin) ---------- */
const NZ_CLOUD = {
  BIN_ID: '6a4aaeb6da38895dfe31de10',
  MASTER_KEY: '$2a$10$VSx4ZS/VnoEafmwtXxbSe.S/pdsmmNg7hinKKiyAoAagVMNHjy.Xq',
  BASE_URL: 'https://api.jsonbin.io/v3/b/'
};

const NZ_DEFAULT_SITE = {
  storeName: 'نكهة زمان',
  tagline: 'ألبان ومشتقات حليب بلدية',
  heroEyebrow: 'دكان بلدي، طعم أصيل',
  heroTitle: 'ألبان بلدية بنكهة ما بتنسى',
  heroText: 'من قلب المزرعة إلى طاولتك؛ أجبان طازجة، لبنة بلدية، سمنة وزبدة على الطريقة القديمة. كل قطعة عنّا محضّرة يوميًا بوصفات ما تغيرت من زمان.',
  phone: '0789598299',
  whatsapp: '0789598299',
  address: 'الأردن عمان ماركا الشمالية نزول دير لاتين مقابل الجدع',
  mapUrl: 'https://maps.app.goo.gl/VtVppjY5Rxrx6kyc6',
  logo: 'logo.jpeg',
  colorCream: '#F6EFDD',
  colorOliveDark: '#2E3524',
  colorOlive: '#4C5A3A',
  colorBrass: '#A9782F',
  colorBrassLight: '#C79A4B',
  colorBurgundy: '#6E2430'
};

const NZ_DEFAULT_PREFS = {
  darkMode: false,
  fontSize: 'medium' // small | medium | large
};

const NZ_DEFAULT_CLOUD_STATE = {
  site: {},
  overrides: {},
  extra: [],
  hidden: {}
};

/* ---------- تخزين محلي عام (تفضيلات + احتياط) ---------- */
function nzGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}
function nzSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.error('تعذر الحفظ', e);
    return false;
  }
}

/* ---------- الاتصال بالسحابة ---------- */
let NZ_CLOUD_CACHE = null;   // آخر نسخة من بيانات السحابة محملة بالذاكرة
let NZ_READY_PROMISE = null; // بروميس تحميل أولي، تنستنى عليه قبل أي عرض للبيانات

async function nzCloudFetch() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(NZ_CLOUD.BASE_URL + NZ_CLOUD.BIN_ID + '/latest', {
      headers: { 'X-Master-Key': NZ_CLOUD.MASTER_KEY },
      signal: controller.signal
    });
    if (!res.ok) throw new Error('فشل تحميل البيانات من السحابة: ' + res.status);
    const data = await res.json();
    return Object.assign({}, NZ_DEFAULT_CLOUD_STATE, data.record || {});
  } finally {
    clearTimeout(timeoutId);
  }
}

async function nzCloudPush() {
  if (!NZ_CLOUD_CACHE) return false;
  try {
    const res = await fetch(NZ_CLOUD.BASE_URL + NZ_CLOUD.BIN_ID, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': NZ_CLOUD.MASTER_KEY
      },
      body: JSON.stringify(NZ_CLOUD_CACHE)
    });
    if (!res.ok) throw new Error('فشل حفظ البيانات بالسحابة: ' + res.status);
    nzSet(NZ_KEYS.CLOUD_CACHE, NZ_CLOUD_CACHE);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

/* تُستدعى مرة وحدة تلقائيًا بأول ما تنحمّل الصفحة، وبترجع بروميس
   لازم ننتظره قبل ما نعرض أي بيانات (منتجات / إعدادات موقع) */
function nzInit() {
  if (NZ_READY_PROMISE) return NZ_READY_PROMISE;
  NZ_READY_PROMISE = nzCloudFetch()
    .then(record => {
      NZ_CLOUD_CACHE = record;
      nzSet(NZ_KEYS.CLOUD_CACHE, NZ_CLOUD_CACHE);
      return NZ_CLOUD_CACHE;
    })
    .catch(err => {
      console.error('تعذر الاتصال بقاعدة البيانات السحابية، رح نستخدم آخر نسخة محفوظة بهالجهاز', err);
      NZ_CLOUD_CACHE = nzGet(NZ_KEYS.CLOUD_CACHE, null) || Object.assign({}, NZ_DEFAULT_CLOUD_STATE);
      return NZ_CLOUD_CACHE;
    });
  return NZ_READY_PROMISE;
}

/* إعادة تحميل قسري من السحابة (تُستخدم بعد استيراد نسخة احتياطية مثلًا) */
function nzRefreshCloud() {
  NZ_READY_PROMISE = null;
  return nzInit();
}

/* ---------- إعدادات الموقع العامة ---------- */
function nzLoadSiteSettings() {
  const cloudSite = (NZ_CLOUD_CACHE && NZ_CLOUD_CACHE.site) || {};
  return Object.assign({}, NZ_DEFAULT_SITE, cloudSite);
}
async function nzSaveSiteSettings(settings) {
  if (!NZ_CLOUD_CACHE) await nzInit();
  NZ_CLOUD_CACHE.site = settings;
  return nzCloudPush();
}
async function nzResetSiteSettings() {
  if (!NZ_CLOUD_CACHE) await nzInit();
  NZ_CLOUD_CACHE.site = {};
  return nzCloudPush();
}

/* ---------- تفضيلات المستخدم (محلية بكل جهاز، ما تنحفظ بالسحابة) ---------- */
function nzLoadPrefs() {
  return Object.assign({}, NZ_DEFAULT_PREFS, nzGet(NZ_KEYS.PREFS, {}));
}
function nzSavePrefs(prefs) {
  return nzSet(NZ_KEYS.PREFS, prefs);
}

/* ---------- تطبيق الإعدادات على الصفحة ---------- */
function nzApplySiteSettings(doc) {
  doc = doc || document;
  const s = nzLoadSiteSettings();
  const root = doc.documentElement;
  root.style.setProperty('--cream', s.colorCream);
  root.style.setProperty('--olive-dark', s.colorOliveDark);
  root.style.setProperty('--olive', s.colorOlive);
  root.style.setProperty('--brass', s.colorBrass);
  root.style.setProperty('--brass-light', s.colorBrassLight);
  root.style.setProperty('--burgundy', s.colorBurgundy);

  doc.querySelectorAll('[data-nz="storeName"]').forEach(el => el.textContent = s.storeName);
  doc.querySelectorAll('[data-nz="tagline"]').forEach(el => el.textContent = s.tagline);
  doc.querySelectorAll('[data-nz="heroEyebrow"]').forEach(el => el.textContent = s.heroEyebrow);
  doc.querySelectorAll('[data-nz="heroTitle"]').forEach(el => el.textContent = s.heroTitle);
  doc.querySelectorAll('[data-nz="heroText"]').forEach(el => el.textContent = s.heroText);
  doc.querySelectorAll('[data-nz="phone"]').forEach(el => el.textContent = s.phone);
  doc.querySelectorAll('[data-nz="whatsapp"]').forEach(el => el.textContent = s.whatsapp);
  doc.querySelectorAll('[data-nz="address"]').forEach(el => { el.textContent = s.address; if (el.tagName === 'A') el.href = s.mapUrl; });
  doc.querySelectorAll('[data-nz="mapUrl"]').forEach(el => el.href = s.mapUrl);
  doc.querySelectorAll('[data-nz="phoneHref"]').forEach(el => el.href = 'tel:' + s.phone.replace(/\s/g,''));
  doc.querySelectorAll('[data-nz="whatsappHref"]').forEach(el => el.href = 'https://wa.me/962' + s.whatsapp.replace(/^0/,'').replace(/\s/g,''));
  doc.querySelectorAll('[data-nz="logo"]').forEach(el => el.src = s.logo);

  const titleEl = doc.querySelector('title');
  if (titleEl) titleEl.textContent = s.storeName + ' | ' + s.tagline;
}

function nzApplyPrefs(doc) {
  doc = doc || document;
  const p = nzLoadPrefs();
  doc.body.classList.toggle('nz-dark', !!p.darkMode);
  doc.body.classList.remove('nz-font-small', 'nz-font-medium', 'nz-font-large');
  doc.body.classList.add('nz-font-' + (p.fontSize || 'medium'));
}

/* ---------- المنتجات: دمج الأساسية + التعديلات + الإضافات + الإخفاء ---------- */
function nzGetProducts() {
  const base = (typeof NZ_BASE_PRODUCTS !== 'undefined') ? NZ_BASE_PRODUCTS : [];
  const overrides = (NZ_CLOUD_CACHE && NZ_CLOUD_CACHE.overrides) || {};
  const extra = (NZ_CLOUD_CACHE && NZ_CLOUD_CACHE.extra) || [];
  const hidden = (NZ_CLOUD_CACHE && NZ_CLOUD_CACHE.hidden) || {};

  const merged = base.map(p => {
    const o = overrides[p.id];
    const item = o ? Object.assign({}, p, o) : Object.assign({}, p);
    item.hidden = !!hidden[p.id];
    return item;
  });

  extra.forEach(p => {
    merged.push(Object.assign({ hidden: !!hidden[p.id] }, p));
  });

  return merged;
}

async function nzSaveOverride(id, changes) {
  if (!NZ_CLOUD_CACHE) await nzInit();
  NZ_CLOUD_CACHE.overrides[id] = Object.assign({}, NZ_CLOUD_CACHE.overrides[id], changes);
  return nzCloudPush();
}

async function nzAddProduct(product) {
  if (!NZ_CLOUD_CACHE) await nzInit();
  NZ_CLOUD_CACHE.extra.push(product);
  return nzCloudPush();
}

async function nzDeleteProduct(id) {
  if (!NZ_CLOUD_CACHE) await nzInit();
  // إذا كان منتج أساسي: نخفيه فقط (ما بقدر نحذفه من الملف الأصلي)
  const idxExtra = NZ_CLOUD_CACHE.extra.findIndex(p => p.id === id);
  if (idxExtra > -1) {
    NZ_CLOUD_CACHE.extra.splice(idxExtra, 1);
    return nzCloudPush();
  }
  NZ_CLOUD_CACHE.hidden[id] = true;
  return nzCloudPush();
}

async function nzRestoreProduct(id) {
  if (!NZ_CLOUD_CACHE) await nzInit();
  delete NZ_CLOUD_CACHE.hidden[id];
  return nzCloudPush();
}

async function nzResetAllProducts() {
  if (!NZ_CLOUD_CACHE) await nzInit();
  NZ_CLOUD_CACHE.overrides = {};
  NZ_CLOUD_CACHE.extra = [];
  NZ_CLOUD_CACHE.hidden = {};
  return nzCloudPush();
}

/* ---------- رفع الصور من جهاز المستخدم ---------- */
function nzFileToDataURL(file, maxDim, quality) {
  maxDim = maxDim || 900;
  quality = quality || 0.82;
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      reject(new Error('الملف المختار مش صورة'));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('تعذرت قراءة الملف'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('تعذر فتح الصورة'));
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) { height = Math.round(height * (maxDim / width)); width = maxDim; }
          else { width = Math.round(width * (maxDim / height)); height = maxDim; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
/* ---------- الأدمن ---------- */
function nzGetAdminPassword() {
  return localStorage.getItem(NZ_KEYS.ADMIN_PASS) || 'admin123';
}
function nzSetAdminPassword(pass) {
  localStorage.setItem(NZ_KEYS.ADMIN_PASS, pass);
}
function nzCheckAdminSession() {
  return sessionStorage.getItem(NZ_KEYS.ADMIN_SESSION) === '1';
}
function nzLoginAdmin(pass) {
  if (pass === nzGetAdminPassword()) {
    sessionStorage.setItem(NZ_KEYS.ADMIN_SESSION, '1');
    return true;
  }
  return false;
}
function nzLogoutAdmin() {
  sessionStorage.removeItem(NZ_KEYS.ADMIN_SESSION);
}

/* ---------- تصدير / استيراد نسخة احتياطية كاملة ---------- */
function nzExportBackup() {
  return JSON.stringify({
    site: (NZ_CLOUD_CACHE && NZ_CLOUD_CACHE.site) || {},
    prefs: nzGet(NZ_KEYS.PREFS, {}),
    overrides: (NZ_CLOUD_CACHE && NZ_CLOUD_CACHE.overrides) || {},
    extra: (NZ_CLOUD_CACHE && NZ_CLOUD_CACHE.extra) || [],
    hidden: (NZ_CLOUD_CACHE && NZ_CLOUD_CACHE.hidden) || {}
  }, null, 2);
}
async function nzImportBackup(jsonStr) {
  const data = JSON.parse(jsonStr);
  if (!NZ_CLOUD_CACHE) await nzInit();
  if (data.site) NZ_CLOUD_CACHE.site = data.site;
  if (data.overrides) NZ_CLOUD_CACHE.overrides = data.overrides;
  if (data.extra) NZ_CLOUD_CACHE.extra = data.extra;
  if (data.hidden) NZ_CLOUD_CACHE.hidden = data.hidden;
  if (data.prefs) nzSet(NZ_KEYS.PREFS, data.prefs);
  return nzCloudPush();
}

/* تحميل أولي تلقائي فور ما ينحمّل هالملف، بحيث كل صفحة تقدر تستنى عليه */
const NZ_READY = nzInit();
