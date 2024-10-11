import btnIcon from '../../assets/icons/playIconBlack.svg'
import btnIconWhite from '../../assets/icons/playIconWhite.svg'

const WatchButton = ({ btnText, onClick, styles, bgColor, btnColor }: { btnText: string, onClick?: () => void, bgColor?: string, styles?: string, btnColor?: string | null }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: `var(--${bgColor})` }} className={`font-bebasNeue relative flex justify-center items-center gap-1 md:gap-3 font-semibold uppercase text-md xl:text-lg py-1.5 w-48 rounded-full tracking-[2px] transition-all duration-500 ease-in-out ${styles}`}>
      <p className='mt-1 leading-none'>{btnText}</p>
      <span className='absolute top-1/2 -translate-y-1/2 right-2'>
        <img src={ btnColor === 'white' ? btnIconWhite : btnIcon} className="w-5" alt="" />
      </span>
    </button>
  )
}

export default WatchButton