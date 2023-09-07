import Form from "./components/Form"
import { FormProvider } from "./context/FormContext";
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme} className="form-bg">
        <FormProvider>
          <Form />
        </FormProvider>
        <button onClick={toggleTheme} className="toggle-btn">Turn off {theme} mode</button>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
