import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Header from '../Layout/header';
import Footer from '../Layout/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import AlbumList from './content/AlbumList';
import AlbumItem from './content/AlbumItem';

const Album = () => {
    return(
        <div className='business'>
            <ScrollToTop/>
            <Header/>
            <div className='title-business'>
                Danh sách các loại album
            </div>
            <div className='business-content'>
                <MDBContainer>
                    <MDBRow>
                        
                        <MDBCol size={9}>
                            <AlbumItem/>
                        </MDBCol>
                        <MDBCol size={3}>
                            <AlbumList/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Album;