import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  pageName: string;
}
const BreadcrumbLab = ({ pageName }: BreadcrumbProps) => {

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b-2 border-body">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <div>
        <div className="relative">
          <button className="absolute top-1/2 left-0 -translate-y-1/2">
            <svg
              className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                fill=""
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                fill=""
              />
            </svg>
          </button>

          <input
            type="text"
            placeholder="Type to search..."
            className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
          />
        </div>
      </div>
      <nav >
        <ol className="flex items-center gap-2 mb-2">
          <li>
            <Link to="/">Dashboard / view Labaratory /</Link>
          </li>
          <li className="text-primary">{pageName}</li>
        </ol>
        <ol className="flex flex-col items-end justify-end ">
          <li className='flex  items-center justify-center'><span><img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689509118/eva_email-fill_dqkved.png" alt="" className='mr-2'/></span> lancet@labs.com</li>
          <li className='flex  items-center justify-center'><span><img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689509118/ic_round-phone_vldavk.png" alt="" className='mr-2' /></span> 2550876214523</li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadcrumbLab;
