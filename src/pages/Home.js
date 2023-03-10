import Footer from '../Home/Footer';
import Navigation from '../Home/Navigation';
import Manage from '../Home/Manage';
import Work from '../Home/Work';
import Table from '../Tables/Table';
import Ampoule from '../assets/images/Ampoule.png';
import Main from '../assets/images/Main.svg';

import { ChakraProvider } from '@chakra-ui/react'


function Home() {
    return (
        <ChakraProvider>    
            <header>
                <Navigation />
                <Manage />
            </header>
            <main>
                <h2>
                    Last invoices
                </h2>
                <div className='over'>
                    <Table table='factures' display="five" idLien=""
                    id="id" td1="ref" td2="update_at" td3="name" td4="created_at" 
                    th1="Invoice number" th2="Dates due" th3="Company" th4="Created at" />
                </div>
                <div className='img_main'>
                    <img src={Main} id='main' />
                </div>
                <h2>
                    Last contacts
                </h2>
                <div className='over'>
                    <Table table="contacts" display="five" idLien=""
                    id="id" td1="name" td2="phone" td3="email" td4="name_compagnie" td5="created_at"
                    th1="Name" th2="Phone" th3="Mail" th4="Company" th5="Created at" />
                </div>
                <img src={Ampoule} id='ampoule' />
                <h2>
                    Last companies
                </h2>
                <div className='over'>
                    <Table table="compagnies" display="five" idLien=""
                    id="id" td1="name" td2="tva" td3="country" td4="type" td5="created_at"
                    th1="Name" th2="TVA" th3="Country" th4="Type" th5="Created at" />
                </div>
                <Work />
            </main>
            <Footer />
        </ChakraProvider>
)
    };

    export default Home;