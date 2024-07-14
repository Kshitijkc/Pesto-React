import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <FormControlLabel control={<Switch checked={theme === 'light' ? false : true} onClick={toggleTheme} />} label={theme === 'light' ? 'dark' : 'light'} />
  );
}

export default ThemeSwitcher;
