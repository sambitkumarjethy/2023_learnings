<template>
  <div class="container mt-3">
    <div class="row">
    <div class="col">
      <p class="h3 text-success"> Contact Manager
        <router-link to="/contacts/add" class="btn btn-success btn-sm">
          <i class="fa fa-plus-circle"></i> New
        </router-link>
       </p>
       <p class="fst-italic">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
       <form>
        <div class="col-sm-6">
            <div class="row">
              <div class="col">
                  <input type="text" class="form-control" placeholder="Search Name">
              </div>
              <div class="col">
                  <input type="submit" class="btn btn-outline-dark" placeholder="Search Name">
              </div>
            </div>
        </div>
      </form>
    </div>
    </div>
  </div>
  <!-- CARD -->
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <div class="card  my-2 list-group-item-success shadow-lg">
          <div class="card-body">
            <div class="row align-items-center1">
              <div class="col-sm-4">
                <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img" />

              </div>
               <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    Name :<span class="fw-bold"> Sambit</span>
                  </li>
                  <li class="list-group-item">
                    Email :<span class="fw-bold"> Sambit@g.com</span>
                  </li>
                  <li class="list-group-item">
                    Mobile Number :<span class="fw-bold"> 1234567890</span>
                  </li>
                </ul>
                
              </div>
               <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center ">
                <router-link to="/contacts/view/:contactID" class="btn btn-warning my-1">
                  <i class="fa fa-eye"></i>
                </router-link>
                 <router-link to="/contacts/edit/:contactID" class="btn btn-primary my-1">
                  <i class="fa fa-pen"></i>
                </router-link>
                <button class="btn btn-danger my-1">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactManager",
};
</script>

<style></style>
