<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success">
            Contact Manager
            <router-link to="/contacts/add" class="btn btn-success btn-sm">
              <i class="fa fa-plus-circle"></i> New
            </router-link>
          </p>
          <p class="fst-italic">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
          <form>
            <div class="col-sm-6">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Name"
                  />
                </div>
                <div class="col">
                  <input
                    type="submit"
                    class="btn btn-outline-dark"
                    placeholder="Search Name"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--Spinner -->
    <div v-if="loading">
      <div class="container">
        <div class="row">
          <div class="col">
            <SpinnerLoader />
          </div>
        </div>
      </div>
    </div>
    <!-- Error message -->
    <div v-if="!loading && errorMessage">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="h3 text-danger fw-bold">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CARD -->
    <div class="container mt-3" v-if="contacts.length > 0">
      <div class="row">
        <div class="col-md-6" v-for="contact of contacts" :key="contact">
          <div class="card my-2 list-group-item-success shadow-lg">
            <div class="card-body">
              <div class="row align-items-center1">
                <div class="col-sm-4">
                  <img :src="contact.photo" alt="" class="contact-img" />
                </div>
                <div class="col-sm-7">
                  <ul class="list-group">
                    <li class="list-group-item">
                      Name :<span class="fw-bold"> {{ contact.name }}</span>
                    </li>
                    <li class="list-group-item">
                      Email :<span class="fw-bold"> {{ contact.email }}</span>
                    </li>
                    <li class="list-group-item">
                      Mobile Number :<span class="fw-bold">
                        {{ contact.mobile }}</span
                      >
                    </li>
                  </ul>
                </div>
                <div
                  class="col-sm-1 d-flex flex-column justify-content-center align-items-center"
                >
                  <router-link
                    to="/contacts/view/:contactID"
                    class="btn btn-warning my-1"
                  >
                    <i class="fa fa-eye"></i>
                  </router-link>
                  <router-link
                    to="/contacts/edit/:contactID"
                    class="btn btn-primary my-1"
                  >
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
  </div>
</template>

<script>
import SpinnerLoader from "../components/SpinnerLoader.vue";
// import ContactService from "@/services/ContactService";

export default {
  name: "ContactManager",
  components: { SpinnerLoader },
  data: function () {
    return {
      loading: false,
      contacts: [],
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      // let response = await fetch("http://localhost:9000/contacts")
      // console.log({response},response.status);
      // this.contacts = response.url;
      //   this.loading = false;
      this.loading = true;
      const response = await fetch("http://localhost:9000/contacts");
      const data = await response.json();
      this.contacts = data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {},
};
</script>

<style></style>
