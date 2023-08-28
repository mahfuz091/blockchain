import { Button, Col, Container, Modal, Row, Toast } from 'react-bootstrap'
import items from './data'
import RoadmapItem from '../RoadmapItem/RoadmapItem'
import RoadmapItemVertical from '../RoadmapItemVertical/RoadmapItemVertical'
import './TimelineRoadmap.css'
import roadmapShapeLeft from './images/roadmap-shape1.png'
import roadmapShapeRight from './images/roadmap-shape2.png'
import roadmapShapeTop from './images/roadmap-shape3.png'
import { TbRectangle, TbRectangleVertical } from 'react-icons/tb'
import { BsTwitter } from 'react-icons/bs'
import { PiCopyThin } from 'react-icons/pi'
import SearchBox from '../SearchBox/SearchBox'
import { useState } from 'react'

const TimelineRoadmap = () => {
    const [roatet, setRoatet] = useState(true)
    const handleRoadmap = () => {
        setRoatet(!roatet)
    }
    const [smShow, setSmShow] = useState(false);


    const handleCopyText = () => {
        const modalBodyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = modalBodyText;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        Toast('copy')

        setSmShow(false);
    };

    return (
        <section className='roadmap-section'>
            <SearchBox></SearchBox>
            <img className='roadmap-shape-top' src={roadmapShapeTop} alt="" />
            <img className='roadmap-shape-left' src={roadmapShapeLeft} alt='' />
            <img className='roadmap-shape-right' src={roadmapShapeRight} alt='' />

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Embede Code
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Modal.Body>
            </Modal>

            <Container>
                <Row>
                    <Col>
                        <div className='timelineroadmap-box-wrap'>
                            <div className='timelineroadmap-title-wrap'>
                                <h3>Your Roadmap</h3>
                                <div className='roadmap-buttons'>
                                    <a href='#' onClick={handleRoadmap} className='primary-btn'>
                                        {
                                            roatet ?
                                            <TbRectangle></TbRectangle>
                                            :
                                            <TbRectangleVertical></TbRectangleVertical>
                                        }
                                    </a>
                                    <a href='https://twitter.com/intent/tweet?I&text=Some%20text' target='blank' className='primary-btn'>
                                        <BsTwitter></BsTwitter>
                                    </a>
                                    <a onClick={() => setSmShow(true)} href='#' className='primary-btn'>
                                        &#60;/&#62;
                                    </a>
                                    <a onClick={handleCopyText} href='#' className='primary-btn'>
                                        <PiCopyThin></PiCopyThin>
                                    </a>
                                </div>
                            </div>
                            {
                                roatet ?
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
                                    :
                                    <div className='roadmap-content-vertical'>
                                        {items.map((item, index) => (
                                            <RoadmapItemVertical
                                                inverted={index % 2 === 0}
                                                roadmapCount={index}
                                                item={item}
                                                key={index}
                                            />
                                        ))}
                                    </div>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TimelineRoadmap
