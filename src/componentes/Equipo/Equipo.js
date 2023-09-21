import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
	//destructuracion
	const { titulo, colorFondo, colorDestaques } = props.datosEquipo;
	const { colaboradores, eliminarColaborador } = props;
	const { actualizarColorDestaque, actualizarColorFondo } = props;

	return (
		<>
			{colaboradores.length > 0 && (
				<div className="div-equipo" style={{ backgroundColor: colorFondo }}>
					<section className="equipo">
						<input
							className="input-fondo"
							type="color"
							value={colorFondo}
							onChange={(evento) => {
								actualizarColorFondo(evento.target.value, titulo);
							}}
						/>
						<h3
							style={{
								borderColor: colorDestaques,
								textDecorationColor: colorDestaques,
							}}
						>
							{titulo}
						</h3>
						<input
							className="input-destaques"
							type="color"
							value={colorDestaques}
							onChange={(evento) => {
								actualizarColorDestaque(evento.target.value, titulo);
							}}
						/>

						<div className="colaboradores">
							{colaboradores.map((colaborador, index) => (
								<Colaborador
									datosCola={colaborador}
									key={index}
									colDestaques={colorDestaques}
									eliminarColaborador={eliminarColaborador}
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
