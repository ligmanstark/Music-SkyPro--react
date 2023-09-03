import * as S from '../../styles/style'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
function Sidebar(props) {
  const { music = [] } = props

  return (
    <S.MainSideBar className="main__sidebar sidebar">
      <S.SideBarPersonal className="sidebar__personal">
        <S.SideBarPersonalName className="sidebar__personal-name">
          {/* Sergey.Ivanov */}
        </S.SideBarPersonalName>
        <S.SideBarAvatar
          className="sidebar__avatar"
          src="img/icon/logup.svg"
          alt="login"
        ></S.SideBarAvatar>
      </S.SideBarPersonal>
      <S.SideBarBlock className="sidebar__block">
        <S.SideBarList className="sidebar__list">
          <S.SideBarItem className="sidebar__item">
            <S.SideBarLink className="sidebar__link">
              <NavLink to={`/category/1`}>
                <S.SideBarImg
                  className="sidebar__img"
                  src="img/playlist01.png"
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
                  src="img/playlist02.png"
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
                  src="img/playlist03.png"
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

export default Sidebar
