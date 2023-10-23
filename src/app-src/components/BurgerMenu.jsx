import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles/style'
import { usePostTokenMutation } from '../../store/service/serviceMusicApi'
import { setCurrentPage } from '../../store/slice/musicSlice'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../store/slice/userSlice'
import { useGetFavTracksQuery } from '../../store/service/serviceMusicApi'
const BurgerMenu = () => {
  const dispatch = useDispatch()
  const [postToken, {}] = usePostTokenMutation()
  const { isError } = useGetFavTracksQuery()

  const logout = () => {
    dispatch(userLogout())

    localStorage.setItem('user', '')
    localStorage.setItem('token', '')
    localStorage.setItem('id', '')
    localStorage.setItem('email', '')
    localStorage.setItem('refreshToken', '')
    navigate('/login')
  }

  const navigate = useNavigate()
  const handleLogout = () => {
    setTimeout(() => {
      navigate('/login')
      localStorage.setItem('user', '')
      localStorage.setItem('token', '')
    }, 500)
  }

  const handleBackToMainPage = () => {
    setTimeout(() => {
      navigate('/')
      dispatch(setCurrentPage('Main'))
    }, 500)
  }

  const handleMyPlaylist = () => {
    setTimeout(() => {
      if (!isError) {
        navigate('/favorites')
        dispatch(setCurrentPage('Favorites'))
      } else {
        navigate('/login')
        logout()
      }
    }, 500)
  }
  return (
    <S.NavMenu className="nav__menu menu">
      <S.MenuList className="menu__list">
        <S.MenuItem className="menu__item">
          <S.MenuLink className="menu__link" onClick={handleBackToMainPage}>
            Главная
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem className="menu__item">
          <S.MenuLink className="menu__link" onClick={handleMyPlaylist}>
            Мой плейлист
          </S.MenuLink>
        </S.MenuItem>
        <S.MenuItem className="menu__item">
          <S.MenuLink className="menu__link" onClick={handleLogout}>
            Выйти
          </S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  )
}
export { BurgerMenu }
