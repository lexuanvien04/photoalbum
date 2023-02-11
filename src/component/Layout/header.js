import React from "react";
import { useState } from "react";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Outlet } from "react-router-dom";


const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  return(
    <MDBNavbar expand='lg'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img src="https://photo.azurecloud.vn/avatars/40.png" alt=""/>
          <b>PhotoAlbum</b>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/home'>
                Trang chủ
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/business">Doanh nghiệp</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Yêu thích</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/album'>Albums</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/medias'>Medias</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <Outlet/>
            <form>
            <div className="form-group mb-0">
              <input type="text" id="help" name="name" className="border bg-white rounded-pill " placeholder="Từ khóa tìm kiếm..." />
              <button type="submit" className="btn-search ">
                <i className="fas fa-search text-danger" aria-hidden="true" />
              </button>
            </div>
            </form>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
          <div className="buy-button">
              <img title="English" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/us.svg" alt="" 
                style={{display: 'inline-block', width: '2em', height: '2em', verticalAlign: 'middle', borderRadius: '50%', margin: '0px 25px 0px 0px', cursor: 'pointer'}} />
                <button className="btn-user" rel="noreferrer">
                    <i className="far fa-user" aria-hidden="true" />
                </button>

              </div>
            
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    
  );
}

export default Header;

