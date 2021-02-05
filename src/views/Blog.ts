import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Blog extends Vue {
  public blogs: object[] = [
    {
      id: 1,
      title: 'Berbagi Ilmu Teknologi',
      description: 'Blog about some great technology, posted as mix language (Bahasa Indonesia and English).',
      link: 'https://blog.berviantoleo.my.id/',
      icon: 'blogger'
    },
    {
      id: 2,
      title: 'Medium',
      description: 'Bervianto Leo Pratama\'s Medium',
      link: 'https://berviantoleo.medium.com/',
      icon: 'medium'
    },
    {
      id: 3,
      title: 'DEV',
      description: 'Bervianto Leo Pratama\'s DEV',
      link: 'https://dev.to/berviantoleo',
      icon: 'dev'
    },
    {
      id: 4,
      title: 'Catatan Bervi',
      description: 'Personal things, experience, etc.',
      link: 'https://personal-blog.berviantoleo.my.id/',
      icon: 'blogger'
    },
    {
      id: 5,
      title: 'Google Sites',
      description: 'Berv Google Sites',
      link: 'https://sites.google.com/view/bervianto-leo-pratama/',
      icon: 'google'
    }
  ]
}