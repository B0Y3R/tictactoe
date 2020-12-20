import './Square.css';

function Square({ value, onClick }) {
    return <div className="column" onClick={onClick}>{value}</div>
}

export default Square;