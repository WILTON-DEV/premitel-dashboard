import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import LabPharmarcyCard from '../components/LabPharmarcyCard';
import BreadcrumbLab from '../components/BreadcrumbLab';

const Pharmacy = () => {
  const cardContent = [
    {
      tittle: 'K-Pharma', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Meds',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689521215/image_27_8_reqil0.png',
    },
       {
      tittle: 'K-Pharma', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Meds',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689521215/image_27_8_reqil0.png',
    },
       {
      tittle: 'K-Pharma', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Meds',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689521215/image_27_8_reqil0.png',
    },
       {
      tittle: 'K-Pharma', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Meds',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689521215/image_27_8_reqil0.png',
    },
       {
      tittle: 'K-Pharma', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Meds',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689521215/image_27_8_reqil0.png',
    },
       {
      tittle: 'K-Pharma', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Meds',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689521215/image_27_8_reqil0.png',
    },
       {
      tittle: 'K-Pharma', // Corrected typo 'tittle' to 'title'
      text: 'Quality Drugs for a',
      textOther: 'quality life',
      id: 'Store ID: 569832',
      more: 'View Meds',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689521215/image_27_8_reqil0.png',
    },
  ];
  const cardContentClicked = [
    {
      tittle: 'Cephalosporins', // Corrected typo 'tittle' to 'title'
      text: 'Green Capsules',
      textOther: '10mg, 20mg, 30mg',
      id: 'Drug ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689519820/image_27_2_hsdxit.png',
    },
       {
      tittle: 'Cephalosporins', // Corrected typo 'tittle' to 'title'
      text: 'Green Capsules',
      textOther: '10mg, 20mg, 30mg',
      id: 'Drug ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689519820/image_27_2_hsdxit.png',
    },
       {
      tittle: 'Cephalosporins', // Corrected typo 'tittle' to 'title'
      text: 'Green Capsules',
      textOther: '10mg, 20mg, 30mg',
      id: 'Drug ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689519820/image_27_2_hsdxit.png',
    },
       {
      tittle: 'Cephalosporins', // Corrected typo 'tittle' to 'title'
      text: 'Green Capsules',
      textOther: '10mg, 20mg, 30mg',
      id: 'Drug ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689519820/image_27_2_hsdxit.png',
    },
       {
      tittle: 'Cephalosporins', // Corrected typo 'tittle' to 'title'
      text: 'Green Capsules',
      textOther: '10mg, 20mg, 30mg',
      id: 'Drug ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689521216/image_27_4_tnvzbd.png',
    },
       {
      tittle: 'Cephalosporins', // Corrected typo 'tittle' to 'title'
      text: 'Green Capsules',
      textOther: '10mg, 20mg, 30mg',
      id: 'Drug ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689521215/image_27_7_uipoas.png',
    },
       {
      tittle: 'Cephalosporins', // Corrected typo 'tittle' to 'title'
      text: 'Green Capsules',
      textOther: '10mg, 20mg, 30mg',
      id: 'Drug ID: 569832',
      more: 'View Tests',
      image:
        'https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689521215/image_27_5_dkpiit.png',
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
          <Breadcrumb pageName="Pharmacy View" />
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
          <BreadcrumbLab pageName="Pharmacies" />
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

export default Pharmacy;
