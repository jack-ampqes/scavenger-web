'use client'

import { useState } from 'react'
import styles from './about.module.css'
import Image from 'next/image'

const cards = [
  {
    id: 1,
    title: 'Electrical Equipment Sourcing',
    description: 'We specialize in sourcing hard-to-find electrical equipment with fast lead times. Whether you need transformers, circuit breakers, switchgear, or bus duct, we provide reliable solutions to keep your operations running without delays.',
    image: '/guy-in-chair.jpg',
  },
  {
    id: 2,
    title: 'Transformers & Circuit Breakers',
    content: (
      <>
        <p className={styles.cardDescription}>
          <strong>Transformers</strong> – Some of the shortest lead times in the industry. We also offer refurbishment and repair services.
        </p>
        <p className={styles.cardDescription}>
          <strong>Circuit Breakers</strong> – Medium- and high-voltage breakers in stock. Low-voltage options available, including refurbished and retrofitted units. Upgrade to AC Pro II or maintain legacy protective devices.
        </p>
      </>
    ),
    image: '/transformer.jpg',
  },
  {
    id: 3,
    title: 'Switchgear & Switches',
    content: (
      <>
        <p className={styles.cardDescription}>
          <strong>Medium Voltage Switches</strong> – Available in fused and unfused options.
        </p>
        <p className={styles.cardDescription}>
          <strong>1600-4000A Switchgear</strong> – Ready to ship, but inventory moves fast— call for availability.
        </p>
        <p className={styles.cardDescription}>
          <strong>UL 891 Switchboards</strong> – Get a faster alternative to OEM lead times.
        </p>
      </>
    ),
    image: '/switch.jpg',
  },
  {
    id: 4,
    title: 'Upgrades & Retrofits',
    content: (
      <>
        <p className={styles.cardDescription}>
          <strong>Protective Device Upgrades</strong> – Relay and trip unit retrofits, current and potential transformers.
        </p>
        <p className={styles.cardDescription}>
          <strong>Ground Fault Relay Packages</strong> – Improve system safety and reliability.
        </p>
      </>
    ),
    image: '/relay.jpg',
  },
]

export default function About() {
  const [activeCard, setActiveCard] = useState(1)

  const goToPrevious = () => {
    setActiveCard((prev) => (prev === 1 ? cards.length : prev - 1))
  }

  const goToNext = () => {
    setActiveCard((prev) => (prev === cards.length ? 1 : prev + 1))
  }

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>So...why SCAVENGER?</h1>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              SCAVENGER was founded to solve a critical problem: sourcing hard-to-find electrical equipment with immediate results. Whether you're facing a long lead time or an urgent outage, we specialize in fast access to inventory—ready-to-ship and surplus stock—to keep your operations running.
            </p>
            <p className={styles.paragraph}>
              When every minute counts, we save you time, energy, and money. No waiting, no unnecessary downtime—just the equipment you need, when you need it.
            </p>
            <p className={styles.paragraph}>
              Need something now? Even in the middle of the night, fill out our form or give us a call.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>WHAT    WE    DO</h2>
        </div>
        <div className={styles.carouselWrapper}>
            <div className={styles.cardsColumn}>
              <div className={styles.cardsContainer}>
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={`${styles.card} ${activeCard === card.id ? styles.cardActive : styles.cardHidden}`}
                  >
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    {card.description ? (
                      <p className={styles.cardDescription}>{card.description}</p>
                    ) : (
                      card.content
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.carouselControls}>
                <button
                  className={styles.arrowButton}
                  onClick={goToPrevious}
                  aria-label="Previous card"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={styles.dots}>
                  {cards.map((card) => (
                    <button
                      key={card.id}
                      className={`${styles.dot} ${activeCard === card.id ? styles.dotActive : ''}`}
                      onClick={() => setActiveCard(card.id)}
                      aria-label={`Go to card ${card.id}`}
                    >
                      {card.id}
                    </button>
                  ))}
                </div>
                <button
                  className={styles.arrowButton}
                  onClick={goToNext}
                  aria-label="Next card"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={`${styles.imageSlide} ${activeCard === card.id ? styles.imageActive : ''}`}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className={styles.image}
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>WES WOOLF</h2>
          <div className={styles.wesWrapper}>
            <div className={styles.wesImageContainer}>
              <Image
                src="/wes.png"
                alt="Wes Woolf"
                width={400}
                height={500}
                className={styles.wesImage}
                unoptimized
              />
            </div>
            <div className={styles.wesContent}>
              <p className={styles.paragraph}>
                Wes is the backbone of SCAVENGER, tracking down hard-to-find electrical gear and making procurement simple for our customers. Whether it's transformers, switchgear, or the rare part no one else can source, Wes gets it done—fast, reliable, and hassle-free.
              </p>
              <div className={styles.contact}>
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
    </main>
  )
}

