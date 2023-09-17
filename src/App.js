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

	//ternario condicion ? ifTrue : ifFalse
	return (
		<div>
			<Header />
			{mostrarFormulario === true ? <Formulario /> : null}

			<MiOrg switchMostrar={cambiarMostrar} />
		</div>
	);
}

export default App;
