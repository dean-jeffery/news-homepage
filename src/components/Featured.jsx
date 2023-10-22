import articleImage from '../assets/images/image-web-3-desktop.jpg';

export default function Featured() {
	return (
		<div className='featured-article'>
			<img
				src={articleImage}
				className='articleImage'
				alt='Abstract image'
				width='480px'
			/>
			<h1>The Bright Future of Web 3</h1>
			<p>
				The Bright Future of Web 3.0? We dive into the next evolution of
				the web that claims to put the power of the platforms back into
				the hands of the people. But is it really fulfilling its
				promise?
			</p>
			<a href='/'>Read More</a>
		</div>
	);
}
