import * as S from '../app-src/styles/style'
import { Navigation } from '../app-src/layout/layout-content/Navigation'
import { PlayerBar } from '../app-src/layout/layout-content/PlayBar'
import { NotFoundContent } from '../app-src/layout/layout-content/NotFoundContent'
import { Search } from '../app-src/components/Search'

const NotFound = () => {
  return (
    <>
      <S.WrapperError className="wrapper">
        <S.ContainerError className="container">
          <S.MainError className="main">
            <Navigation />
            <NotFoundContent />
          </S.MainError>
          <PlayerBar />
          <footer className="footer"></footer>
        </S.ContainerError>
      </S.WrapperError>
    </>
  )
}

export { NotFound }
