import services from '@/services';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const { useScriptTag } = require('@vueuse/core');
    useScriptTag('https://cdn.credly.com/assets/utilities/embed.js');
  },
  name: 'CertificationPage',
  metaInfo: {
    title: 'Certification List'
  },
  data() {
    return {
      certIdRoleBased: [
        '1b8f8bd9-3dd9-41cc-8cd3-697b27280cfc',
        '6e0ef431-09a7-4c11-9e31-d4032e7d8fed',
        '1ed42ba5-d7fe-4191-a5cb-90f86edcd33a',
        '2cd65f68-a006-4f1c-914d-b118cc92aced',
        'f204be34-986a-4a8f-9459-6bba9717043c',
        '81219e7e-d090-4e00-b541-47f0443b6bea',
        '675aece2-ca13-4995-959b-a799c3ed913b',
        '2eda7f15-37ae-4e21-a352-1366730dfcd8',
        'bb79f65b-29e8-44c9-8084-9b82293a4eea',
        '79854684-04d7-49df-835e-09ca5efa18c3',
        '4136b42e-bf3d-447f-b8a8-9f884fed7cbd',
        '5eac34bb-d121-4926-a789-e8c94b627484'
      ],

      certIdFundamental: [
        'b717580f-f8bd-4c9b-aeb7-2e55a638537d',
        '19d48561-2052-4ce9-8210-e957bfcda5a9',
        '61a336e9-92a7-4c8c-aeee-a5c07bf3fae5',
        'db08e5b1-091c-4d20-a66b-40fa19ad5810',
        '10cc90ee-4f61-4622-830d-29cc869d5890',
        '139efff2-33e3-4cb9-89fd-0177103e92c5',
        'f1a161be-cb69-4a92-aa18-bf414836249d'
      ],

      accredibles: [
        '49384407',
        '57646449'
      ],

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
