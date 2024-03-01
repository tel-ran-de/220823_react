import styles from './Content.module.css'

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <h1>We're an independent development agency.</h1>
      <p>
        We understand the intricacies of web development inside-out. That's why we build rock-solid
        Mobile and Web applications enriched with user-centered visual experiences.
      </p>
      <button>Contact Us</button>
    </div>
  )
}

export default Content
