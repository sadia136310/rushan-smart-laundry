import React from 'react';

const Review = () => {
    return (

        <div class="row">

            <div class="col-lg-2 ">
                <div class="d-flex justify-content-between p-4">
                    <div>
                        <img width="50" height="50" src="images/img3.png" alt="" />
                    </div>
                    <div class="ps-3">
                        <h6 class="text-primary">Rushan <small> Smart Laundry</small></h6>
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
                            <h6 href="" class="col">
                                Add Items
                            </h6>
                            <h6 href="" class="col">
                                Review Order
                            </h6>
                            <a href="order-place.html" class="col">
                                Place Order
                            </a>
                        </div>
                    </div>

                </div>

                <div class="mb-5 bg-white">
                    <table class="table">
                        <thead>
                            <tr>
                                <td scope="col">No</td>
                                <td scope="col">Item Name</td>
                                <td scope="col">Quantity</td>
                                <td scope="col">Service</td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1</td>
                                <td>Bed Sheets</td>
                                <td>03</td>
                                <td>Dry Clean</td>
                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td>Shirt</td>
                                <td>04</td>
                                <td>Wash & Press</td>
                            </tr>
                            <tr>
                                <td scope="row">3</td>

                                <td>Blanket</td>
                                <td>04</td>
                                <td>Press</td>
                            </tr>
                            <tr>
                                <td scope="row">4</td>

                                <td>Pant</td>
                                <td>05</td>
                                <td>Wash</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="text-center mt-5">

                    <button class="py-2 px-5 rounded btn-primary">⇽ Back</button>
                    <button class="py-2 px-5 rounded text-muted"> Next ➝</button>



                </div>

            </div>
        </div>
    );
};

export default Review;