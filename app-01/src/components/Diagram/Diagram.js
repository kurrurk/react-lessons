import DiagramBar from './DiagramBar.js';
import './Diagram.css';

const Diagram = (props) => {

    const dataSetsVaues = props.dataSets.map(dataSet => dataSet.value);

    const maxMonthCosts = Math.max(...dataSetsVaues);

    return <div className='diagram'>
        {props.dataSets.map( dataSet => (
            <DiagramBar 
                key={dataSet.label} // id
                value={dataSet.value} 
                maxValue={maxMonthCosts}
                label={dataSet.label}
            />
        ))}
    </div> 

}

export default Diagram;