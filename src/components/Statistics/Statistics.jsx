import "./Statistics.css"

const Statistics = () => {
  return (
    <div className="statistics BR10 w100 padding2 flexCSA">
        <div className="about-money flexCol">
            <span className="s">TOTAL AMOUNT</span>
            <span className="l">$19,423</span>
        </div>
        <div className="about-money flexCol">
            <span className="s">OVERNIGHT PAY</span>
            <span className="l">$1,423</span>
        </div>
        <div className="about-money flexCol">
            <span className="s">REGULAR PAY</span>
            <span className="l">$18,423</span>
        </div>
        <div className="about-money flexCol">
            <span className="s">HOLIDAY PAY</span>
            <span className="l">$0</span>
        </div>
    </div>
  )
}

export default Statistics