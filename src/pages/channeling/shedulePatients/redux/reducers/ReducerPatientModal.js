import {
  CLOSE_EX_PATIENT_UP_MODAL,
  VIEW_EX_PATIENT_UP_MODAL,
  GET_EXISTING_PATIENT_RECORD,
  GET_NEW_PATIENT_FORM_RECORD,
  PATIENT_STEPS_RENDERING,  
} from "./../type/existingPatientUpTypes";

const initialState = {
  exPatientUpModalShow: "",
  ExPatientRecord: [],
  AddNewPatientFormRecord: [],
  actionTriggerValue: false,
  current:0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CLOSE_EX_PATIENT_UP_MODAL:
      return {
        ...state,
        exPatientUpModalShow: action.payload.exPatientUpModalShow,
      };
    case VIEW_EX_PATIENT_UP_MODAL:
      return {
        ...state,
        exPatientUpModalShow: action.payload.exPatientUpModalShow,
      };
    case GET_EXISTING_PATIENT_RECORD:
      return {
        ...state,
        ExPatientRecord: action.payload.ExPatientRecord,
      };
    case GET_NEW_PATIENT_FORM_RECORD:
      return {
        ...state,
        AddNewPatientFormRecord: action.payload.AddNewPatientFormRecord,
      };
      case PATIENT_STEPS_RENDERING:
      return {
        ...state,
        current:action.payload.current
      };
    default:
      return state;
  }
}
