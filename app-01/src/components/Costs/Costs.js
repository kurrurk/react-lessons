import './Costs.css'
import CostItem from "./CostItem";
import Card from '../UI/Card';
import CostsFilter from '../UI/CostsFilter';
import { useState } from 'react';

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const onChangeYearHandler = (year) => {
        setSelectedYear(year);        
    }

    console.log('Selected Year = ' + selectedYear);

    return (
        <div className="costs">
           <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler}/> 
           <Card> 
                {props.costs.map( cost => <CostItem 
                                            date={cost.date}
                                            description={cost.description}
                                            amount={cost.amount}
                /> )}               
            </Card> 
        </div>        
    );

}

export default Costs;