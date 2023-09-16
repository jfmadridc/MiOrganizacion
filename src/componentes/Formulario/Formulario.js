import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Boton from "../Boton/Boton.js";

const Formulario = () => {
	const manejarEnvio = (e) => {
		e.preventDefault();
		//console.log(e);
	};

	return (
		<section className="formulario">
			<form onSubmit={manejarEnvio}>
				<h2>Rellena el formulario para crear el colaborador.</h2>
				<CampoTexto titulo="Nombre" placeholder="Ingrese el nombre" />
				<CampoTexto titulo="Puesto" placeholder="Ingrese el puesto" />
				<CampoTexto titulo="Foto" placeholder="Seleccione la foto" />
				<ListaOpciones />
				<Boton>Crear</Boton>
			</form>
		</section>
	);
};

export default Formulario;
