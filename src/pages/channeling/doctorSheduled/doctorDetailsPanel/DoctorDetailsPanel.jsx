import React, { useState } from 'react'
import scss from './DoctorDetailsPanel.module.scss'
import { Select, Tabs, Space, Table, Form, Input, Button, InputNumber } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, SyncOutlined, EditOutlined } from '@ant-design/icons';
const { Option } = Select;
const people = [{ speciality: 'EyeSpecialist', name: 'Jhon', }, { speciality: 'gynecologists', name: 'Sivapiriyan', }, { speciality: 'gynecologists', name: 'lavanjan', }, { speciality: 'Ophthalmologists', name: 'Khaan', }]

function DoctorDetailsPanel() {

    const [doctorSpeciality, setDoctorSpeciality] = useState()
    const [searchText, setSearchText] = useState()
    const [searchedColumn, setSearchedColumn] = useState()
    const [filteredInfo, setFilteredInfo] = useState({})
    const { TabPane } = Tabs;
    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    const handleChange = (pagination, filters) => {
        setFilteredInfo(filters)
    };
    let searchInput
    const getColumnSearchProps = (dataIndex, title) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        searchInput = node;
                    }}
                    placeholder={title}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 120, marginBottom: 8, display: 'block' }}
                />
                <Space size={20}>
                    <Button
                        onClick={() => handleReset(clearFilters)}
                        size="small"
                        style={{ width: 50 }}
                        icon={<SyncOutlined />}
                    >

                    </Button>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 50 }}
                    >
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select(), 100);
            }
        },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                    text
                ),
    });

    const onFinish = values => {
        console.log(values);
    };
    function onChangeDoctorSpeciality(value) {
        console.log(`selected ${value}`);
        setDoctorSpeciality(value)
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '35%',
            ...getColumnSearchProps('name', 'Name')
        },
        {
            title: 'Speciality',
            key: 'speciality',
            dataIndex: 'speciality',
            width: '35%',
            filters: [
                {text:"EyeSpecialist",value:"EyeSpecialist"},                
                {text:"Ophthalmologists",value:"Ophthalmologists"},
                {text:"gynecologists",value:"gynecologists"},
                
            ],    
            filterMultiple:false,        
            filteredValue: filteredInfo.speciality || null,
            onFilter: (value, record) => record.speciality.includes(value),
        },
        {
            title: 'Mobile',
            dataIndex: 'MNumber',
            key: 'MNumber',
            ...getColumnSearchProps('MNumber', 'Phone.No')
        },
        {
            title: 'Action',
            key: 'action',
            width: '10%',
            render: (text, record) => (
                <Space size="middle">
                    <a><EditOutlined /></a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            MNumber: "0774207527",
            address: 'New York No. 1 Lake Park',
            speciality: 'EyeSpecialist'
        },
        {
            key: '2',
            name: 'Jim Green',
            MNumber: "0773562636",
            address: 'London No. 1 Lake Park',
            speciality: 'Ophthalmologists'
        },
        {
            key: '3',
            name: 'Joe Black',
            MNumber: "0772476216",
            address: 'Sidney No. 1 Lake Park',
            speciality: 'gynecologists'
        },
    ];

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    };
    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('')
    };
    return (
        <div className={`${scss.doctorPanelOutBox}`}>
            <div className={`${scss.doctorpanelContainer}`}>
                {/* <div className={`${scss.doctorNameSelectBox}`}>
                    <Row>
                        <Col span={12}>
                            <Form.Item
                                label="Speciality">
                                <Select
                                    className={`${scss.selectbox}`}
                                    showSearch
                                    placeholder="Select Speciality"
                                    onFocus
                                    onBlur
                                    onSearch
                                    onChange={onChangeDoctorSpeciality}
                                >
                                    <Option value="EyeSpecialist">EyeSpecialist</Option>
                                    <Option value="BrainSpecialist">BrainSpecialist</Option>
                                    <Option value="AnimalSpecialist">AnimalSpecialist</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Doctor">
                                <Select
                                    className={`${scss.selectbox}`}
                                    showSearch
                                    optionFilterProp="children"
                                    onFocus
                                    onBlur
                                    onSearch
                                    allowClear
                                >
                                    {people.filter(person => person.speciality == doctorSpeciality).map(filteredPerson => (
                                        <Option value={filteredPerson.name}>{filteredPerson.name}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>


                </div>
                <div className={`${scss.doctorDescriptionBox}`}>
                    <Descriptions title="Doctor Info" column={2} >
                        <Descriptions.Item label="Doctor Name">Zhou Maomao</Descriptions.Item>
                        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                        <Descriptions.Item label="Remark">empty</Descriptions.Item>
                        <Descriptions.Item label="Address">
                            No. 18, Wantang Road, Xihu District,
            </Descriptions.Item>
                    </Descriptions>
                </div> */}
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Doctors" key="1">
                        <Table 
                        columns={columns} 
                        dataSource={data} 
                        onChange={handleChange}
                        locale={{filterReset:'All'}} 
                        onRow={(record,rowIndex)=>{
                            return{
                                onClick:()=>{
                                    console.log(record);                                    
                                },
                                
                            }
                        }}
                        // rowSelection={{
                        //     type:'radio'
                        // }}
                        />
                    </TabPane>
                    <TabPane tab="Add Doctor" key="2">
                        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                            <Form.Item
                                name={['doctor', 'name']}
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name={['doctor', 'MNumber']}
                                label="Phone Number"
                                rules={[
                                    {
                                        type: 'email',
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name={['doctor', 'speciality']}
                                label="Speciality"
                                rules={[
                                    {
                                        required: true
                                    },
                                ]}
                            >
                                <Select
                                    // className={`${scss.selectbox}`}
                                    showSearch
                                    placeholder="Select Speciality"
                                    onFocus
                                    onBlur
                                    onSearch
                                    onChange={onChangeDoctorSpeciality}
                                >
                                    <Option value="EyeSpecialist">EyeSpecialist</Option>
                                    <Option value="BrainSpecialist">BrainSpecialist</Option>
                                    <Option value="AnimalSpecialist">AnimalSpecialist</Option>
                                </Select>

                            </Form.Item>
                            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 16 }}>
                                <Button htmlType="submit">
                                    Clear
                                </Button>
                                &nbsp;
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                </Tabs>



            </div>
        </div>
    )
}
export default DoctorDetailsPanel
