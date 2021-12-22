import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <Link to="/" className='btn btn-outline-primary'>Home</Link>
    </div>
  )
}

export default Error
