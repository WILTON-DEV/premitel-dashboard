import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';


interface DataType {
  key: React.Key;
  id:string;
  name: string;
  email: string;
  gender: string;
  lastUpdated: string;
  action: React.ReactNode;
  
}

const columns: ColumnsType<DataType> = [
    {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'Patient Name',
  },
  {
    title: 'Patient Email',
    dataIndex: 'email',
   
    },
  {
    title: 'Gender',
    dataIndex: 'gender',
    
    },
  {
    title: 'Last Updated',
    dataIndex: 'lastUpdated',
    
  },
        {
    title: 'Actions',
    dataIndex: 'action',
    
    },
        
];

const data: DataType[] = [
  {
    key: '1',
    id: '123',
    name:  'Atugonza Ronnie',
    email: 'atugonza12@gmail.com',
    gender: 'Male',
    lastUpdated: '19/05/2023',
    action: <div>delete</div>,
  },
  {
    key: '2',
    id: '234',
    name:  'Atugonza Ronnie',
    email: 'atugonza12@gmail.com',
    gender: 'Male',
    lastUpdated: '19/05/2023',
    action: <div>delete</div>,
  },
  {
    key: '3',
    id: '234',
    name:  'Atugonza Ronnie',
    email: 'atugonza12@gmail.com',
    gender: 'Male',
    lastUpdated: '19/05/2023',
    action: <div>delete</div>,
  },
  {
    key: '4',
    id: '234',
    name:  'Atugonza Ronnie',
    email: 'atugonza12@gmail.com',
    gender: 'Male',
    lastUpdated: '19/05/2023',
    action: <div>delete</div>,
  },
  {
    key: '5',
    id: '234',
    name:  'Atugonza Ronnie',
    email: 'atugonza12@gmail.com',
    gender: 'Male',
    lastUpdated: '19/05/2023',
    action: <div>delete</div>,
  },
  {
    key: '6',
    id: '234',
    name:  'Atugonza Ronnie',
    email: 'atugonza12@gmail.com',
    gender: 'Male',
    lastUpdated: '19/05/2023',
    action: <div>delete</div>,
    },
    {
    key: '7',
    id: '234',
    name:  'Atugonza Ronnie',
    email: 'atugonza12@gmail.com',
    gender: 'Male',
    lastUpdated: '19/05/2023',
    action: <div>delete</div>,
    },
      {
    key: '8',
    id: '234',
    name:  'Atugonza Ronnie',
    email: 'atugonza12@gmail.com',
    gender: 'Male',
    lastUpdated: '19/05/2023',
    action: <div>delete</div>,
    },
        {
    key: '9',
    id: '234',
    name:  'Atugonza Ronnie',
    email: 'atugonza12@gmail.com',
    gender: 'Male',
    lastUpdated: '19/05/2023',
    action: <div>delete</div>,
    },
          {
    key: '10',
    id: '234',
    name:  'Atugonza Ronnie',
    email: 'atugonza12@gmail.com',
    gender: 'Male',
    lastUpdated: '19/05/2023',
    action: <div>delete</div>,
    },
    
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const PrescriptionsTable: React.FC = () => <Table columns={columns} dataSource={data} pagination={{disabled: false, pageSize:4, position:['bottomLeft']}} onChange={onChange} />;

export default PrescriptionsTable;