import * as S from '../app-src/components/styles/style'
import { Navigation } from '../app-src/layout/layout-content/Navigation'
import { PlayerBar } from '../app-src/layout/layout-content/PlayBar'
import { NotFoundContent } from '../app-src/layout/layout-content/NotFoundContent'

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
