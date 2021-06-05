<template>
  <footer class="footer has-background-white-ter">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="content has-text-centered">
            <p>
              ©
              <strong>My Personal Web</strong> made with
              <b-icon
                icon="heart"
                type="is-red"
              />by
              <a href="https://berviantoleo.my.id/">Bervianto Leo Pratama</a>.
            </p>
            <p>
              The source code is licensed
              <a href="https://opensource.org/licenses/mit-license.php">MIT</a>.
              The website content is licensed
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              >CC BY NC SA 4.0</a>.
            </p>
            <p>
              Version
              <strong>{{ version }}</strong>
            </p>
          </div>
        </div>
        <div class="column">
          <div class="content has-text-centered">
            <p>
              <a here="https://buefy.org/">
                #MadeWithBuefy
              </a>
            </p>
            <p>
              <a href="https://bulma.io">
                <img
                  src="https://bulma.io/images/made-with-bulma--black.png"
                  alt="Made with Bulma"
                  width="128"
                  height="24"
                >
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" src="./MyFooter.ts"></script>
