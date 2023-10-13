import * as S from './styles/style'
const PreloaderSideBar = (props) => {
  return (
    <S.MainSideBar className="main__sidebar sidebar">
      <S.SideBarPersonal className="sidebar__personal">
        <S.SideBarPersonalName className="sidebar__personal-name">
          {/* Sergey.Ivanov */}
        </S.SideBarPersonalName>
        <S.SideBarAvatar className="sidebar__avatar"></S.SideBarAvatar>
      </S.SideBarPersonal>
      <S.SideBarBlock className="sidebar__block">
        <S.SideBarList className="sidebar__list">
          <S.SideBarItemPreloader className="sidebar__item sidebar__item-preloader"></S.SideBarItemPreloader>
          <S.SideBarItemPreloader className="sidebar__item sidebar__item-preloader"></S.SideBarItemPreloader>
          <S.SideBarItemPreloader className="sidebar__item sidebar__item-preloader"></S.SideBarItemPreloader>
        </S.SideBarList>
      </S.SideBarBlock>
    </S.MainSideBar>
  )
}

export { PreloaderSideBar }
