<template>
  <div>
    <section classs="section">
      <o-notification aria-role="listitem" closable v-for="(announcement, index) in announcements" :key="index"
        variant="warning">
        <div v-html="announcement.main" />
      </o-notification>
    </section>
    <section class="section">
      <article class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://gravatar.com/avatar/19465cfc93b7dcd66bd8933e90b7be07e0b23413ec0522eb7933edc015fd1ab4" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Bervianto Leo Pratama</strong>
              <br>
              I'm a Software Engineer. A person who loves to code as arts.
            </p>
          </div>
        </div>
      </article>
    </section>
    <section class="section">
      <div style="left:0; width:100%; height:300px; position:relative; padding-bottom:0; margin:0 auto"><iframe src="https://www.tickcounter.com/widget/countdown/6248177" style="top:0; left:0; width:100%; height:100%; position:absolute; border:0; overflow:hidden" title="Meti &amp; Bervi"></iframe></div>
    </section>
    <section class="section">
      <div class="content is-medium">
        <div class="columns is-multiline">
          <div class="column is-6">
            <h4 class="title">Focus Topics</h4>
            <ul>
              <li>Backend Development</li>
              <li>DevOps</li>
              <li>Microservices</li>
              <li>Cloud Computing</li>
              <li>Cyber Security</li>
              <li>DevSecOps</li>
              <li>Software Architecture</li>
              <li>Cloud Architecture</li>
            </ul>
          </div>
          <div class="column is-6">
            <h4 class="title">Technology Stacks</h4>
            <ul>
              <li>.NET</li>
              <li>SQL Server</li>
              <li>PostgreSQL</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <h4 class="title">
        {{ $t('navigation.community') }}
      </h4>
      <div class="columns is-multiline">
        <div class="column is-3">
          <div class="columns is-multiline">
            <div class="column is-12">
              <a target="_blank"
                href="https://aws.amazon.com/developer/community/community-builders/community-builders-directory/?cb-cards.sort-by=item.additionalFields.cbName&cb-cards.sort-order=asc&awsf.builder-category=*all&awsf.location=*all&awsf.year=*all&cb-cards.q=bervianto%2Bleo%2Bpratama&cb-cards.q_operator=AND">
                <figure class="image is-2by1">
                  <img src="../assets/images/community.png" alt="Community Builder" />
                </figure>
              </a>
            </div>
            
          </div>
        </div>
        <div class="column is-3" v-for="community of communityList" :key="community">
              <div data-iframe-width="150" data-iframe-height="270" :data-share-badge-id="community"
                data-share-badge-host="https://www.credly.com" />
        </div>
      </div>
    </section>
    <section class="hero is-small is-info">
      <div class="hero-body">
        <div class="content">
          <h3 class="title">Social Media</h3>
          <p class="buttons are-small">
            <a href="mailto:bervianto.leo@gmail.com" class="button is-outlined">
              <span class="icon">
                <o-icon pack="fa" icon="envelope" />
              </span>
              <span>Email</span>
            </a>
            <a v-for="contact in contacts" :key="contact.id" :href="contact.address" target="_blank"
              class="button is-outlined">
              <span class="icon">
                <o-icon pack="fab" :icon="contact.icon" />
              </span>
              <span>{{ contact.title }}</span>
            </a>
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <h2 class="title">
        Blogs
      </h2>
      <o-table :data="blogs" :loading="isLoading">
        <o-table-column v-slot="props" field="link" label="Link">
          <a :href="props.row.link" target="_blank"><o-icon pack="fab" :icon="props.row.icon" size="large" /></a>
        </o-table-column>

        <o-table-column v-slot="props" field="title" label="Title">
          {{ props.row.title }}
        </o-table-column>

        <o-table-column v-slot="props" field="description" label="Description">
          {{ props.row.description }}
        </o-table-column>
      </o-table>
    </section>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
