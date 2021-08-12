import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'VerseRandom',
})
export default class VerseRandom extends Vue {
  protected verse: string = 'No Verse for Today'
  protected reference: string = ''
  protected haveData: boolean = false
  mounted() {
    axios.get('https://bible-api.com/?random=verse').then(result => {
      const data = result.data;
      this.verse = data.text;
      this.reference = data.reference;
      this.haveData = !!data.reference;
    }).catch(error => {
      console.error(error);
    })
  }
}