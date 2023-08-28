import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from './logo.svg'
import { FaDiscord, FaTwitter, FaTelegram, FaYoutube } from 'react-icons/fa6'
import './footer.css'
import ParticlesWrapper from '../Particles/ParticlesWrapper'
import footer_bg from './footer-bg.png'

const Footer = () => {
  return (
    <footer className='footer-area'>
      <img className='footer_bg' src={footer_bg} alt="" />
      <Container>
        <Row>
          <Col xl={12}>
            <div className='footer-container'>
              <div className='main-footer'>
                <img src={FooterLogo} alt='' />
                <ul className='footer-social'>
                  <li>
                    <a href='' target='_blank'>
                      <FaTwitter />
                    </a>
                    <a href='' target='_blank'>
                      <FaDiscord />
                    </a>
                    <a href='' target='_blank'>
                      <FaTelegram />
                    </a>
                    <a href='' target='_blank'>
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='footer-bottom'>
          <Col lg={6}>
            <div className='copyright-text'>
              Copyright <span>©BlockRoads</span>. All rights reserved.
            </div>
          </Col>
          <Col lg={6}>
            <div className='footer-menu'>
              <ul>
                <li>
                  <a href=''>Home</a>
                </li>
                <li>
                  <a href=''>About</a>
                </li>
                <li>
                  <a href=''>Explore</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
