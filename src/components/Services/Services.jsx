import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ImageOne from './images/1.svg'
import ImageTwo from './images/2.svg'
import ImageThree from './images/3.svg'
import ServiceItem from '../ServiceItem/ServiceItem'
import { FaArrowRightLong } from 'react-icons/fa6'
import serviceShapeLeft from './images/service-shape-left.png'
import serviceShapeRight from './images/service-shape-right.png'

const Services = () => {
  return (
    <section className='service-section'>
      <img className='service-shape-left' src={serviceShapeLeft} alt='' />
      <img className='service-shape-right' src={serviceShapeRight} alt='' />
      <Container>
        <Row>
          <Col xl={12} data-aos='fade-up'>
            <div className='section-title'>
              <Link className='button-border'>
                Our Services <FaArrowRightLong />
              </Link>
              <h2>Empower your web3 vision</h2>
              <p>
                Harness the power of blockchain technology to share your project
                roadmaps, ensuring <br /> absolute transparency and building
                unwavering trust.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <ServiceItem
            image={ImageOne}
            title='Build trust'
            description='Roadmaps can and should change, but transparency around those changes builds trust'
          />
          <ServiceItem
            image={ImageTwo}
            title='Share your vision'
            description='Whether you’re solving financial 
            inequality, or putting out good vibes, share your vision withyour community'
          />
          <ServiceItem
            image={ImageThree}
            title='Proof of Completion'
            description='Demonstrate proof of completion when milestones are shipped'
          />
        </Row>
      </Container>
    </section>
  )
}

export default Services
