<template>
<footer class="footer text-center text-white" style="background-color: #AAECFA;">
  <div class="container pt-4">
    <section class="mb-4">
      <!-- Facebook -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://pt-br.facebook.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://twitter.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.google.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.instagram.com/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>
    </section>
  </div>
  <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright
  </div>
</footer>
  </template>

<script>
    export default {
        name : 'footerComponente'
    }
</script>

<style scoped>
    /* body {
        margin-top: 5%;
        border-top-style: solid;
        border-top-color: #DE94A9;
    } */

    .footer{
        border-style: solid;
        border-color: #DE94A9;
        margin-top : 1.5%;
        margin-left : 0.3%;
        margin-bottom : 0.3%;
        width: 99.3%;
        height: -10%;
    }
</style>