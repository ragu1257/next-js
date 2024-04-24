 const Card = ({children }: {children : React.ReactNode}) => {
  const cardStyling = {
    border: "1px solid #000",
    borderRadius: "5px",
    padding: "20px",
    margin: "10px",
  };
  return (
    <div style={cardStyling}>
      {children}
    </div>
  );
}

export default Card;