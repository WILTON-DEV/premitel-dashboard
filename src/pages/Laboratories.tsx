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
        {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689501433/image_27_clsuh2.png',
    },
        {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689501433/image_27_clsuh2.png',
    },
        {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689501433/image_27_clsuh2.png',
    },
        {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689501433/image_27_clsuh2.png',
    },
        {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689501433/image_27_clsuh2.png',
    },
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
        {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689510511/image_27_1_gangoi.png',
    },
        {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689510511/image_27_1_gangoi.png',
    },
        {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689510511/image_27_1_gangoi.png',
    },
        {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689510511/image_27_1_gangoi.png',
    },
        {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689510511/image_27_1_gangoi.png',
    },
        {
      tittle: 'Lancet Labs', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689510511/image_27_1_gangoi.png',
    },
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

  const labTest = [
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
          <Breadcrumb pageName="Laboratory View" />
          <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-5 md:p-6 bg-white">
            {cardContent.map((data) => (
              <div onClick={() => setActive(!active)}>
                <LabPharmarcyCard
                  tittle={data.tittle}
                  text={data.text}
                  textOther={data.textOther}
                  id={data.id}
                  more={data.more}
                  image={data.image}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <BreadcrumbLab pageName="Laboratories" />
          <div className=" hidden h-[50px] items-center justify-between space-x-2 overflow-x-hidden md:flex mb-4">
            <button className="h-full w-[100px] rounded-[50px] bg-secondary font-bold text-white ">
              All
            </button>
            {labTest.map((index) => (
              <button className="h-full w-[157px] rounded-[50px] border-2 border-secondary p-1 font-bold text-secondary hover:bg-secondary hover:text-white ">
                {index}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-5 md:p-6 bg-white">
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
