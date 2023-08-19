import { Skeleton } from './Skeleton'

const PreloaderMiddleContent = () => {
  return (
    // <div className="preloader-wrapper big active preload">
    //   <div className="spinner-layer spinner-blue-only">
    //     <div className="circle-clipper left">
    //       <div className="circle"></div>
    //     </div>
    //     <div className="gap-patch">
    //       <div className="circle"></div>
    //     </div>
    //     <div className="circle-clipper right">
    //       <div className="circle"></div>
    //     </div>
    //   </div>
    // </div>
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
        <Skeleton
          image="img/icon/sprite.svg#icon-note"
          trackName="                                         "
          subName=""
          autorName="                         "
          albumName="                         "
        />

        <Skeleton
          image="img/icon/sprite.svg#icon-note"
          trackName="                         "
          subName=""
          autorName="                         "
          albumName="                         "
        />

        <Skeleton
          image="img/icon/sprite.svg#icon-note"
          trackName="                         "
          subName=""
          autorName="                         "
          albumName="                         "
        />

        <Skeleton
          image="img/icon/sprite.svg#icon-note"
          trackName="                         "
          subName=""
          autorName="                         "
          albumName="                         "
        />

        <Skeleton
          image="img/icon/sprite.svg#icon-note"
          trackName="                         "
          subName=""
          autorName="                         "
          albumName="                         "
        />

        <Skeleton
          image="img/icon/sprite.svg#icon-note"
          trackName="                         "
          subName=""
          autorName="                         "
          albumName="                         "
        />

        <Skeleton
          image="img/icon/sprite.svg#icon-note"
          trackName="                         "
          subName=""
          autorName="                         "
          albumName="                         "
        />

        <Skeleton
          image="img/icon/sprite.svg#icon-note"
          trackName="                         "
          subName=""
          autorName="                         "
          albumName="                         "
        />

        <Skeleton
          image="img/icon/sprite.svg#icon-note"
          trackName="                         "
          subName=""
          autorName="                         "
          albumName="                         "
        />

        <Skeleton
          image="img/icon/sprite.svg#icon-note"
          trackName="                         "
          subName=""
          autorName="                         "
          albumName="                         "
        />
      </div>
    </div>
  )
}

export { PreloaderMiddleContent }
