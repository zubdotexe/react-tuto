import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {

  const [defaultTheme, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  // actual theme changing thingy

  useEffect(() => {
    const htmlElem = document.querySelector('html');
    htmlElem.classList.remove("light", "dark");
    htmlElem.classList.add(defaultTheme);
  }, [defaultTheme])

  return (
    <ThemeProvider value={{defaultTheme, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
