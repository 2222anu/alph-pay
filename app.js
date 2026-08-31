/**
 * AMANAH · Master Interactive Application Engine
 * Parent = Control Layer (Indigo) · Child = Spending Layer (Teal)
 * Complete Full Screen Architecture for All 31 Information Architecture Sections
 */

// ==========================================================================
// 1. Multi-Lingual Translation Dictionary (English / Arabic / Telugu / Hindi / Tamil)
// ==========================================================================
const I18N = {
  en: {
    monthlyLimit: 'Monthly Limit',
    perTransactionLimit: 'Per-Transaction Limit',
    blockedMerchants: 'Blocked Merchants',
    appName: 'AMANAH',
    parentTitle: 'Parent Control Layer',
    childTitle: 'Child Spending Layer',
    familyBalance: 'Family Available Balance',
    totalAllocated: 'Total Allocated',
    totalSpent: 'Total Spent',
    weekly: 'Weekly',
    monthly: 'Monthly',
    yearly: 'Yearly',
    childrenAllocation: 'Children Allocation & Governance (02.3)',
    childrenSavingsGoals: 'Children Savings Goals & Milestones (02.8)',
    spendingAnalytics: 'Spending Analytics & Pie Chart (02.6)',
    allFamily: 'All Family',
    recentTx: 'Recent Transactions (02.7)',
    sendMoney: 'Send (08)',
    allowance: 'Allowance (04)',
    praiseReward: 'Praise (Reward)',
    addChild: 'Add Child (03)',
    dashboard: 'Home',
    childrenTab: 'Children',
    paymentsTab: 'Payments',
    txTab: 'Activity',
    moreTab: 'Governance',
    childHome: 'Home',
    childWallet: 'Wallet',
    childScan: 'Scan & Pay',
    childActivity: 'Activity',
    childMore: 'Hub',
    availableToday: 'Can Spend Today',
    dailyLimit: 'Daily Limit',
    savingsGoal: 'Savings Goal',
    saved: 'Saved',
    target: 'Target',
    remaining: 'Remaining',
    boostGoal: '🚀 Boost +50',
    details: 'Details →',
    viewPie: '📊 View Pie',
    activeGoals: 'Active Goals',
    otpTitle: '🔐 Enter 6-Digit Authorization OTP',
    mockOtp: '6-Digit Security Code',
    autoFillOtp: '',
    resendOtp: 'Resend OTP (28s)',
    approveOtp: 'Approve with OTP (10.4) ✓',
    decline: 'Decline (10.5)',
    praiseTitle: 'Send Praise to',
    sendPraiseBtn: 'Send Appreciation & Reward ⭐ →',
    scanQrBtn: 'Scan QR & Pay Merchant (C06)',
    guardrails: 'My Spending Guardrails (C04)',
    managedByDad: 'Managed by Dad',
    digitalCard: 'Digital Debit Card (C03)',
    cardholder: 'CARDHOLDER',
    expires: 'EXPIRES',
    switchLangToast: 'Language switched to English 🇬🇧',
    loginOnboarding: 'Login / Onboarding (01)',
    welcomeParent: 'Welcome to AMANAH',
    welcomeParentSub: 'Sovereign Family Banking · Control & Spending Layer',
    howItWorksTitle: 'How AMANAH Works (01.1):',
    step1Governance: 'Parent Sets Governance: Configure recurring allowances, daily limits & category blacklists.',
    step2ChildSafe: 'Child Spends Safely: Children pay via QR & Youth debit cards within safe guardrails.',
    step3Approvals: 'Real-Time Approvals: Instant push requests to Dad whenever a purchase exceeds limits.',
    getStartedBtn: 'Get Started — Create Account (01.1) →',
    alreadyHaveAccountBtn: 'Already have an account? Log In (01.2)',
    enterMobileTitle: 'Enter Mobile Number',
    enterMobileSub: 'We will send a one-time verification code (OTP)',
    countryMobileLabel: 'Country & Mobile (01.2)',
    samaTerms: 'By proceeding you agree to SAMA electronic banking terms.',
    sendOtpBtn: 'Send OTP Code (01.2) →',
    backBtn: '← Back',
    verifyOtpTitle: 'Verify OTP Code',
    verifyOtpSub: 'Code sent to',
    resendOtpIn: 'Resend code in 28s (01.2)',
    verifyContinueBtn: 'Verify & Continue (01.2) →',
    changePhoneBtn: '← Change Phone Number',
    parentProfileTitle: 'Parent Profile (01.3)',
    parentProfileSub: 'Enter your legal guardian identity details',
    fullLegalName: 'Full Legal Name',
    dobNationality: 'Date of Birth & Nationality',
    emailAddress: 'Email Address',
    confirmIdentityBtn: 'Confirm Identity (01.3) →',
    kycVerificationTitle: 'SAMA KYC Verification',
    nationalSso: 'National Single Sign-On (Nafath)',
    nationalIdLabel: 'Saudi National ID / Iqama (01.4)',
    nafathBiometricsVerified: '✓ Nafath Biometrics Verified (Level 3)',
    nafathSub: 'Fully authorized for multi-child banking governance under Saudi Central Bank rules.',
    continueToSecurityBtn: 'Continue to Security (01.4) →',
    securitySetupTitle: 'Security Setup (01.5)',
    securitySetupSub: 'Create 4-digit App PIN for payment approvals',
    createAppPin: 'Create App PIN (01.5)',
    confirmPin: 'Confirm PIN',
    enableBiometrics: 'Enable Face ID / Biometrics',
    saveSecurityBtn: 'Save Security & Continue (01.5) →',
    fundingAccountTitle: 'Funding Account (01.6)',
    fundingAccountSub: 'Link your primary Saudi bank account',
    selectedBank: 'Selected Bank',
    ibanNumber: 'Saudi IBAN Number',
    samaOpenBankingEstablished: '✓ SAMA Open Banking Direct Link Established',
    linkAccountCompleteBtn: 'Link Account & Complete (01.6) →',
    accountCreatedTitle: 'Account Created! (01.7)',
    accountCreatedSub: 'Your AMANAH Parent Governance Account is active and verified under SAMA regulations.',
    addFirstChildBtn: '+ Add Your First Child (03.2)',
    goToDashboardBtn: 'Go to Dashboard (02) →',
    welcomeYouthTitle: 'Welcome to AMANAH Youth',
    welcomeYouthSub: 'Smart money, allowances & QR spending',
    enterInviteCodeLabel: 'Enter 6-Digit Invitation Code from Dad (C01.1)',
    linkedToParent: 'Linked to Parent: Ahmed Al-Farsi',
    claimInviteBtn: 'Claim Youth Invitation (C01.1) →',
    createYouthPinTitle: 'Create 4-Digit Youth PIN',
    createYouthPinSub: 'Used to confirm QR payments',
    enterPin: 'Enter PIN',
    enableFaceId: 'Enable Face ID',
    activateYouthCardBtn: 'Activate My Youth Card (C01.1) →',
    readyYouthTitle: "You're Ready, Sara! (C01)",
    readyYouthSub: 'Your weekly allowance and daily spending limit are active.',
    openYouthHomeBtn: 'Open My Youth Home (C02) →'
  },
  ar: {
    monthlyLimit: 'الحد الشهري',
    perTransactionLimit: 'حد العملية الواحدة',
    blockedMerchants: 'التجار المحظورون',
    appName: 'أمانة (AMANAH)',
    parentTitle: 'لوحة تحكم ولي الأمر',
    childTitle: 'محفظة الأبناء والإنفاق',
    familyBalance: 'رصيد العائلة المتاح',
    totalAllocated: 'إجمالي المخصص',
    totalSpent: 'إجمالي المصروف',
    weekly: 'أسبوعي',
    monthly: 'شهري',
    yearly: 'سنوي',
    childrenAllocation: 'تخصيص وإدارة مصروف الأبناء (02.3)',
    childrenSavingsGoals: 'أهداف التوفير والإنجازات للأبناء (02.8)',
    spendingAnalytics: 'تحليلات الإنفاق والمخطط الدائري (02.6)',
    allFamily: 'جميع العائلة',
    recentTx: 'أحدث العمليات المالية (02.7)',
    sendMoney: 'تحويل (08)',
    allowance: 'المصروف (04)',
    praiseReward: 'مكافأة وتشجيع',
    addChild: 'إضافة ابن (03)',
    dashboard: 'الرئيسية',
    childrenTab: 'الأبناء',
    paymentsTab: 'المدفوعات',
    txTab: 'العمليات',
    moreTab: 'الإدارة',
    childHome: 'الرئيسية',
    childWallet: 'المحفظة',
    childScan: 'مسح ودفع',
    childActivity: 'النشاط',
    childMore: 'المزيد',
    availableToday: 'المتاح للإنفاق اليوم',
    dailyLimit: 'الحد اليومي',
    savingsGoal: 'هدف التوفير',
    saved: 'تم توفيره',
    target: 'الهدف',
    remaining: 'المتبقي',
    boostGoal: '🚀 دعم +٥٠',
    details: 'التفاصيل ←',
    viewPie: '📊 المخطط',
    activeGoals: 'أهداف نشطة',
    otpTitle: '🔐 أدخل رمز التحقق OTP (6 أرقام)',
    mockOtp: 'رمز أمان مكون من 6 أرقام',
    autoFillOtp: '',
    resendOtp: 'إعادة إرسال الرمز (28 ث)',
    approveOtp: 'الموافقة برمز OTP ✓',
    decline: 'رفض (10.5)',
    praiseTitle: 'إرسال إشادة وتشجيع إلى',
    sendPraiseBtn: 'إرسال المكافأة والتشجيع ⭐ ←',
    scanQrBtn: 'مسح الباركود والدفع للتاجر (C06)',
    guardrails: 'ضوابط وحدود الإنفاق الخاصة بي (C04)',
    managedByDad: 'مُدارة بواسطة الوالد',
    digitalCard: 'بطاقة مدى الرقمية للشباب (C03)',
    cardholder: 'حامل البطاقة',
    expires: 'الانتهاء',
    switchLangToast: 'تم تغيير لغة التطبيق إلى العربية 🇸🇦',
    loginOnboarding: 'تسجيل الدخول / البدء (01)',
    welcomeParent: 'مرحبًا بك في أمانة (AMANAH)',
    welcomeParentSub: 'الخدمات المصرفية العائلية · التحكم والإنفاق',
    howItWorksTitle: 'كيف يعمل تطبيق أمانة (AMANAH) (01.1):',
    step1Governance: 'الأب يحدد الضوابط: تحديد المصروف الدوري والحدود اليومية وحظر الفئات.',
    step2ChildSafe: 'الأبناء ينفقون بأمان: الدفع عبر رمز QR والبطاقات الرقمية ضمن حدود آمنة.',
    step3Approvals: 'موافقات فورية: إشعارات فورية للأب عند تجاوز المشتريات للحد المسموح.',
    getStartedBtn: 'ابدأ الآن — إنشاء حساب جديد (01.1) ←',
    alreadyHaveAccountBtn: 'لديك حساب بالفعل؟ تسجيل الدخول (01.2)',
    enterMobileTitle: 'أدخل رقم الجوال',
    enterMobileSub: 'سنرسل رمز تحقق لمرة واحدة (OTP)',
    countryMobileLabel: 'الدولة ورقم الجوال (01.2)',
    samaTerms: 'بالمتابعة فإنك توافق على شروط البنك المركزي السعودي المصرفية.',
    sendOtpBtn: 'إرسال رمز التحقق (01.2) ←',
    backBtn: 'رجوع ←',
    verifyOtpTitle: 'تحقق من رمز OTP',
    verifyOtpSub: 'تم إرسال الرمز إلى',
    resendOtpIn: 'إعادة إرسال الرمز خلال 28 ث (01.2)',
    verifyContinueBtn: 'تحقق ومتابعة (01.2) ←',
    changePhoneBtn: 'تغيير رقم الجوال ←',
    parentProfileTitle: 'الملف الشخصي لولي الأمر (01.3)',
    parentProfileSub: 'أدخل بيانات هوية ولي الأمر القانوني',
    fullLegalName: 'الاسم القانوني الكامل',
    dobNationality: 'تاريخ الميلاد والجنسية',
    emailAddress: 'البريد الإلكتروني',
    confirmIdentityBtn: 'تأكيد الهوية (01.3) ←',
    kycVerificationTitle: 'توثيق الهوية عبر نفاذ',
    nationalSso: 'النفاذ الوطني الموحد (نفاذ)',
    nationalIdLabel: 'الهوية الوطنية / الإقامة (01.4)',
    nafathBiometricsVerified: '✓ تم التحقق من البصمة عبر نفاذ (المستوى 3)',
    nafathSub: 'مصرح بالكامل لإدارة الحسابات العائلية وفقًا لتعليمات البنك المركزي السعودي.',
    continueToSecurityBtn: 'المتابعة إلى إعدادات الأمان (01.4) ←',
    securitySetupTitle: 'إعداد الأمان ورمز المرور (01.5)',
    securitySetupSub: 'إنشاء رمز PIN مكون من 4 أرقام للموافقة على المدفوعات',
    createAppPin: 'إنشاء رمز PIN (01.5)',
    confirmPin: 'تأكيد رمز PIN',
    enableBiometrics: 'تفعيل بصمة الوجه / البصمة',
    saveSecurityBtn: 'حفظ الأمان والمتابعة (01.5) ←',
    fundingAccountTitle: 'ربط الحساب البنكي (01.6)',
    fundingAccountSub: 'ربط حسابك البنكي السعودي الأساسي',
    selectedBank: 'البنك المختار',
    ibanNumber: 'رقم الآيبان السعودي (IBAN)',
    samaOpenBankingEstablished: '✓ تم ربط الخدمات المصرفية المفتوحة من ساما بنجاح',
    linkAccountCompleteBtn: 'ربط الحساب وإكمال التسجيل (01.6) ←',
    accountCreatedTitle: 'تم إنشاء الحساب بنجاح! (01.7)',
    accountCreatedSub: 'حساب إدارة الأسرة في ألف باي نشط وموثق رسميًا وفق تعليمات ساما.',
    addFirstChildBtn: '+ إضافة أول ابن (03.2)',
    goToDashboardBtn: 'الانتقال إلى لوحة التحكم (02) ←',
    welcomeYouthTitle: 'مرحبًا بك في ألف للشباب',
    welcomeYouthSub: 'إدارة المصروف الذكي والمدفوعات السريعة',
    enterInviteCodeLabel: 'أدخل رمز الدعوة (6 أرقام) من الوالد (C01.1)',
    linkedToParent: 'مرتبط بحساب ولي الأمر: أحمد الفارسي',
    claimInviteBtn: 'تفعيل بطاقة الشاب (C01.1) ←',
    createYouthPinTitle: 'إنشاء رمز PIN للشباب',
    createYouthPinSub: 'يُستخدم لتأكيد عمليات الشراء والمسح',
    enterPin: 'أدخل رمز PIN',
    enableFaceId: 'تفعيل بصمة الوجه',
    activateYouthCardBtn: 'تفعيل بطاقتي الرقمية (C01.1) ←',
    readyYouthTitle: 'أنتِ جاهزة الآن، سارة! (C01)',
    readyYouthSub: 'تم تفعيل المصروف الأسبوعي وحد الإنفاق اليومي بنجاح.',
    openYouthHomeBtn: 'فتح صفحتي الرئيسية (C02) ←'
  },
  te: {
    monthlyLimit: 'నెలవారీ పరిమితి',
    perTransactionLimit: 'లావాదేవీ పరిమితి',
    blockedMerchants: 'నిరోధించబడిన వ్యాపారులు',
    appName: 'అమానా (AMANAH)',
    parentTitle: 'తండ్రి కంట్రోల్ లేయర్ (Parent)',
    childTitle: 'పిల్లల స్పెండింగ్ లేయర్ (Child)',
    familyBalance: 'ఫ్యామిలీ అందుబాటు బ్యాలెన్స్',
    totalAllocated: 'మొత్తం కేటాయింపు',
    totalSpent: 'మొత్తం ఖర్చు',
    weekly: 'వారపు (Weekly)',
    monthly: 'నెలవారీ (Monthly)',
    yearly: 'వార్షిక (Yearly)',
    childrenAllocation: 'పిల్లల బడ్జెట్ కేటాయింపు & పాలన (02.3)',
    childrenSavingsGoals: 'పిల్లల సేవింగ్స్ గోల్స్ & పురోగతి (02.8)',
    spendingAnalytics: 'స్పెండింగ్ అనలిటిక్స్ & పై చార్ట్ (02.6)',
    allFamily: 'మొత్తం ఫ్యామిలీ',
    recentTx: 'ఇటీవలి లావాదేవీలు (02.7)',
    sendMoney: 'డబ్బు పంపు (08)',
    allowance: 'పాకెట్ మనీ (04)',
    praiseReward: 'ప్రశంస & రివార్డ్ ⭐',
    addChild: 'చైల్డ్ జోడించు (03)',
    dashboard: 'హోమ్',
    childrenTab: 'పిల్లలు',
    paymentsTab: 'చెల్లింపులు',
    txTab: 'లావాదేవీలు',
    moreTab: 'పాలన',
    childHome: 'హోమ్',
    childWallet: 'వాలెట్',
    childScan: 'QR స్కాన్ & పే',
    childActivity: 'ఖర్చులు',
    childMore: 'హబ్',
    availableToday: 'ఈ రోజు ఖర్చు పరిమితి',
    dailyLimit: 'రోజువారీ పరిమితి',
    savingsGoal: 'సేవింగ్స్ గోల్',
    saved: 'పొదుపు చేసినవి',
    target: 'లక్ష్యం',
    remaining: 'మిగిలిన మొత్తం',
    boostGoal: '🚀 బూస్ట్ +50',
    details: 'వివరాలు →',
    viewPie: '📊 పై చార్ట్',
    activeGoals: 'యాక్టివ్ గోల్స్',
    otpTitle: '🔐 6-అంకెల ఆథరైజేషన్ OTP నమోదు చేయండి',
    mockOtp: '6-అంకెల సెక్యూరిటీ కోడ్',
    autoFillOtp: '',
    resendOtp: 'తిరిగి పంపు (28s)',
    approveOtp: 'OTP తో ఆమోదించు (10.4) ✓',
    decline: 'తిరస్కరించు (10.5)',
    praiseTitle: 'ప్రశంస & రివార్డ్ పంపు:',
    sendPraiseBtn: 'ప్రశంస & రివార్డ్ పంపు ⭐ →',
    scanQrBtn: 'QR కోడ్ స్కాన్ చేసి పే చేయండి (C06)',
    guardrails: 'నా ఖర్చు నియంత్రణలు (C04)',
    managedByDad: 'తండ్రి ద్వారా నిర్వహించబడుతుంది',
    digitalCard: 'డిజిటల్ డెబిట్ కార్డ్ (C03)',
    cardholder: 'కార్డుదారుని పేరు',
    expires: 'గడువు తేదీ',
    switchLangToast: 'భాష తెలుగులోకి మార్చబడింది 🇮🇳',
    loginOnboarding: 'లాగిన్ / ఆన్‌బోర్డింగ్ (01)',
    welcomeParent: 'అమానా (AMANAH) కు స్వాగతం',
    welcomeParentSub: 'ఫ్యామిలీ బ్యాంకింగ్ · కంట్రోల్ & స్పెండింగ్ లేయర్',
    howItWorksTitle: 'అమానా (AMANAH) ఎలా పనిచేస్తుంది (01.1):',
    step1Governance: 'తండ్రి నియంత్రణలు: రికరింగ్ పాకెట్ మనీ, డైలీ లిమిట్లు & కేటగిరీ బ్లాక్‌లిస్ట్ సెట్ చేయండి.',
    step2ChildSafe: 'పిల్లలు సురక్షితంగా ఖర్చు చేస్తారు: QR & యూత్ డెబిట్ కార్డులతో భద్రమైన పరిమితుల్లో ఖర్చు.',
    step3Approvals: 'రియల్-టైమ్ ఆమోదాలు: కొనుగోలు లిమిట్ దాటినప్పుడు తండ్రికి తక్షణ అప్రూవల్ రిక్వెస్ట్.',
    getStartedBtn: 'ప్రారంభించండి — ఖాతా సృష్టించండి (01.1) →',
    alreadyHaveAccountBtn: 'ఇప్పటికే ఖాతా ఉందా? లాగిన్ అవ్వండి (01.2)',
    enterMobileTitle: 'మొబైల్ నంబర్ నమోదు చేయండి',
    enterMobileSub: 'మేము వన్-టైమ్ వెరిఫికేషన్ కోడ్ (OTP) పంపుతాము',
    countryMobileLabel: 'దేశం & మొబైల్ (01.2)',
    samaTerms: 'కొనసాగడం ద్వారా మీరు బ్యాంకింగ్ నిబంధనలకు అంగీకరిస్తున్నారు.',
    sendOtpBtn: 'OTP కోడ్ పంపండి (01.2) →',
    backBtn: '← వెనుకకు',
    verifyOtpTitle: 'OTP కోడ్‌ను ధృవీకరించండి',
    verifyOtpSub: 'కోడ్ పంపబడిన నంబర్',
    resendOtpIn: '28 సెకన్లలో తిరిగి పంపు (01.2)',
    verifyContinueBtn: 'ధృవీకరించి కొనసాగించండి (01.2) →',
    changePhoneBtn: '← ఫోన్ నంబర్ మార్చండి',
    parentProfileTitle: 'తల్లిదండ్రుల ప్రొఫైల్ (01.3)',
    parentProfileSub: 'మీ గుర్తింపు వివరాలను నమోదు చేయండి',
    fullLegalName: 'పూర్తి పేరు',
    dobNationality: 'పుట్టిన తేదీ & జాతీయత',
    emailAddress: 'ఈమెయిల్ చిరునామా',
    confirmIdentityBtn: 'గుర్తింపును నిర్ధారించండి (01.3) →',
    kycVerificationTitle: 'KYC గుర్తింపు ధృవీకరణ',
    nationalSso: 'నేషనల్ సింగిల్ సైన్-ఆన్ (Nafath)',
    nationalIdLabel: 'నేషనల్ ID / ఇకమా (01.4)',
    nafathBiometricsVerified: '✓ బయోమెట్రిక్స్ ధృవీకరించబడింది (లెవెల్ 3)',
    nafathSub: 'సెంట్రల్ బ్యాంక్ నిబంధనల ప్రకారం ఫ్యామిలీ బ్యాంకింగ్ నిర్వహణకు పూర్తి అనుమతి ఉంది.',
    continueToSecurityBtn: 'సెక్యూరిటీ సెటప్‌కు వెళ్లండి (01.4) →',
    securitySetupTitle: 'సెక్యూరిటీ సెటప్ (01.5)',
    securitySetupSub: 'చెల్లింపుల ఆమోదం కోసం 4-అంకెల పిన్ (PIN) ను సృష్టించండి',
    createAppPin: 'యాప్ పిన్ (PIN) సృష్టించండి (01.5)',
    confirmPin: 'పిన్ (PIN) నిర్ధారించండి',
    enableBiometrics: 'ఫేస్ ID / బయోమెట్రిక్స్ ప్రారంభించండి',
    saveSecurityBtn: 'సెక్యూరిటీ భద్రపరిచి కొనసాగించండి (01.5) →',
    fundingAccountTitle: 'బ్యాంక్ ఖాతా అనుసంధానం (01.6)',
    fundingAccountSub: 'మీ ప్రాథమిక బ్యాంక్ ఖాతాను లింక్ చేయండి',
    selectedBank: 'ఎంచుకున్న బ్యాంక్',
    ibanNumber: 'IBAN ఖాతా నంబర్',
    samaOpenBankingEstablished: '✓ ఓపెన్ బ్యాంకింగ్ డైరెక్ట్ లింక్ విజయవంతమైంది',
    linkAccountCompleteBtn: 'ఖాతాను లింక్ చేసి పూర్తి చేయండి (01.6) →',
    accountCreatedTitle: 'ఖాతా విజయవంతంగా సృష్టించబడింది! (01.7)',
    accountCreatedSub: 'మీ ఆల్ఫ్ పే ఫ్యామిలీ గవర్నెన్స్ ఖాతా యాక్టివ్ అయ్యింది మరియు ధృవీకరించబడింది.',
    addFirstChildBtn: '+ మొదటి చైల్డ్‌ను జోడించండి (03.2)',
    goToDashboardBtn: 'డ్యాష్‌బోర్డ్‌కు వెళ్లండి (02) →',
    welcomeYouthTitle: 'ఆల్ఫ్ యూత్ కు స్వాగతం',
    welcomeYouthSub: 'స్మార్ట్ పాకెట్ మనీ, అలవెన్సులు & QR ఖర్చులు',
    enterInviteCodeLabel: 'తండ్రి ఇచ్చిన 6-అంకెల ఇన్విటేషన్ కోడ్ నమోదు చేయండి (C01.1)',
    linkedToParent: 'లింక్ చేయబడిన తల్లిదండ్రులు: అహ్మద్ అల్-ఫార్సీ',
    claimInviteBtn: 'యూత్ ఇన్విటేషన్‌ను క్లెయిమ్ చేయండి (C01.1) →',
    createYouthPinTitle: '4-అంకెల యూత్ పిన్ సృష్టించండి',
    createYouthPinSub: 'QR చెల్లింపులను నిర్ధారించడానికి ఉపయోగించబడుతుంది',
    enterPin: 'పిన్ (PIN) నమోదు చేయండి',
    enableFaceId: 'ఫేస్ ID ప్రారంభించండి',
    activateYouthCardBtn: 'నా యూత్ కార్డ్‌ను యాక్టివేట్ చేయండి (C01.1) →',
    readyYouthTitle: 'మీరు సిద్ధంగా ఉన్నారు, సారా! (C01)',
    readyYouthSub: 'మీ వారపు పాకెట్ మనీ మరియు రోజువారీ ఖర్చు పరిమితి యాక్టివ్‌గా ఉన్నాయి.',
    openYouthHomeBtn: 'నా యూత్ హోమ్ ఓపెన్ చేయండి (C02) →'
  },
  hi: {
    monthlyLimit: 'मासिक सीमा',
    perTransactionLimit: 'प्रति-लेनदेन सीमा',
    blockedMerchants: 'प्रतिबंधित व्यापारी',
    appName: 'अमानह (AMANAH)',
    parentTitle: 'अभिभावक नियंत्रण (Parent)',
    childTitle: 'बाल खर्च व वॉलेट (Child)',
    familyBalance: 'परिवार उपलब्ध शेष राशि',
    totalAllocated: 'कुल आवंटित राशि',
    totalSpent: 'कुल खर्च',
    weekly: 'साप्ताहिक',
    monthly: 'मासिक',
    yearly: 'वार्षिक',
    childrenAllocation: 'बच्चों का बजट आवंटन एवं नियंत्रण (02.3)',
    childrenSavingsGoals: 'बच्चों के बचत लक्ष्य एवं प्रगति (02.8)',
    spendingAnalytics: 'खर्च विश्लेषण एवं पाई चार्ट (02.6)',
    allFamily: 'संपूर्ण परिवार',
    recentTx: 'हाल के लेन-देन (02.7)',
    sendMoney: 'पैसे भेजें (08)',
    allowance: 'पॉकेट मनी (04)',
    praiseReward: 'प्रशंसा एवं पुरस्कार ⭐',
    addChild: 'बच्चा जोड़ें (03)',
    dashboard: 'होम',
    childrenTab: 'बच्चे',
    paymentsTab: 'भुगतान',
    txTab: 'गतिविधि',
    moreTab: 'प्रशासन',
    childHome: 'होम',
    childWallet: 'वॉलेट',
    childScan: 'स्कैन और भुगतान',
    childActivity: 'गतिविधि',
    childMore: 'हब',
    availableToday: 'आज खर्च करने योग्य',
    dailyLimit: 'दैनिक सीमा',
    savingsGoal: 'बचत लक्ष्य',
    saved: 'बचत की गई',
    target: 'लक्ष्य',
    remaining: 'शेष राशि',
    boostGoal: '🚀 बूस्ट +50',
    details: 'विवरण →',
    viewPie: '📊 पाई चार्ट',
    activeGoals: 'सक्रिय लक्ष्य',
    otpTitle: '🔐 6-अंकीय प्राधिकरण OTP दर्ज करें',
    mockOtp: '6-अंकीय सुरक्षा कोड',
    autoFillOtp: '',
    resendOtp: 'पुनः भेजें (28s)',
    approveOtp: 'OTP से स्वीकृत करें (10.4) ✓',
    decline: 'अस्वीकार करें (10.5)',
    praiseTitle: 'प्रशंसा भेजें:',
    sendPraiseBtn: 'प्रशंसा एवं इनाम भेजें ⭐ →',
    scanQrBtn: 'QR स्कैन करके भुगतान करें (C06)',
    guardrails: 'खर्च सीमाएं व नियम (C04)',
    managedByDad: 'पिता द्वारा प्रबंधित',
    digitalCard: 'डिजिटल डेबिट कार्ड (C03)',
    cardholder: 'कार्डधारक',
    expires: 'समाप्ति तिथि',
    switchLangToast: 'भाषा हिन्दी में बदली गई 🇮🇳',
    loginOnboarding: 'लॉगिन / शुरुआत (01)',
    welcomeParent: 'अमानह (AMANAH) में आपका स्वागत है',
    welcomeParentSub: 'पारिवारिक बैंकिंग · नियंत्रण एवं खर्च लेयर',
    howItWorksTitle: 'अमानह (AMANAH) कैसे काम करता है (01.1):',
    step1Governance: 'अभिभावक नियंत्रण: पॉकेट मनी, दैनिक सीमा एवं श्रेणी प्रतिबंध सेट करें।',
    step2ChildSafe: 'बच्चे सुरक्षित खर्च करते हैं: QR कोड और डेबिट कार्ड से सुरक्षित सीमाओं में खर्च।',
    step3Approvals: 'त्वरित स्वीकृति: सीमा से अधिक खर्च होने पर पिता को तुरंत अनुमति अनुरोध।',
    getStartedBtn: 'शुरू करें — नया खाता बनाएं (01.1) →',
    alreadyHaveAccountBtn: 'क्या पहले से खाता है? लॉगिन करें (01.2)',
    enterMobileTitle: 'मोबाइल नंबर दर्ज करें',
    enterMobileSub: 'हम एक बार का सत्यापन कोड (OTP) भेजेंगे',
    countryMobileLabel: 'देश एवं मोबाइल (01.2)',
    samaTerms: 'आगे बढ़कर आप इलेक्ट्रॉनिक बैंकिंग शर्तों से सहमत होते हैं।',
    sendOtpBtn: 'OTP कोड भेजें (01.2) →',
    backBtn: '← वापस',
    verifyOtpTitle: 'OTP कोड सत्यापित करें',
    verifyOtpSub: 'कोड भेजा गया है',
    resendOtpIn: '28 सेकंड में पुनः भेजें (01.2)',
    verifyContinueBtn: 'सत्यापित करें और आगे बढ़ें (01.2) →',
    changePhoneBtn: '← फोन नंबर बदलें',
    parentProfileTitle: 'अभिभावक प्रोफ़ाइल (01.3)',
    parentProfileSub: 'अपने अभिभावक पहचान विवरण दर्ज करें',
    fullLegalName: 'पूरा कानूनी नाम',
    dobNationality: 'जन्म तिथि एवं राष्ट्रीयता',
    emailAddress: 'ईमेल पता',
    confirmIdentityBtn: 'पहचान की पुष्टि करें (01.3) →',
    kycVerificationTitle: 'KYC सत्यापन',
    nationalSso: 'राष्ट्रीय सिंगल साइन-ऑन (Nafath)',
    nationalIdLabel: 'राष्ट्रीय आईडी / इकामा (01.4)',
    nafathBiometricsVerified: '✓ नफ़ाथ बायोमेट्रिक्स सत्यापित (स्तर 3)',
    nafathSub: 'सऊदी सेंट्रल बैंक के नियमों के तहत बहु-बाल बैंकिंग प्रशासन के लिए पूरी तरह से अधिकृत।',
    continueToSecurityBtn: 'सुरक्षा पर जारी रखें (01.4) →',
    securitySetupTitle: 'सुरक्षा सेटअप (01.5)',
    securitySetupSub: 'भुगतान स्वीकृतियों के लिए 4-अंकीय ऐप पिन बनाएं',
    createAppPin: 'ऐप पिन बनाएं (01.5)',
    confirmPin: 'पिन की पुष्टि करें',
    enableBiometrics: 'फेस आईडी / बायोमेट्रिक्स सक्षम करें',
    saveSecurityBtn: 'सुरक्षा सहेजें और जारी रखें (01.5) →',
    fundingAccountTitle: 'फंडिंग खाता (01.6)',
    fundingAccountSub: 'अपने प्राथमिक सऊदी बैंक खाते को लिंक करें',
    selectedBank: 'चयनित बैंक',
    ibanNumber: 'सऊदी आईबीएएन (IBAN) नंबर',
    samaOpenBankingEstablished: '✓ SAMA ओपन बैंकिंग डायरेक्ट लिंक स्थापित',
    linkAccountCompleteBtn: 'खाता लिंक करें और पूरा करें (01.6) →',
    accountCreatedTitle: 'खाता बनाया गया! (01.7)',
    accountCreatedSub: 'आपका AMANAH पेरेंट गवर्नेंस खाता सक्रिय है और SAMA नियमों के तहत सत्यापित है।',
    addFirstChildBtn: '+ पहला बच्चा जोड़ें (03.2)',
    goToDashboardBtn: 'डैशबोर्ड पर जाएं (02) →',
    welcomeYouthTitle: 'अमानह यूथ (AMANAH Youth) में आपका स्वागत है',
    welcomeYouthSub: 'स्मार्ट पॉकेट मनी, अलाउंस और QR खर्च',
    enterInviteCodeLabel: 'अभिभावक से प्राप्त 6-अंकीय आमंत्रण कोड दर्ज करें (C01.1)',
    linkedToParent: 'लिंक्ड गार्जियन: अहमद अल-फ़ारसी',
    claimInviteBtn: 'यूथ आमंत्रण का दावा करें (C01.1) →',
    createYouthPinTitle: '4-अंकीय यूथ पिन बनाएं',
    createYouthPinSub: 'QR भुगतान की पुष्टि करने के लिए उपयोग किया जाता है',
    enterPin: 'पिन दर्ज करें',
    enableFaceId: 'फेस आईडी सक्षम करें',
    activateYouthCardBtn: 'मेरा यूथ कार्ड सक्रिय करें (C01.1) →',
    readyYouthTitle: 'आप तैयार हैं, सारा! (C01)',
    readyYouthSub: 'आपकी साप्ताहिक पॉकेट मनी और दैनिक खर्च सीमाएं सक्रिय हैं.',
    openYouthHomeBtn: 'मेरा यूथ होम खोलें (C02) →'
  },
  ta: {
    monthlyLimit: 'மாதாந்திர வரம்பு',
    perTransactionLimit: 'ஒரு பரிவர்த்தனை வரம்பு',
    blockedMerchants: 'தடுக்கப்பட்ட வணிகர்கள்',
    countryMobileLabel: 'நாடு மற்றும் மொபைல் (01.2)',
    samaTerms: 'தொடர்வதன் மூலம் நீங்கள் வங்கி விதிமுறைகளை ஏற்றுக்கொள்கிறீர்கள்.',
    sendOtpBtn: 'OTP குறியீட்டை அனுப்பவும் (01.2) →',
    backBtn: '← பின்செல்',
    verifyOtpTitle: 'OTP குறியீட்டை சரிபார்க்கவும்',
    verifyOtpSub: 'குறியீடு அனுப்பப்பட்டது',
    resendOtpIn: '28 வினாடிகளில் மீண்டும் அனுப்பு (01.2)',
    verifyContinueBtn: 'சரிபார்த்து தொடரவும் (01.2) →',
    changePhoneBtn: '← தொலைபேசி எண்ணை மாற்றவும்',
    parentProfileTitle: 'பெற்றோர் சுயவிவரம் (01.3)',
    parentProfileSub: 'உங்கள் அடையாள விவரங்களை உள்ளிடவும்',
    fullLegalName: 'முழு சட்டப்பூர்வ பெயர்',
    dobNationality: 'பிறந்த தேதி & குடியுரிமை',
    emailAddress: 'மின்னஞ்சல் முகவரி',
    confirmIdentityBtn: 'அடையாளத்தை உறுதிப்படுத்தவும் (01.3) →',
    kycVerificationTitle: 'KYC சரிபார்ப்பு',
    nationalSso: 'தேசிய ஒற்றை உள்நுழைவு (Nafath)',
    nationalIdLabel: 'தேசிய அடையாள அட்டை / இகாமா (01.4)',
    nafathBiometricsVerified: '✓ பயோமெட்ரிக்ஸ் சரிபார்க்கப்பட்டது (நிலை 3)',
    nafathSub: 'மைய வங்கி விதிகளின் கீழ் குடும்ப வங்கி நிர்வாகத்திற்கு முழு அனுமதி உள்ளது.',
    continueToSecurityBtn: 'பாதுகாப்பு அமைப்புக்கு தொடரவும் (01.4) →',
    securitySetupTitle: 'பாதுகாப்பு அமைப்பு (01.5)',
    securitySetupSub: 'கட்டண ஒப்புதலுக்காக 4-இலக்க பின்னை உருவாக்கவும்',
    createAppPin: 'பயன்பாட்டு பின்னை உருவாக்கவும் (01.5)',
    confirmPin: 'பின்னை உறுதிப்படுத்தவும்',
    enableBiometrics: 'Face ID / பயோமெட்ரிக்ஸை இயக்கவும்',
    saveSecurityBtn: 'பாதுகாப்பை சேமித்து தொடரவும் (01.5) →',
    fundingAccountTitle: 'வங்கி கணக்கு இணைப்பு (01.6)',
    fundingAccountSub: 'உங்கள் முதன்மை வங்கி கணக்கை இணைக்கவும்',
    selectedBank: 'தேர்ந்தெடுக்கப்பட்ட வங்கி',
    ibanNumber: 'சவுதி IBAN எண்',
    samaOpenBankingEstablished: '✓ ஓபன் பேங்கிங் நேரடி இணைப்பு நிறுவப்பட்டது',
    linkAccountCompleteBtn: 'கணக்கை இணைத்து முடிக்கவும் (01.6) →',
    accountCreatedTitle: 'கணக்கு உருவாக்கப்பட்டது! (01.7)',
    accountCreatedSub: 'உங்கள் ஆல்ஃப் பே பெற்றோர் கணக்கு செயலில் உள்ளது மற்றும் சரிபார்க்கப்பட்டது.',
    addFirstChildBtn: '+ முதல் குழந்தையைச் சேர்க்கவும் (03.2)',
    goToDashboardBtn: 'முகப்புப் பலகைக்குச் செல்லவும் (02) →',
    welcomeYouthTitle: 'ஆல்ஃப் யூத்துக்கு வரவேற்கிறோம்',
    welcomeYouthSub: 'ஸ்மார்ட் பாக்கெட் மணி மற்றும் QR செலவு',
    enterInviteCodeLabel: 'அப்பாவிடமிருந்து பெற்ற 6-இலக்க அழைப்புக் குறியீட்டை உள்ளிடவும் (C01.1)',
    linkedToParent: 'பெற்றோருடன் இணைக்கப்பட்டுள்ளது: அஹ்மத் அல்-ஃபார்சி',
    claimInviteBtn: 'அழைப்பை ஏற்கவும் (C01.1) →',
    createYouthPinTitle: '4-இலக்க யூத் பின்னை உருவாக்கவும்',
    createYouthPinSub: 'QR கொடுப்பனவுகளை உறுதிப்படுத்த பயன்படுகிறது',
    enterPin: 'பின்னை உள்ளிடவும்',
    enableFaceId: 'Face ID ஐ இயக்கவும்',
    activateYouthCardBtn: 'எனது யூத் கார்டை செயல்படுத்தவும் (C01.1) →',
    readyYouthTitle: 'நீங்கள் தயாராகிவிட்டீர்கள், சாரா! (C01)',
    readyYouthSub: 'உங்கள் வாராந்திர பாக்கெட் மணி மற்றும் தினசரி செலவு வரம்பு செயலில் உள்ளன.',
    openYouthHomeBtn: 'எனது முகப்பைத் திறக்கவும் (C02) →'
  }
};

function t(key) {
  const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';
  if (I18N[lang] && I18N[lang][key]) return I18N[lang][key];
  if (I18N['en'] && I18N['en'][key]) return I18N['en'][key];
  return key;
}

window.t = t;

// ==========================================================================
// 1.2 Multi-Currency Engine (SAR / USD / AED / INR / EUR)
// ==========================================================================
const CURRENCY_RATES = {
  SAR: { symbol: 'SAR', flag: '🇸🇦', rate: 1.0, name: 'Saudi Riyal' },
  USD: { symbol: '$', flag: '🇺🇸', rate: 0.27, name: 'US Dollar' },
  AED: { symbol: 'AED', flag: '🇦🇪', rate: 0.98, name: 'UAE Dirham' },
  INR: { symbol: '₹', flag: '🇮🇳', rate: 22.5, name: 'Indian Rupee' },
  EUR: { symbol: '€', flag: '🇪🇺', rate: 0.25, name: 'Euro' }
};

function formatMoney(amountSAR, showSymbol = true) {
  const curr = (typeof AppState !== 'undefined' && AppState.currency) || 'SAR';
  const meta = CURRENCY_RATES[curr] || CURRENCY_RATES.SAR;
  const converted = (amountSAR || 0) * meta.rate;
  const formatted = converted.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return showSymbol ? `${meta.symbol} ${formatted}` : formatted;
}

window.formatMoney = formatMoney;

function getAppRegionConfig() {
  const curr = (typeof AppState !== 'undefined' && AppState.currency) || 'SAR';
  const lang = (typeof AppState !== 'undefined' && AppState.language) || 'en';

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
      kycDesc: 'Fully authorized for multi-child sovereign family banking governance under Reserve Bank of India (RBI) rules.',
      fundingSub: 'Link your primary Indian bank account',
      banks: [
        'HDFC Bank (एचडीएफसी बैंक)',
        'State Bank of India (SBI - భారతీయ స్టేట్ బ్యాంక్)',
        'ICICI Bank (ఐసీఐసీఐ బ్యాంక్)',
        'Axis Bank (యాక్సిస్ బ్యాంక్)',
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

window.getAppRegionConfig = getAppRegionConfig;

function setAppLanguage(lang) {
  if (!I18N[lang]) return;
  AppState.language = lang;

  // Auto-switch currency to India format (INR) if Telugu, Hindi, Tamil is selected
  if (lang === 'te' || lang === 'hi' || lang === 'ta') {
    AppState.currency = 'INR';
  } else if (lang === 'ar') {
    AppState.currency = 'SAR';
  }

  const rc = getAppRegionConfig();
  if (AppState.parent) {
    AppState.parent.name = rc.parentName;
    AppState.parent.language = lang;
    AppState.parent.currency = AppState.currency;
  }

  if (AppState.children && rc.childNames) {
    AppState.children.forEach(c => {
      if (rc.childNames[c.id]) c.name = rc.childNames[c.id];
    });
  }

  if (lang === 'ar') {
    document.body.classList.add('rtl-mode');
    document.documentElement.dir = 'rtl';
  } else {
    document.body.classList.remove('rtl-mode');
    document.documentElement.dir = 'ltr';
  }

  const headerLang = document.getElementById('header-lang-select');
  if (headerLang) headerLang.value = lang;
  const settingsLang = document.getElementById('settings-lang-select');
  if (settingsLang) settingsLang.value = lang;

  const headerCurr = document.getElementById('header-curr-select');
  if (headerCurr) headerCurr.value = AppState.currency;
  const settingsCurr = document.getElementById('settings-curr-select');
  if (settingsCurr) settingsCurr.value = AppState.currency;

  const pnavMap = {
    'pnav-lbl-home': 'dashboard',
    'pnav-lbl-children': 'childrenTab',
    'pnav-lbl-payments': 'paymentsTab',
    'pnav-lbl-tx': 'txTab',
    'pnav-lbl-more': 'moreTab'
  };
  for (const [id, key] of Object.entries(pnavMap)) {
    const el = document.getElementById(id);
    if (el) el.textContent = t(key);
  }

  const cnavMap = {
    'cnav-lbl-home': 'childHome',
    'cnav-lbl-wallet': 'childWallet',
    'cnav-lbl-scan': 'childScan',
    'cnav-lbl-activity': 'childActivity',
    'cnav-lbl-more': 'childMore'
  };
  for (const [id, key] of Object.entries(cnavMap)) {
    const el = document.getElementById(id);
    if (el) el.textContent = t(key);
  }

  const btnOnboarding = document.getElementById('btn-start-onboarding');
  if (btnOnboarding) {
    btnOnboarding.innerHTML = `<span>🔑</span> ${t('loginOnboarding')}`;
  }

  renderParentScreen();
  renderChildScreen();

  const toastMsg = (I18N[lang] && I18N[lang].switchLangToast) || `Language set to ${lang.toUpperCase()}`;
  showToast(toastMsg, 'parent');
}

window.setAppLanguage = setAppLanguage;

function setAppCurrency(curr) {
  if (!CURRENCY_RATES[curr]) return;
  AppState.currency = curr;

  if (curr === 'INR' && AppState.language === 'ar') {
    AppState.language = 'en';
    document.body.classList.remove('rtl-mode');
    document.documentElement.dir = 'ltr';
  } else if (curr === 'SAR' && (AppState.language === 'te' || AppState.language === 'hi' || AppState.language === 'ta')) {
    AppState.language = 'en';
  }

  const rc = getAppRegionConfig();
  if (AppState.parent) {
    AppState.parent.name = rc.parentName;
    AppState.parent.currency = curr;
  }

  if (AppState.children && rc.childNames) {
    AppState.children.forEach(c => {
      if (rc.childNames[c.id]) c.name = rc.childNames[c.id];
    });
  }

  const headerLang = document.getElementById('header-lang-select');
  if (headerLang) headerLang.value = AppState.language;
  const settingsLang = document.getElementById('settings-lang-select');
  if (settingsLang) settingsLang.value = AppState.language;

  const headerCurr = document.getElementById('header-curr-select');
  if (headerCurr) headerCurr.value = curr;
  const settingsCurr = document.getElementById('settings-curr-select');
  if (settingsCurr) settingsCurr.value = curr;

  renderParentScreen();
  renderChildScreen();

  const meta = CURRENCY_RATES[curr] || CURRENCY_RATES.SAR;
  showToast(`Currency switched to ${meta.flag} ${curr} (${meta.symbol})`, 'parent');
  showToast(`Wallet currency updated to ${meta.flag} ${curr}`, 'child');
}

window.setAppCurrency = setAppCurrency;

// ==========================================================================
// 2. Reactive Global State Store
// ==========================================================================
const AppState = {
  language: 'en',                    // 'en' | 'ar' | 'te' | 'hi' | 'ta'
  currency: 'SAR',                   // 'SAR' | 'USD' | 'AED' | 'INR' | 'EUR'
  activeParentTab: 'dashboard',      // 'dashboard' | 'children' | 'payments' | 'transactions' | 'more'
  activeParentSubScreen: null,       // 'notifications' | 'funding' | 'profile' | 'security' | 'settings' | 'help' | 'exit' | 'onboarding'
  activeChildTab: 'home',            // 'home' | 'wallet' | 'scan' | 'activity' | 'more'
  activeChildSubScreen: null,        // 'literacy' | 'passcode' | 'avatar' | 'child_notifications'
  selectedChildId: 'sara',
  viewMode: 'dual',                  // 'dual' | 'parent' | 'child' | 'ia'
  ceoStep: 0,
  isCeoDemo: false,
  analyticsPeriod: 'weekly',         // 'weekly' | 'monthly' | 'yearly'
  selectedAnalyticsChild: 'all',     // 'all' | 'sara' | 'omar' | 'youssef'
  txFilters: {
    period: 'all',
    child: 'all',
    status: 'all',
    category: 'all'
  },
  childAppreciation: null,           // { childId, message, reward, time }

  childCategoryAnalytics: {
    sara: {
      weekly: {
        totalSpent: 320.00,
        totalAllocated: 500.00,
        remaining: 180.00,
        txCount: 8,
        categories: [
          { name: 'Education & Books', icon: '📚', amount: 140.00, percentage: 44, color: '#4338CA' },
          { name: 'Food & Drinks', icon: '🍔', amount: 105.00, percentage: 33, color: '#0D9488' },
          { name: 'Shopping', icon: '🛍️', amount: 75.00, percentage: 23, color: '#EC4899' }
        ]
      },
      monthly: {
        totalSpent: 1250.00,
        totalAllocated: 2000.00,
        remaining: 750.00,
        txCount: 32,
        categories: [
          { name: 'Education & Books', icon: '📚', amount: 550.00, percentage: 44, color: '#4338CA' },
          { name: 'Food & Drinks', icon: '🍔', amount: 420.00, percentage: 34, color: '#0D9488' },
          { name: 'Shopping', icon: '🛍️', amount: 280.00, percentage: 22, color: '#EC4899' }
        ]
      },
      yearly: {
        totalSpent: 14800.00,
        totalAllocated: 24000.00,
        remaining: 9200.00,
        txCount: 380,
        categories: [
          { name: 'Education & Books', icon: '📚', amount: 6500.00, percentage: 44, color: '#4338CA' },
          { name: 'Food & Drinks', icon: '🍔', amount: 5100.00, percentage: 34, color: '#0D9488' },
          { name: 'Shopping', icon: '🛍️', amount: 3200.00, percentage: 22, color: '#EC4899' }
        ]
      }
    },
    omar: {
      weekly: {
        totalSpent: 250.00,
        totalAllocated: 400.00,
        remaining: 150.00,
        txCount: 6,
        categories: [
          { name: 'Gaming & Apps', icon: '🎮', amount: 110.00, percentage: 44, color: '#6366F1' },
          { name: 'Food & Drinks', icon: '🍔', amount: 80.00, percentage: 32, color: '#0D9488' },
          { name: 'Transport', icon: '🚕', amount: 60.00, percentage: 24, color: '#F59E0B' }
        ]
      },
      monthly: {
        totalSpent: 980.00,
        totalAllocated: 1600.00,
        remaining: 620.00,
        txCount: 24,
        categories: [
          { name: 'Gaming & Apps', icon: '🎮', amount: 430.00, percentage: 44, color: '#6366F1' },
          { name: 'Food & Drinks', icon: '🍔', amount: 310.00, percentage: 32, color: '#0D9488' },
          { name: 'Transport', icon: '🚕', amount: 240.00, percentage: 24, color: '#F59E0B' }
        ]
      },
      yearly: {
        totalSpent: 11500.00,
        totalAllocated: 19200.00,
        remaining: 7700.00,
        txCount: 290,
        categories: [
          { name: 'Gaming & Apps', icon: '🎮', amount: 5000.00, percentage: 43, color: '#6366F1' },
          { name: 'Food & Drinks', icon: '🍔', amount: 3800.00, percentage: 33, color: '#0D9488' },
          { name: 'Transport', icon: '🚕', amount: 2700.00, percentage: 24, color: '#F59E0B' }
        ]
      }
    },
    youssef: {
      weekly: {
        totalSpent: 120.00,
        totalAllocated: 300.00,
        remaining: 180.00,
        txCount: 4,
        categories: [
          { name: 'Toys & Books', icon: '🧸', amount: 70.00, percentage: 58, color: '#F59E0B' },
          { name: 'Food & Snacks', icon: '🍔', amount: 50.00, percentage: 42, color: '#0D9488' }
        ]
      },
      monthly: {
        totalSpent: 480.00,
        totalAllocated: 1200.00,
        remaining: 720.00,
        txCount: 16,
        categories: [
          { name: 'Toys & Books', icon: '🧸', amount: 280.00, percentage: 58, color: '#F59E0B' },
          { name: 'Food & Snacks', icon: '🍔', amount: 200.00, percentage: 42, color: '#0D9488' }
        ]
      },
      yearly: {
        totalSpent: 5600.00,
        totalAllocated: 14400.00,
        remaining: 8800.00,
        txCount: 185,
        categories: [
          { name: 'Toys & Books', icon: '🧸', amount: 3300.00, percentage: 59, color: '#F59E0B' },
          { name: 'Food & Snacks', icon: '🍔', amount: 2300.00, percentage: 41, color: '#0D9488' }
        ]
      }
    }
  },

  parent: {
    name: 'Ahmed Al-Farsi',
    phone: '+966 50 123 4567',
    email: 'ahmed.alfarsi@amanah.sa',
    kycStatus: 'Verified (SAMA Level 3)',
    nationalId: '1098765432',
    bankName: 'Al Rajhi Bank',
    bankIban: 'SA44 8000 0456 1234 5678 90',
    availableBalance: 4850.00,
    totalAllocated: 1200.00,
    childSpendingThisMonth: 690.00,
    upcomingAllowance: 200.00,
    biometrics: true,
    currency: 'SAR',
    language: 'en'
  },

  children: [
    {
      id: 'sara',
      name: 'Sara Al-Farsi',
      shortName: 'Sara',
      age: 18,
      avatar: '👧',
      color: '#0D9488',
      status: 'Active',
      balance: 185.00,
      dailyLimit: 50.00,
      dailyTxCountLimit: 3,
      perTransactionLimit: 30.00,
      txCompletedToday: 1,
      spentToday: 5.00,
      monthlyLimit: 400.00,
      spentThisMonth: 115.00,
      allowanceAmount: 100.00,
      allowanceFreq: 'Weekly',
      nextDepositDays: 2,
      spendingMode: 'limits', // 'limits' | 'approval_all'
      blockedCategories: ['Gaming', 'Gambling', 'Adult Content'],
      allowedCategories: ['Education & Books', 'Food & Drinks', 'Shopping', 'Transport', 'Entertainment'],
      blockedMerchants: ['Roblox Corp', 'Steam Games'],
      savingsGoal: {
        name: 'New iPad Goal',
        target: 1000.00,
        saved: 650.00,
        remaining: 350.00,
        recentMilestone: true
      },
      periodData: {
        weekly: { allocated: 500.00, spent: 320.00, remaining: 180.00, txCount: 8, percentage: 46 },
        monthly: { allocated: 2000.00, spent: 1250.00, remaining: 750.00, txCount: 32, percentage: 46 },
        yearly: { allocated: 24000.00, spent: 14800.00, remaining: 9200.00, txCount: 380, percentage: 46 }
      }
    },
    {
      id: 'omar',
      name: 'Omar Al-Farsi',
      shortName: 'Omar',
      age: 16,
      avatar: '👦',
      color: '#6366F1',
      status: 'Active',
      balance: 120.00,
      dailyLimit: 30.00,
      dailyTxCountLimit: 3,
      txCompletedToday: 0,
      spentToday: 0.00,
      monthlyLimit: 250.00,
      spentThisMonth: 60.00,
      allowanceAmount: 60.00,
      allowanceFreq: 'Weekly',
      nextDepositDays: 2,
      spendingMode: 'approval_all',
      blockedCategories: ['Gaming', 'Gambling', 'Adult Content', 'Crypto'],
      allowedCategories: ['Education & Books', 'Food & Drinks', 'Shopping', 'Transport'],
      blockedMerchants: ['Epic Games'],
      savingsGoal: {
        name: 'PlayStation VR2',
        target: 1200.00,
        saved: 420.00,
        remaining: 780.00,
        recentMilestone: false
      },
      periodData: {
        weekly: { allocated: 400.00, spent: 250.00, remaining: 150.00, txCount: 6, percentage: 36 },
        monthly: { allocated: 1600.00, spent: 980.00, remaining: 620.00, txCount: 24, percentage: 36 },
        yearly: { allocated: 19200.00, spent: 11500.00, remaining: 7700.00, txCount: 290, percentage: 36 }
      }
    },
    {
      id: 'youssef',
      name: 'Youssef Al-Farsi',
      shortName: 'Youssef',
      age: 14,
      avatar: '👦',
      color: '#F59E0B',
      status: 'Active',
      balance: 85.00,
      dailyLimit: 25.00,
      dailyTxCountLimit: 2,
      perTransactionLimit: 20.00,
      txCompletedToday: 0,
      spentToday: 0.00,
      monthlyLimit: 150.00,
      spentThisMonth: 35.00,
      allowanceAmount: 40.00,
      allowanceFreq: 'Weekly',
      nextDepositDays: 4,
      spendingMode: 'limits',
      blockedCategories: ['Gaming', 'Gambling', 'Adult Content'],
      allowedCategories: ['Education & Books', 'Food & Drinks'],
      blockedMerchants: [],
      savingsGoal: {
        name: 'Lego Technic Set',
        target: 400.00,
        saved: 280.00,
        remaining: 120.00,
        recentMilestone: true
      },
      periodData: {
        weekly: { allocated: 300.00, spent: 120.00, remaining: 180.00, txCount: 4, percentage: 18 },
        monthly: { allocated: 1200.00, spent: 480.00, remaining: 720.00, txCount: 16, percentage: 18 },
        yearly: { allocated: 14400.00, spent: 5600.00, remaining: 8800.00, txCount: 185, percentage: 18 }
      }
    }
  ],

  analytics: {
    weekly: {
      familyTotalSpend: 690.00,
      totalAllocated: 1200.00,
      totalSpent: 690.00,
      remaining: 510.00,
      txCount: 18,
      childSpending: [
        { id: 'sara', name: 'Sara', amount: 320.00, percentage: 46, color: '#0D9488' },
        { id: 'omar', name: 'Omar', amount: 250.00, percentage: 36, color: '#6366F1' },
        { id: 'youssef', name: 'Youssef', amount: 120.00, percentage: 18, color: '#F59E0B' }
      ],
      categorySpending: [
        { name: 'Education & Books', icon: '📚', amount: 220.00, percentage: 32, color: '#4338CA' },
        { name: 'Food & Drinks', icon: '🍔', amount: 185.00, percentage: 27, color: '#0D9488' },
        { name: 'Shopping', icon: '🛍️', amount: 145.00, percentage: 21, color: '#EC4899' },
        { name: 'Transport', icon: '🚕', amount: 80.00, percentage: 12, color: '#F59E0B' },
        { name: 'Entertainment', icon: '🎬', amount: 60.00, percentage: 8, color: '#8B5CF6' }
      ]
    },
    monthly: {
      familyTotalSpend: 2710.00,
      totalAllocated: 4800.00,
      totalSpent: 2710.00,
      remaining: 2090.00,
      txCount: 72,
      childSpending: [
        { id: 'sara', name: 'Sara', amount: 1250.00, percentage: 46, color: '#0D9488' },
        { id: 'omar', name: 'Omar', amount: 980.00, percentage: 36, color: '#6366F1' },
        { id: 'youssef', name: 'Youssef', amount: 480.00, percentage: 18, color: '#F59E0B' }
      ],
      categorySpending: [
        { name: 'Education & Books', icon: '📚', amount: 850.00, percentage: 31, color: '#4338CA' },
        { name: 'Food & Drinks', icon: '🍔', amount: 740.00, percentage: 27, color: '#0D9488' },
        { name: 'Shopping', icon: '🛍️', amount: 580.00, percentage: 22, color: '#EC4899' },
        { name: 'Transport', icon: '🚕', amount: 320.00, percentage: 12, color: '#F59E0B' },
        { name: 'Entertainment', icon: '🎬', amount: 220.00, percentage: 8, color: '#8B5CF6' }
      ]
    },
    yearly: {
      familyTotalSpend: 31900.00,
      totalAllocated: 57600.00,
      totalSpent: 31900.00,
      remaining: 25700.00,
      txCount: 855,
      childSpending: [
        { id: 'sara', name: 'Sara', amount: 14800.00, percentage: 46, color: '#0D9488' },
        { id: 'omar', name: 'Omar', amount: 11500.00, percentage: 36, color: '#6366F1' },
        { id: 'youssef', name: 'Youssef', amount: 5600.00, percentage: 18, color: '#F59E0B' }
      ],
      categorySpending: [
        { name: 'Education & Books', icon: '📚', amount: 10200.00, percentage: 32, color: '#4338CA' },
        { name: 'Food & Drinks', icon: '🍔', amount: 8600.00, percentage: 27, color: '#0D9488' },
        { name: 'Shopping', icon: '🛍️', amount: 6800.00, percentage: 21, color: '#EC4899' },
        { name: 'Transport', icon: '🚕', amount: 3800.00, percentage: 12, color: '#F59E0B' },
        { name: 'Entertainment', icon: '🎬', amount: 2500.00, percentage: 8, color: '#8B5CF6' }
      ]
    }
  },

  pendingRequests: [
    {
      id: 'req-001',
      childId: 'sara',
      childName: 'Sara',
      amount: 85.00,
      merchant: 'Al Jarir Bookstore',
      category: 'Education & Books',
      reason: 'School Art Project Materials & Notebooks',
      time: 'Just now',
      status: 'pending'
    }
  ],

  transactions: [
    { id: 'tx-101', user: 'Sara', childId: 'sara', userType: 'child', merchant: 'School Cafeteria', amount: -15.00, category: 'Food & Drinks', time: 'Today, 11:20 AM', period: 'weekly', status: 'Completed' },
    { id: 'tx-102', user: 'Ahmed', childId: null, userType: 'parent', merchant: 'Top-up from Al Rajhi', amount: 1500.00, category: 'Deposit', time: 'Yesterday', period: 'weekly', status: 'Completed' },
    { id: 'tx-103', user: 'Omar', childId: 'omar', userType: 'child', merchant: 'Gaming Credits', amount: -45.00, category: 'Gaming', time: '2 days ago', period: 'weekly', status: 'Blocked' },
    { id: 'tx-104', user: 'Sara', childId: 'sara', userType: 'child', merchant: 'Noon Express', amount: -65.00, category: 'Shopping', time: '3 days ago', period: 'weekly', status: 'Completed' },
    { id: 'tx-105', user: 'Sara', childId: 'sara', userType: 'child', merchant: 'Starbucks Cafe', amount: -22.00, category: 'Food & Drinks', time: '4 days ago', period: 'weekly', status: 'Completed' },
    { id: 'tx-106', user: 'Youssef', childId: 'youssef', userType: 'child', merchant: 'Toy Town Riyadh', amount: -35.00, category: 'Shopping', time: '5 days ago', period: 'weekly', status: 'Completed' },
    { id: 'tx-107', user: 'Omar', childId: 'omar', userType: 'child', merchant: 'Careem Ride', amount: -18.00, category: 'Transport', time: '6 days ago', period: 'weekly', status: 'Completed' }
  ],

  notifications: [
    { id: 'n-1', for: 'parent', category: 'PAYMENT', title: 'Payment Approval Required', desc: 'Sara requested SAR 85.00 at Al Jarir Bookstore', time: 'Just now', unread: true },
    { id: 'n-2', for: 'parent', category: 'ALLOWANCE', title: 'Weekly Allowance Scheduled', desc: 'SAR 100.00 scheduled for Sara on Sunday', time: '2h ago', unread: true },
    { id: 'n-3', for: 'parent', category: 'SECURITY', title: 'Trusted Device Verified', desc: 'iPhone 15 Pro signed in with Face ID', time: 'Yesterday', unread: false },
    { id: 'n-4', for: 'parent', category: 'SPENDING_ALERT', title: 'Omar Reached 80% Daily Limit', desc: 'Omar spent SAR 24.00 of his SAR 30.00 limit', time: '3 days ago', unread: false }
  ]
};

// ==========================================================================
// 2. Information Architecture 31-Node Master Blueprint Data
// ==========================================================================
const IATreeData = {
  parentApp: [
    {
      code: '01',
      title: 'Authentication & Onboarding',
      sub: [
        { code: '01.1', title: 'Welcome', leaves: ['App introduction', 'How Amanah works', 'Get Started'] },
        { code: '01.2', title: 'Account Registration', leaves: ['Mobile number', 'Country code', 'OTP verification', 'Resend OTP', 'Change mobile number'] },
        { code: '01.3', title: 'Parent Identity / Profile', leaves: ['Full name', 'Date of birth', 'Nationality', 'Email', 'Mobile number', 'Profile confirmation'] },
        { code: '01.4', title: 'Parent Verification', leaves: ['Identity verification', 'Required identity information', 'Verification status', 'Verification pending', 'Verification failed', 'Retry / correction'] },
        { code: '01.5', title: 'Security Setup', leaves: ['Create app PIN', 'Confirm PIN', 'Enable biometric authentication', 'Security confirmation'] },
        { code: '01.6', title: 'Bank / Funding Account', leaves: ['Add bank account', 'Account details', 'Verify account', 'Verification pending', 'Verification failed', 'Linked account confirmation'] },
        { code: '01.7', title: 'Parent Setup Complete', leaves: ['Account created', 'Add child', 'Go to Dashboard'] }
      ]
    },
    {
      code: '02',
      title: 'Home / Parent Dashboard',
      sub: [
        { code: '02.1', title: 'Header', leaves: ['Parent profile', 'Notifications', 'Security status'] },
        { code: '02.2', title: 'Financial Overview', leaves: ['Available balance', 'Total funds allocated', 'Total child spending', 'Upcoming allowance'] },
        { code: '02.3', title: 'Children Overview', leaves: ['Child cards', 'Child balance', 'Spending status', 'Allowance status', 'Active restrictions'] },
        { code: '02.4', title: 'Quick Actions', leaves: ['Add child', 'Send money', 'Add allowance', 'Scan & Pay', 'View transactions'] },
        { code: '02.5', title: 'Pending Actions', leaves: ['Payment approval requests', 'Child requests', 'Verification requests', 'Account alerts'] },
        { code: '02.6', title: 'Spending Snapshot', leaves: ["Today's spending", 'Weekly spending', 'Monthly spending', 'Category breakdown'] },
        { code: '02.7', title: 'Recent Activity', leaves: ['Payments', 'Allowance deposits', 'Transfers', 'Blocked transactions', 'Approval activity'] }
      ]
    },
    {
      code: '03',
      title: 'Children',
      sub: [
        { code: '03.1', title: 'Children List', leaves: ['Active children', 'Pending invitations', 'Deactivated children'] },
        { code: '03.2', title: 'Add Child', leaves: ['Child details', 'Child name', 'Date of birth', 'Mobile number', 'Relationship', 'Generate invitation', 'Send invitation'] },
        { code: '03.3', title: 'Child Invitation', leaves: ['Invitation generated', 'Share invitation', 'Invitation pending', 'Resend invitation', 'Cancel invitation', 'Invitation accepted'] },
        { code: '03.4', title: 'Child Profile', leaves: ['Personal information', 'Account status', 'Current balance', 'Spending limit', 'Allowance', 'Payment mode', 'Restrictions', 'Activity'] },
        { code: '03.5', title: 'Child Wallet', leaves: ['Current balance', 'Available balance', 'Allocated allowance', 'Spent amount', 'Remaining amount', 'Wallet activity'] },
        { code: '03.6', title: 'Child Account Status', leaves: ['Active', 'Pending', 'Restricted', 'Suspended', 'Deactivated'] },
        { code: '03.7', title: 'Child Account Actions', leaves: ['Edit profile', 'Pause spending', 'Resume spending', 'Reset access', 'Remove child', 'Deactivate account'] }
      ]
    },
    {
      code: '04',
      title: 'Allowance Management',
      sub: [
        { code: '04.1', title: 'Allowance Overview', leaves: ['Current allowance', 'Remaining allowance', 'Next deposit', 'Allowance history'] },
        { code: '04.2', title: 'Create Allowance', leaves: ['Select child', 'Amount', 'Frequency — Daily / Weekly / Monthly', 'Start date', 'End date', 'Confirm allowance'] },
        { code: '04.3', title: 'Allowance Schedule', leaves: ['Active schedules', 'Upcoming deposits', 'Scheduled amount', 'Schedule status'] },
        { code: '04.4', title: 'Modify Allowance', leaves: ['Change amount', 'Change frequency', 'Change date', 'Save changes'] },
        { code: '04.5', title: 'Pause Allowance', leaves: ['Pause confirmation', 'Resume allowance'] },
        { code: '04.6', title: 'Allowance History', leaves: ['Deposits', 'Failed deposits', 'Reversed deposits', 'Transaction details'] }
      ]
    },
    {
      code: '05',
      title: 'Spending Controls',
      sub: [
        { code: '05.1', title: 'Control Overview', leaves: ['Spending mode', 'Monthly limit', 'Daily limit', 'Category restrictions'] },
        { code: '05.2', title: 'Spending Mode', leaves: ['Spend with Limits — auto-approved payments', 'Approve Every Payment — parent approval required'] },
        { code: '05.3', title: 'Spending Limits', leaves: ['Monthly limit', 'Daily limit', 'Per-transaction limit', 'Remaining limit'] },
        { code: '05.4', title: 'Merchant Restrictions', leaves: ['Restricted categories', 'Gaming', 'Adult / inappropriate categories', 'Gambling', 'Other restricted MCCs', 'Custom restrictions'] },
        { code: '05.5', title: 'Merchant Controls', leaves: ['Block merchant', 'Unblock merchant', 'Approved merchants', 'Restricted merchants'] },
        { code: '05.6', title: 'Control Confirmation', leaves: ['Review changes', 'Parent PIN', 'Changes successful'] }
      ]
    },
    {
      code: '06',
      title: 'Payments',
      sub: [
        { code: '06.1', title: 'Parent Payment', leaves: ['Pay merchant', 'Scan QR', 'Enter amount', 'Select funding source', 'Review payment', 'Authenticate', 'Payment processing', 'Payment successful', 'Payment failed'] },
        { code: '06.2', title: 'Child Payment', leaves: ['Child payment activity', 'Auto-approved payment', 'Payment requiring approval', 'Payment blocked', 'Payment declined'] },
        { code: '06.3', title: 'Payment Approval', leaves: ['Pending requests', 'Request details — merchant / amount / child / date-time / reason', 'Approve', 'Decline'] },
        { code: '06.4', title: 'Approval Confirmation', leaves: ['Parent authentication', 'Payment approved', 'Payment declined'] },
        { code: '06.5', title: 'Payment Receipts', leaves: ['Receipt', 'Merchant information', 'Amount', 'Payment method', 'Child / parent', 'Share receipt'] }
      ]
    },
    {
      code: '07',
      title: 'QR / Scanner',
      sub: [
        { code: '07.1', title: 'Scanner Home', leaves: ['Open scanner', 'Camera permission'] },
        { code: '07.2', title: 'Scan QR', leaves: ['Valid QR', 'Invalid QR', 'Expired QR', 'Unsupported QR'] },
        { code: '07.3', title: 'Merchant Detection', leaves: ['Merchant name', 'Merchant category', 'Merchant status', 'Restriction check'] },
        { code: '07.4', title: 'Payment Entry', leaves: ['Amount', 'Funding source', 'Payment purpose'] },
        { code: '07.5', title: 'Payment Validation', leaves: ['Balance check', 'Limit check', 'Merchant restriction check', 'Authentication'] },
        { code: '07.6', title: 'Result', leaves: ['Payment successful', 'Payment failed', 'Payment blocked', 'Payment requires approval'] }
      ]
    },
    {
      code: '08',
      title: 'Send Money / Transfers',
      sub: [
        { code: '08.1', title: 'Send Money', leaves: ['Select child', 'Enter amount', 'Add note', 'Review'] },
        { code: '08.2', title: 'Transfer Confirmation', leaves: ['Amount', 'Recipient', 'Funding source', 'Parent authentication', 'Confirm'] },
        { code: '08.3', title: 'Transfer Status', leaves: ['Processing', 'Successful', 'Failed'] },
        { code: '08.4', title: 'Transfer History', leaves: ['Sent', 'Received', 'Transfer details'] }
      ]
    },
    {
      code: '09',
      title: 'Transactions',
      sub: [
        { code: '09.1', title: 'Transaction Overview', leaves: ['All transactions', 'Parent transactions', 'Child transactions'] },
        { code: '09.2', title: 'Filters', leaves: ['Child', 'Date', 'Amount', 'Merchant', 'Category', 'Status'] },
        { code: '09.3', title: 'Transaction Status', leaves: ['Completed', 'Pending', 'Declined', 'Blocked', 'Failed', 'Reversed'] },
        { code: '09.4', title: 'Transaction Detail', leaves: ['Merchant', 'Amount', 'Date/time', 'Child', 'Category', 'Payment method', 'Status', 'Receipt'] },
        { code: '09.5', title: 'Spending Analytics', leaves: ['Daily', 'Weekly', 'Monthly', 'By child', 'By category'] }
      ]
    },
    {
      code: '10',
      title: 'Approvals & Requests',
      sub: [
        { code: '10.1', title: 'Approval Center', leaves: ['Pending', 'Approved', 'Declined'] },
        { code: '10.2', title: 'Child Requests', leaves: ['Payment request', 'Extra money request', 'Allowance request', 'Other request'] },
        { code: '10.3', title: 'Review Request', leaves: ['Child', 'Amount', 'Merchant', 'Category', 'Reason', 'Request time'] },
        { code: '10.4', title: 'Approve Request', leaves: ['Review', 'Parent authentication', 'Approval confirmation'] },
        { code: '10.5', title: 'Decline Request', leaves: ['Select reason', 'Optional message', 'Confirm decline', 'Notify child'] }
      ]
    },
    {
      code: '11',
      title: 'Notifications',
      sub: [
        { code: '11.1', title: 'Notification Center', leaves: ['All', 'Payments', 'Children', 'Allowance', 'Security', 'System'] },
        { code: '11.2', title: 'Payment Alerts', leaves: ['Payment completed', 'Payment declined', 'Payment blocked', 'Payment requires approval'] },
        { code: '11.3', title: 'Spending Alerts', leaves: ['Large transaction', 'Limit approaching', 'Low balance', 'Restricted merchant attempt'] },
        { code: '11.4', title: 'Allowance Alerts', leaves: ['Allowance deposited', 'Allowance failed', 'Allowance schedule changed'] },
        { code: '11.5', title: 'Security Alerts', leaves: ['New device', 'Login', 'PIN changed', 'Suspicious activity'] }
      ]
    },
    {
      code: '12',
      title: 'Funding & Payment Methods',
      sub: [
        { code: '12.1', title: 'Funding Sources', leaves: ['Linked bank accounts', 'Cards', 'Other supported sources'] },
        { code: '12.2', title: 'Add Funding Source', leaves: ['Select type', 'Enter details', 'Verification', 'Confirmation'] },
        { code: '12.3', title: 'Manage Funding Source', leaves: ['Set default', 'Edit', 'Remove', 'Verification status'] },
        { code: '12.4', title: 'Funding History', leaves: ['Deposits', 'Withdrawals', 'Failed transactions'] }
      ]
    },
    {
      code: '13',
      title: 'Parent Profile',
      sub: [
        { code: '13.1', title: 'Personal Information', leaves: ['Name', 'Mobile', 'Email', 'Personal details'] },
        { code: '13.2', title: 'Verification', leaves: ['Verification status', 'Verified information', 'Update / reverify'] },
        { code: '13.3', title: 'Profile Photo', leaves: ['Add', 'Change', 'Remove'] }
      ]
    },
    {
      code: '14',
      title: 'Security & Privacy',
      sub: [
        { code: '14.1', title: 'App PIN', leaves: ['Change PIN', 'Forgot PIN', 'Reset PIN'] },
        { code: '14.2', title: 'Biometrics', leaves: ['Enable', 'Disable'] },
        { code: '14.3', title: 'Login Security', leaves: ['Active sessions', 'Trusted devices', 'Sign out device'] },
        { code: '14.4', title: 'Privacy', leaves: ['Data permissions', 'Privacy settings', 'Data usage'] },
        { code: '14.5', title: 'Security Alerts', leaves: ['Suspicious activity', 'New device', 'Security confirmation'] }
      ]
    },
    {
      code: '15',
      title: 'Settings',
      sub: [
        { code: '15.1', title: 'General', leaves: ['Language', 'Currency', 'App preferences'] },
        { code: '15.2', title: 'Notifications', leaves: ['Push notifications', 'Payment alerts', 'Child alerts', 'Security alerts'] },
        { code: '15.3', title: 'Payment Settings', leaves: ['Default funding source', 'Payment authentication'] },
        { code: '15.4', title: 'Account Settings', leaves: ['Account information', 'Deactivate account', 'Delete account'] }
      ]
    },
    {
      code: '16',
      title: 'Help & Support',
      sub: [
        { code: '16.1', title: 'Help Center', leaves: ['Getting started', 'Children', 'Allowance', 'Payments', 'QR payments', 'Security'] },
        { code: '16.2', title: 'FAQs', leaves: ['How child payments work', 'How allowance works', 'How approvals work', 'How restrictions work'] },
        { code: '16.3', title: 'Contact Support', leaves: ['Create support request', 'Chat / communication', 'Support status'] },
        { code: '16.4', title: 'Report Problem', leaves: ['Payment issue', 'Child account issue', 'Security issue', 'Technical issue'] }
      ]
    },
    {
      code: '17',
      title: 'Account Exit',
      sub: [
        { code: '17.1', title: 'Logout', leaves: ['Logout confirmation', 'Logged out'] },
        { code: '17.2', title: 'Session Expired', leaves: ['Login again'] },
        { code: '17.3', title: 'Account Deactivation', leaves: ['Warning', 'Confirmation', 'Deactivation status'] }
      ]
    }
  ],

  childApp: [
    { code: 'C01', title: 'Child Welcome & Onboarding', sub: [{ code: 'C01.1', title: 'Invite Activation', leaves: ['Enter invite code', 'Create Child PIN', 'Face ID'] }] },
    { code: 'C02', title: 'Child Home', sub: [{ code: 'C02.1', title: 'Balance & Spending Power', leaves: ['Available balance', 'Spendable today', 'Allowance meter', 'Scan button'] }] },
    { code: 'C03', title: 'Child Wallet', sub: [{ code: 'C03.1', title: 'Digital Card & Allocations', leaves: ['Virtual Card details', 'Weekly savings', 'Spend breakdown'] }] },
    { code: 'C04', title: 'Spending Limits (Read-Only)', sub: [{ code: 'C04.1', title: 'Active Guardrails', leaves: ['Daily limit bar', 'Monthly limit bar', 'Blocked categories view'] }] },
    { code: 'C05', title: 'Allowance Tracker', sub: [{ code: 'C05.1', title: 'Deposit Schedule', leaves: ['Next deposit countdown', 'Allowance history', 'Earn extra chores'] }] },
    { code: 'C06', title: 'Scan QR & Pay', sub: [{ code: 'C06.1', title: 'QR Camera Scanner', leaves: ['Scan merchant QR', 'Enter amount', 'Add note'] }] },
    { code: 'C07', title: 'Payment Validation Engine', sub: [{ code: 'C07.1', title: 'Rule Verification', leaves: ['Limit check', 'Category rule check', 'Auto-approve vs Request'] }] },
    { code: 'C08', title: 'Request Approval / Ask Money', sub: [{ code: 'C08.1', title: 'Parent Request Flow', leaves: ['Select reason', 'Add item note', 'Send prompt to Parent'] }] },
    { code: 'C09', title: 'Payment Result & Receipt', sub: [{ code: 'C09.1', title: 'Receipt Hub', leaves: ['Success checkmark', 'Blocked reason explanation', 'Download receipt'] }] },
    { code: 'C10', title: 'Child Activity Feed', sub: [{ code: 'C10.1', title: 'History & Tags', leaves: ['School spends', 'Cafeteria snacks', 'Allowance received'] }] },
    { code: 'C11', title: 'Child Notifications', sub: [{ code: 'C11.1', title: 'Alerts', leaves: ['Parent approved payment', 'Weekly allowance arrived'] }] },
    { code: 'C12', title: 'Security & Passcode', sub: [{ code: 'C12.1', title: 'PIN Management', leaves: ['Change 4-digit PIN', 'Biometric toggle'] }] },
    { code: 'C13', title: 'Child Profile', sub: [{ code: 'C13.1', title: 'Avatar & Identity', leaves: ['Choose avatar', 'Theme preference', 'Parent contact'] }] },
    { code: 'C14', title: 'Child Help & Learning', sub: [{ code: 'C14.1', title: 'Financial Literacy', leaves: ['Smart saving tips', 'How allowance works', 'Ask Parent'] }] }
  ]
};

// ==========================================================================
// 3. Navigation Engine (Deep Links & Sub-Screens)
// ==========================================================================
function setParentTab(tabName) {
  AppState.activeParentTab = tabName;
  AppState.activeParentSubScreen = null; // Clear sub-screen to return to main tab
  document.querySelectorAll('#parent-bottom-nav .nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.parentTab === tabName);
  });
  renderParentScreen();
}

function setParentSubScreen(subScreenName) {
  AppState.activeParentSubScreen = subScreenName;
  renderParentScreen();
}

function setChildTab(tabName) {
  AppState.activeChildTab = tabName;
  AppState.activeChildSubScreen = null;
  document.querySelectorAll('#child-bottom-nav .nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.childTab === tabName);
  });
  renderChildScreen();
}

function setChildSubScreen(subScreenName) {
  AppState.activeChildSubScreen = subScreenName;
  renderChildScreen();
}

window.setParentTab = setParentTab;
window.setParentSubScreen = setParentSubScreen;
window.setChildTab = setChildTab;
window.setChildSubScreen = setChildSubScreen;

window.markAllParentNotifsRead = function() {
  AppState.notifications.forEach(n => { n.unread = false; });
  renderParentScreen();
  showToast('Marked all notifications as read.', 'parent');
};

window.deepLinkToScreen = function(appType, code, leaf = '') {
  if (appType === 'parent') {
    if (code.startsWith('01')) setParentSubScreen('onboarding');
    else if (code.startsWith('02')) setParentTab('dashboard');
    else if (code.startsWith('03')) setParentTab('children');
    else if (code.startsWith('04')) { setParentTab('children'); openParentModal('allowance', { childId: 'sara' }); }
    else if (code.startsWith('05')) { setParentTab('children'); openParentModal('controls', { childId: 'sara' }); }
    else if (code.startsWith('06') || code.startsWith('07')) setParentTab('payments');
    else if (code.startsWith('08')) { setParentTab('payments'); openParentModal('sendMoney'); }
    else if (code.startsWith('09')) setParentTab('transactions');
    else if (code.startsWith('10')) { setParentTab('dashboard'); openParentApprovalModal('req-001'); }
    else if (code.startsWith('11')) setParentSubScreen('notifications');
    else if (code.startsWith('12')) setParentSubScreen('funding');
    else if (code.startsWith('13')) setParentSubScreen('profile');
    else if (code.startsWith('14')) setParentSubScreen('security');
    else if (code.startsWith('15')) setParentSubScreen('settings');
    else if (code.startsWith('16')) setParentSubScreen('help');
    else if (code.startsWith('17')) setParentSubScreen('exit');
    else setParentTab('more');

    showToast(`Navigated Parent App to: [${code}] ${leaf || ''}`, 'parent');
  } else {
    if (code === 'C01') setChildSubScreen('onboarding');
    else if (code === 'C02') setChildTab('home');
    else if (code === 'C03') setChildTab('wallet');
    else if (code === 'C06' || code === 'C07') setChildTab('scan');
    else if (code === 'C10') setChildTab('activity');
    else if (code === 'C11') setChildSubScreen('child_notifications');
    else if (code === 'C12') setChildSubScreen('passcode');
    else if (code === 'C13') setChildSubScreen('avatar');
    else if (code === 'C14') setChildSubScreen('literacy');
    else setChildTab('more');

    showToast(`Navigated Child App to: [${code}] ${leaf || ''}`, 'child');
  }
};

// ==========================================================================
// 4. Parent Screen Renderers (All 17 Sections)
// ==========================================================================
function renderParentScreen() {
  const viewport = document.getElementById('parent-screen-viewport');
  if (!viewport) return;

  let html = '';

  // Check if sub-screen is active
  if (AppState.activeParentSubScreen) {
    switch (AppState.activeParentSubScreen) {
      case 'notifications': html = renderParentNotificationsScreen(); break;
      case 'funding': html = renderParentFundingScreen(); break;
      case 'profile': html = renderParentProfileScreen(); break;
      case 'security': html = renderParentSecurityScreen(); break;
      case 'settings': html = renderParentSettingsScreen(); break;
      case 'help': html = renderParentHelpScreen(); break;
      case 'exit': html = renderParentExitScreen(); break;
      case 'onboarding': html = renderParentOnboarding(); break;
      default: html = renderParentDashboard();
    }
  } else {
    // Normal Tab Navigation
    switch (AppState.activeParentTab) {
      case 'dashboard': html = renderParentDashboard(); break;
      case 'children': html = renderParentChildren(); break;
      case 'payments': html = renderParentPayments(); break;
      case 'transactions': html = renderParentTransactions(); break;
      case 'more': html = renderParentMore(); break;
      default: html = renderParentDashboard();
    }
  }

  viewport.innerHTML = html;
}

// 02 Parent Home Dashboard
function renderParentDashboard() {
  const pending = AppState.pendingRequests.find(r => r.status === 'pending');
  const period = AppState.analyticsPeriod || 'weekly';
  const selChild = AppState.selectedAnalyticsChild || 'all';
  const familyData = AppState.analytics[period] || AppState.analytics.weekly;

  // Compute active analytics display data (Family vs Child-specific)
  let activeTitle = 'Children Spending Breakdown';
  let activeTxCount = familyData.txCount;
  let activeAllocated = familyData.totalAllocated;
  let activeSpent = familyData.totalSpent;
  let activeRemaining = familyData.remaining;
  let activeChildObj = null;
  let activeCategories = familyData.categorySpending;
  let legendItems = [];

  if (selChild === 'all') {
    activeTitle = 'Family Spending Breakdown (Pie Chart)';
    legendItems = familyData.childSpending.map(cs => ({
      name: cs.name,
      amount: cs.amount,
      percentage: cs.percentage,
      color: cs.color,
      id: cs.id,
      isChild: true
    }));
  } else {
    activeChildObj = AppState.children.find(c => c.id === selChild);
    const childCatData = (AppState.childCategoryAnalytics[selChild] && AppState.childCategoryAnalytics[selChild][period]) || {
      totalSpent: 0,
      totalAllocated: 0,
      remaining: 0,
      txCount: 0,
      categories: []
    };
    activeTitle = `${activeChildObj.name}'s Spending Pie Chart`;
    activeTxCount = childCatData.txCount;
    activeAllocated = childCatData.totalAllocated;
    activeSpent = childCatData.totalSpent;
    activeRemaining = childCatData.remaining;
    activeCategories = childCatData.categories;
    legendItems = childCatData.categories.map(cat => ({
      name: cat.name,
      icon: cat.icon,
      amount: cat.amount,
      percentage: cat.percentage,
      color: cat.color,
      id: cat.name,
      isChild: false
    }));
  }

  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 02 · Home / Parent Dashboard</span>
    </div>

    <!-- 02.1 Header -->
    <div class="screen-header-row">
      <div class="user-profile-head">
        <div class="avatar-ring" onclick="setParentSubScreen('profile')" style="cursor: pointer;">AF</div>
        <div>
          <div class="greeting-text">Good morning,</div>
          <div class="user-name-title">${AppState.parent.name}</div>
        </div>
      </div>
      <div class="header-action-icons">
        <button class="head-icon-btn" onclick="setParentSubScreen('notifications')" title="Notifications (11)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          ${pending ? '<span class="dot-alert"></span>' : ''}
        </button>
        <button class="head-icon-btn" onclick="setParentSubScreen('security')" title="Security (14)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </button>
      </div>
    </div>

    <!-- 02.5 Pending Actions (If approval waiting) -->
    ${pending ? `
      <div class="attention-card" onclick="openParentApprovalModal('${pending.id}')">
        <span class="attention-icon">⚠️</span>
        <div class="attention-content">
          <strong>Payment Approval Request (10.3)</strong>
          <p>${pending.childName} needs SAR ${pending.amount.toFixed(2)} at ${pending.merchant} (${pending.reason})</p>
          <button class="btn-review-approval">Review with OTP (10.4) →</button>
        </div>
      </div>
    ` : ''}

    <!-- 02.2 Financial Overview Card -->
    <div class="hero-finance-card">
      <div class="card-top-label">
        <span>${t('familyBalance')}</span>
        <span style="font-size: 11px; opacity: 0.8;">${(CURRENCY_RATES[AppState.currency] || CURRENCY_RATES.SAR).flag} ${(CURRENCY_RATES[AppState.currency] || CURRENCY_RATES.SAR).symbol}</span>
      </div>
      <div class="hero-balance-val">
        <span class="currency">${(CURRENCY_RATES[AppState.currency] || CURRENCY_RATES.SAR).symbol}</span>
        <span>${formatMoney(AppState.parent.availableBalance, false)}</span>
      </div>
      <div class="card-metrics-grid">
        <div class="metric-item">
          <small>${t('totalAllocated')}</small>
          <strong>${formatMoney(familyData.totalAllocated)}</strong>
        </div>
        <div class="metric-item">
          <small>${t('totalSpent')} (${period})</small>
          <strong>${formatMoney(familyData.totalSpent)}</strong>
        </div>
      </div>
    </div>

    <!-- 02.4 Quick Actions Strip -->
    <div class="quick-actions-strip parent-act">
      <button class="quick-act-btn" onclick="openParentModal('addChild')">
        <div class="quick-act-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
        </div>
        <span>${t('addChild')}</span>
      </button>
      <button class="quick-act-btn" onclick="openParentModal('sendMoney')">
        <div class="quick-act-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <span>${t('sendMoney')}</span>
      </button>
      <button class="quick-act-btn" onclick="openParentModal('allowance', { childId: AppState.selectedChildId || 'sara' })">
        <div class="quick-act-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        </div>
        <span>${t('allowance')}</span>
      </button>
      <button class="quick-act-btn" onclick="openParentModal('appreciation', { childId: AppState.selectedChildId || 'sara' })">
        <div class="quick-act-icon" style="background: #FEF3C7; color: #D97706;">
          ⭐
        </div>
        <span>${t('praiseReward')}</span>
      </button>
    </div>

    <!-- FEATURE 4: Clear Child Allocation / Spending / Remaining (Interactive Pie Selection) -->
    <div class="section-head">
      <h4>${t('childrenAllocation')}</h4>
      <small style="color: var(--text-secondary); font-size: 10px;">Tap any child to view their Pie Chart</small>
    </div>

    ${AppState.children.map(c => {
      const pData = c.periodData[period] || c.periodData.weekly;
      const pctUsed = Math.min(100, Math.round((pData.spent / pData.allocated) * 100));
      const isSelectedInPie = (selChild === c.id);
      return `
        <div class="child-card-tile" onclick="selectChildForAnalytics('${c.id}')" style="cursor: pointer; transition: all 0.2s ease; ${isSelectedInPie ? 'border: 2px solid var(--parent-primary); box-shadow: 0 4px 14px var(--parent-glow);' : ''}">
          <div class="child-tile-top">
            <div class="child-info-meta">
              <span style="font-size: 24px;">${c.avatar}</span>
              <div>
                <div class="child-name-text">${c.name} (${c.age}y) ${isSelectedInPie ? '<span class="control-pill" style="background: var(--parent-primary); color: #fff; font-size: 9px; padding: 2px 6px;">Active in Pie Chart</span>' : ''}</div>
                <small style="color: var(--text-secondary); font-size: 11px;">Current Wallet: ${formatMoney(c.balance)}</small>
              </div>
            </div>
            <button class="tree-act-btn" style="padding: 4px 8px; font-weight: 700; font-size: 10px; color: var(--parent-primary);" onclick="event.stopPropagation(); selectChildForAnalytics('${c.id}')">
              📊 View Pie
            </button>
          </div>

          <!-- Feature 4: Allocated / Spent / Remaining Progress -->
          <div class="child-allocation-metric-box">
            <div class="child-alloc-nums">
              <span><span class="alloc-label">Allocated:</span> <span class="alloc-val">${formatMoney(pData.allocated)}</span></span>
              <span><span class="alloc-label">Spent:</span> <span class="alloc-val">${formatMoney(pData.spent)}</span></span>
              <span><span class="alloc-label">Remaining:</span> <strong style="color: var(--status-success);">${formatMoney(pData.remaining)}</strong></span>
            </div>
            <div class="allowance-bar-bg" style="margin: 4px 0 2px 0;">
              <div class="allowance-bar-fill" style="width: ${pctUsed}%; background: ${c.color};"></div>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 10px; color: var(--text-secondary); margin-top: 2px;">
              <span>${pctUsed}% used</span>
              <span>Daily Limit: ${formatMoney(c.dailyLimit)} · Max ${c.dailyTxCountLimit} tx/day</span>
            </div>
          </div>

          <!-- Mini Savings Goal Status on Child Tile for Father -->
          <div style="background: var(--bg-surface); border-radius: var(--radius-md); padding: 6px 10px; margin-top: 6px; display: flex; justify-content: space-between; align-items: center; font-size: 11px;">
            <span>🎯 <strong>${c.savingsGoal.name}:</strong> ${formatMoney(c.savingsGoal.saved)} / ${formatMoney(c.savingsGoal.target)}</span>
            <span style="font-weight: 700; color: var(--status-success);">${Math.round((c.savingsGoal.saved / c.savingsGoal.target) * 100)}%</span>
          </div>

          <div class="child-controls-summary" style="margin-top: 8px;">
            <span class="control-pill">🛡️ Daily: ${formatMoney(c.dailyLimit)}</span>
            <span class="control-pill">⚡ ${c.txCompletedToday}/${c.dailyTxCountLimit} Tx Today</span>
            <span class="control-pill" style="color: #D97706;" onclick="event.stopPropagation(); openParentModal('appreciation', { childId: '${c.id}' });">⭐ Praise</span>
            <span class="control-pill" onclick="event.stopPropagation(); openParentModal('childDetail', { childId: '${c.id}' });">Details →</span>
          </div>
        </div>
      `;
    }).join('')}

    <!-- DEDICATED CHILDREN SAVINGS GOALS FOR FATHER (02.8) -->
    <div class="section-head" style="margin-top: 18px;">
      <h4>${t('childrenSavingsGoals')}</h4>
      <span class="control-pill" style="font-size: 10px; color: var(--status-success); font-weight: 700;">${AppState.children.length} ${t('activeGoals')}</span>
    </div>

    <div class="family-savings-goals-grid" style="display: flex; flex-direction: column; gap: 8px;">
      ${AppState.children.map(c => {
        const goal = c.savingsGoal;
        const pctSaved = Math.min(100, Math.round((goal.saved / goal.target) * 100));
        return `
          <div class="savings-goal-card" style="margin: 0; background: linear-gradient(135deg, ${c.color} 0%, #0F172A 100%);">
            <div class="savings-top-head">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 22px;">${c.avatar}</span>
                <div>
                  <strong style="font-size: 13px; color: #fff;">${c.shortName}: ${goal.name}</strong>
                  <small style="display: block; font-size: 10px; opacity: 0.85; color: #fff;">${t('target')}: ${formatMoney(goal.target)}</small>
                </div>
              </div>
              <span style="font-weight: 800; font-size: 12px; color: #fff; background: rgba(255,255,255,0.22); padding: 3px 8px; border-radius: 12px;">${pctSaved}%</span>
            </div>
            
            <div class="savings-bar-track" style="margin: 8px 0 6px 0;">
              <div class="savings-bar-fill" style="width: ${pctSaved}%; background: #10B981;"></div>
            </div>

            <div class="savings-footer-stats" style="font-size: 11px;">
              <span>${t('saved')}: <strong>${formatMoney(goal.saved)}</strong></span>
              <span>${t('remaining')}: <strong>${formatMoney(goal.remaining)}</strong></span>
              <span style="color: #6EE7B7; font-weight: 700;">${pctSaved}% ${t('saved')}</span>
            </div>

            <div style="display: flex; gap: 6px; margin-top: 8px;">
              <button class="tree-act-btn" style="flex: 1.6; background: rgba(255,255,255,0.22); color: #fff; border: none; font-size: 10px; font-weight: 700; padding: 6px;" onclick="boostChildSavings('${c.id}', 50)">
                ${t('boostGoal')}
              </button>
              <button class="tree-act-btn" style="flex: 1; background: rgba(255,255,255,0.12); color: #fff; border: none; font-size: 10px; font-weight: 700; padding: 6px;" onclick="openParentModal('appreciation', { childId: '${c.id}' })">
                ⭐ Praise
              </button>
              <button class="tree-act-btn" style="flex: 1; background: rgba(255,255,255,0.12); color: #fff; border: none; font-size: 10px; font-weight: 700; padding: 6px;" onclick="openParentModal('childDetail', { childId: '${c.id}' })">
                ${t('details')}
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- FEATURE 1, 2, 3: Parent Spending Analytics with Interactive Child Pie Chart Filter -->
    <div id="spending-analytics-card" style="margin-top: 18px; scroll-margin-top: 20px;">
      <div class="section-head">
        <h4>${t('spendingAnalytics')}</h4>
      </div>

      <!-- Feature 1: Time Filter Segmented Control -->
      <div class="segmented-time-filter">
        <button class="time-segment-btn ${period === 'weekly' ? 'active' : ''}" onclick="setAnalyticsPeriod('weekly')">${t('weekly')}</button>
        <button class="time-segment-btn ${period === 'monthly' ? 'active' : ''}" onclick="setAnalyticsPeriod('monthly')">${t('monthly')}</button>
        <button class="time-segment-btn ${period === 'yearly' ? 'active' : ''}" onclick="setAnalyticsPeriod('yearly')">${t('yearly')}</button>
      </div>

      <!-- Child Spending Selector Filter Chips -->
      <div class="child-analytics-filter">
        <button class="child-filter-chip ${selChild === 'all' ? 'active' : ''}" onclick="setAnalyticsChild('all')">
          <span>👨‍👩‍👧‍👦</span> ${t('allFamily')}
        </button>
        ${AppState.children.map(c => {
          const cpData = (AppState.childCategoryAnalytics[c.id] && AppState.childCategoryAnalytics[c.id][period]) || { totalSpent: 0 };
          return `
            <button class="child-filter-chip ${selChild === c.id ? 'active' : ''}" onclick="setAnalyticsChild('${c.id}')">
              <span>${c.avatar}</span> ${c.shortName} (${formatMoney(cpData.totalSpent)})
            </button>
          `;
        }).join('')}
      </div>

      <!-- Active Child Indicator Banner -->
      ${selChild !== 'all' ? `
        <div class="active-child-indicator">
          <span>📊 Showing Pie Chart for: <strong>${activeChildObj ? activeChildObj.name : ''}</strong></span>
          <button class="tree-act-btn" style="padding: 2px 8px; font-size: 10px; color: var(--parent-primary);" onclick="setAnalyticsChild('all')">✕ View Family</button>
        </div>
      ` : ''}

      <!-- Feature 1 Metrics Grid (Contextual to Selected Child / Family) -->
      <div class="analytics-summary-grid">
        <div class="analytics-mini-card">
          <small>${selChild === 'all' ? 'Total Family Spend' : `${activeChildObj.shortName}'s Spent`}</small>
          <strong style="color: var(--parent-primary);">${formatMoney(activeSpent)}</strong>
        </div>
        <div class="analytics-mini-card">
          <small>${selChild === 'all' ? 'Family Allocated' : `${activeChildObj.shortName}'s Allocated`}</small>
          <strong>${formatMoney(activeAllocated)}</strong>
        </div>
        <div class="analytics-mini-card">
          <small>Transactions</small>
          <strong>${activeTxCount} tx (${period})</strong>
        </div>
        <div class="analytics-mini-card">
          <small>Remaining</small>
          <strong style="color: var(--status-success);">${formatMoney(activeRemaining)}</strong>
        </div>
      </div>

      <!-- Feature 2: Interactive SVG Donut / Pie Chart Card -->
      <div class="donut-chart-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <h5 style="font-size: 13px; font-weight: 800; color: var(--text-primary);">${activeTitle}</h5>
          <span class="control-pill" style="font-size: 9px; text-transform: uppercase;">${period} · ${activeTxCount} tx</span>
        </div>

        <div class="donut-chart-layout">
          <div class="donut-svg-wrapper">
            ${renderDonutChartSVG(period, selChild)}
            <div class="donut-center-text">
              <small style="font-size: 9px; text-transform: uppercase;">${selChild === 'all' ? period : activeChildObj.shortName}</small>
              <strong style="font-size: 13px;">${formatMoney(activeSpent)}</strong>
            </div>
          </div>

          <div class="donut-legend-list">
            ${legendItems.map(item => `
              <div class="donut-legend-row" style="${item.isChild ? 'cursor: pointer;' : ''}" onclick="${item.isChild ? `setAnalyticsChild('${item.id}')` : ''}" title="${item.isChild ? `Click to view ${item.name}'s pie chart` : ''}">
                <div class="legend-child-meta">
                  <span class="legend-color-dot" style="background: ${item.color};"></span>
                  <span>${item.icon ? item.icon + ' ' : ''}${item.name}</span>
                </div>
                <div class="legend-stats">
                  <strong>${formatMoney(item.amount)}</strong>
                  <small>(${item.percentage}%)</small>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Feature 3: Category-Wise Spending Breakdown -->
      <div class="category-bars-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <h5 style="font-size: 13px; font-weight: 800; color: var(--text-primary);">
            ${selChild === 'all' ? 'Family Category Breakdown' : `${activeChildObj.shortName}'s Categories`}
          </h5>
          <small style="color: var(--text-secondary); font-size: 11px;">${activeCategories.length} Categories</small>
        </div>

        ${activeCategories.map(cat => `
          <div class="category-row-item">
            <div class="category-row-header">
              <span class="category-name-badge">${cat.icon ? cat.icon + ' ' : '📁 '}${cat.name}</span>
              <span class="category-amount-badge"><strong>${formatMoney(cat.amount)}</strong> <small style="color: var(--text-secondary);">(${cat.percentage}%)</small></span>
            </div>
            <div class="category-track">
              <div class="category-fill" style="width: ${cat.percentage}%; background: ${cat.color};"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 02.7 Recent Activity -->
    <div class="section-head" style="margin-top: 16px;">
      <h4>Recent Transactions (02.7)</h4>
      <button class="section-link" onclick="setParentTab('transactions')">See All →</button>
    </div>

    <div class="tx-list">
      ${AppState.transactions.slice(0, 3).map(tx => `
        <div class="tx-row" onclick="openParentModal('txDetail', { txId: '${tx.id}' })">
          <div class="tx-left">
            <div class="tx-icon-box">${tx.userType === 'parent' ? '🏦' : '🛍️'}</div>
            <div class="tx-details">
              <h5>${tx.merchant}</h5>
              <small>${tx.user} · ${tx.category} · ${tx.time}</small>
            </div>
          </div>
          <div class="tx-right">
            <div class="tx-amount ${tx.amount > 0 ? 'positive' : ''}">
              ${tx.amount > 0 ? '+' : '-'}${formatMoney(Math.abs(tx.amount))}
            </div>
            <span class="tx-status-pill status-${tx.status.toLowerCase()}">${tx.status}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Donut / Pie Chart SVG Helper Function (Handles Family and Specific Child Category Slices)
function renderDonutChartSVG(period, selChild = 'all') {
  let slices = [];
  const radius = 36;
  const circumference = 2 * Math.PI * radius; // 226.195

  if (selChild === 'all') {
    const data = AppState.analytics[period] || AppState.analytics.weekly;
    slices = data.childSpending.map(item => ({
      percentage: item.percentage,
      color: item.color
    }));
  } else {
    const childCatData = (AppState.childCategoryAnalytics[selChild] && AppState.childCategoryAnalytics[selChild][period]) || { categories: [] };
    slices = childCatData.categories.map(item => ({
      percentage: item.percentage,
      color: item.color
    }));
  }

  let currentOffset = 0;
  const circles = slices.map(item => {
    const strokeDash = (item.percentage / 100) * circumference;
    const strokeSpace = Math.max(0, circumference - strokeDash);
    const offset = currentOffset;
    currentOffset -= strokeDash;
    return `<circle cx="50" cy="50" r="${radius}" fill="none" stroke="${item.color}" stroke-width="12" stroke-dasharray="${strokeDash.toFixed(2)} ${strokeSpace.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}" transform="rotate(-90 50 50)" style="transition: all 0.5s ease; cursor: pointer;"></circle>`;
  }).join('');

  return `
    <svg viewBox="0 0 100 100" style="width: 100%; height: 100%;">
      <circle cx="50" cy="50" r="${radius}" fill="none" stroke="var(--bg-surface-elevated)" stroke-width="12"></circle>
      ${circles}
    </svg>
  `;
}

window.setAnalyticsPeriod = function(period) {
  AppState.analyticsPeriod = period;
  renderParentScreen();
  showToast(`Updated Spending Analytics to ${period.toUpperCase()}`, 'parent');
};

window.setAnalyticsChild = function(childId) {
  AppState.selectedAnalyticsChild = childId;
  if (childId !== 'all') {
    AppState.selectedChildId = childId;
    renderChildScreen();
  }
  renderParentScreen();
  const child = AppState.children.find(c => c.id === childId);
  if (child) {
    showToast(`Pie Chart & Child App filtered for ${child.name}!`, 'parent');
  } else {
    showToast('Showing Family Spending Pie Chart', 'parent');
  }
};

window.selectChildForAnalytics = function(childId) {
  AppState.activeParentTab = 'dashboard';
  AppState.activeParentSubScreen = null;
  AppState.selectedAnalyticsChild = childId;
  AppState.selectedChildId = childId;
  renderParentScreen();
  renderChildScreen();

  setTimeout(() => {
    const el = document.getElementById('spending-analytics-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.style.boxShadow = '0 0 0 3px var(--parent-primary)';
      setTimeout(() => { el.style.boxShadow = ''; }, 1600);
    }
  }, 50);

  const child = AppState.children.find(c => c.id === childId);
  showToast(`📊 Displaying ${child ? child.name : 'All Family'}'s Spending Pie Chart`, 'parent');
};

// 03 Children Management
function renderParentChildren() {
  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 03 · Children Management</span>
    </div>

    <div class="screen-header-row">
      <h3 style="font-size: 18px; font-weight: 800;">Family Members (03.1)</h3>
      <button class="btn-review-approval" style="background: var(--parent-primary);" onclick="openParentModal('addChild')">+ Add Child (03.2)</button>
    </div>

    ${AppState.children.map(c => `
      <div class="child-card-tile" style="border-left: 4px solid var(--parent-primary); cursor: pointer;" onclick="openParentModal('childDetail', { childId: '${c.id}' })">
        <div class="child-tile-top">
          <div class="child-info-meta">
            <span style="font-size: 26px;">${c.avatar}</span>
            <div>
              <div class="child-name-text">${c.name} (${c.age}y)</div>
              <span class="child-tag-status">${c.status}</span>
            </div>
          </div>
          <div class="child-balance-badge">
            ${formatMoney(c.balance)}
          </div>
        </div>

        <div style="margin: 12px 0; background: var(--bg-surface-elevated); padding: 10px; border-radius: var(--radius-md);">
          <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px;">
            <span>Daily Spending Today</span>
            <strong>${formatMoney(c.spentToday)} / ${formatMoney(c.dailyLimit)}</strong>
          </div>
          <div class="allowance-bar-bg" style="margin: 0;">
            <div class="allowance-bar-fill" style="width: ${(c.spentToday / c.dailyLimit) * 100}%; background: var(--parent-primary);"></div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1.2fr 1fr 1fr 1fr; gap: 4px;">
          <button class="tree-act-btn" style="padding: 6px 4px; font-weight: 700; color: var(--parent-primary); font-size: 10px;" onclick="event.stopPropagation(); openParentModal('childDetail', { childId: '${c.id}' })">
            👤 360° Info
          </button>
          <button class="tree-act-btn" style="padding: 6px 4px; font-weight: 700; color: var(--parent-primary); font-size: 10px;" onclick="event.stopPropagation(); selectChildForAnalytics('${c.id}')">
            📊 Pie
          </button>
          <button class="tree-act-btn" style="padding: 6px 4px; font-weight: 700; color: var(--parent-primary); font-size: 10px;" onclick="event.stopPropagation(); openParentModal('controls', { childId: '${c.id}' })">
            ⚙️ Rules
          </button>
          <button class="tree-act-btn" style="padding: 6px 4px; font-weight: 700; color: var(--parent-primary); font-size: 10px;" onclick="event.stopPropagation(); openParentModal('allowance', { childId: '${c.id}' })">
            📅 Pay
          </button>
        </div>
      </div>
    `).join('')}

    <div class="section-head" style="margin-top: 18px;">
      <h4>Pending Invitations (03.3)</h4>
    </div>
    <div style="background: var(--bg-surface); border: 1px dashed var(--border-strong); border-radius: var(--radius-lg); padding: 14px; text-align: center;">
      <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">No pending invitations. All children active.</p>
      <button class="section-link" onclick="openParentModal('addChild')">+ Generate New Child Invite (03.3)</button>
    </div>
  `;
}



// 06 & 07 Payments & Scanner
function renderParentPayments() {
  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 06 & 07 · Payments & Transfers</span>
    </div>

    <div class="screen-header-row">
      <h3 style="font-size: 18px; font-weight: 800;">Payments & Transfers (06)</h3>
    </div>

    <!-- 07 Scanner Preview -->
    <div class="qr-scanner-terminal">
      <div class="qr-reticle">
        <div class="qr-laser"></div>
      </div>
      <div class="qr-scan-hint">Point camera at SAMA Merchant QR Code (07.2)</div>
    </div>

    <!-- 08 Send Money Action -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
      <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 10px;">Quick Transfer to Child (08.1)</h4>
      <div class="form-group">
        <label class="form-label">Select Child</label>
        <select class="form-select" id="send-child-select">
          <option value="sara">Sara Al-Farsi (Balance: SAR 185.00)</option>
          <option value="omar">Omar Al-Farsi (Balance: SAR 120.00)</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Amount (SAR)</label>
        <input type="number" class="form-input" id="send-amount-input" value="50" placeholder="0.00">
      </div>
      <button class="btn-primary-action" onclick="executeParentTransfer()">Send Money Now (08.2) →</button>
    </div>
  `;
}



// 11 Full Screen: Notifications Center
function renderParentNotificationsScreen() {
  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 11 · Notification Center</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setParentTab('more')">← Back</button>
        <h3 style="font-size: 18px; font-weight: 800;">Notifications (11.1)</h3>
      </div>
      <button class="section-link" onclick="markAllParentNotifsRead()">Mark Read</button>
    </div>

    <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 12px;">
      <button class="control-pill" style="background: var(--parent-primary); color: #fff;">All (11.1)</button>
      <button class="control-pill">Payments (11.2)</button>
      <button class="control-pill">Allowance (11.4)</button>
      <button class="control-pill">Security (11.5)</button>
    </div>

    <div class="tx-list">
      ${AppState.notifications.map(n => `
        <div class="tx-row" style="${n.unread ? 'border-left: 3px solid var(--parent-primary); background: #F8FAFC;' : ''}">
          <div class="tx-left">
            <div class="tx-icon-box">${n.category === 'PAYMENT' ? '💳' : (n.category === 'SECURITY' ? '🔒' : '📢')}</div>
            <div class="tx-details">
              <h5>${n.title}</h5>
              <small>${n.desc}</small>
              <div style="font-size: 10px; color: var(--text-tertiary); margin-top: 2px;">${n.time}</div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// 12 Full Screen: Funding & Bank Methods
function renderParentFundingScreen() {
  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 12 · Funding & Bank Methods</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setParentTab('more')">← Back</button>
        <h3 style="font-size: 18px; font-weight: 800;">Bank & Cards (12.1)</h3>
      </div>
    </div>

    <!-- Primary Linked Bank -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span class="child-tag-status" style="background: var(--status-success-bg); color: var(--status-success);">✓ Primary Funding Source (12.3)</span>
        <span style="font-size: 11px; color: var(--text-secondary);">SAMA Verified</span>
      </div>
      <div style="font-size: 16px; font-weight: 800; margin-bottom: 4px;">🏦 ${AppState.parent.bankName}</div>
      <div style="font-family: monospace; font-size: 12px; color: var(--text-secondary); margin-bottom: 10px;">${AppState.parent.bankIban}</div>
      <div style="display: flex; gap: 8px;">
        <button class="tree-act-btn" onclick="showToast('Initiating balance sync with Al Rajhi...', 'parent')">Sync Balance</button>
        <button class="tree-act-btn" onclick="showToast('Bank account details verified.', 'parent')">View Details</button>
      </div>
    </div>

    <!-- Add New Funding Method (12.2) -->
    <div style="background: var(--bg-surface); border: 1px dashed var(--border-strong); border-radius: var(--radius-xl); padding: 16px; text-align: center;">
      <h4 style="font-size: 13px; font-weight: 700; margin-bottom: 4px;">+ Add New Funding Source (12.2)</h4>
      <p style="font-size: 11px; color: var(--text-secondary); margin-bottom: 10px;">Link another Saudi bank account or mada card</p>
      <button class="btn-primary-action" onclick="showToast('SAMA Open Banking Gateway initiated...', 'parent')">Link Bank via Open Banking →</button>
    </div>
  `;
}

// 13 Full Screen: Parent Profile & KYC
function renderParentProfileScreen() {
  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 13 · Parent Profile</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setParentTab('more')">← Back</button>
        <h3 style="font-size: 18px; font-weight: 800;">Parent Profile (13.1)</h3>
      </div>
    </div>

    <div style="text-align: center; padding: 12px 0 16px 0;">
      <div class="avatar-ring" style="width: 60px; height: 60px; font-size: 20px; margin: 0 auto 8px auto;">AF</div>
      <h4 style="font-size: 16px; font-weight: 800;">${AppState.parent.name}</h4>
      <span class="child-tag-status" style="margin-top: 4px;">✓ ${AppState.parent.kycStatus} (13.2)</span>
    </div>

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
      <div class="form-group">
        <label class="form-label">Saudi National ID (Nafath)</label>
        <input type="text" class="form-input" value="${AppState.parent.nationalId}" readonly>
      </div>
      <div class="form-group">
        <label class="form-label">Registered Mobile Number</label>
        <input type="text" class="form-input" value="${AppState.parent.phone}" readonly>
      </div>
      <div class="form-group">
        <label class="form-label">Email Address</label>
        <input type="text" class="form-input" value="${AppState.parent.email}" readonly>
      </div>
      <button class="btn-primary-action" onclick="showToast('Profile updated & verified with Absher/Nafath.', 'parent')">Update Profile Details →</button>
    </div>
  `;
}

// 14 Full Screen: Security & Privacy
function renderParentSecurityScreen() {
  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 14 · Security & Privacy</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setParentTab('more')">← Back</button>
        <h3 style="font-size: 18px; font-weight: 800;">Security Setup (14.1)</h3>
      </div>
    </div>

    <div class="tx-list">
      <div class="tx-row" onclick="showToast('PIN change prompt triggered.', 'parent')">
        <div class="tx-left">
          <div class="tx-icon-box">🔢</div>
          <div class="tx-details">
            <h5>14.1 Change 4-Digit App PIN</h5>
            <small>Required for approving child payments</small>
          </div>
        </div>
        <button class="tree-act-btn">Change</button>
      </div>

      <div class="tx-row">
        <div class="tx-left">
          <div class="tx-icon-box">👤</div>
          <div class="tx-details">
            <h5>14.2 Face ID / Biometrics</h5>
            <small>Fast authentication</small>
          </div>
        </div>
        <input type="checkbox" checked onchange="showToast('Biometric settings updated.', 'parent')" style="transform: scale(1.2);">
      </div>

      <div class="tx-row">
        <div class="tx-left">
          <div class="tx-icon-box">📱</div>
          <div class="tx-details">
            <h5>14.3 Active Sessions</h5>
            <small>iPhone 15 Pro (This device) · Riyadh</small>
          </div>
        </div>
        <span class="child-tag-status">Active</span>
      </div>

      <div class="tx-row" onclick="showToast('Audit logs exported.', 'parent')">
        <div class="tx-left">
          <div class="tx-icon-box">🛡️</div>
          <div class="tx-details">
            <h5>14.4 Privacy & Data Logs</h5>
            <small>SAMA regulatory compliance audit</small>
          </div>
        </div>
        <span>→</span>
      </div>
    </div>
  `;
}

// 15 Full Screen: General Settings
function renderParentSettingsScreen() {
  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 15 · General Settings</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setParentTab('more')">← Back</button>
        <h3 style="font-size: 18px; font-weight: 800;">App Settings (15.1)</h3>
      </div>
    </div>

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
      <div class="form-group">
        <label class="form-label">Currency (15.1)</label>
        <select class="form-select" onchange="setAppCurrency(this.value)">
          <option value="SAR" ${AppState.currency === 'SAR' ? 'selected' : ''}>🇸🇦 SAR — Saudi Riyal (ر.س)</option>
          <option value="USD" ${AppState.currency === 'USD' ? 'selected' : ''}>🇺🇸 USD — US Dollar ($)</option>
          <option value="AED" ${AppState.currency === 'AED' ? 'selected' : ''}>🇦🇪 AED — UAE Dirham (د.إ)</option>
          <option value="INR" ${AppState.currency === 'INR' ? 'selected' : ''}>🇮🇳 INR — Indian Rupee (₹)</option>
          <option value="EUR" ${AppState.currency === 'EUR' ? 'selected' : ''}>🇪🇺 EUR — Euro (€)</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Language (15.1)</label>
        <select class="form-select" onchange="setAppLanguage(this.value)">
          <option value="en" ${AppState.language === 'en' ? 'selected' : ''}>🌐 English (EN)</option>
          <option value="ar" ${AppState.language === 'ar' ? 'selected' : ''}>🇸🇦 العربية (AR)</option>
          <option value="te" ${AppState.language === 'te' ? 'selected' : ''}>🇮🇳 తెలుగు (TE)</option>
          <option value="hi" ${AppState.language === 'hi' ? 'selected' : ''}>🇮🇳 हिन्दी (HI)</option>
          <option value="ta" ${AppState.language === 'ta' ? 'selected' : ''}>🇮🇳 தமிழ் (TA)</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">15.2 Push Notification Preferences</label>
        <div style="font-size: 12px; display: flex; flex-direction: column; gap: 8px; margin-top: 6px;">
          <label><input type="checkbox" checked> Instant Child Spending Alerts</label>
          <label><input type="checkbox" checked> Payment Approval Prompts</label>
          <label><input type="checkbox" checked> Weekly Allowance Summaries</label>
        </div>
      </div>

      <button class="btn-primary-action" onclick="setParentTab('more')">Save Preferences →</button>
    </div>
  `;
}

// 16 Full Screen: Help & Support
function renderParentHelpScreen() {
  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 16 · Help & Support</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setParentTab('more')">← Back</button>
        <h3 style="font-size: 18px; font-weight: 800;">Help Center (16.1)</h3>
      </div>
    </div>

    <div class="tx-list">
      <div class="tx-row" onclick="showToast('FAQ: Allowances deposit automatically based on schedule.', 'parent')">
        <div class="tx-left">
          <div class="tx-icon-box">❓</div>
          <div class="tx-details">
            <h5>How do child allowances work? (16.2)</h5>
            <small>Automated recurring payouts</small>
          </div>
        </div>
        <span>→</span>
      </div>

      <div class="tx-row" onclick="showToast('FAQ: Blocked categories reject payments instantly at point of sale.', 'parent')">
        <div class="tx-left">
          <div class="tx-icon-box">❓</div>
          <div class="tx-details">
            <h5>How do spending restrictions work? (16.2)</h5>
            <small>MCC category & merchant blocking</small>
          </div>
        </div>
        <span>→</span>
      </div>

      <div class="tx-row" onclick="showToast('Live support chat connected.', 'parent')">
        <div class="tx-left">
          <div class="tx-icon-box">🎧</div>
          <div class="tx-details">
            <h5>16.3 Contact 24/7 Live Support</h5>
            <small>Chat with AMANAH Family Specialist</small>
          </div>
        </div>
        <button class="tree-act-btn">Chat</button>
      </div>

      <div class="tx-row" onclick="showToast('Ticket generated for SAMA compliance.', 'parent')">
        <div class="tx-left">
          <div class="tx-icon-box">⚠️</div>
          <div class="tx-details">
            <h5>16.4 Report a Problem</h5>
            <small>Payment dispute or card issue</small>
          </div>
        </div>
        <button class="tree-act-btn">Report</button>
      </div>
    </div>
  `;
}

// 17 Full Screen: Exit & Logout
function renderParentExitScreen() {
  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 17 · Account Exit</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setParentTab('more')">← Back</button>
        <h3 style="font-size: 18px; font-weight: 800;">Account Exit (17.1)</h3>
      </div>
    </div>

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 20px; text-align: center; margin-top: 10px;">
      <div style="font-size: 40px; margin-bottom: 10px;">🚪</div>
      <h4 style="font-size: 16px; font-weight: 800;">Log Out of AMANAH</h4>
      <p style="font-size: 12px; color: var(--text-secondary); margin: 6px 0 16px 0;">
        You will need your App PIN or Face ID to access your parent governance controls again.
      </p>

      <button class="btn-primary-action" style="background: var(--status-danger); margin-bottom: 10px;" onclick="showToast('Logged out securely (17.1)', 'parent'); setParentSubScreen('onboarding');">
        Confirm Log Out (17.1)
      </button>
      <button class="tree-act-btn" style="width: 100%; padding: 10px;" onclick="setParentTab('more')">
        Cancel
      </button>
    </div>
  `;
}

// 01 Full Multi-Step Onboarding & Authentication Engine (01.1 – 01.7)
function renderParentOnboarding() {
  const step = AppState.parentOnboardingStep || 1;
  const rc = getAppRegionConfig();
  let stepContent = '';

  if (step === 1) {
    // 01.1 Welcome & How It Works
    stepContent = `
      <div style="text-align: center; padding: 10px 0 16px 0;">
        <div class="auth-hero-illustration">🛡️</div>
        <h3 style="font-size: 20px; font-weight: 800; color: var(--text-primary);">${t('welcomeParent')}</h3>
        <p style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">${t('welcomeParentSub')}</p>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
        <h4 style="font-size: 13px; font-weight: 700; margin-bottom: 10px;">${t('howItWorksTitle')}</h4>
        
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 12px; line-height: 1.4;">
          <div style="display: flex; gap: 10px; align-items: flex-start;">
            <span style="background: var(--parent-subtle); color: var(--parent-primary); font-weight: 800; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px;">1</span>
            <div>${t('step1Governance')}</div>
          </div>
          <div style="display: flex; gap: 10px; align-items: flex-start;">
            <span style="background: var(--parent-subtle); color: var(--parent-primary); font-weight: 800; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px;">2</span>
            <div>${t('step2ChildSafe')}</div>
          </div>
          <div style="display: flex; gap: 10px; align-items: flex-start;">
            <span style="background: var(--parent-subtle); color: var(--parent-primary); font-weight: 800; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px;">3</span>
            <div>${t('step3Approvals')}</div>
          </div>
        </div>
      </div>

      <button class="btn-primary-action" onclick="setParentOnboardingStep(2)" style="margin-bottom: 8px;">
        ${t('getStartedBtn')}
      </button>
      <button class="tree-act-btn" style="width: 100%; padding: 10px; font-weight: 700;" onclick="setParentOnboardingStep(3)">
        ${t('alreadyHaveAccountBtn')}
      </button>
    `;
  } else if (step === 2) {
    // 01.2 Account Registration
    stepContent = `
      <div style="text-align: center; padding: 6px 0 12px 0;">
        <div style="font-size: 32px; margin-bottom: 4px;">📱</div>
        <h3 style="font-size: 18px; font-weight: 800;">${t('enterMobileTitle')}</h3>
        <p style="font-size: 12px; color: var(--text-secondary);">${t('enterMobileSub')}</p>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
        <div class="form-group">
          <label class="form-label">${t('countryMobileLabel')}</label>
          <div class="phone-input-row">
            <div class="country-code-pill">${rc.phoneCountryPill}</div>
            <input type="tel" class="form-input" id="parent-onboarding-phone" value="${rc.phoneSample}" placeholder="${rc.phonePlaceholder}">
          </div>
        </div>
        <p style="font-size: 10px; color: var(--text-tertiary);">${rc.regulatorTerms}</p>
      </div>

      <button class="btn-primary-action" onclick="setParentOnboardingStep(3)">
        ${t('sendOtpBtn')}
      </button>
      <button class="tree-act-btn" style="width: 100%; padding: 8px; margin-top: 6px;" onclick="setParentOnboardingStep(1)">
        ${t('backBtn')}
      </button>
    `;
  } else if (step === 3) {
    // 01.2 OTP Verification
    stepContent = `
      <div style="text-align: center; padding: 6px 0 12px 0;">
        <div style="font-size: 32px; margin-bottom: 4px;">💬</div>
        <h3 style="font-size: 18px; font-weight: 800;">${t('verifyOtpTitle')}</h3>
        <p style="font-size: 12px; color: var(--text-secondary);">${t('verifyOtpSub')} <strong>${rc.phoneCountryPill} ${rc.phoneSample}</strong></p>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px; text-align: center;">
        <div class="otp-digit-inputs">
          <input type="text" inputmode="numeric" class="otp-box" value="" maxlength="1" oninput="if(this.value.length>=1)this.nextElementSibling?.focus()" onkeydown="if(event.key==='Backspace'&&!this.value)this.previousElementSibling?.focus()" onfocus="this.select()">
          <input type="text" inputmode="numeric" class="otp-box" value="" maxlength="1" oninput="if(this.value.length>=1)this.nextElementSibling?.focus()" onkeydown="if(event.key==='Backspace'&&!this.value)this.previousElementSibling?.focus()" onfocus="this.select()">
          <input type="text" inputmode="numeric" class="otp-box" value="" maxlength="1" oninput="if(this.value.length>=1)this.nextElementSibling?.focus()" onkeydown="if(event.key==='Backspace'&&!this.value)this.previousElementSibling?.focus()" onfocus="this.select()">
          <input type="text" inputmode="numeric" class="otp-box" value="" maxlength="1" oninput="if(this.value.length>=1)this.nextElementSibling?.focus()" onkeydown="if(event.key==='Backspace'&&!this.value)this.previousElementSibling?.focus()" onfocus="this.select()">
          <input type="text" inputmode="numeric" class="otp-box" value="" maxlength="1" oninput="if(this.value.length>=1)this.nextElementSibling?.focus()" onkeydown="if(event.key==='Backspace'&&!this.value)this.previousElementSibling?.focus()" onfocus="this.select()">
          <input type="text" inputmode="numeric" class="otp-box" value="" maxlength="1" oninput="if(this.value.length>=1)this.nextElementSibling?.focus()" onkeydown="if(event.key==='Backspace'&&!this.value)this.previousElementSibling?.focus()" onfocus="this.select()">
        </div>
        <div style="font-size: 11px; color: var(--parent-primary); font-weight: 600; cursor: pointer; margin-top: 10px;" onclick="showToast('OTP resent via SMS.', 'parent')">
          ${t('resendOtpIn')}
        </div>
      </div>

      <button class="btn-primary-action" onclick="setParentOnboardingStep(4)">
        ${t('verifyContinueBtn')}
      </button>
      <button class="tree-act-btn" style="width: 100%; padding: 8px; margin-top: 6px;" onclick="setParentOnboardingStep(2)">
        ${t('changePhoneBtn')}
      </button>
    `;
  } else if (step === 4) {
    // 01.3 Parent Profile & Identity
    stepContent = `
      <div style="text-align: center; padding: 6px 0 12px 0;">
        <div style="font-size: 32px; margin-bottom: 4px;">👤</div>
        <h3 style="font-size: 18px; font-weight: 800;">${t('parentProfileTitle')}</h3>
        <p style="font-size: 12px; color: var(--text-secondary);">${t('parentProfileSub')}</p>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
        <div class="form-group">
          <label class="form-label">${t('fullLegalName')}</label>
          <input type="text" class="form-input" value="${AppState.parent.name}">
        </div>
        <div class="form-group">
          <label class="form-label">${t('dobNationality')}</label>
          <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 8px;">
            <input type="text" class="form-input" value="14 / 05 / 1986">
            <input type="text" class="form-input" value="${rc.nationality}" readonly>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t('emailAddress')}</label>
          <input type="email" class="form-input" value="${AppState.parent.email}">
        </div>
      </div>

      <button class="btn-primary-action" onclick="setParentOnboardingStep(5)">
        ${t('confirmIdentityBtn')}
      </button>
    `;
  } else if (step === 5) {
    // 01.4 KYC Verification
    stepContent = `
      <div style="text-align: center; padding: 6px 0 12px 0;">
        <div style="font-size: 32px; margin-bottom: 4px;">🛡️</div>
        <h3 style="font-size: 18px; font-weight: 800;">${rc.kycTitle}</h3>
        <p style="font-size: 12px; color: var(--text-secondary);">${rc.kycSub}</p>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
        <div class="form-group">
          <label class="form-label">${rc.idLabel}</label>
          <input type="text" class="form-input" value="${rc.idSample}" readonly>
        </div>

        <div style="background: var(--status-success-bg); border: 1px solid var(--status-success-border); border-radius: var(--radius-md); padding: 12px; margin-top: 10px;">
          <div style="display: flex; align-items: center; gap: 8px; color: var(--status-success); font-weight: 800; font-size: 13px;">
            <span>✓</span> ${rc.kycStatusText}
          </div>
          <p style="font-size: 10px; color: #065F46; margin-top: 2px;">${rc.kycDesc}</p>
        </div>
      </div>

      <button class="btn-primary-action" onclick="setParentOnboardingStep(6)">
        ${t('continueToSecurityBtn')}
      </button>
    `;
  } else if (step === 6) {
    // 01.5 Security Setup
    stepContent = `
      <div style="text-align: center; padding: 6px 0 12px 0;">
        <div style="font-size: 32px; margin-bottom: 4px;">🔐</div>
        <h3 style="font-size: 18px; font-weight: 800;">${t('securitySetupTitle')}</h3>
        <p style="font-size: 12px; color: var(--text-secondary);">${t('securitySetupSub')}</p>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
        <div class="form-group">
          <label class="form-label">${t('createAppPin')}</label>
          <input type="password" class="form-input" value="••••" style="font-size: 20px; letter-spacing: 0.3em; text-align: center;">
        </div>
        <div class="form-group">
          <label class="form-label">${t('confirmPin')}</label>
          <input type="password" class="form-input" value="••••" style="font-size: 20px; letter-spacing: 0.3em; text-align: center;">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 8px; border-top: 1px solid var(--border-subtle);">
          <span style="font-size: 12px; font-weight: 600;">${t('enableBiometrics')}</span>
          <input type="checkbox" checked style="transform: scale(1.2);">
        </div>
      </div>

      <button class="btn-primary-action" onclick="setParentOnboardingStep(7)">
        ${t('saveSecurityBtn')}
      </button>
    `;
  } else if (step === 7) {
    // 01.6 Bank / Funding Account
    stepContent = `
      <div style="text-align: center; padding: 6px 0 12px 0;">
        <div style="font-size: 32px; margin-bottom: 4px;">🏦</div>
        <h3 style="font-size: 18px; font-weight: 800;">${t('fundingAccountTitle')}</h3>
        <p style="font-size: 12px; color: var(--text-secondary);">${rc.fundingSub}</p>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
        <div class="form-group">
          <label class="form-label">${t('selectedBank')}</label>
          <select class="form-select">
            ${rc.banks.map((b, idx) => `<option ${idx === 0 ? 'selected' : ''}>${b}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">${rc.accountTypeLabel}</label>
          <input type="text" class="form-input" value="${rc.accountNumberSample}" style="font-family: monospace; font-size: 11px;">
        </div>
        <div style="background: var(--status-success-bg); color: var(--status-success); padding: 8px; border-radius: var(--radius-sm); font-size: 11px; font-weight: 700;">
          ${rc.openBankingBadge}
        </div>
      </div>

      <button class="btn-primary-action" onclick="setParentOnboardingStep(8)">
        ${t('linkAccountCompleteBtn')}
      </button>
    `;
  } else {
    // 01.7 Parent Setup Complete
    stepContent = `
      <div style="text-align: center; padding: 16px 0;">
        <div style="width: 64px; height: 64px; background: var(--status-success-bg); color: var(--status-success); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 12px auto; box-shadow: 0 4px 16px rgba(5, 150, 105, 0.2);">✓</div>
        <h3 style="font-size: 20px; font-weight: 800; color: var(--text-primary);">${t('accountCreatedTitle')}</h3>
        <p style="font-size: 12px; color: var(--text-secondary); margin: 6px 0 18px 0;">
          ${rc.parentAccountCompliance}
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 8px;">
        <button class="btn-primary-action" onclick="openParentModal('addChild'); setParentTab('children');">
          ${t('addFirstChildBtn')}
        </button>
        <button class="btn-primary-action" style="background: var(--parent-deep);" onclick="setParentTab('dashboard')">
          ${t('goToDashboardBtn')}
        </button>
      </div>
    `;
  }

  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 01 · Authentication & Onboarding (${step}/8)</span>
    </div>

    <!-- Stepper Indicator -->
    <div class="onboarding-step-stepper">
      ${[1, 2, 3, 4, 5, 6, 7, 8].map(s => `
        <div class="step-dot ${s === step ? 'active' : ''}"></div>
      `).join('')}
    </div>

    ${stepContent}
  `;
}

window.startParentOnboardingFlow = function(step = 1) {
  AppState.parentOnboardingStep = step;
  setParentSubScreen('onboarding');
  showToast('Started Section 01 Onboarding & Auth Flow', 'parent');
};

window.setParentOnboardingStep = function(step) {
  AppState.parentOnboardingStep = step;
  renderParentScreen();
};

// C01 Full Child Onboarding & Invite Claiming (C01.1 – C01.4)
function renderChildOnboardingScreen() {
  const step = AppState.childOnboardingStep || 1;
  const currentChild = getCurrentActiveChild();
  const rc = getAppRegionConfig();
  const meta = CURRENCY_RATES[AppState.currency] || CURRENCY_RATES.SAR;
  let stepContent = '';

  if (step === 1) {
    // C01.1 Welcome & Invite Claim
    stepContent = `
      <div style="text-align: center; padding: 6px 0 10px 0;">
        <div class="auth-hero-illustration child-illu">👧</div>
        <h3 style="font-size: 19px; font-weight: 800; color: var(--text-primary);">${t('welcomeYouthTitle')}</h3>
        <p style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">${t('welcomeYouthSub')}</p>
      </div>

      <!-- Child Profile Selector for testing any child -->
      <div style="background: var(--bg-surface-elevated); padding: 10px; border-radius: var(--radius-lg); margin-bottom: 12px;">
        <div style="font-size: 11px; font-weight: 700; color: var(--text-secondary); margin-bottom: 6px;">Select Child Profile:</div>
        <div style="display: flex; gap: 6px;">
          ${AppState.children.map(c => `
            <button class="child-filter-chip ${c.id === currentChild.id ? 'active' : ''}" style="${c.id === currentChild.id ? 'background: var(--child-deep); color: #fff; border-color: var(--child-deep); flex: 1;' : 'flex: 1;'}" onclick="switchActiveChild('${c.id}'); setChildOnboardingStep(1);">
              <span>${c.avatar}</span> ${c.shortName} (${c.age}y)
            </button>
          `).join('')}
        </div>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 14px; margin-bottom: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 12px;">
          <span>🛡️ Family Admin:</span>
          <strong>${rc.parentName} (Dad)</strong>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 12px;">
          <span>💰 Pocket Allowance:</span>
          <strong style="color: var(--status-success);">${formatMoney(currentChild.allowanceAmount)} / week</strong>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; font-size: 12px;">
          <span>⚡ Daily Spend Limit:</span>
          <strong style="color: var(--child-deep);">${formatMoney(currentChild.dailyLimit)}</strong>
        </div>

        <div class="form-group" style="margin-bottom: 0;">
          <label class="form-label">${t('enterInviteCodeLabel')}</label>
          <input type="text" class="form-input" id="child-invite-code-input" value="INV-${currentChild.shortName.toUpperCase()}-8820" style="font-family: monospace; font-size: 15px; font-weight: 800; text-align: center; letter-spacing: 0.1em; text-transform: uppercase;">
        </div>
      </div>

      <button class="btn-child-action" onclick="setChildOnboardingStep(2)">
        ${t('claimInviteBtn')}
      </button>
    `;
  } else if (step === 2) {
    // C01.2 Choose Persona, Avatar & Card Theme
    const avatars = ['👧', '👦', '🦄', '🚀', '🎨', '🌟', '🎮', '⚽', '🎧', '🛹', '👾', '🏎️'];
    const themes = [
      { name: 'Teal Oasis', color: '#0D9488' },
      { name: 'Sunset Violet', color: '#7C3AED' },
      { name: 'Electric Blue', color: '#2563EB' },
      { name: 'Emerald Glow', color: '#059669' }
    ];

    stepContent = `
      <div style="text-align: center; padding: 6px 0 10px 0;">
        <div style="font-size: 32px; margin-bottom: 4px;">🎨</div>
        <h3 style="font-size: 18px; font-weight: 800;">Personalize Your Youth Card</h3>
        <p style="font-size: 12px; color: var(--text-secondary);">Choose your favorite avatar & card color theme</p>
      </div>

      <!-- Live Card Preview -->
      <div class="youth-digital-debit-card" id="onboarding-card-preview" style="background: linear-gradient(135deg, ${currentChild.color || '#0D9488'} 0%, #0F172A 100%); margin-bottom: 14px; padding: 14px; border-radius: var(--radius-xl); color: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.25);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-size: 13px; font-weight: 800; letter-spacing: 0.08em; color: #5EEAD4;">${rc.cardBrand.toUpperCase()}</span>
          <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.05em; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 4px; color: #fff;">${rc.cardNetwork}</span>
        </div>
        <div style="font-size: 14px; font-weight: 700; letter-spacing: 0.12em; margin-bottom: 10px; font-family: monospace;">
          ${rc.currencySymbol} •••• •••• •••• 4920
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <div style="font-size: 8px; opacity: 0.8; text-transform: uppercase;">Cardholder</div>
            <div style="font-size: 12px; font-weight: 800;">${currentChild.name.toUpperCase()}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 8px; opacity: 0.8;">EXPIRES</div>
            <div style="font-size: 11px; font-weight: 700;">10/30</div>
          </div>
        </div>
      </div>

      <!-- Avatar Picker -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 12px; margin-bottom: 14px;">
        <div style="font-size: 11px; font-weight: 700; margin-bottom: 8px;">Pick Your Avatar:</div>
        <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; margin-bottom: 10px;">
          ${avatars.map(av => `
            <button type="button" style="font-size: 20px; background: ${currentChild.avatar === av ? 'var(--child-subtle)' : 'var(--bg-surface-elevated)'}; border: 1.5px solid ${currentChild.avatar === av ? 'var(--child-deep)' : 'var(--border-subtle)'}; border-radius: var(--radius-md); padding: 6px 0; cursor: pointer;" onclick="changeChildAvatar('${currentChild.id}', '${av}'); setChildOnboardingStep(2);">
              ${av}
            </button>
          `).join('')}
        </div>

        <div style="font-size: 11px; font-weight: 700; margin-bottom: 6px;">Pick Card Theme Color:</div>
        <div style="display: flex; gap: 8px;">
          ${themes.map(th => `
            <button type="button" style="flex: 1; height: 28px; border-radius: var(--radius-md); background: ${th.color}; border: 2px solid ${currentChild.color === th.color ? '#FFFFFF' : 'transparent'}; box-shadow: ${currentChild.color === th.color ? '0 0 0 2px var(--child-deep)' : 'none'}; cursor: pointer;" title="${th.name}" onclick="currentChild.color='${th.color}'; setChildOnboardingStep(2);">
            </button>
          `).join('')}
        </div>
      </div>

      <button class="btn-child-action" onclick="setChildOnboardingStep(3)">
        Continue to Secret PIN (C01.2) →
      </button>
      <button class="tree-act-btn" style="width: 100%; padding: 8px; margin-top: 6px;" onclick="setChildOnboardingStep(1)">
        ← Back
      </button>
    `;
  } else if (step === 3) {
    // C01.3 Create Secret PIN & Face ID
    stepContent = `
      <div style="text-align: center; padding: 8px 0 12px 0;">
        <div style="font-size: 32px; margin-bottom: 4px;">🔐</div>
        <h3 style="font-size: 18px; font-weight: 800;">${t('createYouthPinTitle')}</h3>
        <p style="font-size: 12px; color: var(--text-secondary);">${t('createYouthPinSub')}</p>
      </div>

      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
        <label class="form-label" style="text-align: center; margin-bottom: 8px;">Enter 4-Digit Youth Secret PIN</label>
        
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 14px; max-width: 220px; margin-left: auto; margin-right: auto;">
          <input type="password" maxlength="1" class="otp-box" id="child-p-1" value="" oninput="if(this.value)document.getElementById('child-p-2')?.focus()" onkeydown="if(event.key==='Backspace'&&!this.value)document.getElementById('child-p-1')?.focus()" onfocus="this.select()">
          <input type="password" maxlength="1" class="otp-box" id="child-p-2" value="" oninput="if(this.value)document.getElementById('child-p-3')?.focus()" onkeydown="if(event.key==='Backspace'&&!this.value)document.getElementById('child-p-1')?.focus()" onfocus="this.select()">
          <input type="password" maxlength="1" class="otp-box" id="child-p-3" value="" oninput="if(this.value)document.getElementById('child-p-4')?.focus()" onkeydown="if(event.key==='Backspace'&&!this.value)document.getElementById('child-p-2')?.focus()" onfocus="this.select()">
          <input type="password" maxlength="1" class="otp-box" id="child-p-4" value="" onkeydown="if(event.key==='Backspace'&&!this.value)document.getElementById('child-p-3')?.focus()" onfocus="this.select()">
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px; border-top: 1px solid var(--border-subtle);">
          <div>
            <div style="font-size: 12px; font-weight: 700;">${t('enableFaceId')}</div>
            <div style="font-size: 10px; color: var(--text-secondary);">Fast biometric confirmation</div>
          </div>
          <input type="checkbox" checked style="transform: scale(1.2);">
        </div>
      </div>

      <button class="btn-child-action" onclick="setChildOnboardingStep(4)">
        ${t('activateYouthCardBtn')}
      </button>
      <button class="tree-act-btn" style="width: 100%; padding: 8px; margin-top: 6px;" onclick="setChildOnboardingStep(2)">
        ← Back
      </button>
    `;
  } else {
    // C01.4 You're Ready & Celebration Tour
    stepContent = `
      <div style="text-align: center; padding: 12px 0 16px 0;">
        <div style="width: 60px; height: 60px; background: rgba(13, 148, 136, 0.15); color: var(--child-deep); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 10px auto;">🎉</div>
        <h3 style="font-size: 19px; font-weight: 800; color: var(--text-primary);">${t('readyYouthTitle')}</h3>
        <p style="font-size: 12px; color: var(--text-secondary); margin: 4px 0 14px 0;">
          ${t('readyYouthSub')}
        </p>
      </div>

      <!-- Ready Digital Card Presentation -->
      <div class="youth-digital-debit-card" style="background: linear-gradient(135deg, ${currentChild.color || '#0D9488'} 0%, #0F172A 100%); margin-bottom: 14px; padding: 16px; border-radius: var(--radius-xl); color: #fff; box-shadow: 0 10px 30px rgba(13, 148, 136, 0.35);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
          <span style="font-size: 13px; font-weight: 800; letter-spacing: 0.08em; color: #5EEAD4;">${rc.cardBrand.toUpperCase()}</span>
          <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.05em; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 4px; color: #fff;">${rc.cardNetwork}</span>
        </div>
        <div style="font-size: 15px; font-weight: 700; letter-spacing: 0.12em; margin-bottom: 12px; font-family: monospace;">
          ${rc.currencySymbol} •••• •••• •••• 4920
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <div style="font-size: 9px; opacity: 0.8;">CARDHOLDER</div>
            <div style="font-size: 13px; font-weight: 800;">${currentChild.name.toUpperCase()}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 9px; opacity: 0.8;">BALANCE</div>
            <div style="font-size: 14px; font-weight: 800; color: #5EEAD4;">${formatMoney(currentChild.balance)}</div>
          </div>
        </div>
      </div>

      <div style="background: var(--bg-surface-elevated); border-radius: var(--radius-lg); padding: 12px; margin-bottom: 16px; font-size: 11px; line-height: 1.6;">
        <div style="display: flex; justify-content: space-between;"><span>Weekly Allowance:</span><strong>${formatMoney(currentChild.allowanceAmount)}</strong></div>
        <div style="display: flex; justify-content: space-between;"><span>Daily Spend Limit:</span><strong>${formatMoney(currentChild.dailyLimit)}</strong></div>
        <div style="display: flex; justify-content: space-between;"><span>Parent Supervision:</span><strong style="color: var(--status-success);">Active (${rc.parentName})</strong></div>
      </div>

      <button class="btn-child-action" onclick="AppState.activeChildSubScreen = null; setChildTab('home');">
        ${t('openYouthHomeBtn')}
      </button>
    `;
  }

  return `
    <div class="ia-screen-crumb child-crumb">
      <span>IA Section C01 · Child Onboarding (${step}/4)</span>
    </div>

    <div class="onboarding-step-stepper">
      ${[1, 2, 3, 4].map(s => `
        <div class="step-dot child-dot ${s === step ? 'active' : ''}"></div>
      `).join('')}
    </div>

    ${stepContent}
  `;
}

window.startChildOnboardingFlow = function(step = 1) {
  AppState.childOnboardingStep = step;
  setChildSubScreen('onboarding');
  showToast('Started Section C01 Child Onboarding Flow', 'child');
};

window.setChildOnboardingStep = function(step) {
  AppState.childOnboardingStep = step;
  renderChildScreen();
};

// ==========================================================================
// 5. Child App Screen Renderers (All 14 Sections)
// ==========================================================================
function renderChildScreen() {
  const viewport = document.getElementById('child-screen-viewport');
  if (!viewport) return;

  let html = '';

  if (AppState.activeChildSubScreen) {
    switch (AppState.activeChildSubScreen) {
      case 'onboarding': html = renderChildOnboardingScreen(); break;
      case 'fun_zone': html = renderChildFunZoneScreen(); break;
      case 'literacy': html = renderChildLiteracyScreen(); break;
      case 'passcode': html = renderChildPasscodeScreen(); break;
      case 'avatar': html = renderChildAvatarScreen(); break;
      case 'child_notifications': html = renderChildNotificationsScreen(); break;
      default: html = renderChildHome();
    }
  } else {
    switch (AppState.activeChildTab) {
      case 'home': html = renderChildHome(); break;
      case 'wallet': html = renderChildWallet(); break;
      case 'scan': html = renderChildScan(); break;
      case 'activity': html = renderChildActivity(); break;
      case 'more': html = renderChildMore(); break;
      default: html = renderChildHome();
    }
  }

  viewport.innerHTML = html;
}

// 09 Transactions & Multi-Filters (Feature 10)
function renderParentTransactions() {
  const f = AppState.txFilters || { period: 'all', child: 'all', status: 'all', category: 'all' };

  let filtered = AppState.transactions.filter(tx => {
    if (f.child !== 'all') {
      if (f.child === 'sara' && !tx.user.toLowerCase().includes('sara')) return false;
      if (f.child === 'omar' && !tx.user.toLowerCase().includes('omar')) return false;
      if (f.child === 'youssef' && !tx.user.toLowerCase().includes('youssef')) return false;
    }
    if (f.status !== 'all' && tx.status.toLowerCase() !== f.status.toLowerCase()) return false;
    if (f.category !== 'all' && !tx.category.toLowerCase().includes(f.category.toLowerCase())) return false;
    return true;
  });

  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Section 09 · Transactions & Analytics (Multi-Filter)</span>
    </div>

    <div class="screen-header-row">
      <h3 style="font-size: 18px; font-weight: 800;">Transactions (${filtered.length})</h3>
      <button class="tree-act-btn" style="font-size: 10px;" onclick="resetTxFilters()">Reset Filters</button>
    </div>

    <!-- FEATURE 10: Multi-Filters Strip -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 10px; margin-bottom: 12px;">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px;">
        <div>
          <label style="font-size: 10px; font-weight: 700; color: var(--text-secondary); display: block; margin-bottom: 2px;">Child Filter</label>
          <select class="form-select" style="padding: 6px 8px; font-size: 11px;" onchange="setTxFilter('child', this.value)">
            <option value="all" ${f.child === 'all' ? 'selected' : ''}>All Children</option>
            <option value="sara" ${f.child === 'sara' ? 'selected' : ''}>Sara Al-Farsi</option>
            <option value="omar" ${f.child === 'omar' ? 'selected' : ''}>Omar Al-Farsi</option>
            <option value="youssef" ${f.child === 'youssef' ? 'selected' : ''}>Youssef Al-Farsi</option>
          </select>
        </div>
        <div>
          <label style="font-size: 10px; font-weight: 700; color: var(--text-secondary); display: block; margin-bottom: 2px;">Status</label>
          <select class="form-select" style="padding: 6px 8px; font-size: 11px;" onchange="setTxFilter('status', this.value)">
            <option value="all" ${f.status === 'all' ? 'selected' : ''}>All Statuses</option>
            <option value="completed" ${f.status === 'completed' ? 'selected' : ''}>Completed</option>
            <option value="blocked" ${f.status === 'blocked' ? 'selected' : ''}>Blocked</option>
            <option value="pending" ${f.status === 'pending' ? 'selected' : ''}>Pending</option>
          </select>
        </div>
      </div>
      <div>
        <label style="font-size: 10px; font-weight: 700; color: var(--text-secondary); display: block; margin-bottom: 2px;">Category</label>
        <select class="form-select" style="padding: 6px 8px; font-size: 11px;" onchange="setTxFilter('category', this.value)">
          <option value="all" ${f.category === 'all' ? 'selected' : ''}>All Categories</option>
          <option value="education" ${f.category === 'education' ? 'selected' : ''}>Education & Books</option>
          <option value="food" ${f.category === 'food' ? 'selected' : ''}>Food & Drinks</option>
          <option value="shopping" ${f.category === 'shopping' ? 'selected' : ''}>Shopping</option>
          <option value="gaming" ${f.category === 'gaming' ? 'selected' : ''}>Gaming</option>
          <option value="transport" ${f.category === 'transport' ? 'selected' : ''}>Transport</option>
        </select>
      </div>
    </div>

    <div class="tx-list" id="parent-tx-list-container">
      ${filtered.length === 0 ? `
        <div style="text-align: center; padding: 20px; color: var(--text-secondary); font-size: 12px;">No transactions match the selected filters.</div>
      ` : filtered.map(tx => `
        <div class="tx-row" onclick="openParentModal('txDetail', { txId: '${tx.id}' })">
          <div class="tx-left">
            <div class="tx-icon-box">${tx.status === 'Blocked' ? '🚫' : (tx.amount > 0 ? '💰' : '🛍️')}</div>
            <div class="tx-details">
              <h5>${tx.merchant}</h5>
              <small>${tx.user} · ${tx.category} · ${tx.time}</small>
            </div>
          </div>
          <div class="tx-right">
            <div class="tx-amount ${tx.amount > 0 ? 'positive' : ''}">
              ${tx.amount > 0 ? '+' : '-'}${formatMoney(Math.abs(tx.amount))}
            </div>
            <span class="tx-status-pill status-${tx.status.toLowerCase()}">${tx.status}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.setTxFilter = function(key, val) {
  if (!AppState.txFilters) AppState.txFilters = { period: 'all', child: 'all', status: 'all', category: 'all' };
  AppState.txFilters[key] = val;
  renderParentScreen();
};

window.resetTxFilters = function() {
  AppState.txFilters = { period: 'all', child: 'all', status: 'all', category: 'all' };
  renderParentScreen();
  showToast('Reset all transaction filters', 'parent');
};

// More Hub (Menu for Sections 10-17)
function renderParentMore() {
  const pendingCount = AppState.pendingRequests.filter(r => r.status === 'pending').length;
  return `
    <div class="ia-screen-crumb parent-crumb">
      <span>IA Sections 10 – 17 · Settings & Governance</span>
    </div>

    <div class="screen-header-row">
      <h3 style="font-size: 18px; font-weight: 800;">Settings & Governance</h3>
    </div>

    <div class="tx-list">
      <!-- 10 Approvals -->
      <div class="tx-row" onclick="openParentApprovalModal('req-001')">
        <div class="tx-left">
          <div class="tx-icon-box">🔔</div>
          <div class="tx-details">
            <h5>10. Approvals & Requests</h5>
            <small>Review child funding requests with OTP</small>
          </div>
        </div>
        <span class="ia-count-badge" style="background: var(--status-warning); color: #fff;">${pendingCount}</span>
      </div>

      <!-- 11 Notifications -->
      <div class="tx-row" onclick="setParentSubScreen('notifications')">
        <div class="tx-left">
          <div class="tx-icon-box">📢</div>
          <div class="tx-details">
            <h5>11. Notification Center</h5>
            <small>Payment, spending & security alerts</small>
          </div>
        </div>
        <span style="font-size: 16px; color: var(--text-tertiary);">→</span>
      </div>

      <!-- 12 Funding -->
      <div class="tx-row" onclick="setParentSubScreen('funding')">
        <div class="tx-left">
          <div class="tx-icon-box">🏦</div>
          <div class="tx-details">
            <h5>12. Funding & Bank Methods</h5>
            <small>Al Rajhi Bank, Cards & Open Banking</small>
          </div>
        </div>
        <span style="font-size: 16px; color: var(--text-tertiary);">→</span>
      </div>

      <!-- 13 Profile -->
      <div class="tx-row" onclick="setParentSubScreen('profile')">
        <div class="tx-left">
          <div class="tx-icon-box">👤</div>
          <div class="tx-details">
            <h5>13. Parent Profile</h5>
            <small>Nafath Tier-3 Verified Identity</small>
          </div>
        </div>
        <span style="font-size: 16px; color: var(--text-tertiary);">→</span>
      </div>

      <!-- 14 Security -->
      <div class="tx-row" onclick="setParentSubScreen('security')">
        <div class="tx-left">
          <div class="tx-icon-box">🔒</div>
          <div class="tx-details">
            <h5>14. Security & Biometrics</h5>
            <small>App PIN, Face ID & Trusted Devices</small>
          </div>
        </div>
        <span style="font-size: 16px; color: var(--text-tertiary);">→</span>
      </div>

      <!-- 15 Settings -->
      <div class="tx-row" onclick="setParentSubScreen('settings')">
        <div class="tx-left">
          <div class="tx-icon-box">⚙️</div>
          <div class="tx-details">
            <h5>15. General Settings</h5>
            <small>Currency (SAR), English/Arabic, Alerts</small>
          </div>
        </div>
        <span style="font-size: 16px; color: var(--text-tertiary);">→</span>
      </div>

      <!-- 16 Help -->
      <div class="tx-row" onclick="setParentSubScreen('help')">
        <div class="tx-left">
          <div class="tx-icon-box">❓</div>
          <div class="tx-details">
            <h5>16. Help & Support</h5>
            <small>24/7 Live Chat, FAQs & SAMA Inquiries</small>
          </div>
        </div>
        <span style="font-size: 16px; color: var(--text-tertiary);">→</span>
      </div>

      <!-- 17 Logout -->
      <div class="tx-row" onclick="setParentSubScreen('exit')">
        <div class="tx-left">
          <div class="tx-icon-box">🚪</div>
          <div class="tx-details">
            <h5 style="color: var(--status-danger);">17. Account Exit / Logout</h5>
            <small>Secure session exit</small>
          </div>
        </div>
        <span style="font-size: 16px; color: var(--status-danger);">→</span>
      </div>
    </div>
  `;
}

// Helper to get active child
function getCurrentActiveChild() {
  const childId = AppState.selectedChildId || 'sara';
  const child = AppState.children.find(c => c.id === childId) || AppState.children[0];
  const rc = getAppRegionConfig();
  if (child && rc.childNames && rc.childNames[child.id]) {
    child.name = rc.childNames[child.id];
  }
  return child;
}

window.switchActiveChild = function(childId) {
  AppState.selectedChildId = childId;
  AppState.activeChildSubScreen = null; // Return to main tab
  renderChildScreen();
  const child = AppState.children.find(c => c.id === childId);
  showToast(`Switched Child App to ${child ? child.name : ''}'s Profile!`, 'child');
};

window.addToChildSavings = function(childId) {
  const child = AppState.children.find(c => c.id === childId) || getCurrentActiveChild();
  if (!child) return;

  const curr = (typeof AppState !== 'undefined' && AppState.currency) || 'SAR';
  const meta = CURRENCY_RATES[curr] || CURRENCY_RATES.SAR;
  const rc = getAppRegionConfig();

  const stepAmount = 25 * meta.rate;

  if (child.balance < stepAmount) {
    showToast(`Insufficient balance in wallet to add ${formatMoney(stepAmount)} to goal!`, 'child');
    return;
  }

  child.balance -= stepAmount;
  child.savingsGoal.saved += stepAmount;
  child.savingsGoal.remaining = Math.max(0, child.savingsGoal.target - child.savingsGoal.saved);
  const pct = Math.min(100, Math.round((child.savingsGoal.saved / child.savingsGoal.target) * 100));

  if (child.savingsGoal.saved >= child.savingsGoal.target) {
    // 100% Milestone Achieved! Trigger Dad's Praise & Bonus Reward!
    const rewardBonus = curr === 'INR' ? 100 : (curr === 'USD' || curr === 'EUR' ? 15 : 25);
    child.balance += rewardBonus;
    AppState.childAppreciation = {
      childId: child.id,
      message: `🎉 OUTSTANDING! You completed your "${child.savingsGoal.name}" goal fast! Dad is super proud of you! ⭐`,
      reward: rewardBonus
    };
    showToast(`🎉 GOAL 100% COMPLETE! ${rc.parentName} (Dad) sent Praise ⭐ & +${formatMoney(rewardBonus)} Cash Reward Bonus!`, 'child');
  } else {
    showToast(`🚀 Added ${formatMoney(stepAmount)} to goal (${pct}%)! Reach 100% fast to earn Dad's Praise & Reward! ⭐`, 'child');
  }

  renderChildScreen();
  renderParentScreen();
};

// C02 Child Home
function renderChildHome() {
  const currentChild = getCurrentActiveChild();
  const availableToday = Math.max(0, currentChild.dailyLimit - currentChild.spentToday);
  const appreciation = AppState.childAppreciation;
  const pctSaved = Math.min(100, Math.round((currentChild.savingsGoal.saved / currentChild.savingsGoal.target) * 100));

  return `
    <div class="ia-screen-crumb child-crumb">
      <span>IA Section C02 · Child Home & Spending Layer</span>
    </div>

    <!-- Child Profile Selector Bar (Separate for each child) -->
    <div class="child-profile-switcher-bar" style="display: flex; gap: 6px; padding: 0 0 10px 0; overflow-x: auto;">
      ${AppState.children.map(c => `
        <button class="child-filter-chip ${c.id === currentChild.id ? 'active' : ''}" style="${c.id === currentChild.id ? 'background: var(--child-deep); color: #fff; border-color: var(--child-deep); box-shadow: 0 2px 8px rgba(13, 148, 136, 0.25);' : ''}" onclick="switchActiveChild('${c.id}')">
          <span>${c.avatar}</span> ${c.shortName}
        </button>
      `).join('')}
    </div>

    <!-- C02.1 Header -->
    <div class="screen-header-row">
      <div class="user-profile-head">
        <div class="avatar-ring child-avatar" onclick="setChildSubScreen('avatar')" style="cursor: pointer;" title="Customize Avatar (C13)">${currentChild.avatar}</div>
        <div>
          <div class="greeting-text">Hey there,</div>
          <div class="user-name-title">${currentChild.name}</div>
        </div>
      </div>
      <div class="header-action-icons">
        <button class="head-icon-btn" onclick="setChildSubScreen('child_notifications')" title="Alerts (C11)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </button>
      </div>
    </div>

    <!-- FEATURE 8: Incoming Parent Appreciation / Reward Banner -->
    ${appreciation && appreciation.childId === currentChild.id ? `
      <div class="child-appreciation-banner">
        <span style="font-size: 24px;">⭐</span>
        <div style="flex: 1;">
          <strong>Dad sent you praise: "${appreciation.message}"</strong>
          <p>${appreciation.reward > 0 ? `+${formatMoney(appreciation.reward)} reward bonus added to your savings!` : 'Keep making great financial decisions!'}</p>
        </div>
        <button class="tree-act-btn" style="padding: 2px 6px; font-size: 10px;" onclick="dismissChildAppreciation()">✕</button>
      </div>
    ` : ''}

    <!-- C02.1 Hero Question: "How much can I spend?" -->
    <div class="hero-child-wallet-card" style="background: linear-gradient(135deg, ${currentChild.color} 0%, #115E59 100%);">
      <div class="card-top-label">
        <span>Available Wallet Balance</span>
        <span style="font-size: 11px; opacity: 0.9;">${(CURRENCY_RATES[AppState.currency] || CURRENCY_RATES.SAR).flag} ${(CURRENCY_RATES[AppState.currency] || CURRENCY_RATES.SAR).symbol}</span>
      </div>
      <div class="hero-balance-val">
        <span class="currency">${(CURRENCY_RATES[AppState.currency] || CURRENCY_RATES.SAR).symbol}</span>
        <span>${formatMoney(currentChild.balance, false)}</span>
      </div>
      <div class="card-metrics-grid">
        <div class="metric-item">
          <small>${t('availableToday')}</small>
          <strong>${formatMoney(availableToday)}</strong>
        </div>
        <div class="metric-item">
          <small>Daily Tx Count</small>
          <strong>${currentChild.txCompletedToday} / ${currentChild.dailyTxCountLimit} used</strong>
        </div>
      </div>
    </div>

    <!-- FEATURE 7: Savings Tracker Section with Dad's Praise & Reward Promise -->
    <div class="savings-goal-card" style="background: linear-gradient(145deg, #064E3B 0%, #0F766E 100%); color: #fff; border-radius: var(--radius-xl); padding: 16px; margin-bottom: 16px; box-shadow: 0 8px 24px rgba(6, 78, 59, 0.35); position: relative; overflow: hidden;">
      <!-- Top header with Goal name & % -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="font-size: 16px;">🎯</span>
          <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.05em; color: #A7F3D0; text-transform: uppercase;">${t('savingsGoal')}</span>
        </div>
        <span style="font-weight: 800; font-size: 13px; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: var(--radius-full); color: #FDE047;">${pctSaved}%</span>
      </div>

      <div style="font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 8px;">${currentChild.savingsGoal.name}</div>
      
      <!-- Animated Progress Bar -->
      <div style="height: 8px; background: rgba(0,0,0,0.3); border-radius: 6px; overflow: hidden; margin-bottom: 10px; border: 1px solid rgba(255,255,255,0.15);">
        <div style="width: ${pctSaved}%; height: 100%; background: linear-gradient(90deg, #10B981 0%, #5EEAD4 100%); border-radius: 6px; transition: width 0.4s ease;"></div>
      </div>

      <!-- Stats Grid -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; text-align: center; background: rgba(0,0,0,0.2); padding: 8px 6px; border-radius: var(--radius-lg); margin-bottom: 10px; font-size: 10px;">
        <div>
          <span style="opacity: 0.8; display: block;">${t('saved')}</span>
          <strong style="color: #6EE7B7; font-size: 12px;">${formatMoney(currentChild.savingsGoal.saved)}</strong>
        </div>
        <div>
          <span style="opacity: 0.8; display: block;">${t('target')}</span>
          <strong style="color: #fff; font-size: 12px;">${formatMoney(currentChild.savingsGoal.target)}</strong>
        </div>
        <div>
          <span style="opacity: 0.8; display: block;">${t('remaining')}</span>
          <strong style="color: #FDE047; font-size: 12px;">${formatMoney(currentChild.savingsGoal.remaining)}</strong>
        </div>
      </div>

      <!-- ⭐ DAD'S PRAISE & BONUS PROMISE BANNER -->
      <div style="background: rgba(254, 240, 138, 0.16); border: 1.5px dashed #FDE047; border-radius: var(--radius-md); padding: 8px 10px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 22px;">🎁</span>
        <div style="flex: 1; line-height: 1.35;">
          <div style="font-size: 11px; font-weight: 800; color: #FDE047; display: flex; justify-content: space-between; align-items: center;">
            <span>⚡ DAD'S PRAISE & REWARD PROMISE</span>
            <span>⭐ +Bonus</span>
          </div>
          <p style="font-size: 10px; color: #FEF08A; margin: 2px 0 0 0;">
            Complete this goal fast to earn <strong>${getAppRegionConfig().parentName}'s Praise (⭐)</strong> + a <strong>Special Cash Match Reward Bonus!</strong>
          </p>
        </div>
      </div>

      <!-- Action Button -->
      <button class="tree-act-btn" style="width: 100%; background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: #fff; font-weight: 800; font-size: 12px; border: none; padding: 10px; border-radius: var(--radius-md); box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px;" onclick="addToChildSavings('${currentChild.id}')">
        <span>🚀 + Add ${formatMoney(25 * (CURRENCY_RATES[AppState.currency] || CURRENCY_RATES.SAR).rate)} to Goal & Earn Dad's Praise ⭐</span>
      </button>
    </div>

    <!-- C02 Quick Action Button -->
    <button class="btn-child-action" style="margin-bottom: 16px; display: flex; align-items: center; justify-content: center; gap: 8px;" onclick="setChildTab('scan')">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="8" height="8" x="8" y="8" rx="1"/></svg>
      ${t('scanQrBtn')}
    </button>

    <!-- C04 Spending Limits & Guardrails (View-Only) -->
    <div class="section-head">
      <h4>${t('guardrails')}</h4>
      <span style="font-size: 11px; color: var(--text-tertiary);">${t('managedByDad')}</span>
    </div>

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px; margin-bottom: 12px;">
      <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 6px;">
        <span>${t('dailyLimit')}: <strong>${formatMoney(currentChild.dailyLimit)}</strong></span>
        <span>Max Transactions: <strong>${currentChild.dailyTxCountLimit} / day</strong></span>
      </div>
      <div style="font-size: 11px; color: var(--status-success); margin-top: 4px;">
        ✓ Allowed: ${currentChild.allowedCategories.join(', ')}
      </div>
      <div style="font-size: 11px; color: var(--status-danger); margin-top: 4px;">
        🚫 Restricted: ${currentChild.blockedCategories.join(', ')}
      </div>
    </div>
  `;
}
// C03 Child Wallet
function renderChildWallet() {
  const currentChild = getCurrentActiveChild();
  const rc = getAppRegionConfig();
  const pctSaved = Math.min(100, Math.round((currentChild.savingsGoal.saved / currentChild.savingsGoal.target) * 100));

  return `
    <div class="ia-screen-crumb child-crumb">
      <span>IA Section C03 · Child Digital Card & Wallet</span>
    </div>

    <!-- Child Profile Selector Bar -->
    <div class="child-profile-switcher-bar" style="display: flex; gap: 6px; padding: 0 0 10px 0; overflow-x: auto;">
      ${AppState.children.map(c => `
        <button class="child-filter-chip ${c.id === currentChild.id ? 'active' : ''}" style="${c.id === currentChild.id ? 'background: var(--child-deep); color: #fff; border-color: var(--child-deep);' : ''}" onclick="switchActiveChild('${c.id}')">
          <span>${c.avatar}</span> ${c.shortName}
        </button>
      `).join('')}
    </div>

    <div class="screen-header-row">
      <h3 style="font-size: 18px; font-weight: 800;">Digital Debit Card (C03)</h3>
    </div>

    <div style="background: linear-gradient(135deg, ${currentChild.color || '#0D9488'} 0%, #115E59 100%); color: #fff; border-radius: 20px; padding: 20px; height: 190px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: var(--shadow-card); margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 800; font-size: 15px; letter-spacing: 0.05em;">${rc.cardBrand.toUpperCase()}</span>
        <span style="font-size: 12px; opacity: 0.95; font-weight: 800; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 4px;">${rc.cardNetwork}</span>
      </div>
      <div style="font-size: 16px; letter-spacing: 0.15em; font-family: monospace;">${rc.currencySymbol} •••• •••• •••• ${currentChild.id === 'sara' ? '4291' : (currentChild.id === 'omar' ? '8814' : '3302')}</div>
      <div style="display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <small style="font-size: 9px; opacity: 0.8; display: block;">CARDHOLDER</small>
          <strong>${currentChild.name.toUpperCase()}</strong>
        </div>
        <div>
          <small style="font-size: 9px; opacity: 0.8; display: block;">EXPIRES</small>
          <strong>08/29</strong>
        </div>
      </div>
    </div>

    <!-- FEATURE 7: Savings Tracker in Wallet with Dad's Praise Promise -->
    <div class="savings-goal-card" style="background: linear-gradient(145deg, #064E3B 0%, #0F766E 100%); color: #fff; border-radius: var(--radius-xl); padding: 16px; margin-bottom: 16px; box-shadow: 0 8px 24px rgba(6, 78, 59, 0.35);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <span style="font-size: 11px; font-weight: 800; color: #A7F3D0; text-transform: uppercase;">🎯 ${t('savingsGoal')}</span>
        <span style="font-weight: 800; font-size: 13px; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: var(--radius-full); color: #FDE047;">${pctSaved}%</span>
      </div>
      <div style="font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 8px;">${currentChild.savingsGoal.name}</div>
      <div style="height: 8px; background: rgba(0,0,0,0.3); border-radius: 6px; overflow: hidden; margin-bottom: 10px;">
        <div style="width: ${pctSaved}%; height: 100%; background: linear-gradient(90deg, #10B981 0%, #5EEAD4 100%); border-radius: 6px;"></div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; text-align: center; background: rgba(0,0,0,0.2); padding: 8px 6px; border-radius: var(--radius-lg); margin-bottom: 10px; font-size: 10px;">
        <div><span>${t('saved')}</span><strong style="color: #6EE7B7; display: block; font-size: 12px;">${formatMoney(currentChild.savingsGoal.saved)}</strong></div>
        <div><span>${t('target')}</span><strong style="color: #fff; display: block; font-size: 12px;">${formatMoney(currentChild.savingsGoal.target)}</strong></div>
        <div><span>${t('remaining')}</span><strong style="color: #FDE047; display: block; font-size: 12px;">${formatMoney(currentChild.savingsGoal.remaining)}</strong></div>
      </div>

      <!-- ⭐ DAD'S PRAISE BANNER IN WALLET -->
      <div style="background: rgba(254, 240, 138, 0.16); border: 1.5px dashed #FDE047; border-radius: var(--radius-md); padding: 8px 10px; margin-bottom: 12px; font-size: 10px; color: #FEF08A; line-height: 1.35;">
        🎁 <strong>Dad's Praise Promise:</strong> Complete this goal to unlock Dad's Praise (⭐) and cash bonus match!
      </div>

      <button class="tree-act-btn" style="width: 100%; background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: #fff; font-weight: 800; border: none; padding: 9px; border-radius: var(--radius-md);" onclick="addToChildSavings('${currentChild.id}')">
        + Add ${formatMoney(25 * (CURRENCY_RATES[AppState.currency] || CURRENCY_RATES.SAR).rate)} to Goal & Win Dad's Praise ⭐
      </button>
    </div>

    <div class="section-head">
      <h4>Pockets Overview (C03.1)</h4>
    </div>
    <div class="tx-list">
      <div class="tx-row">
        <div class="tx-left">
          <div class="tx-icon-box">💳</div>
          <div class="tx-details">
            <h5>Main Spending Pocket</h5>
            <small>Available for immediate QR payments</small>
          </div>
        </div>
        <div class="tx-amount">${formatMoney(currentChild.balance)}</div>
      </div>
      <div class="tx-row">
        <div class="tx-left">
          <div class="tx-icon-box">🎯</div>
          <div class="tx-details">
            <h5>Savings Goal: ${currentChild.savingsGoal.name}</h5>
            <small>Target: ${formatMoney(currentChild.savingsGoal.target)}</small>
          </div>
        </div>
        <div class="tx-amount positive">${formatMoney(currentChild.savingsGoal.saved)}</div>
      </div>
    </div>
  `;
}

// Child More Hub (C11 - C15)
function renderChildMore() {
  const currentChild = getCurrentActiveChild();
  return `
    <div class="ia-screen-crumb child-crumb">
      <span>IA Sections C11 – C15 · Youth Fun & Power Hub</span>
    </div>

    <!-- Child Profile Selector Bar -->
    <div class="child-profile-switcher-bar" style="display: flex; gap: 6px; padding: 0 0 10px 0; overflow-x: auto;">
      ${AppState.children.map(c => `
        <button class="child-filter-chip ${c.id === currentChild.id ? 'active' : ''}" style="${c.id === currentChild.id ? 'background: var(--child-deep); color: #fff; border-color: var(--child-deep);' : ''}" onclick="switchActiveChild('${c.id}')">
          <span>${c.avatar}</span> ${c.shortName}
        </button>
      `).join('')}
    </div>

    <div class="screen-header-row">
      <div>
        <h3 style="font-size: 18px; font-weight: 800;">Youth Fun & Power Hub (${currentChild.shortName})</h3>
        <p style="font-size: 11px; color: var(--text-secondary); margin-top: 2px;">Card Studio, Daily Spin Wheel, Quests & Security</p>
      </div>
    </div>

    <div class="tx-list">
      <!-- 🎮 C15: Daily Spin & Fun Zone (Highlighted New Feature) -->
      <div class="tx-row" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(236, 72, 153, 0.12) 100%); border-left: 3.5px solid #F59E0B;" onclick="setChildSubScreen('fun_zone')">
        <div class="tx-left">
          <div class="tx-icon-box" style="background: linear-gradient(135deg, #F59E0B, #EC4899); color: #fff; font-size: 20px;">🎡</div>
          <div class="tx-details">
            <h5 style="color: #D97706; font-size: 14px; font-weight: 800;">C15. Daily Spin & Fun Zone 🎮</h5>
            <small>Spin the Wheel, Scratch & Win Reward Coins!</small>
          </div>
        </div>
        <span style="font-weight: 800; color: #D97706; font-size: 16px;">PLAY ⚡</span>
      </div>

      <!-- 🎨 C13: Youth Studio & Card Customizer -->
      <div class="tx-row" style="background: linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%); border-left: 3.5px solid var(--child-deep);" onclick="setChildSubScreen('avatar')">
        <div class="tx-left">
          <div class="tx-icon-box" style="background: var(--child-subtle); color: var(--child-deep); font-size: 20px;">🎨</div>
          <div class="tx-details">
            <h5 style="color: var(--child-deep); font-size: 14px; font-weight: 800;">C13. Youth Studio & Card Skins</h5>
            <small>3D Avatars, Holographic Themes & Gamer Badges</small>
          </div>
        </div>
        <span style="font-weight: 800; color: var(--child-deep);">→</span>
      </div>

      <!-- 🏆 C14: Smart Money Quest & Academy -->
      <div class="tx-row" onclick="setChildSubScreen('literacy')">
        <div class="tx-left">
          <div class="tx-icon-box" style="background: rgba(99, 102, 241, 0.15); color: #6366F1; font-size: 20px;">🏆</div>
          <div class="tx-details">
            <h5 style="font-size: 14px; font-weight: 800;">C14. Smart Money Quest & Academy</h5>
            <small>Level 2 Money Ninja 🥋 · Earn XP & Badges</small>
          </div>
        </div>
        <span style="color: var(--text-tertiary);">→</span>
      </div>

      <!-- 🛡️ C12: Security Guard & Biometrics -->
      <div class="tx-row" onclick="setChildSubScreen('passcode')">
        <div class="tx-left">
          <div class="tx-icon-box" style="background: rgba(16, 185, 129, 0.15); color: #059669; font-size: 20px;">🛡️</div>
          <div class="tx-details">
            <h5 style="font-size: 14px; font-weight: 800;">C12. Security Guard & Biometrics</h5>
            <small>4-digit payment PIN, Face ID & Card Freeze</small>
          </div>
        </div>
        <span style="color: var(--text-tertiary);">→</span>
      </div>

      <!-- 📢 C11: Allowance Radar & Approvals -->
      <div class="tx-row" onclick="setChildSubScreen('child_notifications')">
        <div class="tx-left">
          <div class="tx-icon-box" style="background: rgba(236, 72, 153, 0.15); color: #EC4899; font-size: 20px;">📢</div>
          <div class="tx-details">
            <h5 style="font-size: 14px; font-weight: 800;">C11. Allowance Radar & Dad Approvals</h5>
            <small>Live alerts for pocket money & store requests</small>
          </div>
        </div>
        <span style="color: var(--text-tertiary);">→</span>
      </div>

      <!-- 🚀 C01: Child Onboarding Flow Replay -->
      <div class="tx-row" style="background: var(--bg-surface-elevated);" onclick="startChildOnboardingFlow(1)">
        <div class="tx-left">
          <div class="tx-icon-box" style="background: var(--bg-surface); font-size: 20px;">🚀</div>
          <div class="tx-details">
            <h5 style="font-size: 14px; font-weight: 800;">C01. Child Onboarding & Invite Setup</h5>
            <small>4-step welcome & digital debit card issuance</small>
          </div>
        </div>
        <span style="color: var(--text-tertiary);">→</span>
      </div>
    </div>
  `;
}

// 🎮 C15 Full Screen: Daily Spin & Fun Zone Minigames
function renderChildFunZoneScreen() {
  const currentChild = getCurrentActiveChild();
  const rc = getAppRegionConfig();
  const hasSpun = AppState.childHasSpunToday || false;

  return `
    <div class="ia-screen-crumb child-crumb">
      <span>IA Section C15 · Daily Spin & Fun Zone</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setChildTab('more')">← Back</button>
        <div>
          <h3 style="font-size: 18px; font-weight: 800;">Daily Fun Arcade (C15)</h3>
        </div>
      </div>
    </div>

    <!-- 🎡 1. Interactive Daily Fortune Spin Wheel -->
    <div style="background: linear-gradient(135deg, #1E1B4B 0%, #312E81 100%); color: #fff; padding: 18px; border-radius: var(--radius-xl); margin-bottom: 14px; text-align: center; box-shadow: 0 10px 30px rgba(49, 46, 129, 0.35); position: relative; overflow: hidden;">
      <div style="font-size: 11px; font-weight: 800; color: #FDE047; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px;">
        🎡 DAILY STREAK SPIN WHEEL
      </div>
      <div style="font-size: 15px; font-weight: 800; margin-bottom: 12px;">Spin to Win XP, Coins & Dad Praise!</div>

      <!-- Animated Graphic Wheel Center -->
      <div id="spin-wheel-circle" style="width: 140px; height: 140px; margin: 0 auto 14px auto; border-radius: 50%; border: 6px solid #FDE047; background: conic-gradient(#EF4444 0deg 60deg, #F59E0B 60deg 120deg, #10B981 120deg 180deg, #06B6D4 180deg 240deg, #8B5CF6 240deg 300deg, #EC4899 300deg 360deg); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 25px rgba(253, 224, 71, 0.4); transition: transform 3s cubic-bezier(0.15, 0.9, 0.25, 1);">
        <div style="width: 50px; height: 50px; background: #0F172A; border-radius: 50%; border: 3px solid #fff; display: flex; align-items: center; justify-content: center; font-size: 22px;">
          ⭐
        </div>
      </div>

      <div style="font-size: 11px; color: #C7D2FE; margin-bottom: 12px;">
        Prizes: +₹25 / SAR 10 Cash · 100 XP · 🥋 Ninja Badge · Dad Praise ⭐
      </div>

      <button id="spin-wheel-btn" class="tree-act-btn" style="width: 100%; background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); color: #fff; font-weight: 800; font-size: 14px; padding: 12px; border: none; border-radius: var(--radius-lg); box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4); cursor: pointer;" onclick="spinChildWheel()">
        ${hasSpun ? '🎉 Prize Claimed for Today!' : '🎡 SPIN WHEEL NOW (Free) →'}
      </button>
    </div>

    <!-- 🎟️ 2. Mystery Scratch Card Challenge -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        <div>
          <span style="font-size: 13px; font-weight: 800; color: var(--text-primary); display: block;">🎟️ Mystery Scratch Card</span>
          <small style="font-size: 11px; color: var(--text-secondary);">Scratch to reveal your surprise savings booster</small>
        </div>
        <span style="font-size: 10px; font-weight: 800; background: rgba(13, 148, 136, 0.15); color: var(--child-deep); padding: 2px 6px; border-radius: 4px;">READY</span>
      </div>

      <div id="scratch-box-target" style="background: linear-gradient(135deg, #475569 0%, #334155 100%); color: #F1F5F9; border-radius: var(--radius-lg); padding: 20px; text-align: center; cursor: pointer; border: 2px dashed #94A3B8; position: relative;" onclick="scratchChildCard()">
        <div id="scratch-content-hidden">
          <div style="font-size: 28px; margin-bottom: 4px;">✨ 🎁 ✨</div>
          <div style="font-size: 13px; font-weight: 800;">TAP TO SCRATCH & REVEAL</div>
          <div style="font-size: 10px; opacity: 0.8; margin-top: 2px;">Hidden reward inside!</div>
        </div>
      </div>
    </div>
  `;
}

window.spinChildWheel = function() {
  const wheel = document.getElementById('spin-wheel-circle');
  const btn = document.getElementById('spin-wheel-btn');
  if (!wheel || AppState.childHasSpunToday) {
    showToast('You already spun today! Come back tomorrow for another spin! 🎡', 'child');
    return;
  }

  AppState.childHasSpunToday = true;
  const degrees = 1800 + Math.floor(Math.random() * 360);
  wheel.style.transform = `rotate(${degrees}deg)`;

  if (btn) btn.innerText = 'Spinning... 🌀';

  setTimeout(() => {
    const currentChild = getCurrentActiveChild();
    const curr = (typeof AppState !== 'undefined' && AppState.currency) || 'SAR';
    const bonus = curr === 'INR' ? 25 : 10;
    currentChild.balance += bonus;
    if (btn) btn.innerText = '🎉 Won +Bonus! Claimed Today';
    showToast(`🎉 JACKPOT! You won +${formatMoney(bonus)} Cash Reward & 100 XP! ⭐`, 'child');
    renderChildScreen();
  }, 3200);
};

window.scratchChildCard = function() {
  const box = document.getElementById('scratch-box-target');
  if (!box || box.dataset.scratched) return;
  box.dataset.scratched = 'true';
  const curr = (typeof AppState !== 'undefined' && AppState.currency) || 'SAR';
  const bonus = curr === 'INR' ? 50 : 15;
  const currentChild = getCurrentActiveChild();
  currentChild.savingsGoal.saved += bonus;
  currentChild.savingsGoal.remaining = Math.max(0, currentChild.savingsGoal.target - currentChild.savingsGoal.saved);

  box.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
  box.innerHTML = `
    <div style="font-size: 32px;">🎉 ⭐ 🎁</div>
    <div style="font-size: 15px; font-weight: 800; color: #fff; margin-top: 4px;">CONGRATULATIONS!</div>
    <div style="font-size: 12px; color: #A7F3D0; margin-top: 2px;">+${formatMoney(bonus)} Added Directly to Your Savings Goal!</div>
  `;
  showToast(`🎉 Scratch Card Winner! +${formatMoney(bonus)} added to ${currentChild.savingsGoal.name}!`, 'child');
  renderChildScreen();
};

// 🎨 C13 Full Screen: Youth Studio & Card Customizer
function renderChildAvatarScreen() {
  const currentChild = getCurrentActiveChild();
  const rc = getAppRegionConfig();
  const avatarCategory = AppState.activeAvatarCategory || 'all';

  const avatarCategories = [
    { id: 'all', label: '🔥 All' },
    { id: 'gamers', label: '🎮 Gamers' },
    { id: 'creators', label: '🎨 Creators' },
    { id: 'space', label: '🚀 Space' },
    { id: 'sports', label: '⚽ Sports' },
    { id: 'legends', label: '👑 Legends' }
  ];

  const avatarDatabase = {
    all: ['👧', '👦', '🎧', '🎮', '👾', '🚀', '🏎️', '🎨', '🛹', '⚽', '🏀', '🦄', '🌟', '⚡', '🥋', '🦖', '🤖', '🎸', '👑', '🔥', '🏆', '🐱', '🦊', '🐯'],
    gamers: ['🎮', '👾', '🕹️', '🎧', '🤖', '⚡', '🔥', '🏆'],
    creators: ['🎨', '🎸', '🎧', '🦄', '✨', '📸', '🎭', '🌟'],
    space: ['🚀', '🛸', '🪐', '🌌', '🤖', '👾', '⭐', '☄️'],
    sports: ['⚽', '🏀', '🛹', '🏎️', '🥋', '🥊', '🚴', '🏆'],
    legends: ['👑', '🔥', '🦖', '🐯', '🦁', '🦅', '🦄', '💎']
  };

  const currentAvatars = avatarDatabase[avatarCategory] || avatarDatabase.all;

  const cardThemes = [
    { name: 'Cyber Teal', color: '#0D9488' },
    { name: 'Galactic Violet', color: '#7C3AED' },
    { name: 'Electric Azure', color: '#2563EB' },
    { name: 'Sunset Crimson', color: '#DB2777' },
    { name: 'Emerald Gold', color: '#059669' },
    { name: 'Midnight Obsidian', color: '#0F172A' },
    { name: 'Solar Amber', color: '#D97706' }
  ];

  const gamerBadges = [
    '⭐ LEVEL 1: SMART SAVER',
    '🎮 GAMING LEGEND',
    '🚀 FUTURE TECH FOUNDER',
    '🎨 CREATIVE GENIUS',
    '⚽ SPORTS CHAMPION',
    '🥋 MONEY NINJA'
  ];

  const currentBadge = currentChild.badge || '⭐ LEVEL 1: SMART SAVER';

  return `
    <div class="ia-screen-crumb child-crumb">
      <span>IA Section C13 · Youth Studio & Card Customizer</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setChildTab('more')">← Back</button>
        <div>
          <h3 style="font-size: 18px; font-weight: 800;">Youth Studio (C13)</h3>
        </div>
      </div>
    </div>

    <!-- Live 3D Holographic Card Interactive Preview -->
    <div class="youth-digital-debit-card" style="background: linear-gradient(135deg, ${currentChild.color || '#0D9488'} 0%, #0F172A 100%); margin-bottom: 14px; padding: 16px; border-radius: var(--radius-xl); color: #fff; box-shadow: 0 12px 30px rgba(0,0,0,0.35); position: relative; overflow: hidden;">
      <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: rgba(255,255,255,0.06); border-radius: 50%;"></div>
      
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div>
          <span style="font-size: 13px; font-weight: 800; letter-spacing: 0.08em; color: #5EEAD4; display: block;">${rc.cardBrand.toUpperCase()}</span>
          <span style="font-size: 9px; font-weight: 700; color: #FDE047; letter-spacing: 0.05em;">${currentBadge}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.05em; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 4px; color: #fff;">${rc.cardNetwork}</span>
          <span style="font-size: 24px;">${currentChild.avatar}</span>
        </div>
      </div>

      <div style="font-size: 15px; font-weight: 700; letter-spacing: 0.15em; margin-bottom: 12px; font-family: monospace;">
        ${rc.currencySymbol} •••• •••• •••• ${currentChild.id === 'sara' ? '4291' : (currentChild.id === 'omar' ? '8814' : '3302')}
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <div style="font-size: 8px; opacity: 0.8; text-transform: uppercase;">CARDHOLDER</div>
          <div style="font-size: 13px; font-weight: 800;">${currentChild.name.toUpperCase()}</div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 8px; opacity: 0.8;">EXPIRES</div>
          <div style="font-size: 11px; font-weight: 700;">10/30</div>
        </div>
      </div>
    </div>

    <!-- Section 1: Persona Avatar Picker with Categories -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 14px; margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 800; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
        <span>1. Choose Persona Avatar</span>
        <span style="font-size: 11px; color: var(--child-deep);">Current: ${currentChild.avatar}</span>
      </div>

      <!-- Category Filter Pills -->
      <div style="display: flex; gap: 4px; overflow-x: auto; margin-bottom: 10px; padding-bottom: 2px;">
        ${avatarCategories.map(cat => `
          <button type="button" style="padding: 4px 8px; font-size: 10px; font-weight: 700; border-radius: var(--radius-full); border: 1px solid ${avatarCategory === cat.id ? 'var(--child-deep)' : 'var(--border-subtle)'}; background: ${avatarCategory === cat.id ? 'var(--child-subtle)' : 'var(--bg-surface-elevated)'}; color: ${avatarCategory === cat.id ? 'var(--child-deep)' : 'var(--text-secondary)'}; cursor: pointer; white-space: nowrap;" onclick="AppState.activeAvatarCategory='${cat.id}'; renderChildScreen();">
            ${cat.label}
          </button>
        `).join('')}
      </div>

      <!-- Avatars Grid -->
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px;">
        ${currentAvatars.map(av => `
          <button type="button" style="font-size: 22px; background: ${currentChild.avatar === av ? 'var(--child-subtle)' : 'var(--bg-surface-elevated)'}; border: 1.5px solid ${currentChild.avatar === av ? 'var(--child-deep)' : 'var(--border-subtle)'}; border-radius: var(--radius-md); padding: 6px 0; cursor: pointer; transition: transform 0.15s;" onclick="changeChildAvatar('${currentChild.id}', '${av}')">
            ${av}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Section 2: Card Skin & Gradient Themes -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 14px; margin-bottom: 12px;">
      <div style="font-size: 12px; font-weight: 800; margin-bottom: 8px;">2. Pick Card Skin & Theme</div>
      <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px;">
        ${cardThemes.map(th => `
          <button type="button" style="width: 38px; height: 32px; flex-shrink: 0; border-radius: var(--radius-md); background: ${th.color}; border: 2px solid ${currentChild.color === th.color ? '#FFFFFF' : 'transparent'}; box-shadow: ${currentChild.color === th.color ? '0 0 0 2px var(--child-deep)' : 'none'}; cursor: pointer;" title="${th.name}" onclick="changeChildThemeColor('${currentChild.id}', '${th.color}')">
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Section 3: Gamer Badges & Titles -->
    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 14px; margin-bottom: 14px;">
      <div style="font-size: 12px; font-weight: 800; margin-bottom: 8px;">3. Gamer & Youth Status Title</div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        ${gamerBadges.map(bg => `
          <button type="button" style="text-align: left; padding: 8px 12px; font-size: 11px; font-weight: 700; border-radius: var(--radius-md); border: 1px solid ${currentBadge === bg ? 'var(--child-deep)' : 'var(--border-subtle)'}; background: ${currentBadge === bg ? 'var(--child-subtle)' : 'var(--bg-surface-elevated)'}; color: ${currentBadge === bg ? 'var(--child-deep)' : 'var(--text-primary)'}; cursor: pointer; display: flex; justify-content: space-between; align-items: center;" onclick="changeChildBadge('${currentChild.id}', '${bg}')">
            <span>${bg}</span>
            ${currentBadge === bg ? '<span>✓</span>' : ''}
          </button>
        `).join('')}
      </div>
    </div>

    <button class="btn-child-action" onclick="showToast('Youth Persona & Card saved to Wallet!', 'child'); setChildTab('wallet');">
      Apply to My Digital Card (C03) →
    </button>
  `;
}

window.changeChildAvatar = function(childId, emoji) {
  const child = AppState.children.find(c => c.id === childId);
  if (child) child.avatar = emoji;
  showToast(`Persona Avatar set to ${emoji}!`, 'child');
  renderChildScreen();
  renderParentScreen();
};

window.changeChildThemeColor = function(childId, color) {
  const child = AppState.children.find(c => c.id === childId);
  if (child) child.color = color;
  showToast('Card skin theme applied!', 'child');
  renderChildScreen();
};

window.changeChildBadge = function(childId, badge) {
  const child = AppState.children.find(c => c.id === childId);
  if (child) child.badge = badge;
  showToast(`Card Title set to ${badge}!`, 'child');
  renderChildScreen();
};

// 🏆 C14 Full Screen: Financial Literacy & Gamified Academy
function renderChildLiteracyScreen() {
  const currentChild = getCurrentActiveChild();
  return `
    <div class="ia-screen-crumb child-crumb">
      <span>IA Section C14 · Smart Money Quest & Academy</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setChildTab('more')">← Back</button>
        <div>
          <h3 style="font-size: 18px; font-weight: 800;">Smart Money Academy (C14)</h3>
        </div>
      </div>
    </div>

    <!-- XP Level Card -->
    <div style="background: linear-gradient(135deg, #1E1B4B 0%, #312E81 100%); color: #fff; padding: 14px; border-radius: var(--radius-xl); margin-bottom: 14px; box-shadow: 0 4px 16px rgba(49, 46, 129, 0.25);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 11px; font-weight: 800; color: #A5B4FC;">LEVEL 2 MONEY NINJA 🥋</span>
        <span style="font-size: 12px; font-weight: 800; color: #FDE047;">450 / 600 XP</span>
      </div>
      <div style="height: 6px; background: rgba(255,255,255,0.2); border-radius: 4px; overflow: hidden; margin-bottom: 8px;">
        <div style="width: 75%; height: 100%; background: #5EEAD4; border-radius: 4px;"></div>
      </div>
      <div style="font-size: 10px; color: #C7D2FE; display: flex; justify-content: space-between;">
        <span>🔥 7-Day Saving Streak Active</span>
        <span>Next: Level 3 Master Saver</span>
      </div>
    </div>

    <div class="tx-list">
      <!-- Quest 1 -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h4 style="font-size: 14px; font-weight: 800; color: var(--child-deep);">🎯 Quest 1: The 50/30/20 Youth Rule</h4>
          <span style="font-size: 10px; font-weight: 800; background: var(--child-subtle); color: var(--child-deep); padding: 2px 6px; border-radius: 4px;">+50 XP</span>
        </div>
        <p style="font-size: 11px; color: var(--text-secondary); margin-bottom: 8px;">
          Save half your pocket money for your goal, spend 30% on fun snacks, and keep 20% for school projects!
        </p>
        <button class="tree-act-btn" style="width: 100%; padding: 6px;" onclick="showToast('+50 XP Earned! Great job understanding 50/30/20 rule.', 'child')">Complete Mission ✓</button>
      </div>

      <!-- Quest 2: Interactive Quiz -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h4 style="font-size: 14px; font-weight: 800; color: var(--child-deep);">🛍️ Quest 2: Needs vs Wants Challenge</h4>
          <span style="font-size: 10px; font-weight: 800; background: rgba(245, 158, 11, 0.15); color: #D97706; padding: 2px 6px; border-radius: 4px;">QUIZ</span>
        </div>
        <p style="font-size: 11px; color: var(--text-secondary); margin-bottom: 8px;">
          Quick test: In-game skins or cosmetics are which one?
        </p>
        <div style="display: flex; gap: 8px;">
          <button class="tree-act-btn" style="flex: 1; padding: 6px;" onclick="showToast('Try again! In-game cosmetics are a Want, not a Need.', 'child')">Need</button>
          <button class="tree-act-btn" style="flex: 1; padding: 6px; background: var(--status-success-bg); color: var(--status-success); border-color: var(--status-success);" onclick="showToast('🎉 Correct! Game skins are a Want. You earned +100 XP!', 'child')">Want ✓</button>
        </div>
      </div>

      <!-- Quest 3 -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h4 style="font-size: 14px; font-weight: 800; color: var(--child-deep);">📈 Quest 3: Dad's Savings Match</h4>
          <span style="font-size: 10px; font-weight: 800; background: rgba(16, 185, 129, 0.15); color: #059669; padding: 2px 6px; border-radius: 4px;">BONUS</span>
        </div>
        <p style="font-size: 11px; color: var(--text-secondary);">
          Keep your savings goal above 50% this week to qualify for Dad's praise & reward bonus!
        </p>
      </div>
    </div>
  `;
}

// 🛡️ C12 Full Screen: Security Guard & PIN
function renderChildPasscodeScreen() {
  const currentChild = getCurrentActiveChild();
  return `
    <div class="ia-screen-crumb child-crumb">
      <span>IA Section C12 · Security & Passcode</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setChildTab('more')">← Back</button>
        <div>
          <h3 style="font-size: 18px; font-weight: 800;">Security Guard (C12)</h3>
        </div>
      </div>
    </div>

    <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; margin-bottom: 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px solid var(--border-subtle); margin-bottom: 12px;">
        <span style="font-size: 12px; font-weight: 700;">Security Level</span>
        <span style="font-size: 11px; font-weight: 800; color: var(--status-success); background: var(--status-success-bg); padding: 2px 8px; border-radius: 4px;">✓ Level 3 Protected</span>
      </div>

      <div class="form-group">
        <label class="form-label">4-Digit Payment & Wallet PIN</label>
        <input type="password" class="form-input" value="••••" style="text-align: center; font-size: 20px; letter-spacing: 0.3em;" readonly>
      </div>

      <div class="form-group">
        <label class="form-label">Biometrics for Instant Checkout</label>
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0;">
          <span style="font-size: 12px;">Face ID / Touch ID</span>
          <input type="checkbox" checked onchange="showToast('Face ID authentication preference updated.', 'child')" style="transform: scale(1.2);">
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-top: 1px solid var(--border-subtle);">
        <div>
          <div style="font-size: 12px; font-weight: 700; color: var(--status-danger);">Emergency Quick Card Freeze</div>
          <div style="font-size: 10px; color: var(--text-secondary);">Instantly pause all card QR purchases</div>
        </div>
        <input type="checkbox" onchange="showToast(this.checked ? 'Card frozen temporarily.' : 'Card un-frozen.', 'child')" style="transform: scale(1.2);">
      </div>
    </div>

    <button class="btn-child-action" onclick="showToast('Security PIN updated successfully!', 'child')">Update Security PIN →</button>
  `;
}

// 📢 C11 Full Screen: Child Notifications & Allowance Radar
function renderChildNotificationsScreen() {
  const currentChild = getCurrentActiveChild();
  return `
    <div class="ia-screen-crumb child-crumb">
      <span>IA Section C11 · Allowance Radar & Alerts</span>
    </div>

    <div class="screen-header-row">
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="tree-act-btn" onclick="setChildTab('more')">← Back</button>
        <div>
          <h3 style="font-size: 18px; font-weight: 800;">Live Radar (${currentChild.shortName})</h3>
        </div>
      </div>
    </div>

    <div class="tx-list">
      <div class="tx-row" style="border-left: 3px solid var(--child-primary);">
        <div class="tx-left">
          <div class="tx-icon-box" style="background: rgba(13, 148, 136, 0.15); color: var(--child-deep);">💰</div>
          <div class="tx-details">
            <h5>Weekly Pocket Money Arrived!</h5>
            <small>${formatMoney(currentChild.allowanceAmount)} deposited by Dad · 2 hrs ago</small>
          </div>
        </div>
        <span class="tx-status-pill status-completed">New</span>
      </div>

      <div class="tx-row" style="border-left: 3px solid var(--status-success);">
        <div class="tx-left">
          <div class="tx-icon-box" style="background: rgba(16, 185, 129, 0.15); color: #059669;">✓</div>
          <div class="tx-details">
            <h5>Store Purchase Approved</h5>
            <small>Dad approved your stationery payment via OTP</small>
          </div>
        </div>
        <span class="tx-status-pill status-completed">Approved</span>
      </div>

      <div class="tx-row" style="border-left: 3px solid #6366F1;">
        <div class="tx-left">
          <div class="tx-icon-box" style="background: rgba(99, 102, 241, 0.15); color: #6366F1;">⭐</div>
          <div class="tx-details">
            <h5>Praise & Reward Received</h5>
            <small>Dad sent praise: "Great saving on snacks!"</small>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 6. Modals, Sheets & Synchronized Signature Flows
// ==========================================================================

// Simulate Child Scanning a Merchant QR
window.simulateScanMerchant = function(merchant, amount, category) {
  const currentChild = getCurrentActiveChild();
  const modalLayer = document.getElementById('child-modal-layer');
  const sheet = document.getElementById('child-bottom-sheet');
  if (!modalLayer || !sheet) return;

  const isBlocked = currentChild.blockedCategories.some(b => b.toLowerCase().includes(category.toLowerCase()) || category.toLowerCase().includes(b.toLowerCase()));
  const exceedsAmountLimit = (currentChild.spentToday + amount) > currentChild.dailyLimit;
  const exceedsTxCountLimit = currentChild.txCompletedToday >= currentChild.dailyTxCountLimit;
  const requiresApproval = exceedsAmountLimit || exceedsTxCountLimit || currentChild.spendingMode === 'approval_all';

  let contentHtml = '';

  if (isBlocked) {
    contentHtml = `
      <div style="text-align: center; padding: 6px 0;">
        <div style="font-size: 36px; margin-bottom: 6px;">🚫</div>
        <h3 style="font-size: 17px; font-weight: 800; color: var(--status-danger);">Transaction Blocked (05.4 / C07)</h3>
        <p style="font-size: 12px; color: var(--text-secondary); margin: 4px 0 14px 0;">
          <strong>${merchant}</strong> (${category}) is restricted by parent policy for ${currentChild.name}.
        </p>
        <button class="btn-child-action" onclick="closeChildModal()">Understand (C07.2)</button>
      </div>
    `;
  } else if (requiresApproval) {
    let reasonTitle = 'Parent Approval Required';
    let reasonDesc = `SAR ${amount.toFixed(2)} at <strong>${merchant}</strong> exceeds daily limit of SAR ${currentChild.dailyLimit.toFixed(2)}.`;

    if (exceedsTxCountLimit) {
      reasonTitle = 'Daily Transaction Limit Reached (05.5)';
      reasonDesc = `Daily transaction limit reached (${currentChild.txCompletedToday}/${currentChild.dailyTxCountLimit} tx completed today). Parent Approval Required.`;
    }

    contentHtml = `
      <div style="text-align: center; padding: 6px 0;">
        <div style="font-size: 36px; margin-bottom: 6px;">⏳</div>
        <h3 style="font-size: 17px; font-weight: 800; color: var(--status-warning);">${reasonTitle}</h3>
        <p style="font-size: 12px; color: var(--text-secondary); margin: 4px 0 12px 0;">
          ${reasonDesc}
        </p>

        <div class="form-group" style="text-align: left;">
          <label class="form-label">Note for Dad (Why do you need this?)</label>
          <input type="text" class="form-input" id="child-req-note" value="School Materials & Notebooks">
        </div>

        <button class="btn-child-action" onclick="submitChildApprovalRequest('${merchant}', ${amount})">
          Request Instant Approval from Dad (C08) →
        </button>
      </div>
    `;
  } else {
    contentHtml = `
      <div style="text-align: center; padding: 6px 0;">
        <div style="font-size: 36px; margin-bottom: 6px;">✓</div>
        <h3 style="font-size: 17px; font-weight: 800; color: var(--status-success);">Payment Auto-Approved</h3>
        <p style="font-size: 12px; color: var(--text-secondary); margin: 4px 0 14px 0;">
          Pay <strong>SAR ${amount.toFixed(2)}</strong> to ${merchant}. (${currentChild.txCompletedToday + 1}/${currentChild.dailyTxCountLimit} tx today).
        </p>
        <button class="btn-child-action" onclick="executeChildAutoPayment('${merchant}', ${amount}, '${category}')">
          Confirm with Child PIN (C09) →
        </button>
      </div>
    `;
  }

  sheet.innerHTML = contentHtml;
  modalLayer.classList.remove('hidden');
};

window.submitChildApprovalRequest = function(merchant, amount, customNote) {
  const currentChild = getCurrentActiveChild();
  const note = customNote || (document.getElementById('child-req-note') ? document.getElementById('child-req-note').value : 'School Materials & Supplies');
  const reqId = 'req-' + Date.now();

  const newReq = {
    id: reqId,
    childId: currentChild.id,
    childName: currentChild.name,
    amount: amount,
    merchant: merchant,
    category: 'Education & Books',
    reason: note,
    time: 'Just now',
    status: 'pending'
  };

  AppState.pendingRequests.unshift(newReq);
  AppState.notifications.unshift({
    id: 'n-' + Date.now(),
    for: 'parent',
    category: 'PAYMENT',
    title: 'Payment Approval Requested',
    desc: `${currentChild.name} requested SAR ${amount.toFixed(2)} at ${merchant}`,
    time: 'Just now',
    unread: true
  });

  closeChildModal();
  renderParentScreen();
  renderChildScreen();

  showToast(`Approval prompt sent to Dad's phone!`, 'child');
  showToast(`⚡ Live Alert: ${currentChild.name} requested SAR ${amount.toFixed(2)} at ${merchant}`, 'parent');

  setTimeout(() => {
    openParentApprovalModal(reqId);
  }, 600);
};

window.submitCustomQrPayment = function() {
  const merchInput = document.getElementById('child-scan-custom-merchant');
  const amtInput = document.getElementById('child-scan-custom-amount');
  const catInput = document.getElementById('child-scan-custom-cat');

  const merchant = (merchInput ? merchInput.value.trim() : '') || 'Store / Merchant';
  const amount = (amtInput ? amtInput.value.trim() : '') || '0';
  const category = (catInput ? catInput.value : '') || 'General';

  processChildQrPayment(merchant, amount, category);
};

window.processChildQrPayment = function(merchant, amountDisplay, category) {
  const currentChild = getCurrentActiveChild();
  const curr = (typeof AppState !== 'undefined' && AppState.currency) || 'SAR';
  const meta = CURRENCY_RATES[curr] || CURRENCY_RATES.SAR;

  const parsed = parseFloat(amountDisplay);
  if (isNaN(parsed) || parsed <= 0) {
    showToast('Please enter a valid amount to pay', 'child');
    return;
  }

  const amountSAR = parsed / meta.rate;
  const availableToday = Math.max(0, currentChild.dailyLimit - currentChild.spentToday);

  // Check if category is blocked
  const isBlockedCategory = currentChild.blockedCategories && currentChild.blockedCategories.some(bc =>
    category.toLowerCase().includes(bc.toLowerCase()) || bc.toLowerCase().includes(category.toLowerCase())
  );

  // Check if merchant is blocked
  const isBlockedMerchant = currentChild.blockedMerchants && currentChild.blockedMerchants.some(bm =>
    merchant.toLowerCase().includes(bm.toLowerCase()) || bm.toLowerCase().includes(merchant.toLowerCase())
  );

  const exceedsDailyLimit = amountSAR > availableToday;
  const exceedsMonthlyLimit = (currentChild.spentThisMonth + amountSAR) > currentChild.monthlyLimit;
  const exceedsPerTxLimit = amountSAR > currentChild.perTransactionLimit;
  const exceedsTxCountLimit = currentChild.txCompletedToday >= currentChild.dailyTxCountLimit;
  const isStrictApproval = currentChild.spendingMode === 'approval_all' || currentChild.spendingMode === 'approval';

  if (isBlockedCategory || isBlockedMerchant || exceedsDailyLimit || exceedsMonthlyLimit || exceedsPerTxLimit || exceedsTxCountLimit || isStrictApproval) {
    const reqId = 'req-' + Date.now();
    let reasonText = 'Parent approval required';

    if (isBlockedCategory) {
      reasonText = `Blocked Category: ${category}`;
    } else if (isBlockedMerchant) {
      reasonText = `Merchant blocked by parent: ${merchant}`;
    } else if (exceedsPerTxLimit) {
      reasonText = `Per-transaction limit exceeded`;
    } else if (exceedsDailyLimit) {
      reasonText = `Daily spending limit exceeded`;
    } else if (exceedsMonthlyLimit) {
      reasonText = `Monthly spending limit exceeded`;
    } else if (exceedsTxCountLimit) {
      reasonText = `Daily transaction count limit reached`;
    }

    const newReq = {
      id: reqId,
      childId: currentChild.id,
      childName: currentChild.name,
      amount: amountSAR,
      merchant: merchant || 'Store Merchant',
      category: category || 'General',
      reason: reasonText,
      time: 'Just now',
      status: 'pending'
    };

    AppState.pendingRequests.unshift(newReq);
    openChildPendingApprovalSheet(newReq);

    renderParentScreen();
    showToast(`🚨 High Amount Request! Notification & OTP sent to Dad's phone.`, 'parent');
    showToast(`⏳ Limit exceeded. Approval Request & OTP sent to Dad!`, 'child');

    setTimeout(() => {
      openParentApprovalModal(reqId);
    }, 500);

    return;
  }

  if (currentChild.balance < amountSAR) {
    showToast('Insufficient wallet balance', 'child');
    return;
  }

  currentChild.balance -= amountSAR;
  currentChild.spentToday += amountSAR;
  currentChild.spentThisMonth += amountSAR;
  currentChild.txCompletedToday += 1;
  AppState.parent.availableBalance -= amountSAR;
  AppState.parent.childSpendingThisMonth += amountSAR;

  if (currentChild.periodData && currentChild.periodData.weekly) {
    currentChild.periodData.weekly.spent += amountSAR;
    currentChild.periodData.weekly.remaining = Math.max(0, currentChild.periodData.weekly.allocated - currentChild.periodData.weekly.spent);
  }

  AppState.transactions.unshift({
    id: 'tx-' + Date.now(),
    user: currentChild.name,
    childId: currentChild.id,
    userType: 'child',
    merchant: merchant,
    amount: -amountSAR,
    category: category,
    time: 'Just now',
    period: 'weekly',
    status: 'Completed'
  });

  renderParentScreen();
  renderChildScreen();

  openChildReceipt(merchant, amountSAR, false);
  showToast(`✓ Auto-approved: Paid ${formatMoney(amountSAR)} at ${merchant}`, 'child');
};

window.simulateScanMerchant = function(merchant, amountSAR, category) {
  const curr = (typeof AppState !== 'undefined' && AppState.currency) || 'SAR';
  const meta = CURRENCY_RATES[curr] || CURRENCY_RATES.SAR;
  const displayAmount = (amountSAR * meta.rate).toFixed(2);

  const amtInput = document.getElementById('child-scan-custom-amount');
  const merchInput = document.getElementById('child-scan-custom-merchant');
  const catInput = document.getElementById('child-scan-custom-cat');
  if (amtInput) amtInput.value = displayAmount;
  if (merchInput) merchInput.value = merchant;
  if (catInput) catInput.value = category;

  processChildQrPayment(merchant, displayAmount, category);
};

window.openChildPendingApprovalSheet = function(req) {
  const modalLayer = document.getElementById('child-modal-layer');
  const sheet = document.getElementById('child-bottom-sheet');
  if (!modalLayer || !sheet) return;

  sheet.innerHTML = `
    <div style="text-align: center; padding: 8px 0;">
      <div style="width: 56px; height: 56px; background: rgba(234, 88, 12, 0.15); color: #EA580C; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 10px auto;">⏳</div>
      <h3 style="font-size: 17px; font-weight: 800; color: var(--text-primary);">Approval Requested from Dad</h3>
      <div style="font-size: 24px; font-weight: 800; color: var(--child-deep); margin: 6px 0;">${formatMoney(req.amount)}</div>
      <p style="font-size: 11px; color: var(--text-secondary); margin-bottom: 12px;">${req.merchant} · ${req.category}</p>

      <div style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px; margin-bottom: 14px; text-align: left; font-size: 11px; line-height: 1.6;">
        <div style="display: flex; justify-content: space-between;"><span>Reason:</span><strong style="color: #EA580C;">${req.reason}</strong></div>
        <div style="display: flex; justify-content: space-between;"><span>Notification:</span><strong>Sent to Dad's Phone (Ahmed)</strong></div>
        <div style="display: flex; justify-content: space-between;"><span>Required Action:</span><strong>Dad 6-Digit OTP Authorization</strong></div>
        <div style="display: flex; justify-content: space-between;"><span>Status:</span><span class="tx-status-pill status-pending" style="font-size: 9px; padding: 2px 6px;">Pending Dad's OTP</span></div>
      </div>

      <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: var(--radius-md); padding: 10px; margin-bottom: 14px; font-size: 11px; color: #166534; text-align: left;">
        💡 <strong>Live Link:</strong> Dad has received the OTP on his phone. Click <strong>OK</strong> to enter Dad's OTP directly or wait for Dad to approve!
      </div>

      <div style="display: flex; flex-direction: column; gap: 8px;">
        <button class="btn-child-action" style="width: 100%; padding: 12px; font-size: 13px; font-weight: 800;" onclick="openChildOtpInputSheet('${req.id}')">
          OK — Enter Dad's OTP →
        </button>
        <button class="tree-act-btn" style="width: 100%; padding: 10px; font-weight: 700;" onclick="closeChildModal()">
          Back to Wallet (C02)
        </button>
      </div>
    </div>
  `;

  modalLayer.classList.remove('hidden');
};

window.openChildOtpInputSheet = function(reqId) {
  const req = AppState.pendingRequests.find(r => r.id === reqId) || AppState.pendingRequests[0];
  if (!req) return;

  const modalLayer = document.getElementById('child-modal-layer');
  const sheet = document.getElementById('child-bottom-sheet');
  if (!modalLayer || !sheet) return;

  sheet.innerHTML = `
    <div style="text-align: center; padding: 6px 0;">
      <div style="width: 52px; height: 52px; background: var(--child-subtle); color: var(--child-deep); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 26px; margin: 0 auto 10px auto;">🔐</div>
      <h3 style="font-size: 17px; font-weight: 800; color: var(--text-primary);">Enter Dad's OTP Code</h3>
      <p style="font-size: 11px; color: var(--text-secondary); margin: 4px 0 10px 0;">Ask Dad for the 6-digit OTP code sent to his phone</p>

      <div style="background: var(--bg-surface-elevated); padding: 8px 12px; border-radius: var(--radius-md); margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; font-size: 12px;">
        <span><strong>${req.merchant}</strong></span>
        <strong style="color: var(--child-deep); font-size: 14px;">${formatMoney(req.amount)}</strong>
      </div>

      <div style="background: var(--bg-surface); border: 1.5px dashed var(--child-deep); border-radius: var(--radius-xl); padding: 14px; margin-bottom: 14px; text-align: center;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--child-deep);">Dad's 6-Digit OTP</span>
          <span style="font-size: 10px; color: var(--text-secondary);">6-Digit Security Code</span>
        </div>

        <div class="otp-6-inputs">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="child-otp-d-1" value="" oninput="handleChildOTPInput(this, 1)" onkeydown="handleChildOTPKeydown(this, event, 1)" onfocus="this.select()">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="child-otp-d-2" value="" oninput="handleChildOTPInput(this, 2)" onkeydown="handleChildOTPKeydown(this, event, 2)" onfocus="this.select()">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="child-otp-d-3" value="" oninput="handleChildOTPInput(this, 3)" onkeydown="handleChildOTPKeydown(this, event, 3)" onfocus="this.select()">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="child-otp-d-4" value="" oninput="handleChildOTPInput(this, 4)" onkeydown="handleChildOTPKeydown(this, event, 4)" onfocus="this.select()">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="child-otp-d-5" value="" oninput="handleChildOTPInput(this, 5)" onkeydown="handleChildOTPKeydown(this, event, 5)" onfocus="this.select()">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="child-otp-d-6" value="" oninput="handleChildOTPInput(this, 6)" onkeydown="handleChildOTPKeydown(this, event, 6)" onfocus="this.select()">
        </div>

        <div id="child-otp-error-msg" style="display: none; font-size: 11px; color: var(--status-danger); font-weight: 700; margin-bottom: 8px;">
          ✕ Invalid OTP code. Please enter the valid 6-digit code.
        </div>

        <div style="display: flex; justify-content: flex-end; align-items: center; font-size: 11px; margin-top: 6px;">
          <span style="color: var(--text-secondary); cursor: pointer;" onclick="showToast('OTP code resent to Dad\'s phone', 'child')">Resend OTP</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 8px;">
        <button class="btn-child-action" style="width: 100%; padding: 12px; font-size: 13px; font-weight: 800;" onclick="verifyAndCompleteChildPaymentWithOTP('${req.id}')">
          Verify OTP & Pay (${formatMoney(req.amount)}) ✓
        </button>
        <button class="tree-act-btn" style="width: 100%; padding: 8px; font-weight: 700;" onclick="openChildPendingApprovalSheet(AppState.pendingRequests.find(r => r.id === '${req.id}'))">
          ← Back
        </button>
      </div>
    </div>
  `;

  modalLayer.classList.remove('hidden');
};

window.handleChildOTPInput = function(elem, index) {
  elem.value = elem.value.replace(/[^0-9]/g, '');
  if (elem.value && index < 6) {
    const next = document.getElementById(`child-otp-d-${index + 1}`);
    if (next) {
      next.focus();
      next.select();
    }
  }
};

window.handleChildOTPKeydown = function(elem, event, index) {
  if (event.key === 'Backspace' && !elem.value && index > 1) {
    const prev = document.getElementById(`child-otp-d-${index - 1}`);
    if (prev) {
      prev.focus();
      prev.select();
    }
  }
};

window.verifyAndCompleteChildPaymentWithOTP = function(reqId) {
  let enteredOtp = '';
  for (let i = 1; i <= 6; i++) {
    const el = document.getElementById(`child-otp-d-${i}`);
    enteredOtp += el ? el.value.trim() : '';
  }

  const err = document.getElementById('child-otp-error-msg');
  if (enteredOtp !== '123456') {
    if (err) err.style.display = 'block';
    for (let i = 1; i <= 6; i++) {
      const el = document.getElementById(`child-otp-d-${i}`);
      if (el) el.classList.add('error');
    }
    showToast('Invalid OTP! Please check and try again', 'child');
    return;
  }

  if (err) err.style.display = 'none';
  for (let i = 1; i <= 6; i++) {
    const el = document.getElementById(`child-otp-d-${i}`);
    if (el) {
      el.classList.remove('error');
      el.classList.add('verified');
    }
  }

  showToast('✓ Dad\'s OTP Verified Successfully!', 'child');
  setTimeout(() => {
    approvePendingRequest(reqId);
  }, 400);
};

// FEATURE 6: Parent Opens Approval Modal with 6-Digit Mock OTP Verification
window.openParentApprovalModal = function(reqId) {
  const req = AppState.pendingRequests.find(r => r.id === reqId);
  if (!req) return;

  const modalLayer = document.getElementById('parent-modal-layer');
  const sheet = document.getElementById('parent-bottom-sheet');
  if (!modalLayer || !sheet) return;

  sheet.innerHTML = `
    <div style="padding: 4px 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="ia-count-badge">IA Section 10.3 & 10.4 · Approval with OTP</span>
        <button class="btn-ceo-close" onclick="closeParentModal()">✕</button>
      </div>

      <div style="background: var(--bg-surface-elevated); padding: 14px; border-radius: var(--radius-lg); margin-bottom: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <strong style="font-size: 15px;">👧 ${req.childName} Wants to Pay</strong>
          <span style="font-size: 18px; font-weight: 800; color: var(--parent-primary);">${formatMoney(req.amount)}</span>
        </div>
        <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;">
          <div>📍 Merchant: <strong>${req.merchant}</strong></div>
          <div>📁 Category: <strong>${req.category}</strong></div>
          <div>📝 Reason: <em style="color: #EA580C;">"${req.reason}"</em></div>
          <div>⏰ Requested: ${req.time}</div>
        </div>
      </div>

      <!-- FEATURE 6: 6-Digit Mock OTP Input -->
      <div style="background: var(--bg-surface); border: 1.5px dashed var(--parent-primary); border-radius: var(--radius-xl); padding: 14px; margin-bottom: 14px; text-align: center;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <strong style="font-size: 12px; color: var(--parent-primary);">🔐 Enter 6-Digit Authorization OTP</strong>
          <span style="font-size: 10px; color: var(--text-secondary);">6-Digit Security Code</span>
        </div>

        <div class="otp-6-inputs">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="otp-d-1" value="" oninput="handleOTPInput(this, 1)" onkeydown="handleOTPKeydown(this, event, 1)" onfocus="this.select()">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="otp-d-2" value="" oninput="handleOTPInput(this, 2)" onkeydown="handleOTPKeydown(this, event, 2)" onfocus="this.select()">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="otp-d-3" value="" oninput="handleOTPInput(this, 3)" onkeydown="handleOTPKeydown(this, event, 3)" onfocus="this.select()">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="otp-d-4" value="" oninput="handleOTPInput(this, 4)" onkeydown="handleOTPKeydown(this, event, 4)" onfocus="this.select()">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="otp-d-5" value="" oninput="handleOTPInput(this, 5)" onkeydown="handleOTPKeydown(this, event, 5)" onfocus="this.select()">
          <input type="text" inputmode="numeric" maxlength="1" class="otp-6-box" id="otp-d-6" value="" oninput="handleOTPInput(this, 6)" onkeydown="handleOTPKeydown(this, event, 6)" onfocus="this.select()">
        </div>

        <div id="otp-error-msg" style="display: none; font-size: 11px; color: var(--status-danger); font-weight: 700; margin-bottom: 8px;">
          ✕ Invalid OTP code. Please enter the valid 6-digit code.
        </div>

        <div style="display: flex; justify-content: flex-end; align-items: center; font-size: 11px; margin-top: 6px;">
          <span style="color: var(--text-secondary); cursor: pointer;" onclick="showToast('OTP code resent to mobile', 'parent')">Resend OTP (28s)</span>
        </div>
      </div>

      <div style="display: flex; gap: 8px;">
        <button class="btn-primary-action" style="background: var(--status-danger); flex: 1;" onclick="declinePendingRequest('${req.id}')">
          Decline (10.5)
        </button>
        <button class="btn-primary-action" style="background: var(--status-success); flex: 1.8;" onclick="verifyAndApproveWithOTP('${req.id}')">
          Approve with OTP (10.4) ✓
        </button>
      </div>

      <div style="text-align: center; margin-top: 8px;">
        <button class="tree-act-btn" style="font-size: 11px; color: var(--text-secondary);" onclick="approvePendingRequest('${req.id}')">
          Or Approve with Biometric PIN
        </button>
      </div>
    </div>
  `;

  modalLayer.classList.remove('hidden');
};

window.handleOTPInput = function(elem, index) {
  elem.value = elem.value.replace(/[^0-9]/g, '');
  if (elem.value && index < 6) {
    const next = document.getElementById(`otp-d-${index + 1}`);
    if (next) {
      next.focus();
      next.select();
    }
  }
};

window.handleOTPKeydown = function(elem, event, index) {
  if (event.key === 'Backspace' && !elem.value && index > 1) {
    const prev = document.getElementById(`otp-d-${index - 1}`);
    if (prev) {
      prev.focus();
      prev.select();
    }
  }
};

window.verifyAndApproveWithOTP = function(reqId) {
  let enteredOtp = '';
  for (let i = 1; i <= 6; i++) {
    const el = document.getElementById(`otp-d-${i}`);
    enteredOtp += el ? el.value.trim() : '';
  }

  const err = document.getElementById('otp-error-msg');
  if (enteredOtp !== '123456') {
    if (err) err.style.display = 'block';
    for (let i = 1; i <= 6; i++) {
      const el = document.getElementById(`otp-d-${i}`);
      if (el) el.classList.add('error');
    }
    showToast('Invalid OTP! Please check and try again', 'parent');
    return;
  }

  if (err) err.style.display = 'none';
  for (let i = 1; i <= 6; i++) {
    const el = document.getElementById(`otp-d-${i}`);
    if (el) {
      el.classList.remove('error');
      el.classList.add('verified');
    }
  }

  showToast('✓ OTP Verified Successfully!', 'parent');
  setTimeout(() => {
    approvePendingRequest(reqId);
  }, 400);
};

window.approvePendingRequest = function(reqId) {
  const req = AppState.pendingRequests.find(r => r.id === reqId);
  if (!req) return;

  req.status = 'approved';
  const childObj = AppState.children.find(c => c.id === req.childId);
  if (childObj) {
    childObj.balance = Math.max(0, childObj.balance - req.amount);
    childObj.spentToday += req.amount;
    childObj.spentThisMonth += req.amount;
    childObj.txCompletedToday += 1;
  }
  AppState.parent.availableBalance = Math.max(0, AppState.parent.availableBalance - req.amount);
  AppState.parent.childSpendingThisMonth += req.amount;

  if (childObj && childObj.periodData && childObj.periodData.weekly) {
    childObj.periodData.weekly.spent += req.amount;
    childObj.periodData.weekly.remaining = Math.max(0, childObj.periodData.weekly.allocated - childObj.periodData.weekly.spent);
  }

  AppState.transactions.unshift({
    id: 'tx-' + Date.now(),
    user: req.childName,
    childId: req.childId,
    userType: 'child',
    merchant: req.merchant,
    amount: -req.amount,
    category: req.category,
    time: 'Just now',
    period: 'weekly',
    status: 'Completed'
  });

  closeParentModal();
  renderParentScreen();
  renderChildScreen();

  showToast(`✓ Approved ${formatMoney(req.amount)} for ${req.childName} with OTP`, 'parent');
  showToast(`🎉 Dad approved your payment of ${formatMoney(req.amount)} with OTP!`, 'child');

  setTimeout(() => {
    openChildReceipt(req.merchant, req.amount, true);
  }, 400);
};

window.declinePendingRequest = function(reqId) {
  const req = AppState.pendingRequests.find(r => r.id === reqId);
  if (!req) return;

  req.status = 'declined';
  closeParentModal();
  renderParentScreen();
  renderChildScreen();

  showToast(`🚫 Declined request from ${req.childName}`, 'parent');
  showToast(`🚫 Dad declined the payment request of ${formatMoney(req.amount)}.`, 'child');

  setTimeout(() => {
    openChildDeclinedReceipt(req.merchant, req.amount);
  }, 400);
};

window.openChildDeclinedReceipt = function(merchant, amount) {
  const modalLayer = document.getElementById('child-modal-layer');
  const sheet = document.getElementById('child-bottom-sheet');
  if (!modalLayer || !sheet) return;

  sheet.innerHTML = `
    <div style="text-align: center; padding: 10px 0;">
      <div style="width: 50px; height: 50px; background: var(--status-danger-bg); color: var(--status-danger); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 10px auto;">✕</div>
      <h3 style="font-size: 18px; font-weight: 800; color: var(--status-danger);">Payment Restricted (10.5)</h3>
      <div style="font-size: 24px; font-weight: 800; color: var(--text-primary); margin: 6px 0;">${formatMoney(amount)}</div>
      <p style="font-size: 12px; color: var(--text-secondary);">${merchant} · Declined by Dad</p>

      <div style="background: var(--bg-surface-elevated); border-radius: var(--radius-md); padding: 12px; margin: 16px 0; text-align: left; font-size: 11px; line-height: 1.6;">
        <div style="display: flex; justify-content: space-between;"><span>Reason:</span><strong style="color: var(--status-danger);">Exceeded Daily Limit / Parent Policy</strong></div>
        <div style="display: flex; justify-content: space-between;"><span>Status:</span><span class="tx-status-pill status-blocked">Declined / Restricted</span></div>
        <div style="display: flex; justify-content: space-between;"><span>Action:</span><strong>Payment Blocked by Father</strong></div>
      </div>

      <button class="btn-child-action" style="background: var(--child-deep);" onclick="closeChildModal()">
        Understand & Close
      </button>
    </div>
  `;

  modalLayer.classList.remove('hidden');
};

window.openChildReceipt = function(merchant, amount, isOtpApproved = false) {
  const modalLayer = document.getElementById('child-modal-layer');
  const sheet = document.getElementById('child-bottom-sheet');
  if (!modalLayer || !sheet) return;

  sheet.innerHTML = `
    <div style="text-align: center; padding: 10px 0;">
      <div style="width: 50px; height: 50px; background: var(--status-success-bg); color: var(--status-success); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 10px auto;">✓</div>
      <h3 style="font-size: 18px; font-weight: 800; color: var(--status-success);">Payment Successful (C09)</h3>
      <div style="font-size: 26px; font-weight: 800; color: var(--child-deep); margin: 6px 0;">${formatMoney(amount)}</div>
      <p style="font-size: 12px; color: var(--text-secondary);">${merchant} · Today</p>

      <div style="background: var(--bg-surface-elevated); border-radius: var(--radius-md); padding: 12px; margin: 16px 0; text-align: left; font-size: 11px; line-height: 1.6;">
        <div style="display: flex; justify-content: space-between;"><span>Payment Method:</span><strong>AMANAH Youth QR</strong></div>
        <div style="display: flex; justify-content: space-between;"><span>Authorization:</span><strong>${isOtpApproved ? '✓ Dad OTP Authorized' : '✓ Auto-Approved (< Limit)'}</strong></div>
        <div style="display: flex; justify-content: space-between;"><span>Auth Ref:</span><strong>TXN-${Math.floor(Math.random()*900000+100000)}</strong></div>
      </div>

      <button class="btn-child-action" onclick="closeChildModal()">Done (C09.1)</button>
    </div>
  `;
  modalLayer.classList.remove('hidden');
};

// Parent Controls, Allowance, Appreciation & Details Modals
window.openParentModal = function(type, payload = {}) {
  const modalLayer = document.getElementById('parent-modal-layer');
  const sheet = document.getElementById('parent-bottom-sheet');
  if (!modalLayer || !sheet) return;

  const rc = getAppRegionConfig();
  let html = '';

  if (type === 'allowance') {
    const child = AppState.children.find(c => c.id === payload.childId) || AppState.children[0];
    const rc = getAppRegionConfig();
    html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="ia-count-badge">IA Section 04 · Allowance Management</span>
        <button class="btn-ceo-close" onclick="closeParentModal()">✕</button>
      </div>
      <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 12px;">Setup Allowance for ${child.name} (04.2)</h3>
      <div class="form-group">
        <label class="form-label">Allowance Amount (SAR)</label>
        <input type="number" class="form-input" id="modal-allowance-amt" value="${child.allowanceAmount}">
      </div>
      <div class="form-group">
        <label class="form-label">Frequency (04.2)</label>
        <select class="form-select" id="modal-allowance-freq">
          <option value="Daily" ${child.allowanceFreq === 'Daily' ? 'selected' : ''}>Daily</option>
          <option value="Weekly" ${child.allowanceFreq === 'Weekly' ? 'selected' : ''}>Weekly (Recommended)</option>
          <option value="Monthly" ${child.allowanceFreq === 'Monthly' ? 'selected' : ''}>Monthly</option>
        </select>
      </div>
      <button class="btn-primary-action" onclick="saveAllowanceSchedule('${child.id}')">Save Allowance Schedule (04.4) →</button>
    `;
  } else if (type === 'controls') {
    const child = AppState.children.find(c => c.id === payload.childId) || AppState.children[0];
    html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="ia-count-badge">IA Section 05 · Spending Controls</span>
        <button class="btn-ceo-close" onclick="closeParentModal()">✕</button>
      </div>
      <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 12px;">Controls for ${child.name}</h3>
      
      <div class="form-group">
        <label class="form-label">05.2 Spending Mode</label>
        <select class="form-select" id="modal-ctrl-mode">
          <option value="limits" ${child.spendingMode === 'limits' ? 'selected' : ''}>Spend with Limits (Auto-approved under limit)</option>
          <option value="approval_all" ${child.spendingMode === 'approval_all' ? 'selected' : ''}>Approve Every Payment (Parent confirmation required)</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">05.3 Daily Spending Limit (${rc.currencySymbol || 'SAR'})</label>
        <input type="number" class="form-input" id="modal-ctrl-daily" value="${child.dailyLimit}">
      </div>

      <div class="form-group">
        <label class="form-label">05.7 Monthly Spending Limit (${rc.currencySymbol || 'SAR'})</label>
        <input type="number" class="form-input" id="modal-ctrl-monthly" value="${child.monthlyLimit || 400.00}">
      </div>

      <div class="form-group">
        <label class="form-label">05.8 Per-Transaction Limit (${rc.currencySymbol || 'SAR'})</label>
        <input type="number" class="form-input" id="modal-ctrl-per-tx" value="${child.perTransactionLimit || 30.00}">
      </div>

      <!-- FEATURE 5: Daily Transaction Count Limit Rule -->
      <div class="form-group">
        <label class="form-label">05.5 Daily Transaction Count Limit</label>
        <select class="form-select" id="modal-ctrl-tx-count">
          <option value="1" ${child.dailyTxCountLimit === 1 ? 'selected' : ''}>1 transaction / day</option>
          <option value="2" ${child.dailyTxCountLimit === 2 ? 'selected' : ''}>2 transactions / day</option>
          <option value="3" ${child.dailyTxCountLimit === 3 ? 'selected' : ''}>3 transactions / day (Recommended)</option>
          <option value="5" ${child.dailyTxCountLimit === 5 ? 'selected' : ''}>5 transactions / day</option>
          <option value="10" ${child.dailyTxCountLimit === 10 ? 'selected' : ''}>10 transactions / day</option>
        </select>
        <small style="font-size: 10px; color: var(--text-secondary); display: block; margin-top: 2px;">Transactions beyond this require parent OTP approval.</small>
      </div>

      <!-- FEATURE 9.5: Merchant Restrictions (Allowed vs Blocked UI) -->
      <div class="form-group">
        <label class="form-label">05.9 Merchant Restrictions</label>
        
        <div style="font-size: 11px; font-weight: 700; color: var(--status-danger); margin-bottom: 4px;">🚫 BLOCKED MERCHANTS</div>
        <div id="blocked-merchants-list" style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
          ${(child.blockedMerchants || []).length === 0 ? `
            <div style="font-size: 10px; color: var(--text-tertiary); font-style: italic; padding: 4px 0;">No blocked merchants.</div>
          ` : child.blockedMerchants.map(m => `
            <div class="category-rule-row" style="padding: 4px 8px;">
              <span class="category-rule-meta"><span>🏢</span> ${m}</span>
              <button class="tree-act-btn" style="padding: 2px 6px; font-size: 10px; color: var(--status-success);" onclick="toggleChildMerchant('${child.id}', '${m}', 'allow')">Unblock</button>
            </div>
          `).join('')}
        </div>
        
        <div style="display: flex; gap: 6px; margin-top: 6px;">
          <input type="text" id="add-blocked-merchant-input" class="form-input" style="flex: 1; padding: 6px 10px; font-size: 11px;" placeholder="e.g. Roblox Corp">
          <button class="tree-act-btn" style="background: var(--status-danger); color: #fff; border: none; font-size: 11px; padding: 0 12px; font-weight: bold;" onclick="addChildMerchantBlock('${child.id}')">Block</button>
        </div>
      </div>

      <!-- FEATURE 9: Restricted Category Management (Allowed vs Blocked UI) -->
      <div class="form-group">
        <label class="form-label">05.4 Category Restrictions</label>
        
        <div style="font-size: 11px; font-weight: 700; color: var(--status-success); margin-bottom: 4px;">✓ ALLOWED CATEGORIES</div>
        ${child.allowedCategories.map(cat => `
          <div class="category-rule-row">
            <span class="category-rule-meta"><span>📁</span> ${cat}</span>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="category-status-tag allowed">Allowed</span>
              <button class="tree-act-btn" style="padding: 2px 6px; font-size: 10px; color: var(--status-danger);" onclick="toggleChildCategory('${child.id}', '${cat}', 'block')">Block</button>
            </div>
          </div>
        `).join('')}

        <div style="font-size: 11px; font-weight: 700; color: var(--status-danger); margin: 10px 0 4px 0;">🚫 BLOCKED CATEGORIES</div>
        ${child.blockedCategories.map(cat => `
          <div class="category-rule-row">
            <span class="category-rule-meta"><span>🚫</span> ${cat}</span>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="category-status-tag blocked">Blocked</span>
              <button class="tree-act-btn" style="padding: 2px 6px; font-size: 10px; color: var(--status-success);" onclick="toggleChildCategory('${child.id}', '${cat}', 'allow')">Allow</button>
            </div>
          </div>
        `).join('')}
      </div>

      <button class="btn-primary-action" onclick="saveControls('${child.id}')">Confirm Controls with Parent PIN (05.6) →</button>
    `;
  } else if (type === 'appreciation') {
    // FEATURE 8: Parent Appreciation / Reward Feature
    const activeId = (payload && payload.childId) || AppState.selectedChildId || 'sara';
    const child = AppState.children.find(c => c.id === activeId) || AppState.children[0];
    html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="ia-count-badge">Parent Appreciation & Reward</span>
        <button class="btn-ceo-close" onclick="closeParentModal()">✕</button>
      </div>

      <!-- Child Selector Tabs in Praise Modal -->
      <div class="child-profile-switcher-bar" style="display: flex; justify-content: center; gap: 8px; margin-bottom: 12px; border: none; padding-bottom: 2px;">
        ${AppState.children.map(c => `
          <button class="child-filter-chip ${c.id === child.id ? 'active' : ''}" style="${c.id === child.id ? 'background: #D97706; color: #fff; border-color: #D97706; box-shadow: 0 2px 8px rgba(217, 119, 6, 0.3);' : ''}" onclick="openParentModal('appreciation', { childId: '${c.id}' })">
            <span>${c.avatar}</span> ${c.shortName}
          </button>
        `).join('')}
      </div>

      <div style="text-align: center; padding: 2px 0 10px 0;">
        <div style="font-size: 34px; margin-bottom: 2px;">⭐</div>
        <h3 style="font-size: 17px; font-weight: 800; color: var(--text-primary);">Send Praise to ${child.name}</h3>
        <p style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">Encourage positive financial savings and responsible spending!</p>
        <div style="background: var(--bg-surface-elevated); border-radius: var(--radius-md); padding: 6px 10px; margin-top: 8px; font-size: 11px; display: inline-flex; align-items: center; gap: 6px;">
          <span>🎯 Goal: <strong>${child.savingsGoal.name}</strong></span>
          <span style="color: var(--status-success); font-weight: 700;">(SAR ${child.savingsGoal.saved.toFixed(0)} / ${child.savingsGoal.target.toFixed(0)})</span>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Select Appreciation Message</label>
        <div class="appreciation-chips-grid">
          <button class="praise-chip-btn selected" onclick="selectPraiseChip(this, 'Great job! 👏')">👏 Great job!</button>
          <button class="praise-chip-btn" onclick="selectPraiseChip(this, 'Proud of you! ⭐')">⭐ Proud of you!</button>
          <button class="praise-chip-btn" onclick="selectPraiseChip(this, 'Excellent saving! 💰')">💰 Excellent saving!</button>
          <button class="praise-chip-btn" onclick="selectPraiseChip(this, 'Keep it up! 🎉')">🎉 Keep it up!</button>
        </div>
        <input type="hidden" id="selected-praise-text" value="Great job! 👏">
      </div>

      <div class="form-group">
        <label class="form-label">Optional Milestone Reward (SAR)</label>
        <select class="form-select" id="praise-reward-amt">
          <option value="0">No monetary reward (Words only)</option>
          <option value="10">+ SAR 10.00 Reward Bonus</option>
          <option value="20" selected>+ SAR 20.00 Reward Bonus (Recommended)</option>
          <option value="50">+ SAR 50.00 Reward Bonus</option>
        </select>
      </div>

      <button class="btn-primary-action" style="background: linear-gradient(135deg, #D97706, #B45309);" onclick="submitParentAppreciation('${child.id}')">
        Send Appreciation & Reward to ${child.shortName} ⭐ →
      </button>
    `;
  } else if (type === 'childDetail') {
    const child = AppState.children.find(c => c.id === payload.childId) || AppState.children[0];
    const period = AppState.analyticsPeriod || 'weekly';
    const pData = child.periodData[period] || child.periodData.weekly;
    const pctSaved = Math.min(100, Math.round((child.savingsGoal.saved / child.savingsGoal.target) * 100));
    const childTx = AppState.transactions.filter(t => t.childId === child.id || (t.user && t.user.toLowerCase().includes(child.shortName.toLowerCase()))).slice(0, 3);
    const cardLast4 = child.id === 'sara' ? '4291' : (child.id === 'omar' ? '8814' : '3302');

    html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="ia-count-badge">IA Section 03.4 · Child Governance & 360° Profile</span>
        <button class="btn-ceo-close" onclick="closeParentModal()">✕</button>
      </div>

      <!-- Child Profile Banner -->
      <div style="background: var(--bg-surface-elevated); border-radius: var(--radius-xl); padding: 14px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="font-size: 38px; width: 54px; height: 54px; background: var(--bg-surface); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm);">${child.avatar}</div>
          <div>
            <h3 style="font-size: 17px; font-weight: 800; color: var(--text-primary);">${child.name}</h3>
            <div style="font-size: 11px; color: var(--text-secondary); margin-top: 2px;">
              Age ${child.age} · ${child.id === 'sara' ? 'Daughter' : 'Son'} · <span style="color: var(--status-success); font-weight: 700;">SAMA Tier 2 Verified</span>
            </div>
            <div style="font-size: 10px; color: var(--text-tertiary); margin-top: 2px;">
              Digital Card: <strong>•••• ${cardLast4}</strong> (Active 🟢)
            </div>
          </div>
        </div>
        <button class="tree-act-btn" style="padding: 4px 8px; font-size: 10px; color: var(--status-danger);" onclick="showToast('Card •••• ${cardLast4} frozen for security', 'parent')">
          ❄️ Freeze Card
        </button>
      </div>

      <!-- Father Key Metrics Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px;">
        <div class="analytics-mini-card" style="padding: 10px;">
          <small>Current Wallet Balance</small>
          <strong style="color: var(--status-success); font-size: 14px;">${formatMoney(child.balance)}</strong>
        </div>
        <div class="analytics-mini-card" style="padding: 10px;">
          <small>Today's Spend / Limit</small>
          <strong style="font-size: 14px;">${formatMoney(child.spentToday)} / ${formatMoney(child.dailyLimit)}</strong>
        </div>
        <div class="analytics-mini-card" style="padding: 10px;">
          <small>Daily Tx Count</small>
          <strong style="font-size: 14px;">${child.txCompletedToday} / ${child.dailyTxCountLimit} tx today</strong>
        </div>
        <div class="analytics-mini-card" style="padding: 10px;">
          <small>Scheduled Allowance</small>
          <strong style="font-size: 14px;">${formatMoney(child.allowanceAmount)} / ${child.allowanceFreq}</strong>
        </div>
      </div>

      <!-- Feature 7: Savings Goal Full Tracker & Father Boost Action -->
      <div class="savings-goal-card" style="margin-bottom: 14px; background: linear-gradient(135deg, #0D9488 0%, #115E59 100%);">
        <div class="savings-top-head">
          <span>🎯 ${t('savingsGoal')} (${child.savingsGoal.name})</span>
          <span style="font-weight: 800; font-size: 13px;">${pctSaved}%</span>
        </div>
        <div class="savings-title-name">${child.savingsGoal.name}</div>
        <div class="savings-bar-track" style="margin: 8px 0 6px 0;">
          <div class="savings-bar-fill" style="width: ${pctSaved}%;"></div>
        </div>
        <div class="savings-footer-stats">
          <span>${t('saved')}: <strong>${formatMoney(child.savingsGoal.saved)}</strong></span>
          <span>${t('target')}: <strong>${formatMoney(child.savingsGoal.target)}</strong></span>
          <span>${t('remaining')}: <strong>${formatMoney(child.savingsGoal.remaining)}</strong></span>
        </div>
        <button class="tree-act-btn" style="width: 100%; margin-top: 10px; background: rgba(255,255,255,0.22); color: #fff; font-weight: 700; border: none; padding: 8px; font-size: 11px;" onclick="boostChildSavings('${child.id}', 50)">
          + Boost Goal with ${formatMoney(50)} from Family Balance 🚀
        </button>
      </div>

      <!-- Feature 4: Allocation Breakdown in Details -->
      <div class="child-allocation-metric-box" style="margin-bottom: 14px;">
        <div style="font-size: 11px; font-weight: 700; margin-bottom: 6px; color: var(--text-primary); display: flex; justify-content: space-between;">
          <span>Period Allocation (${period.toUpperCase()})</span>
          <span style="color: var(--text-secondary); font-size: 10px;">${Math.round((pData.spent / pData.allocated) * 100)}% Used</span>
        </div>
        <div class="child-alloc-nums">
          <span><span class="alloc-label">Allocated:</span> <span class="alloc-val">${formatMoney(pData.allocated)}</span></span>
          <span><span class="alloc-label">Spent:</span> <span class="alloc-val">${formatMoney(pData.spent)}</span></span>
          <span><span class="alloc-label">Remaining:</span> <strong style="color: var(--status-success);">${formatMoney(pData.remaining)}</strong></span>
        </div>
        <div class="allowance-bar-bg" style="margin-top: 4px;">
          <div class="allowance-bar-fill" style="width: ${(pData.spent / pData.allocated) * 100}%; background: ${child.color};"></div>
        </div>
      </div>

      <!-- Guardrails & Category Policy Overview -->
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 12px; margin-bottom: 14px;">
        <div style="font-size: 11px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">🛡️ Active Spending Policies</div>
        <div style="font-size: 11px; color: var(--text-secondary); margin-bottom: 6px;">
          Mode: <strong>${child.spendingMode === 'limits' ? 'Spend with Limits (Auto-Approved)' : 'Approve Every Payment (Approval Mode)'}</strong>
        </div>
        <div style="font-size: 10px; color: var(--status-success); margin-bottom: 4px;">
          <strong>Allowed:</strong> ${child.allowedCategories.join(', ')}
        </div>
        <div style="font-size: 10px; color: var(--status-danger);">
          <strong>Blocked:</strong> ${child.blockedCategories.join(', ')}
        </div>
      </div>

      <!-- Recent Transactions for this child -->
      <div style="margin-bottom: 14px;">
        <div style="font-size: 11px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">Recent Transactions (${child.shortName})</div>
        ${childTx.length === 0 ? `
          <div style="font-size: 11px; color: var(--text-secondary); text-align: center; padding: 10px;">No recent transactions for ${child.shortName}.</div>
        ` : childTx.map(tx => `
          <div class="tx-row" style="padding: 8px 10px; margin-bottom: 4px;">
            <div class="tx-left">
              <div class="tx-icon-box" style="width: 28px; height: 28px; font-size: 14px;">${tx.status === 'Blocked' ? '🚫' : '🛍️'}</div>
              <div class="tx-details">
                <h5 style="font-size: 12px;">${tx.merchant}</h5>
                <small style="font-size: 9px;">${tx.category} · ${tx.time}</small>
              </div>
            </div>
            <div class="tx-right">
              <div class="tx-amount ${tx.amount > 0 ? 'positive' : ''}" style="font-size: 12px;">
                ${tx.amount > 0 ? '+' : '-'}${formatMoney(Math.abs(tx.amount))}
              </div>
              <span class="tx-status-pill status-${tx.status.toLowerCase()}" style="font-size: 8px; padding: 2px 6px;">${tx.status}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Father Action Buttons -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px;">
        <button class="btn-primary-action" style="padding: 10px 8px; font-size: 11px;" onclick="selectChildForAnalytics('${child.id}'); closeParentModal();">
          📊 View in Pie Chart
        </button>
        <button class="btn-primary-action" style="background: var(--parent-primary); padding: 10px 8px; font-size: 11px;" onclick="openParentModal('controls', { childId: '${child.id}' })">
          ⚙️ Edit Controls (05)
        </button>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
        <button class="btn-primary-action" style="background: #D97706; padding: 10px 8px; font-size: 11px;" onclick="openParentModal('appreciation', { childId: '${child.id}' })">
          ⭐ Praise & Reward
        </button>
        <button class="btn-primary-action" style="background: var(--status-success); padding: 10px 8px; font-size: 11px;" onclick="openParentModal('allowance', { childId: '${child.id}' })">
          📅 Allowance (04)
        </button>
      </div>
    `;
  } else if (type === 'addChild') {
    html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="ia-count-badge">IA Section 03.2 · Add Child</span>
        <button class="btn-ceo-close" onclick="closeParentModal()">✕</button>
      </div>
      <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 12px;">Invite Child to AMANAH</h3>
      <div class="form-group">
        <label class="form-label">Child's Full Name</label>
        <input type="text" class="form-input" id="add-child-name" placeholder="e.g. Layla Al-Farsi">
      </div>
      <div class="form-group">
        <label class="form-label">Age & Relationship</label>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          <input type="number" class="form-input" id="add-child-age" placeholder="Age (e.g. 10)">
          <select class="form-select">
            <option>Daughter</option>
            <option>Son</option>
          </select>
        </div>
      </div>
      <button class="btn-primary-action" onclick="createChildInvite()">Generate & Send Invite (03.3) →</button>
    `;
  } else if (type === 'sendMoney') {
    html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="ia-count-badge">IA Section 08 · Send Money</span>
        <button class="btn-ceo-close" onclick="closeParentModal()">✕</button>
      </div>
      <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 12px;">Instant Transfer to Child</h3>
      <div class="form-group">
        <label class="form-label">Select Child</label>
        <select class="form-select" id="direct-send-child">
          ${AppState.children.map(c => `<option value="${c.id}">${c.name} (SAR ${c.balance.toFixed(2)})</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Amount (SAR)</label>
        <input type="number" class="form-input" id="direct-send-amount" value="50">
      </div>
      <button class="btn-primary-action" onclick="executeDirectTransfer()">Authenticate & Send (08.2) →</button>
    `;
  } else if (type === 'txDetail') {
    const tx = AppState.transactions.find(t => t.id === payload.txId) || AppState.transactions[0];
    html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="ia-count-badge">IA Section 09.4 · Transaction Detail</span>
        <button class="btn-ceo-close" onclick="closeParentModal()">✕</button>
      </div>
      <div style="text-align: center; margin-bottom: 14px;">
        <div style="font-size: 28px; font-weight: 800; color: ${tx.amount > 0 ? 'var(--status-success)' : 'var(--text-primary)'};">
          ${tx.amount > 0 ? '+' : ''}SAR ${Math.abs(tx.amount).toFixed(2)}
        </div>
        <div style="font-size: 14px; font-weight: 700;">${tx.merchant}</div>
        <span class="tx-status-pill status-${tx.status.toLowerCase()}">${tx.status}</span>
      </div>
      <div style="background: var(--bg-surface-elevated); padding: 12px; border-radius: var(--radius-md); font-size: 12px; line-height: 1.6;">
        <div>User: <strong>${tx.user}</strong></div>
        <div>Category: <strong>${tx.category}</strong></div>
        <div>Date/Time: <strong>${tx.time}</strong></div>
        <div>Status: <strong>${tx.status}</strong></div>
      </div>
      <button class="btn-primary-action" style="margin-top: 14px;" onclick="closeParentModal()">Done</button>
    `;
  }

  sheet.innerHTML = html;
  modalLayer.classList.remove('hidden');
};

window.selectPraiseChip = function(btnElem, text) {
  document.querySelectorAll('.praise-chip-btn').forEach(b => b.classList.remove('selected'));
  btnElem.classList.add('selected');
  const hiddenInput = document.getElementById('selected-praise-text');
  if (hiddenInput) hiddenInput.value = text;
};

window.submitParentAppreciation = function(childId) {
  const child = AppState.children.find(c => c.id === childId);
  const praise = document.getElementById('selected-praise-text')?.value || 'Great job! 👏';
  const reward = parseFloat(document.getElementById('praise-reward-amt')?.value) || 0;

  if (reward > 0 && AppState.parent.availableBalance >= reward) {
    AppState.parent.availableBalance -= reward;
    child.balance += reward;
    child.savingsGoal.saved += reward;
    child.savingsGoal.remaining = Math.max(0, child.savingsGoal.target - child.savingsGoal.saved);

    AppState.transactions.unshift({
      id: 'tx-' + Date.now(),
      user: `Ahmed → ${child.shortName}`,
      childId: child.id,
      userType: 'parent',
      merchant: `Praise Reward: ${praise}`,
      amount: reward,
      category: 'Allowance',
      time: 'Just now',
      period: 'weekly',
      status: 'Completed'
    });
  }

  AppState.childAppreciation = {
    childId: child.id,
    message: praise,
    reward: reward,
    time: 'Just now'
  };
  AppState.selectedChildId = child.id;

  closeParentModal();
  renderParentScreen();
  renderChildScreen();

  showToast(`Sent praise to ${child.name}: "${praise}"${reward > 0 ? ` + SAR ${reward} reward` : ''}`, 'parent');
  showToast(`⭐ Dad sent ${child.shortName} praise: "${praise}"!`, 'child');
};

window.dismissChildAppreciation = function() {
  AppState.childAppreciation = null;
  renderChildScreen();
};

window.addToChildSavings = function(childId, amount) {
  const child = AppState.children.find(c => c.id === childId);
  if (child && child.balance >= amount) {
    child.balance -= amount;
    child.savingsGoal.saved += amount;
    child.savingsGoal.remaining = Math.max(0, child.savingsGoal.target - child.savingsGoal.saved);
    renderChildScreen();
    renderParentScreen();
    showToast(`Added SAR ${amount.toFixed(2)} to ${child.savingsGoal.name}!`, 'child');
  } else {
    showToast('Insufficient wallet balance to transfer to savings.', 'child');
  }
};

window.boostChildSavings = function(childId, amount) {
  const child = AppState.children.find(c => c.id === childId);
  if (!child) return;
  if (AppState.parent.availableBalance < amount) {
    showToast('Insufficient family balance to boost goal.', 'parent');
    return;
  }
  AppState.parent.availableBalance -= amount;
  child.savingsGoal.saved += amount;
  child.savingsGoal.remaining = Math.max(0, child.savingsGoal.target - child.savingsGoal.saved);

  AppState.transactions.unshift({
    id: 'tx-' + Date.now(),
    user: `Ahmed → ${child.shortName}`,
    childId: child.id,
    userType: 'parent',
    merchant: `Father Savings Boost: ${child.savingsGoal.name}`,
    amount: -amount,
    category: 'Savings',
    time: 'Just now',
    period: 'weekly',
    status: 'Completed'
  });

  renderParentScreen();
  renderChildScreen();
  openParentModal('childDetail', { childId });
  showToast(`🎉 Boosted ${child.name}'s ${child.savingsGoal.name} by SAR ${amount.toFixed(2)}!`, 'parent');
  showToast(`⭐ Dad added SAR ${amount.toFixed(2)} to your savings goal!`, 'child');
};

window.toggleChildCategory = function(childId, categoryName, action) {
  const child = AppState.children.find(c => c.id === childId);
  if (!child) return;

  if (action === 'block') {
    child.allowedCategories = child.allowedCategories.filter(c => c !== categoryName);
    if (!child.blockedCategories.includes(categoryName)) {
      child.blockedCategories.push(categoryName);
    }
    showToast(`Category '${categoryName}' is now BLOCKED for ${child.name}`, 'parent');
  } else {
    child.blockedCategories = child.blockedCategories.filter(c => c !== categoryName);
    if (!child.allowedCategories.includes(categoryName)) {
      child.allowedCategories.push(categoryName);
    }
    showToast(`Category '${categoryName}' is now ALLOWED for ${child.name}`, 'parent');
  }

  openParentModal('controls', { childId });
  renderParentScreen();
};

window.saveControls = function(childId) {
  const daily = parseFloat(document.getElementById('modal-ctrl-daily').value) || 50;
  const monthly = parseFloat(document.getElementById('modal-ctrl-monthly').value) || 400;
  const perTx = parseFloat(document.getElementById('modal-ctrl-per-tx').value) || 30;
  const txCount = parseInt(document.getElementById('modal-ctrl-tx-count').value) || 3;
  const mode = document.getElementById('modal-ctrl-mode').value;
  const child = AppState.children.find(c => c.id === childId);
  if (child) {
    child.dailyLimit = daily;
    child.monthlyLimit = monthly;
    child.perTransactionLimit = perTx;
    child.dailyTxCountLimit = txCount;
    child.spendingMode = mode;
  }
  closeParentModal();
  renderParentScreen();
  renderChildScreen();
  showToast(`Updated limits for ${child.name}: ${formatMoney(daily)}/day · ${formatMoney(monthly)}/month · ${formatMoney(perTx)}/tx`, 'parent');
};



window.createChildInvite = function() {
  const name = document.getElementById('add-child-name').value || 'Youssef Al-Farsi';
  const age = parseInt(document.getElementById('add-child-age').value) || 12;

  AppState.children.push({
    id: 'youssef',
    name: name,
    shortName: name.split(' ')[0],
    age: age,
    avatar: '👦',
    color: '#0D9488',
    status: 'Active',
    balance: 50.00,
    dailyLimit: 30.00,
    spentToday: 0.00,
    monthlyLimit: 200.00,
    perTransactionLimit: 25.00,
    spentThisMonth: 0.00,
    allowanceAmount: 50.00,
    allowanceFreq: 'Weekly',
    nextDepositDays: 7,
    spendingMode: 'limits',
    blockedCategories: ['Gaming', 'Gambling'],
    blockedMerchants: []
  });

  closeParentModal();
  renderParentScreen();
  showToast(`Generated invite for ${name}! (03.3)`, 'parent');
};

window.executeParentTransfer = function() {
  const childId = document.getElementById('send-child-select').value;
  const amt = parseFloat(document.getElementById('send-amount-input').value) || 50;
  const child = AppState.children.find(c => c.id === childId);

  if (child && AppState.parent.availableBalance >= amt) {
    AppState.parent.availableBalance -= amt;
    child.balance += amt;
    AppState.transactions.unshift({
      id: 'tx-' + Date.now(),
      user: 'Ahmed → ' + child.shortName,
      userType: 'parent',
      merchant: 'Direct Top-up',
      amount: amt,
      category: 'Allowance',
      time: 'Just now',
      status: 'Completed'
    });

    renderParentScreen();
    renderChildScreen();
    showToast(`Transferred SAR ${amt.toFixed(2)} to ${child.name}!`, 'parent');
    showToast(`Received SAR ${amt.toFixed(2)} from Dad!`, 'child');
  }
};

window.executeDirectTransfer = function() {
  const childId = document.getElementById('direct-send-child').value;
  const amt = parseFloat(document.getElementById('direct-send-amount').value) || 50;
  const child = AppState.children.find(c => c.id === childId);

  if (child && AppState.parent.availableBalance >= amt) {
    AppState.parent.availableBalance -= amt;
    child.balance += amt;
    closeParentModal();
    renderParentScreen();
    renderChildScreen();
    showToast(`Transferred SAR ${amt.toFixed(2)} to ${child.name}!`, 'parent');
    showToast(`Received SAR ${amt.toFixed(2)} from Dad!`, 'child');
  }
};

window.filterParentTx = function(filter) {
  const container = document.getElementById('parent-tx-list-container');
  if (!container) return;

  let filtered = AppState.transactions;
  if (filter === 'Sara' || filter === 'Omar') {
    filtered = AppState.transactions.filter(t => t.user.includes(filter));
  } else if (filter === 'Completed' || filter === 'Blocked') {
    filtered = AppState.transactions.filter(t => t.status === filter);
  }

  container.innerHTML = filtered.map(tx => `
    <div class="tx-row" onclick="openParentModal('txDetail', { txId: '${tx.id}' })">
      <div class="tx-left">
        <div class="tx-icon-box">${tx.status === 'Blocked' ? '🚫' : (tx.amount > 0 ? '💰' : '🛍️')}</div>
        <div class="tx-details">
          <h5>${tx.merchant}</h5>
          <small>${tx.user} · ${tx.category} · ${tx.time}</small>
        </div>
      </div>
      <div class="tx-right">
        <div class="tx-amount ${tx.amount > 0 ? 'positive' : ''}">
          ${tx.amount > 0 ? '+' : ''}SAR ${Math.abs(tx.amount).toFixed(2)}
        </div>
        <span class="tx-status-pill status-${tx.status.toLowerCase()}">${tx.status}</span>
      </div>
    </div>
  `).join('');
};

window.markAllParentNotifsRead = function() {
  AppState.notifications.forEach(n => n.unread = false);
  renderParentScreen();
  showToast('All notifications marked as read.', 'parent');
};

window.closeParentModal = function() {
  const modalLayer = document.getElementById('parent-modal-layer');
  if (modalLayer) modalLayer.classList.add('hidden');
};

window.closeChildModal = function() {
  const modalLayer = document.getElementById('child-modal-layer');
  if (modalLayer) modalLayer.classList.add('hidden');
};

// ==========================================================================
// 7. Information Architecture Sidebar Renderer
// ==========================================================================
function renderIATree(filterText = '') {
  const container = document.getElementById('ia-tree-container');
  if (!container) return;

  const query = filterText.toLowerCase().trim();
  let html = '';

  // Parent Group (17)
  html += `<div class="tree-group-title parent">
    <span>Parent App (17 Sections · Indigo)</span>
    <span class="dot-indicator indigo"></span>
  </div>`;

  IATreeData.parentApp.forEach(section => {
    const matchesSection = section.title.toLowerCase().includes(query) || section.code.includes(query);
    const filteredSubs = section.sub.filter(sub => {
      if (matchesSection) return true;
      if (sub.title.toLowerCase().includes(query) || sub.code.includes(query)) return true;
      return sub.leaves.some(l => l.toLowerCase().includes(query));
    });

    if (query && !matchesSection && filteredSubs.length === 0) return;

    const isOpen = query.length > 0 || ['01', '02', '03', '04', '05', '06'].includes(section.code);

    html += `
      <div class="ia-node parent ${isOpen ? 'open' : ''}" data-section-code="${section.code}">
        <div class="ia-node-header" onclick="toggleIANode(this)">
          <span class="ia-node-toggle">▶</span>
          <span class="ia-node-badge">${section.code}</span>
          <span class="ia-node-title">${section.title}</span>
        </div>
        <div class="ia-sub-tree">
          ${(query ? filteredSubs : section.sub).map(sub => `
            <div class="ia-sub-item">
              <div class="ia-sub-header" onclick="deepLinkToScreen('parent', '${sub.code}')">
                <span class="ia-sub-badge">${sub.code}</span>
                <span>${sub.title}</span>
              </div>
              <ul class="ia-leaves-list">
                ${sub.leaves.map(leaf => `
                  <li class="ia-leaf-item" onclick="deepLinkToScreen('parent', '${sub.code}', '${leaf}')">${leaf}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  // Child Group (14)
  html += `<div class="tree-group-title child" style="margin-top: 18px;">
    <span>Child App (14 Sections · Teal)</span>
    <span class="dot-indicator teal"></span>
  </div>`;

  IATreeData.childApp.forEach(section => {
    const matchesSection = section.title.toLowerCase().includes(query) || section.code.includes(query);
    const filteredSubs = section.sub.filter(sub => {
      if (matchesSection) return true;
      if (sub.title.toLowerCase().includes(query) || sub.code.includes(query)) return true;
      return sub.leaves.some(l => l.toLowerCase().includes(query));
    });

    if (query && !matchesSection && filteredSubs.length === 0) return;

    const isOpen = query.length > 0 || ['C01', 'C02', 'C06', 'C07'].includes(section.code);

    html += `
      <div class="ia-node child ${isOpen ? 'open' : ''}" data-section-code="${section.code}">
        <div class="ia-node-header" onclick="toggleIANode(this)">
          <span class="ia-node-toggle">▶</span>
          <span class="ia-node-badge">${section.code}</span>
          <span class="ia-node-title">${section.title}</span>
        </div>
        <div class="ia-sub-tree">
          ${(query ? filteredSubs : section.sub).map(sub => `
            <div class="ia-sub-item">
              <div class="ia-sub-header" onclick="deepLinkToScreen('child', '${sub.code}')">
                <span class="ia-sub-badge">${sub.code}</span>
                <span>${sub.title}</span>
              </div>
              <ul class="ia-leaves-list">
                ${sub.leaves.map(leaf => `
                  <li class="ia-leaf-item child-leaf" onclick="deepLinkToScreen('child', '${sub.code}', '${leaf}')">${leaf}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

window.toggleIANode = function(headerElem) {
  const node = headerElem.closest('.ia-node');
  node.classList.toggle('open');
};

// ==========================================================================
// 8. View Mode & Layout Controller
// ==========================================================================
function setViewMode(mode) {
  AppState.viewMode = mode;
  const parentWrapper = document.getElementById('parent-device-wrapper');
  const childWrapper = document.getElementById('child-device-wrapper');
  const syncBridge = document.getElementById('sync-bridge');
  const iaSidebar = document.getElementById('ia-sidebar');
  const scaler = document.getElementById('stage-viewport-scaler');

  document.querySelectorAll('.view-tab').forEach(t => {
    if (t.dataset.view) {
      t.classList.toggle('active', t.dataset.view === mode);
    }
  });

  if (mode === 'dual') {
    if (parentWrapper) parentWrapper.style.display = 'flex';
    if (childWrapper) childWrapper.style.display = 'flex';
    if (syncBridge) syncBridge.style.display = 'flex';
    if (scaler) scaler.style.display = 'flex';
    if (iaSidebar) {
      iaSidebar.classList.add('collapsed');
      iaSidebar.style.width = '';
      iaSidebar.style.maxWidth = '';
      iaSidebar.style.margin = '';
    }
    updateSidebarToggleUI(true);
  } else if (mode === 'parent') {
    if (parentWrapper) parentWrapper.style.display = 'flex';
    if (childWrapper) childWrapper.style.display = 'none';
    if (syncBridge) syncBridge.style.display = 'none';
    if (scaler) scaler.style.display = 'flex';
    if (iaSidebar) {
      iaSidebar.classList.add('collapsed');
      iaSidebar.style.width = '';
      iaSidebar.style.maxWidth = '';
      iaSidebar.style.margin = '';
    }
    updateSidebarToggleUI(true);
  } else if (mode === 'child') {
    if (parentWrapper) parentWrapper.style.display = 'none';
    if (childWrapper) childWrapper.style.display = 'flex';
    if (syncBridge) syncBridge.style.display = 'none';
    if (scaler) scaler.style.display = 'flex';
    if (iaSidebar) {
      iaSidebar.classList.add('collapsed');
      iaSidebar.style.width = '';
      iaSidebar.style.maxWidth = '';
      iaSidebar.style.margin = '';
    }
    updateSidebarToggleUI(true);
  } else if (mode === 'ia') {
    if (parentWrapper) parentWrapper.style.display = 'none';
    if (childWrapper) childWrapper.style.display = 'none';
    if (syncBridge) syncBridge.style.display = 'none';
    if (scaler) scaler.style.display = 'none';
    if (iaSidebar) {
      iaSidebar.classList.remove('collapsed');
      iaSidebar.style.display = 'flex';
      iaSidebar.style.width = '100%';
      iaSidebar.style.maxWidth = '960px';
      iaSidebar.style.margin = '0 auto';
    }
    updateSidebarToggleUI(false);
  }

  setTimeout(updateStageScale, 20);
}

function updateSidebarToggleUI(showToggle) {
  const toggleBtn = document.getElementById('btn-toggle-sidebar');
  const headerToggle = document.getElementById('btn-header-toggle-ia');
  const sidebar = document.getElementById('ia-sidebar');
  if (toggleBtn) {
    toggleBtn.style.display = showToggle ? 'flex' : 'none';
    const isCollapsed = sidebar ? sidebar.classList.contains('collapsed') : true;
    const btnLbl = document.getElementById('btn-toggle-sidebar-lbl');
    if (btnLbl) btnLbl.textContent = isCollapsed ? 'Show IA Tree' : 'Hide IA Tree';
  }
  if (headerToggle) {
    headerToggle.style.display = showToggle ? 'flex' : 'none';
    const isCollapsed = sidebar ? sidebar.classList.contains('collapsed') : true;
    const headerLbl = document.getElementById('btn-header-toggle-ia-lbl');
    if (headerLbl) headerLbl.textContent = isCollapsed ? 'Show IA' : 'Hide IA';
  }
}

function toggleIASidebar() {
  const sidebar = document.getElementById('ia-sidebar');
  if (!sidebar) return;
  const isCollapsed = sidebar.classList.toggle('collapsed');
  AppState.sidebarCollapsed = isCollapsed;
  updateSidebarToggleUI(true);
  setTimeout(updateStageScale, 150);
}

function setAppScale(val) {
  AppState.customZoom = val;
  updateStageScale();
}

function updateStageScale() {
  const stage = document.getElementById('device-stage');
  const scaler = document.getElementById('stage-viewport-scaler');
  if (!stage || !scaler) return;

  if (AppState.customZoom && AppState.customZoom !== 'auto') {
    const zoomVal = parseFloat(AppState.customZoom);
    scaler.style.transform = `scale(${zoomVal})`;
    return;
  }

  const stageW = stage.clientWidth;
  const stageH = stage.clientHeight;
  if (stageW <= 0 || stageH <= 0) return;

  const isDual = (AppState.viewMode === 'dual');
  const isSingle = (AppState.viewMode === 'parent' || AppState.viewMode === 'child');

  const baseW = isDual ? 840 : (isSingle ? 400 : 840);
  const baseH = 825;

  const padX = 28;
  const padY = 24;

  const availW = stageW - padX;
  const availH = stageH - padY;

  let scale = Math.min(availW / baseW, availH / baseH);
  if (scale > 1.0) scale = 1.0;
  if (scale < 0.35) scale = 0.35;

  scaler.style.transform = `scale(${scale.toFixed(4)})`;
}

window.setViewMode = setViewMode;
window.toggleIASidebar = toggleIASidebar;
window.setAppScale = setAppScale;
window.updateStageScale = updateStageScale;

// ==========================================================================
// 9. Toast Notification System
// ==========================================================================
function showToast(message, type = 'parent') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'parent' ? '🛡️' : '💳'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function highlightElement(selector) {
  const elem = document.querySelector(selector);
  if (!elem) return;
  elem.style.transition = 'outline 0.3s ease, transform 0.3s ease';
  elem.style.outline = '3px solid #14B8A6';
  elem.style.transform = 'scale(1.02)';
  setTimeout(() => {
    elem.style.outline = 'none';
    elem.style.transform = 'none';
  }, 1200);
}

// ==========================================================================
// 10. CEO Guided Demo Walkthrough Controller (18 Extended Steps)
// ==========================================================================
const CEODemoSteps = [
  {
    step: 1,
    title: 'Brand Vision & Sovereign Family Architecture',
    desc: 'Demonstrating the fundamental principle: Parent is the Control & Governance Layer (Indigo), Child is the Autonomous Spending Layer (Teal).',
    action: () => {
      setParentTab('dashboard');
      setChildTab('home');
      showToast('Step 1: Notice dual-device real-time sync ready.', 'parent');
    }
  },
  {
    step: 2,
    title: 'Children Allocation, Spent & Remaining (Feature 4)',
    desc: 'Every child’s financial position is immediately clear: Allocated vs Spent vs Remaining with visual progress bars (Sara: SAR 320/500 used).',
    action: () => {
      setParentTab('dashboard');
      highlightElement('#parent-screen-viewport .child-card-tile');
    }
  },
  {
    step: 3,
    title: 'Spending Analytics — Time Filter (Feature 1)',
    desc: 'Parent switches between Weekly, Monthly, and Yearly views. Watch all summary metrics recalculate dynamically!',
    action: () => {
      setParentTab('dashboard');
      setAnalyticsPeriod('monthly');
      highlightElement('#parent-screen-viewport .segmented-time-filter');
    }
  },
  {
    step: 4,
    title: 'Child-Wise Spending Donut Chart (Feature 2)',
    desc: 'Interactive SVG Donut chart displaying spending share per child (Sara 46%, Omar 36%, Youssef 18%) with complete legend.',
    action: () => {
      setParentTab('dashboard');
      setAnalyticsPeriod('weekly');
      highlightElement('#parent-screen-viewport .donut-chart-card');
    }
  },
  {
    step: 5,
    title: 'Category-Wise Spending Breakdown (Feature 3)',
    desc: 'Clear visual tracking of where family funds are spent: Education & Books, Food, Shopping, Transport, and Entertainment.',
    action: () => {
      setParentTab('dashboard');
      highlightElement('#parent-screen-viewport .category-bars-card');
    }
  },
  {
    step: 6,
    title: 'Automated Allowance Engine (04)',
    desc: 'Automated scheduling: Daily, Weekly, or Monthly deposits. Setting Sara’s allowance to SAR 100 / week.',
    action: () => {
      openParentModal('allowance', { childId: 'sara' });
    }
  },
  {
    step: 7,
    title: 'Daily Spending & Transaction Count Limits (Feature 5)',
    desc: 'Parent configures a SAR 50.00 daily limit AND a maximum 3 transactions/day limit for controlled youth freedom.',
    action: () => {
      closeParentModal();
      openParentModal('controls', { childId: 'sara' });
    }
  },
  {
    step: 8,
    title: 'Restricted Category Management (Feature 9)',
    desc: 'Clear management of Allowed Categories (Education, Food, Shopping) vs Blocked Categories (Gaming, Gambling). 1-click toggle.',
    action: () => {
      // Highlight category section inside controls modal
    }
  },
  {
    step: 9,
    title: 'Child Experience: Sara’s Home (C02)',
    desc: 'Sara opens her phone: Clean answers to “How much can I spend today?” (SAR 45.00 remaining, 1/3 tx used today).',
    action: () => {
      closeParentModal();
      setChildTab('home');
      highlightElement('#child-screen-viewport .hero-child-wallet-card');
    }
  },
  {
    step: 10,
    title: 'Child Savings Goal Tracker (Feature 7)',
    desc: 'Sara tracks her New iPad Goal (SAR 650 / 1000 saved · 65% progress) right from her home dashboard.',
    action: () => {
      setChildTab('home');
      highlightElement('#child-screen-viewport .savings-goal-card');
    }
  },
  {
    step: 11,
    title: 'Signature Flow: Sara Scans Merchant QR (07 / C06)',
    desc: 'Sara scans merchant QR code at Al Jarir Bookstore for SAR 85.00 (Exceeds her SAR 50.00 daily limit!).',
    action: () => {
      setChildTab('scan');
      simulateScanMerchant('Al Jarir Bookstore', 85.00, 'Education & Books');
    }
  },
  {
    step: 12,
    title: 'Deterministic Policy Engine Evaluation (07.5 / C07)',
    desc: 'Deterministic engine executes 9 rules: Detects Amount SAR 85 > Daily Limit SAR 50 $\rightarrow$ Flags “Parent Approval Required”.',
    action: () => {
      // Shown in child modal
    }
  },
  {
    step: 13,
    title: 'Sara Dispatches Approval Request (10.2 / C08)',
    desc: 'Sara attaches note: “School Art Project Materials & Notebooks” and submits prompt to Dad.',
    action: () => {
      submitChildApprovalRequest('Al Jarir Bookstore', 85.00, 'School Art Project Materials & Notebooks');
    }
  },
  {
    step: 14,
    title: 'Parent Receives High-Priority Alert Sheet (10.3)',
    desc: 'Dad’s phone buzzes immediately with a full context approval sheet containing merchant, category, amount & reason.',
    action: () => {
      setParentTab('dashboard');
      openParentApprovalModal('req-001');
    }
  },
  {
    step: 15,
    title: 'Parent 6-Digit OTP Verification (Feature 6)',
    desc: 'Parent verifies payment authorization using secure 6-digit mock OTP (123456) with instant validation feedback.',
    action: () => {
      autoFillMockOTP();
    }
  },
  {
    step: 16,
    title: 'Parent Approves with OTP & Real-Time Sync',
    desc: 'Parent confirms approval: Dad’s balance updates, Sara gets instant celebration & SAMA digital receipt.',
    action: () => {
      verifyAndApproveWithOTP('req-001');
    }
  },
  {
    step: 17,
    title: 'Live Transactions & Allocation Updates (Feature 4 & 10)',
    desc: 'The bookstore purchase is automatically added to family analytics and deducted from Sara’s remaining weekly allocation.',
    action: () => {
      closeChildModal();
      setParentTab('dashboard');
    }
  },
  {
    step: 18,
    title: 'Parent Appreciation & Milestone Reward (Feature 8)',
    desc: 'Dad sends “Great job! 👏” praise + SAR 20 reward to celebrate Sara’s responsible saving $\rightarrow$ Instant in-app celebration!',
    action: () => {
      submitParentAppreciation('sara');
      setChildTab('home');
      showToast('🎉 Master CEO Demo Completed: State-of-the-Art Family Fintech!', 'parent');
    }
  }
];

function updateCeoDemoUI() {
  const banner = document.getElementById('ceo-banner');
  const stepNum = document.getElementById('ceo-step-num');
  const stepTitle = document.getElementById('ceo-step-title');
  const stepDesc = document.getElementById('ceo-step-desc');
  const prevBtn = document.getElementById('ceo-prev-btn');
  const nextBtn = document.getElementById('ceo-next-btn');

  if (!banner) return;

  if (AppState.isCeoDemo) {
    banner.classList.remove('hidden');
    const current = CEODemoSteps[AppState.ceoStep];
    if (current) {
      stepNum.textContent = `Step ${current.step} of ${CEODemoSteps.length}`;
      stepTitle.textContent = current.title;
      stepDesc.textContent = current.desc;
      prevBtn.disabled = (AppState.ceoStep === 0);
      nextBtn.textContent = (AppState.ceoStep === CEODemoSteps.length - 1) ? 'Finish Demo' : 'Next Step →';
      current.action();
    }
  } else {
    banner.classList.add('hidden');
  }
  setTimeout(updateStageScale, 50);
}

// ==========================================================================
// 11. Global Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderIATree();
  renderParentScreen();
  renderChildScreen();

  // Search IA input
  const searchInput = document.getElementById('ia-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderIATree(e.target.value);
    });
  }

  // Expand / Collapse all buttons
  document.getElementById('btn-expand-all')?.addEventListener('click', () => {
    document.querySelectorAll('.ia-node').forEach(n => n.classList.add('open'));
  });
  document.getElementById('btn-collapse-all')?.addEventListener('click', () => {
    document.querySelectorAll('.ia-node').forEach(n => n.classList.remove('open'));
  });

  // Parent navigation bar tabs (Home, Children, Payments, Transactions, More)
  document.querySelectorAll('#parent-bottom-nav .nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      setParentTab(btn.dataset.parentTab);
    });
  });

  // Child navigation bar tabs (Home, Wallet, Scan, Activity, More)
  document.querySelectorAll('#child-bottom-nav .nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      setChildTab(btn.dataset.childTab);
    });
  });

  // View Mode Tabs
  document.querySelectorAll('.view-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      setViewMode(tab.dataset.view);
    });
  });

  // Modal Backdrop dismiss
  document.getElementById('parent-modal-backdrop')?.addEventListener('click', closeParentModal);
  document.getElementById('child-modal-backdrop')?.addEventListener('click', closeChildModal);

  // CEO Demo Controls
  document.getElementById('launch-ceo-demo')?.addEventListener('click', () => {
    AppState.isCeoDemo = true;
    AppState.ceoStep = 0;
    setViewMode('dual');
    updateCeoDemoUI();
  });

  document.getElementById('ceo-close-btn')?.addEventListener('click', () => {
    AppState.isCeoDemo = false;
    updateCeoDemoUI();
  });

  document.getElementById('ceo-prev-btn')?.addEventListener('click', () => {
    if (AppState.ceoStep > 0) {
      AppState.ceoStep--;
      updateCeoDemoUI();
    }
  });

  document.getElementById('ceo-next-btn')?.addEventListener('click', () => {
    if (AppState.ceoStep < CEODemoSteps.length - 1) {
      AppState.ceoStep++;
      updateCeoDemoUI();
    } else {
      AppState.isCeoDemo = false;
      updateCeoDemoUI();
      showToast('CEO Demo complete! You can explore freely.', 'parent');
    }
  });

  // Reset demo data button
  document.getElementById('btn-reset-demo')?.addEventListener('click', () => {
    window.location.reload();
  });

  // Scale and resize observers
  window.addEventListener('resize', updateStageScale);
  setTimeout(updateStageScale, 100);
});

// Programmatic fixes for missing components
function renderChildScan() {
  const currentChild = getCurrentActiveChild();
  return `
    <div class="ia-screen-crumb child-crumb">
      <span>IA Section C06 · QR Scanner Simulator</span>
    </div>
    <div class="screen-header-row">
      <h3 style="font-size: 18px; font-weight: 800;">Scan & Pay (C06)</h3>
    </div>
    <div style="text-align: center; padding: 30px 15px; background: var(--bg-surface-elevated); border: 2px dashed var(--child-deep); border-radius: var(--radius-lg); margin-top: 10px;">
      <div style="font-size: 48px; margin-bottom: 12px;">📷</div>
      <h4 style="font-size: 15px; font-weight: 700; color: var(--text-primary);">QR Code Scanner Simulator</h4>
      <p style="font-size: 12px; color: var(--text-secondary); margin: 8px 0 16px 0;">
        Simulate scanning a merchant QR code directly by triggering one of the quick options below.
      </p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <button class="btn-child-action" onclick="simulateScanMerchant('Al Jarir Bookstore', 85.00, 'Education & Books')">
          🛍️ Scan Al Jarir Bookstore (SAR 85.00)
        </button>
        <button class="btn-child-action" onclick="simulateScanMerchant('School Cafeteria', 15.00, 'Food')">
          🍔 Scan School Cafeteria (SAR 15.00)
        </button>
        <button class="btn-child-action" onclick="simulateScanMerchant('PlayStation Store', 120.00, 'Gaming')">
          🎮 Scan PlayStation Store (SAR 120.00)
        </button>
      </div>
    </div>
  `;
}

function autoFillMockOTP() {
  const code = '123456';
  for (let i = 1; i <= 6; i++) {
    const el = document.getElementById(`otp-d-${i}`);
    if (el) {
      el.value = code[i - 1];
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }
}

window.renderChildScan = renderChildScan;
window.autoFillMockOTP = autoFillMockOTP;


window.toggleChildMerchant = function(childId, merchantName, action) {
  const child = AppState.children.find(c => c.id === childId);
  if (!child) return;

  if (action === 'block') {
    if (!child.blockedMerchants) child.blockedMerchants = [];
    if (!child.blockedMerchants.includes(merchantName)) {
      child.blockedMerchants.push(merchantName);
    }
    showToast(`Merchant '${merchantName}' is now BLOCKED for ${child.name}`, 'parent');
  } else {
    if (child.blockedMerchants) {
      child.blockedMerchants = child.blockedMerchants.filter(m => m !== merchantName);
    }
    showToast(`Merchant '${merchantName}' is now UNBLOCKED for ${child.name}`, 'parent');
  }

  openParentModal('controls', { childId });
  renderParentScreen();
};

window.addChildMerchantBlock = function(childId) {
  const input = document.getElementById('add-blocked-merchant-input');
  if (!input) return;
  const merchantName = input.value.trim();
  if (!merchantName) {
    showToast('Please enter a merchant name', 'parent');
    return;
  }
  
  toggleChildMerchant(childId, merchantName, 'block');
};
