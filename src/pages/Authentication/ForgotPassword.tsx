import { Link } from 'react-router-dom';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import {AiOutlineInfoCircle} from "react-icons/ai";


const ForgotPassword = () => {
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
                Forgot <span className='text-[#C92B27]'>Password</span>
              </h2>

              <form>
                <div className="mb-12">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className='flex items-center justify-between p-4 mb-8'>
                  <AiOutlineInfoCircle size="25"/>
                  <p className='ml-4'>If your email exists, a Reset Password link has been sent to  your email. Please check your inbox and spam</p>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Reset"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                

                <div className="mt-6 text-center">
                  <p>
                    Back to{' '}
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

export default ForgotPassword;
