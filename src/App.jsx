import Header from './components/Header';
import Featured from './components/Featured';
import Sidebar from './components/Sidebar';
import Upnext from './components/Upnext';

function App() {
	return (
		<>
			<Header />
			<div className='parent'>
				<Featured />
				<Sidebar />
				<Upnext />
			</div>
		</>
	);
}

export default App;
