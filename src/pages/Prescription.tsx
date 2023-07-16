import Breadcrumb from '../components/Breadcrumb';
import Filter from '../components/Filter';
import Search from "../components/Search";
import Button from "../components/Button";
import PrescriptionsTable from '../components/PrescriptionsTable';

const Prescription = () => {
  return (
    <>
      <Breadcrumb pageName="Prescription" />
 <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-10 flex-[1.2]'>
        <Filter />
        <Search />
        </div>
        <div className='flex-[1] flex justify-end'>
          <Button title ="Add Prescription" />
        </div>
      </div>

      <div className='mt-10' >
        <PrescriptionsTable />
      </div>
      
    </>
  );
};

export default Prescription;
