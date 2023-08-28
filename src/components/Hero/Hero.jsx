import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import './hero.css'
import ParticlesWrapper from '../Particles/ParticlesWrapper'
import bannerShape from './banner-shape1.png'
import bannerShapeRight from './banner-shape2.png'

const Hero = () => {
  return (
    <section className='banner-section'>
      <ParticlesWrapper id='tsparticles' />
      <img className='banner-shape1' src={bannerShape} alt='' />
      <img className='banner-shape-right' src={bannerShapeRight} alt='' />
      <Container>
        <Row>
          <Col xl={12} data-aos='fade-down'>
            <div className='banner-content'>
              <Link to='/' className='button-border'>
                Explore roadmaps <FaArrowRightLong />
              </Link>
              <h1>
                Roadmaps Belong on <br /> the Blockchain
              </h1>
              <p>Welcome to product roadmaps in web3</p>
              <Link to='/' className='bordered-btn'>
                Get Started
              </Link>
              <Link to='/' className='primary-btn'>
                Explore
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
