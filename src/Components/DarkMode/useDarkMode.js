import { useState } from 'react'
import { lightTheme, darkTheme } from '../../Styles/themeOptions'

export default function useDarkMode(pageTheme) {
    const [theme, setTheme] = useState(pageTheme);

    const toggleDarkMode = () => {
      const updatedTheme = (theme.palette.type === 'light') ? (darkTheme) : (lightTheme)
      setTheme(updatedTheme)
    };
    return [theme, toggleDarkMode];
}
