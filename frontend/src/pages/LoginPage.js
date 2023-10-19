import React from 'react'

const LoginPage = () => {
  return (
    <div className='LoginPage'>
        <div className="tile">
            <h2>Login Here</h2>
            <form>
                <input type="email" />
                <input type="password" />
                <button type="submit">
                    Login
                </button>
                <p> Don't have an account <a href="#"> Sign up here</a> </p>
            </form>
        </div>
    </div>
  )
}

export default LoginPage