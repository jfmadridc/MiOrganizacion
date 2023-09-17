import "./MiOrg.css";
import { useState } from "react";

const MiOrg = () => {
	//Estado - Hooks
	//useState
	//useState()
	//const [nombreVariable, FuncionQueActualiza] = useState(valorInicial)
	const [mostrar, actualizarMostrar] = useState(true);

	const manejarClick = () => {
		actualizarMostrar(!mostrar);
	};

	return (
		<div className="div-org">
			<section className="orgSection">
				<img src="/img/add.png" alt="boton add" />
				<h3 className="title">Mi Organizacion</h3>
				<img
					src="/img/add.png"
					alt="boton add"
					onClick={manejarClick}
				/>
			</section>
		</div>
	);
};

export default MiOrg;
