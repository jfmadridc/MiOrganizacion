import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
	//destructuracion
	const { titulo, colorFondo, colorDestaques } = props.datos;

	return (
		<div className="div-equipo" style={{ backgroundColor: colorFondo }}>
			<section className="equipo">
				<h3 style={{ borderColor: colorDestaques }}>{titulo}</h3>
				<div className="colaboradores">
					<Colaborador cargo="Desarrolladora de software e instructora" />
					<Colaborador cargo="Dev. FullStack" />
					<Colaborador cargo="Full Stack Developer" />
				</div>
			</section>
		</div>
	);
};

export default Equipo;
