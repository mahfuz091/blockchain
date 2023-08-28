import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ImageOne from './1.png'
import ImageTwo from './2.png'
import ImageThree from './3.png'
import MobileOne from './mobile-1.png'
import stepShape1 from './step-shape1.png'
import stepShape2 from './step-shape2.png'
import stepShape3 from './step-shape3.png'
import './how-works.css'

const HowItWorks = () => {
  return (
    <section className='how-it-works'>
      <img className='step-shape1' src={stepShape1} alt='' />
      <img className='step-shape2' src={stepShape2} alt='' />
      <img className='step-shape3' src={stepShape3} alt='' />
      <Container>
        <Row>
          <Col xl={12} data-aos='fade-up'>
            <div className='section-title'>
              <h2>How does it work?</h2>
              <p>Getting started is easy</p>
            </div>
          </Col>
        </Row>
        <Row className='gy-5'>
          <Col xl={12}>
            <div className='how-item how-item-one' data-aos='zoom-in'>
              <div className='how-item-one-inner'>
                <Link to='/' className='button-border'>
                  Step 1:
                </Link>
                <h3>
                  Enter your <br /> roadmap details
                </h3>
                <p>Break down project roadmaps into milestones.</p>
                <p>
                  Optionally set target launch dates (date, month, quarter,
                  etc.)
                </p>
              </div>
              <img className='desktop-image' src={ImageOne} alt='' />
            </div>
          </Col>
          <Col lg={6} data-aos='fade-right'>
            <div className='how-item how-item-two'>
              <div className='how-item-two-inner'>
                <img src={ImageTwo} alt='' />
                <div className='how-item-two-content'>
                  <Link to='/' className='button-border'>
                    Step 2:
                  </Link>
                  <h3>
                    Sign in with <br /> Ethereum
                  </h3>
                  <p>Connect with your favorite web3 wallet</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} data-aos='fade-left'>
            <div className='how-item how-item-three'>
              <div className='how-item-three-inner'>
                <div className='how-item-three-content'>
                  <Link to='/' className='button-border'>
                    Step 3:
                  </Link>
                  <h3>Publish your roadmap to the Blockchain</h3>
                  <p>Connect with your favorite web3 wallet</p>
                </div>
              </div>
              <img src={ImageThree} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HowItWorks
