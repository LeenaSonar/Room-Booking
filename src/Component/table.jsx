
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';


import { Table } from 'antd';

export class TableDemo extends React.PureComponent {

    render() {
        const { columns, data } = this.props;
        console.log(data);
              return (
            <div>
                <Table style={{ width: "100" }} columns={columns} dataSource={data} size="large" />

            </div>


        )
    }

}








