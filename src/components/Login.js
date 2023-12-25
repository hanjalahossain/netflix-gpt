import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          className=""
          src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/10e283b9-f270-4088-a56f-8af41dd7727d/BD-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='backround'
        />
      </div>
      <form className='absolute p-12 w-4/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-60'>
        <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-600' />}
        <input type="text" placeholder="Email Adress" className='p-4 my-4 w-full bg-gray-600' />
        <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-600' />
        <button className='p-4 my-6 bg-red-700 w-full text-lg rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignForm}>{isSignInForm ? "New to Netflix Sign Up Now" : "Already a User? Sign in Now"}</p>

      </form>

    </div>
  )
}

export default Login