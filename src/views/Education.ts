import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Education extends Vue {
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
  ]
}