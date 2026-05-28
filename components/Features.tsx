import styles from './Features.module.css'

const features = [
  {
    title: 'Brand-Agnostic',
    description: 'At SCAVENGER, we\'re not tied to any single manufacturer. That means we source equipment based on what you need—whether it\'s the best lead time, performance, price, or compatibility.',
  },
  {
    title: 'Here To help',
    description: 'We bring strong technical expertise and project management capabilities to support you at every stage of your project. Our role is to complement your team, always acting with your best interests in mind.',
  },
  {
    title: 'On The Same Page',
    description: 'Every project starts with a conversation. We take the time to learn what matters most to you—whether it\'s staying under budget, hitting tight deadlines, sourcing from specific regions, or meeting exact quality standards.',
  },
]

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <h2 className={styles.featureTitle}>{feature.title}</h2>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

