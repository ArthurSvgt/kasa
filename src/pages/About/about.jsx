import React, { useState } from 'react';
import Header from '../../components/Header/header';
import './about.css';
import Collapse from '../../components/Collapse/collapse'
import Footer from '../../components/Footer/footer';


function About() {
    const [isOpenDescArray, setIsOpenDescArray] = useState([false, false, false, false]);

    const toggleDescription = (index) => {
        const updatedArray = [...isOpenDescArray];
        updatedArray[index] = !updatedArray[index];
        setIsOpenDescArray(updatedArray);
    };

    return (
        <>
            <div className='main'>
                <Header />
                <div className='about-image'></div>
                <div className='cards-container'>

                    <Collapse
                        title='Fiabilité'
                        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                        isOpen={isOpenDescArray[0]}
                        toggle={() => toggleDescription(0)}
                    />
                    <Collapse
                        title='Respect'
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                        isOpen={isOpenDescArray[1]}
                        toggle={() => toggleDescription(1)}
                    />
                    <Collapse
                        title='Service'
                        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                        isOpen={isOpenDescArray[2]}
                        toggle={() => toggleDescription(2)}
                    />
                    <Collapse
                        title='Sécurité'
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                        isOpen={isOpenDescArray[3]}
                        toggle={() => toggleDescription(3)}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;

