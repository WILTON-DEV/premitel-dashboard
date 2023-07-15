import { Link } from 'react-router-dom';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import {AiOutlineInfoCircle} from "react-icons/ai";


const Verify = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex h-[100vh] flex-wrap items-center  placeholder:">
       

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Get started</span>
              {/* <p className="mb-9  font-bold text-black dark:text-white sm:text-title-xl2">
                Welcome back to <span className='text-[#C92B27]'>Primetel</span>
              </p> */}

               <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Verify Your Account
              </h2>

              <form>
                

                <div className='flex items-center justify-between p-4 mb-8'>
                  <AiOutlineInfoCircle size="25"/>
                  <p className='ml-4'>If your email exists, a verification link has been sent to  your email. Please check your inbox and spam</p>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Resend"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                

                <div className="mt-6 text-center">
                  <p>
                    Have an account {' '}
                    <Link to="/auth/signup" className="text-primary">
                      Log In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

           <div className="hidden h-full w-full xl:block xl:w-1/2 ">
            <img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689431944/Image_nzuzjq.png" alt="" className='h-full w-full object-cover'/>
            {/* <div className="h-full text-center">
              <img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1689431944/Image_nzuzjq.png" alt="" className='h-full w-full'/>
            </div> */}
          </div>

        </div>
      </div>
    </>
  );
};

export default Verify;
