import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>We want to get to know you.</h2>
          <a href="/inquiry" className={styles.button}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

