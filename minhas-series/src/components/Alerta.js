import React from 'react';

const Alerta = (props) => {
    return (
        <div className={"alert alert-" + props.tipo + " " + props.visibilidade} role="alert">
            {props.mensagem}
        </div>
    )
  }

export default Alerta;