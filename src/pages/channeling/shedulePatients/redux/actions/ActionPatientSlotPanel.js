import{CHANGE_SLOT_VALUE,SELECT_DATE,QUICK_ADD_FORM_CLOSE,QUICK_ADD_FORM_OPEN}from '../type/TypesPatientsSlotPanel'


export const changeSoltValue = values => dispatch => {
    dispatch({
      type: CHANGE_SLOT_VALUE,
      payload:{count:values}
    });
    console.log("Action Change Slot Value");
  };

  export const selectDate = date => dispatch => {
    dispatch({
      type: SELECT_DATE,
      payload:{date}
    });
    console.log("Select date action");
  };
  export const openQuickAdd = () => dispatch => {
    dispatch({
      type: QUICK_ADD_FORM_OPEN,
    });
    console.log("oopen action");
  };
  export const closeQuickAdd = () => dispatch => {
    dispatch({
      type: QUICK_ADD_FORM_CLOSE,
    });
    console.log("close action");
  };

  
