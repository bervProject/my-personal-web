<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="content has-text-centered">
            <h3 class="title">Social Media</h3>
            <p class="buttons are-small">
              <a href="mailto:bervianto.leo@gmail.com" class="button is-outlined">
                <span class="icon">
                  <o-icon pack="fa" icon="envelope" />
                </span>
                <span>Email</span>
              </a>
              <a v-for="contact in contacts" :key="contact.id" :href="contact.address" target="_blank"
                class="button is-outlined">
                <span class="icon">
                  <o-icon pack="fab" :icon="contact.icon" />
                </span>
                <span>{{ contact.title }}</span>
              </a>
            </p>
          </div>
        </div>
        <div class="column">
          <div class="content has-text-centered">
            <p>
              ©
              <strong>My Personal Web</strong> made with
              <o-icon pack="fas" icon="heart" variant="red" />by
              <a href="https://berviantoleo.my.id/">Bervianto Leo Pratama</a>.
            </p>
            <p>
              The source code is licensed
              <a href="https://opensource.org/licenses/mit-license.php">MIT</a>.
              The website content is licensed
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                >CC BY NC SA 4.0</a
              >.
            </p>
            <p>
              Version
              <strong>{{ version }}</strong>
            </p>
            <p>
              <a href="https://bulma.io">
                <img
                  :src="isDark ? 'https://bulma.io/assets/images/made-with-bulma--white.png' : 'https://bulma.io/assets/images/made-with-bulma--black.png'"
                  alt="Made with Bulma"
                  width="128"
                  height="24"
                />
              </a>
            </p>
            <o-button
              icon-pack="fab"
              icon-left="github"
              variant="primary"
              tag="a"
              href="https://github.com/bervProject/my-personal-web"
            >
              <strong>Github</strong>
            </o-button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" src="./MyFooter.ts"></script>
