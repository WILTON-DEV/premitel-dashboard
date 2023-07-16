import Breadcrumb from '../components/Breadcrumb';
import Filter from '../components/Filter';
import Search from "../components/Search";
import Button from "../components/Button";
import PatientsTable from '../components/PatientsTable';

const Patients = () => {
  return (
    <>
      <Breadcrumb pageName="Patients" />
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-10 flex-[1.2]'>
        <Filter />
        <Search />
        </div>
        <div className='flex-[1] flex justify-end'>
          <Button title ="Add Patients" />
        </div>
      </div>

      <div className='mt-10' >
        <PatientsTable />
      </div>
      
     
      {/* <!-- ====== Calendar Section End ====== --> */}
    </>
  );
};

export default Patients;
