import React, {Fragment, useState}from "react";


const Contador = () => {

    const [temperatura, setTemperatura] = useState(20);
    const aumentar = ()=>{
        console.log('Me diste un click');
        setTemperatura(temperatura + 1);
    }
    const disminuir = ()=>{
        console.log('Me diste un click');
        setTemperatura(temperatura - 1);
    }

    return (
        <Fragment>
            <h2>La temperatura es {temperatura}</h2>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
            <h2>Esta haciendo {temperatura > 23 ? 'calor' : 'frio'}</h2>
        </Fragment>     
    );
}

export default Contador;