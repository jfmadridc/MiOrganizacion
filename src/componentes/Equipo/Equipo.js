import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
	//destructuracion
	const { titulo, colorDestaques, id } = props.datosEquipo;
	const { colaboradores, eliminarColaborador, actualizarColorDestaque, like } = props;

	const objColorFondo = {
		backgroundColor: hexToRgba(colorDestaques, 0.23),
	};

	return (
		<>
			{colaboradores.length > 0 && (
				<div className="div-equipo" style={objColorFondo}>
					<section className="equipo">
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
							title="Change Color"
							onChange={(evento) => {
								actualizarColorDestaque(evento.target.value, id);
							}}
						/>

						<div className="colaboradores">
							{colaboradores.map((colaborador, index) => (
								<Colaborador
									datosCola={colaborador}
									key={index}
									colDestaques={colorDestaques}
									eliminarColaborador={eliminarColaborador}
									like={like}
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
