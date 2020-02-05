import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Alerta from '../../components/Alerta';
import {Link} from 'react-router-dom';

const Generos = () => {
    const [data, setData] = useState([]);
    
    const [alert, setAlert] = useState({});

    useEffect(() => {
        axios
        .get('/api/genres')
        .then(res => {
            if(res.data.data.length === 0){
                setAlert({
                    tipo: 'warning',
                    mensagem: 'Você não possui gêneros cadastrados.'
                });
            }else{
                setAlert({});
                setData(res.data.data)
            }
        })
    }, []);

    const deletarGenero = id =>{
        axios
            .delete('/api/genres/' + id)
            .then(res =>{
                const filtro = data.filter(item => item.id !== id)
                setData(filtro);

                res = res.data;
                if(res.success === true){
                    setAlert({
                        tipo: 'success',
                        mensagem: 'Gênero deletado com sucesso.'
                    });
                }else{
                    setAlert({
                        tipo: 'danger',
                        mensagem: 'Não foi possível delear o gênero. Por favor tente novamente mais tarde.'
                    });
                }
            });
    }


    return (
        <div className='container'>
            <h1>Gêneros</h1>
            <Link type="button" tag={Link} to="/generos/novo" className="btn btn-primary">Novo</Link>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(genero =>
                        <tr key={genero.id}> 
                            <th scope="row">{genero.id}</th>
                            <td>{genero.name}</td>
                            <td>
                                <Link className="btn btn-info" to={'generos/' + genero.id}>Editar</Link>
                                <button className="btn btn-danger" onClick={() => deletarGenero(genero.id)}>Excluir</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Alerta tipo={alert.tipo} mensagem={alert.mensagem} visibilidade={alert.length === 0 ? 'invisible' : 'visible'}/>   
        </div>
    )
}

export default Generos;