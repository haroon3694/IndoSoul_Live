import PrimaryButton from '../global/PrimaryButton'

const Requirement = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-24 md:mb-44'>
      <h1 className='text-xl font-bold mb-5 text-center px-2'>Have a musical requirement? Get in touch with our <span>team!</span></h1>
      <PrimaryButton btnText='click here' styles='text-2xl tracking-[2px] bg-[#0FA677] text-white' shadow shadowStyles='bg-[#0FA677]' />
    </div>
  )
}

export default Requirement