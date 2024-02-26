import ProductList from "./components/ProductList";
import { useLogin } from "./hooks/useLogin";

function App() {
  const { loggedIn, handlelogin, handlelogout } = useLogin(); //Calling custom hook

  return (
    <>
      <button onClick={loggedIn ? handlelogout : handlelogin}>
        {loggedIn ? "Log In" : "Log out"}
      </button>
      <ProductList />
    </>
  );
}

export default App;
