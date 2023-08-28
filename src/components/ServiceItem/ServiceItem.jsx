import React from 'react'
import { Col } from 'react-bootstrap'
import './service-item.css'

const ServiceItem = ({ image, title, description }) => {
  return (
    <Col xl={4} lg={6} data-aos='fade-up'>
      <div className='service-item wow fadeInUp'>
        <img src={image} alt='' />
        <div className='service-item-content'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  )
}

export default ServiceItem
