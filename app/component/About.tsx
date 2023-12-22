import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <h2>About</h2>
      <div className={styles.aboutVideo}>
        <video >
          <source src="" />
        </video>
      </div>
      <div className={styles.aboutText}>{/* Explainer video goes here */}
      <p >{/* About text goes here */}
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium non aut id ex atque similique eos, deleniti repellendus quibusdam iure quam, quae necessitatibus optio. Temporibus earum suscipit exercitationem mollitia enim.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium non aut id ex atque similique eos, deleniti repellendus quibusdam iure quam, quae necessitatibus optio. Temporibus earum suscipit exercitationem mollitia enim.
      
      </p>
      </div>
      
    </section>
  );
}

export default About;