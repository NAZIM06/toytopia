import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error } = useRouteError()
  return (
    
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      <img className='w-[400px]' src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png" alt="" />
        <div className='max-w-md text-center'>
         
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
  
  )
}

export default ErrorPage