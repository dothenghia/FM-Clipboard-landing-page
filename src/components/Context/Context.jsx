
import './context.scss'

const Context = (props) => {
    return (
    <div className={`context-container ${props.type} ${props.align}`}>
        <h1 className='context-title'>{props.title}</h1>
        <p className='context-content'>{props.content}</p>
    </div>
    );
};

export default Context;
