import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import config from './config'
import './particles.css'

const ParticlesWrapper = ({ id }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])
  return (
    <div className='particles-wrapper'>
      <Particles
        id={id}
        init={particlesInit}
        loaded={particlesLoaded}
        options={config}
      />
    </div>
  )
}

export default ParticlesWrapper
