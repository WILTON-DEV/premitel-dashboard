import Breadcrumb from '../components/Breadcrumb';

import TableTwo from '../components/TableTwo';

const Prescription = () => {
  return (
    <>
      <Breadcrumb pageName="Prescription" />

      <div className="flex flex-col gap-10">
      
        <TableTwo />
       
      </div>
    </>
  );
};

export default Prescription;
