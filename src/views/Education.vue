<template>
  <div>
    <h1 class="title">Education</h1>
    <div class="timeline">
      <header class="timeline-header">
        <span class="tag is-medium is-primary">Now</span>
      </header>
      <div v-for="item in eduData" class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <p class="heading">{{item.date}}</p>
          <p class="title is-4">{{item.degree}} at {{item.location}}</p>
          <p class="subtitle is-5">{{item.description}}</p>
        </div>
      </div>
      <header class="timeline-header">
        <span class="tag is-medium is-primary">Born</span>
      </header>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Education extends Vue {
  public eduData: object[] = [
    {
      date: 'August 2014 - July 2018',
      degree: 'Bachelor Degree of Computer Science',
      location: 'Institut Teknologi Bandung (ITB)',
      description:
        'Learning Computer Science. Join in HMIF (Himpunan Mahasiswa Informatika) ITB.',
    },
    {
      date: '2011 - 2014',
      degree: 'High School (Science Program)',
      location: 'SMA Negeri 1 Tanjungpandan',
      description:
        'Science Program. Join in OSIS (Organisasi Siswa Intra Sekolah) as Technology, Information and Communication as Staff at August 2011 - July 2012 also as Leader at August 2012 - July 2013.',
    },
  ]
}
</script>
