import styles from 'styles/components/header.module.scss'

import Link from 'next/link'
// import { useEffect, useState } from 'react'

const Header = () => {

  // const [scroll, setScroll] = useState(0)
  // const listenScrollEvent = (event) => {
  //   if (window.scrollY < 1) {
  //     return setScroll(0)
  //   } else if (window.scrollY > 1) {
  //     return setScroll(1)
  //   } 
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', listenScrollEvent);
  //   return () =>
  //     window.removeEventListener('scroll', listenScrollEvent);
  // }, []);

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
      icon: 'F',
      slug: 'search',
    },
    {
      icon: 'A',
      slug: 'login',
    }
  ]

  return (
    <header className={styles.Header} style={scroll ? {background: `rgba(0, 0, 0, .8)`} : {}}>
      <div className={styles.Header_logo}>
        <Link href="/">
          <a style={scroll ? {color: 'white'} : {}}>Melishev ™
            {/* <span> | Cheel</span> */}
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          {navigation.map((item) => (
            <li key={item.slug}><Link href={item.slug}><a style={scroll ? {color: 'white'} : {}}>{item.name}</a></Link></li>
          ))}
        </ul>
      </nav>
      <div className={styles.Header_controls}>
        {controls.map((item) => (
          <button key={item.slug} style={scroll ? {color: 'white'} : {}}>{item.icon}</button>
        ))}
      </div>
    </header>
  )
}

export default Header