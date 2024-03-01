<template>
  <section class="section">
    <h2 class="title">
      Blogs
    </h2>
    <o-table
      :data="blogs"
      :loading="isLoading"
    >
      <o-table-column
        v-slot="props"
        field="link"
        label="Link"
      >
        <a :href="props.row.link" target="_blank"><o-icon
          pack="fab"
          :icon="props.row.icon"
          size="large"
        /></a>
      </o-table-column>

      <o-table-column
        v-slot="props"
        field="title"
        label="Title"
      >
        {{ props.row.title }}
      </o-table-column>

      <o-table-column
        v-slot="props"
        field="description"
        label="Description"
      >
        {{ props.row.description }}
      </o-table-column>
    </o-table>
    <h2 class="title">
      Dev.to Posts
    </h2>
    <dev-to-post username="berviantoleo"/>
  </section>
</template>

<script lang="ts" src="./BlogPage.ts">
</script>
