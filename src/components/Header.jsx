import siteLogo from '../assets/images/logo.svg';

export default function Header() {
	return (
		<header>
			<a href='#' target='_blank'>
				<img src={siteLogo} className='logo' alt='Site logo' />
			</a>
			<nav>
				<ul>
					<li>
						<a href='/'>home</a>
					</li>
					<li>
						<a href='/'>New</a>
					</li>
					<li>
						<a href='/'>Popular</a>
					</li>
					<li>
						<a href='/'>Trending</a>
					</li>
					<li>
						<a href='/'>Categories</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
