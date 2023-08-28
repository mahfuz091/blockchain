import { Col, Container, Modal, Row, Toast } from "react-bootstrap"
import { BsTwitter } from "react-icons/bs"
import { PiCopyThin } from "react-icons/pi"
import { TbRectangleVertical } from "react-icons/tb"
import testnet from './images/testnet.png'
import smartContact from './images/smart_contract.png'
import launch from './images/launch.png'
import conncection from './images/connections.png'
import mainnet from './images/mainnet.png'
import tree from './images/tree.png'
import betaTesting from './images/beta_testing.png'
import bgLeft from './images/bg_left.png'
import bgRight from './images/bg_red_left.png'
import bgRadient from './images/bg_radient.png'
import bgTop from './images/bg_top.png'

import './MindMap.css'
import { useState } from "react"

const MindMap = () => {
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
        <section className="mindmap-section">
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
            <div className="mindMap_backgroundImage">
                {/* <img className="bg_blue_left" src={bgLeft} alt="" /> */}
                <img className="bg_blue_right" src={bgRight} alt="" />
                <img className="bg_Radient" src={bgRadient} alt="" />
                <Container>
                    <Row>
                        <Col>
                            <div className='roadmap-box-wrap'>
                                <div className='roadmap-title-wrap'>
                                    <h3>Your Roadmap</h3>
                                    <div className='roadmap-buttons'>
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

                                <div className="d-flex justify-content-center gaph container">
                                    <div>
                                        <div className="image-container">
                                            <img className="" src={testnet} alt="" />
                                        </div>
                                        <div className="image-container">
                                            <img src={betaTesting} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="image-container">
                                            <img className="" src={mainnet} alt="" />
                                        </div>
                                        <div className="image-container">
                                            <img src={smartContact} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="image-container">
                                            <img className="" src={launch} alt="" />
                                        </div>
                                        <div className="image-container">
                                            <img className="" src={tree} alt="" />
                                        </div>
                                        <div className="image-container">
                                            <img className="" src={conncection} alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default MindMap
