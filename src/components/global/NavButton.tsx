const NavButton = ({ btnText, styles, bgColor }: { btnText: string, styles: string, bgColor: string }) => {
  return (
    <button style={{ backgroundColor: `var(--${bgColor})`}} className={`rounded-full px-5 pt-1 pb-0.5 font-bebasNeue text-xl active:scale-95 transition-all duration-500 ease-in-out ${styles}`}>{btnText}</button>
  )
}

export default NavButton