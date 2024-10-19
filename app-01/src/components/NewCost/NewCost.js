import { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false)
    

    const setIsFormVisibleHandler = () => {
        setIsFormVisible(true);
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    }

    const saveCostDataHandler = (inputCostData) => {        
        
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }     
        
        props.onAddCost(costData);
        setIsFormVisible(false)

    }

    return (
        <div className='new-cost'>
            {!isFormVisible && <button onClick={setIsFormVisibleHandler}>Eine neue Artikel hinzufügen</button>}
            {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler} />}
        </div>
    );
}
export default NewCost;