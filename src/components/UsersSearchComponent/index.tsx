import styles from './UsersSearchComponent.module.scss';

interface usersSearchInterface {
  incomingFunction: (data: string) => void,
}

function UsersSearchComponent({ incomingFunction }: usersSearchInterface): JSX.Element {
  return (
    <article className={styles.wrapper}>
      <label htmlFor="username-search">
        <input
          type="text"
          name="username-search"
          onChange={(el) => {
            incomingFunction(el.target.value);
          }}
        />
      </label>
    </article>
  );
}

export default UsersSearchComponent;
