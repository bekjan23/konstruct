import './Preloader.css';

function Preloader() {
  let konstItem = Array.from(Array(12), (_, i) => <div key={i}/>);
  return (
    <div className="konst-loader-wrap">
      <div className="konst-loader">
        {konstItem}
      </div>
    </div>
  )
}

export default Preloader
