import React, { useState, useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { download } from '../assets';
import { donwloadCanvasToImage, reader } from '../config/helpers';
import {EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import {fadeAnimation, slideAnimation} from '../config/motion';

import { FilePicker, ModelPicker, ModelColorPicker, Tab } from '../components';

const Customize = () => {
  return (
    <div>Customize</div>
  )
}

export default Customize