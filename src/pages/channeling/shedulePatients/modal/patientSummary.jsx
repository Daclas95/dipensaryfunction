import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Divider, Descriptions, Row, Col } from "antd";
import Button from "./../../../../component/atoms/button/Custombutton";
import {
  sendAddNewPatientFormRecord,
  patientStepsRender,
  sendExPatientRecord,
} from "../redux/actions/ActionPatientModal";

function PatientSummary() {
  const dispatch = useDispatch();
  const patientRecord = useSelector(
    (state) => state.ReducerPatientModal.AddNewPatientFormRecord
  );

  return (
    <div>
      <br />
      <Divider>Patient Details</Divider>
      <Descriptions size="middle" bordered>
        <Descriptions.Item label="Patient ID">
          {patientRecord.PatientId}
        </Descriptions.Item>
        <Descriptions.Item label="Visiting Date">
          {" "}
          {patientRecord.VisitingDate}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Appointment Date">
          {" "}
          {patientRecord.VisitingDate}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="First Name">
          {" "}
          {patientRecord.FirstName}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">
          {" "}
          {patientRecord.LastName}{" "}
        </Descriptions.Item>

        <Descriptions.Item label="Mobile Number">
          {" "}
          {patientRecord.MobileNumber}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Birthday">
          {" "}
          {patientRecord.birthday}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Age"> {patientRecord.age} </Descriptions.Item>
        <Descriptions.Item label="Citizen">
          {" "}
          {patientRecord.citizen}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">
          {" "}
          {patientRecord.gender}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Blood Group">
          {" "}
          {patientRecord.bloodGroup}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Ethnicity">
          {" "}
          {patientRecord.ethnicity}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Height">
          {" "}
          {patientRecord.height}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Weight">
          {" "}
          {patientRecord.weight}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="NIC Number">
          {" "}
          {patientRecord.NIC}{" "}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Address">
          {" "}
          {patientRecord.address}{" "}
        </Descriptions.Item>
      </Descriptions>

      <Divider>Carer Details</Divider>
      <Descriptions size="middle" bordered>
        <Descriptions.Item label="Carer First Name">
          {" "}
          {patientRecord.carerFirstName}{" "}
        </Descriptions.Item>
        <Descriptions.Item label="Carer Last Name">
          {" "}
          {patientRecord.carerLastName}{" "}
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Carer Relationship">
          {" "}
          {patientRecord.carerRelationShip}{" "}
        </Descriptions.Item>
      </Descriptions>
      <br />
      <Row justify="end" gutter={24}>
        <Col span={3}>
          <Form.Item>
            <Button
              text="Previous"
              onClick={() => {
                dispatch(patientStepsRender(0));
                dispatch(sendExPatientRecord(patientRecord));
              }}
            />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item>
            <Button
              text="Next"
              onClick={() => {
                dispatch(patientStepsRender(2));
              }}
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default PatientSummary;
