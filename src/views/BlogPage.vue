<template>
  <section class="section">
    <h2 class="title">
      Blogs
    </h2>
    <b-table
      :data="blogs"
      :columns="columns"
      :loading="isLoading"
    >
      <b-table-column
        v-slot="props"
        field="link"
        label="Link"
      >
        <a :href="props.row.link"><b-icon
          pack="fab"
          :icon="props.row.icon"
          size="is-large"
        /></a>
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="title"
        label="Title"
      >
        {{ props.row.title }}
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="description"
        label="Description"
      >
        {{ props.row.description }}
      </b-table-column>
    </b-table>
    <h2 class="title">
      Dev.to Posts
    </h2>
    <dev-to-post username="berviantoleo"/>
  </section>
</template>

<script src="./BlogPage.ts">
</script>