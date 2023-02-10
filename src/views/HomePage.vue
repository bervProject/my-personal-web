<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-header-title">
              <b-icon icon="user" />{{ $t('home.whoami') }}
            </h4>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img src="../assets/images/me.jpg" alt="My image" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-2">Bervianto Leo Pratama</p>
                <p class="subtitle is-4">I'm a Software Engineer. A person who loves to code as arts.</p>
              </div>
            </div>
            <div class="content is-medium">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <h4 class="title">
                    Focus Topics
                  </h4>
                  <b-taglist>
                    <b-tag icon="code" rounded size="is-medium" type="is-primary">
                      Backend Development
                    </b-tag>
                    <b-tag icon="user-check" rounded size="is-medium" type="is-primary">
                      DevOps
                    </b-tag>
                    <b-tag icon="docker" icon-pack="fab" rounded size="is-medium" type="is-warning">
                      Microservices
                    </b-tag>
                    <b-tag icon="cloud" rounded size="is-medium" type="is-warning">
                      Cloud Computing
                    </b-tag>
                    <b-tag icon="lock" rounded size="is-medium" type="is-success">
                      Cyber Security
                    </b-tag>
                    <b-tag icon="user-check" rounded size="is-medium" type="is-success">
                      DevSecOps
                    </b-tag>
                    <b-tag icon="pen" icon-pack="fas" rounded size="is-medium" type="is-secondary">
                      Software Architecture
                    </b-tag>
                    <b-tag icon="cloud" rounded size="is-medium" type="is-secondary">
                      Cloud Architecture
                    </b-tag>
                  </b-taglist>
                </div>
                <div class="column is-6">
                  <h4 class="title">
                    Technology Stacks
                  </h4>
                  <b-taglist>
                    <b-tag icon="microsoft" icon-pack="fab" rounded size="is-medium" type="is-primary">
                      .NET
                    </b-tag>
                    <b-tag icon="database" rounded size="is-medium" type="is-primary">
                      SQL Server
                    </b-tag>
                    <b-tag icon="database" rounded size="is-medium" type="is-warning">
                      PostgreSQL
                    </b-tag>
                    <b-tag icon="node-js" icon-pack="fab" rounded size="is-medium" type="is-warning">
                      Node.js
                    </b-tag>
                  </b-taglist>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-header-title">{{ $t('common.gallery') }}</h4>
          </div>
          <div class="card-image">
            <b-carousel pause-info-type="is-black">
              <b-carousel-item v-for="(carousel, i) in carousels" :key="i" @click="showImageModal(carousel.image)">
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
