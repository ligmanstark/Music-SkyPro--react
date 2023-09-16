import { BurgerMenu } from '../../components/BurgerMenu'
import * as S from '../../styles/style'

function NavigationCategory(props) {
  const { handleChangeMenu = Function.prototype, isOpen } = props
  return (
    <S.MainNav className="main__nav">
      <S.NavLogo className="nav__logo">
        <S.LogoImage
          className="logo__image"
          src="../img/logo.png"
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

export default NavigationCategory
