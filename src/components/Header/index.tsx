import styles from './styles.module.scss'

export function Header () {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo-header.png" alt="logo do ignewz" />
        <nav>
          <a className={styles.active} href="">Início</a>
          <a href="">Posts</a>
        </nav>
      </div>
    </header>
  )
}