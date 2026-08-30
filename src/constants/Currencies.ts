export interface CurrencyMeta {
  symbol: string;
  flag: string;
  rate: number;
  name: string;
}

export const CURRENCY_RATES: Record<string, CurrencyMeta> = {
  SAR: { symbol: 'SAR', flag: '🇸🇦', rate: 1.0, name: 'Saudi Riyal' },
  USD: { symbol: '$', flag: '🇺🇸', rate: 0.27, name: 'US Dollar' },
  AED: { symbol: 'AED', flag: '🇦🇪', rate: 0.98, name: 'UAE Dirham' },
  INR: { symbol: '₹', flag: '🇮🇳', rate: 22.5, name: 'Indian Rupee' },
  EUR: { symbol: '€', flag: '🇪🇺', rate: 0.25, name: 'Euro' }
};

export function formatMoney(amountSAR: number, currency: string, showSymbol = true): string {
  const meta = CURRENCY_RATES[currency] || CURRENCY_RATES.SAR;
  const converted = (amountSAR || 0) * meta.rate;
  
  // Custom format using toFixed for React Native compatibility
  const formatted = converted.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return showSymbol ? `${meta.symbol} ${formatted}` : formatted;
}

export interface RegionConfig {
  regionCode: string;
  countryName: string;
  flag: string;
  currency: string;
  currencySymbol: string;
  nationality: string;
  parentName: string;
  cardBrand: string;
  cardNetwork: string;
  cardScheme: string;
  childNames: Record<string, string>;
  phoneCountryPill: string;
  phoneSample: string;
  phonePlaceholder: string;
  regulator: string;
  regulatorTerms: string;
  idLabel: string;
  idSample: string;
  kycTitle: string;
  kycSub: string;
  kycStatusText: string;
  kycDesc: string;
  fundingSub: string;
  banks: string[];
  accountTypeLabel: string;
  accountNumberSample: string;
  openBankingBadge: string;
  parentAccountCompliance: string;
  sampleMerchant: string;
  sampleCafeteria: string;
  sampleGaming: string;
}

export function getAppRegionConfig(curr: string, lang: string): RegionConfig {
  // 1. India Region (Triggered by INR currency OR Telugu/Hindi/Tamil languages)
  if (curr === 'INR' || lang === 'te' || lang === 'hi' || lang === 'ta') {
    return {
      regionCode: 'IN',
      countryName: 'India',
      flag: '🇮🇳',
      currency: 'INR',
      currencySymbol: '₹',
      nationality: 'Indian 🇮🇳',
      parentName: 'Rajesh Sharma',
      cardBrand: 'AMANAH JUNIOR',
      cardNetwork: 'RuPay',
      cardScheme: 'RuPay',
      childNames: {
        sara: 'Sara Sharma',
        omar: 'Aman Sharma',
        youssef: 'Rohan Sharma'
      },
      phoneCountryPill: '🇮🇳 +91',
      phoneSample: '98 7654 3210',
      phonePlaceholder: '9X XXXX XXXX',
      regulator: 'RBI & NPCI',
      regulatorTerms: 'By proceeding you agree to Reserve Bank of India (RBI) & NPCI digital banking terms.',
      idLabel: 'Aadhaar / PAN Card / DigiLocker (01.4)',
      idSample: 'Aadhaar: 4589 •••• •••• 9012',
      kycTitle: 'DigiLocker & UIDAI KYC Verification',
      kycSub: 'National Single Sign-On (DigiLocker / Aadhaar)',
      kycStatusText: 'DigiLocker Aadhaar e-KYC Verified (Level 3)',
      kycDesc: 'Fully authorized for multi-child banking governance under Reserve Bank of India (RBI) rules.',
      fundingSub: 'Link your primary Indian bank account',
      banks: [
        'HDFC Bank (एचडीएफसी बैंक)',
        'State Bank of India (SBI - భారతీయ స్టేట్ బ్యాంక్)',
        'ICICI Bank (ఐసీஐシーआई बैंक)',
        'Axis Bank (యాక్సిస్ బ్యాంக்)',
        'Kotak Mahindra Bank'
      ],
      accountTypeLabel: 'Indian Bank Account & IFSC / UPI ID',
      accountNumberSample: 'A/C: 50100234567890 (IFSC: HDFC0001234)',
      openBankingBadge: '✓ RBI & NPCI Open Banking / UPI AutoPay Direct Link Established',
      parentAccountCompliance: 'Your AMANAH Parent Governance Account is active and verified under RBI & NPCI regulations.',
      sampleMerchant: 'Oxford Book Store & Stationery',
      sampleCafeteria: 'School Canteen / Cafeteria',
      sampleGaming: 'PlayStation Store India'
    };
  }

  // 2. United States Region
  if (curr === 'USD') {
    return {
      regionCode: 'US',
      countryName: 'United States',
      flag: '🇺🇸',
      currency: 'USD',
      currencySymbol: '$',
      nationality: 'American 🇺🇸',
      parentName: 'David Miller',
      cardBrand: 'AMANAH TEEN',
      cardNetwork: 'VISA',
      cardScheme: 'VISA',
      childNames: {
        sara: 'Sara Miller',
        omar: 'Oliver Miller',
        youssef: 'Ethan Miller'
      },
      phoneCountryPill: '🇺🇸 +1',
      phoneSample: '415 555 2671',
      phonePlaceholder: '(555) 000-0000',
      regulator: 'US Fed & FinCEN',
      regulatorTerms: 'By proceeding you agree to US Federal electronic banking regulations.',
      idLabel: 'US SSN / Tax ID (01.4)',
      idSample: 'SSN: •••-••-8492',
      kycTitle: 'FinCEN & Plaid KYC Verification',
      kycSub: 'National Identity & SSN Verification',
      kycStatusText: 'FinCEN Identity Verified (Level 3)',
      kycDesc: 'Fully authorized for sovereign family banking under US financial regulations.',
      fundingSub: 'Link your primary US bank account',
      banks: [
        'Chase Bank (JPMorgan Chase)',
        'Bank of America',
        'Wells Fargo Bank',
        'Citibank'
      ],
      accountTypeLabel: 'US Routing & Checking Account Number',
      accountNumberSample: 'Routing: 021000021 · Checking: •••• 4892',
      openBankingBadge: '✓ FedNow & Plaid Open Banking Link Established',
      parentAccountCompliance: 'Your AMANAH Parent Governance Account is active and verified under US Banking regulations.',
      sampleMerchant: 'Barnes & Noble Booksellers',
      sampleCafeteria: 'Campus Cafeteria',
      sampleGaming: 'PlayStation Store US'
    };
  }

  // 3. UAE Region
  if (curr === 'AED') {
    return {
      regionCode: 'AE',
      countryName: 'UAE',
      flag: '🇦🇪',
      currency: 'AED',
      currencySymbol: 'د.إ',
      nationality: 'Emirati 🇦🇪',
      parentName: 'Rashid Al-Nuaimi',
      cardBrand: 'AMANAH YOUTH',
      cardNetwork: 'Jaywan',
      cardScheme: 'Jaywan',
      childNames: {
        sara: 'Sara Al-Nuaimi',
        omar: 'Omar Al-Nuaimi',
        youssef: 'Zayed Al-Nuaimi'
      },
      phoneCountryPill: '🇦🇪 +971',
      phoneSample: '50 123 4567',
      phonePlaceholder: '5X XXX XXXX',
      regulator: 'CBUAE',
      regulatorTerms: 'By proceeding you agree to Central Bank of the UAE electronic banking terms.',
      idLabel: 'Emirates ID (01.4)',
      idSample: '784-1986-1234567-1',
      kycTitle: 'UAE PASS & CBUAE KYC Verification',
      kycSub: 'National Digital Identity (UAE PASS)',
      kycStatusText: 'UAE PASS Biometrics Verified (Level 3)',
      kycDesc: 'Fully authorized for multi-child banking governance under CBUAE regulations.',
      fundingSub: 'Link your primary UAE bank account',
      banks: [
        'Emirates NBD (بنك الإمارات دبي الوطني)',
        'Abu Dhabi Commercial Bank (ADCB)',
        'First Abu Dhabi Bank (FAB)',
        'Dubai Islamic Bank (DIB)'
      ],
      accountTypeLabel: 'UAE IBAN Number',
      accountNumberSample: 'AE21 0330 0000 1234 5678 901',
      openBankingBadge: '✓ CBUAE Open Banking Direct Link Established',
      parentAccountCompliance: 'Your AMANAH Parent Governance Account is active and verified under CBUAE regulations.',
      sampleMerchant: 'Kinokuniya Book World Dubai',
      sampleCafeteria: 'School Canteen',
      sampleGaming: 'Virgin Megastore Gaming'
    };
  }

  // 4. European Union Region
  if (curr === 'EUR') {
    return {
      regionCode: 'EU',
      countryName: 'European Union',
      flag: '🇪🇺',
      currency: 'EUR',
      currencySymbol: '€',
      nationality: 'European 🇪🇺',
      parentName: 'Stefan Weber',
      cardBrand: 'AMANAH JUNIOR',
      cardNetwork: 'Mastercard',
      cardScheme: 'Mastercard',
      childNames: {
        sara: 'Sara Weber',
        omar: 'Lukas Weber',
        youssef: 'Leon Weber'
      },
      phoneCountryPill: '🇪🇺 +49',
      phoneSample: '170 1234567',
      phonePlaceholder: '1XX XXXXXXX',
      regulator: 'ECB & EBA',
      regulatorTerms: 'By proceeding you agree to European Union PSD2 banking regulations.',
      idLabel: 'EU National ID / Passport (01.4)',
      idSample: 'EU-ID: T220001293',
      kycTitle: 'eIDAS & European Central Bank KYC',
      kycSub: 'eIDAS Digital Identity Verification',
      kycStatusText: 'eIDAS Biometrics Verified (Level 3)',
      kycDesc: 'Fully authorized for family banking governance under PSD2 & ECB regulations.',
      fundingSub: 'Link your primary European bank account',
      banks: [
        'Deutsche Bank',
        'BNP Paribas',
        'Banco Santander',
        'ING Group'
      ],
      accountTypeLabel: 'SEPA IBAN Number',
      accountNumberSample: 'DE89 3704 0044 0532 0130 00',
      openBankingBadge: '✓ PSD2 Open Banking Direct Link Established',
      parentAccountCompliance: 'Your AMANAH Parent Governance Account is active and verified under ECB/PSD2 regulations.',
      sampleMerchant: 'Thalia Buchhandlung',
      sampleCafeteria: 'School Bistro',
      sampleGaming: 'PlayStation Store Europe'
    };
  }

  // 5. Default: Saudi Arabia Region (SAR / Arabic)
  return {
    regionCode: 'SA',
    countryName: 'Saudi Arabia',
    flag: '🇸🇦',
    currency: 'SAR',
    currencySymbol: 'ر.س',
    nationality: 'Saudi 🇸🇦',
    parentName: 'Ahmed Al-Farsi',
    cardBrand: 'AMANAH YOUTH',
    cardNetwork: 'mada',
    cardScheme: 'mada',
    childNames: {
      sara: 'Sara Al-Farsi',
      omar: 'Omar Al-Farsi',
      youssef: 'Youssef Al-Farsi'
    },
    phoneCountryPill: '🇸🇦 +966',
    phoneSample: '50 123 4567',
    phonePlaceholder: '5X XXX XXXX',
    regulator: 'SAMA',
    regulatorTerms: 'By proceeding you agree to SAMA electronic banking terms.',
    idLabel: 'Saudi National ID / Iqama (01.4)',
    idSample: '1089345210',
    kycTitle: 'SAMA KYC Verification',
    kycSub: 'National Single Sign-On (Nafath)',
    kycStatusText: 'Nafath Biometrics Verified (Level 3)',
    kycDesc: 'Fully authorized for multi-child banking governance under Saudi Central Bank rules.',
    fundingSub: 'Link your primary Saudi bank account',
    banks: [
      'Al Rajhi Bank (مصرف الراجحي)',
      'Saudi National Bank (SNB الأهلي)',
      'Riyad Bank (بنك الرياض)'
    ],
    accountTypeLabel: 'Saudi IBAN Number',
    accountNumberSample: 'SA44 8000 0456 1234 5678 90',
    openBankingBadge: '✓ SAMA Open Banking Direct Link Established',
    parentAccountCompliance: 'Your AMANAH Parent Governance Account is active and verified under SAMA regulations.',
    sampleMerchant: 'Al Jarir Bookstore',
    sampleCafeteria: 'School Cafeteria',
    sampleGaming: 'PlayStation Store'
  };
}
