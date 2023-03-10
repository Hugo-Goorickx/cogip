import Footer from '../Home/Footer';
import Navigation from '../Home/Navigation';
import Rectangle_blanc from '../assets/images/Rectangle_blanc.svg';

import { ChakraProvider } from '@chakra-ui/react'
import TablePagination from '../Tables/Pagination';


function Contacts() {
    return (
        <ChakraProvider>    
            <header>
                <Navigation />
                <img src={Rectangle_blanc} alt="#" />
            </header>
            <main>
                <h1>
                    All Contacts
                </h1>
                <div className='over'>
                    <TablePagination table='contacts' display="all" itemsPerPage={10}
                    id="id" td1="name" td2="phone" td3="email" td4="name_compagnie" td5="created_at" 
                    th1="Name" th2="Phone" th3="Mail" th4="Company" th5="Created at" lien="Contacts"
                    input="Name" />
                </div> 
            </main>
            <Footer />
        </ChakraProvider>
)
    };

    export default Contacts;