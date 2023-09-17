import "./MiOrg.css";

const MiOrg = () => {
	const manejarClick = () => {
		console.log("Mostrar/Ocultar elemento");
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
