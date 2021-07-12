import { Page, Card, Link, Image, Text } from '@geist-ui/react'

import Header from 'components/header'
import Footer from 'components/footer'

export default function Home() {
  return (
    <Page size="100%" style={{padding: 0}}>
      <Header />
      <Page.Content>
        <Card width="330px">
          <h4>Geist UI React</h4>
          <p>Modern and minimalist React UI library.</p>
          <Card.Footer>
            <Link color target="_blank" href="https://github.com/geist-org/react">Visit source code on GitHub.</Link>
          </Card.Footer>
        </Card>
        <Card width="400px">
          <Image
            src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
            alt="lol"
            height="200"
            width="400"
            style={{ objectFit: 'cover' }}
          />
          <Text h4 style={{ marginBottom: '0' }}>Geist UI React</Text>
          <Text type="secondary" small>Modern and minimalist React UI library.</Text>
          <Card.Footer>
            <Link block target="_blank" href="https://github.com/geist-org/react">Visit source code on GitHub.</Link>
          </Card.Footer>
        </Card>
        <Image.Browser url="https://react.geist-ui.dev/en-us/guide/introduction" invert>
          <Image width={540} height={246} src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png" alt="lol" />
        </Image.Browser>
      </Page.Content>
      <Footer />
    </Page>
  )
}