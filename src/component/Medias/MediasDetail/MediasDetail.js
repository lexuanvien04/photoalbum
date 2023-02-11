import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Header from "../../Layout/header";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import Footer from "../../Layout/Footer";
import StarsRating from 'react-star-rate';

const MediasDetail = () => {
    let params = useParams();
    const [details, setDetails]= React.useState();

    React.useEffect(()=>{
        let id = params.id;
        axios.get('https://photo.azurecloud.vn/api/v1/medias/detail/'+id)
        .then(json=>{
            console.log(json.data.data.media)
            let medias = json.data.data.media;
            setDetails(medias);
           
        })
       },[]);

    return(
        <div>
            {/* Ten doanh nghiep: {detail?.name}
            <br/>
            So dien thoai: {detail?.phone} */}
            <div className='business'>
            <ScrollToTop/>
            <Header/>
            <div className='title-business'>
                Danh sách doanh nghiệp
            </div>
            <div className='business-content'>
            {/* {details.map((detail) => ( */}
                <MDBContainer>
                    <MDBRow>
                        
                        <MDBCol size={5}>
                            <div className="img-detail">
                                <img src={details?.path} alt="" key=""/>
                            </div>
                        </MDBCol>
                        <MDBCol size={7}>
                            <div className="detail">
                                    <div className="title-detail">
                                        <p>{details?.name}</p>
                                        <div className="icon-detail">
                                            <i class="far fa-star fa-2x text-warning" aria-hidden="true"></i>
                                            <i class="far fa-heart fa-2x text-danger cursor-pointer" aria-hidden="true"></i>
                                            <i class="fas fa-share-alt fa-2x" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="rate-detail">
                                        <div class="text-warning">
                                        <StarsRating 
                                    value={details?.rating}
                                />
                                            ({details?.rating})
                                        </div>
                                    </div>
                                    <div className="descriptiion">
                                        <span>Mô tả</span>
                                        <p>{details?.description}</p>
                                    </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                {/* ))} */}
            </div>
            <Footer/>
        </div>
        </div>
    );
}

export default MediasDetail;