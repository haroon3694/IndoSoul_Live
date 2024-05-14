import btnIcon from '../../assets/icons/btnIcon.svg'

const PrimaryButton = ({ btnText }: { btnText: string }) => {
  return (
    <button className=" font-clashdisplay flex justify-center items-center gap-3 text-white bg-[#1F1F1F] hover:bg-[#0c0c0c] text-sm xl:text-sm py-3 px-6 xl:px-10 rounded-lg tracking-[3px] transition-all duration-500 ease-in-out">{btnText}<span><img src={btnIcon} className="w-4" alt="" /></span></button>
  )
}

export default PrimaryButton