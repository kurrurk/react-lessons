import DiagramBar from './DiagramBar.js';
import './Diagram.css';

const Diagram = (props) => {

    return <div className='diagram'>
        {props.dataSets.map( dataSet => (
            <DiagramBar 
                key={dataSet.label} // id
                value={dataSet.value} 
                maxValue={null}
                label={dataSet.label}
            />
        ))}
    </div>

}

export default Diagram;