<template>
  <section>
    <b-table
      ref="table"
      :opened-detailed="openedDetails"
      detailed
      detail-key="id"
      detail-transition="fade"
      show-detail-icon
      :data="myData"
      :loading="isLoading"
    >
      <b-table-column field="name" label="Repo" v-slot="props">
        {{ props.row.name }}
      </b-table-column>
      <b-table-column field="topics" label="Topics" v-slot="props">
        <b-taglist>
          <b-tag v-for="topic in props.row.topics" :key="topic">
            {{ topic }}
          </b-tag>
        </b-taglist>
      </b-table-column>
      <b-table-column field="stars" label="Stars" v-slot="props">
        {{ props.row.stargazers_count }}
      </b-table-column>
      <b-table-column field="fork" label="Fork" v-slot="props">
        <b-icon
          pack="fas"
          icon="check"
          type="is-success"
          v-if="props.row.fork"
        />
        <b-icon v-else pack="fas" icon="times" type="is-danger" />
      </b-table-column>
      <b-table-column field="archived" label="Archived" v-slot="props">
        <b-icon
          pack="fas"
          icon="check"
          type="is-success"
          v-if="props.row.archived"
        />
        <b-icon v-else pack="fas" icon="times" type="is-danger" />
      </b-table-column>
      <b-table-column field="link" label="Link" v-slot="props">
        <b-button
          icon-left="github"
          tag="a"
          icon-pack="fab"
          :href="props.row.svn_url"
          >Repository</b-button
        >
      </b-table-column>

      <template #detail="props">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img alt="Github Avatar" :src="props.row.owner.avatar_url" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <a :href="props.row.owner.html_url"
                  ><strong>@{{ props.row.owner.login }}</strong></a
                >
                <br />
                {{ props.row.description }}
              </p>
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </section>
</template>

<script lang="ts" src="./Github.ts"></script>
