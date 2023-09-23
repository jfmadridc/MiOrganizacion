import "./Colaborador.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const Colaborador = (props) => {
	const { nombre, puesto, foto, id, fav } = props.datosCola;
	const colorEncabezado = props.colDestaques;
	const { eliminarColaborador, like } = props;

	return (
		<div className="colaborador">
			<img
				className="boton-eliminar"
				src="/img/Delete.png"
				onClick={() => eliminarColaborador(id)}
				alt="boton eliminar colaborador"
				title="Delete Member"
			/>

			{fav ? (
				<AiFillHeart
					className="corazon-lleno"
					title="Unlike Member"
					color="red"
					onClick={() => like(id)}
				/>
			) : (
				<AiOutlineHeart
					className="corazon-vacio"
					title="Like Member"
					onClick={() => like(id)}
				/>
			)}

			<div className="encabezado" style={{ backgroundColor: colorEncabezado }}></div>

			<div className="info">
				<img className="foto-Cola" src={foto} alt={`foto ${nombre}`} />
				<h4> {nombre} </h4>
				<h5> {puesto} </h5>
			</div>
		</div>
	);
};

export default Colaborador;
