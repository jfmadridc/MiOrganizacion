import "./Colaborador.css";

const Colaborador = (props) => {
	return (
		<div className="colaborador">
			<div className="encabezado"></div>
			<div className="info">
				<img
					src="https://github.com/jfmadridc.png"
					alt="foto colaborador"
				/>
				<h4>JuanF Madrid</h4>
				<h5> {props.cargo} </h5>
			</div>
		</div>
	);
};

export default Colaborador;
