import React from 'react';
import { Image, Input, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';



function SinginForm() {
  
   let Nativget = useNavigate();

   const goTOSingUp = () =>{
     Nativget('/signup')
   }

   const goToHome = () => {
    Nativget('/home')
   }


  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <section className='w-full bg-black-mood h-[100vh]'>
        <div className=' h-[100vh]  p-10 rounded-3xl flex space-x-3 max-w-[1200px] mx-auto justify-center items-center flex-col md:flex-row'>
          {/* left section */}
          <div className='md:flex-1 w-full'>
            <h1 className="text-5xl font-bold text-sky-300 hidden md:block">
              Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'> Nexora</span>
            </h1>

            <p className='py-4 text-lg text-black-mood-second-text-color w-[80%] hidden md:block'>Sign in and start your journey with Nexora social media platform</p>
            <Image
              isBlurred
              alt="HeroUI Album Cover"
              className="m-5 mx-auto hidden md:block"
              src="https://heroui.com/images/album-cover.png"
              width={240}
            />
          </div>
          {/* right sections */}
          <div className='md:flex-1 md:max-w-[500px] w-full'>
            <div>
              <form action="" className=''>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4 flex-col">

                <Input label="user name or Phone Number" type="email" />
                <Input
                  className="max-w-full text-white-mode-text-color placeholder:text-placeholder-color bg-white-mode rounded-xl"
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

                <Button onClick={goToHome} color="primary" size='lg' className='text-2xl'>Sign In</Button>;

                <div className='text-center flex gap-2 items-center'>
                  <div className='border-t-1  border-black-mood-text-color flex-1'></div>
                  <p className='text-black-mood-text-color text-xl font-bold'>or</p>
                  <div className='border-t-1 border-black-mood-text-color flex-1'></div>
                </div>

                <div className='text-center'>
                  <a href="#" className='text-center text-link-color text-xl'>forget password  ?</a>
                  <div className='mt-5 flex gap-2 items-center justify-center flex-col md:flex-row'>
                    <Button onPress={onOpen} className='text-xl flex-1 bg-second-buuton w-full py-3 md:py-0'>
                     Sign In With <i class="fa-brands fa-google">         
                     </i>
                    </Button>
                      {/* modal */}
                      <Modal
        backdrop="opaque"
        className='bg-black-mood-second-color'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
                      >
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader className="flex flex-col gap-1 text-black-mood-second-text-color font-bold">Select Your Google Account</ModalHeader>
                              <ModalBody>
                                <a href='#' className='text-black-mood-second-text-color'>
                                  test.user001@gmail.com
                                </a>
                                <a href='#' className='text-black-mood-second-text-color'>
                                 sandbox.account007@gmail.com
                                </a>
                                <a href='#' className='text-black-mood-second-text-color'>
                                 fake.email.dev@gmail.com
                                </a>
                              </ModalBody>
                              <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                  Close
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>

                      <Button className='text-xl flex-1 bg-button-color w-full py-3 md:py-0 text-black-mood-text-color' onClick={goTOSingUp}>Sign Up</Button>

                  </div>
                </div>

              </div>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinginForm;