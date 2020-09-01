import React, { useState } from "react";
import "./PatientsSlotPanel.scss";
import AddPatients from "../../../../pages/channeling/shedulePatients/modal/addNewPatientsModalForm";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  Avatar,
  Col,
  Row,
  Statistic,
  Empty,
  Button,
  Skeleton,
} from "antd";
import patientIcon from "../../../../assets/images/patienticon.png";
import { openQuickAdd } from "../redux/actions/ActionPatientSlotPanel";
import moment from "moment";

export const PatientsSlotPanel = () => {
  let [slots, setSlots] = useState([]);
  const dispatch = useDispatch();
  const selectcount = useSelector(
    (state) => state.ReducerPatientSlotPanel.slotCountValues
  );
  const selectdate = useSelector(
    (state) => state.ReducerPatientSlotPanel.selectDate
  );

  const addToArry = () => {
    slots = [];
    for (let i = 0; i < selectcount; i++) {
      slots.push(<AddPatients />);
    }
    console.log("Solt panel (solts Numbers) :", selectcount);
  };
  return (
    <div className="patientsSlotpanel">
      {addToArry()}
      <List
        pagination={{
          onChange: (page) => { },
          pageSize: 5,
          showSizeChanger: false,
        }}
        locale={{
          emptyText: (
            <Empty
              style={{
                marginTop: 120,
              }}
              image="https://img.icons8.com/cute-clipart/100/000000/nothing-found.png"
              imageStyle={{
                height: 100,
              }}
              description={
                <span
                  style={{
                    color: "#ff4d4f",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: 15,
                  }}
                >
                  No appoiments available in this date
                </span>
              }
            >
              <Button
                type="primary"
                onClick={() => {
                  dispatch(openQuickAdd());
                }}
              >
                Add Appoiments
              </Button>
            </Empty>
          ),
        }}
        header={
          <Row gutter={16}>
            <Col span={12}>
              <Statistic
                value={moment(selectdate).format("MMM Do YYYY")}
                prefix={
                  <img src="https://img.icons8.com/fluent/30/000000/planner.png" />
                }
                valueStyle={{ color: "#1899E1" }}
              />
            </Col>
            <Col span={4}>
              <Statistic
                value={selectcount}
                prefix={
                  <img src="https://img.icons8.com/fluent/30/000000/stethoscope.png" />
                }
                valueStyle={{ color: "#1899E1" }}
              />
            </Col>
            <Col span={4}>
              <Statistic
                value={selectcount}
                prefix={
                  <img src="https://img.icons8.com/ultraviolet/30/000000/treatment-plan.png" />
                }
                valueStyle={{ color: "#1899E1" }}
              />
            </Col>
            <Col span={4}>
              <a>
                <Statistic
                  value={" "}
                  prefix={
                    <img src="https://img.icons8.com/fluent/30/000000/add-pie-chart-report.png" />
                  }
                  valueStyle={{ color: "#1899E1" }}
                />
              </a>
            </Col>
          </Row>
        }
        bordered
        dataSource={slots.map((item) => (item))}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar size="large" src={patientIcon} />
              }
              title={<>
                <Row>
                  <Col span={6}>
                    <span className="listItemColName">Name </span>
                  </Col>
                  <Col span={18}>
                    <Skeleton.Input active={true} />
                  </Col>
                </Row>
                <Row>
                  <Col span={6}>
                    <span className="listItemColName">Address </span>
                  </Col>
                  <Col span={18}>
                    <Skeleton.Input active={true} />
                  </Col>
                </Row>
                <Row>
                  <Col span={6}>
                    <span className="listItemColName">P.Number </span>
                  </Col>
                  <Col span={18}>
                    <Skeleton.Input active={true} />
                  </Col>
                </Row>
              </>}
            />
            <div>{item}</div>
          </List.Item>
        )}
      />
    </div>
  )

}

