import { useEffect, useState } from 'react';
import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import { ThemeProvider, CssBaseline, Theme } from '@mui/material';
import { darkTheme, lightTheme, customTheme } from '../themes';
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string;
}
function MyApp({ Component, pageProps, theme = 'dark' }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light'
    const selectedTheme: Theme = cookieTheme === 'light' ? lightTheme : cookieTheme === 'dark' ? darkTheme : customTheme
    setCurrentTheme(selectedTheme)
  }, [])


  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const cookies = appContext.ctx.req ? (appContext.ctx.req.

//     return {

//     }
// }

export default MyApp
