import React, { useState, useEffect } from "react";
import { MDBCol,MDBRow, MDBContainer, MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple,
    MDBPagination, 
    MDBPaginationItem, 
    MDBPaginationLink } from "mdb-react-ui-kit";
import Select from 'react-select'
import axios from "axios";
import { Link } from "react-router-dom";


const BusinessList = (props) => {
    const options = [
        { value: "blue", label: "Blue" },
        { value: "yellow", label: "Yellow" }
      ];

    const [items, setItems] = useState([2]);
    
    useEffect(()=>{
        axios.get('https://photo.azurecloud.vn/api/v1/businesses/featured-screen-home-mobile')
        .then(json =>{
            // console.log(json.data.data.dataSection)
          let t = json.data.data.dataSection;
          setItems(t);
          
        })
    },[]);

    return(
        <div className="business-list">
            <MDBContainer>
                <MDBRow>
                    <MDBCol size={8} className="view-business">
                        <h5>Hiển thị 1-6 của 6</h5>
                    </MDBCol>
                    <MDBCol size={4}>
                    <Select
                        options={options}
                    />
                    </MDBCol>
                </MDBRow>
                        
                <MDBRow>
                    {items.map((item, index) => (
                        <MDBCol size='md'>
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <Link to="">
                                    <MDBCardImage src={item.image} fluid alt='...' />
                                    
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </Link>
                            </MDBRipple>
                            <MDBCardBody> 
                                <div class="text-warning">
                                    <i class="fas fa-star" aria-hidden="true"></i>
                                    <i class="fas fa-star" aria-hidden="true"></i>
                                    <i class="fas fa-star" aria-hidden="true"></i>
                                    <i class="far fa-star" aria-hidden="true"></i>
                                    <i class="far fa-star" aria-hidden="true"></i> 
                                    (3)<span class=" btn-pills ml-1 active float-right text-danger">
                                            <i class="far fa-heart fa-1x text-danger cursor-pointer icon-follow" aria-hidden="true"></i>
                                        </span>
                                </div>
                                <MDBCardTitle>{item.name}</MDBCardTitle>
                                <MDBCardText>
                                    This is Business
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    ))}
                </MDBRow>
                <nav aria-label='...'>
                    <MDBPagination className='mb-0'>
                        <MDBPaginationItem disabled>
                            <MDBPaginationLink>Previous</MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem>
                            <MDBPaginationLink href='#'>1</MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem active aria-current='page'>
                            <MDBPaginationLink>
                                2<span className='visually-hidden'>(current)</span>
                            </MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem>
                            <MDBPaginationLink href='#'>3</MDBPaginationLink>
                        </MDBPaginationItem>
                        <MDBPaginationItem>
                            <MDBPaginationLink href='#'>Next</MDBPaginationLink>
                        </MDBPaginationItem>
                    </MDBPagination>
                </nav>
            </MDBContainer>
        </div>
    );
}

export default BusinessList;