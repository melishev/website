import { GeistProvider, CssBaseline } from '@geist-ui/react'

function Application({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}

export default Application