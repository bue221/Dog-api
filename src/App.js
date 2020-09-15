import React,{ useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'
import { TextField, Button } from '@material-ui/core/';

const App = ()=>{

        const [ query,setQuery ] = useState('affenpinscher')
        const [ search, setSearch ] = useState('');
        const [ data, setData ] = useState('');
        //console.log(search);


        useEffect(()=>{
                getDog();
        },[query]);

        const getDog = async() =>{
                let url = `https://dog.ceo/api/breed/${query}/images/random`;
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
        }

        const getRamdom = async() =>{
                let url = "https://dog.ceo/api/breeds/image/random";
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
        }

        const boton = (e)=>{
                e.preventDefault();
                setQuery(search);
        }

        //console.log(data);


        return(
                <div className='contenedor'>
                        <div className='busqueda'>
                                <TextField id="busqueda" onChange={(e)=>setSearch(e.target.value)} label="Busqueda"/>
                                <Button variant="contained" color="secondary" onClick={boton}>
                                        Buscar
                                </Button>
                        </div>
                        <Button variant="contained" color="primary" onClick={getRamdom}>
                                Random
                        </Button>
                        <div className='img'>
                                {  data.status == 'success' ? <img src={data.message} alt="img" />:
                                <h1>Busqueda no encontrada</h1>
                                }
                        </div>
                </div>
                );
}

export default App;
