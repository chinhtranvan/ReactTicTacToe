import './App.css';
import Home from './TicTacToe/components/Home';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import OnlineAndOffline from './TicTacToe/components/OnlineAndOffline';
import TicTacToe from './TicTacToe/TicTacToe';
import AITicTacToe from './TicTacToe/AITicTacToe';
import Online from './TicTacToe/components/Online'
function App() {
	return (
		<div className='App'>
			<BrowserRouter >
				<Routes>
					<Route path="/" exact  element={<Home/>}/>
					<Route path="/2players" element={<OnlineAndOffline/>}/>
					<Route path="/Aiplayers" element={<AITicTacToe/>}/>	
					<Route path="/2players/offline" element={<TicTacToe/>}/>
					<Route path="/2players/online" element={<Online/>}/>			
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;



// function App() {
// 	return (
// 		<div className='App'>
// 			<Home />
// 		</div>
// 	);
// }

// export default App;
