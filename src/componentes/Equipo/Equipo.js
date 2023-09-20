import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
	//destructuracion
	const { titulo, colorFondo, colorDestaques } = props.datosEquipo;
	const { colaboradores } = props;

	return (
		<>
			{colaboradores.length > 0 && (
				<div
					className="div-equipo"
					style={{ backgroundColor: colorFondo }}
				>
					<section className="equipo">
						<h3 style={{ borderColor: colorDestaques }}>
							{titulo}
						</h3>
						<div className="colaboradores">
							{colaboradores.map((colaborador, index) => (
								<Colaborador
									datosCola={colaborador}
									key={index}
								/>
							))}
						</div>
					</section>
				</div>
			)}
		</>
	);
};

export default Equipo;
