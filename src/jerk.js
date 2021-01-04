import React from 'react'
import Base, { makeHoc } from './internal/base.js'
import styles from './css/micron-jerk.min.css'

const Jerk = p => <Base {...p} type="jerk" styles={styles} />

export default Jerk

export const withJerk = makeHoc(Jerk)
