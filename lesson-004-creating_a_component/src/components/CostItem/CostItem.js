import "./CostItem.css";
function CostItem() {
  return (
    <div className="cost-item">
      {/* всегда должен быть корневой элемент. */}
      <div>июнь 2026 01</div>
      <div className="cost-item__description">
        <h2>Холодильник</h2>
        <div className="cost-item__price">€999.99</div>
      </div>
    </div>
  );
}

export default CostItem;
