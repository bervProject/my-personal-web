<template>
  <div class="content">
    <h1>Contact</h1>
    <h2>Address</h2>
    <p>
      <b-icon pack="fa" icon="home" size="is-small"></b-icon>
      <span>Jalan Cipaku Indah VIII, Cidadap, Bandung</span>
    </p>
    <p>
      <a href="mailto:bervianto.leo@gmail.com" class="button is-small">
        <span class="icon">
          <b-icon pack="fa" icon="envelope"></b-icon>
        </span>
        <span>Email</span>
      </a>
    </p>
    <h2>Media Social</h2>
    <p class="buttons">
      <a :href="contact.address" class="button is-small" v-bind:key="contact.id" v-for="contact in contacts">
        <span class="icon">
          <b-icon pack="fab" :icon="contact.icon"></b-icon>
        </span>
        <span>{{contact.title}}</span>
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Education extends Vue {
  public contacts: object[] = [
    {
      id: 1,
      title: 'Github',
      icon: 'github',
      address: 'https://github.com/berviantoleo',
    },
    {
      id: 2,
      title: 'Gitlab',
      icon: 'gitlab',
      address: 'https://gitlab.com/bervianto.leo',
    },
    {
      id: 3,
      title: 'Linkedin',
      icon: 'linkedin',
      address: 'http://www.linkedin.com/in/bervianto-leo-pratama',
    },
    {
      id: 4,
      title: 'Twitter',
      icon: 'twitter',
      address: 'https://twitter.com/berviantoleo',
    },
    {
      id: 5,
      title: 'Facebook',
      icon: 'facebook',
      address: 'https://www.facebook.com/bervianto.leo',
    },
    {
      id: 6,
      title: 'Instagram',
      icon: 'instagram',
      address: 'http://www.instagram.com/bervianto.leo',
    },
    {
      id: 7,
      title: 'Telegram',
      icon: 'telegram',
      address: 'https://t.me/berviantoleo',
    },
    {
      id: 8,
      title: 'Youtube',
      icon: 'youtube',
      address: 'https://youtube.com/c/BerviantoLeoPratama',
    },
    {
      id: 9,
      title: 'Google+',
      icon: 'google-plus',
      address: 'http://plus.google.com/+BerviantoLeoPratama',
    },
    {
      id: 10,
      title: 'Stack Overflow',
      icon: 'stack-overflow',
      address: 'http://stackoverflow.com/users/6948591/bervianto-leo-pratama',
    },
    {
      id: 11,
      title: 'Steam',
      icon: 'steam',
      address: 'http://steamcommunity.com/id/cyber-name',
    },
    {
      id: 12,
      title: 'Soundcloud',
      icon: 'soundcloud',
      address: 'http://soundcloud.com/bervianto-leo-pratama'
    }
  ]
}
</script>
