import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class Songs extends Vue {
  public trackData : string[] = [
    'https://open.spotify.com/embed/track/3NyxWuYU0s2GA6oZgDRQep',
    'https://open.spotify.com/embed/track/4eO2k6hVljgRNs61OcRV7g',
    'https://open.spotify.com/embed/track/7u83tMqc2n4L1FuShWTqGH',
    'https://open.spotify.com/embed/track/0ZUoF50WvrxucLmFKxuxv6'
  ];
  public youtubeData: string[] = [
    'https://www.youtube.com/embed/CkQ8zSDlJmk'
  ]
}