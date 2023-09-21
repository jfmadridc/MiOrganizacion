import "./MiOrg.css";

const MiOrg = (props) => {
	return (
		<div className="div-org">
			<section className="orgSection">
				<img
					src="/img/Delete.png"
					alt="boton eliminar organizacion"
					title="Eliminar Organizacion"
					onClick={props.eliminarTodo}
				/>
				<h3 className="title">Mi Organización</h3>
				<img
					src="/img/add.png"
					alt="boton agregar"
					onClick={props.switchMostrar}
				/>
			</section>
		</div>
	);
};

export default MiOrg;
