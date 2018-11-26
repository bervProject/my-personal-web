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
      <a :href="contact.address" class="button is-small" v-for="contact in contacts">
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
      title: 'Github',
      icon: 'github',
      address: 'https://github.com/berviantoleo',
    },
    {
      title: 'Gitlab',
      icon: 'gitlab',
      address: 'https://gitlab.com/bervianto.leo',
    },
    {
      title: 'Linkedin',
      icon: 'linkedin',
      address: 'http://www.linkedin.com/in/bervianto-leo-pratama',
    },
    {
      title: 'Twitter',
      icon: 'twitter',
      address: 'https://twitter.com/berviantoleo',
    },
    {
      title: 'Facebook',
      icon: 'facebook',
      address: 'https://www.facebook.com/bervianto.leo',
    },
    {
      title: 'Instagram',
      icon: 'instagram',
      address: 'http://www.instagram.com/bervianto.leo',
    },
    {
      title: 'Telegram',
      icon: 'telegram',
      address: 'https://t.me/berviantoleo',
    },
    {
      title: 'Youtube',
      icon: 'youtube',
      address: 'https://youtube.com/c/BerviantoLeoPratama',
    },
    {
      title: 'Google+',
      icon: 'google-plus',
      address: 'http://plus.google.com/+BerviantoLeoPratama',
    },
    {
      title: 'Stack Overflow',
      icon: 'stack-overflow',
      address: 'http://stackoverflow.com/users/6948591/bervianto-leo-pratama',
    },
    {
      title: 'Steam',
      icon: 'steam',
      address: 'http://steamcommunity.com/id/cyber-name',
    },
    {
      title: 'Soundcloud',
      icon: 'soundcloud',
      address: 'http://soundcloud.com/bervianto-leo-pratama'
    }
  ]
}
</script>
