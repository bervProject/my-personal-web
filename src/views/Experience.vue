<template>
  <div>
    <h2 class="title">{{ $t('navigation.experience') }}</h2>
    <b-loading :is-full-page="false" v-model="isLoading">
      <b-icon pack="fas" icon="sync-alt" size="is-large" custom-class="fa-spin">
      </b-icon>
    </b-loading>
    <div class="columns is-multiline">
      <div class="column is-12">
        <h3 class="subtitle">{{ $t('experience.workexperience') }}</h3>
        <b-table :data="workData" detailed detail-key="id">
          <b-table-column field="job" label="Job Name" v-slot="props">
            {{ props.row.job }}
          </b-table-column>
          <b-table-column
            field="department"
            label="Company Name"
            v-slot="props"
          >
            {{ props.row.department }}
          </b-table-column>
          <b-table-column field="startDate" label="Start Date" v-slot="props">
            {{ showMonthYearOnly(props.row.startDate) }}
          </b-table-column>
          <b-table-column field="endDate" label="End Date" v-slot="props">
            <template v-if="props.row.endDate">
              {{ showMonthYearOnly(props.row.endDate) }}
            </template>
            <template v-else> Now </template>
          </b-table-column>
          <template #detail="props">
            <div class="content">
              <p>{{ props.row.description }}</p>
              <b-button
                v-if="props.row.departmentLink"
                outlined
                type="is-info"
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
              </b-button>
            </div>
          </template>
        </b-table>
      </div>
      <div class="column is-12">
        <h3 class="subtitle">{{ $t('experience.education') }}</h3>
        <b-table :data="eduData" detailed detail-key="id">
          <b-table-column field="degree" label="Degree" v-slot="props">
            {{ props.row.degree }}
          </b-table-column>
          <b-table-column field="location" label="Institution" v-slot="props">
            {{ props.row.location }}
          </b-table-column>
          <b-table-column field="date" label="Date" v-slot="props">
            {{ props.row.date }}
          </b-table-column>
          <template #detail="props">
            <div class="content">
              <p>{{ props.row.description }}</p>
              <b-button
                v-if="props.row.departmentLink"
                outlined
                type="is-info"
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
              </b-button>
            </div>
          </template>
        </b-table>
      </div>
      <div class="column is-12">
        <h3 class="subtitle">{{ $t('experience.research_list') }}</h3>
        <b-table :data="researchData">
          <b-table-column field="degree" label="Title" v-slot="props">
            {{ props.row.title }}
          </b-table-column>
          <b-table-column field="asbtract" label="Abstract" v-slot="props">
            <a :href="props.row.abstract">{{ props.row.abstract }}</a>
          </b-table-column>
          <b-table-column field="paper" label="Paper" v-slot="props">
            <a :href="props.row.paper">{{ props.row.paper }}</a>
          </b-table-column>
          <b-table-column field="publishDate" label="Publish Date">
          </b-table-column>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Experience.ts"></script>
