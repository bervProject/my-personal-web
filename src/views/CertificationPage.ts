import services from '@/services';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CertificationPage',
  metaInfo: {
    title: 'Certification List'
  },
  data() {
    return {
      certifications: [],
      isLoading: false,
    };
  },
  mounted(): void {
    this.isLoading = true;
    const certPromise = services.get("classes/Certification?order=-Expiration,-AchievedDate");
    Promise.allSettled([certPromise]).then((result) => {
      const certData = result[0];
      
      if (certData.status === 'fulfilled') {
        this.certifications = certData.value.data.results;
      }
    }).finally(() => {
      this.isLoading = false;
    })
  } 
});
