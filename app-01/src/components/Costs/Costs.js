import './Costs.css'
import Card from '../UI/Card';
import CostsFilter from '../UI/CostsFilter';
import { useState } from 'react';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const onChangeYearHandler = (year) => {
        setSelectedYear(year);        
    }

    const filteredCosts = props.costs.filter((cost) => { 
    
        return cost.date.getFullYear().toString() === selectedYear 
    
    }) ;

    

    return (
        <div className="costs">
           <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler}/> 
           <CostsDiagram costs={filteredCosts} />
           <Card> 
                {/* ------------------- вариант 1 ----------------------- */}
                {/* filteredCosts.length === 0 ? <p>Dieses Jahr fallen keine Kosten an</p> :
                    
                    filteredCosts.map( cost => (
                            <CostItem 
                                key={cost.id}
                                date={cost.date}
                                description={cost.description}
                                amount={cost.amount}
                            />
                        ) 
                    )
                */}
                {/* ------------------- вариант 2 ----------------------- */}
                {/* filteredCosts.length === 0 && <p>Dieses Jahr fallen keine Kosten an</p> */}  
                {/* filteredCosts.length > 0 && 
                    filteredCosts.map( cost => (
                            <CostItem 
                                key={cost.id}
                                date={cost.date}
                                description={cost.description}
                                amount={cost.amount}
                            />
                        ) 
                    )
                */}
                {/* ------------------- вариант 3 ----------------------- */}
                <CostList costs={filteredCosts} />                      
            </Card> 
        </div>        
    );

}

export default Costs;