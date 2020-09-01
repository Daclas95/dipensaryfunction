import React, { useState } from 'react'
import { Calendar, Select, Col, Row, Checkbox, Space } from 'antd';
import moment from 'moment';
import './CustomCalender.scss';
const CustomCalender = (props) => {
    const [dates, setDates] = useState([])
    return (
        <Calendar
            className="calender"
            value={props.value}
            onSelect={props.onSelect}
            onPanelChange={props.onPanelChange}
            disabledDate={props.disabledDate}
            style={{
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                border: "1px solid #D9D9D9"
            }}
            dateCellRender={props.dateCellRender}
            defaultValue={props.defaultValue}
            validRange={props.validRange}

            headerRender={({ value, onChange }) => {

                const start = 0;
                const end = 12;
                const monthOptions = [];

                const current = value.clone();
                const localeData = value.localeData();
                const months = [];
                for (let i = 0; i < 12; i++) {
                    current.month(i);
                    months.push(localeData.monthsShort(current));
                }

                for (let index = start; index < end; index++) {
                    monthOptions.push(
                        <Select.Option className="month-item" key={`${index}`}>
                            {months[index]}
                        </Select.Option>,
                    );
                }
                const month = value.month();
                const year = value.year();
                const date = value.date();
                const options = [];
                for (let i = year - 10; i < year + 10; i += 1) {
                    options.push(
                        <Select.Option key={i} value={i} className="year-item">
                            {i}
                        </Select.Option>,
                    );
                }
                function onChangeCheckBox(checkedValues) {
                    if (checkedValues !== []) {
                        setDates([])
                        for (let i = 0; i < checkedValues.length; i++) {
                            var day = moment(month + 1, "MM").day(checkedValues[i]);
                            if (day.date() > 7) day.add(7, 'd');
                            console.log(month);
                            while (month === day.month()) {
                                if (day.format('YYYY-MM-DD') >= moment().format("YYYY-MM-DD")) {
                                    dates.push(day.format("YYYY-MM-DD"))
                                }
                                day.add(7, 'd');
                            }
                        }
                    }
                    props.getSelectedDatesFromCusCalender(dates)
                    console.log("custom calender dates when check box clicked: ", dates);
                }
                if (props.Checkboxshow == true) {
                    return (
                        <div className="calenderHeaderWithCheckBoxs">
                            <Row>
                                <Col span={7}>
                                    <div>
                                        <Select
                                            size="medium"
                                            dropdownMatchSelectWidth={false}
                                            onChange={newYear => {
                                                const now = value.clone().year(newYear);
                                                onChange(now);
                                            }}
                                            value={String(year)}
                                            className="calenderYearMonthSelector"
                                        >
                                            {options}
                                        </Select>
                                        <Select
                                            className="calenderYearMonthSelector"
                                            size="medium"
                                            dropdownMatchSelectWidth={false}
                                            value={String(month)}
                                            onChange={selectedMonth => {
                                                const newValue = value.clone();
                                                newValue.month(parseInt(selectedMonth, 10));
                                                onChange(newValue);
                                            }}
                                        >
                                            {monthOptions}
                                        </Select>
                                    </div>
                                </Col>
                                <Col span={7}>
                                </Col>

                                <Col span={5}>

                                </Col>
                                <Col span={5}>
                                    {props.content3}
                                </Col>

                            </Row>
                            <Checkbox.Group
                                onChange={onChangeCheckBox}
                                className="calenderCheckBoxGroup"
                            >
                                <Space 
                                size={90}
                                >
                                    <Checkbox value="Sunday"></Checkbox>
                                    <Checkbox value="Monday"></Checkbox>
                                    <Checkbox value="Tuesday"></Checkbox>
                                    <Checkbox value="Wednesday"></Checkbox>
                                    <Checkbox value="Thursday"></Checkbox>
                                    <Checkbox value="Friday"></Checkbox>
                                    <Checkbox value="Saturday"></Checkbox>
                                </Space>
                            </Checkbox.Group>
                        </div >
                    );
                }
                else {
                    return (
                        <div className="calenderHeader">
                            <Row>
                                <Col span={7}>
                                    <div>
                                        <Select
                                            size="medium"
                                            dropdownMatchSelectWidth={false}

                                            onChange={newYear => {
                                                const now = value.clone().year(newYear);
                                                onChange(now);
                                            }}
                                            value={String(year)}
                                            className="calenderYearMonthSelector"
                                        >
                                            {options}
                                        </Select>
                                        <Select
                                            size="medium"
                                            dropdownMatchSelectWidth={false}
                                            value={String(month)}
                                            onChange={selectedMonth => {
                                                const newValue = value.clone();
                                                newValue.month(parseInt(selectedMonth, 10));
                                                onChange(newValue);
                                            }}
                                            className="calenderYearMonthSelector"                        >
                                            {monthOptions}
                                        </Select>
                                    </div>
                                </Col>
                                <Col span={17}>
                                    <Row>
                                        <Col>
                                        </Col>
                                                &nbsp;
                                        <Col>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    )
                }
            }}
        />
    )

}
export default CustomCalender;
