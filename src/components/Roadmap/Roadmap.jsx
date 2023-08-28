import { Col, Container, Row } from 'react-bootstrap'
import items from './data'
import RoadmapItem from '../RoadmapItem/RoadmapItem'
import './roadmap.css'
import sdk from './images/sdk.svg'
import network from './images/network.svg'
import projects from './images/projects.svg'
import box from './images/box.svg'
import roadmapShapeLeft from './images/roadmap-shape1.png'

const Roadmap = () => {
  return (
    <section className='roadmap-section'>
      <img className='roadmap-shape-left' src={roadmapShapeLeft} alt='' />
      <Container>
        <Row>
          <Col data-aos='zoom-in'>
            <div className='roadmap-box-wrap'>
              <div className='roadmap-title-wrap'>
                <h3>Your Roadmap</h3>
                <div className='roadmap-buttons'>
                  <a href='#' className='primary-btn'>
                    <img src={sdk} alt='' /> SubQuery SDK
                  </a>
                  <a href='#' className='primary-btn'>
                    <img src={network} alt='' /> SubQuery Network
                  </a>
                  <a href='#' className='primary-btn'>
                    <img src={projects} alt='' /> SubQuery Projects
                  </a>
                  <a href='#' className='primary-btn'>
                    <img src={box} alt='' /> Other
                  </a>
                </div>
              </div>
              <div className='roadmap-content'>
                {items.map((item, index) => (
                  <RoadmapItem
                    inverted={index % 2 === 0}
                    roadmapCount={index}
                    item={item}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Roadmap
