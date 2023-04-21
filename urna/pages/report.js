import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Report() {
    const [dados,setDados] = useState([])

    const getDados = async () => {
        try{
            const data = await axios.get('http://10.112.4.59:8000/report/')
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
            <Link className='button' href="/">Back</Link>
            <h1>Ranking de candidatos: </h1>
            {dados.map((candidate) => 
                <div className='card'>
                    <div>
                        <h3>{candidate.number}</h3>
                        <p>{candidate.name}</p>
                    </div>
                    <h2>Votos totais: {candidate.votes}</h2>
                </div>
            )}
        </main>
    )
}