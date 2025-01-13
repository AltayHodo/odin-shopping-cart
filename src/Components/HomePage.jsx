import styles from '../Styles/HomePage.module.css'

export default function HomePage(){
  return (
    <div className={styles.homepage}>
      <div className={styles.title}>
        Welcome to my E-Commerce Website!
      </div>
      <div className={styles.description}>
        We are a lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta repellendus, voluptas quis, exercitationem illum culpa voluptate optio placeat minima possimus quo dolore porro rem corporis ut, quae qui iste?
      </div>
    </div>
  )
}