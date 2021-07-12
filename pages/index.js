import { Page, Card, Link, Image, Text } from '@geist-ui/react'

function Main() {
  return (
    <Page size={100} dotBackdrop style={{background: `url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/gear_2699-fe0f.png)`}}>
      <Page.Content style={{paddingRight: `2vw`, paddingLeft: `2vw`, minHeight: `auto-fill`}}>
        <Text h2>⚙️ На данный момент сайт обновляется</Text>
        {/* <Text h2>⚙️ The site is currently being updated</Text> */}
        <Text h4>✉️ По вопросам писать на: <Link href="mail:matvey@melishev.ru" color>matvey@melishev.ru</Link></Text>
      </Page.Content>
    </Page>
  )
}

export default Main