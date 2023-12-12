import React from 'react';

const Order = () => {
    return (
        <div>
            <div class="row">
      <div class="col-lg-2 ">
        <div class="d-flex justify-content-between py-4 p-4">
          <div>
              <img width="50" height="50" src="images/img3.png" alt=""/>
          </div>
          <div class="ps-3">
            <h6 class="text-primary">Rushan<small>Smart Laundry</small></h6>
        </div>
      </div>

        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-muted" href="#">Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-muted" href="#">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-muted" href="#">Terms & Condition</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-muted" href="#">Privacy & Policy</a>
                </li>

            </ul>

        </div>
    </div>

        <div class="col-lg-10 p-4 bg-light">

            <div class="bg-white">
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="#">
                            <h6>Company Name</h6>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">New Order</a>
                    </li>



                </ul>


                <div>

                </div>
            </div>

            <div class="my-5">
                <div class="container">
                    <div class="row">
                        <a href="" class="col">
                            Add Items
                        </a>
                        <a href="review.html" class="col">
                            Review Order
                        </a>
                        <a href="" class="col">
                         Place Order
                        </a>
                      
                       
                    </div>
                </div>

            </div>
            <p>Please put one item per row (All the fields are required)</p>
            <div>
                <form class="row g-4">
                    <div class="col-lg-3">
                      <label for="validationDefault01" class="form-label ">Item name</label>
                      <input type="text" class="form-control" id="validationDefault01" value="Mark" required/>
                    </div>
                    <div class="col-lg-3">
                        <label for="validationDefault02" class="form-label">Quantity</label>
                        <input type="text" class="form-control text-muted" id="validationDefault02" value="Ex. 10" required/>
                      
                      
                      </div>
                    <div class="col-lg-3">
                      <label for="validationDefault02" class="form-label">Service</label>
                      <div class="dropdown">

                      <input type="text" class="form-control text-muted" id="validationDefault02" value="Ex. Clean & Press ➝" required data-bs-toggle="dropdown" aria-expanded="false"/>

                        <ul class="dropdown-menu dropdown-menu-light">
                          <li><a class="dropdown-item active" href="#">Clean & Press</a></li>
                            
                          <li><a class="dropdown-item" href="#">Dry Clean</a></li>
                          <li><a class="dropdown-item" href="#">Dry Clean & Press</a></li>
                          <li><a class="dropdown-item" href="#">Press</a></li>
                          <li><a class="dropdown-item" href="#">Wash</a></li>
                          <li><a class="dropdown-item" href="#">Wash & Press</a></li>
                          
                        </ul>
                      </div>
                    </div>
                    
                    <div class="col-lg-2 py-2">
                      <label for="validationDefaultUsername" class="form-label"></label>
                    
                      <div class="input-group">
                        <button type="button" class="btn btn-primary rounded">
                             <span class="bg-white text-primary rounded-circle px-1">    <i class="fa-solid fa-minus"></i></span>
                           
                          </button>
                      </div>
                    </div>

              
                    <div class="col-lg-3">
                      <label for="validationDefault01" class="form-label">Item Name</label>
                      <input type="text" class="form-control" id="validationDefault01" value="Mark" required/>
                    </div>
                    <div class="col-lg-3">
                      <label for="validationDefault02" class="form-label">Quantity</label>
                      <input type="text" class="form-control text-muted" id="validationDefault02" value="Ex. 10" required/>
                    </div>
                   

                      <div class="col-lg-3">
                        <label for="validationDefault02" class="form-label">Service</label>
                        <div class="dropdown">
  
                        <input type="text" class="form-control text-muted" id="validationDefault02" value="Ex. Clean & Press ➝" required data-bs-toggle="dropdown" aria-expanded="false"/>
  
                          <ul class="dropdown-menu dropdown-menu-light">
                            <li><a class="dropdown-item active" href="#">Clean & Press</a></li>
                              
                            <li><a class="dropdown-item" href="#">Dry Clean</a></li>
                            <li><a class="dropdown-item" href="#">Dry Clean & Press</a></li>
                            <li><a class="dropdown-item" href="#">Press</a></li>
                            <li><a class="dropdown-item" href="#">Wash</a></li>
                            <li><a class="dropdown-item" href="#">Wash & Press</a></li>
                            
                          </ul>
                        </div>
                      </div>

                    <div class="col-lg-1 py-2">
                        <label for="validationDefaultUsername" class="form-label"></label>
                      
                        <div class="input-group">
                            <button type="button" class="btn btn-primary rounded">
                                 <span class="bg-white text-primary rounded-circle px-1">    <i class="fa-solid fa-minus"></i></span>
                               
                              </button>
                          </div>
                      </div>
               
                    <div class="col-lg-3">
                      <label for="validationDefault01" class="form-label">Item name</label>
                      <input type="text" class="form-control" id="validationDefault01" value="Mark" required/>
                    </div>
                    <div class="col-lg-3">
                      <label for="validationDefault02" class="form-label">Quantity</label>
                      <input type="text" class="form-control text-muted" id="validationDefault02" value="Ex. 10" required/>
                    </div>
                    

                    <div class="col-lg-3">
                        <label for="validationDefault02" class="form-label">Service</label>
                        <div class="dropdown">
  
                        <input type="text" class="form-control text-muted" id="validationDefault02" value="Ex. Clean & Press ➝" required data-bs-toggle="dropdown" aria-expanded="false"/>
  
                          <ul class="dropdown-menu dropdown-menu-light">
                            <li><a class="dropdown-item active" href="#">Clean & Press</a></li>
                              
                            <li><a class="dropdown-item" href="#">Dry Clean</a></li>
                            <li><a class="dropdown-item" href="#">Dry Clean & Press</a></li>
                            <li><a class="dropdown-item" href="#">Press</a></li>
                            <li><a class="dropdown-item" href="#">Wash</a></li>
                            <li><a class="dropdown-item" href="#">Wash & Press</a></li>
                            
                          </ul>
                        </div>
                      </div>
                    


                    <div class="col-lg-1 py-2">
                        <label for="validationDefaultUsername" class="form-label"></label>
                      
                        <div class="input-group">
                          <button type="button" class="btn btn-primary rounded">
                               <span class="bg-white text-primary rounded-circle px-1">    <i class="fa-solid fa-plus"></i></span>
                             
                            </button>
                        </div>

                      </div>
                  </form>
            </div>
    
        </div>

    </div>
    <div class="text-center my-5 pt-5">
        <button class="py-2 px-5 rounded btn-primary">Next Page ➝</button>
       </div>
        </div>
    );
};

export default Order;