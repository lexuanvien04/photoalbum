import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
} from 'mdb-react-ui-kit';

const TopView = () => {

    const [items, setItems] = useState([]);
 
    useEffect(()=>{
        axios.get('https://photo.azurecloud.vn/api/v1/businesses/featured-screen-home-mobile')
        .then(json =>{
            // console.log(json.data.data.dataSection)
          let b = json.data.data.dataSection[1].listData;
          setItems(b);
          
        })
    },[]);

    return (    
                // <div className='top-view'>
                    <MDBContainer>

                <div className='top-view'>
                  
                    <MDBRow>
                      
                            <div className='title'>
                                     <div className="col-12">
                                         <span className="mb-0">Top View</span>
                                         <span className="view-all mt-3 text-danger" 
                                        style={{cursor: 'pointer'}}>View All
                                    </span>
                                </div>
                            </div>
                        
                    </MDBRow>
                  
                    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    {items.map((item) => (
                                <MDBCol>
                                    <MDBCard className='h-100'>
                                        <div className='card-img'>
                                            <MDBCardImage
                                                src={item.image}
                                                alt='...'
                                                position='top'
                                                key={item.id}
                                            />
                                        </div>
                                        <MDBCardBody>
                                        <MDBCardTitle>
                                            <div className="text-warning">
                                                <i className="fas fa-star text-warning" aria-hidden="true" />
                                                <i className="fas fa-star text-warning" aria-hidden="true" />
                                                <i className="fas fa-star text-warning" aria-hidden="true" />
                                                <i className="fas fa-star text-warning" aria-hidden="true" />
                                                <i className="fas fa-star text-warning" aria-hidden="true" />
                                                <span className=" btn-pills ml-1 active float-right text-danger">
                                                    <i className="far fa-heart fa-1x text-danger icon-follow cursor-pointer" aria-hidden="true" />
                                                </span>
                                            </div>
                                        </MDBCardTitle>
                                            <MDBCardText className='text'>
                                            <b>{item.name}</b>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                    ))}
                            </MDBRow>
                    </div>
            </MDBContainer>
      );
}

export default TopView;