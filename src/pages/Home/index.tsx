import LoginComponent from '../../components/LoginComponent';
import styles from './Home.module.scss';

function HomePage(): JSX.Element {
  return (
    <article className={styles.wrapper}>
      Auth page
      <LoginComponent />
    </article>
  );
}

export default HomePage;
