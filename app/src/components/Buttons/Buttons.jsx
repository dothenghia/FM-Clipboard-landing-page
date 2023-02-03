
import './buttons.scss'

const Buttons = () => {
    return (
    <div className="buttons-container">
        <button className="buttons-button buttons-button__ios">
            <span>
                Download for iOS
            </span>
        </button>
        <button className="buttons-button buttons-button__mac">
            <span>
                Download for Mac
            </span>
        </button>
    </div>
    );
};

export default Buttons;
