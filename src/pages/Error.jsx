import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
      <div className='container'>
          <img className='d-block my-3 mx-auto blue-bg img-fluid' src="https://media.istockphoto.com/id/467057387/photo/page-not-found.jpg?s=612x612&w=0&k=20&c=O9Rqww42f-OsVHVa19PmD0cMbYOQTmlsj6BNndsoO50=" alt="error 404" />
          <button className='d-block my-3 mx-auto blue-bg py-3'>
              <Link to= '/' className='text-decoration-none text-white'>Go Back To Homepage</Link>
          </button>
    </div>
  )
}

export default Error