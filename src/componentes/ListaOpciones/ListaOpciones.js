import "./ListaOpciones.css";

const ListaOpciones = (props) => {
	//Metodo map -> arreglo.map ( (equipo,index) => {
	//	return <option><option/>
	//})

	const manejarCambio = (e) => {
		props.setValor(e.target.value);
	};

	return (
		<div className="lista-opciones">
			<label>Team</label>
			<select value={props.valor} onChange={manejarCambio} required>
				<option value="" disabled defaultValue="" hidden>
					Select the team...
				</option>
				{props.equipos.map((equipo, index) => (
					<option key={index} value={equipo}>
						{equipo}
					</option>
				))}
			</select>
		</div>
	);
};

export default ListaOpciones;
