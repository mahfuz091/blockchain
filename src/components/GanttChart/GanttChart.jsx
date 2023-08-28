import { Col, Container, Modal, Row } from "react-bootstrap";
import { BsTwitter } from "react-icons/bs";
import { PiCopyThin } from "react-icons/pi";
import { TbRectangleVertical } from "react-icons/tb";
import './GanttChart.css'
import chart1 from './images/chart_1.png'
import chart2 from './images/chart_2.png'
import chart3 from './images/chart_3.png'
import chart4 from './images/chart_4.png'
import chart5 from './images/chart_5.png'
import chart6 from './images/chart_6.png'
import { useState } from "react";

const GanttChart = () => {
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
        <div className="ganttChart">
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
                        <div className='ganttChart-box-wrap'>
                            <div className='ganttChart-title-wrap'>
                                <h3>Your Roadmap</h3>
                                <div className='roadmap-buttons'>
                                    <a href='https://twitter.com/intent/tweet?I&text=Some%20text' target="balnk" className='primary-btn'>
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

                            <div className="chart_body">
                                <div className="d-flex chart_top">
                                    <p>Apr, 2023</p>
                                    <p>May, 2023</p>
                                    <p>Jun, 2023</p>
                                    <p>Jul, 2023</p>
                                    <p>Aug, 2023</p>
                                </div>
                                <Row>
                                    <Col className="chart_leftSide">
                                        <h6>Testnet launch</h6>
                                        <h6>Beta testing</h6>
                                        <h6>Mainnet launch</h6>
                                        <h6>Smart contract audit</h6>
                                        <h6>Public launch</h6>
                                        <h6>Community rewards round 1</h6>
                                    </Col>
                                    <Col className="chart_RightSide">
                                        <img className="chart_one" src={chart1} alt="" />
                                        <img className="chart_two" src={chart2} alt="" />
                                        <img className="chart_three" src={chart3} alt="" />
                                        <img className="chart_four" src={chart4} alt="" />
                                        <img className="chart_five" src={chart5} alt="" />
                                        <img className="chart_six" src={chart6} alt="" />
                                    </Col>
                                </Row>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GanttChart;