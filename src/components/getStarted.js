import React from "react";
// import tour from "../img/tour.png";
// import webinar from "../img/webinar.png";
// import educational from "../img/educational.png";
// import finance from "../img/finance.png";
// import investment from "../img/investment.png";
// import estate from "../img/estate.png";
// import ticketing from "../img/ticketing.png";
// import visa from "../img/visa.png";
// import hotel from "../img/hotel.png";
// import reservation from "../img/reservation.png";
// import event from "../img/event.png";
// import entertainment from "../img/entertainment.png";
// import charity from "../img/charity.png";
// import hub from "../img/hub.png";
// import immigration from "../img/immigration.png";


function GetStarted() {
  return(
    <section className="getstarted">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <h1 className="mb-2">Work in the way that works for you!</h1>
            <h6>What would you like to manage with Leapsail.com?</h6>
          </div>
        </div>
        {/* <div className="row justify-content-center products desktop">
          <div className="col-12 col-md-10 col-xxl-9">
            <div className="d-flex flex-row mt-5">
              <img src={tour} alt="tours" title="Tours" className="img-fluid me-3" />
              <img src={webinar} alt="webinar" title="Webinar" className="img-fluid me-3" />
              <img src={educational} alt="educational" title="Educational" className="img-fluid me-3" />
              <img src={finance} alt="finance" title="Finance" className="img-fluid me-3" />
              <img src={investment} alt="investment" title="Investment" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center products desktop">
          <div className="col-12 col-md-8 col-xxl-7">
            <div className="d-flex flex-row mt-4">
              <img src={estate} alt="estate" title="Estate" className="img-fluid me-3" />
              <img src={ticketing} alt="ticketing" title="Ticketing" className="img-fluid me-3" />
              <img src={visa} alt="visa" title="Visa" className="img-fluid me-3" />
              <img src={hotel} alt="hotel" title="Hotel" className="img-fluid me-3" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center products desktop">
          <div className="col-12 col-md-8 col-xxl-7">
            <div className="d-flex flex-row mt-4">
              <img src={reservation} alt="reservation" title="Reservation" className="img-fluid me-3" style={{height: "40px"}} />
              <img src={event} alt="events" title="Events" className="img-fluid me-3" style={{height: "40px"}} />
              <img src={entertainment} alt="entertainment" title="Entertainment" className="img-fluid me-3" style={{height: "40px"}} />
              <img src={charity} alt="charity" title="Charity" className="img-fluid me-3" style={{height: "40px"}} />
            </div>
          </div>
        </div>
        <div className="row justify-content-center products desktop">
          <div className="col-12 col-md-4 col-xxl-3">
            <div className="d-flex flex-row mt-4">
              <img src={hub} alt="hub" title="Hub" className="img-fluid me-3" />
              <img src={immigration} alt="immigration" title="Immigration" className="img-fluid me-3" />
            </div>
          </div>
        </div> */}
        <div className="row justify-content-center btn-padding">
          <div className="col-md-6 text-center">
            <a className='btn brand-bg text-white px-5 py-3 rounded-pill' href="/register">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted;