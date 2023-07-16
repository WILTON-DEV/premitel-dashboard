import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import user1 from "../images/user/user-01.png";
import user2 from "../images/user/user-02.png";
import user3 from "../images/user/user-03.png";
import user4 from "../images/user/user-04.png";
import user5 from "../images/user/user-05.png";
import user6 from "../images/user/user-05.png";
import user7 from "../images/user/user-07.png";
import user8 from "../images/user/user-08.png";
import user9 from "../images/user/user-09.png";
import user10 from "../images/user/user-10.png";
import user11 from "../images/user/user-11.png";
import user12 from "../images/user/user-12.png";
import user13 from "../images/user/user-13.png";
import user14 from "../images/user/user-14.png";

interface DataType {
  key: React.Key;
  name: React.ReactNode;
  email: string;
  meetingDate: string;
  meetingTime: string;
  phoneNumber: string;
  status: React.ReactNode;
  action: React.ReactNode;
  gender?: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
   
  },
  {
    title: 'Meeting Date',
    dataIndex: 'meetingDate',
    
  },
  {
    title: 'Meeting Time',
    dataIndex: 'meetingTime',
    
    },
    {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    
    },
      {
    title: 'Status',
    dataIndex: 'status',
    
    },
        {
    title: 'Actions',
    dataIndex: 'action',
    
    },
        
];

const data: DataType[] = [
  {
    key: '1',
    name: <div className='flex items-center'> <img src={user1} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '1:15-2:40pm',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
  },
  {
    key: '2',
    name: <div className='flex items-center '> <img src={user2} alt="" className='w-10 mr-2' /> Hellen Zabulon </div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '1:15-2:40pm',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
  },
  {
    key: '3',
    name: <div className='flex items-center'> <img src={user3} alt="" className='w-10 mr-2' /> Asiimwe Fred </div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '1:15-2:40pm',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
  },
  {
    key: '4',
    name: <div className='flex items-center'> <img src={user4} alt="" className='w-10 mr-2' /> Bukenya Kiiza Roland </div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '1:15-2:40pm',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
  },
  {
    key: '5',
    name: <div className='flex items-center'> <img src={user5} alt="" className='w-10 mr-2'/> Baluku Wilton </div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '1:15-2:40pm',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
  },
  {
    key: '6',
    name: <div className='flex items-center'> <img src={user6} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '1:15-2:40pm',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
    },
    {
    key: '7',
    name: <div className='flex items-center'> <img src={user7} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '1:15-2:40pm',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
    },
      {
    key: '8',
    name: <div className='flex items-center'> <img src={user8} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '1:15-2:40pm',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
    },
        {
    key: '9',
    name: <div className='flex items-center'> <img src={user9} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '9:15-10:40am',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
    },
          {
    key: '10',
    name: <div className='flex items-center'> <img src={user10} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '9:15-10:40am',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
    },
            {
    key: '11',
    name: <div className='flex items-center'> <img src={user11} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '9:15-10:40am',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
    },
              {
    key: '12',
    name: <div className='flex items-center'> <img src={user12} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '9:15-10:40am',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
    },
                {
    key: '13',
    name: <div className='flex items-center'> <img src={user13} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '8:15-9:40am',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
    },
                  {
    key: '14',
    name: <div className='flex items-center'> <img src={user14} alt="" className='w-10 mr-2' /> Atugonza Ronnie</div>,
    email: 'atugonza12@gmail.com',
    meetingDate: '19/05/2023',
    meetingTime: '9:15-10:40am',
    phoneNumber: '0781936669',
    status: <div>active</div>,
    action: <div>delete</div>,
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const AppointmentsTable: React.FC = () => <Table columns={columns} dataSource={data} pagination={{disabled: false, pageSize:4, position:['bottomLeft']}} onChange={onChange} />;

export default AppointmentsTable;