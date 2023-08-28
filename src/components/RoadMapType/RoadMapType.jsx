import './RoadMapType.css'
import timeline from './timeline_img.png'
import gantt from './gantt_img.png'
import mindMap from './mind_img.png'
import bgBlueTop from './bg_blue_top.png'
import bgBlueRight from './bg_blue_right.png'
import bgRedLeft from './bg_red_left.png'
// import ParticlesWrapper from '../Particles/ParticlesWrapper'
import { Link } from 'react-router-dom'

const RoadMapType = () => {
  return (
    <section className='roadmap-section d-flex justify-content-center'>
      {/* <ParticlesWrapper id='tsparticles' /> */}
      <img className='roadmap_shap_top' src={bgBlueTop} alt='' />
      <img className='roadmap_shap_right' src={bgBlueRight} alt='' />
      <img className='roadmap_shap_left' src={bgRedLeft} alt='' />
      <div className='roadmap_bg'>
        <h2 className='text-center'>Select Roadmap Type</h2>
        <div className='container_img'>
          <div className='row justify-content-center'>
            <Link to='/timeline' className='timeline col-xl-3 roadmap-item'>
              <h2>Timeline</h2>
              <p>
                Designed For Roadmaps With Target Milestone Launch Dates
                (Week/Month/Quarter/Year)
              </p>
              <img className='pb-5' src={timeline} alt='' />
            </Link>
            <Link to='/gantt' className='gantt col-xl-3 roadmap-item'>
              <h2>Gantt</h2>
              <p>
                Designed For Roadmaps With Target Milestone Launch Dates
                (Week/Month/Quarter/Year)
              </p>
              <img className='pb-5' src={gantt} alt='' />
            </Link>
            <Link to='/mindmap' className='mind_map col-xl-3 roadmap-item'>
              <h2>Mind Map</h2>
              <p>
                Designed For Roadmaps With Target Milestone Launch Dates
                (Week/Month/Quarter/Year)
              </p>
              <img className='pb-5' src={mindMap} alt='' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMapType
