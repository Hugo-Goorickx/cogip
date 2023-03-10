import Footer from '../Home/Footer';
import Navigation from '../Home/Navigation';
import Rectangle_blanc from '../assets/images/Rectangle_blanc.svg';

import { ChakraProvider } from '@chakra-ui/react'
import TablePagination from '../Tables/Pagination';


function Companies() {
    return (
        <ChakraProvider>    
            <header>
                <Navigation />
                <img src={Rectangle_blanc} alt="#" />
            </header>
            <main>
                <div className='rectangle_jaune'>
                    <h1 className='companies__h1'>
                        All Companies
                    </h1>
                </div>
                <div className='over'>
                    <TablePagination table='compagnies' display="all" itemsPerPage={10} lien="Companies"
                    id="id" td1="name" td2="tva" td3="country" td4="type" td5="created_at" 
                    th1="Name" th2="TVA" th3="Country" th4="Type" th5="Created at" 
                    input="Name" />
                </div>
            </main>
            <Footer />
        </ChakraProvider>
)
    };

    export default Companies;