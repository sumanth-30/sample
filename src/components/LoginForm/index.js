import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="sign-in-container">
        <div className="desktop-sign-in-card-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="mobile-signIn-container">
              <h1 className="signIn-heading">Sign In</h1>
              <div className="mobile-signIn-image-container">
                <img
                  src="https://res.cloudinary.com/dihboy1cn/image/upload/v1635330828/mobile_login_img.jpg"
                  alt="website login"
                  className="mobile-signIn-image"
                />
              </div>
            </div>
            <div className="desktop-signIn-container">
              <div className="desktop-sigIn-icon-container">
                <img
                  src="https://res.cloudinary.com/dihboy1cn/image/upload/v1635241468/Frame_274_lu6taz.svg"
                  alt="website logo"
                />
                <img
                  src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625742726/Features_sy5c0d.svg"
                  alt="icon-text"
                />
                <h1 className="signIn-heading">Sign In</h1>
              </div>
            </div>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="signIn-button">
              Sign in
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
        <div className="desktop-signIn-image-container">
          <img
            src="https://res.cloudinary.com/dihboy1cn/image/upload/v1632644265/Login_img.png"
            alt="website login"
            className="desktop-signIn-image"
          />
        </div>
      </div>
    )
  }
}

export default Login
