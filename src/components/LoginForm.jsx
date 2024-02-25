import LoadingMsg from "./LoadingMsg";

export default function LoginForm({ onSubmit, onChange, name, email, minInput, loading }) {
  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          id="name"
          name="name"
          onChange={onChange}
          value={name}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          name="email"
          onChange={onChange}
          value={email}
        />
      </label>
      <button
        type="button"
        disabled={name.length >= minInput && email.length > 0 ? '' : 'disabled'}
        onClick={onSubmit}
      >
        Entrar
      </button>
      {loading && <LoadingMsg />}
    </form>
  );
}