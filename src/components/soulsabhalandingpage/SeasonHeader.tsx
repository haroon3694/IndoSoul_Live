const SeasonHeader = ({ text, styles }: { text: string, styles?: string }) => {
  return (
    <h1 className={`gradient-text w-fit font-bebasNeue text-8xl lowercase mx-auto tracking-wide ${styles}`}>{text}</h1>
  )
}

export default SeasonHeader