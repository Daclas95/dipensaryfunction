import React from 'react'
import scss from './Slot.module.scss'

 function Slot(props) {
    return (
        <div className={`${scss.slotContainer}`}>
        {props.children}
        </div>
    )
}
export default Slot
