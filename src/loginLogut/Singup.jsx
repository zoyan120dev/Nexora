import React from 'react'
import { Input } from "@heroui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { DateRangePicker } from "@heroui/react";
import { RadioGroup, Radio } from "@heroui/react";
import { useNavigate } from 'react-router-dom';
import {Button} from "@heroui/react";

function Signup() {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible)
  return (
    <>
      <section className='w-full bg-black-mood md:h-[100vh]  md:flex items-center'>
        <div className='flex flex-col md:h-[80vh] md:min-w-[800px] justify-center md:justify-baseline mx-auto bg-black-mood-second-color md:rounded-2xl shadow-xl h-[100vh]'>
          <div className='text-center pt-7'>
            <h1 className='text-4xl  md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'>Nexora</h1>
            <p className='py-2 text-black-mood-second-text-color text-2xl'>Create an Account</p>
          </div>
          <form action="" className='w-[70%] mx-auto pt-7'>
            <div className='grid grid-cols-2 gap-3'>
              <Input label="first name" type="text" className='text-placeholder-color-black' />
              <Input label="last name" type="text" className='text-placeholder-color-black' />
              <Input label="Email or Phone Number" type="email" className='text-placeholder-color-black'/>

              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <DateRangePicker label="Date of birth ?" visibleMonths={2} />
              </div>

              <Input
                className="max-w-full text-placeholder-color-black bg-black-mood-bg-color rounded-xl col-span-2"
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

              <Input
                className="max-w-full text-placeholder-color-black bg-black-mood-bg-color rounded-xl col-span-2"
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
                label="confrom password"
                placeholder="confrom password"
                type={isVisible ? "text" : "password"}
                variant="bordered"
              />

              <RadioGroup label="Gender" orientation="horizontal" className='bg-black-mood-bg-color p-2 col-span-2 rounded-2xl'>
                <Radio value="buenos-aires">Female</Radio>
                <Radio value="sydney" className='ml-3'>Male</Radio>
                <Radio value="san-francisco" className='ml-3'>Custom</Radio>
              </RadioGroup>
            </div>
            <p className='text-black-mood-text-color mt-3 leading-tight'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione optio neque quidem excepturi non omnis.
            </p>
            <Button color="primary" className='w-[50%] mx-auto flex justify-center mt-3 font-bold text-lg'>Sign Up</Button>;
          </form>
            <p className="text-center mt-4 text-black-mood-text-color">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/")}
                className="text-link-color font-bold cursor-pointer"
              >
                Sign In
              </button>
            </p>
        </div>
      </section>
    </>
  )
}

export default Signup;