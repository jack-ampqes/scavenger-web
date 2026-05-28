'use client'

import styles from './contact.module.css'

export default function Contact() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>GET IN TOUCH</h1>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              Need equipment fast? Have questions about our services? We&apos;re here to help. Reach out anytime—we&apos;re available 24/7 to assist with your electrical equipment needs.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <h2 className={styles.cardTitle}>SALES</h2>
              <div className={styles.contactInfo}>
                <a href="mailto:sales@scavengersupply.com" className={styles.contactLink}>
                  sales@scavengersupply.com
                </a>
                <a href="tel:2566166398" className={styles.contactLink}>
                  (256) 616-6398
                </a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <h2 className={styles.cardTitle}>WES WOOLF</h2>
              <p className={styles.cardDescription}>
                For specialized sourcing and hard-to-find equipment
              </p>
              <div className={styles.contactInfo}>
                <a href="mailto:wes.woolf@scavengersupply.com" className={styles.contactLink}>
                  wes.woolf@scavengersupply.com
                </a>
                <a href="tel:9382308541" className={styles.contactLink}>
                  (938) 230-8541
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.inquirySection}>
            <h2 className={styles.sectionTitle}>NEW INQUIRY</h2>
            <p className={styles.paragraph}>
              For detailed equipment requests and project inquiries, please use our inquiry form.
            </p>
            <a 
              href="https://ampqes.notion.site/19628cd9658e80e4b368fc41782af561" 
              className={styles.inquiryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              SUBMIT INQUIRY
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


