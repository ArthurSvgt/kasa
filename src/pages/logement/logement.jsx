import Header from '../../components/Header/header'
import HeaderLogement from '../../components/HeaderLogement/headerLogement'
import LogementCard from '../../components/LogementCard/logementCard'
import { Apartments } from '../../data/dataList'
import './logement.css'
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/footer'
import Error from '../../components/Error/error'


function Logement() {
    const { id } = useParams();
    const apartment = Apartments.find(apartment => apartment.id === id);

    if (!apartment) {
        // Page 404
        return <Error />;
    }

    return (<div className='logement-body'>
        <div className='logement'>
            <Header />
            <HeaderLogement
                titleValue={apartment.title}
                key={apartment.id}
                imgSrc={apartment.pictures}
                tagsValue={apartment.tags}
                imgHost={apartment.host.picture}
                nameHost={apartment.host.name}
                locationValue={apartment.location}
                ratingValue={apartment.rating}
            />
            <div>

                <LogementCard
                    descValue={apartment.description}
                    equipmentsValue={apartment.equipments}
                />

            </div>
        </div>
        <Footer />
    </div>
    )


}

export default Logement

