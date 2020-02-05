import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Alerta from '../../components/Alerta';

const EditarGenero = ({ match }) =>{
    const [nome, setNome] = useState('');
    const [alerta, setAlerta] = useState({});
    
    useEffect(()=>{
        axios
            .get('/api/genres/' + match.params.id)
            .then(res =>{
                setNome(res.data.name)
            })
    }, [match.params.id])
    
    const onChange = evt => {
        setNome(evt.target.value);
    }

    const save = () => {
        if(nome.length <= 0){
            setAlerta({
                tipo: 'warning',
                mensagem: 'Por favor preencha o nome.',
            })
        }else{
            axios
            .put('/api/genres/' + match.params.id, {
                name: nome,
            })
            .then(res => {
                if(res.data.id !== 0 && res.data.id !== ""){
                    setAlerta({
                        tipo: 'success',
                        mensagem: 'Gênero alterado com sucesso.',
                    }) 
                }else{
                    setAlerta({
                        tipo: 'danger',
                        mensagem: 'Não foi possível alterar o gênero. Por favor tente novamente mais tarde.',
                    })
                }
            })
        }
    }

    return (
        <div className='container'>
            <h1>Editar Gênero</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="strNome">Nome</label>
                    <input type="text" className="form-control" name='name' id="strNome" value={nome} onChange={onChange} placeholder="Nome do Gênero"/>
                </div>
                <button onClick={save} type="button" className="btn btn-primary">Salvar</button>                
            </form>
            <Alerta tipo={alerta.tipo} mensagem={alerta.mensagem} visibilidade={alerta.visibilidade} />
        </div>
    )
}

export default EditarGenero