import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { ThemeContext } from "../Context/ThemeProvider";

const Header = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);
  const [{ theme }, toggleTheme] = useContext(ThemeContext);
  return (
    <div>
      This is a navbar!
      <div>
        {isAuth ? (
          <>
            <button onClick={() => setIsAuth(false)}>SIGN OUT</button>
            <div>
              <button onClick={toggleTheme}>
                Toggle theme to {theme === "light" ? "Dark" : "Light"}
              </button>
            </div>
          </>
        ) : (
          <button onClick={() => setIsAuth(true)}> SIGN IN</button>
        )}
      </div>
    </div>
  );
};

export default Header;
