import './Costs.css'
import CostItem from "./CostItem";
import Card from '../UI/Card';

const Costs = (props) => {

    return (
        <Card className="costs">
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
    );

}

export default Costs;