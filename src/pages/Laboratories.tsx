// import { useState } from 'react';
// import Breadcrumb from '../components/Breadcrumb';
// import BreadcrumbLab from '../components/BreadcrumbLab';
// import LabPharmarcyCard from '../components/LabPharmarcyCard';

// const Laboratories = () => {
//   const cardContent = [
//     {
//       tittle: 'Lancet Labs',
//       text: 'Quality Drugs for a',
//       textOther: 'quality life',
//       id: 'Store ID: 569832',
//       more: 'View Tests',
//       image:
//         'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689501433/image_27_clsuh2.png',
//     },
//   ];
//     const [active, setActive] = useState(false);
//   return (
//     <>
//       {active? (<BreadcrumbLab pageName="Laboratories" />
//       <div className=" grid grid-cols-2 gap-2 p-2 md:grid-cols-5 md:p-6">
//         {cardContent.map((data) => (
//           <LabPharmarcyCard
//             tittle={data.tittle}
//             text={data.text}
//             textOther={data.textOther}
//             id={data.id}
//             more={data.more}
//             image={data.image}
//           />
//         ))}
//       </div>) :(
//         (<BreadcrumbLab pageName="Laboratories" />
//       )
// }

//       {/* <!-- ====== Calendar Section End ====== --> */}
//     </>
//   );
// };

// export default Laboratories;

import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import BreadcrumbLab from '../components/BreadcrumbLab';
import LabPharmarcyCard from '../components/LabPharmarcyCard';
import { Card, List } from 'antd';

const Laboratories = () => {
  const cardContent = [
    {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689501433/image_27_clsuh2.png',
    },
  ];
  const cardContentClicked = [
    {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689510511/image_27_1_gangoi.png',
    },
  ];
  const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
  const labTest =[
     'Blood Tests',
     'Urine Tests',
     'Imaging Tests',
     'Microbiology Tests',
     'Bronchodilators',
     'Pathology Tests',
     'Genetic',


  ];
  const [active, setActive] = useState(true);

  return (
    <>
      {active ? (
        <>
          <Breadcrumb pageName="Laboratories" />
          <div
            className="grid grid-cols-2 gap-2 p-2 md:grid-cols-5 md:p-6"
            onClick={() => setActive(!active)}
          >
            {cardContent.map((data) => (
              <LabPharmarcyCard
                tittle={data.tittle}
                text={data.text}
                textOther={data.textOther}
                id={data.id}
                more={data.more}
                image={data.image}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <BreadcrumbLab pageName="Laboratories" />
          <div className=" h-[50px] hidden md:flex items-center justify-between space-x-2 overflow-x-hidden">
            <button className="text-white font-bold h-full w-[100px] rounded-[50px] bg-secondary ">
              All
            </button>
            {
              labTest.map((index)=>
               <button className="hover:bg-secondary hover:text-white text-secondary font-bold h-full w-[157px] rounded-[50px] border-secondary border-2 ">
              {index}
            </button>
              )
           
}
           





          </div>
          <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-5 md:p-6">
            {cardContentClicked.map((data) => (
              <LabPharmarcyCard
                tittle={data.tittle}
                text={data.text}
                textOther={data.textOther}
                id={data.id}
                more={data.more}
                image={data.image}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Laboratories;
