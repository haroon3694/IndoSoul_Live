import btnIcon from '../../assets/icons/buttonIconBlack.svg'

const PrimaryButton = ({ btnText, onClick, shadow, styles, shadowStyles }: { btnText: string, onClick?: () => void, shadow?: boolean, styles?: string, shadowStyles?: string }) => {
  return (
    <div className='relative active:scale-95 transition-all duration-150 ease-in-out'>
      <button onClick={onClick} className={`font-bebasNeue relative z-10 flex justify-center items-center gap-1 md:gap-3 uppercase py-1.5 px-16 md:px-20 rounded-full transition-all duration-500 ease-in-out ${styles}`}>
        <p className='mt-1 leading-none'>{btnText}</p>
        <span className='absolute top-1/2 -translate-y-1/2 right-2'>
          <img src={btnIcon} className="w-5" alt="" />
        </span>
      </button>
      {shadow ? <div className={`absolute w-full h-full opacity-30 rounded-full top-3 left-3 z-0 ${shadowStyles}`} /> : null}
    </div>
  )
}

export default PrimaryButton