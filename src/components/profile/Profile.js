import React from 'react';

import img3 from '../../images/img3.png';

const Profile = () => {
    return (

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
                                <a class="nav-link text-muted" aria-current="page" href="">Home</a>
                            </div>
                        </li>
                        <li class="nav-item d-flex">
                            <div><i class="fa-solid fa-user mt-2 me-3"></i></div>
                            <div> <a class="nav-link active" href="profile.html">Profile</a></div>
                        </li>
                        <li class="nav-item d-flex">
                            <div> <i class="fa-sharp fa-solid fa-ban  mt-2 me-3"></i></div>
                            <div> <a class="nav-link text-muted" href="#">About us</a></div>
                        </li>
                        <li class="nav-item d-flex">
                            {/* <div><i class="fa-solid fa-circle-check mt-2 me-2"></i></i></div> */}
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
                            <a class="nav-link">Profile</a>
                        </li>

                    </ul>

                    <div>

                    </div>

                </div>


                <div class="pt-4">
                    <h6>Company Profile</h6>
                </div>


                <div class="bg-white py-3 px-4">
                    <form class="row g-4">

                        <div class="col-lg-5">
                            <label for="validationDefault01" class="form-label">Name</label>
                            <input type="text" class="form-control" id="validationDefault01" value="Smart Food" required />
                        </div>
                        <div class="col-lg-5">
                            <label for="validationDefault02" class="form-label">Mobile Number
                            </label>
                            <input type="text" class="form-control text-muted" id="validationDefault02"
                                value="+97 345678239" required />
                        </div>



                        <div class="col-lg-5">
                            <label for="validationDefault01" class="form-label">Email</label>
                            <input type="text" class="form-control" id="validationDefault01" value="smartfood@gmail.com"
                                required />
                        </div>
                        <div class="col-lg-5">
                            <label for="validationDefault02" class="form-label">Address</label>
                            <input type="text" class="form-control text-muted" id="validationDefault02"
                                value="Dubai, United Arab Emirates" required />
                        </div>


                        <div class="col-lg-5">
                            <label for="validationDefault01" class="form-label">Registration Number</label>
                            <input type="text" class="form-control" id="validationDefault01" value="#SML213" required />
                        </div>
                        <div class="col-lg-5">
                            <label for="validationDefault02" class="form-label">Type</label>
                            <input type="text" class="form-control text-muted" id="validationDefault02" value="Food"
                                required />
                        </div>

                    </form>

                    <div class="py-5 mt-5">
                        <h6>Primary Contact Person</h6>


                        <div class="d-flex">
                            <div class="mb-2">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(22).webp"
                                    class="rounded-circle shadow-1-strong" width="60" height="60" />
                            </div>
                            <div class="mx-3">
                                <p class="lead my-1 text-muted">
                                    Ahmed Sajid
                                </p>
                                <p class="font-italic font-weight-normal mb-0 text-muted">Manager</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Profile;