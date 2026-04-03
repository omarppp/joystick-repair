export interface DiagnosticCase {
  id: string;
  deviceTypes: string[];
  keywords: {
    english: string[];
    arabic: string[];
  };
  conditions?: {
    dropped?: boolean;
    liquid?: boolean;
    repaired?: boolean;
    startedWhen?: string[];
  };
  diagnosis: {
    title: string;
    confidence: number; // 0-100
    likely_issue: string;
    possible_causes: string[];
    urgency: 'منخفضة' | 'متوسطة' | 'عالية' | 'فورية';
    repair_difficulty: 'بسيطة' | 'متوسطة' | 'متقدمة' | 'معقدة';
    recommended_next_step: string;
    warning_notes?: string[];
    disclaimer: string;
    support_message: string;
    follow_up_questions?: string[];
  };
}

export const diagnosticDataset: DiagnosticCase[] = [
  // Analog Stick Issues
  {
    id: "analog_drift",
    deviceTypes: ["PS4 controller", "PS5 controller", "Xbox controller", "Nintendo Switch"],
    keywords: {
      english: ["drift", "stick moves by itself", "analog moves", "stick not responding", "deadzone", "inaccurate movement"],
      arabic: ["انجراف", "العصا تتحرك لوحدها", "الأنالوج بيجري", "العصا مش بترد", "المنطقة الميتة", "الحركة مش دقيقة"]
    },
    diagnosis: {
      title: "انجراف العصا التناظرية",
      confidence: 85,
      likely_issue: "انجراف العصا التناظرية (Analog Drift)",
      possible_causes: [
        "تآكل أجهزة القياس قيد الاستخدام (Potentiometers)",
        "تراكم الحطام والغبار داخل العصا",
        "انجراف المعايرة مع الوقت",
        "تدهور الاتصال الكهربائي",
        "مشاكل في الدوائر الإلكترونية"
      ],
      urgency: "متوسطة",
      repair_difficulty: "متوسطة",
      recommended_next_step: "نظف العصا بلطف باستخدام ضغط هواء، أو استشر فني متخصص لفحص وإصلاح أجهزة القياس",
      warning_notes: [
        "لا تحاول فتح العصا بنفسك إلا إذا كنت خبيراً",
        "التنظيف الخاطئ قد يزيد المشكلة سوءاً"
      ],
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشكلة انجراف العصا بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "هل المشكلة تحدث في جميع الألعاب أم لعبة معينة؟",
        "هل جربت تنظيف العصا بضغط الهواء؟",
        "متى لاحظت المشكلة لأول مرة؟"
      ]
    }
  },

  // Button Issues
  {
    id: "stuck_button",
    deviceTypes: ["PS4 controller", "PS5 controller", "Xbox controller", "Nintendo Switch"],
    keywords: {
      english: ["button stuck", "stuck trigger", "r2 stuck", "l2 stuck", "button not working", "sticky button"],
      arabic: ["الزر عالق", "الزرار معلق", "زر R2 عالق", "زر L2 عالق", "الزر مش شغال", "الزرار زلق"]
    },
    diagnosis: {
      title: "عطل في الزر أو الزناد",
      confidence: 90,
      likely_issue: "عطل ميكانيكي في الزر أو تراكم حطام",
      possible_causes: [
        "تراكم الحطام تحت الزر",
        "مشاكل في آلية الضغط",
        "تلف في المفاتيح المطاطية",
        "مشاكل في لوحة الدوائر",
        "تآكل المكونات مع الاستخدام"
      ],
      urgency: "منخفضة",
      repair_difficulty: "بسيطة",
      recommended_next_step: "جرب تنظيف المنطقة حول الزر بقطعة قماش ناعمة، أو استشر فني لفحص وإصلاح الآلية",
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشاكل الأزرار بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "هل الزر يظل مضغوطاً أم لا يعمل نهائياً؟",
        "هل المشكلة تحدث مع جميع الأزرار أم زر معين؟"
      ]
    }
  },

  // Charging Issues
  {
    id: "charging_problem",
    deviceTypes: ["PS4 controller", "PS5 controller", "Xbox controller"],
    keywords: {
      english: ["not charging", "charging issue", "battery drains fast", "no power", "charging port damage"],
      arabic: ["مش بيشتغل", "مشكلة في الشحن", "البطارية بتفضى بسرعة", "مش بيشتغل", "منفذ الشحن تالف"]
    },
    diagnosis: {
      title: "مشكلة في الشحن أو البطارية",
      confidence: 80,
      likely_issue: "مشكلة في نظام الشحن أو البطارية",
      possible_causes: [
        "بطارية تالفة أو منتهية الصلاحية",
        "منفذ شحن متسخ أو تالف",
        "مشاكل في كابل الشحن",
        "تلف في دوائر الشحن الداخلية",
        "مشاكل في البرمجيات"
      ],
      urgency: "متوسطة",
      repair_difficulty: "متوسطة",
      recommended_next_step: "جرب كابل شحن آخر، أو استشر فني متخصص لفحص البطارية ومنفذ الشحن",
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشاكل الشحن بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "هل جربت كابل شحن آخر؟",
        "هل البطارية تسخن أثناء الشحن؟",
        "كم عمر البطارية تقريباً؟"
      ]
    }
  },

  // Liquid Damage
  {
    id: "liquid_damage",
    deviceTypes: ["PS4 controller", "PS5 controller", "Xbox controller", "Nintendo Switch", "Console"],
    keywords: {
      english: ["liquid damage", "water damage", "spilled", "wet", "corrosion"],
      arabic: ["تلف بسبب السائل", "تلف بالماء", "انسكب", "مبلل", "صدأ"]
    },
    conditions: {
      liquid: true
    },
    diagnosis: {
      title: "تلف بسبب السائل - حالة طوارئ",
      confidence: 95,
      likely_issue: "تلف بسبب تعرض للسوائل",
      possible_causes: [
        "تآكل على لوحة الدوائر الإلكترونية",
        "صدأ على المكونات المعدنية",
        "قصر كهربائي في الدوائر",
        "فشل في المكونات الحساسة",
        "مشاكل في الشاشة أو الشاشات (للأجهزة التي تحتوي عليها)"
      ],
      urgency: "فورية",
      repair_difficulty: "متقدمة",
      recommended_next_step: "توقف عن استخدام الجهاز فوراً وتواصل مع فني متخصص للفحص والإصلاح قبل تفاقم المشكلة",
      warning_notes: [
        "لا تحاول تشغيل الجهاز أو شحنه",
        "لا تحاول تجفيفه بالحرارة",
        "الوقت عامل حاسم في إنقاذ الجهاز"
      ],
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشاكل تلف السوائل بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "ما نوع السائل الذي تعرض له الجهاز؟",
        "كم الوقت الذي مر منذ التعرض للسائل؟",
        "هل الجهاز كان يعمل بعد التعرض؟"
      ]
    }
  },

  // Physical Damage from Drop
  {
    id: "drop_damage",
    deviceTypes: ["PS4 controller", "PS5 controller", "Xbox controller", "Nintendo Switch", "Console"],
    keywords: {
      english: ["dropped", "fell", "impact damage", "cracked", "broken"],
      arabic: ["وقع", "سقط", "تلف بسبب الصدمة", "مكسور", "متصدع"]
    },
    conditions: {
      dropped: true
    },
    diagnosis: {
      title: "تلف بسبب الصدمة الفيزيائية",
      confidence: 90,
      likely_issue: "تلف في المكونات الداخلية بسبب الصدمة",
      possible_causes: [
        "تلف في الموصلات الداخلية",
        "كسور في مفاصل اللحام",
        "تلف في لوحة الدوائر",
        "مشاكل في الشاشة أو الشاشات",
        "تلف في هيكل الجهاز الخارجي"
      ],
      urgency: "عالية",
      repair_difficulty: "متقدمة",
      recommended_next_step: "توقف عن استخدام الجهاز وتواصل مع فني متخصص للفحص والتقييم قبل تفاقم الأضرار",
      warning_notes: [
        "قد تكون هناك أضرار داخلية غير مرئية",
        "الاستخدام المستمر قد يسبب أضراراً إضافية"
      ],
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشاكل تلف الصدمات بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "من أي ارتفاع سقط الجهاز؟",
        "هل هناك أضرار خارجية مرئية؟",
        "هل الجهاز كان يعمل بعد السقوط؟"
      ]
    }
  },

  // Overheating Issues
  {
    id: "overheating",
    deviceTypes: ["PS4 controller", "PS5 controller", "Xbox controller", "Console"],
    keywords: {
      english: ["overheating", "hot", "loud fan", "shuts down when hot", "thermal issue"],
      arabic: ["بيسخن", "ساخن", "المروحة صوتها عالي", "بيقفل لما يسخن", "مشكلة حرارية"]
    },
    diagnosis: {
      title: "مشكلة في التسخين والتبريد",
      confidence: 85,
      likely_issue: "مشاكل في نظام التبريد أو تراكم الحرارة",
      possible_causes: [
        "تراكم الغبار في المراوح والفتحات",
        "فشل في مراوح التبريد",
        "مشاكل في معاجين الحرارة",
        "انسداد في نظام التبريد",
        "ارتفاع في استهلاك الطاقة"
      ],
      urgency: "عالية",
      repair_difficulty: "متوسطة",
      recommended_next_step: "نظف الفتحات والمراوح من الغبار، أو استشر فني متخصص لفحص نظام التبريد",
      warning_notes: [
        "التسخين المفرط قد يسبب تلف دائم",
        "لا تستخدم الجهاز في أماكن حارة"
      ],
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشاكل التسخين بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "هل المروحة تعمل بصوت عالي؟",
        "هل الجهاز يقفل تلقائياً عند التسخين؟",
        "كم درجة الحرارة التقريبية؟"
      ]
    }
  },

  // Connection Issues
  {
    id: "connection_issues",
    deviceTypes: ["PS4 controller", "PS5 controller", "Xbox controller", "Nintendo Switch"],
    keywords: {
      english: ["disconnects randomly", "connection issues", "bluetooth problems", "pairing issues", "lag", "input lag"],
      arabic: ["بيفصل لوحده", "مشاكل في الاتصال", "مشاكل بلوتوث", "مشاكل في الاقتران", "بطء", "تأخير في الاستجابة"]
    },
    diagnosis: {
      title: "مشاكل في الاتصال والإشارة",
      confidence: 75,
      likely_issue: "مشاكل في الاتصال اللاسلكي أو الأسلاك",
      possible_causes: [
        "تداخل في إشارة البلوتوث",
        "بطارية ضعيفة تسبب انقطاع الاتصال",
        "مشاكل في هوائي الإشارة",
        "تلف في منفذ USB",
        "مشاكل في برمجيات الجهاز"
      ],
      urgency: "متوسطة",
      repair_difficulty: "بسيطة",
      recommended_next_step: "جرب إعادة الاقتران، غير البطارية، أو استشر فني لفحص الدوائر اللاسلكية",
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشاكل الاتصال بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "هل المشكلة تحدث مع جميع الأجهزة أم جهاز معين؟",
        "هل جربت إعادة الاقتران؟",
        "ما مدى قوة إشارة البلوتوث؟"
      ]
    }
  },

  // Vibration Motor Issues
  {
    id: "vibration_issues",
    deviceTypes: ["PS4 controller", "PS5 controller", "Xbox controller"],
    keywords: {
      english: ["vibration not working", "rumble not working", "no haptic feedback"],
      arabic: ["الاهتزاز مش شغال", "الرعشة مش شغالة", "الارتجاج مش موجود"]
    },
    diagnosis: {
      title: "عطل في محركات الاهتزاز",
      confidence: 80,
      likely_issue: "فشل في محركات الاهتزاز أو دوائرها",
      possible_causes: [
        "تلف في محركات الاهتزاز",
        "مشاكل في دوائر التحكم",
        "تآكل في الأسلاك المتصلة",
        "مشاكل في البرمجيات"
      ],
      urgency: "منخفضة",
      repair_difficulty: "متوسطة",
      recommended_next_step: "تحقق من إعدادات اللعبة، أو استشر فني متخصص لفحص محركات الاهتزاز",
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشاكل الاهتزاز بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "هل الاهتزاز لا يعمل نهائياً أم ضعيف؟",
        "هل يعمل في قائمة الاختبار؟"
      ]
    }
  },

  // Touchpad Issues (PS4/PS5)
  {
    id: "touchpad_issues",
    deviceTypes: ["PS4 controller", "PS5 controller"],
    keywords: {
      english: ["touchpad not working", "touchpad unresponsive", "click pad issues"],
      arabic: ["التاتش باد مش شغال", "التاتش باد مش بيرد", "مشاكل في لوحة اللمس"]
    },
    diagnosis: {
      title: "عطل في لوحة اللمس",
      confidence: 85,
      likely_issue: "مشاكل في لوحة اللمس أو دوائرها",
      possible_causes: [
        "تلف في لوحة اللمس الحساسة",
        "مشاكل في دوائر التحكم",
        "تراكم الحطام تحت اللوحة",
        "تآكل في الأسلاك المتصلة"
      ],
      urgency: "متوسطة",
      repair_difficulty: "متوسطة",
      recommended_next_step: "نظف لوحة اللمس بلطف، أو استشر فني متخصص لفحص وإصلاح الدوائر",
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشاكل لوحة اللمس بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "هل اللمس لا يعمل نهائياً أم غير دقيق؟",
        "هل الضغط على اللوحة يعمل؟"
      ]
    }
  },

  // HDMI Issues (Consoles)
  {
    id: "hdmi_issues",
    deviceTypes: ["Console", "PS4", "PS5", "Xbox"],
    keywords: {
      english: ["no display", "hdmi not working", "black screen", "no signal"],
      arabic: ["مش هيظهر", "HDMI مش شغال", "شاشة سوداء", "مش هيبعت إشارة"]
    },
    diagnosis: {
      title: "مشكلة في منفذ HDMI أو الإخراج",
      confidence: 70,
      likely_issue: "مشاكل في منفذ HDMI أو دوائر الفيديو",
      possible_causes: [
        "تلف في منفذ HDMI",
        "مشاكل في دوائر الفيديو",
        "كابل HDMI تالف",
        "مشاكل في برمجيات النظام"
      ],
      urgency: "عالية",
      repair_difficulty: "متوسطة",
      recommended_next_step: "جرب كابل HDMI آخر ومنفذ مختلف، أو استشر فني متخصص لفحص دوائر الفيديو",
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشاكل HDMI بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "هل جربت كابل HDMI آخر؟",
        "هل الشاشة تعمل مع أجهزة أخرى؟",
        "هل هناك صوت ولكن لا صورة؟"
      ]
    }
  },

  // Power Issues
  {
    id: "power_issues",
    deviceTypes: ["Console", "PS4", "PS5", "Xbox"],
    keywords: {
      english: ["won't turn on", "no power", "power button not working", "power supply issues"],
      arabic: ["مش بيفتح", "مش بيشتغل", "زر الطاقة مش شغال", "مشاكل في مصدر الطاقة"]
    },
    diagnosis: {
      title: "مشكلة في الطاقة والتشغيل",
      confidence: 75,
      likely_issue: "مشاكل في نظام الطاقة أو الأزرار",
      possible_causes: [
        "مصدر طاقة تالف",
        "مشاكل في زر الطاقة",
        "تلف في لوحة الطاقة الرئيسية",
        "مشاكل في المكثفات أو المحولات"
      ],
      urgency: "عالية",
      repair_difficulty: "متقدمة",
      recommended_next_step: "تحقق من مصدر الطاقة والكابلات، أو استشر فني متخصص لفحص نظام الطاقة",
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشاكل الطاقة بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "هل يضيء أي مؤشر ضوئي عند الضغط على زر الطاقة؟",
        "هل جربت مصدر طاقة آخر؟",
        "هل هناك رائحة حريق أو دخان؟"
      ]
    }
  },

  // Generic Wear and Tear
  {
    id: "wear_and_tear",
    deviceTypes: ["PS4 controller", "PS5 controller", "Xbox controller", "Nintendo Switch", "Console"],
    keywords: {
      english: ["old controller", "worn out", "severe wear", "previous bad repair"],
      arabic: ["قديم", "بالي", "تآكل شديد", "إصلاح سيء سابق"]
    },
    conditions: {
      repaired: true
    },
    diagnosis: {
      title: "تآكل عام واهتراء",
      confidence: 65,
      likely_issue: "اهتراء عام للمكونات مع الاستخدام المطول",
      possible_causes: [
        "اهتراء المكونات الميكانيكية",
        "تآكل الدوائر الكهربائية",
        "مشاكل من إصلاحات سابقة",
        "تراكم الأضرار مع الوقت"
      ],
      urgency: "متوسطة",
      repair_difficulty: "متقدمة",
      recommended_next_step: "استشر فني متخصص لتقييم شامل لحالة الجهاز وتحديد الإصلاحات المطلوبة",
      disclaimer: "هذا تقدير أولي بناءً على الأعراض المذكورة. الفحص الفعلي مطلوب للتأكيد.",
      support_message: "في Joystick Repair نقدر نساعدك في حل مشاكل الاهتراء بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "كم عمر الجهاز تقريباً؟",
        "هل تم إصلاحه من قبل؟",
        "ما شدة الاستخدام اليومي؟"
      ]
    }
  },

  // Low Confidence Fallback
  {
    id: "unclear_issue",
    deviceTypes: ["PS4 controller", "PS5 controller", "Xbox controller", "Nintendo Switch", "Console", "أخرى"],
    keywords: {
      english: ["weird issue", "strange problem", "not sure", "unclear"],
      arabic: ["مشكلة غريبة", "مشكلة عجيبة", "مش متأكد", "مش واضح"]
    },
    diagnosis: {
      title: "مشكلة غير واضحة تحتاج فحص متخصص",
      confidence: 30,
      likely_issue: "مشكلة تحتاج فحص فني متخصص للتشخيص الدقيق",
      possible_causes: [
        "مشكلة معقدة تحتاج فحص شامل",
        "أعراض غير كافية للتشخيص الدقيق",
        "قد تكون مشكلة نادرة أو معقدة"
      ],
      urgency: "متوسطة",
      repair_difficulty: "متوسطة",
      recommended_next_step: "يُفضل استشارة فني متخصص لفحص الجهاز وتشخيص المشكلة بدقة",
      disclaimer: "بناءً على المعلومات المقدمة، لا يمكن تحديد المشكلة بدقة. الفحص الفعلي ضروري للتشخيص الصحيح.",
      support_message: "في Joystick Repair نقدر نساعدك في حل أي مشكلة في جهازك بخطوات واضحة وسريعة، وفي حالات كتير بنقدر نوجّهك للحل المناسب من غير ما تتعب. ولو احتاجت صيانة فعلية، تقدر تتواصل معانا واحنا نتابع معاك لحد ما الجهاز يرجع يشتغل بأفضل شكل.",
      follow_up_questions: [
        "هل يمكنك وصف المشكلة بمزيد من التفصيل؟",
        "متى بدأت المشكلة بالضبط؟",
        "هل هناك أي أعراض أخرى ملاحظة؟"
      ]
    }
  }
];

export function findBestMatch(
  deviceType: string,
  symptoms: string,
  conditions: {
    dropped?: string;
    liquid?: string;
    repaired?: string;
    startedWhen?: string;
  }
): DiagnosticCase | null {
  const normalizedSymptoms = symptoms.toLowerCase();
  const normalizedArabicSymptoms = symptoms; // Keep Arabic as-is for matching

  let bestMatch: DiagnosticCase | null = null;
  let bestScore = 0;

  for (const caseItem of diagnosticDataset) {
    // Check device type compatibility
    if (!caseItem.deviceTypes.includes(deviceType) && !caseItem.deviceTypes.includes("أخرى")) {
      continue;
    }

    let score = 0;

    // Keyword matching
    for (const keyword of caseItem.keywords.english) {
      if (normalizedSymptoms.includes(keyword.toLowerCase())) {
        score += 10;
      }
    }

    for (const keyword of caseItem.keywords.arabic) {
      if (normalizedArabicSymptoms.includes(keyword)) {
        score += 15; // Arabic keywords get higher weight
      }
    }

    // Condition matching
    if (caseItem.conditions) {
      if (caseItem.conditions.dropped && conditions.dropped === "نعم") score += 20;
      if (caseItem.conditions.liquid && conditions.liquid === "نعم") score += 25;
      if (caseItem.conditions.repaired && conditions.repaired === "نعم") score += 15;

      if (caseItem.conditions.startedWhen) {
        const startedLower = (conditions.startedWhen || "").toLowerCase();
        for (const timeKeyword of caseItem.conditions.startedWhen) {
          if (startedLower.includes(timeKeyword.toLowerCase())) {
            score += 5;
          }
        }
      }
    }

    // Apply confidence multiplier
    score = score * (caseItem.diagnosis.confidence / 100);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = caseItem;
    }
  }

  // Only return if score is above threshold
  return bestScore > 15 ? bestMatch : null;
}