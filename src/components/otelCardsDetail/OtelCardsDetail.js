import React from 'react'
import './OtelCardsDetail.scss'

const OtelCardsDetail = ({ name }) => {
  return (
    <div className='otelCardsDetail'>
      <p>{`Kart Detayları - ${name}`} </p>
      <h>Başlık</h>
    </div>
  )
}

export default OtelCardsDetail