import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label='pre'>{JSON.stringify(user)}</pre>

      <button
        className='btn btn-dark'
        onClick={() => setUser({ id: 123, name: "User no.1" })}
      >
        Set user
      </button>
    </>
  );
};
