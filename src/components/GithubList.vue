<template>
  <section>
    <o-table
      ref="table"
      :opened-detailed="openedDetails"
      detailed
      detail-key="id"
      detail-transition="fade"
      show-detail-icon
      :data="myData"
      :loading="isLoading"
    >
      <o-table-column field="name" label="Repo" v-slot="props">
        {{ props.row.name }}
      </o-table-column>
      <o-table-column field="topics" label="Topics" v-slot="props">
        <div class="tags">
          <span class="tag" v-for="topic in props.row.topics" :key="topic">
            {{ topic }}
          </span>
        </div>
      </o-table-column>
      <o-table-column field="stars" label="Stars" v-slot="props">
        {{ props.row.stargazers_count }}
      </o-table-column>
      <o-table-column field="fork" label="Fork" v-slot="props">
        <o-icon
          pack="fas"
          icon="check"
          variant="success"
          v-if="props.row.fork"
        />
        <o-icon v-else pack="fas" icon="times" variant="danger" />
      </o-table-column>
      <o-table-column field="archived" label="Archived" v-slot="props">
        <o-icon
          pack="fas"
          icon="check"
          variant="success"
          v-if="props.row.archived"
        />
        <o-icon v-else pack="fas" icon="times" variant="danger" />
      </o-table-column>
      <o-table-column field="link" label="Link" v-slot="props">
        <o-button
          icon-left="github"
          tag="a"
          icon-pack="fab"
          target="_blank"
          :href="props.row.svn_url"
          >Repository</o-button
        >
      </o-table-column>
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
                <a :href="props.row.owner.html_url" target="_blank"
                  ><strong>@{{ props.row.owner.login }}</strong></a
                >
                <br />
                {{ props.row.description }}
              </p>
            </div>
          </div>
        </article>
      </template>
    </o-table>
  </section>
</template>

<script lang="ts" src="./GithubList.ts"></script>
