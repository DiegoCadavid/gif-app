import React from 'react'

export const GifGridItem = ({ title, url, link}) => {

  const HandleClick = () => {
    window.open(link);
  }

  return (
    <div className='gridItem' onClick={HandleClick}>
        <img src={url} alt={title} />
        { title != "" ? (<p> {title} </p>) : (<p> ... </p>) }
    </div>
  )
}
