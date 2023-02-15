import {
    Button,
    Select,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

    
     
function FormInvoice(props) {
    const [data, setData] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        let url = 'https://api.hugoorickx.tech/' + props.factures;
        fetch(url, { method: 'POST' })
            .then((response) => response.json())
            .then((responseData) => setData(responseData.message || []));
    }, []);
    console.log(data)
    return (
        
            <FormControl isRequired>
                <div className='form_label'>
                    <FormLabel>Invoice Number: </FormLabel>
                    <Input placeholder='Invoice Number' />
                    <FormLabel>Dates due: </FormLabel>
                    <Input placeholder='Dates due' />
                    <FormLabel>Company: </FormLabel>
                    <Select placeholder='Select company'>
                        <option>Lego</option>
                        <option>Apple</option>
                        <option>Logitech</option>
                        <option>Ikea</option>
                        <option>Facebook</option>
                        <option>Macdou</option>
                    </Select>
                    <FormLabel>Created at:</FormLabel>
                    <Input placeholder='Date of creation' />
                </div>
                <button type="button">Save</button> 
            </FormControl>
            
        
    )
}

export default FormInvoice;