import "./Formulario.css";
import Campo from "../Campo/Campo.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Boton from "../Boton/Boton.js";
import { useState } from "react";

const Formulario = (props) => {
	const [nombre, actualizarNombre] = useState("");
	const [puesto, actualizarPuesto] = useState("");
	const [foto, actualizarFoto] = useState("");
	const [equipo, actualizarEquipo] = useState("");

	const [titulo, actualizarTitulo] = useState("");
	const [color, actualizarColor] = useState("#57C278");

	const { registrarEquipo, registrarColaborador } = props;

	const manejarEnvioCola = (e) => {
		e.preventDefault();

		const datosParaEnviar = {
			nombre,
			puesto,
			foto,
			equipo,
		};
		registrarColaborador(datosParaEnviar);
		// Reset the state of the input fields
		actualizarNombre("");
		actualizarPuesto("");
		actualizarFoto("");
		actualizarEquipo("");
	};

	const manejarEnvioEquipo = (e) => {
		e.preventDefault();
		registrarEquipo({ titulo, colorDestaques: color });
		// Reset the state of the input fields
		actualizarTitulo("");
		actualizarColor("");
	};

	return (
		<section className="formulario">
			<form onSubmit={manejarEnvioCola} className="form-cola">
				<h2>Create Member</h2>
				<Campo
					titulo="Name"
					placeholder="Enter the name"
					isRequired={true}
					valor={nombre}
					setValor={actualizarNombre}
				/>
				<Campo
					titulo="Position"
					placeholder="Enter the position"
					isRequired
					valor={puesto}
					setValor={actualizarPuesto}
				/>
				<Campo
					titulo="Picture"
					placeholder="Url of square pic"
					isRequired
					valor={foto}
					setValor={actualizarFoto}
				/>

				<ListaOpciones valor={equipo} setValor={actualizarEquipo} equipos={props.equipos} />

				<Boton>Add Member</Boton>
			</form>

			<form onSubmit={manejarEnvioEquipo} className="form-equipo">
				<h2>Create Team</h2>
				<Campo
					titulo="Team Name"
					placeholder="Enter the team name"
					isRequired={true}
					valor={titulo}
					setValor={actualizarTitulo}
				/>
				<Campo
					clase="campo campo-color"
					titulo="Color"
					isRequired
					valor={color}
					setValor={actualizarColor}
					tipo="color"
				/>
				<Boton>Add Team</Boton>
			</form>
		</section>
	);
};

export default Formulario;
