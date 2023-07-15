import { Link } from 'react-router-dom';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import { GiPersonInBed } from 'react-icons/gi';

const Category = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="placeholder: flex h-[112vh] flex-wrap  items-center ">
          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Get started</span>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Choose how you’d like to get started
              </h2>

              <form>
                <div className=" mb-8 flex h-[10rem]  flex-col justify-between">
                  <div className="r0w-1 flex flex-wrap justify-between  ">
                    <div className="child1 flex h-16 w-[45%] items-center justify-center border-x-graydark border-2 rounded-md m-1 ">
                      <div className="mr-4 flex h-3/4  items-center justify-center">
                        <img
                          src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689456762/Vector_1_no6gzx.png"
                          alt=""
                          className="h-full w-full   object-contain "
                        />
                      </div>

                      <p>Patient</p>
                    </div>
                    <div className="child1 flex  h-16 w-[45%] items-center justify-center border-x-graydark border-2 rounded-md m-1 ">
                      <div className="mr-4 flex h-3/4  items-center justify-center">
                        <img
                          src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689457162/Group_ve7ybl.png"
                          alt=""
                          className="h-full w-full   object-contain "
                        />
                      </div>

                      <p>Provider</p>
                    </div>
                    <div className="child1 flex h-16 w-[45%] items-center justify-center border-x-graydark border-2 rounded-md m-1 ">
                      <div className="mr-4 flex h-3/4  items-center justify-center">
                        <img
                          src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689457162/Mask_group_xnxno1.png"
                          alt=""
                          className="h-full w-full   object-contain "
                        />
                      </div>

                      <p>Pharmacy</p>
                    </div>
                    <div className="child1 flex h-16 w-[45%] items-center justify-center border-x-graydark border-2 rounded-md m-1 ">
                      <div className="mr-4 flex h-3/4  items-center justify-center">
                        <img
                          src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689457162/icomoon-free_lab_zqcydl.png"
                          alt=""
                          className="h-full w-full   object-contain "
                        />
                      </div>

                      <p>Labaratory</p>
                    </div>

                    
                  </div>
                </div>
                <div className="mb-5">
                  <input
                    type="submit"
                    value="Get Started"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

              </form>
            </div>
          </div>

          <div className="hidden h-full w-full xl:block xl:w-1/2 ">
            <img
              src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689431944/Image_nzuzjq.png"
              alt=""
              className="h-full w-full object-cover"
            />
            {/* <div className="h-full text-center">
              <img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689431944/Image_nzuzjq.png" alt="" className='h-full w-full'/>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
