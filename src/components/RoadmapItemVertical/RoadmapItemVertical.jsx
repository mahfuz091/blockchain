import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import lineShapeBottom from './images/line-shape-bottom.png'
import lineShapetop from './images/line-shape-top.png'
import shapeLeft from './images/shape-left.png'
import shapeRight from './images/shape-right.png'

const RoadmapItem = ({ item, inverted, roadmapCount }) => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-white'>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{item.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary modal_btn' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div
                className={`${inverted ? 'roadmap-normal' : 'roadmap-inverted-vertical'
                    } roadmap-item-vertical${roadmapCount} roadmap-item-common-vertical`}
            >
                <div className='date-vertical'>{item.date}</div>
                <div className="circle-vertical"></div>
                <div className="description-box-vertical">
                    <h4>{item.title}</h4>
                    <img className='shape-left' src={shapeLeft} alt="" />
                    <img className='shape-right' src={shapeRight} alt="" />
                    {/* <p>{item.description}</p> */}
                    <Button variant='inline' onClick={handleShow}>
                        Read more
                    </Button>
                    <img className='line-shape-bottom' src={lineShapeBottom} alt="" />
                    <img className='line-shape-top' src={lineShapetop} alt="" />
                </div>
            </div>
        </>
    )
}

export default RoadmapItem
