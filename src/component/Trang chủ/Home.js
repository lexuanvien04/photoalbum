import Header from '../Layout/header';
import Banner from './banner/banner';
import BusinessType from './content/BusinessType';
import TopBusiness from './content/TopBusiness';
import Videos from './content/Videos';
import FlashSale from './content/FlashSale';
import Events from './content/Events';
import Footer from '../Layout/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import HomeListItem from './content/HomeListItem';
import TopView from './content/topview';

const Home = () => {
  
  return (
    <div>
      <ScrollToTop/>
      <Header/>
      <Banner/>
      <div className='content' >
        {/* <HomeListItem/> */}
        <TopView/>
        <div className='banner-small'>
                <img src='https://photo.azurecloud.vn/Flip-kart-_-banner-_-upcoming.jpg' alt=''/>
        </div>
        
        <BusinessType/>
        <TopBusiness/>
        <Videos/>
        <FlashSale/>
        <Events/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
