import React from "react";
import scss from "./PatientSheduleCalender.module.scss";
import Calender from "../../../../component/atoms/calender/Customcalender";
import { changeSoltValue, selectDate } from '../redux/actions/ActionPatientSlotPanel'
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";


export const PatientSheduleCalender = () => {
  const dispatch = useDispatch();
  const date = useSelector(state => state.ReducersDoctorSheduleCalender.doctorSheDate);
  const appoiment = useSelector(state => state.ReducersDoctorSheduleCalender.doctorsheAppoiment);

  for (let i = 0; i < date.length; i++) {
    if (moment().format("YYYY-MM-DD") === date[i]) {
      console.log(i);
      dispatch(changeSoltValue(appoiment[i]));
      i = date.length
    } 
  }
  const getListData = (value) => {
    let listData;
    for (let i = 0; i < date.length; i++) {
      switch (value.format("YYYY-MM-DD")) {
        case date[i]:
          listData = [{ value: appoiment[i], date: date[i] }];
          break;
        default:
      }
    }
    return listData || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <>
        {listData.map((data) => (
          <div key={data.date}>
            <span className={`${scss.calenderDateCellsValues}`}>{data.value}</span>
            <img src="https://img.icons8.com/ultraviolet/35/000000/treatment-plan.png" />
          </div>
        ))}
      </>
    );
  };
  const onSelect = (value) => {
    for (let i = 0; i < date.length; i++) {
      console.log(value.format("YYYY-MM-DD") === date[i]);
      if (value.format("YYYY-MM-DD") === date[i]) {
        console.log(i);
        dispatch(changeSoltValue(appoiment[i]));
        i = date.length
      }
      else {
        dispatch(changeSoltValue(0))
      }
    }
    dispatch(selectDate(value.format("YYYY-MM-DD")));
  };
  return (
    
    <div className={`${scss.calenderContainerOutBox}`}>
      <Calender
        dateCellRender={dateCellRender}
        onSelect={onSelect}
        disabledDate={(current) => {
          return current && current < moment().subtract(1, "days");
        }}    
      />
    </div>
  );
}

