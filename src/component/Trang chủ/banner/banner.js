import React from "react";
import { useEffect, useState } from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
import axios from 'axios'

const Banner = () => {
  const [banners, setBanners] = useState([]) ;
  
  useEffect(()=>{
    axios.get('https://photo.azurecloud.vn/api/v1/banners/list-banner-active')
    .then(json =>{
      // console.log(json.data.data.banners.data)
      let b = json.data.data.banners.data;
      setBanners(b);
    })
  },[]);
  
    return(
      <MDBCarousel showControls showIndicators className="banner">
          {banners.map((banner,index) => (
            <MDBCarouselItem
              className='w-100 d-block'
              itemId={banner.id}
              src={banner.image}
              alt='...'
              key={index+1}
              
              />
          ))}
      </MDBCarousel>
    )
}

export default Banner;