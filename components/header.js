import styles from 'styles/components/header.module.scss'

import Link from 'next/link'

import { Menu } from '@geist-ui/react-icons'


const Header = () => {

  const navigation = [
    {
      name: 'Projects',
      slug: 'projects',
    },
    {
      name: 'News',
      slug: 'news',
    },
    {
      name: 'Products',
      slug: 'products',
    },
    {
      name: 'Contacts',
      slug: 'contacts',
    }
  ]
  const controls = [
    {
      icon: 'B',
      slug: 'search',
    },
    {
      icon: 'A',
      slug: 'login',
    }
  ]

  return (
    <header className={styles.Header}>
      <div className={styles.Header_logo}>
        <Link href="/"><a>Melishev ™{/* <span> | Cheel</span> */}</a></Link>
      </div>
      <nav>
        <ul>
          {navigation.map((item) => (
            <li key={item.slug}><Link href={item.slug}><a>{item.name}</a></Link></li>
          ))}
        </ul>
      </nav>
      <div className={styles.Header_controls}>
        {controls.map((item) => (
          <button key={item.slug}>{item.icon}</button>
        ))}
        <button><Menu /></button>
      </div>
    </header>
  )
}

export default Header