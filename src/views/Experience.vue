<template>
<div>
  <h1 class="title">Experience</h1>
    <div class="timeline">
        <header class="timeline-header">
            <span class="tag is-medium is-primary">Now</span>
        </header>
        <div v-for="item in eduData" class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <p class="heading">{{item.date}}</p>
                <p class="title is-4">{{item.job}} @ {{item.department}}</p>
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
export default class Experience extends Vue {
  public eduData: object[] = [
    {
      date: 'August 2018 - Now',
      job: 'Backend Developer',
      department: 'Xtremax Indonesia',
      description:
        'Backend Developer using .NET Technology.',
    },
    {
      date: 'December 2017 - January 2019',
      job: 'Freelancer (Back-End)',
      department: 'eDaun',
      description: 'Creating API to improve functionality of web.',
    },
    {
      date: 'January 2018 - July 2018',
      job: 'Android Developer in SIDAS',
      department: 'Smart City Community and Innovation Center ITB',
      description: 'Working on application to improve SIDAS.',
    },
    {
      date: '29 May 2017 - 04 August 2017',
      job: 'Mobile Developer Internship',
      department: 'Suitmedia',
      description:
        'Working on Android Application and learn how to build creative Android Application.',
    },
    {
      date: 'October 2016 - July 2018',
      job: 'Network Administrator',
      department: 'STEI (Sekolah Teknik Elektro dan Informatika) ITB',
      description: 'Manage mailing list & virtual machine.',
    },
    {
      date: 'January 2017 - May 2017',
      job: 'Basic Physics Laboratory Assistant',
      department: 'Pyhsics Laboratory',
      description: 'Teach and manage basic physics practicum.',
    },
  ]
}
</script>
