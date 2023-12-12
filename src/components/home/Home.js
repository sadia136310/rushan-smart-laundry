import React from 'react';
import img3 from '../../images/img3.png';
const Home = () => {
    return (
        <>
            <div class="row">
                <div class="col-lg-2 ">
                    <div class="d-flex justify-content-between p-4">
                        <div>
                            <img width="50" height="50" src={img3.src} alt="" />
                        </div>
                        <div class="ps-3">
                            <h6 class="text-primary">Rushan <small> Smart Laundry</small></h6>
                        </div>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item d-flex">
                                <div><i class="fa-solid fa-house mt-2 me-3"></i></div>
                                <div>
                                    <a class="nav-link active" aria-current="page" href="">Home</a>
                                </div>
                            </li>
                            <li class="nav-item d-flex">
                                <div><i class="fa-solid fa-user mt-2 me-3"></i></div>
                                <div> <a class="nav-link text-muted" href="profile.html">Profile</a></div>
                            </li>
                            <li class="nav-item d-flex">
                                <div> <i class="fa-sharp fa-solid fa-ban  mt-2 me-3"></i></div>
                                <div> <a class="nav-link text-muted" href="#">About us</a></div>
                            </li>
                            <li class="nav-item d-flex">
                                {/* 
                                <div><i class="fa-solid fa-circle-check mt-2 me-2"></i></i></div>
                                */}
                                <div><a class="nav-link text-muted" href="#">Terms & Condition</a></div>
                            </li>
                            <li class="nav-item d-flex">
                                <div><i class="fa-solid fa-lock mt-2 me-3"></i></div>
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
                                <a class="nav-link">Home</a>
                            </li>
                        </ul>
                        <div>
                        </div>
                    </div>
                    <div>
                        <div class="text-center">
                            <button class="m-4 py-3 px-3 rounded bg-primary">
                                <i class="fa-solid fa-plus bg-white rounded-circle text-primary p-1"></i>
                                <br />
                                <a href="order.html" class="text-white">New Order</a>
                            </button>
                        </div>
                    </div>
                    <div>
                        <nav class="navbar navbar-light bg-light">
                            <div class="container-fluid">
                                <a class="navbar-brand">All Orders</a>
                                <form class="d-flex">
                                    <input class="form-control me-2 text-muted" type="search" placeholder="Search by order id"
                                        aria-label="Search" />
                                    <button class="btn btn-outline-white border" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                                <div class="d-flex pe-5 me-5">
                                    <nav aria-label="...">
                                        <ul class="pagination pagination-sm">
                                            <li class="" aria-current="page">
                                                <span class="page-link">Page</span>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">9</a></li>
                                            <li class="page-item"><a class="page-link" href="#">of 11</a></li>
                                        </ul>
                                    </nav>
                                    <nav class="dropdown ps-4">
                                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-martini-glass"></i>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <h5 class="dropdown-item text-primary " href="#">Status</h5>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck1" />

                                                        <button type="button" class="btn btn-success px-4">Done</button>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck1" />
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Pending
                                                        </label>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value=""
                                                            id="defaultCheck1" />
                                                        <label class="form-check-label" for="defaultCheck1">
                                                            Processing
                                                        </label>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="bg-white">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Last Date</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    {/* <!-- Button trigger modal --> */}
                                    <td type="" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        #34563
                                    </td>
                                    <td>October 22, 2023</td>
                                    <td><button type="button" class="btn btn-primary mx-auto px-3">Done</button></td>
                                </tr>
                                <tr>
                                    {/* <!-- Button trigger modal --> */}
                                    <td type="" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        #34563
                                    </td>
                                    <td>October 22, 2023</td>
                                    <td><button type="button" class="btn btn-secondary mx-auto px-3">Pending</button></td>
                                </tr>
                                <tr>
                                    {/* <!-- Button trigger modal --> */}
                                    <td type="" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        #34563
                                    </td>
                                    <td>October 22, 2023</td>
                                    <td> <button type="button" class="btn btn-info text-white">Processing</button></td>
                                </tr>
                                <tr>
                                    <td type="" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        #34563
                                    </td>
                                    <td>October 22, 2023</td>
                                    <td> <button type="button" class="btn btn-success px-4">Done</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="text-center mt-5">
                            <button class="py-2 px-4 rounded text-muted"><i class="fa-solid fa-arrow-left"></i> Previous Page</button>
                            <button class="py-2 px-4 rounded btn-primary">Next Page <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;