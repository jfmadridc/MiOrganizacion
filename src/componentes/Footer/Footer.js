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
				<div>
					<img src="/img/Logo.png " alt="logo org"></img>
				</div>

				<div>
					<strong className="by-text1">Developed by JFM</strong>
					<strong className="by-text2">by JFM</strong>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
