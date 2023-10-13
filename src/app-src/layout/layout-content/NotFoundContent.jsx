import * as S from '../../components/styles/style'
import { Search } from '../../components/Search'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundContent = () => {
  const [isActiveButton, setActiveButton] = useState(false)
  const navigate = useNavigate()
  if (isActiveButton) {
    setTimeout(() => {
      navigate('/')
    }, 1500)
    setActiveButton((prev) => !prev)
  }

  const handleActive = () => {
    setActiveButton((prev) => !prev)
  }
  return (
    <S.MainCenterblock className="main__centerblock ">
      <S.SearchError>
        <Search />
        <S.SideBarAvatarError
          className="sidebar__avatar"
          src="img/icon/logup.svg"
          alt="login"
        ></S.SideBarAvatarError>
      </S.SearchError>
      <S.ErrorDiv className="error-div">
        <S.H1Error>404</S.H1Error>
        <S.H4Error>
          Страница не найдена
          <img src="img/icon/smile_crying.svg" />
        </S.H4Error>
        <S.PError>
          Возможно, она была удалена или перенесена на другой адрес
        </S.PError>
        <div>
          <S.ButtonErrorBack onClick={handleActive}>
            {' '}
            Вернуться на главную
          </S.ButtonErrorBack>
        </div>
      </S.ErrorDiv>
    </S.MainCenterblock>
  )
}

export { NotFoundContent }
