import { useState } from "react";
import "./GanttStepper.css";
import { Col, Container, Row } from "react-bootstrap";

import { useForm } from "react-hook-form";
import ethereum from "./images/ethereum.png";
import add from "./images/plus.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import top_blue from "./images/top_blue.png";
import left_blue from "./images/left_blue.png";
import right_red from "./images/right_red.png";

const GanttStepper = () => {
  const [inputList, setInputList] = useState([
    { milestoneTitle: "", startDate: "", targetDate: "", description: "" },
  ]);
  const handleAdd = () => {
    setInputList([
      ...inputList,
      { milestoneTitle: "", startDate: "", targetDate: "", description: "" },
    ]);
  };
  const handleinputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className='bg_img'>
      <img className='top_blue' src={top_blue} alt='' />
      <img className='left_blue' src={left_blue} alt='' />
      <img className='right_red' src={right_red} alt='' />
      <div className='padding'>
        <div className='multistepsform container'>
          <ul id='progressbar'>
            <li className={step === 1 ? "active" : step > 1 ? "completed" : ""}>
              Enter your milestone details
            </li>
            <li className={step === 2 ? "active" : step > 2 ? "completed" : ""}>
              Connect Wallet
            </li>
            <li className={step === 3 ? "active" : step > 3 ? "completed" : ""}>
              Sign
            </li>
          </ul>
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <fieldset>
                <Container>
                  <Row>
                    <Col xl={6}>
                      <div className='form-group'>
                        <label className=''>Project Name</label>
                        <input
                          type='text'
                          placeholder='Name'
                          {...register("Name")}
                        />
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className='form-group'>
                        <label htmlFor=''>Roadmap Type</label>
                        <select {...register("gender")}>
                          <option value='gantt'>Gantt</option>
                          <option value='timeline'>Timeline</option>
                          <option value='mind map'>Mind Map</option>
                        </select>
                      </div>
                    </Col>
                    {inputList.map((x, i) => {
                      return (
                        <>
                          <Col xl={6}>
                            <div className='form-group'>
                              <label htmlFor=''>MIlestone Title</label>
                              <input
                                type='text'
                                name='milestoneTitle'
                                placeholder='Milestone '
                                onChange={(e) => handleinputChange(e, i)}
                                {...register("Title", { required: true })}
                              />
                            </div>
                          </Col>
                          <Col xl={6}>
                            <div className='form-group'>
                              <label htmlFor=''>Start Date</label>
                              <input
                                type='text'
                                name='startDate'
                                placeholder='-----'
                                onChange={(e) => handleinputChange(e, i)}
                                {...register("Start Date", { required: true })}
                              />
                            </div>
                          </Col>
                          <Col xl={6}>
                            <div className='form-group'>
                              <label htmlFor=''>Target Date</label>
                              <input
                                type='text'
                                name='targetDate'
                                placeholder='-----'
                                onChange={(e) => handleinputChange(e, i)}
                                {...register("Target Date", { required: true })}
                              />
                            </div>
                          </Col>
                          <Col xl={6}>
                            <div className='form-group'>
                              <label htmlFor=''>MIlestone Description</label>
                              <input
                                type='text'
                                name='description'
                                placeholder='Description'
                                onChange={(e) => handleinputChange(e, i)}
                                {...register("Description", { required: true })}
                              />
                            </div>
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </Container>

                <div className='d-flex justify-content-between align-items-center'>
                  <Link to='/roadmaptype'>
                    <button
                      type='button'
                      className='previous action-button'
                      onClick={handlePrevious}
                    >
                      <FiChevronLeft></FiChevronLeft> Previous
                    </button>
                  </Link>
                  <img
                    onClick={handleAdd}
                    className='cursor-pointer'
                    src={add}
                    alt=''
                  />
                  <button
                    type='button'
                    className='next action-button'
                    onClick={handleNext}
                  >
                    Next <FiChevronRight></FiChevronRight>
                  </button>
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <div className='ethereum'>
                  <div className='etherum-bg'>
                    <img src={ethereum} alt='' />
                    <h2>Sign in with Ethereum</h2>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <button
                    type='button'
                    className='previous action-button'
                    onClick={handlePrevious}
                  >
                    <FiChevronLeft></FiChevronLeft> Previous
                  </button>
                  <button
                    type='button'
                    className='next action-button'
                    onClick={handleNext}
                  >
                    Next <FiChevronRight></FiChevronRight>
                  </button>
                </div>
              </fieldset>
            )}

            {step === 3 && (
              <fieldset>
                <div className='ethereum-sign'>
                  <div className='etherum-bg'>
                    <img src={ethereum} alt='' />
                    <h2>Sign</h2>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <button
                    type='button'
                    className='previous action-button'
                    onClick={handlePrevious}
                  >
                    <FiChevronLeft></FiChevronLeft> Previous
                  </button>
                  <Link to='/roadmap'>
                    <button
                      type='button'
                      className='next action-button'
                      onClick={handleNext}
                    >
                      Done <FiChevronRight></FiChevronRight>
                    </button>
                  </Link>
                </div>
              </fieldset>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default GanttStepper;
