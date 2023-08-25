import * as S from '../styles/style'
const BurgerMenu = () => {
  return (
    <S.NavMenu className="nav__menu menu">
      <S.MenuList className="menu__list">
        <S.MenuItem className="menu__item">
          <S.MenuLink href="http://" className="menu__link">
            Главное
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem className="menu__item">
          <S.MenuLink href="http://" className="menu__link">
            Мой плейлист
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem className="menu__item">
          <S.MenuLink href="http://" className="menu__link">
            Войти
          </S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  )
}
export { BurgerMenu }
