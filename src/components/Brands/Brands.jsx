import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
import './brands.css'
import LogoOne from './images/1.png'
import LogoTwo from './images/2.png'
import LogoThree from './images/3.png'
import LogoFour from './images/4.png'
import LogoFive from './images/5.png'

const Brands = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <section className='brand-section'>
      <Container>
        <Row>
          <Col>
            <div className='section-title'>
              <h3>Trusted by the top Projects in web3</h3>
            </div>
            <Slider className='logo-slider' {...settings}>
              <div className='brand-item'>
                <img src={LogoOne} alt='' />
              </div>
              <div className='brand-item'>
                <img src={LogoTwo} alt='' />
              </div>
              <div className='brand-item'>
                <img src={LogoThree} alt='' />
              </div>
              <div className='brand-item'>
                <img src={LogoFour} alt='' />
              </div>
              <div className='brand-item'>
                <img src={LogoFive} alt='' />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Brands
