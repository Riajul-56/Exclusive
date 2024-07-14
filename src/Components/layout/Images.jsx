import React from 'react'

const Images = ({ src, alt, className }) => {
  return (
    <img className={className} src={src} alt={alt} />
  )
}

export default Images
