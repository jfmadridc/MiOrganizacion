import "./CampoTexto.css";

const CampoTexto = (props) => {
	const placeHolderDots = props.placeholder + "...";

	const manejarCambio = (e) => {
		props.setValor(e.target.value);
	};

	return (
		<div className="campo-texto">
			<label>{props.titulo} </label>
			<input
				placeholder={placeHolderDots}
				required={props.isRequired}
				value={props.valor}
				onChange={manejarCambio}
			/>
		</div>
	);
};

export default CampoTexto;
