import "./Equipo.css";

const Equipo = (props) => {
	return (
		<div className="div-equipo">
			<section className="equipo">
				<h3>{props.equipo}</h3>
				<div className="colaboradores"></div>
			</section>
		</div>
	);
};

export default Equipo;
