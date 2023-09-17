import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Boton from "../Boton/Boton.js";
import { useState } from "react";

const Formulario = () => {
	const [nombre, actualizarNombre] = useState("");
	const [puesto, actualizarPuesto] = useState("");
	const [foto, actualizarFoto] = useState("");

	const manejarEnvio = (e) => {
		e.preventDefault();
		//console.log(e);
	};

	return (
		<section className="formulario">
			<form onSubmit={manejarEnvio}>
				<h2>Rellena el formulario para crear el colaborador.</h2>
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
				<ListaOpciones />
				<Boton>Crear</Boton>
			</form>
		</section>
	);
};

export default Formulario;
