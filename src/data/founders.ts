import {
  Award,
  Building2,
  GraduationCap,
  Hotel,
  PartyPopper,
  Tv,
  LucideIcon,
} from "lucide-react";

import alaaImage from "./../../public/images/alaaImage.webp";
import wesalImage from "./../../public/images/wesalImage.webp";

export type Achievement = {
  icon: LucideIcon;
  title: string;
  description: string;
  dir?: string;
};

export type Timeline = {
  year: string;
  title: string;
  description: string;
  dir?: string;
};

export type FounderType = {
  id: number;

  image: any;

  name: string;

  role: string;

  company: string;

  since: string;

  quote: string;

  shortDescription: string;

  description: string;

  achievements: Achievement[];

  timeline: Timeline[];
};

export const founders: FounderType[] = [
  {
    id: 1,

    image: alaaImage,

    name: "Alaa ElKokany",

    role: "Founder & CEO",

    company: "Golden Glow Events",

    since: "2016",

    quote: "Every event begins with a vision, and every detail tells a story.",

    shortDescription:
      "خبرة طويلة في تنظيم وإدارة المناسبات منذ عام 2016 مع رؤية تجمع بين الفخامة والإبداع.",

    description:
      "بدأ علاء الكوكاني رحلته في مجال تنظيم المناسبات عام 2016، واستطاع خلال سنوات قليلة اكتساب خبرة احترافية في إدارة الفعاليات وتنظيم المناسبات بمختلف أنواعها. عمل داخل Best Western Plus Kuwait، مما أتاح له الاحتكاك بمعايير الضيافة العالمية وإدارة الفعاليات باحترافية عالية. وفي عام 2025 شارك في تأسيس Golden Glow Events ليقدم مفهومًا مختلفًا في عالم تنظيم المناسبات يعتمد على الجودة والابتكار والاهتمام بأدق التفاصيل.",

    achievements: [
      {
        icon: Hotel,
        title: "Best Western Plus Kuwait",
        description:
          "اكتساب خبرة احترافية في تنظيم وإدارة الفعاليات داخل الفندق.",
        dir: "ltr",
      },

      {
        icon: Award,
        title: "خبرة عملية",
        description:
          "تنفيذ وإدارة عشرات المناسبات والفعاليات باحترافية منذ عام 2016.",
        dir: "rtl",
      },

      {
        icon: PartyPopper,
        title: "فعاليات متنوعة",
        description:
          "تنظيم حفلات زفاف وخطوبة وأعياد ميلاد وفعاليات شركات ومناسبات خاصة.",
        dir: "rtl",
      },

      {
        icon: Building2,
        title: "تأسيس Golden Glow",
        description:
          "المشاركة في تأسيس Golden Glow Events وتقديم تجربة فاخرة في تنظيم المناسبات.",
        dir: "rtl",
      },
    ],

    timeline: [
      {
        year: "2016",
        title: "بداية الرحلة",
        description: "بداية العمل في مجال تنظيم المناسبات وإدارة الفعاليات.",
        dir: "rtl",
      },

      {
        year: "2018",
        title: "Best Western Plus Kuwait",
        description:
          "اكتساب خبرة احترافية في إدارة وتنظيم المناسبات داخل الفندق.",
        dir: "ltr",
      },

      {
        year: "2025",
        title: "تأسيس Golden Glow",
        description: "المشاركة في تأسيس Golden Glow Events.",
        dir: "rtl",
      },
    ],
  },

  {
    id: 2,

    image: wesalImage,

    name: "Wesal Ahmed",

    role: "Co-Founder",

    company: "Golden Glow Events",

    since: "2015",

    quote: "Every celebration deserves to become an unforgettable memory.",

    shortDescription:
      "خبرة في تنظيم المناسبات والديكور منذ عام 2015 مع ظهور إعلامي وتقديم دورات تدريبية.",

    description:
      "بدأت وصال أحمد رحلتها في مجال تنظيم المناسبات والديكور منذ عام 2015، وتمكنت من تنفيذ العديد من الفعاليات المميزة داخل وخارج الإسكندرية، كما شاركت في تنظيم حفلات رسمية وخاصة، وقدمت أعمالًا مميزة في الساحل الشمالي، بالإضافة إلى ظهورها في عدد من البرامج التلفزيونية وتقديم دورات تدريبية منذ عام 2021، مما جعلها واحدة من الأسماء المميزة في المجال.",

    achievements: [
      {
        icon: Building2,
        title: "أول فعالية رسمية",
        description:
          "تنظيم حفل تكريم المستشار محارب هيلع بمركز البحوث بحضور سكرتير المحافظ وأعضاء مجلس النواب.",
        dir: "rtl",
      },

      {
        icon: PartyPopper,
        title: "حفلات خاصة",
        description: "تنظيم حفل كتب كتاب كامل (A to Z) لعميلة من القاهرة.",
        dir: "rtl",
      },

      {
        icon: Hotel,
        title: "فعاليات الساحل",
        description: "تنظيم فعالية مميزة داخل قرية جرين بيتش بالساحل الشمالي.",
        dir: "rtl",
      },

      {
        icon: Tv,
        title: "الظهور الإعلامي",
        description:
          "الظهور في قناة الشمس الزرقاء مع الإعلامي إيهاب حليم ببرنامج صدى صوت مباشر.",
        dir: "rtl",
      },

      {
        icon: Tv,
        title: "برنامج شخابيط",
        description: "تنفيذ ديكورات رمضان وعيد الفطر مع الإعلامية سارة زيتون.",
        dir: "rtl",
      },

      {
        icon: Award,
        title: "شريك دائم",
        description:
          "اختيارها لتنفيذ ديكورات البرامج والمناسبات الخاصة بالقناة.",
        dir: "rtl",
      },

      {
        icon: GraduationCap,
        title: "التدريب",
        description:
          "تقديم دورات تدريبية في مجال تنظيم المناسبات منذ عام 2021.",
        dir: "rtl",
      },
    ],

    timeline: [
      {
        year: "2015",
        title: "بداية العمل",
        description: "بداية العمل في تنظيم المناسبات والديكور.",
      },

      {
        year: "2021",
        title: "التدريب",
        description: "بدء تقديم الدورات التدريبية في مجال تنظيم المناسبات.",
      },

      {
        year: "2024",
        title: "الظهور الإعلامي",
        description: "الظهور في قناة الشمس والمشاركة في تنفيذ ديكورات البرامج.",
      },

      {
        year: "2025",
        title: "Golden Glow",
        description: "المشاركة في تأسيس Golden Glow Events.",
        dir: "ltr",
      },
    ],
  },
];
