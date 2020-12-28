<template>
  <div>
    <h2 class="title">Experience</h2>
    <b-collapse
      class="card"
      animation="slide"
      v-for="(edu, index) of eduData"
      :key="index"
      :open="isOpen == index"
      @open="isOpen = index"
    >
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <div class="card-header-title">
          <div class="content">
            <div class="media">
              <div class="media-left">
                <b-icon size="is-medium" pack="fa" icon="briefcase"></b-icon>
              </div>
              <div class="media-content">
                <div class="title is-4">{{ edu.job }}</div>
                <div class="subtitle is-5">
                  {{ edu.department }}
                </div>
                <div class="subtitle is-6">
                  {{ edu.startDate | moment('DD MMMM YYYY') }} -
                  <template v-if="edu.endDate">
                    {{ edu.endDate | moment('DD MMMM YYYY') }}
                  </template>
                  <template v-else>
                    Now
                  </template>
                  ({{
                    edu.startDate
                      | moment('from', edu.endDate ? edu.endDate : 'now', true)
                  }})
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="card-header-icon">
          <b-icon
            pack="fa"
            :icon="props.open ? 'angle-down' : 'angle-up'"
          ></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p>{{ edu.description }}</p>
          <b-button type="is-info" tag="a" :href="edu.departmentLink" v-if="edu.departmentLink">
            Visit Company Page
          </b-button>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script lang="ts" src="./Experience.ts"></script>
