<template>
  <div>
  <section class="section">
      <h2 class="title">
        {{ $t('common.certification') }}
      </h2>
      <o-table :data="certifications" :loading="isLoading" paginated="true">
        

        <o-table-column v-slot="props" field="Name" label="Name">
          {{ props.row.Name }}
        </o-table-column>

        <o-table-column v-slot="props" field="AchievedDate" label="Achieved At">
          {{ props.row.AchievedDate ? new Date(props.row.AchievedDate.iso) : '-' }}
        </o-table-column>

        <o-table-column v-slot="props" field="Expiration" label="Expired At">
          {{ props.row.Expiration ? new Date(props.row.Expiration.iso) : '-' }}
        </o-table-column>

        <o-table-column v-slot="props" field="Link" label="Link">
          <a :href="props.row.Link" target="_blank">Show</a>
        </o-table-column>
      </o-table>
    </section>
  </div>
</template>

<script lang="ts" src="./CertificationPage.ts" />
