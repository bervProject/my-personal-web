import { Component, Vue } from 'vue-property-decorator';
import moment, { months } from 'moment';

@Component({
  name: 'Experience'
})
export default class Experience extends Vue {
  public isOpen: number = 0;
  public isOpen1: number = 0;
  public workData: object[] = [
    {
      id: 1,
      startDate: '2018-08-27T00:00:00+07:00',
      endDate: undefined,
      job: 'Backend Developer',
      departmentLink: 'https://xtremax.com',
      department: 'Xtremax Indonesia',
      description: 'Backend Developer using .NET Technology.',
    },
    {
      id: 2,
      startDate: '2018-01-01T00:00:00+07:00',
      endDate: '2018-07-31T00:00:00+07:00',
      job: 'Android Developer (Part Time)',
      department:
        'SIDAS (Smart Identity System) - SCCIC (Smart City Community and Innovation Center) ITB',
      description: 'Working on application to improve SIDAS.',
    },
    {
      id: 3,
      startDate: '2017-12-01T00:00:00+07:00',
      endDate: '2019-01-31T00:00:00+07:00',
      departmentLink: 'https://www.edaun.com/',
      job: 'Backend Developer (Freelancer/Part Time)',
      department: 'eDaun',
      description: 'Creating API to improve functionality of web.',
    },
    {
      id: 4,
      startDate: '2017-05-29T00:00:00+07:00',
      endDate: '2017-08-04T00:00:00+07:00',
      departmentLink: 'https://suitmedia.com/',
      job: 'Mobile Developer (Internship)',
      department: 'Suitmedia',
      description:
        'Working on Android Application and learn how to build creative Android Application.',
    },
    {
      id: 5,
      startDate: '2017-01-31T00:00:00+07:00',
      endDate: '2017-05-31T00:00:00+07:00',
      job: 'Basic Physics Laboratory Assistant',
      department: 'Pyhsics Laboratory',
      description: 'Teach and manage basic physics practicum.',
    },
    {
      id: 6,
      startDate: '2016-10-01T00:00:00+07:00',
      endDate: '2018-07-31T00:00:00+07:00',
      job: 'Network Administrator',
      department: 'STEI (Sekolah Teknik Elektro dan Informatika) ITB',
      description: 'Manage mailing list & virtual machine.',
    },
  ];

  public eduData: object[] = [
    {
      id: 1,
      date: 'August 2014 - July 2018',
      degree: 'Bachelor Degree of Computer Science',
      location: 'Institut Teknologi Bandung (ITB)',
      description:
        'Learning Computer Science. Join in HMIF (Himpunan Mahasiswa Informatika) ITB.',
    },
    {
      id: 2,
      date: '2011 - 2014',
      degree: 'High School (Science Program)',
      location: 'SMA Negeri 1 Tanjungpandan',
      description:
        'Science Program. Join in OSIS (Organisasi Siswa Intra Sekolah) as Technology, Information and Communication as Staff at August 2011 - July 2012 also as Leader at August 2012 - July 2013.',
    },
  ];

  showMonthYearOnly(date: string) : string
  {
    return moment(date).format('MMMM YYYY');
  }

  showAgo(startDate: string, endDate: string | undefined) : string
  {
    return moment(startDate).from(endDate ? endDate : new Date(), true);
  }
}
