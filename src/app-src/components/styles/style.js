import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #ffffff;
  }
  
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button{
  cursor: pointer;
}

ul li {
  list-style: none;
}

input {
    border: none;
    outline: none;
    transition: all 0.3s linear;

  }

  input[type=range] {
    position: relative;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    margin:0;
    padding: 0
  }
`

export const WindowLogin = styled.div`
  box-sizing: border-box;
  background-color: darkgray;
  min-width: 100vh;
  min-height: 100vh;
  display: grid;
  align-content: center;
`
export const LayoutLogo = styled.div`
  max-width: 366px;
  min-height: 440px;

  position: sticky;

  border: 4px white solid;
  background-color: white;
  border-radius: 8px;
  border-color: white;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;

  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`
export const DivLogo = styled.div`
  top: 43px;
  left: 5.8rem;
  position: absolute;
  box-sizing: border-box;
  max-width: 140px;
  max-height: 21px;
`
export const DivInputsLogin = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 278px;
  top: 106px;
  left: 2rem;
`
export const DivInputsRegistration = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 278px;
  top: 36px;
  left: 2rem;
`

export const DivInputEmailandPassword = styled.div`
  padding-top: 2rem;
`
export const DivButtonsLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  top: 300px;
  margin-top: 240px;
`
export const DivButtonsRegistration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  top: 300px;
  margin-top: 240px;
`

export const DivButtonLogin = styled.div`
  box-sizing: border-box;
  min-width: 198px;
`
export const InputActive = styled.input`
  &:hover {
    transition: all 0.3s linear; // <InputActive> when hovered
    outline-color: rgba(63, 0, 125, 1); // <InputActive> when hovered
    border-color: rgba(63, 0, 125, 1); // <InputActive> when hovered
  }
`
export const ButtonClassic = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 114px;
  padding-right: 114px;
  margin-left: -24px;
  transition: all 0.3s linear;
  background-color: rgba(88, 14, 162, 1);
  text-transform: uppercase;
  border-radius: 10px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`
export const DivButtonSignUp = styled.div`
  margin-left: -26px;
  background-color: white;
  color: black;
`
export const DivButtonSignUpRegistration = styled.div`
  margin-left: -26px;
  margin-top: 40px;
  background-color: white;
  color: black;
`

export const ButtonActiveLogin = styled(ButtonClassic)`
  &:hover {
    background-color: rgba(63, 0, 125, 1);
    transition: background 0.3s linear;
  }
  &:focus {
    background-color: rgba(88, 14, 162, 1);
  }
`
export const ButtonActiveRegistration = styled(ButtonClassic)`
  display: flex;
  align-items: center;
  text-align: center;
  padding-left: 59px;
  padding-right: 59px;
  margin-left: 0px;
  background-color: white;
  color: black;
  &:focus {
    background-color: white;
  }
  &:hover {
    background-color: rgba(217, 217, 217, 1);
    transition: background 0.3s linear;
  }
`
export const ButtonActiveRegistrationOnReg = styled(ButtonActiveRegistration)`
  margin-top: 80px;
`
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`
export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`
export const Main = styled.div`
  padding-bottom: 4rem;
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
`

export const MainNav = styled.div`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
  box-shadow: none;
`

export const MainCenterblock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
  min-height: 1300px;
`
export const MainSideBar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`
export const CenterblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`
export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
  margin-top: -13px;
  margin-left: 8px;
`
export const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`
export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 40px;
  margin-left: 12px;
`
export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`
export const Bar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`

export const BarContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`
export const BarPlayerBlock = styled.div`
  height: 73px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BarPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const PlayerControls = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
export const PlayerPrev = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 23px;
  cursor: pointer;
`
export const PlayerPrevSVG = styled.img`
  width: 15px;
  height: 14px;
`
export const PlayerButtonPlay = styled(PlayerPrev)`
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 23px;
`
export const ButtonPlaySVG = styled.img`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`
export const ButtonPauseSVG = styled.img`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`

export const PlayerButonNext = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 28px;
  fill: #a53939;
  cursor: pointer;
`
export const PlayerButtonNextSVG = styled.img`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`
export const PlayerButtonRepeat = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;
`
export const PlayerButtonRepeatSVG = styled.img`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const PlayerButtonShuffle = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const PlayerButtonShuffleSVG = styled.img`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const BarVolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`
export const VolumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`
export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeSVG = styled.img`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const VolumeProgress = styled.div`
  width: 109px;
`
export const VolumeProgressLine = styled.div`
  width: 109px;
  margin-bottom: 16px;
`
export const SideBarPersonal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`
export const SideBarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`

export const SideBarAvatar = styled.img`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
  cursor: pointer;
`
export const SideBarBlock = styled.div`
  height: 100%;
  padding: 240px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const SideBarList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const SideBarItem = styled.div`
  width: 250px;
  height: 150px;
`
export const SideBarLink = styled.a`
  width: 100%;
  height: 100%;
`
export const SideBarImg = styled.img`
  width: 100%;
  height: auto;
`
export const CenterblockContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContentTittle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const PlaylistTittle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`
export const PlaylistTittleOne = styled(PlaylistTittle)`
  width: 447px;
`

export const PlaylistTittleTwo = styled(PlaylistTittle)`
  width: 321px;
`
export const PlaylistTittleThree = styled(PlaylistTittle)`
  width: 245px;
`
export const PlaylistTittleFour = styled(PlaylistTittle)`
  width: 60px;
  text-align: end;
`

export const PlaylistTittleSVG = styled.img`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const ContentPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
export const PlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const PlaylistTrack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const TrackTittle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
`
export const TrackTittleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`
export const TrackTittleSVG = styled.img`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const TrackTittleLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`
export const TackAuthor = styled.div`
  width: 321px;
  display: flex;
  justify-content: flex-start;
`
export const TackAuthorLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`
export const TrackAlbum = styled.div`
  width: 245px;
`

export const TrackAlbumLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`
export const TrackTimeSVG = styled.img`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  cursor: pointer;
  stroke: #696969;
`
export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`
export const PlayerTrackPlay = styled.div`
  display: flex;
  flex-direction: row;
`
export const TrackPlayContain = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  align-items: center;
`

export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  grid-area: image;
`

export const TrackPlaySVG = styled.img`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const TrackPlayAuthor = styled.div`
  grid-area: author;
  min-width: 49px;
`
export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`
export const TrackPlayAlbum = styled.div`
  grid-area: album;
  min-width: 49px;
  min-width: 220px !important;
`
export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`
export const TrackPlayLikeSVG = styled.img`
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const TrackPlayLikeAndDis = styled.div`
  padding: 5px;
`
export const TrackPlayLikeDis = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 26%;
`

export const TrackPlayDislikeSVG = styled.img`
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`
export const NavMenu = styled.div`
  display: block;
  visibility: visible;
`
export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`
export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`

export const MenuLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`
export const CenterblockFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 51px;
  gap: 10px;
`
export const FilterTittle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`
export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  cursor: pointer;
`
export const FilterAuthorList = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
  &:hover {
    color: #6b3ebe;
    text-decoration: underline;
  }
`
export const WindowFiltered = styled.div`
  background-color: 313131;
  position: fixed;
  border: 2px darkgrey solid;
  border-radius: 8px;
  max-width: 260px;
  min-width: 120px;
  top: 286px;
  box-sizing: border-box;
  width: 260px;
  height: 150px;
  overflow-y: scroll;
  padding: 20px;
`
export const SideBarItemPreloader = styled(SideBarItem)`
  background-color: #313131;
`
export const CenterblockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SearchSVG = styled.img`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`
export const SearchText = styled.input`
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border-color: none !important;
  border-bottom: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
`
export const Preloader = styled.div`
  border: 11px #313131 solid;
  background-color: #313131;
  height: -9px;
  padding-right: 126px;
`

export const TrackTitleLinkPreloader = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: 11px #313131 solid;
  background-color: #313131;
  height: -9px;
  padding-right: 126px;
`

export const TrackTittleSpanPreloader = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const TrackAuthorLinkPreloader = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
  border: 11px #313131 solid;
  background-color: #313131;
  height: -9px;
  padding-right: 126px;
`
export const TrackAlbumLinkPreloader = styled(TrackAlbumLink)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`
export const Likelee = styled.use`
  cursor: pointer;
`
export const WrapperError = styled(Wrapper)`
  width: 100vw;
  height: 100vh;
  background-color: #181818;
`
export const ContainerError = styled(Container)``
export const MainError = styled(Main)`
  flex-direction: column;
`

export const SearchError = styled.div`
  margin-top: -161px;
  margin-left: 200px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 117px;
`
export const SideBarAvatarError = styled(SideBarAvatar)``

export const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
export const ButtonErrorBack = styled(ButtonClassic)`
  padding-left: 80px;
  padding-right: 80px;
  margin-left: 4px;
  &:hover {
    background-color: rgba(63, 0, 125, 1);
    transition: background 0.3s linear;
  }
`
export const H1Error = styled.h1`
  font-size: 168px;
`
export const H4Error = styled.h4`
  font-size: 52px;
`

export const PError = styled.p`
  color: #4e4e4e;
  font-size: 24px;
  width: 431px;
  text-align: center;
`
export const AudioStyle = styled.audio`
  display: none;
`

export const StyledProgressInput = styled.input`


bottom: -6px; !important
box-shadow: none !important;

height: 7px;

margin:0; !important

--progress-height: 16px;
--progress-color: #b672ff; 
--progress-color: ${(props) => props.$color ?? '#b672ff'};

--progress-bg-color: #2e2e2e;  

margin: 0 !important
width: 100%;!important
height: var(--progress-height); 
-webkit-appearance: none; 
cursor: pointer;!important
background: transparent; 
position: relative;
overflow: hidden;

&::-webkit-slider-runnable-track {
  position: relative;
  height: var(--progress-height);
  background: var(--progress-bg-color);
}
&::-webkit-slider-thumb {
  --thumb-height: 1px;
  --thumb-width: 1px;
  position: relative;
  -webkit-appearance: none;
  width: var(--thumb-width, var(--thumb-height));
  box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax var(--progress-color);
}

&::-webkit-slider-runnable-track {
  background: var(--progress-bg-color);
}

/* FF */
&::-moz-range-track {
  width: 100%;
  height: var(--progress-height);
  background: var(--progress-bg-color);
  border: none;
  border-radius: 0px;
}
&::-moz-range-thumb {
  border: none;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: transparent;
}
&::-moz-range-progress {
  background-color: var(--progress-color);
  height: var(--progress-height);
}

`
export const VolumeBar = styled(StyledProgressInput)`
  margin-bottom: 22px;
`
