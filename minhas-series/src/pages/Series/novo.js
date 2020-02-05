import React, {useState} from 'react';
import axios from 'axios';
import Alerta from '../../components/Alerta';

const NovaSerie = () =>{
    const [nome, setNome] = useState('');
    const [alerta, setAlerta] = useState({});
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
            .post('/api/series', {
                name: nome,
            })
            .then(res => {
                if(res.data.id !== 0 && res.data.id !== ""){
                    setAlerta({
                        tipo: 'success',
                        mensagem: 'Série "'+nome+'" cadastrada com sucesso.',
                    }) 
                    setNome(''); 
                }else{
                    setAlerta({
                        tipo: 'danger',
                        mensagem: 'Não foi possível cadastrar a série. Por favor tente novamente mais tarde.',
                    })
                }
            })
        }
    }

    return (
        <div className='container'>
            <h1>Nova Série</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="strNome">Nome</label>
                    <input type="text" className="form-control" name='name' id="strNome" value={nome} onChange={onChange} placeholder="Nome da Série"/>
                </div>
                <button onClick={save} type="button" className="btn btn-primary">Salvar</button>                
            </form>
            <Alerta tipo={alerta.tipo} mensagem={alerta.mensagem} visibilidade={alerta.visibilidade} />
        </div>
    )
}

export default NovaSerie