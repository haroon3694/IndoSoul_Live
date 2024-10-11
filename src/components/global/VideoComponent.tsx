const VideoComponent = ({ video, header, headerColor }: { video: string, header?: string, headerColor?: string }) => {
  return (
    <div className='w-full px-0 md:px-20 lg:px-32 xl:px-40'>
      { header ? <h1 className='' style={{ color: `var(--${headerColor})` }}>{header}</h1> : null }
      <video src={video} muted autoPlay loop={true} className='rounded-sm w-full object-cover md:object-contain h-[50vh] md:h-auto max-h-screen'></video>
    </div>
  )
}

export default VideoComponent