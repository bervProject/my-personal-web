<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-header-title">{{ $t('home.whoami') }}</h4>
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
                <p class="subtitle is-6">A person who loves to code as arts</p>
              </div>
            </div>
            <div class="content is-medium">
              <h6 class="title">
                Focus Topics
              </h6>
              <b-taglist>
                <b-tag rounded size="is-medium" type="is-primary">
                  Backend Development
                </b-tag>
                <b-tag rounded size="is-medium" type="is-primary">
                  DevOps
                </b-tag>
                <b-tag rounded size="is-medium" type="is-warning">
                  Microservices
                </b-tag>
                <b-tag rounded size="is-medium" type="is-warning">
                  Cloud Computing
                </b-tag>
                <b-tag rounded size="is-medium" type="is-success">
                  Cyber Security
                </b-tag>
                <b-tag rounded size="is-medium" type="is-success">
                  DevSecOps
                </b-tag>
                <b-tag rounded size="is-medium" type="is-secondary">
                  Software Architecture
                </b-tag>
                <b-tag rounded size="is-medium" type="is-secondary">
                  Cloud Architecture
                </b-tag>
              </b-taglist>
              <h6 class="title">
                Technology Stacks
              </h6>
              <b-taglist>
                <b-tag rounded size="is-medium" type="is-primary">
                  .NET
                </b-tag>
                <b-tag rounded size="is-medium" type="is-primary">
                  SQL Server
                </b-tag>
                <b-tag rounded size="is-medium" type="is-warning">
                  PostgreSQL
                </b-tag>
                <b-tag rounded size="is-medium" type="is-warning">
                  Node.js
                </b-tag>
                <b-tag rounded size="is-medium" type="is-success">
                  Python
                </b-tag>
                <b-tag rounded size="is-medium" type="is-success">
                  MySQL
                </b-tag>
                <b-tag rounded size="is-medium" type="is-secondary">
                  Elixir
                </b-tag>
              </b-taglist>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <verse-random></verse-random>
      </div>
      <div class="column is-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-header-title">{{ $t('common.gallery') }}</h4>
          </div>
          <div class="card-image">
            <b-carousel pause-info-type="is-black">
              <b-carousel-item
                v-for="(carousel, i) in carousels"
                :key="i"
                @click="showImageModal(carousel.image)"
              >
                <b-image :src="getAssets(carousel.image)" ratio="16by9" />
              </b-carousel-item>
            </b-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
