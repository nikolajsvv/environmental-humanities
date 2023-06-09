import '../../styles/decanter/decanter.css';

const StanfordFooter = () => {
  return (
<div className="su-global-footer su-global-footer--dark">
  <div className="su-global-footer__container" title="Common Stanford resources">
    <div className="su-global-footer__brand">
      <a className="su-logo su-global-footer--dark" href="https://www.stanford.edu">
        Stanford
        <br />
        University
      </a>
    </div>
    <div className="su-global-footer__content">
      <nav aria-label="global footer menu">
        <ul className="su-global-footer__menu su-global-footer__menu--global">
          <li>
            <a href="https://www.stanford.edu">
              Stanford Home
              <span className="su-global-footer__link-a11y">(link is external)</span>
            </a>
          </li>
          <li>
            <a href="https://visit.stanford.edu/plan/">
              Maps &amp; Directions
              <span className="su-global-footer__link-a11y">(link is external)</span>
            </a>
          </li>
          <li>
            <a href="https://www.stanford.edu/search/">
              Search Stanford
              <span className="su-global-footer__link-a11y">(link is external)</span>
            </a>
          </li>
          <li>
            <a href="https://emergency.stanford.edu">
              Emergency Info
              <span className="su-global-footer__link-a11y">(link is external)</span>
            </a>
          </li>
        </ul>
        <ul className="su-global-footer__menu su-global-footer__menu--policy">
          <li>
            <a href="https://www.stanford.edu/site/terms/" title="Terms of use for sites">
              Terms of Use
              <span className="su-global-footer__link-a11y">(link is external)</span>
            </a>
          </li>
          <li>
            <a href="https://www.stanford.edu/site/privacy/" title="Privacy and cookie policy">
              Privacy
              <span className="su-global-footer__link-a11y">(link is external)</span>
            </a>
          </li>
          <li>
            <a href="https://uit.stanford.edu/security/copyright-infringement" title="Report alleged copyright infringement">
              Copyright
              <span className="su-global-footer__link-a11y">(link is external)</span>
            </a>
          </li>
          <li>
            <a href="https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4" title="Ownership and use of Stanford trademarks and images">
              Trademarks
              <span className="su-global-footer__link-a11y">(link is external)</span>
            </a>
          </li>
          <li>
            <a href="https://studentservices.stanford.edu/more-resources/student-policies/non-academic/non-discrimination" title="Non-discrimination policy">
              Non-Discrimination
              <span className="su-global-footer__link-a11y">(link is external)</span>
            </a>
          </li>
          <li>
            <a href="https://www.stanford.edu/site/accessibility" title="Report web accessibility issues">
              Accessibility
              <span className="su-global-footer__link-a11y">(link is external)</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="su-global-footer__copyright">
        <span>&copy; Stanford University.</span>
        <span>&nbsp; Stanford, California 94305.</span>
      </div>
    </div>
  </div>
</div>
  )
}

export default StanfordFooter