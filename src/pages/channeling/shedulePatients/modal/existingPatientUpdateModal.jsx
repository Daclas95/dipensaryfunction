import React, { useState } from "react";
import Modal from "../../../../component/organisms/modalForm/CustomModalForm";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import {
  closeExPatientUpModal,
  sendExPatientRecord,
} from "../redux/actions/ActionPatientModal";
import { Table, Space, Input } from "antd";
import Button from "./../../../../component/atoms/button/Custombutton";

const data = [
  {
    key: "1",
    PatientId: "PT00001",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "2020.02.20",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "2",
    PatientId: "PT00002",
    FirstName: "Siva",
    LastName: "Linges",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "3",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "4",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "5",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "6",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "7",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "8",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "9",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "10",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "11",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "12",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "13",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "14",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "15",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
  {
    key: "16",
    PatientId: "PT00003",
    FirstName: "Lavanjan",
    LastName: "Ravi",
    NIC: "9700521555V",
    MobileNumber: "0755517771",
    VisitingDate: "1998-01-01",
    birthday: "1998-01-01",
    age: "23",
    citizen: "Local",
    gender: "Male",
    bloodGroup: "O-",
    ethnicity: "SriLankan Tamil",
    height: "178",
    weight: "61",
    address: "Nelliady",
    carerFirstName: "Sivapiriyan",
    carerLastName: "Lingeswaran",
    carerRelationShip: "Friend",
  },
];

function ExistingPatientUpdateModal() {
  const [loading, setLoading] = useState();
  const [searchText, setSearchText] = useState();
  const [searchColumn, setSearchColumn] = useState();
  const [selectionType, setSeletionType] = useState();
  const [record, setRecord] = useState();
  const [visible, setVisible] = useState();

  const dispatch = useDispatch();
  const exPatientUpModalShow = useSelector(
    (state) => state.ReducerPatientModal.exPatientUpModalShow
  );

  const rowSelection = {
    onChange: (selectedRowKeys, record) => {
      console.log(record[0]);
      dispatch(sendExPatientRecord(record[0]));
    },
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            color="white"
            backgroundColor="#40a9ff"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            borderRadius="0"
            width="100px"
            text="Search"
          ></Button>
          <Button
            color="black"
            backgroundColor="white"
            onClick={() => this.handleReset(clearFilters)}
            width="80px"
            borderRadius="0"
            text="Reset"
            float="right"
          ></Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text) =>
      searchColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys);
    setSearchColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
      dispatch(closeExPatientUpModal());
    }, 800);
  };

  const columns = [
    {
      width: "17%",
      title: "Patient ID",
      dataIndex: "PatientId",
      ...getColumnSearchProps("PatientId"),
    },
    {
      title: "First Name",
      dataIndex: "FirstName",
      ...getColumnSearchProps("FirstName"),
    },
    {
      title: "LastName",
      dataIndex: "LastName",
      ...getColumnSearchProps("LastName"),
    },
    {
      title: "NIC",
      dataIndex: "NIC",
      ...getColumnSearchProps("NIC"),
    },
    {
      title: "Mobile Number",
      dataIndex: "MobileNumber",
      ...getColumnSearchProps("MobileNumber"),
    },
    {
      title: "Visiting Date",
      dataIndex: "VisitingDate",
      ...getColumnSearchProps("VisitingDate"),
    },
  ];
  return (
    <>
      <Modal
        top="30px"
        width="95%"
        height="70%"
        visible={exPatientUpModalShow}
        onCancel={dispatch(closeExPatientUpModal)}
        footer={[
          <Button
            color="black"
            text="Back"
            width="140px"
            borderRadius="2px"
            fontWeight="600px"
            backgroundColor="white"
          ></Button>,
          <Button
            color="white"
            loading={loading}
            onClick={handleOk}
            text="Add Patient"
            width="140px"
            borderRadius="2px"
            fontWeight="600px"
          ></Button>,
        ]}
      >
        <div>
          <Table
            scroll={{ y: 320 }}
            rowSelection={{
              type: "radio",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
          />
        </div>
      </Modal>
    </>
  );
}

export default ExistingPatientUpdateModal;
