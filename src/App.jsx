import logo from './logo.png'
import './App.css'

function Navigation() {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo"></img>
      </div>
      <div className="nav__burger burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Главное
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

// MiddleContent
function Search() {
  return (
    <div className="centerblock__search search">
      <svg className="search__svg">
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      ></input>
    </div>
  )
}

function Filter() {
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div className="filter__button button-author _btn-text">исполнителю</div>
      <div className="filter__button button-year _btn-text">году выпуска</div>
      <div className="filter__button button-genre _btn-text">жанру</div>
    </div>
  )
}

//Content
function ItemContent(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref={props.image}></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {props.trackName}{' '}
              <span className="track__title-span">{props.subName}</span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {props.autorName}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {props.albumName}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref={props.tackTimeIcon}></use>
          </svg>
          <span className="track__time-text">{props.timeTrack}</span>
        </div>
      </div>
    </div>
  )
}

function Content() {
  return (
    <div className="centerblock__content">
      <div className="content__title playlist-title">
        <div className="playlist-title__col col01">Трек</div>
        <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
        <div className="playlist-title__col col03">АЛЬБОМ</div>
        <div className="playlist-title__col col04">
          <svg className="playlist-title__svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>
      <div className="content__playlist playlist">
        <ItemContent
          image="img/icon/sprite.svg#icon-note"
          trackName="Guilt"
          subName=""
          autorName="Nero"
          albumName="Welcome Reality"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
          timeTrack="4:44"
        />

        <ItemContent
          image="img/icon/sprite.svg#icon-note"
          trackName="Elektro"
          subName=""
          autorName="Dynoro, Outwork, Mr. Gee"
          albumName="Elektro"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
          timeTrack="2:22"
        />

        <ItemContent
          image="img/icon/sprite.svg#icon-note"
          trackName="I’m Fire"
          subName=""
          autorName="Ali Bakgor"
          albumName="I’m Fire"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
          timeTrack="2:22"
        />

        <ItemContent
          image="img/icon/sprite.svg#icon-note"
          trackName="Non Stop"
          subName="(Remix)"
          autorName="Стоункат, Psychopath"
          albumName="Non Stop"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
          timeTrack="4:12"
        />

        <ItemContent
          image="img/icon/sprite.svg#icon-note"
          trackName="Run Run"
          subName="(feat. AR/CO)"
          autorName="Jaded, Will Clarke, AR/CO"
          albumName="Run Run"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
          timeTrack="2:54"
        />

        <ItemContent
          image="img/icon/sprite.svg#icon-note"
          trackName="Eyes on Fire"
          subName="(Zeds Dead Remix)"
          autorName="Blue Foundation, Zeds Dead"
          albumName="Eyes on Fire"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
          timeTrack="5:20"
        />

        <ItemContent
          image="img/icon/sprite.svg#icon-note"
          trackName="Mucho Bien"
          subName="(Hi Profile Remix)"
          autorName="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
          albumName="Mucho Bien"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
          timeTrack="3:41"
        />

        <ItemContent
          image="img/icon/sprite.svg#icon-note"
          trackName="Knives n Cherries"
          subName=""
          autorName="minthaze"
          albumName="Captivating"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
          timeTrack="1:48"
        />

        <ItemContent
          image="img/icon/sprite.svg#icon-note"
          trackName="How Deep Is Your Love"
          subName=""
          autorName="Calvin Harris, Disciples"
          albumName="How Deep Is Your Love"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
          timeTrack="3:32"
        />

        <ItemContent
          image="img/icon/sprite.svg#icon-note"
          trackName="Morena"
          subName=""
          autorName="Tom Boxer"
          albumName="Soundz Made in Romania"
          tackTimeIcon="img/icon/sprite.svg#icon-like"
          timeTrack="3:36"
        />
      </div>
    </div>
  )
}
//Content

function MiddleContent() {
  return (
    <div className="main__centerblock centerblock">
      <Search />
      <h2 className="centerblock__h2">Треки</h2>
      <Filter />
      <Content />
    </div>
  )
}
//MiddleContent

function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__avatar"></div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist01.png"
                alt="day's playlist"
              ></img>
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist02.png"
                alt="day's playlist"
              ></img>
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src="img/playlist03.png"
                alt="day's playlist"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

//PlayBar
function ActiveTrack(props) {
  return (
    <div className="player__track-play track-play">
      <div className="track-play__contain">
        <div className="track-play__image">
          <svg className="track-play__svg" alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className="track-play__author">
          <a className="track-play__author-link" href="http://">
            {props.ActiveTrackName}
          </a>
        </div>
        <div className="track-play__album">
          <a className="track-play__album-link" href="http://">
            {props.ActiveTrackAutorName}
          </a>
        </div>
      </div>

      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <svg className="track-play__like-svg" alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </svg>
        </div>
      </div>
    </div>
  )
}

function PlayerBar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <div className="player__btn-prev">
                <svg className="player__btn-prev-svg" alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div className="player__btn-play _btn">
                <svg className="player__btn-play-svg" alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </svg>
              </div>
              <div className="player__btn-next">
                <svg className="player__btn-next-svg" alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div className="player__btn-repeat _btn-icon">
                <svg className="player__btn-repeat-svg" alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div className="player__btn-shuffle _btn-icon">
                <svg className="player__btn-shuffle-svg" alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <ActiveTrack ActiveTrackName="Ты та..." ActiveTrackAutorName="Баста" />
          </div>
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <div className="volume__image">
                <svg className="volume__svg" alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
//PlayBar

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <MiddleContent />
          <Sidebar />
        </main>
        <PlayerBar />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default App
