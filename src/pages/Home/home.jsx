import Header from '../../components/Header/header'
import Background from '../../components/Background/background'
import Card from '../../components/Thumb/thumb'
import { Apartments } from '../../data/dataList'
import './home.css'
import Footer from '../../components/Footer/footer'



function Home() {
  const listApartments = Apartments.map(apartment =>
    <Card titleValue={apartment.title} id={apartment.id} key={apartment.id} imgValue={apartment.cover} />
  )
  return <div className='home-body'>
    <div className='main'>
      <div className='home'>
        <Header />
        <Background />
        <section className='listApartments'>{listApartments}</section>
      </div>
    </div>
    <Footer />
  </div>
}

export default Home
