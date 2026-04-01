import './App.css'
import type { CSSProperties } from 'react';

function App() {

  const year = new Date().getFullYear();

   const styles: { [key: string]: CSSProperties } = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#0A0A0A",
      color: "#FFFFFF",
      fontFamily: "Inter, system-ui, sans-serif",
    },
    main: {
      maxWidth: "1200px",
      margin: "0 auto",
      minHeight: "100vh",
      padding: "40px 24px",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      paddingBottom: "20px",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      flexWrap: "wrap",
    },
    brandTop: {
      fontSize: "12px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.28em",
      color: "#C9A84C",
      margin: 0,
    },
    brandSub: {
      marginTop: "8px",
      fontSize: "14px",
      color: "rgba(255,255,255,0.6)",
    },
    nav: {
      display: "flex",
      gap: "24px",
      fontSize: "14px",
      color: "rgba(255,255,255,0.7)",
      flexWrap: "wrap",
    },
    navLink: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "none",
    },
    hero: {
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "48px",
      alignItems: "center",
      flex: 1,
      padding: "72px 0",
    },
    heroLeft: {
      minWidth: 0,
    },
    badge: {
      display: "inline-flex",
      borderRadius: "999px",
      border: "1px solid rgba(201,168,76,0.2)",
      backgroundColor: "rgba(201,168,76,0.1)",
      padding: "10px 16px",
      fontSize: "12px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.25em",
      color: "#C9A84C",
    },
    heroTitle: {
      marginTop: "24px",
      maxWidth: "760px",
      fontSize: "64px",
      fontWeight: 700,
      lineHeight: 1.05,
    },
    heroText: {
      marginTop: "24px",
      maxWidth: "700px",
      fontSize: "18px",
      lineHeight: 1.8,
      color: "rgba(255,255,255,0.7)",
    },
    ctaRow: {
      marginTop: "32px",
      display: "flex",
      gap: "16px",
      flexWrap: "wrap",
    },
    ctaPrimary: {
      display: "inline-block",
      borderRadius: "16px",
      backgroundColor: "#C9A84C",
      color: "#000000",
      padding: "14px 24px",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 700,
    },
    ctaSecondary: {
      display: "inline-block",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.15)",
      color: "#FFFFFF",
      padding: "14px 24px",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 700,
      backgroundColor: "transparent",
    },
    featurePreviewGrid: {
      marginTop: "40px",
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "16px",
      fontSize: "14px",
      color: "rgba(255,255,255,0.7)",
    },
    featurePreviewCard: {
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.1)",
      backgroundColor: "rgba(255,255,255,0.05)",
      padding: "16px",
    },
    featurePreviewTitle: {
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "0.22em",
      color: "#C9A84C",
      margin: 0,
    },
    featurePreviewText: {
      marginTop: "8px",
      lineHeight: 1.6,
    },
    phoneWrap: {
      display: "flex",
      justifyContent: "center",
    },
    phoneOuter: {
      width: "100%",
      maxWidth: "380px",
      borderRadius: "32px",
      border: "1px solid rgba(201,168,76,0.2)",
      background: "linear-gradient(to bottom, #15120D, #0D0C0A)",
      padding: "16px",
      boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
      boxSizing: "border-box",
    },
    phoneInner: {
      borderRadius: "26px",
      border: "1px solid rgba(255,255,255,0.1)",
      backgroundColor: "#10100F",
      padding: "24px",
    },
    phoneHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "12px",
    },
    phoneLabel: {
      fontSize: "10px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.28em",
      color: "rgba(255,255,255,0.45)",
    },
    phoneBadge: {
      borderRadius: "999px",
      border: "1px solid rgba(201,168,76,0.25)",
      backgroundColor: "rgba(201,168,76,0.1)",
      padding: "6px 10px",
      fontSize: "10px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      color: "#C9A84C",
    },
    quote: {
      marginTop: "24px",
      fontSize: "20px",
      lineHeight: 1.8,
      color: "#FFFFFF",
    },
    reference: {
      marginTop: "16px",
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "0.04em",
      color: "#C9A84C",
    },
    challengeBox: {
      marginTop: "24px",
      paddingTop: "24px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
    },
    challengeLabel: {
      fontSize: "10px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.28em",
      color: "rgba(255,255,255,0.45)",
    },
    challengeText: {
      marginTop: "12px",
      fontSize: "14px",
      lineHeight: 1.9,
      color: "rgba(255,255,255,0.7)",
    },
    phoneActions: {
      marginTop: "32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px",
    },
    phoneActionSecondary: {
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.1)",
      backgroundColor: "rgba(255,255,255,0.05)",
      color: "rgba(255,255,255,0.8)",
      padding: "14px 16px",
      fontSize: "14px",
      textAlign: "center",
    },
    phoneActionPrimary: {
      borderRadius: "12px",
      backgroundColor: "#C9A84C",
      color: "#000000",
      padding: "14px 16px",
      fontSize: "14px",
      fontWeight: 700,
      textAlign: "center",
    },
    section: {
      padding: "64px 0",
      borderTop: "1px solid rgba(255,255,255,0.1)",
    },
    sectionKicker: {
      fontSize: "12px",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.28em",
      color: "#C9A84C",
      margin: 0,
    },
    sectionTitle: {
      marginTop: "16px",
      fontSize: "42px",
      fontWeight: 700,
      lineHeight: 1.15,
    },
    sectionText: {
      marginTop: "16px",
      fontSize: "18px",
      lineHeight: 1.8,
      color: "rgba(255,255,255,0.7)",
      maxWidth: "760px",
    },
    cardGrid: {
      marginTop: "40px",
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "20px",
    },
    card: {
      borderRadius: "24px",
      border: "1px solid rgba(255,255,255,0.1)",
      backgroundColor: "rgba(255,255,255,0.05)",
      padding: "24px",
    },
    cardTitle: {
      fontSize: "20px",
      fontWeight: 600,
    },
    cardText: {
      marginTop: "12px",
      fontSize: "14px",
      lineHeight: 1.9,
      color: "rgba(255,255,255,0.7)",
    },
    aboutGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      alignItems: "start",
    },
    missionCard: {
      borderRadius: "24px",
      border: "1px solid rgba(255,255,255,0.1)",
      backgroundColor: "rgba(255,255,255,0.05)",
      padding: "24px",
    },
    missionLabel: {
      fontSize: "14px",
      textTransform: "uppercase",
      letterSpacing: "0.22em",
      color: "rgba(255,255,255,0.45)",
    },
    missionText: {
      marginTop: "16px",
      fontSize: "18px",
      lineHeight: 1.8,
      color: "rgba(255,255,255,0.8)",
    },
    missionRef: {
      marginTop: "8px",
      fontSize: "14px",
      fontWeight: 700,
      letterSpacing: "0.04em",
      color: "#C9A84C",
    },
    footer: {
      borderTop: "1px solid rgba(255,255,255,0.1)",
      padding: "32px 0",
      fontSize: "14px",
      color: "rgba(255,255,255,0.55)",
    },
    footerInner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "16px",
      flexWrap: "wrap",
    },
    footerLinks: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    },
    footerLink: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "none",
    },
  };

   const mobileStyles = `
    @media (max-width: 900px) {
      .ip-hero,
      .ip-about,
      .ip-card-grid,
      .ip-feature-preview-grid {
        grid-template-columns: 1fr !important;
      }

      .ip-main {
        padding: 32px 20px !important;
      }

      .ip-hero-title {
        font-size: 44px !important;
      }

      .ip-section-title {
        font-size: 34px !important;
      }
    }
  `;


 return (
    <div style={styles.page}>
      <style>{mobileStyles}</style>
      <main style={styles.main} className="ip-main">
        <header style={styles.header}>
          <div>
            <p style={styles.brandTop}>Iron & Proverbs</p>
            <p style={styles.brandSub}>Bible for men • Daily strength • Discipline • Purpose</p>
          </div>

          <nav style={styles.nav}>
            <a href="#features" style={styles.navLink}>
              Features
            </a>
            <a href="#about" style={styles.navLink}>
              About
            </a>
            <a href="/privacy" style={styles.navLink}>
              Privacy
            </a>
            <a href="/terms" style={styles.navLink}>
              Terms
            </a>
          </nav>
        </header>

        <section style={styles.hero} className="ip-hero">
          <div style={styles.heroLeft}>
            <p style={styles.badge}>Daily scripture for discipline</p>

            <h1 style={styles.heroTitle} className="ip-hero-title">
              Build strength through Scripture.
            </h1>

            <p style={styles.heroText}>
              Iron & Proverbs is a clean, focused Bible app for men who want daily verses, practical challenges,
              and encouragement rooted in courage, discipline, leadership, and faith.
            </p>

            <div style={styles.ctaRow}>
              <a
                href="https://play.google.com/store/apps/details?id=com.ironandproverbs.app"
                style={styles.ctaPrimary}
              >
                View on Google Play
              </a>
              <a href="#features" style={styles.ctaSecondary}>
                Explore Features
              </a>
            </div>

            <div style={styles.featurePreviewGrid} className="ip-feature-preview-grid">
              <div style={styles.featurePreviewCard}>
                <p style={styles.featurePreviewTitle}>Daily Word</p>
                <p style={styles.featurePreviewText}>Start the day with one focused verse and challenge.</p>
              </div>
              <div style={styles.featurePreviewCard}>
                <p style={styles.featurePreviewTitle}>Topics</p>
                <p style={styles.featurePreviewText}>Browse fear, anger, purpose, courage, leadership, and more.</p>
              </div>
              <div style={styles.featurePreviewCard}>
                <p style={styles.featurePreviewTitle}>Save & Share</p>
                <p style={styles.featurePreviewText}>Bookmark verses and share polished verse cards in a few taps.</p>
              </div>
            </div>
          </div>

          <div style={styles.phoneWrap}>
            <div style={styles.phoneOuter}>
              <div style={styles.phoneInner}>
                <div style={styles.phoneHeader}>
                  <p style={styles.phoneLabel}>Daily Word</p>
                  <span style={styles.phoneBadge}>Daily</span>
                </div>

                <blockquote style={styles.quote}>
                  “Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is
                  with you wherever you go.”
                </blockquote>

                <p style={styles.reference}>Joshua 1:9 • ESV</p>

                <div style={styles.challengeBox}>
                  <p style={styles.challengeLabel}>Today’s Challenge</p>
                  <p style={styles.challengeText}>
                    Take one hard step today that requires courage instead of comfort.
                  </p>
                </div>

                <div style={styles.phoneActions}>
                  <div style={styles.phoneActionSecondary}>Save Verse</div>
                  <div style={styles.phoneActionPrimary}>Share Card</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" style={styles.section}>
          <div>
            <p style={styles.sectionKicker}>Features</p>
            <h2 style={styles.sectionTitle} className="ip-section-title">A focused daily Scripture experience.</h2>
            <p style={styles.sectionText}>
              Designed to stay simple, strong, and useful. No clutter. No endless menus. Just daily Scripture,
              focused topics, and tools that help you stay consistent.
            </p>
          </div>

          <div style={styles.cardGrid} className="ip-card-grid">
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Daily Verse + Challenge</h3>
              <p style={styles.cardText}>
                Open the app and get one verse with a practical challenge you can apply immediately.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Browse by Topic</h3>
              <p style={styles.cardText}>
                Explore Scripture by courage, anger, fear, purpose, leadership, discipline, and faith.
              </p>
            </div>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Save, Share, Return</h3>
              <p style={styles.cardText}>
                Bookmark powerful verses and share designed verse cards with friends and family.
              </p>
            </div>
          </div>
        </section>

        <section id="about" style={styles.section}>
          <div style={styles.aboutGrid} className="ip-about">
            <div>
              <p style={styles.sectionKicker}>About</p>
              <h2 style={styles.sectionTitle} className="ip-section-title">Built for discipline, courage, and purpose.</h2>
              <p style={styles.sectionText}>
                Iron & Proverbs was created for men who want daily encouragement rooted in Scripture and practical
                application. It’s built to help you return to the Word consistently and apply it in real life.
              </p>
            </div>

            <div style={styles.missionCard}>
              <p style={styles.missionLabel}>Mission</p>
              <p style={styles.missionText}>“As iron sharpens iron, so one man sharpens another.”</p>
              <p style={styles.missionRef}>Proverbs 27:17</p>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          <div style={styles.footerInner}>
            <p>© {year} Iron & Proverbs. All rights reserved.</p>
            <div style={styles.footerLinks}>
              <a href="/privacy" style={styles.footerLink}>
                Privacy Policy
              </a>
              <a href="/terms" style={styles.footerLink}>
                Terms of Use
              </a>
              <a href="mailto:quoteverseapps@gmail.com" style={styles.footerLink}>
                Contact Support
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}


export default App
