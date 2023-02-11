import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Header from '../Layout/header';
import Footer from '../Layout/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const BusinessDetail = () => {
    let params = useParams();
    const [detail, setDetail]= React.useState();

    React.useEffect(()=>{
        let id = params.id;
        axios.get('https://photo.azurecloud.vn/api/v1/businesses/detail/'+id)
        .then(res=>{
            let business = res.data.data.bussiness;
            setDetail(business);
           
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
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size={5}>
                            <div className="img-detail">
                                <img src="https://minio.azurecloud.vn/album/upload/photos/album/Phi%20Long%20chi%20nh%C3%A1nh%20H%C3%A0m%20Nghi2021/12/1640160756418picture-61636788923j.png" alt=""/>
                            </div>
                        </MDBCol>
                        <MDBCol size={7}>
                            <div className="detail">
                                    <div className="title-detail">
                                        <p>Hair</p>
                                        <div className="icon-detail">
                                            <i class="far fa-star fa-2x text-warning" aria-hidden="true"></i>
                                            <i class="far fa-heart fa-2x text-danger cursor-pointer" aria-hidden="true"></i>
                                            <i class="fas fa-share-alt fa-2x" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="rate-detail">
                                        <div class="text-warning">
                                            <i class="fas fa-star" aria-hidden="true"></i>
                                            <i class="fas fa-star" aria-hidden="true"></i>
                                            <i class="fas fa-star" aria-hidden="true"></i>
                                            <i class="far fa-star" aria-hidden="true"></i>
                                            <i class="far fa-star" aria-hidden="true"></i> 
                                            (3)
                                        </div>
                                    </div>
                                    <div className="descriptiion">
                                        <span>Mô tả</span>
                                        <p>abc</p>
                                    </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
            </div>
            <Footer/>
        </div>
        </div>
    );
}

export default BusinessDetail;