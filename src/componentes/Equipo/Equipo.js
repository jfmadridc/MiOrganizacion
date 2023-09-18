import "./Equipo.css";

const Equipo = (props) => {
	return (
		<div
			className="div-equipo"
			style={{
				backgroundColor: props.datos.colorFondo,
			}}
		>
			<section className="equipo">
				<h3
					style={{
						borderColor: props.datos.colorDestaques,
					}}
				>
					{props.datos.titulo}
				</h3>
				<div className="colaboradores"></div>
			</section>
		</div>
	);
};

export default Equipo;
