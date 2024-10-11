const SeasonHeader = ({ text, styles }: { text: string, styles?: string }) => {
  return (
    <h1 className={`w-fit font-bebasNeue text-4xl md:text-5xl lowercase mx-auto tracking-widest ${styles}`}>{text}</h1>
  )
}

export default SeasonHeader