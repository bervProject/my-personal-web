import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';
import { get } from '@/services';

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
  public researchData: object[] = [
    {
      "id": 1,
      "title": "Pembangunan Web Service Audio Watermarking",
      "abstract": "https://digilib.itb.ac.id/index.php/gdl/view/26088",
      "paper": "https://informatika.stei.itb.ac.id/~rinaldi.munir/TA/Makalah_TA_Bervianto.pdf"
    }
  ];

  mounted(): void {
    this.isLoading = true;
    const experiencePromise = get("berviantoleo/bervdata/experiences");
    const eduPromise = get("berviantoleo/bervdata/educations");
    const researchPromise = get("berviantoleo/bervdata/researchList");
    Promise.allSettled([experiencePromise, eduPromise, researchPromise]).then((result) => {
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
