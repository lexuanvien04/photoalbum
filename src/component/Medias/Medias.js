import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Header from '../Layout/header';
import Footer from '../Layout/Footer';
import MediaList from './content/MediaList';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import MediasItem from './content/MediasItem';


const Medias = () => {
    return(
        <div className='business'>
            <ScrollToTop/>
            <Header/>
            <div className='title-business'>
                Danh sách các hình ảnh và video
            </div>
            <div className='business-content'>
                <MDBContainer>
                    <MDBRow>
                    <MDBCol size={9}>
                            <MediasItem/>
                        </MDBCol>
                        <MDBCol size={3}>
                            <MediaList/>
                        </MDBCol>
                        
                    </MDBRow>
                </MDBContainer>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Medias;