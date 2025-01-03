const SeasonHeader = ({ text, styles }: { text: string, styles?: string }) => {
  return (
    <h1 className={`w-fit font-bebasNeue font-medium text-4xl md:text-5xl lowercase mx-auto tracking-wide ${styles}`}>{text}</h1>
  )
}

export default SeasonHeader