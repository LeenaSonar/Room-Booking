import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
//import style from "./index.css";
import { Card, Table } from "antd";
import { Row, Col } from "antd";
import { Button, Modal } from "antd";
import { DatePicker } from "antd";
import { TimePicker } from "antd";

import { TableDemo } from "../Component/table"
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

export class SelectTime extends React.PureComponent {
    state = { visible: false };
    footer = null;

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

    render() {
        return (
            <div>
                <Card
                    style={{ width: "30%", height: "100%" }}
                    extra={
                        <div>
                            <Button type="primary" onClick={this.showModal}>
                                Details
                            </Button>
                            <Modal style
                                title="Booking for August 2019"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                footer={null}

                            >
                                <TableDemo
                                    columns={[
                                        {
                                            title: 'S.No',
                                            dataIndex: 'number',
                                        },
                                        {
                                            title: 'Meeting Room',
                                            dataIndex: 'name',
                                        },
                                        {
                                            title: 'Start',
                                            dataIndex: 'address',
                                        },
                                        {
                                            title: 'End',
                                            dataIndex: 'number',
                                        },
                                        {
                                            title: 'Minutes Booked',
                                            dataIndex: 'number',
                                        }
                                    ]}

                                    data={[

                                    ]}
                                />
                            </Modal>
                        </div>


                    }
                >

                    <div>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={15}>
                                <DatePicker onChange={onChange} style={{ width: "80%" }} />
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <TimePicker
                                    minuteStep={15}
                                    secondStep={10}
                                    style={{ width: "160%" }}
                                />
                            </Col>
                        </Row>
                    </div>
                    <p />
                    Duration
                    <p>Hour</p>
                    <div>
                        <Row gutter={16} type="flex" justify="start">
                            <Col className="gutter-row" span={8}>
                                <Button style={{ border: "1", height: "150%", width: "100%" }}>0</Button>
                            </Col>

                            <Col className="gutter-row" span={8}>
                                <Button style={{ border: "1", height: "150%", width: "100%" }}>1</Button>
                            </Col>

                            <Col className="gutter-row" span={8}>
                                <Button style={{ border: "1", height: "150%", width: "100%" }}>2</Button>
                            </Col>
                        </Row>
                    </div>

                    <p>

                    </p>


                    <p>Minute</p>
                    <div>
                        <Row gutter={16} type="flex" justify="start">
                            <Col className="gutter-row" span={6}>
                                <Button style={{ border: "1", height: "150%", width: "100%" }}>
                                    0
                  </Button>
                            </Col>

                            <Col className="gutter-row" span={6}>
                                <Button style={{ border: "1", height: "150%", width: "100%" }}>
                                    15
                  </Button>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Button style={{ border: "1", height: "150%", width: "100%" }}>
                                    30
                  </Button>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Button style={{ border: "1", height: "150%", width: "100%" }}>45</Button>
                            </Col>
                        </Row>
                    </div>
                    <p>

                    </p>


                    <div>
                        <Row gutter={16} type="flex" justify="start">

                            <Col className="gutter-row" span={24}>
                                <Button type="primary" style={{ border: "1", height: "130", width: "100%", marginTop: '20px' }}>
                                    Check Availablities
                  </Button>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </div>

            // document.getElementById("container")
        );
    }
}