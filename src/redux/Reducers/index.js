import { combineReducers } from 'redux';
import ReducerPatientModal from './../../pages/channeling/shedulePatients/redux/reducers/ReducerPatientModal';
import ReducerInvoiceUpdateModel from './../../pages/channeling/invoice/redux/reducer/ReducerInvoiceUpdateModel';
import ReducerPatientSlotPanel from './../../pages/channeling/shedulePatients/redux/reducers/ReducerPatientSlotPanel'
import ReducersDoctorSheduleCalender from './../../pages/channeling/doctorSheduled/redux/reducers/ReducersDoctorSheduleCalender'

const allReducer = combineReducers({
    ReducerPatientModal,
    ReducerPatientSlotPanel,
    ReducersDoctorSheduleCalender,
    ReducerInvoiceUpdateModel
})

export default allReducer;