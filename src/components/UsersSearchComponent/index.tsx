interface usersSearchInterface {
  incomingFunction: (data: string) => void,
}

function UsersSearchComponent({ incomingFunction }: usersSearchInterface): JSX.Element {
  return (
    <article>
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
