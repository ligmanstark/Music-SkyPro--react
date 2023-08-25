import { BurgerMenu } from '../../components/BurgerMenu'

function Navigation(props) {
  const { handleChangeMenu = Function.prototype, isOpen } = props
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo"></img>
      </div>
      <div className="nav__burger burger" onClick={handleChangeMenu}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {!isOpen ? '' : <BurgerMenu />}
    </nav>
  )
}

export default Navigation
