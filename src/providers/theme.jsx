import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext({});



export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(undefined);
  const themes = {
    light: {
      body: { background: "#f5f5f5", color: "black", p:'black' },
      header: { background: "#ebebff", color: "black" },
      title: { color: "black" },
      card: { background: "white", color: "black", topic: "black" },
      footer: { background: "#1d1d1d", color: "white" },
    },
    dark: {
      body: { background: "#212121", color: "black", p:'white' },
      header: { background: "#050505", color: "white"},
      title: { color: "white" },
      card: { background: "#101010", color: "white", topic: "black" },
      footer: { background: "#050505", color: "white" },
    },
  };
  
  const invertTheme = () => {
    if(theme === "light"){
        setTheme('dark');
        localStorage.setItem("theme", "dark");
    }else{
        setTheme('light');
        localStorage.setItem("theme", "light");
    }
  }
  const saveTheme = () =>{
    const localTheme = localStorage.getItem('theme')
    if(localTheme){
        if(localTheme === 'light' || localTheme === 'dark'){
          setTheme(localTheme)
        }else{
          setTheme('light')
          localStorage.setItem("theme", "light");
        }
    }else{
        localStorage.setItem("theme", "light");
        setTheme('light')
    }
  }

  useEffect(() => {
      saveTheme()
  }, [])
  const getTheme = () => {
    return themes[localStorage.getItem('theme')];
  };

  return (
    <ThemeContext.Provider value={{ saveTheme,getTheme, theme, setTheme, invertTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
