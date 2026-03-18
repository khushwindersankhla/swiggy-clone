import './AboutSwiggy.css'
function AboutSwiggy(){
    return(
        <>
      <nav className="swiggy-nav-container">
      <div className="swiggy-nav-content">
        {/* Logo Section */}
        <div className="swiggy-logo-wrapper">
          <div className="orange-square">S</div>
          <span className="swiggy-text-brand">Swiggy</span>
        </div>

        {/* Links Section */}
        <ul className="swiggy-menu-items">
          <li className="nav-item active">About Swiggy</li>
          <li className="nav-item">Our Businesses</li>
          <li className="nav-item">Delivering For Everyone</li>
          <li className="nav-item">Newsroom</li>
          <li className="nav-item">Investor Relations</li>
          <li className="nav-item">Sustainability</li>
          <li className="nav-item">Contact Us</li>
        </ul>
      </div>
    </nav>
        </>
    )
}
export default AboutSwiggy;