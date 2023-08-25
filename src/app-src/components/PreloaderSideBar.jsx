function PreloaderSideBar(props) {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item sidebar__item-preloader"></div>
          <div className="sidebar__item sidebar__item-preloader"></div>
          <div className="sidebar__item sidebar__item-preloader"></div>
        </div>
      </div>
    </div>
  )
}

export { PreloaderSideBar }
