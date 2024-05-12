import btnIcon from '../../assets/icons/btnIcon.svg'

const PrimaryButton = ({ btnText }: { btnText: string }) => {
  return (
    <button className="font-bold flex items-center gap-3 text-white bg-[#1F1F1F] hover:bg-[#0c0c0c] text-xs xl:text-sm py-2 lg:py-3 px-4 lg:px-6 xl:px-10 rounded-lg tracking-wider transition-all duration-500 ease-in-out">{btnText}<span><img src={btnIcon} className="w-4" alt="" /></span></button>
  )
}

export default PrimaryButton