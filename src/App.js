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

	//lista de Equipos
	const equipos = [
		{
			titulo: "Programación",
			colorFondo: "#D9F7E9",
			colorDestaques: "#57C278",
		},
		{
			titulo: "Front End",
			colorFondo: "#E8F8FF",
			colorDestaques: "#82CFFA",
		},
		{
			titulo: "Data Science",
			colorFondo: "#F0F8E2",
			colorDestaques: "#A6D157",
		},
		{
			titulo: "Devops",
			colorFondo: "#FBD3D4",
			colorDestaques: "#E06B69",
		},
		{
			titulo: "UX y Diseño",
			colorFondo: "#F6D7ED",
			colorDestaques: "#DB6EBF",
		},
		{
			titulo: "Móvil",
			colorFondo: "#FFECBA",
			colorDestaques: "#FFBA05",
		},
		{
			titulo: "Innovacion y Gestión",
			colorFondo: "#FFDFC4",
			colorDestaques: "#FF8A29",
		},
	];

	return (
		<div>
			<Header />
			{/* tambien se puede usar: */}
			{/* {mostrarFormulario && <Formulario />} */}

			{/* //ternario condicion ? ifTrue : ifFalse */}
			{mostrarFormulario ? (
				<Formulario equipos={equipos.map((equipo) => equipo.titulo)} />
			) : (
				<></>
			)}
			<MiOrg switchMostrar={cambiarMostrar} />

			{equipos.map((equipo) => {
				return <Equipo datos={equipo} key={equipo.titulo} />;
			})}
		</div>
	);
}

export default App;
