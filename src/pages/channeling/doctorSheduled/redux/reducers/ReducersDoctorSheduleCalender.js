import {
  GET_APPOIMENTS_FROM_DOC_SHE_CAL,
  GET_DATE_FROM_DOC_SHE_CAL,
} from "../type/TypesDoctorSheduleCalender";

const initialState = {
  doctorSheDate: ["2020-08-28", "2020-08-29"],
  doctorsheAppoiment: [5, 10],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_DATE_FROM_DOC_SHE_CAL:
      return {
        ...state,
        doctorSheDate: action.payload.date,
      };
    case GET_APPOIMENTS_FROM_DOC_SHE_CAL:
      return {
        ...state,
        doctorsheAppoiment: action.payload.appoiment,
      };
    default:
      return state;
  }
}
