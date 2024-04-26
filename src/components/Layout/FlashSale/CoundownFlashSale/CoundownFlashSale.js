import CountdownTimer from "react-component-countdown-timer"
// import "~react-component-countdown-timer/lib/styles.css"

const CountdownFlashSale = () => {
  return (
    <div className='countdown-content'>
      <CountdownTimer count={7200} border />
    </div>
  )
}

export default CountdownFlashSale
