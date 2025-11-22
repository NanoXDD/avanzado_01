type Props ={
    numero: number;
    nombre: string;
    tipo: string;
    ataque: number;
    defensa: number;
    descripcion: string;
    imagen: string;
    debilidad?: string;
};

function TarjetaDetalle({
    ataque,
    defensa,
    descripcion,
    imagen,
    nombre,
    numero,
    tipo,
    debilidad ="Desconocida",
}: Props) {
    return(
        <div className="border-solid border-purple-400 border-2 p-4 w-60">
            <h3>
            {nombre} (#{numero})
            </h3>
        <img src={imagen} alt={nombre} />
        <p>Tipo: {tipo}</p>
        <p>Ataque: {ataque}</p>
        <p>Defensa: {defensa}</p>
        <p>Descripcion: {descripcion}</p>
        <p>Debilidad: {debilidad}</p>
        </div>
    );
}

export default TarjetaDetalle;



