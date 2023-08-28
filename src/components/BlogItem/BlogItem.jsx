import { Link } from 'react-router-dom'
import { FaAngleRight, FaRegClock } from 'react-icons/fa6'
import './blog-item.css'

const BlogItem = ({ image, title, description, date }) => {
  return (
    <div className='blog-item-wrapper'>
      <div className='blog-item'>
        <div className='blog-item-image'>
          <img src={image} alt='' />
        </div>
        <div className='blog-content'>
          <p className='date'>
            <FaRegClock /> {date}
          </p>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link to='/'>
            Learn More <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
