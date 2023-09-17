import { useState } from "react";

import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";

function App() {
	const [mostrarFormulario, actualizarMostrar] = useState(false);

	const cambiarMostrar = () => {
		actualizarMostrar(!mostrarFormulario);
	};

	return (
		<div>
			<Header />
			{/* tambien se puede usar: */}
			{/* {mostrarFormulario && <Formulario />} */}

			{/* //ternario condicion ? ifTrue : ifFalse */}
			{mostrarFormulario ? <Formulario /> : <></>}
			<MiOrg switchMostrar={cambiarMostrar} />
			<Equipo equipo="Programación" />
			<Equipo equipo="Front End" />
			<Equipo equipo="Data Science" />
			<Equipo equipo="Devops" />
			<Equipo equipo="UX y Diseño" />
			<Equipo equipo="Movil" />
			<Equipo equipo="Innovacion y Gestion" />
		</div>
	);
}

export default App;
