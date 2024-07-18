const SeasonHeader = ({ text, styles }: { text: string, styles?: string }) => {
  return (
    <h1 className={`gradient-text w-fit font-bebasNeue text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl lowercase mx-auto tracking-wide ${styles}`}>{text}</h1>
  )
}

export default SeasonHeader