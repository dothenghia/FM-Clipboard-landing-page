
import './header.scss'
import Logo from '../../assets/images/logo.svg'
import Context from '../../components/Context/Context'
import Buttons from '../../components/Buttons/Buttons'

const context = {
	type: 'large',
	align: 'center',
	title: 'A history of everything you copy',
	content: 'Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.'
}

const Header = () => {
	return (
		<div id="header">
			<div className="header-logo">
				<img src={Logo} alt="Logo" />
			</div>

			<Context
				type={context.type}
				align={context.align}
				title={context.title}
				content={context.content}
			/>

			<Buttons/>
		</div>
	);
};

export default Header;
