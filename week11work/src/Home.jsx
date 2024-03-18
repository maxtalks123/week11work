import { UserContext } from "./UserContext/UserContext";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Counter } from "./Counter";

export function Home() {
  let { username, setUsername } = useContext(UserContext);
  let { theme, setTheme } = useContext(ThemeContext);
  function handleThemeToggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <>
      <h2>User Id: {username}</h2>
      <button onClick={() => setUsername("spongebob")}>
        Change username to Spongebob
      </button>
      <h2>Theme: {theme}</h2>
      <button onClick={handleThemeToggle}>Change theme to dark</button>
      <div>
        <Counter />
      </div>
    </>
  );
}
