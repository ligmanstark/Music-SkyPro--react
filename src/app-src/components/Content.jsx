import { ItemContent } from "./ItemContent"

function Content(props) {
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
          <ItemContent
            image="img/icon/sprite.svg#icon-note"
            trackName="Morena"
            subName=""
            autorName="Tom Boxer"
            albumName="Soundz Made in Romania"
            tackTimeIcon="img/icon/sprite.svg#icon-like"
            timeTrack="3:36"
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
  export {Content}