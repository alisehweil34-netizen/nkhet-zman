// بيانات المنتجات الأساسية للموقع
const NZ_BASE_PRODUCTS = [
  {
    "id": "p001",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "قشقوان جونيون",
    "price": "10.00",
    "unit": "د.أ/كغ",
    "img": "prod_061.jpg",
    "alt": "قشقوان جونيون"
  },
  {
    "id": "p002",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "لبنة جرشية  ابو غليون",
    "price": "4.00",
    "unit": "د.أ/كغ",
    "img": "prod_091.jpg",
    "alt": "لبنة جرشية  ابو غليون"
  },
  {
    "id": "p003",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "لبن مخيض",
    "price": "0.70",
    "unit": "د.أ/كغ",
    "img": "prod_090.jpg",
    "alt": "لبن مخيض"
  },
  {
    "id": "p004",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة مغلية قزحة",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_063.jpg",
    "alt": "جبنة مغلية قزحة"
  },
  {
    "id": "p005",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة مبسترة",
    "price": "5.50",
    "unit": "د.أ/كغ",
    "img": "prod_064.jpg",
    "alt": "جبنة مبسترة"
  },
  {
    "id": "p006",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة عكاوي",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_065.jpg",
    "alt": "جبنة عكاوي"
  },
  {
    "id": "p007",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "لبنة جامدة بالزيت",
    "price": "7.00",
    "unit": "د.أ/كغ",
    "img": "prod_066.jpg",
    "alt": "لبنة جامدة بالزيت"
  },
  {
    "id": "p008",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة شدر بولندي",
    "price": "8.00",
    "unit": "د.أ/كغ",
    "img": "prod_067.jpg",
    "alt": "جبنة شدر بولندي"
  },
  {
    "id": "p009",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة حلوم",
    "price": "7.50",
    "unit": "د.أ/كغ",
    "img": "prod_068.jpg",
    "alt": "جبنة حلوم"
  },
  {
    "id": "p010",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة سنابل",
    "price": "7.50",
    "unit": "د.أ/كغ",
    "img": "pord_105.jpeg",
    "alt": "جبنة سنابل"
  },
  {
    "id": "p011",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة فيتا السعودية",
    "price": "4.25",
    "unit": "د.أ/كغ",
    "img": "pord_093.jpeg",
    "alt": "جبنة فيتا السعودية"
  },
  {
    "id": "p012",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "لبنة حليبنا تركية",
    "price": "4.50",
    "unit": "د.أ/كغ",
    "img": "prod_071.jpg",
    "alt": "لبنة حليبنا تركية"
  },
  {
    "id": "p013",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة موزريلا حليبنا",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_072.jpg",
    "alt": "جبنة موزريلا حليبنا"
  },
  {
    "id": "p014",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة موزريلا بوك",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_073.jpg",
    "alt": "جبنة موزريلا بوك"
  },
  {
    "id": "p015",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة ايدام فريكو",
    "price": "13.00",
    "unit": "د.أ/كغ",
    "img": "prod_074.jpg",
    "alt": "جبنة ايدام فريكو"
  },
  {
    "id": "p016",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة قودا هولندي",
    "price": "8.00",
    "unit": "د.أ/كغ",
    "img": "prod_075.jpg",
    "alt": "جبنة قودا هولندي"
  },
  {
    "id": "p017",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة ايدام هولندي",
    "price": "8.00",
    "unit": "د.أ/كغ",
    "img": "prod_075.jpg",
    "alt": "جبنة ايدام هولندي"
  },
  {
    "id": "p018",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "موزريلا ارجنتيني",
    "price": "5.75",
    "unit": "د.أ/كغ",
    "img": "prod_094.jpeg",
    "alt": "موزريلا ارجنتيني"
  },
  {
    "id": "p019",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "مكس اجبان",
    "price": "6.50",
    "unit": "د.أ/كغ",
    "img": "prod_092",
    "alt": "جبنة اريش"
  },
  {
    "id": "p020",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "لبنة طرية",
    "price": "3.25",
    "unit": "د.أ/كغ",
    "img": "prod_076.jpg",
    "alt": "لبنة طرية"
  },
  {
    "id": "p021",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة مغلية محلب",
    "price": "6.50",
    "unit": "د.أ/كغ",
    "img": "prod_063.jpg",
    "alt": "جبنة مغلية محلب"
  },
  {
    "id": "p022",
    "category": "cat-dairy",
    "categoryName": "الألبان والأجبان",
    "name": "جبنة مغلية مستكة",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_063.jpg",
    "alt": "جبنة مغلية مستكة"
  },
  {
    "id": "p023",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "روست حبش نعمة مدخن",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_008.jpg",
    "alt": "روست حبش نعمة مدخن"
  },
  {
    "id": "p024",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "بسطرمة",
    "price": "15.00",
    "unit": "د.أ/كغ",
    "img": "pord_095.jpeg",
    "alt": "روست حبش نعمة مدخن"
  },
  {
    "id": "p025",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "سنيورة بقري سادة",
    "price": "3.75",
    "unit": "د.أ/كغ",
    "img": "prod_009.jpg",
    "alt": "سنيورة بقري سادة"
  },
  {
    "id": "p026",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "سنيورة بقري فلفل",
    "price": "3.75",
    "unit": "د.أ/كغ",
    "img": "prod_010.jpg",
    "alt": "سنيورة بقري فلفل"
  },
  {
    "id": "p027",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "سنيورة بقري زيتون",
    "price": "3.75",
    "unit": "د.أ/كغ",
    "img": "prod_011.jpg",
    "alt": "سنيورة بقري زيتون"
  },
  {
    "id": "p028",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "سلامي مدخن بقري",
    "price": "7.00",
    "unit": "د.أ/كغ",
    "img": "pord_096.jpeg",
    "alt": "سنيورة بقري زيتون"
  },
  {
    "id": "p029",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "روست حبش جاجة",
    "price": "10.00",
    "unit": "د.أ/كغ",
    "img": "prod_012.jpg",
    "alt": "روست حبش جاجة"
  },
  {
    "id": "p030",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "حبش مدخن طول كرم سادة",
    "price": "3.00",
    "unit": "د.أ/كغ",
    "img": "pord_097.jpeg",
    "alt": "حبش مدخن طول كرم سادة"
  },
  {
    "id": "p031",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "حبش مدخن فلفل طول كرم",
    "price": "3.00",
    "unit": "د.أ/كغ",
    "img": "pord_097.jpeg",
    "alt": "حبش مدخن فلفل طول كرم"
  },
  {
    "id": "p032",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "حبش مدخن طولكرم زيتون",
    "price": "3.00",
    "unit": "د.أ/كغ",
    "img": "pord_097.jpeg",
    "alt": "حبش مدخن طولكرم زيتون"
  },
  {
    "id": "p033",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "اسلامية سادة",
    "price": "4.50",
    "unit": "د.أ/كغ",
    "img": "prod_013.jpg",
    "alt": "اسلامية سادة"
  },
  {
    "id": "p034",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "اسلامية زيتون",
    "price": "4.75",
    "unit": "د.أ/كغ",
    "img": "pord_098.jpeg",
    "alt": "اسلامية زيتون"
  },
  {
    "id": "p035",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "اسلامية فلفل",
    "price": "4.50",
    "unit": "د.أ/كغ",
    "img": "prod_013.jpg",
    "alt": "اسلامية فلفل"
  },
  {
    "id": "p036",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "روست اسلامية",
    "price": "8.50",
    "unit": "د.أ/كغ",
    "img": "prod_014.jpg",
    "alt": "روست اسلامية"
  },
  {
    "id": "p037",
    "category": "cat-meat",
    "categoryName": "اللحوم والمقرمشات",
    "name": "تيركي كنز",
    "price": "5.50",
    "unit": "د.أ/كغ",
    "img": "prod_015.jpg",
    "alt": "تيركي كنز"
  },
  {
    "id": "p038",
    "category": "cat-salad",
    "categoryName": "السلطات والمقبلات",
    "name": "سلطة ايدام",
    "price": "8.00",
    "unit": "د.أ/كغ",
    "img": "prod_001.jpg",
    "alt": "سلطة ايدام"
  },
  {
    "id": "p039",
    "category": "cat-salad",
    "categoryName": "السلطات والمقبلات",
    "name": "محمرة",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_002.jpg",
    "alt": "محمرة"
  },
  {
    "id": "p040",
    "category": "cat-salad",
    "categoryName": "السلطات والمقبلات",
    "name": "سلطة مقدوس",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "pord_108.jpeg",
    "alt": "سلطة مقدوس"
  },
  {
    "id": "p041",
    "category": "cat-salad",
    "categoryName": "السلطات والمقبلات",
    "name": "سلطة فلفل",
    "price": "3.50",
    "unit": "د.أ/كغ",
    "img": "prod_004.jpg",
    "alt": "سلطة فلفل"
  },
  {
    "id": "p042",
    "category": "cat-salad",
    "categoryName": "السلطات والمقبلات",
    "name": "يلنجي",
    "price": "5.50",
    "unit": "د.أ/كغ",
    "img": "prod_005.jpg",
    "alt": "يلنجي"
  },
  {
    "id": "p043",
    "category": "cat-salad",
    "categoryName": "السلطات والمقبلات",
    "name": "سلطة زيتون سوبر",
    "price": "4.00",
    "unit": "د.أ/كغ",
    "img": "prod_006.jpg",
    "alt": "سلطة زيتون سوبر"
  },
  {
    "id": "p044",
    "category": "cat-salad",
    "categoryName": "السلطات والمقبلات",
    "name": "سلطة فيتا",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_107.png",
    "alt": "سلطة فيتا"
  },
  {
    "id": "p045",
    "category": "cat-salad",
    "categoryName": "السلطات والمقبلات",
    "name": "سلطة زيتون",
    "price": "3.00",
    "unit": "د.أ/كغ",
    "img": "prod_007.jpg",
    "alt": "سلطة زيتون"
  },
  {
    "id": "p046",
    "category": "cat-salad",
    "categoryName": "السلطات والمقبلات",
    "name": "سلطة قودا",
    "price": "8.00",
    "unit": "د.أ/كغ",
    "img": "prod_001.jpg",
    "alt": "سلطة قودا"
  },
  {
    "id": "p047",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "خيار بيبي",
    "price": "2.00",
    "unit": "د.أ/كغ",
    "img": "prod_043.jpg",
    "alt": "خيار بيبي"
  },
  {
    "id": "p048",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "مخلل مشكل",
    "price": "1.00",
    "unit": "د.أ/كغ",
    "img": "prod_044.jpg",
    "alt": "مخلل مشكل"
  },
  {
    "id": "p049",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "خيار امريكي",
    "price": "3.00",
    "unit": "د.أ/كغ",
    "img": "prod_045.jpg",
    "alt": "خيار امريكي"
  },
  {
    "id": "p050",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "فلفل مكسيكي",
    "price": "1.75",
    "unit": "د.أ/كغ",
    "img": "prod_046.jpg",
    "alt": "فلفل مكسيكي"
  },
  {
    "id": "p051",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "لفت",
    "price": "1.00",
    "unit": "د.أ/كغ",
    "img": "prod_047.jpg",
    "alt": "لفت"
  },
  {
    "id": "p052",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "مقدوس سوبر",
    "price": "4.00",
    "unit": "د.أ/كغ",
    "img": "prod_003.jpg",
    "alt": "مقدوس سوبر"
  },
  {
    "id": "p053",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "مقدوس سوبر نكهة زمان",
    "price": "5.50",
    "unit": "د.أ/كغ",
    "img": "prod_003.jpg",
    "alt": "مقدوس سوبر نكهة زمان"
  },
  {
    "id": "p054",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "زيتون نبالي",
    "price": "3.00",
    "unit": "د.أ/كغ",
    "img": "prod_048.jpg",
    "alt": "زيتون نبالي"
  },
  {
    "id": "p055",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "زيتون نصوحي",
    "price": "3.50",
    "unit": "د.أ/كغ",
    "img": "prod_048.jpg",
    "alt": "زيتون نصوحي"
  },
  {
    "id": "p056",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "هلبينو",
    "price": "2.75",
    "unit": "د.أ/كغ",
    "img": "prod_049.jpg",
    "alt": "هلبينو"
  },
  {
    "id": "p057",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "زيتون جرجيري",
    "price": "4.00",
    "unit": "د.أ/كغ",
    "img": "prod_050.jpg",
    "alt": "زيتون جرجيري"
  },
  {
    "id": "p058",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "زيتون اسباني حب",
    "price": "4.00",
    "unit": "د.أ/كغ",
    "img": "prod_055.jpg",
    "alt": "زيتون اسباني حب"
  },
  {
    "id": "p059",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "ثوم",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_052.jpg",
    "alt": "ثوم"
  },
  {
    "id": "p060",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "شطة",
    "price": "2.00",
    "unit": "د.أ/كغ",
    "img": "prod_053.jpg",
    "alt": "شطة"
  },
  {
    "id": "p061",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "زيتون اسود كلمتا",
    "price": "3.00",
    "unit": "د.أ/كغ",
    "img": "prod_054.jpg",
    "alt": "زيتون اسود كلمتا"
  },
  {
    "id": "p062",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "زيتون شرائح اسباني",
    "price": "5.00",
    "unit": "د.أ/كغ",
    "img": "prod_051.jpg",
    "alt": "زيتون شرائح اسباني"
  },
  {
    "id": "p063",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "بندورة مجففة",
    "price": "8.00",
    "unit": "د.أ/كغ",
    "img": "prod_056.jpg",
    "alt": "بندورة مجففة"
  },
  {
    "id": "p064",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "زهرة",
    "price": "2.00",
    "unit": "د.أ/كغ",
    "img": "prod_057.jpg",
    "alt": "زهرة"
  },
  {
    "id": "p065",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "فقوس",
    "price": "3.00",
    "unit": "د.أ/كغ",
    "img": "prod_058.jpg",
    "alt": "فقوس"
  },
  {
    "id": "p066",
    "category": "cat-pickles",
    "categoryName": "المخللات والزيتون",
    "name": "ملفوف احمر",
    "price": "2.00",
    "unit": "د.أ/كغ",
    "img": "prod_059.jpg",
    "alt": "ملفوف احمر"
  },
  {
    "id": "p067",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "قزحة حب",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_019.jpg",
    "alt": "قزحة حب"
  },
  {
    "id": "p068",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "سمسم",
    "price": "4.00",
    "unit": "د.أ/كغ",
    "img": "prod_020.jpg",
    "alt": "سمسم"
  },
  {
    "id": "p069",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "صنوبر",
    "price": "35.00",
    "unit": "د.أ/كغ",
    "img": "prod_021.jpg",
    "alt": "صنوبر"
  },
  {
    "id": "p070",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "بهارات منسف",
    "price": "9.00",
    "unit": "د.أ/كغ",
    "img": "prod_022.jpg",
    "alt": "بهارات منسف"
  },
  {
    "id": "p071",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "جميد كركي  عادي .محوج",
    "price": "12.00",
    "unit": "د.أ/كغ",
    "img": "prod_023.jpg",
    "alt": "جميد كركي  عادي .محوج"
  },
  {
    "id": "p072",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "سمنة غنم بلدي",
    "price": "12.00",
    "unit": "د.أ/كغ",
    "img": "pord_109.jpeg",
    "alt": "سمنة غنم بلدي"
  },
  {
    "id": "p073",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "زيت زيتون",
    "price": "9.00",
    "unit": "د.أ/كغ",
    "img": "prod_025.jpg",
    "alt": "زيت زيتون"
  },
  {
    "id": "p074",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "دبس تمر",
    "price": "3.50",
    "unit": "د.أ/كغ",
    "img": "prod_026.jpg",
    "alt": "دبس تمر"
  },
  {
    "id": "p075",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "اوريغانو",
    "price": "10.00",
    "unit": "د.أ/كغ",
    "img": "pord_100.jpeg",
    "alt": "دبس تمر"
  },
  {
    "id": "p076",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "حلاوة قوقا فستق",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_027.jpg",
    "alt": "حلاوة قوقا فستق"
  },
  {
    "id": "p077",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "حلاوة قوقا شو كولاتة",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_028.jpg",
    "alt": "حلاوة قوقا شو كولاتة"
  },
  {
    "id": "p078",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "حلاوة قوقا زيرو",
    "price": "10.00",
    "unit": "د.أ/كغ",
    "img": "prod_027.jpg",
    "alt": "حلاوة قوقا زيرو"
  },
  {
    "id": "p079",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "حلاوة سرور فستق",
    "price": "4.00",
    "unit": "د.أ/كغ",
    "img": "pord_101.jpeg",
    "alt": "حلاوة سرور فستق"
  },
  {
    "id": "p080",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "مربى مشمش",
    "price": "3.25",
    "unit": "د.أ/كغ",
    "img": "prod_029.jpg",
    "alt": "مربى مشمش"
  },
  {
    "id": "p081",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "مربى فرولة",
    "price": "3.25",
    "unit": "د.أ/كغ",
    "img": "prod_030.jpg",
    "alt": "مربى فرولة"
  },
  {
    "id": "p082",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "مربى تين",
    "price": "3.25",
    "unit": "د.أ/كغ",
    "img": "prod_106.jpeg",
    "alt": "مربى تين"
  },
  {
    "id": "p083",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "مربى توت",
    "price": "3.25",
    "unit": "د.أ/كغ",
    "img": "prod_031.jpg",
    "alt": "مربى توت"
  },
  {
    "id": "p084",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "مربى كرز",
    "price": "4.00",
    "unit": "د.أ/كغ",
    "img": "prod_032.jpg",
    "alt": "مربى كرز"
  },
  {
    "id": "p085",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "دبس رمان",
    "price": "3.25",
    "unit": "د.أ/كغ",
    "img": "prod_033.jpg",
    "alt": "دبس رمان"
  },
  {
    "id": "p086",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "شوكولاتة دهن شو كوليك",
    "price": "3.00",
    "unit": "د.أ/كغ",
    "img": "prod_034.jpg",
    "alt": "شوكولاتة دهن شو كوليك"
  },
  {
    "id": "p087",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "لوتس دهن",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "pord_102.jpeg",
    "alt": "شوكولاتة دهن شو كوليك"
  },
  {
    "id": "p088",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "بستاشيو دهن",
    "price": "9.00",
    "unit": "د.أ/كغ",
    "img": "prod_035.jpg",
    "alt": "بستاشيو دهن"
  },
  {
    "id": "p089",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "بستاشيو كنافة",
    "price": "10.00",
    "unit": "د.أ/كغ",
    "img": "prod_035.jpg",
    "alt": "بستاشيو كنافة"
  },
  {
    "id": "p090",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "طحينية الكسيح",
    "price": "3.25",
    "unit": "د.أ/كغ",
    "img": "pord_103.jpeg",
    "alt": "بستاشيو كنافة"
  },
  {
    "id": "p091",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "زبدة جولدينا",
    "price": "3.00",
    "unit": "د.أ/كغ",
    "img": "prod_024.jpg",
    "alt": "زبدة جولدينا"
  },
  {
    "id": "p092",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "زبدة غنم بلدي",
    "price": "7.00",
    "unit": "د.أ/كغ",
    "img": "prod_036.jpg",
    "alt": "زبدة غنم بلدي"
  },
  {
    "id": "p093",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "دبس فليفلة بلدي",
    "price": "4.00",
    "unit": "د.أ/كغ",
    "img": "pord_104.jpeg",
    "alt": "زبدة غنم بلدي"
  },
  {
    "id": "p094",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "جميد باشا",
    "price": "5.50",
    "unit": "د.أ/كغ",
    "img": "prod_037.jpg",
    "alt": "جميد باشا"
  },
  {
    "id": "p095",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "عمبة بودر عراقي",
    "price": "5.00",
    "unit": "د.أ/كغ",
    "img": "prod_105.jpg.jpeg",
    "alt": "زبدة غنم بلدي"
  },
  {
    "id": "p096",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "لوز نصاص",
    "price": "8.50",
    "unit": "د.أ/كغ",
    "img": "prod_038.jpg",
    "alt": "لوز نصاص"
  },
  {
    "id": "p097",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "لوز ارباع",
    "price": "8.50",
    "unit": "د.أ/كغ",
    "img": "prod_039.jpg",
    "alt": "لوز رباع"
  },
  {
    "id": "p098",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "جوز هند",
    "price": "4.00",
    "unit": "د.أ/كغ",
    "img": "prod_040.jpg",
    "alt": "جوز هند"
  },
  {
    "id": "p099",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "زبيب",
    "price": "4.50",
    "unit": "د.أ/كغ",
    "img": "prod_041.jpg",
    "alt": "زبيب"
  },
  {
    "id": "p100",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "زيت زيتون تونسي",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_025.jpg",
    "alt": "زيت زيتون تونسي"
  },
  {
    "id": "p101",
    "category": "cat-misc",
    "categoryName": "متفرقات ومؤونة",
    "name": "جميد سوري",
    "price": "6.00",
    "unit": "د.أ/كغ",
    "img": "prod_042.jpg",
    "alt": "جميد سوري"
  }
];
