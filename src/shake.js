import React from 'react'
import Base from './internal/base.js'
import styles from './css/micron-shake.min.css'

const Shake = p => <Base {...p} type="shake" styles={styles} />

export default Shake