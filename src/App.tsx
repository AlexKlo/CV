import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Svg, Path, Link } from '@react-pdf/renderer';

// PDF styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#2563eb',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 15,
    color: '#475569',
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#2563eb',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#475569',
    lineHeight: 1.5,
  },
  contactInfo: {
    marginBottom: 20,
    gap: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contactText: {
    fontSize: 12,
    color: '#475569',
  },
  icon: {
    width: 14,
    height: 14,
  },
  experienceItem: {
    marginBottom: 15,
  },
  experienceTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  experienceCompany: {
    fontSize: 12,
    color: '#475569',
    marginBottom: 5,
  },
  bulletPoint: {
    marginLeft: 15,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  link: {
    color: '#475569',
    textDecoration: 'underline',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

// Icons for PDF
const GitHubIcon = () => (
  <Svg style={styles.icon} viewBox="0 0 24 24">
    <Path
      fill="#475569"
      d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
    />
  </Svg>
);

const LinkedInIcon = () => (
  <Svg style={styles.icon} viewBox="0 0 24 24">
    <Path
      fill="#475569"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  </Svg>
);

const EmailIcon = () => (
  <Svg style={styles.icon} viewBox="0 0 24 24">
    <Path
      fill="#475569"
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    />
  </Svg>
);

// PDF component
const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Aleksei Klochkov</Text>
        <Text style={styles.title}>Senior Software Engineer</Text>
      </View>
      
      <View style={styles.contactInfo}>
        <View style={styles.contactRow}>
          <GitHubIcon />
          <Link src="https://github.com/AlexKlo" style={styles.link}>
            github.com/AlexKlo
          </Link>
        </View>
        <View style={styles.contactRow}>
          <LinkedInIcon />
          <Link src="https://www.linkedin.com/in/aleksei-klochkov-34825b1aa" style={styles.link}>
            linkedin.com/in/aleksei-klochkov-34825b1aa
          </Link>
        </View>
        <View style={styles.contactRow}>
          <EmailIcon />
          <Link src="mailto:alexklo9339@gmail.com" style={styles.link}>
            alexklo9339@gmail.com
          </Link>
        </View>
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.text}>
        A tech-savvy software engineer with experience across quality assurance, mathematical modeling and software development (Julia, Python, C/C++).
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <View style={styles.experienceItem}>
          <Text style={styles.experienceTitle}>Software Developer</Text>
          <Text style={styles.experienceCompany}>Company • 2024 - Present</Text>
          <Text style={[styles.text, styles.bulletPoint]}>• Achievement 1</Text>
          <Text style={[styles.text, styles.bulletPoint]}>• Achievement 2</Text>
          <Text style={[styles.text, styles.bulletPoint]}>• Achievement 3</Text>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.experienceItem}>
          <Text style={styles.experienceTitle}>Bauman Moscow State Technical University</Text>
          <Text style={styles.experienceCompany}>Bachelor's degree • 2014 - 2018</Text>
          <Text style={styles.experienceCompany}>Master's degree • 2018 - 2020</Text>
        </View>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.experienceItem}>
          <Text style={styles.experienceTitle}>Achievement 1</Text>
          <Text style={styles.text}>Achievement description</Text>
        </View>
        <View style={styles.experienceItem}>
          <Text style={styles.experienceTitle}>Achievement 2</Text>
          <Text style={styles.text}>Achievement description</Text>
        </View>
      </View>
    </Page>
  </Document>
);

function App() {
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h1 className="text-4xl font-bold text-primary">KLOCHKOV ALEKSEI</h1>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xl text-secondary">Software Engineer</p>
            <div className="flex space-x-6">
              <a href="https://github.com/AlexKlo" className="text-secondary hover:text-primary transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/aleksei-klochkov-34825b1aa" className="text-secondary hover:text-primary transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:alexklo9339@gmail.com" className="text-secondary hover:text-primary transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="section">
        <h2 className="section-title">About Me</h2>
        <p className="text-secondary leading-relaxed">
        tech-savvy software engineer with experience across quality assurance, mathematical modeling and software development (Julia, Python, C/C++).
        </p>
      </section>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Software Developer</h3>
            <p className="text-secondary">Company • 2024 - Present</p>
            <ul className="mt-4 list-disc list-inside text-secondary">
              <li>Achievement 1</li>
              <li>Achievement 2</li>
              <li>Achievement 3</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Bauman Moscow State Technical University</h3>
          <p className="text-secondary">Bachelor's degree • 2014 - 2018</p>
          <p className="text-secondary">Masters's degree • 2018 - 2020</p>
        </div>
      </section>

      {/* Achievements */}
      <section className="section">
        <h2 className="section-title">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Achievement 1</h3>
            <p className="text-secondary mt-2">Achievement description</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Achievement 2</h3>
            <p className="text-secondary mt-2">Achievement description</p>
          </div>
        </div>
      </section>

      {/* PDF Download Button */}
      <section className="section flex justify-center">
        {isClient && (
          <PDFDownloadLink
            document={<CVDocument />}
            fileName="cv.pdf"
            className="btn btn-primary"
          >
            Download PDF
          </PDFDownloadLink>
        )}
      </section>
    </div>
  );
}

export default App;
