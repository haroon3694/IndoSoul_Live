import btnIcon from '../../assets/icons/btnIcon.svg'

const PrimaryButton = ({ btnText, onClick, bgColor, styles }: { btnText: string, onClick?: () => void, bgColor?: string, styles?: string }) => {
  return (
    <button onClick={onClick} className={`font-clashdisplay flex justify-center items-center gap-3 text-white bg-transparent font-semibold uppercase ${bgColor ? `${bgColor}` : 'hover:bg-[#A90A0A]'} text-xs xl:text-sm py-2.5 md:py-3 px-2.5 md:px-6 xl:px-8 rounded-lg tracking-[3px] transition-all duration-500 ease-in-out ${styles}`}>
      {btnText}
      <span>
        <img src={btnIcon} className="w-4" alt="" />
      </span>
    </button>
  )
}

export default PrimaryButton