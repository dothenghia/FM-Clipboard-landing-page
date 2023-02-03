
import './logo.scss'
import google from '../../assets/images/logo-google.png'
import ibm from '../../assets/images/logo-ibm.png'
import microsoft from '../../assets/images/logo-microsoft.png'
import hp from '../../assets/images/logo-hp.png'
import vg from '../../assets/images/logo-vector-graphics.png'

const Logos = () => {
	return (
		<div className="logos-container">
			<img src={google} alt="Logo Google" />
			<img src={ibm} alt="Logo IBM" />
			<img src={microsoft} alt="Logo Microsoft" />
			<img src={hp} alt="Logo HP" />
			<img src={vg} alt="Logo VG" />
		</div>
	);
};

export default Logos;
