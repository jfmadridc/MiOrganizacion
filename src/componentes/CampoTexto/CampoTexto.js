import "./CampoTexto.css";

const CampoTexto = (props) => {
	const placeHolderDots = props.placeholder + "...";
	return (
		<div className="campo-texto">
			<label>{props.titulo} </label>
			<input placeholder={placeHolderDots} required={props.isRequired} />
		</div>
	);
};

export default CampoTexto;
