import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';
import { get } from '@/services';

@Component({
  name: 'Experience'
})
export default class Experience extends Vue {
  public isOpen: number = 0;
  public isOpen1: number = 0;
  public isLoading: boolean = false;
  public workData: object[] = [];
  public eduData: object[] = [];

  mounted(): void {
    this.isLoading = true;
    const experiencePromise = get("berviantoleo/bervdata/experiences");
    const eduPromise = get("berviantoleo/bervdata/educations");
    Promise.allSettled([experiencePromise, eduPromise]).then((result) => {
      const experienceData = result[0];
      if (experienceData.status === 'fulfilled') {
        this.workData = experienceData.value.data;
      }
      const eduData = result[1];
      if (eduData.status === 'fulfilled') {
        this.eduData = eduData.value.data;
      }
    }).finally(() => {
      this.isLoading = false;
    })
  }

  showMonthYearOnly(date: string): string {
    return moment(date).format('MMMM YYYY');
  }

  showAgo(startDate: string, endDate: string | undefined): string {
    return moment(startDate).from(endDate ? endDate : new Date(), true);
  }
}
