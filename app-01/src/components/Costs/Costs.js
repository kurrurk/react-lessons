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

    const filteredCosts = props.costs.filter((cost) => { 
    
        return cost.date.getFullYear().toString() === selectedYear 
    
    }) ;

    let costsContent = <p>Dieses Jahr fallen keine Kosten an</p>;

    if (filteredCosts.length > 0) {
        costsContent = filteredCosts.map( cost => (
                <CostItem 
                    key={cost.id}
                    date={cost.date}
                    description={cost.description}
                    amount={cost.amount}
                />
            ) 
        )
    }

    return (
        <div className="costs">
           <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler}/> 
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
                {costsContent}                         
            </Card> 
        </div>        
    );

}

export default Costs;