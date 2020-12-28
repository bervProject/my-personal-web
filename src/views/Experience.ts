import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Experience extends Vue {
  public eduData: object[] = [
    {
      id: 1,
      startDate: '2018-08-27',
      endDate: null,
      job: 'Backend Developer',
      departmentLink: 'https://xtremax.com',
      department: 'Xtremax Indonesia',
      description: 'Backend Developer using .NET Technology.',
    },
    {
      id: 2,
      startDate: '2018-01-01',
      endDate: '2018-07-31',
      job: 'Android Developer',
      department:
        'SIDAS (Smart Identity System) - SCCIC (Smart City Community and Innovation Center) ITB',
      description: 'Working on application to improve SIDAS.',
    },
    {
      id: 3,
      startDate: '2017-12-01',
      endDate: '2019-01-31',
      departmentLink: 'https://www.edaun.com/',
      job: 'Backend Developer (Freelancer/Part Time)',
      department: 'eDaun',
      description: 'Creating API to improve functionality of web.',
    },
    {
      id: 4,
      startDate: '2017-05-29',
      endDate: '2017-08-04',
      departmentLink: 'https://suitmedia.com/',
      job: 'Mobile Developer (Internship)',
      department: 'Suitmedia',
      description:
        'Working on Android Application and learn how to build creative Android Application.',
    },
    {
      id: 5,
      startDate: '2017-01-31',
      endDate: '2017-05-31',
      job: 'Basic Physics Laboratory Assistant',
      department: 'Pyhsics Laboratory',
      description: 'Teach and manage basic physics practicum.',
    },
    {
      id: 6,
      startDate: '2016-10-01',
      endDate: '2018-07-31',
      job: 'Network Administrator',
      department: 'STEI (Sekolah Teknik Elektro dan Informatika) ITB',
      description: 'Manage mailing list & virtual machine.',
    },
  ];
}
