import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'MyHeader',
})
export default class MyHeader extends Vue {
  protected data: Array<any> = [
    {
      id: 'en',
      lang: 'English'
    },
    {
      id: 'id',
      lang: 'Bahasa Indonesia'
    }
  ];
}