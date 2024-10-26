import PrimaryButton from '../global/PrimaryButton'

const Booking = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-24'>
      <PrimaryButton btnText='click here' styles='text-2xl tracking-[2px] bg-[#C48F41] text-black' shadow shadowStyles='bg-[#C48F41]' />
      <h1 className='text-xl font-bold text-center px-2 mt-10'>To book us for an <span>indie</span> performance!</h1>
    </div>
  )
}

export default Booking