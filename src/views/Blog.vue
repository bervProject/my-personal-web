<template>
  <section class="section">
    <h2 class="title">Blogs</h2>
    <b-table :data="blogs" :columns="columns">
      <b-table-column field="link" label="Link" v-slot="props">
        <a :href="props.row.link"><b-icon pack="fab" :icon="props.row.icon" size="is-large"></b-icon></a>
      </b-table-column>

      <b-table-column field="title" label="Title" v-slot="props">
        {{ props.row.title }}
      </b-table-column>

      <b-table-column field="description" label="Description" v-slot="props">
        {{ props.row.description }}
      </b-table-column>
    </b-table>
  </section>
</template>

<script src="./Blog.ts">
</script>