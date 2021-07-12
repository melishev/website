import { Page, Text } from '@geist-ui/react'

const header = () => {

  const style = {
     backdropFilter: `saturate(180%) blur(5px)`,
     position: `sticky`,
     top: 0,
     zIndex: 999,
     borderBottom: `1px solid red`
  }
  
  return (
    <Page.Header style={style}>
      <Text h2>Header</Text>
    </Page.Header>
  )
}

export default header