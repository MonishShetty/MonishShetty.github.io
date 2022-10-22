import React from "react";
import { Link } from 'react-router-dom'
export default function home() {
  return (
    <div>
      <h1 className="homeheading">A long-term platform to benefit farmers and customers</h1>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block  w-60 " src="https://uploads-ssl.webflow.com/5ea681c85dd63ed778d3e976/6030fb11d5a2144c97ec43df_FARM%20TO%20CONSUMER%20Main%20Logo.png" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5><span>No middlemen</span> </h5>
    <p><span> Purchase Fresh Products Directly From Farmers</span></p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-60" src="https://media.istockphoto.com/photos/happy-smiling-indian-farmer-counting-currency-notes-inside-the-or-picture-id1330214182?k=20&m=1330214182&s=612x612&w=0&h=FsiB1Z6g2Z4lDjsSPC-wguiAUwP5teZxPJ-2HIch_6s=" alt="Second slide"/>
    <div class="carousel-caption d-none d-md-block">
    <h5><span>100% trusted</span></h5>
    <p><span>Over 200+ Benefitted Farmers</span></p>
  </div></div>
    <div class="carousel-item">
      <img class="d-block w-60" src="https://www.pngitem.com/pimgs/m/675-6751750_iso-9001-2015-green-logo-hd-png-download.png" alt="Third slide"/>
   <div class="carousel-caption d-none d-md-block">
    <h5><span>Globally Certified</span></h5>
    <p><span>An ISO 9001-2015 Certified Project</span></p>
  </div> </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div className="whykc">
  
<h1 className="why">Why Krushi Comrade?</h1>

      <div className="cards">
      
        <div className="card1">
          <div className="card1img">
            <img src="https://media.istockphoto.com/photos/indian-farmer-at-onion-field-picture-id1092520698?k=20&m=1092520698&s=612x612&w=0&h=azmC9S6SiHTXVh-dmUFD7JJ0QF_pjxmudCjkBM9UAuE=" alt="not found"></img>
          </div>
          <div className="card1content">
            A vital market to benefit farmers 
          </div>
        </div>

        <div className="card2">
          <div className="card2img">
            <img src="https://st2.depositphotos.com/1518767/6901/i/600/depositphotos_69019769-stock-photo-farmer-selling-organic-veg-at.jpg" alt="not found"></img>
          </div>
          <div className="card2content">
            Supply fruits and vegetables directly from farmers
          </div>
        </div>

        <div className="card3">
          <div className="card3img">
            <img src="https://thumbs.dreamstime.com/b/female-customer-buying-organic-food-vegetables-cabbage-farm-market-african-american-men-salesperson-putting-products-bag-158751082.jpg" alt="not found"></img>
          </div>
          <div className="card3content">
            Access for fresh, hygienic produce for consumers 
          </div>
        </div>
      </div>
      <div className="cards2">
      <div className="card4">
          <div className="card4img">
            <img src="https://www.onmanorama.com/content/dam/mm/en/news/nation/images/2019/6/19/monsoon-agriculture.jpg.transform/onm-articleimageamp/image.jpg" alt="not found"></img>

          </div>
          <div className="card4content">
            Good in agricultural tasks and willing to work? <br/>Apply here
          </div>
        </div>
        
        <div className="card5">
          <div className="card5img">
          <img src="https://media.istockphoto.com/photos/farmer-standing-in-the-wheat-field-picture-id647652932?k=20&m=647652932&s=612x612&w=0&h=0p4iGwSf00vPPR0ZKzThHreYRK0QgS4XHbwteS3stZs=" alt="not found"></img>

          </div>
          <div className="card5content">
            Facing labour shortage for your agricultural field ? <br/>Find labourers in your location
          </div>
        </div>
      </div>
      </div>

      <div className="newpages">
        <a class="nav-link newpagecard1"><Link to="/signup"><div className="buy">
          <h1>buy page</h1>
        </div></Link></a>

        <a class="nav-link newpagecard2"><Link to="/login"><div className="sell">
          <h1>sell page</h1>
        </div></Link></a>


      </div>

      <footer>
        <div class="footer-top">
          <div class="container">
            <div class="footer-day-time">
              <div class="row">
                <div class="col-md-8">
                  <ul>
                    <li>Always in your service</li>
                    {/* <li>Sunday: 8:00 AM - 12:00 PM</li> */}
                  </ul>
                </div>
                <div class="col-lg-4">
                  <div class="phone-no">
                    <a href="tel:+12 34 56 78 90"><i class="fa fa-mobile" aria-hidden="true"></i>Call 9900447737</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">

                <h4>About us</h4>
                <p>Currently, rural farmers in India are trapped in an economic environment where they have little ownership of the value chain and little access to higher margin markets. This means they have unstable and low incomes. We’re here to change that.  </p>

              </div>

              <div class="col-md-4">
                <h4>Information</h4>
                <ul class="address1">
                  {/* <li><i class="fa fa-map-marker"></i>'Krushi Comrade' </li> */}
                  <li><i class="fa fa-envelope"></i><a href="mailto:#">krushicomrade@gmail.com</a></li>
                  <li><i class="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90">9900447737</a></li>
                </ul>
              </div>

              <div class="col-md-4">
                <h4>Follow us</h4>
                <ul class="social-icon">
                  <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-sm-5">
                <p class="copyright text-uppercase">Copyright © 2022
                </p>
              </div>
              <div class="col-sm-7">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/buy">Buy</Link></li>
                  <li><Link to="/sell">Sell</Link></li>
                  <li><Link to="/labour">Labour</Link></li>
                  <li><Link to="/contact">Contact</Link></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>





    </div>
  )
}

