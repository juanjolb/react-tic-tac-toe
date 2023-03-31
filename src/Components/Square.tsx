const Square = ({ value, onSquareClick }: any) => {
  return (
    <div className="square" onClick={onSquareClick}>
      <span className="tile-value">{value}</span>
    </div>
  );
};
export default Square;
