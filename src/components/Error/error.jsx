import './error.css'
import Header from '../Header/header'
import Footer from '../Footer/footer'

function Error() {
    return (
        <div>
            <div className='main'>
                <Header />
                <div>
                    <h1 className='title-error'>404</h1>
                    <p id='oups'>Oups! La page que vous demandez n'existe pas.</p>
                    <p id='back-home'><a href='/'>Retourner sur la page d'accueil</a></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Error