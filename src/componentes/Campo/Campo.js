import "./Campo.css";

const CampoTexto = (props) => {
	const placeHolderDots = props.placeholder + "...";
	const { tipo = "text", clase = "campo" } = props;

	const manejarCambio = (e) => {
		props.setValor(e.target.value);
	};

	return (
		<div className={clase}>
			<label>{props.titulo} </label>
			<input
				placeholder={placeHolderDots}
				required={props.isRequired}
				value={props.valor}
				onChange={manejarCambio}
				type={tipo}
			/>
		</div>
	);
};

export default CampoTexto;
