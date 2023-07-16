import Breadcrumb from '../components/Breadcrumb';
import Filter from '../components/Filter';
import Search from "../components/Search";
import Button from "../components/Button";
import AppointmentsTable from "../components/AppointmentsTable";

const Calendar = () => {
  return (
    <>
      <Breadcrumb pageName="Appointment" />
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-10 flex-[1.2]'>
        <Filter />
        <Search />
        </div>
        <div className='flex-[1] flex justify-end'>
          <Button title = "Appointment" />
        </div>
      </div>

      <div className='mt-10'>
        <AppointmentsTable />
      </div>
    </>
  );
};

export default Calendar;
