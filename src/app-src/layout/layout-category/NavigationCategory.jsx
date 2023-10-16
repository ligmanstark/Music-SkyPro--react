import { BurgerMenu } from '../../components/BurgerMenu'
import * as S from '../../components/styles/style'
import logo from '../../../img/logo.png'

const NavigationCategory = (props) => {
  const { handleChangeMenu = Function.prototype, isOpen } = props
  return (
    <S.MainNav className="main__nav">
      <S.NavLogo className="nav__logo">
        <S.LogoImage
          className="logo__image"
          src={logo}
          alt="logo"
        ></S.LogoImage>
      </S.NavLogo>
      <S.NavBurger className="nav__burger" onClick={handleChangeMenu}>
        <S.BurgerLine className="burger__line"></S.BurgerLine>
        <S.BurgerLine className="burger__line"></S.BurgerLine>
        <S.BurgerLine className="burger__line"></S.BurgerLine>
      </S.NavBurger>
      {!isOpen ? '' : <BurgerMenu />}
    </S.MainNav>
  )
}

export { NavigationCategory }
