<template>
   <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Edit Contact</p>
        <p class="fst-italic">here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form>
          <div class="mb-2">
             <input type="text" class="form-control" placeholder="Name" />
          </div>
           <div class="mb-2">
             <input type="text" class="form-control" placeholder="Photo URL" />
          </div>
           <div class="mb-2">
             <input type="Number" class="form-control" placeholder="Mobile" />
          </div>
           <div class="mb-2">
             <input type="text" class="form-control" placeholder="Tittle" />
          </div>
           <div class="mb-2">
             <select class="form-control">
              <option value="">Select Group</option>
             </select>
          </div>
          <div class="mb-2">
             <input type="submit" class="btn btn-success" value="Update" />
          </div>
         
         
        </form>
      </div>
      <div class="col-md-4">
        <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png"  class="contact-img"/>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  name: "EditContact",
};
</script>
<style scoped></style>
