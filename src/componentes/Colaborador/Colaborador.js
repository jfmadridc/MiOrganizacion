import "./Colaborador.css";

const Colaborador = (props) => {
	const { nombre, puesto, foto, equipo } = props.datosCola;

	return (
		<div className="colaborador">
			<div className="encabezado"></div>
			<div className="info">
				<img src={foto} alt={`foto ${nombre}`} />
				<h4> {nombre} </h4>
				<h5> {puesto} </h5>
			</div>
		</div>
	);
};

export default Colaborador;
