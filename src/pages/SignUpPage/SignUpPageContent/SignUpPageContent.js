import "./SignUpPageContent.scss"
import img from "../../../Assets/shopeesignupbanner.png"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../../../Redux/loginSlice"

function SignUpPageContent() {
  const dispatch = useDispatch()

  const [phoneNumber, setPhoneNumber] = useState("")
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleClickLogin = (e) => {
    dispatch(login())
  }

  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value
    setPhoneNumber(inputValue)
    setIsPhoneNumberValid(
      inputValue.length >= 0 &&
        inputValue.length <= 10 &&
        /^[0-9]+$/.test(inputValue)
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsFormSubmitted(true)
    if (isPhoneNumberValid) {
      setIsFormSubmitted(false)
      handleClickLogin()
      navigate("/")
    }
  }
  return (
    <>
      <div className='signuppage-contentcontainer'>
        <div className='signuppage-content'>
          <div className='signuppage-content-img'>
            <img src={img} alt='' />
          </div>
          <div className='signuppage-content-form'>
            <div className='signuppage-content-form-container'>
              <div className='signuppage-content-form-containerwrap'>
                <div className='signuppage-content-form-header'>
                  <h4>Sign Up</h4>
                </div>
                <div className='signuppage-content-form-footer'>
                  <div className='signuppage-content-form-footer-input'>
                    <div className='signuppage-content-form-footer-input-wrap'>
                      <input
                        type='text'
                        placeholder='Phone Number'
                        className={!isPhoneNumberValid ? "invalid-input" : ""}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                      />
                      {isFormSubmitted && !isPhoneNumberValid && (
                        <div className='error-message invalid'>
                          {phoneNumber.length > 10
                            ? "Phone number cannot exceed 10 characters"
                            : "Please enter a valid phone number"}
                        </div>
                      )}
                      <button type='submit' onClick={handleSubmit}>
                        Next
                      </button>
                    </div>
                    <div className='signuppage-content-form-footer-input-social'>
                      <button type='submit' className='btn-signup-social'>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{
                            marginRight: "5px",
                            color: "blue",
                            fontSize: "20px",
                          }}
                        />
                        Facebook
                      </button>
                      <button type='submit' className='btn-signup-social'>
                        <FontAwesomeIcon
                          icon={faGoogle}
                          style={{
                            marginRight: "5px",
                            color: "red",
                            fontSize: "20px",
                          }}
                        />
                        Google
                      </button>
                    </div>
                  </div>
                </div>
                <div className='signuppage-content-form-policy'>
                  <p className='signuppage-content-form-policy-text'>
                    By signing up, you agree to Shopee's{" "}
                    <Link>Terms of Service</Link> & <Link>Privacy Policy</Link>
                  </p>
                </div>
                <div className='signuppage-content-form-login'>
                  <p className='signuppage-content-form-login-text'>
                    Have an account?{" "}
                    <button onClick={handleClickLogin}>
                      <Link>Log In</Link>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPageContent
