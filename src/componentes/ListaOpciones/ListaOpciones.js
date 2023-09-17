import "./ListaOpciones.css";

const ListaOpciones = (props) => {
	//Metodo map -> arreglo.map ( (equipo,index) => {
	//	return <option><option/>
	//})
	const equipos = [
		"Programación",
		"Front End",
		"Data Science",
		"Devops",
		"UX y Diseño",
		"Movil",
		"Innovacion y Gestion",
	];

	const manejarCambio = (e) => {
		props.setValor(e.target.value);
	};

	return (
		<div className="lista-opciones">
			<label>Equipo</label>
			<select value={props.valor} onChange={manejarCambio} required>
				<option value="" disabled defaultValue="" hidden>
					Seleccionar Equipo
				</option>
				{equipos.map((equipo, index) => (
					<option key={index} value={equipo}>
						{equipo}
					</option>
				))}
			</select>
		</div>
	);
};

export default ListaOpciones;
