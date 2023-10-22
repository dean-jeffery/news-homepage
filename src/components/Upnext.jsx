import articleThumbnailOne from '../assets/images/image-retro-pcs.jpg';
import articleThumbnailTwo from '../assets/images/image-top-laptops.jpg';
import articleThumbnailThree from '../assets/images/image-gaming-growth.jpg';

export default function Upnext() {
	return (
		<div className='upnext'>
			<div className='upnext-article'>
				<img
					src={articleThumbnailOne}
					className='articleImage'
					alt='article thumbnail'
				/>
				<p className='upnext-article_ranking'>01</p>
				<h2 className='upnext-article_title'>Reviving Retro PCs</h2>
				<p className='upnext-article_excerpt'>
					What happens when old PCs are given modern upgrades?
				</p>
			</div>
			<div className='upnext-article'>
				<img
					src={articleThumbnailTwo}
					className='articleImage'
					alt='article thumbnail'
				/>
				<p className='upnext-article_ranking'>02</p>
				<h2 className='upnext-article_title'>Top 10 Laptops of 2022</h2>
				<p className='upnext-article_excerpt'>
					Our best picks for various needs and budgets.
				</p>
			</div>
			<div className='upnext-article'>
				<img
					src={articleThumbnailThree}
					className='articleImage'
					alt='article thumbnail'
				/>
				<p className='upnext-article_ranking'>03</p>
				<h2 className='upnext-article_title'>The Grpwth of Gaming</h2>
				<p className='upnext-article_excerpt'>
					How the pandemic has sparked fresh opportunities.
				</p>
			</div>
		</div>
	);
}
