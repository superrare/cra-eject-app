import React from 'react'

const setSize = (size: string | number): string => {
  if (typeof size === 'number') return `${size}px`
  if (size.includes('px')) return size
  return `${size}px`
}

const UpRightArrowIcon = ({
  height,
  width
}: {
  height: string | number
  width?: string | number
}): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#BDBDBD"
      height={setSize(height)}
      viewBox="0 0 384 512"
    >
      <path d="M328 96h24v24V360v24H304V360 177.9L81 401l-17 17L30.1 384l17-17 223-223H88 64V96H88 328z" />
    </svg>
  )
}

export default UpRightArrowIcon
