import house from '../../images/School@2x 1.png';
import styles from './Card.module.css';

const Card = () => {
  const description = ` Experience, a concentration of knowledge and the ability to avoid most
    recruiting mistakes. We know what most local and foreign companies want
    and we can give it to you. And we are constantly improving our
    programming courses, adding something new there. You can see the success
    stories of our alumni for yourself to see the effectiveness of our
    teaching methodology. Yes, we will start with the basics and the most
    basic information. We know that most people come to us with zero
    knowledge.`;

  return (
    <div className={`${styles.card} box ${styles.box}`}>
      {/* <!-- Avatar -- */}
      <div className={styles.cardAvatar}>
        <img src={house} alt="Avatar" />
        <span className={styles.schoolType}>university</span>
        <span className={styles.schoolName}>MIT</span>
      </div>
      <div className={styles.cardDescription}>{description}</div>
    </div>
  );
};

export default Card;
