import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.videoContainer}>
        <video 
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <p className={styles.tagline}>
          Pssst...finding the right equipment doesn&apos;t have to be complicated.
        </p>
      </div>
    </section>
  )
}

