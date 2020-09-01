import React, { useEffect, Fragment, useState } from "react";
import { Row, Col } from "antd";
import { Form, Select, Divider } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Button from "./../../../../component/atoms/button/Custombutton";
import Input from "./../../../../component/atoms/input/CustomInput";
import DatePicker from "./../../../../component/atoms/datePicker/CustomDatePicker";
import {
  viewExPatientUpModal,
  sendAddNewPatientFormRecord,
  patientStepsRender,
} from "../redux/actions/ActionPatientModal";
import ExistingPatientUpdateModalForm from "./existingPatientUpdateModal";

function AddNewPatients() {
  const record = useSelector(
    (state) => state.ReducerPatientModal.ExPatientRecord
  );
  const [patientId, setPatientId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNIC] = useState("");
  const [mobileNumber, setMobilenumber] = useState("");
  const [visitingDate, setVisitingDate] = useState("");
  const [age, setAge] = useState("");
  const [citizen, setCitizen] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodgroup] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [address, setAddress] = useState("");
  const [carerFirstName, setCarerFirstname] = useState("");
  const [carerLastName, setCarerLastname] = useState("");
  const [carerRelationShip, setCarerRelationship] = useState("");
  const [birthday, setBirthday] = useState(moment().format("YYYY-MM-DD"));
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const submitRecord = () => {
    const getPatientRecord = {
      PatientId: patientId,
      FirstName: firstName,
      LastName: lastName,
      NIC: nic,
      MobileNumber: mobileNumber,
      VisitingDate: visitingDate,
      birthday: birthday,
      age: age,
      citizen: citizen,
      gender: gender,
      bloodGroup: bloodGroup,
      ethnicity: ethnicity,
      height: height,
      weight: weight,
      address: address,
      carerFirstName: carerFirstName,
      carerLastName: carerLastName,
      carerRelationShip: carerRelationShip,
    };
    console.log(getPatientRecord);
    dispatch(sendAddNewPatientFormRecord(getPatientRecord));
  };

  useEffect(() => {
    console.log(record);
    setPatientId(record.PatientId);
    setFirstName(record.FirstName);
    setLastName(record.LastName);
    setNIC(record.NIC);
    setMobilenumber(record.MobileNumber);
    setVisitingDate(record.VisitingDate);
    setBirthday(record.birthday);
    setAge(record.age);
    setCitizen(record.citizen);
    setGender(record.gender);
    setBloodgroup(record.bloodGroup);
    setEthnicity(record.ethnicity);
    setHeight(record.height);
    setWeight(record.weight);
    setAddress(record.address);
    setCarerFirstname(record.carerFirstName);
    setCarerLastname(record.carerLastName);
    setCarerRelationship(record.carerRelationShip);
  }, [record]);

  const handleChange = (e) => {};

  const datePickerOnChange = (name, dateString, field) => {
    setBirthday(dateString.format("YYYY-MM-DD"));
    setAge(moment().format("YYYY") - dateString.format("YYYY"));
    console.log(dateString.format("YYYY"));
    console.log(moment().format("YYYY") - dateString.format("YYYY"));
  };

  const handleSelect = (name, value) => {
    if (name === "citizen") {
      setCitizen(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "bloodGroup") {
      setBloodgroup(value);
    } else if (name === "relationship") {
      setCarerRelationship(value);
    } else if (name === "ethnicity") {
      setEthnicity(value);
    }
  };
  const { Option } = Select;
  return (
    <Fragment>
      <div>
        <Form layout="vertical" hideRequiredMark>
          <div>
            <Row gutter={24}>
              <Col span={6}>
                <Button
                  onClick={() => {
                    dispatch(viewExPatientUpModal());
                  }}
                  text="Exist Patient"
                  borderRadius="0px"
                ></Button>
              </Col>
            </Row>
          </div>
          <Divider>Patient Details</Divider>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item rules={[{ require: true }]} label="First Name">
                <Input
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstName"
                  value={firstName}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item rules={[{ required: true }]} label="Last Name">
                <Input
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastName"
                  value={lastName}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item rules={[{ required: true }]} label="Contact No">
                <Input
                  placeholder="Contact Number"
                  onChange={(e) => setMobilenumber(e.target.value)}
                  name="mobileNumber"
                  value={mobileNumber}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={4}>
              <Form.Item rules={[{ required: true }]} label="Birthday">
                <DatePicker
                  backgroundColor="#F5F5F5"
                  name="birthday"
                  allowClear={false}
                  onChange={(dateString) =>
                    datePickerOnChange("birthday", dateString)
                  }
                  value={moment(birthday)}
                  marginLeft="1%"
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item rules={[{ required: true }]} label="Age">
                <Input
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                  name="age"
                  disabled="true"
                  value={age}
                  defaultValue="00"
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item
                defaultValue="Citizen"
                rules={[{ required: true }]}
                label="Citizen"
              >
                <Select
                  onChange={(value) => handleSelect("citizen", value)}
                  name="citizen"
                  value={citizen}
                  defaultValue="Citizen"
                >
                  <Option value="local">Local</Option>
                  <Option value="foreign">Foreign</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item rules={[{ required: true }]} label="Gender">
                <Select
                  defaultValue="Gender"
                  onChange={(value) => handleSelect("gender", value)}
                  name="gender"
                  value={gender}
                  defaultValue="Gender"
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item rules={[{ required: true }]} label="Blood Group">
                <Select
                  defaultValue="Blood Group"
                  onChange={(value) => handleSelect("bloodGroup", value)}
                  name="bloodGroup"
                  value={bloodGroup}
                  defaultValue="Blood Group"
                >
                  <Option value="a+">A+</Option>
                  <Option value="a-">A-</Option>
                  <Option value="b+">B+</Option>
                  <Option value="b-">B-</Option>
                  <Option value="ab+">AB+</Option>
                  <Option value="ab-">AB-</Option>
                  <Option value="o+">O+</Option>
                  <Option value="o-">O-</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item rules={[{ required: true }]} label="Ethnicity">
                <Select
                  defaultValue="Ethnicity"
                  onChange={(value) => handleSelect("ethnicity", value)}
                  name="ethnicity"
                  value={ethnicity}
                  defaultValue="Ethnicity"
                >
                  <Option value="sriLankanTamil">SriLankan Tamil</Option>
                  <Option value="sriLankanSihalese">SriLankan Sihalese</Option>
                  <Option value="sriLankanMuslim">SriLankan Muslim</Option>
                  <Option value="sriLankanBuddhism">SriLankan Buddhism</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={4}>
              <Form.Item rules={[{ required: true }]} label="Height">
                <Input
                  placeholder="Height"
                  onChange={(e) => setHeight(e.target.value)}
                  name="height"
                  value={height}
                  defaultValue="0"
                  min={0}
                  step={0.1}
                  subtitle="cm"
                  width="140px"
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item rules={[{ required: true }]} label="Weight">
                <Input
                  placeholder="Weight"
                  onChange={(e) => setWeight(e.target.value)}
                  name="weight"
                  value={weight}
                  defaultValue="0"
                  min={0}
                  step={0.1}
                  subtitle="kg"
                  width="145px"
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item rules={[{ required: true }]} label="NIC No">
                <Input
                  placeholder="NIC Number"
                  onChange={(e) => setNIC(e.target.value)}
                  name="nic"
                  value={nic}
                  maxLength={12}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item rules={[{ required: true }]} label="Address">
                <Input
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  value={address}
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider>Carer Details</Divider>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item rules={[{ required: true }]} label="First Name">
                <Input
                  placeholder="Carer First Name"
                  onChange={(e) => setCarerFirstname(e.target.value)}
                  name="carerFirstName"
                  value={carerFirstName}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item rules={[{ required: true }]} label="Last Name">
                <Input
                  placeholder="Carer Last Name"
                  onChange={(e) => setCarerLastname(e.target.value)}
                  name="carerLastName"
                  value={carerLastName}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item rules={[{ required: true }]} label="Relationship">
                <Input
                  placeholder="Relationship"
                  onChange={(e) => setCarerRelationship(e.target.value)}
                  name="carerRelationShip"
                  value={carerRelationShip}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="end" gutter={24}>
            <Col span={3}>
              <Form.Item>
                <Button
                  loading={loading}
                  text="Next"
                  onClick={() => {
                    submitRecord();
                    dispatch(patientStepsRender(1));
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <ExistingPatientUpdateModalForm />
      </div>
    </Fragment>
  );
}
export default AddNewPatients;
