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
    "https://www.credly.com/users/sehmaluva/badges",
    "https://holopin.io/@sehmaluva",
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
        text: "He specializes in building scalable applications with Python, Django, React, Next.js, and TypeScript, plus AI/ML work including model training, LLMs, GenAI, Deep Learning, and explainable ML systems such as credit risk scoring.",
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
        text: "You can email sehmaluva@gmail.com, visit https://sehmaluva.me/#contact, or connect via LinkedIn at https://www.linkedin.com/in/malvin-t-machingura and GitHub at https://github.com/sehmaluva.",
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
  const schemas = [personSchema, websiteSchema, faqSchema, projectsSchema];

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
