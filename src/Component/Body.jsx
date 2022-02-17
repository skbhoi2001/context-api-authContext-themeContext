import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { ThemeContext } from "../Context/ThemeProvider";

function Body() {
  const [isAuth] = useContext(AppContext);
  const [{ theme, themeData }] = useContext(ThemeContext);

  const currentTheme = themeData[theme];
  console.log(currentTheme);
  if (isAuth) {
    return (
      <div
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.background
        }}
      >
        <div>Hey! Welcome back!</div>
        <div>Would you like to continue with your application</div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Please sign in to continue</h3>
      </div>
    );
  }
}

export default Body;
