import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';
import styles from './NavbarComponent.module.scss';

function NavbarComponent(): JSX.Element {
  return (
    <header className={styles.wrapper}>
      <nav>
        <ul>
          {
            Object.values(routes).map(({ path, name }) => {
              return (
                <li key={`${path}-navbar-key`}>
                  <Link to={path}>
                    {name}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </nav>
    </header>
  );
}

export default NavbarComponent;
