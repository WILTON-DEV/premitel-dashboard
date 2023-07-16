import { cardDataInterface } from "../data/Data";

const CardOne = ({ title, upDowns, totalNumber, icon }:cardDataInterface) => {

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-2 shadow-default dark:border-strokedark dark:bg-boxdark flex space-x-2 items-start">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {icon}
      </div>

      <div className="mt-0 ">
        <div>
          <span className="text-sm font-medium">{ title }</span>
          <h4 className="mt-2 text-title-md font-bold text-black dark:text-white">
            {totalNumber}
          </h4>
          <span className="mt-2 text-sm font-medium rounded-md bg-cardbg text-meta-3 px-2">
          {upDowns}% from last week
         
        </span>
        </div>

        
      </div>
    </div>
  );
};

export default CardOne;
