import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';
import services from '@/services';

@Component({
  name: 'ExperiencePage',
  metaInfo: {
    title: 'Experiences'
  },
})
export default class ExperiencePage extends Vue {
  public isOpen: number = 0;
  public isOpen1: number = 0;
  public isLoading: boolean = false;
  public workData: object[] = [];
  public eduData: object[] = [];
  public researchData: object[] = [];

  mounted(): void {
    this.isLoading = true;
    const experiencePromise = services.get("classes/Experience");
    const eduPromise = services.get("classes/Education");
    const researchPromise = services.get("classes/Research");
    Promise.allSettled([experiencePromise, eduPromise, researchPromise]).then((result) => {
      const experienceData = result[0];
      if (experienceData.status === 'fulfilled') {
        this.workData = experienceData.value.data.results;
      }
      const eduData = result[1];
      if (eduData.status === 'fulfilled') {
        this.eduData = eduData.value.data.results;
      }
      const researchData = result[2];
      if (researchData.status === 'fulfilled') {
        this.researchData = researchData.value.data.results;
      }
    }).finally(() => {
      this.isLoading = false;
    })
  }

  getDomain(link: string): string {
    const urlData = new URL(link);
    return urlData.hostname;
  }

  showMonthYearOnly(date: string): string {
    return moment(date).format('MMMM YYYY');
  }

  showAgo(startDate: string, endDate: string | undefined): string {
    return moment(startDate).from(endDate ? endDate : new Date(), true);
  }
}
