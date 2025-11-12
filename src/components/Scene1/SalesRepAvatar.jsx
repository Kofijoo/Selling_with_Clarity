import React from 'react'
import salesRepAsia from '../../assets/sales_rep_Asia.png'
import salesRepEurope from '../../assets/sales_rep_Europe.png'
import salesRepNorthAmerica from '../../assets/sales_rep_North_America_blob.png'

function SalesRepAvatar({ character, region, onClick }) {
  const avatarImages = {
    'sales_rep_Europe': salesRepEurope,
    'sales_rep_Asia': salesRepAsia, 
    'sales_rep_North_America_blob': salesRepNorthAmerica
  }

  return (
    <div 
      className={`sales-rep-avatar ${region}`}
      onClick={onClick}
    >
      <div className="avatar-icon">
        <img 
          src={avatarImages[character]} 
          alt={`Sales rep ${region}`}
          className="avatar-image"
        />
      </div>
      <div className="avatar-pulse"></div>
    </div>
  )
}

export default SalesRepAvatar