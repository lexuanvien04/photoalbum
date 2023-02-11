import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Header from '../Layout/header';
import Footer from '../Layout/Footer';
import MenuList from './content/MenuList';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import BusinessList from './content/BusinessList';

const Business = () => {
    return(
        <div className='business'>
            <ScrollToTop/>
            <Header/>
            <div className='title-business'>
                Danh sách doanh nghiệp
            </div>
            <div className='business-content'>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size={3}>
                            <MenuList/>
                        </MDBCol>
                        <MDBCol size={9}>
                            <BusinessList/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Business;