import { Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import './contact.css'
// import contactShape from './contact-shape.png'

const Contact = () => {
  return (
    <section className='contact-section'>
      {/* <img className='contact-shape' src={contactShape} alt="" /> */}
      <Container>
        <Col xl={12}>
          <div className='contact-cta' data-aos='fade-up'>
            <Link className='button-border' to='/'>
              Contact us <FaArrowRightLong />
            </Link>
            <h2>
              Ready to a make it <br /> web3 official?
            </h2>
            <p>
              Join us on our mission to reinforce trust and enhance transparency
              in the <br /> decentralized world. Secure your project's journey
              on the blockchain today.
            </p>
            <Link className='primary-btn' to='/'>
              Get Started
            </Link>
          </div>
        </Col>
      </Container>
    </section>
  )
}

export default Contact
