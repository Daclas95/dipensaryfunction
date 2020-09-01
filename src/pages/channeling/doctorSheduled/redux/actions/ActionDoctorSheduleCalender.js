import {GET_APPOIMENTS_FROM_DOC_SHE_CAL,GET_DATE_FROM_DOC_SHE_CAL} from '../type/TypesDoctorSheduleCalender'

export const getDateFromDocSheCal = date => dispatch =>{
dispatch({
    type:GET_DATE_FROM_DOC_SHE_CAL,
    payload:{date}
})
console.log("Action get date from doctor shedule calender");
}

export const getAppoimentFromDocSheCal = appoiment => dispatch =>{
    dispatch({
        type:GET_APPOIMENTS_FROM_DOC_SHE_CAL,
        payload:{appoiment}
    })
    console.log("Action get appoiment from doctor shedule calender");
    }