import btnIcon from '../../assets/icons/btnIcon.svg'

const CollaborateButton = ({ text }: { text: string }) => {
    return (
        <button className=''>
            {text}
            <span>
                <img src={btnIcon} className="w-4" alt="" />
            </span>
        </button>
    )
}

export default CollaborateButton