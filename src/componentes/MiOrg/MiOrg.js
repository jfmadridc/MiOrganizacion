import "./MiOrg.css";

const MiOrg = (props) => {
	return (
		<div className="div-org">
			<section className="orgSection">
				<img
					src="/img/Delete.png"
					alt="boton eliminar organizacion"
					title="Delete Organization"
					onClick={props.eliminarTodo}
				/>
				<h3 className="title">My Organization</h3>
				<img
					src="/img/add.png"
					alt="boton agregar"
					title="Show Forms"
					onClick={props.switchMostrar}
				/>
			</section>
		</div>
	);
};

export default MiOrg;
