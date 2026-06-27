
const pricingCard = ({data}) => {
  return (
    <>
      <div className="card">
        <h4>{data.title}</h4>
        <h2>{data.price}</h2>
        <ul>
          {data.features.map((textData) => (
            <p className={textData.available? "black" : "lightgrey"}>
            <i className={textData.available ? " fa-solid fa-check" : " fa solid fa-x"}></i>
              {textData.text}
            </p>
          ))}
        </ul>
        <button className="btn">BUTTON</button>
      </div>
    </>
  );
}

export default pricingCard