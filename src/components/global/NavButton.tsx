const NavButton = ({ btnText, styles, bgColor }: { btnText: string, styles: string, bgColor: string }) => {
  return (
    <button style={{ backgroundColor: `var(--${bgColor})`}} className={`rounded-full px-6 pt-2 pb-1 font-bebasNeue font-bold text-xl leading-none active:scale-95 transition-all duration-500 ease-in-out text-nowrap tracking-wide ${styles}`}>{btnText}</button>
  )
}

export default NavButton