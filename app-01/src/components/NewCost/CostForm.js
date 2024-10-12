import './CostForm.css';

const CostForm = () => {
    return (
        <form>
            <div className='new-cost__controls'>
                
            <div className='new-cost__control'>
                 <label htmlFor="">Artikel</label>
                 <input type="text" />
            </div>  

            <div className='new-cost__control'>
                 <label htmlFor="">Summe</label>
                 <input type="number" min='0.01' step='0.01' />
            </div>  

            <div className='new-cost__control'>
                 <label htmlFor="">Datum</label>
                 <input type="date" min="2019-01-01" step="2024-12-31" />
            </div>  

            <div className='new-cost__actions'>
                 <button type='submit'>Artikel einfügen</button>
            </div>  
            
            </div>  
        </form>
    );
}
export default CostForm;