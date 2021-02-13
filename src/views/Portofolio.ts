import { Component, Vue } from 'vue-property-decorator';
import PortofolioItem from '@/components/PortofolioItem.vue';

@Component({
  components: {
    PortofolioItem,
  },
})
export default class Portofolio extends Vue {
  public mobileData: object[] = [
    {
      id: 1,
      title: 'RGB Counter',
      icon: 'assets/portofolio/11-small.png',
      smallImage: 'assets/portofolio/11-small.png',
      description: 'Counting RGB colour in your image',
      repository: {
        github: 'https://github.com/bervProject/RGBCounter',
        playstore: 'web.id.berviantoleo.rgbcounter'
      }
    },
    {
      id: 2,
      title: 'RSA ECCEG',
      icon: 'assets/portofolio/12-small.png',
      smallImage: 'assets/portofolio/12-small.png',
      description: 'RSA and ECCEG Implementation for Example in Android',
      repository: {
        github: 'https://github.com/berv-uni-project/rsa-ecceg-implementation',
        playstore: 'id.my.berviantoleo.ecceg_rsa_app'
      }
    },
    {
      id: 3,
      title: 'You Can Use It',
      description: 'You Can Use It using Starling and FeathersUI.',
      smallImage: 'assets/portofolio/03-large.jpg',
      icon: 'assets/portofolio/03-small.jpg',
      repository: {
        github: 'https://github.com/bervProject/You-Can-Use-It',
      },
    },
    {
      id: 4,
      title: 'Treasure Hunt',
      description:
        'Treasure Hunt is Android Application. This is looks like porting from iOS Application. This project want to pair with iOS Application that have name Sampoerna Events build by Suitmedia. This project build when internship in Suitmedia.',
      smallImage: 'assets/portofolio/08-large.jpg',
      icon: 'assets/portofolio/08-small.jpg',
    },

    {
      id: 5,
      title: 'Learn Android',
      description:
        'Mobile Application Example to Learn Programming in Android.',
      smallImage: 'assets/portofolio/01-large.jpg',
      icon: 'assets/portofolio/01-small.jpg',
      repository: {
        github: 'https://github.com/bervProject/learn-android',
      },
    },
    {
      id: 6,
      title: 'Belitung Information Center',
      description: 'Belitung Information Center using Ionic Framework.',
      smallImage: 'assets/portofolio/02-large.jpg',
      icon: 'assets/portofolio/02-small.jpg',
      repository: {
        github: 'https://github.com/bervProject/belitung-information-center',
      },
    },
  ];
  public webData: object[] = [
    {
      id: 5,
      title: 'Tweety',
      description:
        'Tweety build on ASP.NET Framework MVC (Now Use ASP.NET Core MVC) and C#.',
      smallImage: 'assets/portofolio/06-large.jpg',
      icon: 'assets/portofolio/06-small.jpg',
      repository: {
        github: 'https://github.com/berv-uni-project/tweety',
      },
    },
    {
      id: 6,
      title: 'Scheduler OP',
      description: 'Scheduler OP build on Django Framework.',
      smallImage: 'assets/portofolio/04-large.jpg',
      icon: 'assets/portofolio/04-small.jpg',
      repository: {
        github: 'https://github.com/berv-uni-project/scheduler-op',
      },
    },
    {
      id: 7,
      title: 'Bervianto Leo Pratama Jekyll Themes',
      description: 'Themes Jekyll used Bulma for My Jekyll Themes',
      smallImage: 'assets/portofolio/09-large.png',
      icon: 'assets/portofolio/09-large.png',
      repository: {
        github: 'https://github.com/berviantoleo/berviantoleo.github.io',
      },
    },
    {
      id: 8,
      title: 'My Personal Site Vue.js',
      description: 'SPA Used Vue.js to created my personal website.',
      smallImage: 'assets/portofolio/10-large.png',
      icon: 'assets/portofolio/10-large.png',
      repository: {
        github: 'https://github.com/bervProject/my-personal-web',
      },
    },
  ];
  public desktopData: object[] = [
    {
      id: 9,
      title: 'Frog Archiver',
      description: 'Frog Archiver using Qt Framework.',
      smallImage: 'assets/portofolio/05-large.jpg',
      icon: 'assets/portofolio/05-small.jpg',
      repository: {
        github: 'https://github.com/berv-uni-project/Frog-Archiver',
      },
    },
    {
      id: 10,
      title: 'Hyperdoku Solver',
      description: 'Hyperdoku Solver build on Java and Java Swing.',
      smallImage: 'assets/portofolio/07-large.jpg',
      icon: 'assets/portofolio/07-small.jpg',
      repository: {
        github: 'https://github.com/berv-uni-project/Hyperdoku-Solver',
      },
    },
  ];
}
