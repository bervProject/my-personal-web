import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  public carousels = [
    { image: 'assets/home/intro.jpg' },
    { image: 'assets/home/intro-2.jpg' },
    { image: 'assets/home/intro-4.jpg' },
    { image: 'assets/home/intro-3.jpg' },
    { image: 'assets/home/intro-5.jpg' },
  ];

  public certId = [
    '1b8f8bd9-3dd9-41cc-8cd3-697b27280cfc',
    '1ed42ba5-d7fe-4191-a5cb-90f86edcd33a',
    '61a336e9-92a7-4c8c-aeee-a5c07bf3fae5',
  ]

  public getAssets(url: string): string {
    return `${process.env.BASE_URL}${url}`;
  }
}
