import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
	return (
		<div className="div-org">
			<section className="orgSection">
				<img src="/img/add.png" alt="boton add" />
				<h3 className="title">Mi Organizacion</h3>
				<img
					src="/img/add.png"
					alt="boton add"
					onClick={props.switchMostrar}
				/>
			</section>
		</div>
	);
};

export default MiOrg;
