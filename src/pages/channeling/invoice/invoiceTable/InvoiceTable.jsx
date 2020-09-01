import React from 'react'
import { Table, Tag, Space, Button} from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import  './InvoiceTable.scss';
import {useDispatch,useSelector} from "react-redux";
import {updateInvoiceModeShow,getInvoiceTableData} from "../redux/action/ActionInvoiceUpdateModel"

function InvoiceTable ()  {
  const invoiceUpdateModelVisibile = useSelector(
    (state) => state.ReducerInvoiceUpdateModel.invoiceUpdateModelVisibile
  );

  const dispatch= useDispatch();
 
  function  EditClick  (record) {
    console.log("record",record);
    {dispatch(updateInvoiceModeShow())}
    {dispatch(getInvoiceTableData(record))}
  }
  
    const columns = [
      {
        title: 'In.No',
        dataIndex: 'InNo',
        key: 'InNo',
        width: '20px',
      },
      {
        title: 'Patient Id',
        dataIndex: 'PatientId',
        key: 'PatientId',
      },
      {
        title: 'Full Name',
        dataIndex: 'FullName',
        key: 'FullName',
      },
      {
        title: 'Contact No',
        dataIndex: 'ContactNo',
        key: 'ContactNo',
      },
      {
        title: 'Doctor Name',
        dataIndex: 'DoctorName',
        key: 'DoctorName',
      },
      {
        title: 'Date',
        dataIndex: 'Date',
        key: 'Date',
      },
      {
        title: 'Amount',
        dataIndex: 'Amount',
        key: 'Amount',
      },
      {
        title: 'Payment',
        key: 'Payment',
        dataIndex: 'Payment',
        render: Payment => (
          <>
            {Payment.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'NOT PAID') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
    
      {
        title: 'Print',
        key: 'Print',
        dataIndex: 'Print',
        key:'print',
        width: '10px',
      },
    
      {
        title: 'Edit',
        key: 'Edit',
        width: '10px',
        render: (text, record) => (
          <Space size="middle">
            <a onClick={() =>EditClick(record)}>Edit</a>
          </Space>
        ),
      },
    ];
    const data = [
      {
        key: '1',
        InNo: 'P0001',
        PatientId: 32,
        FullName: 'Sivapiriyan Siva',
        ContactNo: '123456789',
        DoctorName:'Dr. Harsha Gunasekara',
        Date: '2020-12-31',
        Amount: '400.00',
        Print:<a href=" "><PrinterOutlined /></a>,
        Payment: ['PAID'],
      },
      {
        key: '2',
        InNo: 'P0002',
        PatientId: 42,
        FullName: 'Lavanyan Lavanyan',
        ContactNo: '12345678910',
        DoctorName:'Dr.Gunasekara Sivapiriyan Sivapiriyan',
        Date: '2020-08-13',
        Amount: '450.00',
        Print:<a href=" "><PrinterOutlined /></a>,
        Payment: ['NOT PAID'],
      },
      {
        key: '3',
        InNo: 'P0003',
        PatientId: 32,
        FullName: 'Chrishthober Evans',
        ContactNo: '123456789',
        DoctorName:'Dr. Harsha Gunasekara',
        Date: '2020-08-20',
        Amount: '300.00',
        Print:<a href=" "><PrinterOutlined /></a>,
        Payment: ['PAID'],
      },
      {
        key: '4',
        InNo: 'P0004',
        PatientId: 32,
        FullName: 'Lavanyan Lavanyan',
        ContactNo: '+94123456789',
        DoctorName:'Dr. Harsha Gunasekara',
        Date: '2020-12-31',
        Amount: '400.00',
        Print:<a href=" "><PrinterOutlined /></a>,
        Payment: ['PAID'],
      },
      {
        key: '5',
        InNo: 'P0005',
        PatientId: 42,
        FullName: 'Sivapiriyan Sivapiriyan',
        ContactNo: '123 456 78910',
        DoctorName:'Dr. Harsha Gunasekara',
        Date: '2020-08-13',
        Amount: '450.00',
        Print:<a href=" "><PrinterOutlined /></a>,
        Payment: ['NOT PAID'],
      },
      {
        key: '6',
        InNo: 'P0006',
        PatientId: 32,
        FullName: 'Srinadarajan Nadarajan',
        ContactNo: '1234567891011',
        DoctorName:'Dr. Harsha Gunasekara Harsha Gunasekara',
        Date: '2020-08-20',
        Amount: '300.00',
        Print:<a href=" "><PrinterOutlined /></a>,
        Payment: ['PAID'],
      },
    ];
    return (
        <div className="invoiceTableContainer">
          <Button onClick = {()=>console.log(invoiceUpdateModelVisibile)}>Hit</Button>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}



export default InvoiceTable