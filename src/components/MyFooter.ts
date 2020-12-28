import { Component, Vue } from 'vue-property-decorator';
@Component
export default class MyFooter extends Vue {
  protected version: string = process.env.VUE_APP_VERSION || '0';
}