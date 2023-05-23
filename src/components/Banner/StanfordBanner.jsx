import '../../styles/decanter/decanter.css';
import '../../styles/decanter/decanter-grid.css'

const StanfordBanner = () => {
  return (
  <div className="su-brand-bar [ modifier_class ]">
    <div className="su-brand-bar__container">
      <a className="su-brand-bar__logo" href="https://stanford.edu">
        Stanford University
        <span className="su-brand-bar__link--a11y">(link is external)</span>
      </a>
    </div>
  </div>  
)
}

export default StanfordBanner