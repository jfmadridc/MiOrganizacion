import "./Equipo.css";

const Equipo = (props) => {
	//destructuracion
	const { titulo, colorFondo, colorDestaques } = props.datos;

	return (
		<div className="div-equipo" style={{ backgroundColor: colorFondo }}>
			<section className="equipo">
				<h3 style={{ borderColor: colorDestaques }}>{titulo}</h3>
				<div className="colaboradores"></div>
			</section>
		</div>
	);
};

export default Equipo;
