import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import BlogItem from '../BlogItem/BlogItem'
import ImageOne from './images/1.png'
import ImageTwo from './images/2.png'
import ImageThree from './images/3.png'
import blogShape from './images/blog-shape.png'

const Blog = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className='blog-section'>
      <img className='blog-shape' src={blogShape} alt='' />
      <Container>
        <Row>
          <Col xl={12}>
            <div className='section-title'>
              <Link to='/' className='button-border'>
                Blog <FaArrowRightLong />
              </Link>
              <h2>Our Latest News</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Slider className='blog-slider' {...settings}>
            <BlogItem
              image={ImageOne}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
            <BlogItem
              image={ImageTwo}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
            <BlogItem
              image={ImageThree}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
            <BlogItem
              image={ImageOne}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
            <BlogItem
              image={ImageTwo}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
            <BlogItem
              image={ImageThree}
              title='Individual coin ownership records are stored in a digital'
              description='established fact that a reader will distracted by the readable content of a page'
              date='April 6, 2021'
            />
          </Slider>
        </Row>
      </Container>
    </section>
  )
}

export default Blog
