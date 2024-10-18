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

    return (
        <div className="costs">
           <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler}/> 
           <Card> 
                {props.costs.filter((cost) => { return cost.date.getFullYear().toString() === selectedYear }).map( cost => <CostItem 
                                            key={cost.id}
                                            date={cost.date}
                                            description={cost.description}
                                            amount={cost.amount}
                /> )}               
            </Card> 
        </div>        
    );

}

export default Costs;