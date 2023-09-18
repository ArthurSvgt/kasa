import React, { useState } from 'react';
import Header from '../../components/Header/header';
import './about.css';
import Footer from '../../components/Footer/footer';


function About(props) {
    const [isOpenDescArray, setIsOpenDescArray] = useState([false, false, false, false]);

    const toggleDescription = (index) => {
        const updatedArray = [...isOpenDescArray];
        updatedArray[index] = !updatedArray[index];
        setIsOpenDescArray(updatedArray);
    };

    return (
        <div>
            <div className='main'>
                <Header />
                <div className='about-image'></div>
                <div className='cards-container'>

                    <details className={`flex-card1 ${isOpenDescArray[0] ? 'open' : ''}`} onClick={() => toggleDescription(0)}>
                        <summary className='summ-title1'>Fiabilité<i className={`fas fa-chevron-up ${isOpenDescArray[0] ? 'rotate' : ''}`}></i></summary>
                        <p className='p-text1'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </details>
                    <details className={`flex-card1 ${isOpenDescArray[1] ? 'open' : ''}`} onClick={() => toggleDescription(1)}>
                        <summary className='summ-title1'>Respect<i className={`fas fa-chevron-up ${isOpenDescArray[1] ? 'rotate' : ''}`}></i></summary>
                        <p className='p-text1'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </details>
                    <details className={`flex-card1 ${isOpenDescArray[2] ? 'open' : ''}`} onClick={() => toggleDescription(2)}>
                        <summary className='summ-title1'>Service<i className={`fas fa-chevron-up ${isOpenDescArray[2] ? 'rotate' : ''}`}></i></summary>
                        <p className='p-text1'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </details>
                    <details className={`flex-card1 ${isOpenDescArray[3] ? 'open' : ''}`} onClick={() => toggleDescription(3)}>
                        <summary className='summ-title1'>Sécurité<i className={`fas fa-chevron-up ${isOpenDescArray[3] ? 'rotate' : ''}`}></i></summary>
                        <p className='p-text1'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </details>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;

