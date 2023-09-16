import * as S from '../../styles/style'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import playlist03 from '../../../img/playlist03.png'
import playlist02 from '../../../img/playlist02.png'
import playlist01 from '../../../img/playlist01.png'
import logup from '../../../img/icon/logup.svg'
function SidebarMyPlaylist(props) {
  const { music = [], user } = props

  const navigate = useNavigate()
  const handleLogout = () => {
    setTimeout(() => {
      navigate('/login')
    }, 500)
  }
  return (
    <S.MainSideBar className="main__sidebar sidebar">
      <S.SideBarPersonal className="sidebar__personal">
        <S.SideBarPersonalName className="sidebar__personal-name">
          {user ? `Hello, ${user}` : ''}
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
                ></S.SideBarImg>
              </NavLink>
            </S.SideBarLink>
          </S.SideBarItem>
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSideBar>
  )
}

export default SidebarMyPlaylist
