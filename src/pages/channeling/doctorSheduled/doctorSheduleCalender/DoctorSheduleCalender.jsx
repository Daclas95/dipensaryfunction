import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calender from "../../../../component/atoms/calender/Customcalender";
import moment from "moment";
import { Form, Row, Col } from "antd";
import scss from "./DoctorSheduleCalender.module.scss";
import Modal from "../../../../component/organisms/modalForm/CustomModalForm";
import Button from "../../../../component/atoms/button/Custombutton";
import InputNumber from "../../../../component/atoms/inputNumber/CustomInputNumber";
import { selectDate, changeSoltValue } from '../../shedulePatients/redux/actions/ActionPatientSlotPanel'
import { getAppoimentFromDocSheCal, getDateFromDocSheCal } from '../redux/actions/ActionDoctorSheduleCalender'
import { closeQuickAdd, openQuickAdd } from '../../shedulePatients/redux/actions/ActionPatientSlotPanel'



export const DoctorSheduleCalender = () => {
  const [showButton, setShowbutton] = useState(false);
  const storeDates = useSelector(state => state.ReducersDoctorSheduleCalender.doctorSheDate);
  const storeAppoiments = useSelector(state => state.ReducersDoctorSheduleCalender.doctorsheAppoiment);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [selectedValue, setSelectedValue] = useState(moment());
  const visible = useSelector(state => state.ReducerPatientSlotPanel.showvalue)
  const [visible2, setVisible2] = useState(false)
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [appoiment, setAppoiment] = useState(storeAppoiments);
  const [date, setDate] = useState(storeDates);
  const dispatch = useDispatch();
  const sendDateToStore = () => dispatch(getDateFromDocSheCal(date))
  const sendAppoimentToStore = () => dispatch(getAppoimentFromDocSheCal(appoiment))
  const [checkBoxSelectedDates, setCheckBoxSelectedDates] = useState([])
  const selectdate = useSelector(state => state.ReducerPatientSlotPanel.selectDate)
  let values = ""
  let values2 = ""

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
      required: "${label} is required!",
    },
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const onSelect = (value) => {
    console.log("work");
    setCheckBoxSelectedDates([])
    setSelectedValue(value);
    if (value.format("YYYY-MM") === selectedValue.format("YYYY-MM")) {
      dispatch(openQuickAdd());
      dispatch(selectDate(value.format("YYYY-MM-DD")));
    }
  };

  const handleSubmit = async () => {
    try {
      values = await form.validateFields();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        dispatch(closeQuickAdd())
      }, 800);
      setAppoiment([...appoiment, values.count]);
      setDate([...date, selectdate]);
      dispatch(changeSoltValue(values.count));
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  const handleCancel = () => {
    dispatch(closeQuickAdd())
  };

  const handleSubmit2 = async () => {
    try {
      values2 = await form2.validateFields();
      setLoading2(true);
      setTimeout(() => {
        setLoading2(false);
        setVisible2(false)
      }, 800);
      for (let i = 0; i < checkBoxSelectedDates.length; i++) {
        console.log(checkBoxSelectedDates[i]);
        setDate([...date, checkBoxSelectedDates[i]]);
        console.log("local date", date);
        setAppoiment([...appoiment, values2.count2]);
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const handleCancel2 = () => {
    setVisible2(false)
  };

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
    if (checkBoxSelectedDates.length == 0) {
      const listData = getListData(value);
      return (
        <>
          {listData.map((data) => (
            <div key={data.date}>
              <span className={`${scss.calenderDateCellsValues}`}>{data.value}</span>
              <img src="https://img.icons8.com/ultraviolet/25/000000/treatment-plan.png" />
            </div>
          ))
          }
        </>
      );
    }
    else {
      const listData = getListData(value);
      const selectchangecell = setdatestochange(value)
      return (
        <>
          {selectchangecell.map((data) => (
            <div key={data.date}>
              <img
                className={`${scss.calenderDateCellsPin}`}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAACHUlEQVRIie3TvWtTURgG8Oc992gkbWqG2LSQDrEpERdBp1SwCbYFES5mkBYEcVHETbCLoH9CnUQUxUFQHAoaCjoolyJoFgUnE6g0sfhBa9qG1JY0Oed1SDUx6U3SRDr1Hc99zvs7XxfYrZ0sPhs4wGMHH/K5QJddRrStGPoqgAtQ6qUd1Day8CufVqwZTCE7iNoBPg17LhHTbYcUsq/LCUMQQHgPURyhx1+W/+Ra2okVhkwMe+4Q010AMl/UmM+uobQjHIOSk5V5uV0gcdzjYoOegHG6cjyvNGfWCte6Ox0eKHFrWwgDBDPYSbFkLjHq9bPiaQIfrs4R4bp3+uvkVj3q3gmP+02UjqQHwNu5lfWOjWLxSG0XfnTo1c/zdn1s74TNoAtM9zcBABj079/XvdcQ81XRd8Ye98V6i7VFKJbMQetREGfKg9TrdztlGeJ0ARQdeDGbr4c0fMI8FjjKAq9Ja3d5kL/PZdezhQ09HrQWPjbq0fAJP7/yYPGNeXO14Ojg8tKo1+92LjUDNESezcz0QUlr2dvvi5+a+AEhVio+D7IZdLWFTFlxH5S0APQDSGd6BgahcRLAUilB3xBLrraMTFlxn8HqL8AkwtFIKEVPZz8AYgTAIlhfJoC3ml9dNRdfAQQApJhEJBoJpSozbAZdFEvmmgFqkGaAVuqf45KsbmwCn2EUT/wPoAbRgCTgniIjfGZoqPrP3q2dqd+VbtHEIAYPnAAAAABJRU5ErkJggg==" />            </div>
          ))
          }
          {listData.map((data) => (
            <div key={data.date}>
              <span className={`${scss.calenderDateCellsValues}`}>{data.value}</span>
              <img
                src="https://img.icons8.com/ultraviolet/25/000000/treatment-plan.png" />
            </div>
          ))
          }
        </>
      )
    }
  }
  const setdatestochange = (value) => {
    let selectchangecell;
    for (let i = 0; i < checkBoxSelectedDates.length; i++) {
      switch (value.format("YYYY-MM-DD")) {
        case checkBoxSelectedDates[i]:
          selectchangecell = [{ date: checkBoxSelectedDates[i] }];
          break;
        default:
      }
    }
    return selectchangecell || [];
  };

  const getSelectedDatesFromCusCalender = (dates) => {
    console.log("from cusCalender check box Dates :", dates);
    setCheckBoxSelectedDates(dates)
    if (dates.length > 0) {
      setShowbutton(true)
    }
    else {
      setShowbutton(false)
    }
    console.log(showButton);
  }

  return (
    <div className={`${scss.calenderContainerOutBox}`}>
      {
        sendDateToStore(date),
        sendAppoimentToStore(appoiment)
      }
      {
        console.log("store dates", storeDates)
      }
      <Calender
        onSelect={onSelect}
        dateCellRender={dateCellRender}
        Checkboxshow={true}
        disabledDate={(current) => {
          return current && current < moment().subtract(1, "days");
        }}
        getSelectedDatesFromCusCalender={getSelectedDatesFromCusCalender}
        content3={
          showButton ?
            <Button
              marginTop={12}
              text="Add More"
              onClick={() => {
                setVisible2(true)
              }}
            /> : null
        }
      />
      <Modal
        visible={visible}
        onCancel={handleCancel}
        width="55%"
        footer={
          null
        }
      >
        <Row
          className={`${scss.addAppoimentsModalFormRow}`}
        >
          <Col span={12}>
            <div
              className={`${scss.addAppoimentsModalFormDateContainer}`}>
              <div className={`${scss.addAppoimentsModalFormDateContainerDayMonth}`}>{moment(selectdate).format('dddd')}</div>
              <div className={`${scss.addAppoimentsModalFormDateContainerDate}`}>{moment(selectdate).format('DD')}</div>
              <div className={`${scss.addAppoimentsModalFormDateContainerDayMonth}`}>{moment(selectdate).format('MMMM')}</div>
            </div>
          </Col>
          <Col span={12}>
            <div
              className={`${scss.addAppoimentsModalFormContainer}`}
            >
              <div className={`${scss.addAppoimentsModalFormContainerIcon}`}>
                <img src="https://img.icons8.com/color/200/000000/health-checkup.png" />
              </div>

              <Form
                validateMessages={validateMessages}
                hideRequiredMark="false"
                form={form}
                {...layout}
              >
                <Form.Item
                  name="count"
                  label="Appoiments"
                  rules={[{ type: "number", min: 1, max: 1000, required: true }]}
                >
                  <InputNumber min={1} width={150} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button
                    backgroundColor="white"
                    color="40A9FF"
                    text="Cancel"
                    width="100px"
                    key={2}
                  ></Button>
                  &nbsp;
                  <Button
                    color="white"
                    loading={loading}
                    onClick={handleSubmit}
                    text="Add"
                    width="100px"
                    key={1}
                  ></Button>
                </Form.Item>
              </Form>

            </div>
          </Col>
        </Row>
      </Modal>

      {/* secound modal */}
      <Modal
        visible={visible2}
        onCancel={handleCancel2}
        width="30%"
        footer={
          null
        }
      >
        <Row className={`${scss.addAppoimentsModalFormRow}`}>
          <Col span={24}>
            <div
              className={`${scss.addAppoimentsModalFormContainer}`}
            >
              <div className={`${scss.addAppoimentsModalFormContainerIcon}`}>
                <img src="https://img.icons8.com/color/200/000000/health-checkup.png" />
              </div>

              <Form
                validateMessages={validateMessages}
                hideRequiredMark="false"
                form={form2}
                {...layout}
              >
                <Form.Item
                  name="count2"
                  label="Appoiments"
                  rules={[{ type: "number", min: 1, max: 1000, required: true }]}
                >
                  <InputNumber min={1} width={230} />
                </Form.Item>
                <Form.Item
                {...tailLayout}
                >
                  <Button
                    backgroundColor="white"
                    color="40A9FF"
                    text="Cancel"
                    width="100px"
                    key={2}
                  ></Button>
                  &nbsp;
                  <Button
                    color="white"
                    loading={loading2}
                    onClick={handleSubmit2}
                    text="Add"
                    width="100px"
                    key={1}
                  ></Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

