export default function Sidebar() {
	return (
		<div className='sidebar'>
			<h2 className='sidebar-header'>New</h2>
			<div className='sidebar-article'>
				<h3 className='sidebar-article_header'>
					Hydrogen VS Electric Cars
				</h3>
				<p className='sidebar-article_excerpt'>
					Will hydrogen-fuled cars ever catch up to EVs?
				</p>
			</div>
			<div className='sidebar-article'>
				<h3 className='sidebar-article_header'>
					The Downsides of AI Artistry
				</h3>
				<p className='sidebar-article_excerpt'>
					What are the possible adverse effects of on-demand AI image
					generation?
				</p>
			</div>
			<div className='sidebar-article'>
				<h3 className='sidebar-article_header'>
					Is VC Funding Drying Up?
				</h3>
				<p className='sidebar-article_excerpt'>
					Private funding by VC firms is down 50% YOY. We take a look
					at what that means.
				</p>
			</div>
		</div>
	);
}
