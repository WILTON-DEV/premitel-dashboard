import CardContentProps from "../types";


function LabPharmarcyCard({ tittle, text, textOther, id, more, image }: CardContentProps) {
  return (
    <div className="flex h-[230px] w-[163px] flex-col items-center justify-between rounded-[10px] border-2 border-[#E6EFFB] bg-white p-2 shadow-md">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[10px] bg-primary ">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        {' '}
        <h2 className="text-2xl text-[#2D2D2D] ">{tittle}</h2>
        <p className="text-center ">
          {text}
          <br />
          {textOther}
        </p>
        <p>{id}</p>
      </div>
      <div className="flex items-center justify-between   ">
        <p className="mr-2">{more}</p>
        <img
          src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689501128/Arrow_-_Right_rhi54i.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default LabPharmarcyCard;
