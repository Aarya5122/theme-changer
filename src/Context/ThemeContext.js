import {createContext} from "react"

const ThemeContext = createContext(["light", () => {}]); // Any datatype here it's Array

export default ThemeContext;