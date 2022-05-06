import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'CertificationPage',
  metaInfo: {
    title: 'Certification List'
  },
})
export default class CertificationPage extends Vue {
  public certIdRoleBased = [
    '1b8f8bd9-3dd9-41cc-8cd3-697b27280cfc',
    '6e0ef431-09a7-4c11-9e31-d4032e7d8fed',
    '1ed42ba5-d7fe-4191-a5cb-90f86edcd33a',
    '2cd65f68-a006-4f1c-914d-b118cc92aced',
    'f204be34-986a-4a8f-9459-6bba9717043c',
    '81219e7e-d090-4e00-b541-47f0443b6bea'
  ];

  public certIdFundamental = [
    'b717580f-f8bd-4c9b-aeb7-2e55a638537d',
    '19d48561-2052-4ce9-8210-e957bfcda5a9',
    '61a336e9-92a7-4c8c-aeee-a5c07bf3fae5',
    'db08e5b1-091c-4d20-a66b-40fa19ad5810',
    '10cc90ee-4f61-4622-830d-29cc869d5890',
    '139efff2-33e3-4cb9-89fd-0177103e92c5'
  ];
}
