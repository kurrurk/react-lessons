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
                <CostItem
                    date={props.costs[0].date}
                    description={props.costs[0].description}
                    ammount={props.costs[0].ammount}
                />
                <CostItem
                    date={props.costs[1].date}
                    description={props.costs[1].description}
                    ammount={props.costs[1].ammount}
                />
                <CostItem
                    date={props.costs[2].date}
                    description={props.costs[2].description}
                    ammount={props.costs[2].ammount}
                />  
            </Card> 
        </div>        
    );

}

export default Costs;