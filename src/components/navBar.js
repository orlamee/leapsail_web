/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";
import ng from "../img/ng.png";
import ballon from "../img/baloon.png";
import customer from "../img/customer.png";
import success from "../img/success.png";
import investment from "../img/inv.png";
import visa from "../img/vis.png";
import ticketing from "../img/ticket.png";
import tours from "../img/tourss.png";
import hotel from "../img/reserve.png";
import edu from "../img/edu.png";
import hubs from "../img/hubs.png";
import immigration from "../img/immi.png";
import real from "../img/real.png";
import blog from "../img/blog.png";
import guides from "../img/guides.png";
import webinars from "../img/webinars.png";
import client from "../img/clients.png";
import agent from "../img/agent.png";
import help from "../img/help.png";
import book from "../img/book.png";


function Header() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <div className='container-fluid'>
          <Link className='navbar-brand' to="/">
            <img src={logo} alt="" className='logo img-fluid' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className='me-auto'>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" to="/">Why Leapsail</Link>
                  <div className="dropdown-menu dropdown-large">
                    <div className='row why-leap-menu'>
                      <div className="col-sm-6 col-6 left-menu">
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={ballon} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2'>
                            <h6>Why Choose Leapsail</h6>
                            <p>Over 8,000 Users trust Lit. Here's why.</p>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={success} alt="" className='img-fluid desktop' width={112}/> </div>
                          <div className='p-2'>
                            <h6>Success rates</h6>
                            <p>Get the best transactions success rates in the industry.</p>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={customer} alt="" className='img-fluid desktop' width={100}/> </div>
                          <div className='p-2'>
                            <h6>Customer</h6>
                            <p>See Lit's checkout form and Dashboard in action.</p>
                          </div>
                        </div> 
                      </div>
                      <div className="col-sm-6 col-6 right-menu">
                        <div className="mb-3">
                          <div className='p-2'>
                            <h6>YOUR GROWTH STAGE</h6>
                            <p>For Enterpreneurs<br/>For Corprates<br/>For Global Brands</p>
                          </div>
                        </div> 
                        <div className="mb-3">
                          <div className='p-2'>
                            <h6>YOUR BUSINESS TYPE</h6>
                            <p>For Bloggers<br/>For Ticketers<br/>For Global Brands</p>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</Link>
                  <div className="dropdown-menu dropdown-large">
                    <div className='row why-leap-menu'>
                      <div className="col-sm-6 col-6 left-menu">
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={investment} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-2'>
                            <h6><Link to="/investment">Investment</Link></h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={visa} alt="" className='img-fluid desktop' /> </div>
                          <div className='p-2 mt-2'>
                            <h6>Visa</h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={ticketing} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-2'>
                            <h6>Ticketing</h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={hotel} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-2'>
                            <h6>Hotel Reservation</h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={tours} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-2'>
                            <h6><Link to="/tours">Tours</Link></h6>
                          </div>
                        </div> 
                      </div>
                      <div className="col-sm-6 col-6 right-menu">
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={edu} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-2'>
                            <h6><Link to="/educational">Educational</Link></h6>
                          </div>
                        </div>  
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={hubs} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-2'>
                            <h6>Hub</h6>
                          </div>
                        </div>  
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={real} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-2'>
                            <h6>Real Estate</h6>
                          </div>
                        </div>  
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={immigration} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-2'>
                            <h6>Immigration</h6>
                          </div>
                        </div>  
                        
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Pricing</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Learn</Link>
                  <div className="dropdown-menu dropdown-large">
                    <div className='row why-leap-menu'>
                      <div className="col-sm-6 col-6 left-menu">
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={blog} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-4'>
                            <h6>Blog</h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={guides} alt="" className='img-fluid desktop' /> </div>
                          <div className='p-2 mt-4'>
                            <h6>Guides</h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-2">
                          <div className='p-2'><img src={webinars} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-4'>
                            <h6>Webinars</h6>
                          </div>
                        </div> 
                      </div>
                      <div className="col-sm-6 col-6 right-menu">
                        <div className="mb-2">
                          <div className='p-2 mt-2'>
                            <h6><a href='/'>Company</a></h6>
                          </div>
                          <div className='p-2'>
                            <h6><a href='/'>About us</a></h6>
                          </div>
                          <div className='p-2'>
                            <h6><a href='/'>Compliance</a></h6>
                          </div>
                          <div className='p-2'>
                            <h6><a href='/'>Careers</a></h6>
                          </div>
                          <div className='p-2'>
                            <h6><a href='/'>Board</a></h6>
                          </div>
                        </div>  
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='ml-auto' style={{marginTop: "5px"}}>
              <ul className='navbar-nav'>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact</Link>
                  <div className="dropdown-menu dropdown-mini">
                    <div className='row why-leap-menu'>
                      <div className="col-sm-12 col-6 mini-menu">
                        <div className="d-flex flex-row mb-1">
                          <div className='p-2'><img src={agent} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-4'>
                            <h6><Link to="/consultation">Agents</Link></h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-1">
                          <div className='p-2'><img src={client} alt="" className='img-fluid desktop' /> </div>
                          <div className='p-2 mt-4'>
                            <h6>Client</h6>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Support</Link>
                  <div className="dropdown-menu dropdown-mini">
                    <div className='row why-leap-menu'>
                      <div className="col-sm-12 col-6 mini-menu">
                        <div className="d-flex flex-row mb-1">
                          <div className='p-2'><img src={help} alt="" className='img-fluid desktop'/> </div>
                          <div className='p-2 mt-4'>
                            <h6>Quick Help</h6>
                          </div>
                        </div> 
                        <div className="d-flex flex-row mb-1">
                          <div className='p-2'><img src={book} alt="" className='img-fluid desktop' /> </div>
                          <div className='p-2 mt-4'>
                            <h6>Book a Slot</h6>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
                <li className='nav-item'>
                  <a className='btn brand-bg text-white px-4 fs-6 rounded-pill' href="/register">Create Account</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/"><img src={ng} alt="" className='img-fluid' width={28} style={{marginTop: "-4px"}} /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
    
  );
}
export default Header;