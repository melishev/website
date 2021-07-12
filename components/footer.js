import { Page, Text, useTheme } from '@geist-ui/react'

const Footer = () => {

  const { palette } = useTheme()

  return (
    <Page.Footer 
      style={{
        height: 60 + `px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `flex-start`,
        backdropFilter: `saturate(180%) blur(5px)`,
        borderTop: `1px solid ${palette.accents_2}`,
        padding: `0 2vw`,
      }}
    >
      <Text h1 size="1.6rem" style={{marginBottom: 0}}>Melishev</Text>
    </Page.Footer>
  )
}

export default Footer