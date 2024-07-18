import btnIcon from '../../assets/icons/buttonIconBlack.svg'

const CollaborateButton = ({ text, styles, onClick }: { text: string, styles?: string, onClick?: () => void }) => {
    return (
        <div className='bg-gradient-to-r from-[#96D312] to-[#E92F2F] p-[2px] rounded-lg group hover:bg-transparent' onClick={onClick}>
            <button className={`${styles} px-3 md:px-12 py-2 md:py-4 flex justify-center items-center gap-3 bg-[#FCFBF6] group-hover:bg-gradient-to-r from-[#96D312] to-[#E92F2F] transition-all duration-500 ease-in-out rounded-[6px] font-clashdisplay uppercase font-semibold tracking-[3px] text-md`}>
                {text}
                <span>
                    <img src={btnIcon} className="w-4" alt="" />
                </span>
            </button>
        </div>
    )
}

export default CollaborateButton