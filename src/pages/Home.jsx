import { motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio'
import state from '../store'
import{
headContainerAnimation,
headContentAnimation,
headTextAnimation,
slideAnimation
}
from '../config/motion';

import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header>
            <img src='./logo-black.png' alt='logo' className='w-10 h-10 object-contain'/>
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>It's <br className='xl:block hidden'/>Free.</h1>
            </motion.div>
            <motion.div>
              <p className='max-w-md'>A <strong>COMMUNITY</strong> driven Platform to create amazing 3d mockups.
               It's free, Consisting of Various 3d modals for you to select from.</p>
            </motion.div>
            <CustomButton
              type="filled"
              title="Create Mockup"
              handleClick={() => state.intro = false}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home