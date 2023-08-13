import '../layout-login.css'
import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginContent = () => {
  const [isActiveFirstButton, setActiveFirstButton] = useState(false)
  const [isActiveSecondButton, setActiveSecondButton] = useState(false)
  const [isActiveFirstInput, setActiveFirstInput] = useState(false)
  const [isActiveSecondInput, setActiveSecondInput] = useState(false)

  const navigate = useNavigate()

  if (isActiveSecondButton) {
    setTimeout(() => {
      navigate('/register')
    }, 1500)
  } else if (isActiveFirstButton) {
    setTimeout(() => {
      navigate('/sky-music')
    }, 1500)
  }

  const handleActive = (event) => {
    const target = event.target
    switch (target.id) {
      case 'colbBtn1':
        setActiveFirstButton(!isActiveFirstButton)
        if (!target.id == '') {
          target.id = ''
        } else {
          target.id = 'colbBtn1'
        }
        break
      case 'colbBtn2':
        setActiveSecondButton(!isActiveSecondButton)
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
    <div className="window-login">
      <div className="layout-logo">
        <div className="div-logo">
          <img src="/Music-SkyPro--react/img/logo.svg" alt="logo-skypro" />
        </div>
        <div className="div-inputs-login">
          <div className="div-input-email">
            <input
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
              onClick={handleActive}
            />
          </div>
          <div className="div-input-password">
            <input
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
              onClick={handleActive}
            />
          </div>
        </div>
        <div className="div-buttons-login ">
          <div className="div-button-login">
            <button
              id="colbBtn1"
              className="button-login active  btn"
              style={{
                backgroundColor: isActiveFirstButton
                  ? 'rgba(39, 26, 88, 1)'
                  : 'rgba(88, 14, 162, 1)',
              }}
              onClick={handleActive}
            >
              Войти
            </button>
          </div>
          <div className="div-button-signup">
            <button
              id="colbBtn2"
              className="button-signup active  btn "
              style={{
                backgroundColor: isActiveSecondButton
                  ? 'rgba(208, 206, 206, 1)'
                  : 'white',
              }}
              onClick={handleActive}
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export { LoginContent }
