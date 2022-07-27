import { createContext, useState } from "react";

export const ThemeContext=createContext();

export const ThemeContextProvider=({children})=>{
    const toggleTheme=()=>{
        if(theme==='light')
        setTheme('dark');
        else
        setTheme('light');
    }
    const [theme,setTheme]=useState("light");
    return <ThemeContext.Provider value={{isLight: theme==="light",theme,
toggleTheme}}>{children}</ThemeContext.Provider>
}