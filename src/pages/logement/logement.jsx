import Header from '../../components/Header/header'
import HeaderLogement from '../../components/HeaderLogement/headerLogement'
import LogementCard from '../../components/LogementCard/logementCard'
import EquipementCard from '../../components/EquipementCard/equipementCard'
import { Apartments } from '../../data/dataList'
import './logement.css'
import { useParams } from 'react-router-dom';


function Logement() {
    const { id } = useParams();

    // Recherche de l'appartement correspondant à l'identifiant
    const apartment = Apartments.find(apartment => apartment.id === id);

    if (!apartment) {
        // Page 404
        return <div>Erreur</div>;
    }

    return (<div className='logement'>
        <Header />
        <HeaderLogement
            titleValue={apartment.title}
            key={apartment.id}
            imgSrc={apartment.cover}
            tagsValue={apartment.tags}
            imgHost={apartment.host.picture}
            nameHost={apartment.host.name}
            locationValue={apartment.location}
            ratingValue={apartment.rating}
        />
        <div>
            
                <LogementCard
                    descValue={apartment.description}
                />
            
            <div>
                <EquipementCard 
                    equipmentsValue={apartment.equipments}    
                />
            </div>
        </div>
    </div>
    )


}

export default Logement

