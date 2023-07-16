import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import user1 from "../images/user/user-01.png";
import user2 from "../images/user/user-02.png";
import user3 from "../images/user/user-03.png";
import user4 from "../images/user/user-04.png";
import user5 from "../images/user/user-05.png";

interface DataType {
  key: React.Key;
  name: React.ReactNode;
  date: string;
  age: number;
  gender: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Patient Name',
    dataIndex: 'name',
  },
  {
    title: 'Appointment Date',
    dataIndex: 'date',
   
  },
  {
    title: 'Age',
    dataIndex: 'age',
    
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: <div className='flex items-center'> <img src={user1} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    date: '19/05/2023 11:00 pm',
    age: 25,
    gender: 'Male',
  },
  {
    key: '2',
    name: <div className='flex items-center '> <img src={user2} alt="" className='w-10 mr-2' /> Hellen Zabulon </div>,
    date: '11/06/2023 1:00 pm',
    age: 25,
    gender: 'Female',
  },
  {
    key: '3',
    name: <div className='flex items-center'> <img src={user3} alt="" className='w-10 mr-2' /> Asiimwe Fred </div>,
    date: '30/06/2023 2:00 pm',
    age: 24,
    gender: 'Male',
  },
  {
    key: '4',
    name: <div className='flex items-center'> <img src={user4} alt="" className='w-10 mr-2' /> Bukenya Kiiza Roland </div>,
    date: '20/07/2023 8:00 am',
    age: 28,
    gender: 'Male',
  },
  {
    key: '5',
    name: <div className='flex items-center'> <img src={user5} alt="" className='w-10 mr-2'/> Baluku Wilton </div>,
    date: '10/06/2023 10:00 am',
    age: 26,
    gender: 'Male',
  },
  {
    key: '6',
    name: <div className='flex items-center'> <img src={user1} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    date: '19/05/2023 11:00 pm',
    age: 25,
    gender: 'Male',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableTwo: React.FC = () => <Table columns={columns} dataSource={data} pagination={{disabled: false, pageSize:3}} onChange={onChange} />;

export default TableTwo;