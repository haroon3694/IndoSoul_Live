import React from 'react'

interface PageSeparatorProps {
  separator: string;
}

const SVGPageSeparator: React.FC<PageSeparatorProps> = ({ separator }) => {
  return (
    <div className='w-full my-14 md:my-28 fflex justify-center items-center'>
      <img src={separator} className='w-full' alt="" />
    </div>
  )
}

export default SVGPageSeparator;