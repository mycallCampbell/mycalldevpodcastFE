'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
      setToggle(!toggle)
  }

  return (
    <main >
      <div className={styles.navContainer}>
        <div className={styles.containerGrid}>
          
          <Link href={`/#`} className={styles.linkBTN} onClick={() => handleToggle()}>
            <div>
              <Image
                src={'/hamburger.png'}
                width={32}
                height={32}
                className={styles.imageBurger}
                alt={'menu bar'}
                quality={100}
              />
            </div>
          </Link>
          
          <div>
            <Link href="/#" className={styles.undreline}>
              <div className={styles.titleMain}>MYCALL DEV</div>
            </Link>
          </div>

          <div className={styles.contactIcon}>
            <Link href="tel:07976753254">
              <Image
                src={'/mycallDEV_logo.png'}
                width={50}
                height={50}
                alt={'contact button'}
                quality={100}
              />
            </Link>
          </div>
        </div>
      </div>
      {toggle ? 
            <nav className={styles.navOpen}>
              <ul className={styles.unorderedList}>
                <Link href={'/#'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Podcasts</li>
                  </div>
                </Link>
                <Link href={'/#'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Guides</li>
                  </div>
                </Link>
                <Link href={'/#'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Blogs</li>
                  </div>
                </Link>
                <Link href={'/WHOAMI'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>WHOAMI</li>
                  </div>
                </Link>
                <Link href={'/#'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Support</li>
                  </div>
                </Link>
                <Link href={'/#'} className={styles.linkBTN} prefetch={true}>
                  <div className={styles.listItemContainer} onClick={() => handleToggle()}>
                    <li className={styles.listItem}>Contact</li>
                  </div>
                </Link>
              </ul>
            <div className={styles.closeMenu} onClick={() => handleToggle()}>Close Menu</div>
          </nav> 
            : 
          <div></div>
          }


          {/* DESKTOP NAV */}
          <Link href="/#" className={styles.undreline}>
            <div className={styles.titleMainDesktop}>MYCALL DEV</div>
          </Link>
            <nav className={styles.navContainerGrid}>
              <ul className={styles.navDesktopGrid}>
                <Link href={'/#'} className={styles.linkBTN} prefetch={true}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Podcasts</li>
                    </div>
                </Link>
                <Link href={'/#'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Guides</li>
                    </div>
                  </Link>
                  <Link href={'/#'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Blogs</li>
                    </div>
                  </Link>
                  <Link href={'/'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>WHOAMI</li>
                    </div>
                  </Link>
                  <Link href={'/#'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Support</li>
                    </div>
                  </Link>
                  <Link href={'/#'} className={styles.linkBTN}>
                    <div className={styles.listItemContainer}>
                      <li className={styles.listItem}>Contact</li>
                    </div>
                  </Link>
              </ul>
            </nav>
      
    </main>
  )
}