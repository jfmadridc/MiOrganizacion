import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Boton from "../Boton/Boton.js";
import { useState } from "react";

const Formulario = (props) => {
	const [nombre, actualizarNombre] = useState("");
	const [puesto, actualizarPuesto] = useState("");
	const [foto, actualizarFoto] = useState("");
	const [equipo, actualizarEquipo] = useState("");

	const [titulo, actualizarTitulo] = useState("");
	const [color, actualizarColor] = useState("");

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
				<h2>Crear el colaborador.</h2>
				<CampoTexto
					titulo="Nombre"
					placeholder="Ingrese el nombre"
					isRequired={true}
					valor={nombre}
					setValor={actualizarNombre}
				/>
				<CampoTexto
					titulo="Puesto"
					placeholder="Ingrese el puesto"
					isRequired
					valor={puesto}
					setValor={actualizarPuesto}
				/>
				<CampoTexto
					titulo="Foto"
					placeholder="Seleccione la foto"
					isRequired
					valor={foto}
					setValor={actualizarFoto}
				/>

				<ListaOpciones valor={equipo} setValor={actualizarEquipo} equipos={props.equipos} />

				<Boton>Crear Colaborador</Boton>
			</form>

			<form onSubmit={manejarEnvioEquipo} className="form-equipo">
				<h2>Crear equipo.</h2>
				<CampoTexto
					titulo="Titulo"
					placeholder="Ingrese el titulo"
					isRequired={true}
					valor={titulo}
					setValor={actualizarTitulo}
				/>
				<CampoTexto
					titulo="Color"
					placeholder="Ingrese el color Hex"
					isRequired
					valor={color}
					setValor={actualizarColor}
				/>
				<Boton>Crear Equipo</Boton>
			</form>
		</section>
	);
};

export default Formulario;
