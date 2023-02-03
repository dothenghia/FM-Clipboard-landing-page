
import './feature.scss'
import blackList from '../../assets/images/icon-blacklist.svg'
import text from '../../assets/images/icon-text.svg'
import preview from '../../assets/images/icon-preview.svg'
import Context from '../Context/Context'

const features = [
	{
		icon: blackList,
		type:'small',
		align:'center',
		title:'Create blacklists',
		content:'Ensure sensitive information never makes its way to your clipboard by excluding certain sources.'
	},
	{
		icon: text,
		type:'small',
		align:'center',
		title:'Plain text snippets',
		content:'Remove unwanted formatting from copied text for a consistent look.'
	},
	{
		icon: preview,
		type:'small',
		align:'center',
		title:'Sneak preview',
		content:'Quick preview of all snippets on your Clipboard for easy access.'
	}
]

const Feature = () => {
	return (
		<div className='feature-container'>
			{
				features.map((feature) => {
					return (
						<div className="feature-item">
							<img src={feature.icon} alt={`${feature.icon} Icon`} />
							<Context
								type={feature.type}
								align={feature.align}
								title={feature.title}
								content={feature.content}
							/>
						</div>
					)
				})
			}
		</div>
	);
};

export default Feature;
