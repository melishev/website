import styles from 'styles/modules/header.module.scss'

import { Page, Text, Button, useTheme } from '@geist-ui/react'
import { Sun, Moon } from '@geist-ui/react-icons'

const Header = (props) => {

  const { palette } = useTheme()

  return (
    <Page.Header
      className={styles.Header}
      style={{
        width: `unset`,
        height: 60 + `px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        backdropFilter: `saturate(180%) blur(5px)`,
        borderBottom: `1px solid ${palette.accents_2}`,
        padding: `0 2vw`,
      }}
    >
      <Text h1 size="1.6rem" style={{marginBottom: 0}}>Melishev</Text>
      <Button iconRight={props.themeType == `light` ? <Sun /> : <Moon />} auto size="small" onClick={() => props.switchThemes()} />
    </Page.Header>
  )
}

export default Header