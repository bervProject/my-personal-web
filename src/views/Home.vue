<template>
  <div>
    <b-notification type="is-info">
      <p>
        <strong>Welcome to Bervianto Leo Pratama's site!</strong>
      </p>
      <p>
        Please also visit my another site here:
        <a href="https://berviantoleo.my.id">berviantoleo.my.id</a>
      </p>
    </b-notification>
    <div class="card">
      <div class="card-image">
        <b-carousel>
          <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <b-image :src="getAssets(carousel.image)" ratio="16by9"></b-image>
          </b-carousel-item>
        </b-carousel>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                class="is-rounded"
                src="../assets/images/me.jpg"
                alt="My image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Bervianto Leo Pratama</p>
            <p class="subtitle is-6">@berviantoleo</p>
          </div>
        </div>
        <div class="content is-medium">
          <div class="columns is-multiline">
            <div class="column">
              <h4 class="title">Certification</h4>
              <div class="columns">
                <div class="column">
                  <div
                    data-iframe-width="150"
                    data-iframe-height="270"
                    data-share-badge-id="61a336e9-92a7-4c8c-aeee-a5c07bf3fae5"
                    data-share-badge-host="https://www.youracclaim.com"
                  ></div>
                </div>
                <div class="column">
                  <div
                    data-iframe-width="150"
                    data-iframe-height="270"
                    data-share-badge-id="1ed42ba5-d7fe-4191-a5cb-90f86edcd33a"
                    data-share-badge-host="https://www.youracclaim.com"
                  ></div>
                </div>
              </div>
              <script
                type="application/javascript"
                defer
                src="https://cdn.youracclaim.com/assets/utilities/embed.js"
              ></script>
            </div>
            <div class="column">
              <h4 class="title">Who am I?</h4>
              <b-taglist>
                <b-tag rounded size="is-medium" type="is-primary"
                  >Backend Developer</b-tag
                >
                <b-tag rounded size="is-medium" type="is-warning"
                  >Cyber Security Enthusiasts</b-tag
                >
                <b-tag rounded size="is-medium" type="is-warning"
                  >Microservices</b-tag
                >
                <b-tag rounded size="is-medium" type="is-dark"
                  >Institut Teknologi Bandung</b-tag
                >
              </b-taglist>
            </div>
            <div class="column">
              <h5 class="subtitle">Donate</h5>
              <a href="https://ko-fi.com/I2I2YXS8" target="_blank"
                ><img
                  height="36"
                  style="border: 0px; height: 36px"
                  src="https://cdn.ko-fi.com/cdn/kofi1.png?v=2"
                  border="0"
                  alt="Buy Me a Coffee at ko-fi.com"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
