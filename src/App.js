import { useState } from "react";

import "./App.css";
import Header from "./componentes/Header/Header.js";
import Formulario from "./componentes/Formulario/Formulario.js";
import MiOrg from "./componentes/MiOrg/MiOrg.js";

function App() {
	const [mostrarFormulario, actualizarMostrar] = useState(true);

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
		</div>
	);
}

export default App;
