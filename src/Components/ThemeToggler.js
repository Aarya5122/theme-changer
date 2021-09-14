import React, {useContext} from "react"
import ThemeContext from "../Context/ThemeContext"

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext); //default value + function
    return(
        <div
         onClick={()=>(setThemeMode(themeMode === "light" ? "dark": "light"
         ))}>
            <p>{themeMode === "light" ? "Turn Off" : "Turn On"}</p>
        </div>
    );
}

export default ThemeToggler;