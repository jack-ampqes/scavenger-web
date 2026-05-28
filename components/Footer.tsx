import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.links}>
            <a href="/">Home</a>
            <a href="/inquiry">New Inquiry</a>
            <a href="/contact">Contact</a>
          </div>
          
          <div className={styles.contact}>
            <p className={styles.phone}>(256) 616-6398</p>
            <a href="mailto:sales@scavengersupply.com" className={styles.email}>sales@scavengersupply.com</a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} SCAVENGER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

