import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return(
        <div className='footer'>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3 footer-content'>
                    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                        <a href='#' alt='PhotoAlbum'>
                            <h6 className='fw-bold mb-4'>
                                <img src="https://photo.azurecloud.vn/avatars/40.png" alt="" />
                                PhotoAlbum
                            </h6>
                        </a>
                        <div className='icon'>
                            <MDBIcon fab icon="facebook-f" />
                            <MDBIcon fab icon="instagram" />
                            <MDBIcon fab icon="youtube" />
                            <MDBIcon fab icon="twitter" />
                        </div>
                
                    </MDBCol>

                    <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 footer-list'>
                        <h6 className='w-bold mb-4'>Terms & Policies</h6>
                        <p>
                            <a href='#!' className='text-reset'>
                            Terms Of Service
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Community Standards
                            </a>
                        </p>
                   
                    </MDBCol>

                    <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 footer-list'>
                        <h6 className='fw-bold mb-4'>Support</h6>
                        <p>
                            <a href='#!' className='text-reset'>
                            About Us
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Help Center
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                            Tips And Tricks
                            </a>
                        </p>
                    </MDBCol>

                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                        <h6 className='fw-bold mb-4'>Our App</h6>
                        <a href="#" className="d-block mb-2 app" data-abc="true">
                            <img 
                                className="img-responsive" 
                                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574317087/AAA/appstore.png" 
                            />
                        </a>
                        <a href="#" className="d-block mb-2 app" data-abc="true">
                            <img 
                                className="img-responsive" 
                                src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574317110/AAA/playmarket.png" 
                            />
                        </a>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                by Xuan Vien
                </a>
            </div>
        </MDBFooter>
        </div>
    );
}

export default Footer;