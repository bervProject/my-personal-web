import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';

@Component({
  props: { url: String },
})
export default class Projets extends Vue {
  public myData: object[] = [];
  public isLoading: boolean = false;

  public mounted() {
    this.isLoading = true;
    this.loadData();
  }

  public loadData() {
    axios
      .get(this.$props.url, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        params: {
          per_page: 100,
        },
      })
      .then(response => {
        this.isLoading = false;
        this.myData = response.data;
      })
      .catch(reason => {
        this.isLoading = false;
      });
  }
}
