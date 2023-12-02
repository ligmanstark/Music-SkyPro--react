import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles/style'
import { usePostTokenMutation } from '../../store/service/serviceMusicApi'
import { setCurrentPage } from '../../store/slice/musicSlice'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../store/slice/userSlice'
import { useGetFavTracksQuery } from '../../store/service/serviceMusicApi'
import { FilterBase,filterToggle } from '../../store/slice/musicSlice';
const BurgerMenu = () => {
  const currentPage = useSelector((state) => state.musicReducer.currentPage)
  const musicBack = useSelector((state) => state.musicReducer.music)
  const SelectionBack = useSelector(
    (state) => state.musicReducer.SelectionMusic
  )
  const playlistFavoriteBack = useSelector(
    (state) => state.musicReducer.playlistFavorite
  )

  
  const dispatch = useDispatch()
  const [postToken, {}] = usePostTokenMutation()
  const { isError } = useGetFavTracksQuery()

  const logout = () => {
    dispatch(userLogout())

    localStorage.setItem('user', '')
    localStorage.removeItem('token')
    localStorage.setItem('id', '')
    localStorage.setItem('email', '')
    localStorage.removeItem('refreshToken')
    navigate('/login')
  }

  const navigate = useNavigate()
  const handleLogout = () => {
    setTimeout(() => {
      dispatch(userLogout())
      localStorage.setItem('user', '')
      localStorage.removeItem('token')
      localStorage.setItem('id', '')
      localStorage.setItem('email', '')
      localStorage.removeItem('refreshToken')
      navigate('/login')
    }, 500)
  }

  const handleBackToMainPage = () => {
    setTimeout(() => {
      navigate('/')
      dispatch(setCurrentPage('Main'))
         switch (currentPage) {
          case 'Main':
            dispatch(filterToggle(false))
    
            return dispatch(FilterBase(musicBack[0]))
    
          case 'Category':
            dispatch(filterToggle(false))
            return dispatch(FilterBase(SelectionBack))
    
          case 'Favorites':
            dispatch(filterToggle(false))
            return dispatch(FilterBase(playlistFavoriteBack))
    
          default:
            break
        }
        dispatch(FilterBase(musicBack[0]))
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
