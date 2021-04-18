<template>
  <div class="footer">
    <div class="container-footer">
      <img
        class="footer-logo"
        src="../../../assets/imgs/logo-footer.png"
        alt="logo"
      />

      <ul class="containter-social-list">
        <li class="social-element">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              class="img-icon"
              src="../../../assets/icons/facebook-icon.png"
              alt="facebook"
            />
          </a>
        </li>

        <li class="social-element">
          <a
            href="https://wa.me/[numero no formato: 5521telefonesemchar]"
            target="_blank"
          >
            <img
              class="img-icon"
              id="icon-whats"
              src="../../../assets/icons/whatsapp-icon.png"
              alt="whatsapp"
            />
          </a>
        </li>

        <li class="social-element">
          <a href="https://www.instagram.com/" target="_blank">
            <img
              class="img-icon"
              id="icon-insta"
              src="../../../assets/icons/instagram-icon.png"
              alt="instagram"
            />
          </a>
        </li>

        <li class="social-element">
          <a href="https://www.youtube.com/" target="_blank">
            <img
              class="img-icon"
              src="../../../assets/icons/youtube-icon.png"
              alt="youtube"
            />
          </a>
        </li>
      </ul>

      <p class="footer-copy">
        © Copyright 2021 - Todos os direitos reservados
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #403f48;
}

.container-footer {
  display: flex;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  flex-flow: column;
}

.footer-logo {
  margin: 2em 0em 3em 0em;
  width: 10em;
}

.containter-social-list {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-element {
  margin: 0.5em 0.3em 2em 0.3em;
}

.img-icon {
  width: 32px;
  height: 32px;
}

#icon-insta {
  width: 37px;
  height: 37px;
}

#icon-whats {
  width: 35px;
  height: 35px;
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.footer-copy {
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  color: #ebebeb;
  margin-bottom: 1.5em;
}
</style>
