import Header from '../../components/Header/header'
import Background from '../../components/Background/background'
import Card from '../../components/Thumb/thumb'
import { Apartments } from '../../data/dataList'
import './home.css'



function Home() {
  const listApartments = Apartments.map(apartment => 
    <Card titleValue = {apartment.title} key = {apartment.id} imgValue = {apartment.cover}/>
    )
  return <div className='home'>
    <Header />
    <Background />
    <div className='listApartments'>{listApartments}</div>
  </div>
}

export default Home