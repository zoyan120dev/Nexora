import React from 'react'
import { Image } from "@heroui/react";
import { Input } from "@heroui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Button } from "@heroui/react";


function SinginForm() {

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible)
  return (
    <>
      <section className='w-full bg-gray-800 h-[100vh]'>
        <div className=' h-[100vh]  p-10 rounded-3xl flex space-x-3 max-w-[1200px] mx-auto justify-center items-center flex-col md:flex-row'>
          {/* left section */}
          <div className='md:flex-1 w-full'>
            <h1 className="text-5xl font-bold text-sky-300">
              Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'> Nexora</span>
            </h1>

            <p className='py-4 text-lg text-gray-400 w-[80%]'>Sign in and start your journey with Nexora social media platform</p>
            <Image
              isBlurred
              alt="HeroUI Album Cover"
              className="m-5 mx-auto "
              src="https://heroui.com/images/album-cover.png"
              width={240}
            />
          </div>
          {/* right sections */}
          <div className='md:flex-1 md:max-w-[500px] max-w-full'>
            <form action="">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 flex-col">

                <Input label="Email or Phone Number" type="email" />
                <Input
                  className="max-w-full text-gray-500 placeholder-gray-300 bg-white rounded-xl"
                  endContent={
                    <button
                      aria-label="toggle password visibility"
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <AiFillEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                />

                <Button color="primary" size='lg' className='text-2xl'>Sign In</Button>;

                <div className='text-center flex gap-2 items-center'>
                  <div className='border-t-1  border-gray-300 flex-1'></div>
                  <p className='text-white text-xl font-bold'>or</p>
                  <div className='border-t-1 border-gray-300 flex-1'></div>
                </div>

                <div className='text-center'>
                  <a href="#" className='text-center text-blue-600 text-xl'>forget password  ?</a>
                  <div className='mt-5 flex gap-2 items-center justify-center'>
                    <Button className='text-xl flex-1 bg-white'>
                     Sign In With <i class="fa-brands fa-google"></i>
                    </Button>
                      
                      <Button className='flex-1 font-bold text-xl text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'>Sing Up</Button>

                  </div>
                </div>

              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinginForm;