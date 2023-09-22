import { useState } from "react";
import { v4 as uuid } from "uuid";

import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg/MiOrg";
import Equipo from "./componentes/Equipo/Equipo";
import Footer from "./componentes/Footer/Footer";

function App() {
	// States/hooks
	const [mostrarFormulario, actualizarMostrar] = useState(false); //un state de true or false
	const [colaboradores, actualizarColaboradores] = useState([
		{
			id: uuid(),
			nombre: "Juan",
			puesto: "Estudiante",
			foto: "https://github.com/jfmadridc.png",
			equipo: "Programación",
			fav: true,
		},
		{
			id: uuid(),
			nombre: "Juan",
			puesto: "Estudiante",
			foto: "https://github.com/jfmadridc.png",
			equipo: "Programación",
			fav: false,
		},
		{
			id: uuid(),
			nombre: "Juan",
			puesto: "Estudiante",
			foto: "https://github.com/jfmadridc.png",
			equipo: "Programación",
			fav: false,
		},
		{
			id: uuid(),
			nombre: "Juan",
			puesto: "Estudiante",
			foto: "https://github.com/jfmadridc.png",
			equipo: "Programación",
			fav: false,
		},
		{
			id: uuid(),
			nombre: "Juan",
			puesto: "Estudiante",
			foto: "https://github.com/jfmadridc.png",
			equipo: "Programación",
			fav: false,
		},
		{
			id: uuid(),
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "Data Science",
		},
		{
			id: uuid(),
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "Data Science",
			fav: false,
		},
		{
			id: uuid(),
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "Devops",
			fav: false,
		},
		{
			id: uuid(),
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "UX y Diseño",
			fav: false,
		},
		{
			id: uuid(),
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "Móvil",
			fav: false,
		},
		{
			id: uuid(),
			nombre: "Christian laksjd kajs lkajs kl laksjdlka s askjd lkaj",
			puesto: "Dueño asljkdhj alhashd kajhd kjahs khaks ",
			foto: "https://github.com/christianpva.png",
			equipo: "Innovacion y Gestión",
			fav: false,
		},
		{
			id: uuid(),
			nombre: "Christian ",
			puesto: "Dueño  ",
			foto: "https://github.com/christianpva.png",
			equipo: "Programación",
			fav: false,
		},

		{
			id: uuid(),
			nombre: "Tartiana",
			puesto: "My Teacher",
			foto: "https://media.licdn.com/dms/image/D4D03AQG2FWMkos_0oA/profile-displayphoto-shrink_200_200/0/1691671216460?e=1700697600&v=beta&t=9uFXPOpL9RrtwZKQjIkO_Lw7j7aTuumwcGccPKO1OLM",
			equipo: "Front End",
			fav: false,
		},
		{
			id: uuid(),
			nombre: "Tartiana",
			puesto: "My Teacher",
			foto: "https://media.licdn.com/dms/image/D4D03AQG2FWMkos_0oA/profile-displayphoto-shrink_200_200/0/1691671216460?e=1700697600&v=beta&t=9uFXPOpL9RrtwZKQjIkO_Lw7j7aTuumwcGccPKO1OLM",
			equipo: "Front End",
			fav: false,
		},

		{
			id: uuid(),
			nombre: "Tartiana",
			puesto: "My Teacher",
			foto: "https://media.licdn.com/dms/image/D4D03AQG2FWMkos_0oA/profile-displayphoto-shrink_200_200/0/1691671216460?e=1700697600&v=beta&t=9uFXPOpL9RrtwZKQjIkO_Lw7j7aTuumwcGccPKO1OLM",
			equipo: "Front End",
			fav: false,
		},
	]); //un state que es un arreglo de objetos que va acontener a los colaboradores
	const [equipos, actulizarEquipos] = useState([
		{
			id: uuid(),
			titulo: "Programación",
			colorFondo: "#D9F7E9",
			colorDestaques: "#57C278",
		},
		{
			id: uuid(),
			titulo: "Front End",
			colorFondo: "#E8F8FF",
			colorDestaques: "#82CFFA",
		},
		{
			id: uuid(),
			titulo: "Data Science",
			colorFondo: "#F0F8E2",
			colorDestaques: "#A6D157",
		},
		{
			id: uuid(),
			titulo: "Devops",
			colorFondo: "#FBD3D4",
			colorDestaques: "#E06B69",
		},
		{
			id: uuid(),
			titulo: "UX y Diseño",
			colorFondo: "#F6D7ED",
			colorDestaques: "#DB6EBF",
		},
		{
			id: uuid(),
			titulo: "Móvil",
			colorFondo: "#FFECBA",
			colorDestaques: "#FFBA05",
		},
		{
			id: uuid(),
			titulo: "Innovacion y Gestión",
			colorFondo: "#FFDFC4",
			colorDestaques: "#FF8A29",
		},
	]);

	//lo que hace que muestre o oculte el formulario con el click en el boton
	const cambiarMostrar = () => {
		actualizarMostrar(!mostrarFormulario); //cambia de true a false y de false a tue
	};

	//Registrar colaborador
	const registrarColaborador = (colaborador) => {
		//guardamos el objeto con Spread operator
		actualizarColaboradores([...colaboradores, colaborador]); //es una copia del arreglo y le añade colaborador
	};

	//Eliminar Colaborador
	const eliminarColaborador = (id) => {
		const colaboradoresActualizados = colaboradores.filter(
			(colaborador) => colaborador.id !== id
		);
		actualizarColaboradores(colaboradoresActualizados);
	};

	//Eliminar todos los colaboradores
	const eliminarTodo = () => {
		actualizarColaboradores([]); //cambia de true a false y de false a tue
	};

	//Registrar Equipo
	const registrarEquipo = (nuevoEquipo) => {
		console.log(nuevoEquipo);
		actulizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
	};

	//Actualizar color destaque
	const actualizarColorDestaque = (color, id) => {
		const equiposActualizados = equipos.map((equipo) => {
			if (equipo.id === id) {
				equipo.colorDestaques = color;
			}
			return equipo;
		});
		actulizarEquipos(equiposActualizados);
	};

	//Actualizar favorito
	const like = (id) => {
		const colaboradoresActualizados = colaboradores.map((colaborador) => {
			if (colaborador.id === id) {
				colaborador.fav = !colaborador.fav;
			}
			return colaborador;
		});
		actualizarColaboradores(colaboradoresActualizados);
	};

	return (
		<div className="div-app">
			<Header />
			{/* tambien se puede usar: */}
			{/* {mostrarFormulario && <Formulario />} */}

			<MiOrg switchMostrar={cambiarMostrar} eliminarTodo={eliminarTodo} />

			{mostrarFormulario ? (
				<Formulario
					equipos={equipos.map((equipo) => equipo.titulo)}
					registrarColaborador={registrarColaborador}
					registrarEquipo={registrarEquipo}
				/>
			) : (
				<></>
			)}

			{equipos.map((equipo) => (
				<Equipo
					datosEquipo={equipo}
					key={equipo.titulo}
					colaboradores={colaboradores.filter(
						(colaborador) => colaborador.equipo === equipo.titulo
					)}
					eliminarColaborador={eliminarColaborador}
					actualizarColorDestaque={actualizarColorDestaque}
					like={like}
				/>
			))}

			<Footer />
		</div>
	);
}

export default App;
