import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from '../app-src/styles/style'
import { postLogin } from '../app-src/function/response'
const LoginContent = ({ setToken }) => {
  const [isActiveFirstButton, setActiveFirstButton] = useState(false)
  const [isActiveSecondButton, setActiveSecondButton] = useState(false)
  const [isActiveFirstInput, setActiveFirstInput] = useState(false)
  const [isActiveSecondInput, setActiveSecondInput] = useState(false)

  const navigate = useNavigate()

  const inpEmailRef = useRef('')
  const inpPasswordRef = useRef('')

  if (isActiveSecondButton) {
    setTimeout(() => {
      navigate('/register')
    }, 1500)
  } else if (isActiveFirstButton) {
    setTimeout(() => {
      navigate('/sky-music', { replace: true })
    }, 1500)
  }

  const handleActive = (event) => {
    const target = event.target
    switch (target.id) {
      case 'colbBtn1':
        postLogin(inpEmailRef.current.value, inpPasswordRef.current.value)
          .then((response) => {
            if (response.status === 200) {
              console.log(response.data)
              setActiveFirstButton((prev) => !prev)
              setToken(true)
              if (!target.id == '') {
                target.id = ''
              } else {
                target.id = 'colbBtn1'
              }
            }
          })
          .catch((warning) => {
            if (warning.response.status === 400) {
              alert('Введены неверные данные пользователя')
            } else {
              alert('Пользователя с таким email или паролем не найден')
            }
          })

        break
      case 'colbBtn2':
        setActiveSecondButton((prev) => !prev)
        if (!target.id == '') {
          target.id = ''
        } else {
          target.id = 'colbBtn2'
        }

        break
      case 'colbInp1':
        setActiveFirstInput(!isActiveFirstInput)

        break
      case 'colbInp2':
        setActiveSecondInput(!isActiveSecondInput)

        break

      default:
        if (!target.id) {
          console.warn(Error)
        }

        break
    }
  }

  return (
    <S.WindowLogin className="window-login">
      <S.LayoutLogo className="layout-logo">
        <S.DivLogo className="div-logo">
          <img src="/Music-SkyPro--react/img/logo.svg" alt="logo-skypro" />
        </S.DivLogo>
        <S.DivInputsLogin className="div-inputs-login">
          <S.DivInputEmailandPassword className="div-input-email">
            <S.InputActive
              type="email"
              placeholder="Email"
              id="colbInp1"
              className="active"
              style={{
                borderColor: isActiveFirstInput
                  ? 'rgba(39, 26, 88, 1)'
                  : 'rgba(88, 14, 162, 1)',
                outlineColor: isActiveFirstInput
                  ? 'rgba(39, 26, 88, 1)'
                  : 'rgba(88, 14, 162, 1)',
                boxShadow: 'none',
              }}
              ref={inpEmailRef}
              onClick={handleActive}
            />
          </S.DivInputEmailandPassword>
          <S.DivInputEmailandPassword className="div-input-password">
            <S.InputActive
              type="password"
              placeholder="Password"
              id="colbInp2"
              className="active"
              style={{
                borderColor: isActiveSecondInput
                  ? 'rgba(39, 26, 88, 1) '
                  : 'rgba(88, 14, 162, 1)',
                outlineColor: isActiveSecondInput
                  ? 'rgba(39, 26, 88, 1)'
                  : 'rgba(88, 14, 162, 1)',
                boxShadow: 'none',
              }}
              ref={inpPasswordRef}
              onClick={handleActive}
            />
          </S.DivInputEmailandPassword>
        </S.DivInputsLogin>
        <S.DivButtonsLogin className="div-buttons-login ">
          <S.DivButtonLogin className="div-button-login">
            <S.ButtonActiveLogin
              id="colbBtn1"
              className="button-login active  "
              style={{
                backgroundColor: isActiveFirstButton
                  ? 'rgba(39, 26, 88, 1)'
                  : '',
              }}
              onClick={handleActive}
            >
              Войти
            </S.ButtonActiveLogin>
          </S.DivButtonLogin>
          <S.DivButtonSignUp className="div-button-signup">
            <S.ButtonActiveRegistration
              id="colbBtn2"
              className="button-signup active  "
              style={{
                backgroundColor: isActiveSecondButton
                  ? 'rgba(208, 206, 206, 1)'
                  : '',
              }}
              onClick={handleActive}
            >
              Зарегистрироваться
            </S.ButtonActiveRegistration>
          </S.DivButtonSignUp>
        </S.DivButtonsLogin>
      </S.LayoutLogo>
    </S.WindowLogin>
  )
}
export { LoginContent }
