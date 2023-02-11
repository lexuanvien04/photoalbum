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
import StarsRating from 'react-star-rate';


const MediasItem = (props) => {

    var Rating = require('react-rating');
    const options = [
        { value: "blue", label: "Blue" },
        { value: "yellow", label: "Yellow" }
      ];

    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        axios.get('https://photo.azurecloud.vn/api/v1/medias/list-medias-web?&time=DESC&per_page=12')
        .then(json =>{
            console.log(json.data.data.media.data)
          let t = json.data.data.media.data;
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
                        <MDBCol size='md-4' className="item">
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <Link to={"/medias-detail/"+item.id}>
                                    <div className="img-item">
                                        <MDBCardImage src={item.path} fluid alt='...'  key={item.id}/>
                                    </div>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </Link>
                            </MDBRipple>
                            <MDBCardBody> 
                                <div class="text-warning">
                                    
                                <StarsRating 
                                    value={item.rating}
                                />
                                    ({item.rating})<span class=" btn-pills ml-1 active float-right text-danger">
                                            <i class="far fa-heart fa-1x text-danger cursor-pointer icon-follow" aria-hidden="true"></i>
                                        </span>
                                </div>
                                <MDBCardTitle>{item.name}</MDBCardTitle>
                                <MDBCardText>
                                    {item.description}
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

export default MediasItem;