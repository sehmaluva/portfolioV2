const siteUrl = "https://sehmaluva.me";

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
  image: `${siteUrl}/profile.png`,
  jobTitle: ["Software Engineering Student", "Software Engineer"],
  description:
    "Software Engineering student and part-time Software Engineer specializing in full-stack architecture, Artificial Intelligence, and Machine Learning solutions.",
  email: "mailto:sehmaluva@gmail.com",
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
    "LLMs & GenAI",
    "AI Safety",
    "Jailbreak Evaluation",
    "Low-resource Languages",
    "Shona",
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
    "Portfolio of Malvin T. Machingura (sehmaluva) -Software Engineer focused on full-stack, AI, and Machine Learning.",
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
        text: "Malvin T. Machingura (Malvin Tinotenda Machingura, also known as sehmaluva) is a Software Engineering student and part-time Software Engineer based in Zimbabwe. He specializes in full-stack architecture, Artificial Intelligence, and Machine Learning. He currently studies at Bindura University of Science Education and works part-time at Fincheck Pvt Ltd, where he previously completed a Software Engineer internship.",
      },
    },
    {
      "@type": "Question",
      name: "What does Malvin Machingura specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "He specializes in building scalable applications with Python, Django, React, Next.js, and TypeScript, plus AI/ML work including model training, LLMs, GenAI, Deep Learning, explainable ML systems such as credit risk scoring, and AI safety research for low-resource languages like Shona.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Malvin Machingura based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Malvin T. Machingura is based in Harare, Zimbabwe, and is open to global collaboration and remote opportunities.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Malvin Machingura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can email sehmaluva@gmail.com, visit https://sehmaluva.me/#contact, or connect via LinkedIn at https://www.linkedin.com/in/malvin-t-machingura, GitHub at https://github.com/sehmaluva, and AWS Builder Community at https://builder.aws.com/community/@sehmaluva.",
      },
    },
    {
      "@type": "Question",
      name: "What notable projects has Malvin Machingura built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notable projects include Credit Risk Intelligence (Django + React explainable ML loan scoring), GitWrapped (GitHub contributions visualization), Student Fest (open-source coding challenges), and his personal portfolio at sehmaluva.me.",
      },
    },
    {
      "@type": "Question",
      name: "Has Malvin Machingura published AI research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Malvin T. Machingura authored AfroJailbreak-ZW: Evaluating Jailbreak Resistance in Shona, a pilot study with Apart Research (June 2026) comparing jailbreak resistance of ChatGPT and Gemini in English, Shona, and Shona-English code-switched prompts. Read it at https://apartresearch.com/project/afrojailbreakzw-evaluating-jailbreak-resistance-in-shona-7bmu",
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
          "End-to-end Django + React platform that scores loan applications with explainable LightGBM models and SHAP insights.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "GitWrapped",
        url: "https://gitwrapped.sehmaluva.me",
        applicationCategory: "WebApplication",
        description:
          "GitHub contributions wrapped visualization for yearly activity and highlights.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
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
  const schemas = [personSchema, websiteSchema, faqSchema, researchSchema, projectsSchema];

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
