<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">View Contact</p>
        <p class="fst-italic">here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
         <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png"  class="contact-img-big"/>
      </div>
      <div class="col-md-6">
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
          <li class="list-group-item">
            COmpany :<span class="fw-bold"> Infosys</span>
          </li>
          <li class="list-group-item">
            Tittle :<span class="fw-bold"> ENG</span>
          </li>
          <li class="list-group-item">
            Group :<span class="fw-bold"> Level 4</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success"> <i class="fa fa-arrow-circle-left"></i> Back</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ViewContact",
};
</script>
<style scoped></style>
