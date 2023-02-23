import styles from './styles.module.scss'
import { SignInButton } from '@/components/SignInButton'

export function Header () {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo-header.png" alt="logo do ignewz" />
        <nav>
          <a className={styles.active} href="">Início</a>
          <a href="">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}