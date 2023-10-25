import { useEffect } from 'react'
import * as S from '../../components/styles/style'
import { useContext } from 'react'
import { AppContext } from '../../../context'
import { NavLink, useNavigate } from 'react-router-dom'
import playlist03 from '../../../img/playlist03.png'
import playlist02 from '../../../img/playlist02.png'
import playlist01 from '../../../img/playlist01.png'
import logup from '../../../img/icon/logup.svg'
import { useParams } from 'react-router-dom'
import { setCurrentPage } from '../../../store/slice/musicSlice'
import { userLogout } from '../../../store/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useGetSectionTracksQuery } from '../../../store/service/serviceMusicApi'
const Sidebar = () => {
  const dispatch = useDispatch()
  const categoryId = useParams()
  console.log(categoryId)
  const { isError } = useGetSectionTracksQuery()
  const { user } = useContext(AppContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(userLogout)
      localStorage.setItem('user', '')
      localStorage.setItem('token', '')
      localStorage.setItem('id', '')
      localStorage.setItem('email', '')
      localStorage.setItem('refreshToken', '')
      navigate('/login')
    }, 500)
  }
  const handleCategory = () => {
    if (categoryId) {
      dispatch(setCurrentPage('Category'))
    }
  }

  return (
    <S.MainSideBar className="main__sidebar sidebar">
      <S.SideBarPersonal className="sidebar__personal">
        <S.SideBarPersonalName className="sidebar__personal-name">
          {user ? `Hello, ${localStorage.getItem('user')}` : ''}
        </S.SideBarPersonalName>
        {user ? (
          <S.SideBarAvatar
            className="sidebar__avatar"
            src={logup}
            alt="login"
            onClick={handleLogout}
          ></S.SideBarAvatar>
        ) : (
          ''
        )}
      </S.SideBarPersonal>
      <S.SideBarBlock className="sidebar__block">
        <S.SideBarList className="sidebar__list">
          <S.SideBarItem className="sidebar__item">
            <S.SideBarLink className="sidebar__link">
              <NavLink to={`/category/1`}>
                <S.SideBarImg
                  className="sidebar__img"
                  src={playlist01}
                  alt="day's playlist"
                  onClick={handleCategory}
                ></S.SideBarImg>
              </NavLink>
            </S.SideBarLink>
          </S.SideBarItem>
          <S.SideBarItem className="sidebar__item">
            <S.SideBarLink className="sidebar__link" href="#">
              <NavLink to={`/category/2`}>
                {' '}
                <S.SideBarImg
                  className="sidebar__img"
                  src={playlist02}
                  alt="day's playlist"
                  onClick={handleCategory}
                ></S.SideBarImg>
              </NavLink>
            </S.SideBarLink>
          </S.SideBarItem>
          <S.SideBarItem className="sidebar__item">
            <S.SideBarLink className="sidebar__link" href="#">
              <NavLink to={`/category/3`}>
                <S.SideBarImg
                  className="sidebar__img"
                  src={playlist03}
                  alt="day's playlist"
                  onClick={handleCategory}
                ></S.SideBarImg>
              </NavLink>
            </S.SideBarLink>
          </S.SideBarItem>
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSideBar>
  )
}

export { Sidebar }
