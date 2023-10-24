import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as S from '../app-src/components/styles/style'
import logo from '../img/logo.svg'
import {
  usePostLoginMutation,
  usePostTokenMutation,
} from '../store/service/serviceMusicApi'
import { userLogin } from '../store/slice/userSlice'
import { setAccessToken } from '../store/slice/tokenSlice'
const LoginContent = () => {
  const [isActiveFirstButton, setActiveFirstButton] = useState(false)
  const [isActiveSecondButton, setActiveSecondButton] = useState(false)
  const [isActiveFirstInput, setActiveFirstInput] = useState(false)
  const [isActiveSecondInput, setActiveSecondInput] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inpEmailRef = useRef('')
  const inpPasswordRef = useRef('')

  const [postToken, {}] = usePostTokenMutation()
  const [postLogin, {}] = usePostLoginMutation()

  if (isActiveSecondButton) {
    setTimeout(() => {
      navigate('/register')
    }, 1500)
  } else if (isActiveFirstButton) {
    setTimeout(() => {
      navigate('/', { replace: true })
    }, 1500)
  }

  const handleActive = async (event) => {
    const target = event.target
    switch (target.id) {
      case 'colbBtn1':
        if (inpEmailRef.current.value && inpPasswordRef.current.value) {
          document.getElementById('colbBtn2').disabled = true
          await postToken({
            email: inpEmailRef.current.value,
            password: inpPasswordRef.current.value,
          })
            .unwrap()
            .then((token) => {
              localStorage.setItem('token', token.access)
              localStorage.setItem('refreshToken', token.refresh)

              postLogin({
                email: inpEmailRef.current.value,
                password: inpPasswordRef.current.value,
              })
                .unwrap()
                .then((response) => {
                  setActiveFirstButton((prev) => !prev)
                  localStorage.setItem('email', response.email)
                  localStorage.setItem('user', response.username)
                  localStorage.setItem('id', response.id)

                  dispatch(
                    userLogin({
                      email: response.email,
                      username: response.username,
                      id: response.id,
                    })
                  )
                  dispatch(
                    setAccessToken({
                      token: token.access,
                      refreshToken: token.refresh,
                    })
                  )
                  if (response.email && localStorage.getItem('user') !== null) {
                    navigate('/')
                  }
                  if (!target.id == '') {
                    target.id = ''
                  } else {
                    target.id = 'colbBtn1'
                  }
                })
                .catch((warning) => {
                  console.log(warning)
                  if (warning.status === 401) {
                    alert(
                      'Не найдено активной учетной записи с указанными данными'
                    )
                  }
                })
            })
        }

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
    document.getElementById('colbBtn2').disabled = false
  }

  return (
    <S.WindowLogin className="window-login">
      <S.LayoutLogo className="layout-logo">
        <S.DivLogo className="div-logo">
          <img src={logo} alt="logo-skypro" />
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
