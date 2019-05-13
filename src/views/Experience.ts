import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Experience extends Vue {
  public eduData: object[] = [
    {
      id: 1,
      date: 'August 2018 - Now',
      job: 'Backend Developer',
      department: 'Xtremax Indonesia',
      description:
        'Backend Developer using .NET Technology.',
    },
    {
      id: 2,
      date: 'December 2017 - January 2019',
      job: 'Freelancer (Back-End)',
      department: 'eDaun',
      description: 'Creating API to improve functionality of web.',
    },
    {
      id: 3,
      date: 'January 2018 - July 2018',
      job: 'Android Developer in SIDAS',
      department: 'Smart City Community and Innovation Center ITB',
      description: 'Working on application to improve SIDAS.',
    },
    {
      id: 4,
      date: '29 May 2017 - 04 August 2017',
      job: 'Mobile Developer Internship',
      department: 'Suitmedia',
      description:
        'Working on Android Application and learn how to build creative Android Application.',
    },
    {
      id: 5,
      date: 'October 2016 - July 2018',
      job: 'Network Administrator',
      department: 'STEI (Sekolah Teknik Elektro dan Informatika) ITB',
      description: 'Manage mailing list & virtual machine.',
    },
    {
      id: 6,
      date: 'January 2017 - May 2017',
      job: 'Basic Physics Laboratory Assistant',
      department: 'Pyhsics Laboratory',
      description: 'Teach and manage basic physics practicum.',
    },
  ]
}