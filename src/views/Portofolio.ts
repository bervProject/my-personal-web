import { Component, Vue } from 'vue-property-decorator'
import PortofolioItem from '@/components/PortofolioItem.vue'

import MyHeader from '@/components/MyHeader.vue'

@Component({
  components: {
    PortofolioItem,
  },
})
export default class Portofolio extends Vue {
  public mobileData: object[] = [
    {
      id: 1,
      title: 'Learn Android',
      description:
        'Mobile Application Example to Learn Programming in Android.',
      smallImage: 'assets/portofolio/01-large.png',
      icon: 'assets/portofolio/01-small.png',
      repository: {
        github: 'https://github.com/bervProject/learn-android',
      },
    },
    {
      id: 2,
      title: 'Belitung Information Center',
      description: 'Belitung Information Center using Ionic Framework.',
      smallImage: 'assets/portofolio/02-large.png',
      icon: 'assets/portofolio/02-small.png',
      repository: {
        github: 'https://github.com/bervProject/belitung-information-center',
      },
    },
    {
      id: 3,
      title: 'You Can Use It',
      description: 'You Can Use It using Starling and FeathersUI.',
      smallImage: 'assets/portofolio/03-large.png',
      icon: 'assets/portofolio/03-small.png',
      repository: {
        github: 'https://github.com/bervProject/You-Can-Use-It',
      },
    },
    {
      id: 4,
      title: 'Treasure Hunt',
      description:
        'Treasure Hunt is Android Application. This is looks like porting from iOS Application. This project want to pair with iOS Application that have name Sampoerna Events build by Suitmedia. This project build when internship in Suitmedia.',
      smallImage: 'assets/portofolio/08-large.png',
      icon: 'assets/portofolio/08-small.png',
    },
  ]
  public webData: object[] = [
    {
      id: 5,
      title: 'Tweety',
      description:
        'Tweety build on ASP.NET Framework MVC (Now Use ASP.NET Core MVC) and C#.',
      smallImage: 'assets/portofolio/06-large.png',
      icon: 'assets/portofolio/06-small.png',
      repository: {
        github: 'https://github.com/berv-uni-project/tweety',
      },
    },
    {
      id: 6,
      title: 'Scheduler OP',
      description: 'Scheduler OP build on Django Framework.',
      smallImage: 'assets/portofolio/04-large.png',
      icon: 'assets/portofolio/04-small.png',
      repository: {
        github: 'https://github.com/berv-uni-project/scheduler-op',
      },
    },
    {
      id: 7,
      title: 'Bervianto Leo Pratama Jekyll Themes',
      description: 'Themes Jekyll used Bulma for My Jekyll Themes',
      smallImage: 'assets/480x480.png',
      icon: 'assets/480x480.png',
      repository: {
        github: 'https://github.com/berviantoleo/berviantoleo.github.io',
      },
    },
    {
      id: 8,
      title: 'My Personal Site Vue.js',
      description: 'SPA Used Vue.js to created my personal website.',
      smallImage: 'assets/480x480.png',
      icon: 'assets/480x480.png',
      repository: {
        github: 'https://github.com/bervProject/my-personal-web',
      },
    },
  ]
  public desktopData: object[] = [
    {
      id: 9,
      title: 'Frog Archiver',
      description: 'Frog Archiver using Qt Framework.',
      smallImage: 'assets/portofolio/05-large.png',
      icon: 'assets/portofolio/05-small.png',
      repository: {
        github: 'https://github.com/berv-uni-project/Frog-Archiver',
      },
    },
    {
      id: 10,
      title: 'Hyperdoku Solver',
      description: 'Hyperdoku Solver build on Java and Java Swing.',
      smallImage: 'assets/portofolio/07-large.png',
      icon: 'assets/portofolio/07-small.png',
      repository: {
        github: 'https://github.com/berv-uni-project/Hyperdoku-Solver',
      },
    },
  ]
}
