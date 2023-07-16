
import CardOne from '../components/CardOne.tsx';
import ChartThree from '../components/ChartThree.tsx';
import ChartTwo from '../components/ChartTwo.tsx';
import TableTwo from '../components/TableTwo.tsx';
import { cardData } from '../data/Data.tsx';

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {
          cardData.map((props,index) => {
            return <CardOne key={index} icon= {props.icon} title = {props.title} upDowns = {props.upDowns} totalNumber = {props.totalNumber} />
          })
        }
      </div>

      <div className="mt-4  md:mt-6  2xl:mt-7.5 ">
        
        
        <div className=' '>
          <ChartTwo />
        </div>
       
        <div className=" mt-4 flex flex-col  sm:flex-row justify-between ">
          <div className='bg-white px-5'>
            <h5 className="text-xl my-5 font-semibold text-black dark:text-white">
            Upcoming Appointments
          </h5>
            
            <TableTwo />
         </div>
            
         
            <ChartThree />
               
        </div>
       
      </div>
    </>
  );
};

export default Dashboard;
