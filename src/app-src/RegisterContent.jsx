import '../layout-login.css'
import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterContent = () => {
  const [isActiveSecondButton, setActiveSecondButton] = useState(false)
  const [isActiveFirstInput, setActiveFirstInput] = useState(false)
  const [isActiveSecondInput, setActiveSecondInput] = useState(false)
  const [isActiveThreeInput, setActiveThreeInput] = useState(false)

  const navigate = useNavigate()
  if (isActiveSecondButton) {
    setTimeout(() => {
      navigate('/login')
    }, 1500)
  }

  const handleActive = (event) => {
    const target = event.target
    switch (target.id) {
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
      case 'colbInp3':
        setActiveThreeInput(!isActiveThreeInput)

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
          <img src="img/logo.svg" alt="logo-skypro" />
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
          <div className="div-input-password-repeat">
            <input
              type="password"
              placeholder="Repeat password"
              id="colbInp3"
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
              onClick={handleActive}
            />
          </div>
        </div>
        <div className="div-buttons-login ">
          <div className="div-button-signup">
            <button
              id="colbBtn2"
              className="button-signup active register  btn "
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
export { RegisterContent }
