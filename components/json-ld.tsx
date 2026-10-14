const siteUrl = "https://sehmaluva.codes";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Malvin T. Machingura",
  alternateName: [
    "Malvin Machingura",
    "Malvin Tinotenda Machingura",
    "sehmaluva",
  ],
  givenName: "Malvin",
  additionalName: "Tinotenda",
  familyName: "Machingura",
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: ["Software Engineering Student", "Software Engineer"],
  description:
    "Software Engineering student and remote Software Engineer specializing in full-stack architecture, Artificial Intelligence, and Machine Learning solutions.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Harare",
    addressCountry: "ZW",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Bindura University of Science Education",
  },
  worksFor: {
    "@type": "Organization",
    name: "Fincheck Pvt Ltd",
  },
  knowsAbout: [
    "Software Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Computational Linguistics",
    "LLMs & GenAI",
    "NLP",
    "AI Safety",
    "Jailbreak Evaluation",
    "Low-resource Languages",
    "Shona",
    "PyTorch",
    "Generative AI",
    "Transformer Neural Networks",
    "NumPy",
    "pandas",
    "Matplotlib",
    "Amazon Web Services (AWS)",
    "Cloud Computing",
    "Python",
    "Django",
    "React",
    "Next.js",
    "TypeScript",
    "Rust",
    "C++",
    "PostgreSQL",
    "Docker",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Future AWS AI Programmer Nanodegree",
      description:
        "Verified Nanodegree program completion from Udacity covering Python programming for AI with NumPy, pandas, and Matplotlib for data analysis and visualization; building and training machine learning models with popular Python libraries; implementing neural networks in PyTorch; hands-on deep learning projects; and generative AI with Transformer neural networks — building, training, and deploying them with PyTorch and leveraging pre-trained models for natural language processing. Designed for individuals with basic programming experience, it prepares learners for advanced study in AI and machine learning and for a career in AI programming.",
      credentialCategory: "certificate",
      dateCreated: "2026-10-09",
      competencyRequired: [
        "Python for AI",
        "NumPy",
        "pandas",
        "Matplotlib",
        "Data Analysis and Visualization",
        "Machine Learning",
        "PyTorch",
        "Neural Networks",
        "Deep Learning",
        "Generative AI",
        "Transformer Neural Networks",
        "Natural Language Processing",
        "Model Deployment",
      ],
      recognizedBy: {
        "@type": "Organization",
        name: "Udacity",
        url: "https://www.udacity.com",
      },
      url: "https://www.udacity.com/certificate/e/cce5c3c6-900d-11f1-ad5b-2b2ccce473dc",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "GCI World April 2026",
      description:
        "Fundamental theories and implementations of data science, with final assessment passed.",
      credentialCategory: "certificate",
      dateCreated: "2026-08-31",
      recognizedBy: {
        "@type": "Organization",
        name: "University of Tokyo — Matsuo-Iwasawa Laboratory",
      },
      url: `${siteUrl}/GCI_Certificate.pdf`,
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Africa Computational Linguistics Summer School",
      description:
        "Summer course in computational linguistics for African languages and NLP foundations.",
      credentialCategory: "certificate",
      dateCreated: "2026-08-15",
      recognizedBy: {
        "@type": "Organization",
        name: "Linguistics Island · Africompilings",
      },
      url: `${siteUrl}/Certificate_Malvin_T._Machingura.pdf`,
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "2026 Aspire Leaders Program",
      description:
        "Completed all modules of the Aspire Leaders Program (40 hours of coursework).",
      credentialCategory: "certificate",
      dateCreated: "2026-09-01",
      recognizedBy: {
        "@type": "Organization",
        name: "Aspire Institute",
      },
      url: `${siteUrl}/Aspire-Certificate.pdf`,
    },
  ],
  sameAs: [
    "https://github.com/sehmaluva",
    "https://www.linkedin.com/in/malvin-t-machingura",
    "https://builder.aws.com/community/@sehmaluva",
    "https://www.credly.com/users/sehmaluva/badges",
    "https://holopin.io/@sehmaluva",
    "https://apartresearch.com/project/afrojailbreakzw-evaluating-jailbreak-resistance-in-shona-7bmu",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Malvin T. Machingura Portfolio",
  description:
    "Portfolio of Malvin T. Machingura (sehmaluva) — Software Engineer focused on full-stack, AI, Machine Learning, data science, and computational linguistics.",
  publisher: { "@id": `${siteUrl}/#person` },
  inLanguage: "en",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Malvin Machingura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Malvin T. Machingura (Malvin Tinotenda Machingura, also known as sehmaluva) is a Software Engineering student and remote Software Engineer based in Zimbabwe. He specializes in full-stack architecture, Artificial Intelligence, and Machine Learning. He currently studies at Bindura University of Science Education and works remotely at Fincheck Pvt Ltd, where he previously completed a Software Engineer internship.",
      },
    },
    {
      "@type": "Question",
      name: "What does Malvin Machingura specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "He builds scalable applications with Python, Django, React, Next.js, and TypeScript, and works across AI/ML including model training in PyTorch, LLMs, GenAI, Deep Learning, explainable ML systems such as credit risk scoring, and AI safety research for low-resource languages like Shona.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Malvin Machingura based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "He is based in Harare, Zimbabwe, and is open to global collaboration and remote opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact or hire Malvin Machingura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the contact form on this site, or connect via LinkedIn, GitHub, and AWS Builder Community (https://builder.aws.com/community/@sehmaluva).",
      },
    },
    {
      "@type": "Question",
      name: "What notable projects has Malvin built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notable work includes Credit Risk Intelligence (explainable ML loan scoring), ScholarProof (privacy-preserving scholarship eligibility on Midnight), Pet Image Classifier (CNN deep learning), ADTC Shona Coding Tutor (offline bilingual LLM mentor with RAG), GitWrapped (GitHub activity visualization), Student Fest (open-source coding challenges), and this portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "What certifications and credentials does Malvin Machingura hold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Malvin holds the Future AWS AI Programmer Nanodegree from Udacity (issued 9 October 2026, verifiable at https://www.udacity.com/certificate/e/cce5c3c6-900d-11f1-ad5b-2b2ccce473dc), covering Python for AI with NumPy, pandas, and Matplotlib, building and training machine learning models, neural networks and generative AI with Transformer networks in PyTorch, and NLP with pre-trained models. He also holds GCI World April 2026 (data science, University of Tokyo — Matsuo-Iwasawa Laboratory, issued August 2026), the Africa Computational Linguistics Summer School certificate from Africompilings / Linguistics Island (August 2026), and the 2026 Aspire Leaders Program (Aspire Institute, September 2026). His other credentials include Credly badges (Python Essentials 1, Introduction to Cybersecurity, MongoDB Indexing & Aggregation), Postman Student Expert, Udacity AWS AI Practitioner Challenge, Frontend Masters Complete Intro to React v9, and a Microsoft Learn credential. View the certificates and verify credentials at https://sehmaluva.codes/#achievements",
      },
    },
    {
      "@type": "Question",
      name: "Has Malvin Machingura published AI research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. He authored AfroJailbreak-ZW: Evaluating Jailbreak Resistance in Shona with Apart Research (June 2026) — a pilot study on whether ChatGPT and Gemini are easier to jailbreak in Shona and Shona-English code-switched prompts than in English. Read it at https://apartresearch.com/project/afrojailbreakzw-evaluating-jailbreak-resistance-in-shona-7bmu",
      },
    },
  ],
};

const researchSchema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "@id":
    "https://apartresearch.com/project/afrojailbreakzw-evaluating-jailbreak-resistance-in-shona-7bmu",
  name: "AfroJailbreak-ZW: Evaluating Jailbreak Resistance in Shona",
  headline: "AfroJailbreak-ZW: Evaluating Jailbreak Resistance in Shona",
  url: "https://apartresearch.com/project/afrojailbreakzw-evaluating-jailbreak-resistance-in-shona-7bmu",
  datePublished: "2026-06-21",
  author: {
    "@id": `${siteUrl}/#person`,
  },
  publisher: {
    "@type": "Organization",
    name: "Apart Research",
    url: "https://apartresearch.com",
  },
  description:
    "A pilot study testing whether ChatGPT and Gemini are easier to jailbreak in Shona than in English, including Shona-English code-switched prompts and a Language Vulnerability Index for low-resource language AI safety.",
  keywords: [
    "AI safety",
    "jailbreak",
    "Shona",
    "low-resource languages",
    "LLM evaluation",
    "Global South",
    "Zimbabwe",
  ],
  about: [
    "AI Safety",
    "Jailbreak Resistance",
    "Shona Language",
    "Large Language Models",
  ],
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Projects",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Credit Risk Intelligence",
        url: "https://github.com/sehmaluva/credit-risk-intelligence",
        applicationCategory: "BusinessApplication",
        description:
          "Production-grade credit risk platform with LightGBM default prediction, SHAP explainability, loan workflows, and portfolio analytics dashboards.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "ScholarProof",
        url: "https://github.com/sehmaluva/scholarproof",
        applicationCategory: "BusinessApplication",
        description:
          "Privacy-preserving scholarship eligibility on Midnight — students prove GPA, income, and enrollment without exposing private data.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "SoftwareApplication",
        name: "Pet Image Classifier",
        url: "https://github.com/sehmaluva/pet-image-classifier",
        applicationCategory: "DeveloperApplication",
        description:
          "CNN-based pet image classifier comparing ResNet, AlexNet, and VGG for dog detection and breed accuracy.",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "SoftwareApplication",
        name: "ADTC Shona Coding Tutor",
        url: "https://github.com/sehmaluva/adtc-shona-coding-tutor",
        applicationCategory: "EducationalApplication",
        description:
          "Offline AI coding mentor with local quantized LLM, RAG over a CS syllabus, and bilingual English/Shona explanations.",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "SoftwareApplication",
        name: "GitWrapped",
        url: "https://gitwrapped.sehmaluva.codes",
        applicationCategory: "WebApplication",
        description:
          "GitHub contributions wrapped visualization for yearly activity and highlights.",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "SoftwareApplication",
        name: "Student Fest",
        url: "https://sehmaluva.github.io/student-fest",
        applicationCategory: "EducationalApplication",
        description:
          "Beginner-friendly coding and open-source experience with challenges and real-world projects.",
      },
    },
  ],
};

export function JsonLd() {
  const schemas = [
    personSchema,
    websiteSchema,
    faqSchema,
    researchSchema,
    projectsSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
