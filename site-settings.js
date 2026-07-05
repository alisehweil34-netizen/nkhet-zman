/* =========================================================
   نكهة زمان — محرك الإعدادات المشترك
   يُستخدم في index.html و settings.html
   يعتمد على localStorage (كل الإعدادات محفوظة على هالمتصفح فقط)
   ========================================================= */

const NZ_KEYS = {
  SITE: 'nz_site_settings_v1',
  PREFS: 'nz_user_prefs_v1',
  OVERRIDES: 'nz_product_overrides_v1',
  EXTRA: 'nz_product_extra_v1',
  HIDDEN: 'nz_product_hidden_v1',
  ADMIN_PASS: 'nz_admin_password_v1',
  ADMIN_SESSION: 'nz_admin_session_v1'
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

/* ---------- تخزين عام ---------- */
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

/* ---------- إعدادات الموقع العامة ---------- */
function nzLoadSiteSettings() {
  return Object.assign({}, NZ_DEFAULT_SITE, nzGet(NZ_KEYS.SITE, {}));
}
function nzSaveSiteSettings(settings) {
  return nzSet(NZ_KEYS.SITE, settings);
}
function nzResetSiteSettings() {
  localStorage.removeItem(NZ_KEYS.SITE);
}

/* ---------- تفضيلات المستخدم ---------- */
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
  const overrides = nzGet(NZ_KEYS.OVERRIDES, {});
  const extra = nzGet(NZ_KEYS.EXTRA, []);
  const hidden = nzGet(NZ_KEYS.HIDDEN, {});

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

function nzSaveOverride(id, changes) {
  const overrides = nzGet(NZ_KEYS.OVERRIDES, {});
  overrides[id] = Object.assign({}, overrides[id], changes);
  return nzSet(NZ_KEYS.OVERRIDES, overrides);
}

function nzAddProduct(product) {
  const extra = nzGet(NZ_KEYS.EXTRA, []);
  extra.push(product);
  return nzSet(NZ_KEYS.EXTRA, extra);
}

function nzDeleteProduct(id) {
  // إذا كان منتج أساسي: نخفيه فقط (ما بقدر نحذفه من الملف الأصلي)
  const extra = nzGet(NZ_KEYS.EXTRA, []);
  const idxExtra = extra.findIndex(p => p.id === id);
  if (idxExtra > -1) {
    extra.splice(idxExtra, 1);
    nzSet(NZ_KEYS.EXTRA, extra);
    return;
  }
  const hidden = nzGet(NZ_KEYS.HIDDEN, {});
  hidden[id] = true;
  nzSet(NZ_KEYS.HIDDEN, hidden);
}

function nzRestoreProduct(id) {
  const hidden = nzGet(NZ_KEYS.HIDDEN, {});
  delete hidden[id];
  nzSet(NZ_KEYS.HIDDEN, hidden);
}

function nzResetAllProducts() {
  localStorage.removeItem(NZ_KEYS.OVERRIDES);
  localStorage.removeItem(NZ_KEYS.EXTRA);
  localStorage.removeItem(NZ_KEYS.HIDDEN);
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
    site: nzGet(NZ_KEYS.SITE, {}),
    prefs: nzGet(NZ_KEYS.PREFS, {}),
    overrides: nzGet(NZ_KEYS.OVERRIDES, {}),
    extra: nzGet(NZ_KEYS.EXTRA, []),
    hidden: nzGet(NZ_KEYS.HIDDEN, {})
  }, null, 2);
}
function nzImportBackup(jsonStr) {
  const data = JSON.parse(jsonStr);
  if (data.site) nzSet(NZ_KEYS.SITE, data.site);
  if (data.prefs) nzSet(NZ_KEYS.PREFS, data.prefs);
  if (data.overrides) nzSet(NZ_KEYS.OVERRIDES, data.overrides);
  if (data.extra) nzSet(NZ_KEYS.EXTRA, data.extra);
  if (data.hidden) nzSet(NZ_KEYS.HIDDEN, data.hidden);
}
