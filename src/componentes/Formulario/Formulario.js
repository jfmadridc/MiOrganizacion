import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto.js";

const Formulario = () => {
	return (
		<section className="formulario">
			<form>
				<h2>Rellena el formulario para crear el colaborador.</h2>
				<CampoTexto titulo="Nombre" placeholder="Ingrese el nombre" />
				<CampoTexto titulo="Puesto" placeholder="Ingrese el puesto" />
				<CampoTexto titulo="Foto" placeholder="Seleccione la foto" />
			</form>
		</section>
	);
};

export default Formulario;
