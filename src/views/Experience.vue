<template>
  <div>
    <h2 class="title">
      Experience
    </h2>
    <div class="columns is-multiline">
      <div class="column is-12">
        <h3 class="subtitle">
          Work Experience
        </h3>
        <b-collapse
          v-for="(edu, index) of workData"
          :key="index"
          class="card"
          animation="slide"
          :open="isOpen == index"
          @open="isOpen = index"
        >
          <template #trigger="props">
            <div
              class="card-header"
              role="button"
            >
              <div class="card-header-title">
                <div class="content">
                  <div class="media">
                    <div class="media-left">
                      <b-icon
                        size="is-medium"
                        pack="fa"
                        icon="briefcase"
                      />
                    </div>
                    <div class="media-content">
                      <div class="title is-4">
                        {{ edu.job }}
                      </div>
                      <div class="subtitle is-5">
                        {{ edu.department }}
                      </div>
                      <div class="subtitle is-6">
                        {{ showMonthYearOnly(edu.startDate) }} -
                        <template v-if="edu.endDate">
                          {{ showMonthYearOnly(edu.endDate) }}
                        </template>
                        <template v-else>
                          Now
                        </template>
                        ({{ showAgo(edu.startDate, edu.endDate) }})
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a class="card-header-icon">
                <b-icon
                  pack="fa"
                  :icon="props.open ? 'angle-down' : 'angle-up'"
                />
              </a>
            </div>
          </template>
          <div class="card-content">
            <div class="content">
              <p>{{ edu.description }}</p>
              <b-button
                v-if="edu.departmentLink"
                type="is-info"
                tag="a"
                :href="edu.departmentLink"
              >
                Visit Company Page
              </b-button>
            </div>
          </div>
        </b-collapse>
      </div>
      <div class="column">
        <h3 class="subtitle">
          Education
        </h3>
        <b-collapse
          v-for="(edu, index) of eduData"
          :key="index"
          class="card"
          animation="slide"
          :open="isOpen1 == index"
          @open="isOpen1 = index"
        >
          <template #trigger="props">
            <div
              class="card-header"
              role="button"
            >
              <div class="card-header-title">
                <div class="content">
                  <div class="media">
                    <div class="media-left">
                      <b-icon
                        size="is-medium"
                        pack="fa"
                        icon="graduation-cap"
                      />
                    </div>
                    <div class="media-content">
                      <div class="title is-4">
                        {{ edu.degree }}
                      </div>
                      <div class="subtitle is-5">
                        {{ edu.date }} | {{ edu.location }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a class="card-header-icon">
                <b-icon
                  pack="fa"
                  :icon="props.open ? 'angle-down' : 'angle-up'"
                />
              </a>
            </div>
          </template>
          <div class="card-content">
            <div class="content">
              {{ edu.description }}
            </div>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Experience.ts"></script>
