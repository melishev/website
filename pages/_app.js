import 'styles/global.scss'

import { GeistProvider, CssBaseline, Themes } from '@geist-ui/react'

import Header from 'components/header'
import Footer from 'components/footer'

import { useState } from 'react'

function Application({ Component, pageProps }) {

  const [themeType, setThemeType] = useState(`light`);
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }

  // const melishevTheme = Themes.createFromLight({
  //   type: 'coolTheme',
  //   font: {
  //     sans: '"Gilroy", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  //   },
  // })

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      {/* <Header themeType={themeType} switchThemes={switchThemes} /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </GeistProvider>
  )
}

export default Application