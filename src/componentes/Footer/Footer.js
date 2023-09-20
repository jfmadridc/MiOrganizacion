import "./Footer.css";

const Footer = () => {
	return (
		<div className="div-footer">
			<footer className="footer">
				<div className="redes">
					<a href="https://jfmadrid.com">
						<img
							src="https://github.com/jfmadridc.png"
							alt="Personal Links"
						/>
						<strong>My Links</strong>
					</a>
				</div>

				<img src="/img/Logo.png "></img>

				<strong className="by-text">Developed by JFM</strong>
			</footer>
		</div>
	);
};

export default Footer;
