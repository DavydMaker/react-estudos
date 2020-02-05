import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Alerta from '../../components/Alerta';
import {Link} from 'react-router-dom';

const Series = () => {
    const [data, setData] = useState([]);
    
    const [alert, setAlert] = useState({});

    useEffect(() => {
        axios
        .get('/api/series')
        .then(res => {
            if(res.data.data.length === 0){
                setAlert({
                    tipo: 'warning',
                    mensagem: 'Você não possui séries cadastradas.'
                });
            }else{
                setAlert({});
                setData(res.data.data)
            }
        })
    }, []);

    const deletarSerie = id =>{
        axios
            .delete('/api/series/' + id)
            .then(res =>{
                const filtro = data.filter(item => item.id !== id)
                setData(filtro);

                res = res.data;
                if(res.success === true){
                    setAlert({
                        tipo: 'success',
                        mensagem: 'Série deletada com sucesso.'
                    });
                }else{
                    setAlert({
                        tipo: 'danger',
                        mensagem: 'Não foi possível delear a série. Por favor tente novamente mais tarde.'
                    });
                }
            });
    }


    return (
        <div className='container'>
            <h1>Séries</h1>
            <Link type="button" tag={Link} to="/series/novo" className="btn btn-primary">Novo</Link>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(serie =>
                        <tr key={serie.id}> 
                            <th scope="row">{serie.id}</th>
                            <td>{serie.name}</td>
                            <td>
                                <Link className="btn btn-info" to={'series/' + serie.id}>Info</Link>
                                <button className="btn btn-danger" onClick={() => deletarSerie(serie.id)}>Excluir</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Alerta tipo={alert.tipo} mensagem={alert.mensagem} visibilidade={alert.length === 0 ? 'invisible' : 'visible'}/>   
        </div>
    )
}

export default Series;