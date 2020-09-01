import {
  CLOSE_EX_PATIENT_UP_MODAL,
  VIEW_EX_PATIENT_UP_MODAL,
  GET_EXISTING_PATIENT_RECORD,
  GET_NEW_PATIENT_FORM_RECORD,
  PATIENT_FORM_SUBMIT_FORM_ACTION_TRIGGER,
  PATIENT_STEPS_RENDERING
} from "./../type/existingPatientUpTypes";

export const viewExPatientUpModal = (updatePatientRecord) => (dispatch) => {
  dispatch({
    type: VIEW_EX_PATIENT_UP_MODAL,
    payload: { exPatientUpModalShow: true, updatePatientRecord },
  });
  console.log('hooooooo');
};

export const closeExPatientUpModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_EX_PATIENT_UP_MODAL,
    payload: { exPatientUpModalShow: false },
  });
};

export const sendExPatientRecord = (ExPatientRecord) => (dispatch) => {
  dispatch({
    type: GET_EXISTING_PATIENT_RECORD,
    payload: { ExPatientRecord },
  });
  console.log("send record");
  
};

export const sendAddNewPatientFormRecord = (AddNewPatientFormRecord) => (dispatch) => {
  dispatch({
    type: GET_NEW_PATIENT_FORM_RECORD,
    payload: {AddNewPatientFormRecord}
    
  });
  console.log("send add new records")
};

export const patientStepsRender = (current) => (dispatch) => {
  dispatch({
    type: PATIENT_STEPS_RENDERING,
    payload:{current}
  });  
  console.log("render value action tigger")
}
