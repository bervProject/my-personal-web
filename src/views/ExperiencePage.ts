import moment from 'moment';
import services from '@/services';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExperiencePage',
  metaInfo: {
    title: 'Experiences'
  },
  data() : {
    isOpen: number,
    isOpen1: number,
    isLoading: boolean,
    workData: object[],
    eduData: object[],
    researchData: object[]
  } {
    return {
      isOpen: 0,
      isOpen1: 0,
      isLoading: false,
      workData: [],
      eduData: [],
      researchData: [],
    }
  },
  mounted(): void {
    this.isLoading = true;
    const experiencePromise = services.get("classes/Experience?order=-startDate");
    const eduPromise = services.get("classes/Education?order=-startDate");
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
  },
  methods: {
    getDomain(link: string): string {
      const urlData = new URL(link);
      return urlData.hostname;
    },
    showMonthYearOnly(date: string): string {
      return moment(date).format('MMMM YYYY');
    },
    showAgo(startDate: string, endDate: string | undefined): string {
      return moment(startDate).from(endDate ? endDate : new Date(), true);
    },
  }
});
