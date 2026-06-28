import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Analytics } from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trivexa.com"),
  title: {
    default:
      "TRIVEXA — Premium Software Development & AI Solutions | Top-Rated Agency",
    template: "%s | TRIVEXA",
  },
  description:
    "TRIVEXA is a top-rated software development company (4.9★ Clutch) building enterprise-grade SaaS platforms, AI solutions, and premium websites. 150+ projects delivered. 99% client satisfaction. Free consultation available.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "software development company",
    "AI development company",
    "SaaS development agency",
    "enterprise software solutions",
    "premium web development company",
    "custom software development",
    "digital transformation agency",
    "cloud solutions provider",
    "UI/UX design agency",
    "mobile app development company",
    "Next.js development agency",
    "React development company",
    "Python AI development",
    "best software company India",
    "top software development agency 2025",
    "enterprise web application development",
    "startup software development partner",
    "AI integration services",
    "SaaS product development",
    "full stack development company",
  ],
  authors: [{ name: "TRIVEXA", url: "https://trivexa.com" }],
  creator: "TRIVEXA",
  publisher: "TRIVEXA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trivexa.com",
    siteName: "TRIVEXA",
    title:
      "TRIVEXA — Premium Software Development & AI Solutions | 4.9★ Rated",
    description:
      "Top-rated agency building enterprise-grade SaaS, AI solutions & premium websites. 150+ projects. 99% satisfaction. Free consultation.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "TRIVEXA — Engineering Premium Digital Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRIVEXA — Premium Software Development & AI Solutions",
    description:
      "Top-rated agency (4.9★ Clutch) building enterprise SaaS, AI solutions & premium websites. 150+ projects delivered. Free consultation.",
    images: ["/og-image.svg"],
    creator: "@trivexa",
  },
  alternates: {
    canonical: "https://trivexa.com",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Organization Schema (Enhanced) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TRIVEXA",
              url: "https://trivexa.com",
              logo: "https://trivexa.com/logo.png",
              description:
                "TRIVEXA builds enterprise-grade digital platforms, SaaS products and AI-powered experiences for ambitious modern businesses worldwide.",
              email: "hello@trivexa.com",
              sameAs: [
                "https://linkedin.com/company/trivexa",
                "https://x.com/trivexa",
                "https://github.com/trivexa",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "hello@trivexa.com",
                  contactType: "sales",
                  availableLanguage: ["English", "Hindi"],
                },
                {
                  "@type": "ContactPoint",
                  email: "support@trivexa.com",
                  contactType: "customer support",
                  availableLanguage: "English",
                },
              ],
              foundingDate: "2024",
              parentOrganization: {
                "@type": "Organization",
                name: "Triyara Enterprises",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "45",
                bestRating: "5",
                worstRating: "1",
              },
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                minValue: 10,
                maxValue: 50,
              },
              areaServed: "Worldwide",
              knowsAbout: [
                "Software Development",
                "Artificial Intelligence",
                "SaaS Development",
                "Web Development",
                "Mobile App Development",
                "Cloud Computing",
                "UI/UX Design",
                "Digital Transformation",
              ],
            }),
          }}
        />

        {/* ProfessionalService Schema (NEW — for local/service SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "TRIVEXA",
              url: "https://trivexa.com",
              description:
                "Premium software development, AI solutions, SaaS engineering, and digital transformation services.",
              priceRange: "$$$",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 19.076,
                  longitude: 72.8777,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Enterprise Website Development",
                      description:
                        "Premium, high-converting websites built with cutting-edge technology.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SaaS Product Engineering",
                      description:
                        "Full-stack SaaS development from concept to scale.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI & Machine Learning Solutions",
                      description:
                        "LLM integration, NLP, computer vision, and predictive analytics.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development",
                      description:
                        "Native and cross-platform mobile experiences with React Native.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cloud & DevOps Solutions",
                      description:
                        "Scalable cloud infrastructure on AWS, GCP, and Azure.",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TRIVEXA",
              url: "https://trivexa.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://trivexa.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* FAQPage Schema (NEW — critical for AI search citations) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What types of projects does TRIVEXA specialize in?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We specialize in enterprise-grade digital solutions including custom SaaS platforms, AI-powered applications (LLM, NLP, computer vision), premium websites, cross-platform mobile apps, and cloud infrastructure. Our expertise spans fintech, healthtech, e-commerce, and enterprise software across 15+ countries.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is TRIVEXA's typical project timeline?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A premium website typically takes 2-3 weeks, a web application 4-6 weeks, and enterprise SaaS platforms 8-16 weeks. Every milestone comes with our on-time delivery guarantee.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does TRIVEXA work with startups?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Our Starter tier (from $3K) is designed for startups looking to establish a premium digital presence, while our Enterprise tier serves Fortune 500 companies. Every client receives senior-level engineering quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What technologies does TRIVEXA use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We use React, Next.js, TypeScript, Node.js, Python, AWS, GCP, Azure, Docker, Kubernetes, and cutting-edge AI (OpenAI, custom LLMs, TensorFlow). We select the optimal stack for each project.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What makes TRIVEXA different from other agencies?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Three things: (1) 100% senior-level team — no junior developers. (2) Risk-free guarantees — satisfaction guarantee, on-time delivery promise, and 14-day trial. (3) End-to-end ownership — strategy through deployment and ongoing optimization. 99% client satisfaction across 150+ projects.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does TRIVEXA offer a free consultation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We offer a complimentary 30-minute discovery call where we analyze your requirements, provide initial technical recommendations, and outline a tailored roadmap with transparent pricing.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
