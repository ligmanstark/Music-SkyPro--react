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

export default MiddleContent