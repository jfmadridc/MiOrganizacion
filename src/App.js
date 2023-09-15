import logo from "./logo.svg";
import "./App.css";
import Header from "./componentes/Header/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello World! I'm using React!!!</p>
				<a
					className="App-link"
					href="https://jfmadrid.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Developed by J
				</a>
			</header>
		</div>
	);
}

export default App;
