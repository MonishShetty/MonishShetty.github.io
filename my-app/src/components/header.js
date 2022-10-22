import React from 'react'
import { Link } from 'react-router-dom'
export default function header() {
    return (
        <div className='maind'>
            {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid bg-success">
          <a class="navbar-brand" href="#"><img className='logoimage' src="logo.jpg" alt='not found'></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" ><Link to="/">Home</Link></a>
              <a class="nav-link"><Link to="/buy">Buy</Link></a>
              <a class="nav-link" ><Link to="/sell"> Sell</Link></a>
              {/* <a class="nav-link dropdown-toggle" ><Link to="/labour">Labour</Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div></a> */}

        {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <Link to="">Labour</Link></a>
       
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#"><Link to="/labour"> Apply as a labourer</Link></a>
          <a class="dropdown-item" href="#"><Link to="/labourdb"> Search for labourers</Link></a>
        </div>  
              <a class="nav-link" ><Link to="/contact">Contact</Link></a>

            </div>
          </div>
         
        </div>
      </nav> */}

<nav class="navbar  navbar-expand-lg navbar-light  "  >
<a class="navbar-brand" href="#"><img className='logoimage' src="logo.jpg" alt='not found'></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav  mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"><Link to="/">Home</Link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/buy">Buy</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/sell"> Sell</Link></a>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Labour
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item hovv" href="#"><Link  to="/labour">Apply as a labour</Link></a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item hovv" href="#"><Link  to="/labourdb">Search for labour</Link></a>
         
        </div>
      </li> */}
      <li class="nav-item">
        <a class="nav-link" href="#"><Link to="/contact"> Contact</Link></a>
      </li>
    </ul>
   
  </div>
</nav>
       
        </div>
    )
}
