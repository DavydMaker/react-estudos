import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alerta from '../../components/Alerta';
import { Badge } from 'reactstrap';

const InfoSerie = ({ match }) => {
    const [form, setForm] = useState({});
    const [alerta, setAlerta] = useState({});
    const [mode, setMode] = useState('INFO')
    const [generos, setGeneros] = useState([])
    const [data, setData] = useState({})
    const onChange = field => evt => {

        // setNome(evt.target.value);
        setForm({
            ...form,
            [field]: evt.target.value
        })
    }

    const seleciona = value => () => {
        setForm({
            ...form,
            status: value
        })
    }



    // custom header
    const masterHeader = {
        height: '50vh',
        minHeight: '500px',
        backgroundImage: `url('${data.background}')`,
        backgroundSize: 'cover',
        bacgkroundPosition: 'center',
        backgroundRepeat: 'no-repeat'

    }


    useEffect(() => {
        axios
            .get('/api/series/' + match.params.id)
            .then(res => {
                setData(res.data)
                setForm(res.data)
            })
    }, [match.params.id])

    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setGeneros(res.data.data)
            })
    }, [])

    const save = () => {
        if (form.name.length <= 0) {
            setAlerta({
                tipo: 'warning',
                mensagem: 'Por favor preencha o nome.',
            })
        } else {
            axios
                .put('/api/series/' + match.params.id, form)
                .then(res => {
                    if (res.data.id !== 0 && res.data.id !== "") {
                        setAlerta({
                            tipo: 'success',
                            mensagem: 'Série "' + form.name + '" atualizada com sucesso.',
                        })
                    } else {
                        setAlerta({
                            tipo: 'danger',
                            mensagem: 'Não foi possível cadastrar a série. Por favor tente novamente mais tarde.',
                        })
                    }
                })
        }
    }



    return (
        <div>
            <header style={masterHeader}>
                <div className='h-100 ' style={{ background: 'rgba(0,0,0,0.7)' }}>
                    <div className='h-100 container'>
                        <div className='row h-100 align-items-center'>
                            <div className='col-3'>
                                <img alt={data.name} className='img-fluid img-thumbnail' src={data.poster} />
                            </div>
                            <div className='col-8'>
                                <h1 className='font-weight-light text-white'>{data.name}</h1>
                                <div className='lead text-white'>
                                    {data.status === 'ASSISTIDO' && <Badge color='success'>Assistido</Badge>}
                                    {data.status === "PARA_ASSISTIR" && <Badge color='warning'>Para assistir</Badge> } 
                                    
                                    Gênero: {data.genre}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className='container'>
                <button onClick={() => setMode('EDIT')} type="button" className="btn btn-info">Editar</button>
            </div>
            {
                mode === 'EDIT' &&
                <div className='container'>
                    <h1>Editar Série</h1>
                    <button onClick={() => setMode('INFO')} type="button" className="btn btn-warning">Cancelar Edição</button>
                    <form>
                        <div className="form-group">
                            <label htmlFor="strNome">Nome:</label>
                            <input type="text" className="form-control" name='name' id="strNome" defaultValue={form.name} onChange={onChange('name')} placeholder="Nome da Série" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="strComentarios">Comentário:</label>
                            <input type="text" className="form-control" name='comments' id="strComentarios" defaultValue={form.comments} onChange={onChange('comments')} placeholder="Deixe seu comentário" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="strGenero">Gênero:</label>
                            <select className="form-control" id="strGenero" onChange={onChange('genre_id')} name='genre_id' defaultValue={form.genre_id}>
                                {generos.map(gen => <option value={gen.id} key={gen.id} selected={form.genre_id === gen.id}>{gen.name}</option>)}
                            </select>
                        </div>
                        <div className='form-group'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="status" onChange={seleciona('ASSISTIDO')} id="assistido" defaultValue="ASSISTIDO" checked={form.status === "ASSISTIDO"} />
                                <label className="form-check-label" htmlFor ="assistido">
                                    Assistido
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="status" id="paraAssistir" onChange={seleciona('PARA_ASSISTIR')} defaultValue="PARA_ASSISTIR"  checked={form.status === "PARA_ASSISTIR"} />
                                <label className="form-check-label" htmlFor="paraAssistir"> 
                                    Para Assistir
                                </label>
                            </div>
                            <pre>{JSON.stringify(form)}</pre>
                        </div>

                        <button onClick={save} type="button" className="btn btn-primary">Salvar</button>
                    </form>
                    <Alerta tipo={alerta.tipo} mensagem={alerta.mensagem} visibilidade={alerta.visibilidade} />
                </div>
            }

        </div>
    )
}

export default InfoSerie