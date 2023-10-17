import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from '../app-src/components/styles/style'
import logo from '../img/logo.svg'
import { useDispatch } from 'react-redux'
import {
  usePostTokenMutation,
  usePostRegMutation,
} from '../store/service/serviceMusicApi'
import { userLogin } from '../store/slice/userSlice'
import { setAccessToken } from '../store/slice/tokenSlice'

const RegisterContent = () => {
  const [isActiveSecondButton, setActiveSecondButton] = useState(false)
  const [isActiveFirstInput, setActiveFirstInput] = useState(false)
  const [isActiveSecondInput, setActiveSecondInput] = useState(false)
  const [isActiveThreeInput, setActiveThreeInput] = useState(false)

  const [postReg, {}] = usePostRegMutation()
  const [postToken, {}] = usePostTokenMutation()

  const inpLoginRef = useRef('')
  const inpEmailRef = useRef('')
  const inpPasswordRef = useRef('')
  const inpRepeatPasswordRef = useRef('')

  const dispatch = useDispatch()

  const navigate = useNavigate()
  if (isActiveSecondButton) {
    setTimeout(() => {
      navigate('/', { replace: true })
    }, 1500)
  }

  const handleActive = async (event) => {
    const target = event.target

    switch (target.id) {
      case 'colbBtn2':
        if (inpEmailRef.current.value && inpLoginRef.current.value) {
          if (
            inpPasswordRef.current.value === inpRepeatPasswordRef.current.value
          ) {
            document.getElementById('colbBtn2').disabled = true
            await postReg({
              email: inpEmailRef.current.value,
              password: inpPasswordRef.current.value,
              username: inpLoginRef.current.value,
            })
              .unwrap()
              .then((response) => {
                dispatch(
                  userLogin({
                    email: response.email,
                    username: response.username,
                    password: response.password,
                  })
                )
                localStorage.setItem('user', response.username)
                localStorage.setItem('email', response.email)
                localStorage.setItem('id', response.id)

                postToken({
                  email: inpEmailRef.current.value,
                  password: inpPasswordRef.current.value,
                })
                  .unwrap()
                  .then((token) => {
                    localStorage.setItem('token', token.acceess)
                    localStorage.setItem('refreshToken', token.refresh)
                    dispatch(
                      setAccessToken({
                        token: token.acceess,
                        refreshToken: token.refresh,
                      })
                    )
                  })

                setActiveSecondButton((prev) => !prev)
                localStorage.setItem('user', response.username)
                if (!target.id == '') {
                  target.id = ''
                } else {
                  target.id = 'colbBtn2'
                }
              })
              .catch((warning) => {
                if (warning.status === 400) {
                  if (warning.data.username) {
                    alert(warning.data.username)
                  }
                  if (warning.data.email) {
                    alert(warning.data.email)
                  }
                } else {
                  console.log(warning)
                }
              })
          } else {
            alert('Пароли не совпадают')
          }
        } else {
          alert('Заполните форму')
        }
        break

      case 'colbInp1':
        setActiveFirstInput(!isActiveFirstInput)
        break
      case 'colbInp2':
        setActiveSecondInput(!isActiveSecondInput)

        break
      case 'colbInp3':
        setActiveThreeInput(!isActiveThreeInput)

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
        <S.DivInputsRegistration className="div-inputs-login">
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
                  ? 'rgba(39, 26, 88, 1)'
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
          <S.DivInputEmailandPassword className="div-input-password">
            <S.InputActive
              type="password"
              placeholder="Repeat password"
              id="colbInp3"
              className="active"
              style={{
                borderColor: isActiveSecondInput
                  ? 'rgba(39, 26, 88, 1)'
                  : 'rgba(88, 14, 162, 1)',
                outlineColor: isActiveSecondInput
                  ? 'rgba(39, 26, 88, 1)'
                  : 'rgba(88, 14, 162, 1)',
                boxShadow: 'none',
              }}
              ref={inpRepeatPasswordRef}
              onClick={handleActive}
            />
          </S.DivInputEmailandPassword>
          <S.DivInputEmailandPassword className="div-input-password-repeat">
            <S.InputActive
              type="text"
              placeholder="Username"
              id="colbInp4"
              className="active"
              style={{
                borderColor: isActiveThreeInput
                  ? 'rgba(39, 26, 88, 1)'
                  : 'rgba(88, 14, 162, 1)',
                outlineColor: isActiveThreeInput
                  ? 'rgba(39, 26, 88, 1)'
                  : 'rgba(88, 14, 162, 1)',
                boxShadow: 'none',
              }}
              ref={inpLoginRef}
              onClick={handleActive}
            />
          </S.DivInputEmailandPassword>
        </S.DivInputsRegistration>
        <S.DivButtonsRegistration className="div-buttons-login ">
          <S.DivButtonSignUpRegistration className="div-button-signup">
            <S.ButtonActiveRegistrationOnReg
              id="colbBtn2"
              className="button-signup active register  "
              style={{
                backgroundColor: isActiveSecondButton
                  ? 'rgba(208, 206, 206, 1)'
                  : '',
              }}
              onClick={handleActive}
            >
              Зарегистрироваться
            </S.ButtonActiveRegistrationOnReg>
          </S.DivButtonSignUpRegistration>
        </S.DivButtonsRegistration>
      </S.LayoutLogo>
    </S.WindowLogin>
  )
}
export { RegisterContent }
