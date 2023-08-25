const Skeleton = (props) => {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music"></svg>
          </div>
          <div className="preloader">
            <a className="track__title-link preloader" href="http://">
              {props.trackName}{' '}
              <span className="track__title-span">{props.subName}</span>
            </a>
          </div>
        </div>
        <div className="preloader">
          <a className="track__author-link preloader" href="http://">
            {props.autorName}
          </a>
        </div>
        <div className="preloader">
          <a className="track__album-link preloader" href="http://">
            {props.albumName}
          </a>
        </div>
      </div>
    </div>
  )
}

// function Content() {
//   return (
//     <div className="centerblock__content">
//       <div className="content__title playlist-title">
//         <div className="playlist-title__col col01">Трек</div>
//         <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
//         <div className="playlist-title__col col03">АЛЬБОМ</div>
//         <div className="playlist-title__col col04">
//           <svg className="playlist-title__svg" alt="time">
//             <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
//           </svg>
//         </div>
//       </div>
//           <div className="content__playlist playlist">

//         <Skeleton
//           image="img/icon/sprite.svg#icon-note"
//           trackName="                         "
//           subName=""
//           autorName="                         "
//           albumName="                         "
//         />

//         <Skeleton
//           image="img/icon/sprite.svg#icon-note"
//           trackName="                         "
//           subName=""
//           autorName="                         "
//           albumName="                         "
//         />

//         <Skeleton
//           image="img/icon/sprite.svg#icon-note"
//           trackName="                         "
//           subName=""
//           autorName="                         "
//           albumName="                         "
//         />

//         <Skeleton
//           image="img/icon/sprite.svg#icon-note"
//           trackName="                         "
//           subName=""
//           autorName="                         "
//           albumName="                         "
//         />

//         <Skeleton
//           image="img/icon/sprite.svg#icon-note"
//           trackName="                         "
//           subName=""
//           autorName="                         "
//           albumName="                         "
//         />

//         <Skeleton
//           image="img/icon/sprite.svg#icon-note"
//           trackName="                         "
//           subName=""
//           autorName="                         "
//           albumName="                         "
//         />

//         <Skeleton
//           image="img/icon/sprite.svg#icon-note"
//           trackName="                         "
//           subName=""
//           autorName="                         "
//           albumName="                         "
//         />

//         <Skeleton
//           image="img/icon/sprite.svg#icon-note"
//           trackName="                         "
//           subName=""
//           autorName="                         "
//           albumName="                         "
//         />

//         <Skeleton
//           image="img/icon/sprite.svg#icon-note"
//           trackName="                         "
//           subName=""
//           autorName="                         "
//           albumName="                         "
//         />

//         <Skeleton
//           image="img/icon/sprite.svg#icon-note"
//           trackName="                         "
//           subName=""
//           autorName="                         "
//           albumName="                         "
//         />
//       </div>
//     </div>
//   )
// }

export { Skeleton }
