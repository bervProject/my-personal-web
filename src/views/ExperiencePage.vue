<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <h2 class="title">{{ $t('navigation.experience') }}</h2>
      </div>
    </section>
    <section class="section">
      <o-loading :is-full-page="false" v-model="isLoading">
        <o-icon
          pack="fas"
          icon="sync-alt"
          size="is-large"
          custom-class="fa-spin"
        >
        </o-icon>
      </o-loading>
      <div class="columns is-multiline">
        <div class="column is-12">
          <h3 class="subtitle">{{ $t('experience.workexperience') }}</h3>
          <o-table
            :data="workData"
            show-detail-icon
            detailed
            detail-key="objectId"
          >
            <o-table-column field="job" label="Job Name" v-slot:default="props">
              {{ props.row.job }}
            </o-table-column>
            <o-table-column
              field="department"
              label="Company Name"
              v-slot:default="props"
            >
              {{ props.row.department }}
            </o-table-column>
            <o-table-column
              field="startDate"
              label="Start Date"
              v-slot:default="props"
            >
              {{ showMonthYearOnly(props.row.startDate) }}
            </o-table-column>
            <o-table-column
              field="endDate"
              label="End Date"
              v-slot:default="props"
            >
              <template v-if="props.row.endDate">
                {{ showMonthYearOnly(props.row.endDate) }}
              </template>
              <template v-else> Now </template>
            </o-table-column>
            <template #detail="props">
              <div class="content">
                <p>{{ props.row.description }}</p>
                <o-button
                  v-if="props.row.departmentLink"
                  outlined
                  variant="info"
                  tag="a"
                  :href="props.row.departmentLink"
                >
                  <span class="icon is-small">
                    <img
                      v-if="props.row.departmentLink"
                      height="16"
                      width="16"
                      alt="logo"
                      :src="`http://www.google.com/s2/favicons?domain=${getDomain(
                        props.row.departmentLink
                      )}`"
                    />
                  </span>
                  <span>
                    {{ $t('experience.visitcompanypage') }}
                  </span>
                </o-button>
              </div>
            </template>
          </o-table>
        </div>
        <div class="column is-12">
          <h3 class="subtitle">{{ $t('experience.education') }}</h3>
          <o-table :data="eduData" detailed detail-key="objectId">
            <o-table-column
              field="degree"
              label="Degree"
              v-slot:default="props"
            >
              {{ props.row.degree }}
            </o-table-column>
            <o-table-column
              field="location"
              label="Institution"
              v-slot:default="props"
            >
              {{ props.row.location }}
            </o-table-column>
            <o-table-column field="date" label="Date" v-slot:default="props">
              {{ props.row.date }}
            </o-table-column>
            <template #detail="props">
              <div class="content">
                <p>{{ props.row.description }}</p>
                <o-button
                  v-if="props.row.departmentLink"
                  outlined
                  variant="info"
                  tag="a"
                  :href="props.row.departmentLink"
                >
                  <span class="icon is-small">
                    <img
                      v-if="props.row.departmentLink"
                      height="16"
                      width="16"
                      alt="logo"
                      :src="`http://www.google.com/s2/favicons?domain=${getDomain(
                        props.row.departmentLink
                      )}`"
                    />
                  </span>
                  <span>
                    {{ $t('experience.visitcompanypage') }}
                  </span>
                </o-button>
              </div>
            </template>
          </o-table>
        </div>
        <div class="column is-12">
          <h3 class="subtitle">{{ $t('experience.research_list') }}</h3>
          <o-table :data="researchData">
            <o-table-column field="title" label="Title" v-slot:default="props">
              {{ props.row.title }}
            </o-table-column>
            <o-table-column
              field="asbtract"
              label="Abstract"
              v-slot:default="props"
            >
              <a :href="props.row.abstract">{{ props.row.abstract }}</a>
            </o-table-column>
            <o-table-column field="paper" label="Paper" v-slot:default="props">
              <a :href="props.row.paper">{{ props.row.paper }}</a>
            </o-table-column>
            <o-table-column field="publishDate" label="Publish Date" v-slot:default="props">
              {{ props.row.publishData ?? "-" }}
            </o-table-column>
          </o-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./ExperiencePage.ts"></script>
