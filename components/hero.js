import styles from 'styles/hero.module.css'

export default function Hero({ title, subtitle }) {

  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  )
}