type Props ={
    numero:number;
    tinta:string;
    mostrarCarta: (numero: number, tinta: string) => void
};

function Carta({numero,tinta,mostrarCarta}:Props){

    const hadleClick = () => {
      mostrarCarta(numero,tinta);
    };

    return(
        <button onClick={hadleClick}>

     <h1>Soy una carta de las cartas {numero + 2 + tinta} </h1>
        </button>
    )    
}

export default Carta