import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Votar() {
    const [dados,setDados] = useState([])
    const [notify, setNotify] = useState(false)

    const exib = async () => {
        setNotify(true)
        setTimeout(() => {
            setNotify(false)
        }, 3000);
    }

    const vote = async (id) => {
        try{
            await axios.get(`http://10.112.4.59:8000/candidates/vote/${id}`)
            exib()
        }catch(error){
            console.log(error)
        }
    }
    
    const getDados = async () => {
        try{
            const data = await axios.get('http://10.112.4.59:8000/candidates/')
            console.log(data.data)
            setDados(data.data)
        }catch(error){
            console.log(error)
        }
    }
    
    useEffect(() => {
        getDados(); 
    }, [])

    return (
        <main>
            <div className='top'>
                <Link className='button' href="/">Back</Link>
                {notify && (<h3 className='alert'>Voto cadastrado!</h3>)}
            </div>
            <h1>Ranking de candidatos: </h1>
            {dados.map((candidate) =>
                <div className='card'>
                    <div>
                        <h3>{candidate.number}</h3>
                        <p>{candidate.name}</p>
                    </div>
                    <button className='button' onClick={() => vote(candidate.id)}>Votar</button>
                </div>
            )}
        </main>
    )
}