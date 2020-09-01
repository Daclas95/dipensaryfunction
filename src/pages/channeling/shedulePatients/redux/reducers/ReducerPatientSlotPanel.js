import{CHANGE_SLOT_VALUE,SELECT_DATE,QUICK_ADD_FORM_CLOSE,QUICK_ADD_FORM_OPEN}from '../type/TypesPatientsSlotPanel'
import moment from "moment";

const initialState = {
    slotCountValues:0,
    selectDate:moment().format("YYYY-MM-DD"),
    showvalue:false
  };

  export default function (state = initialState, action) {
    switch (action.type) {
      case CHANGE_SLOT_VALUE:          
        return {
          ...state,
          slotCountValues:action.payload.count      
        };
        case SELECT_DATE:
          return{
            ...state,
            selectDate:action.payload.date
          }
          case QUICK_ADD_FORM_OPEN:
          return{
            ...state,
            showvalue:true
          }
          case QUICK_ADD_FORM_CLOSE:
          return{
            ...state,
            showvalue:false
          }
      default:
        return state;
    }
  } 