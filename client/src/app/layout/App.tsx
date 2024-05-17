import './styles.css'
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background:{
        default: paletteType==='light'? '#eaeaea': '#121212'
      }
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  return (
    <>
      <div className="app">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
          <Container>
            <Catalog />
          </Container>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App