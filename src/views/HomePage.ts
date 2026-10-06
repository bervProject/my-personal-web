import { defineComponent, computed } from 'vue';
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';
import services from '@/services';
import communityLight from '@/assets/images/community.png';
import communityDark from '@/assets/images/community-dark.png';
import { useTypingEffect } from '@/composables/useTypingEffect';
import FeaturedProjects from '@/components/FeaturedProjects.vue';
import DevToPost from '@/components/DevToPost.vue';

export default defineComponent({
  setup() {
    const themeStore = useThemeStore();
    const { isDark } = storeToRefs(themeStore);

    const communityImage = computed(() => {
      return isDark.value ? communityDark : communityLight;
    });

    const { displayText } = useTypingEffect([
      'Navigating Backend Development...',
      'Deploying Microservices...',
      'Executing Cloud Migrations...',
      'Designing Resilient Cloud Architectures...',
      'Strengthening Systems with DevSecOps...',
    ]);

    return {
      isDark,
      communityImage,
      displayText,
    };
  },
  data() {
    const announcements : any[] = [];

    return {
      carousels: [
        { image: 'assets/home/intro.jpg' },
        { image: 'assets/home/intro-2.jpg' },
        { image: 'assets/home/intro-4.jpg' },
        { image: 'assets/home/intro-3.jpg' },
        { image: 'assets/home/intro-5.jpg' },
      ],
      announcements,
      activeCommunityList: [
        "3f717fd9-e65d-453f-8624-fdabf06e7ef8", // IBM Champions 2026
      ],
      pastCommunityList: [
        "640476f4-dbc9-4797-af0d-eca54c7740b4", // HashiCorp Ambassador 2025
        "b2427b20-4ced-4a13-8331-06d90dd3c6e6", // CDF Ambassador 2025
        "3b7ccdc9-6787-487c-957b-fa729f76520f",  // 2024
        "23c0a13f-9538-4d2b-a2a1-f07710242860", // 2024
        "8cad11b0-12d7-4193-b51a-11a0c75de467", // HashiCorp Ambassador 2023
        "4c1544dc-271b-404e-974a-f991320ab9d8", // CDF Ambassador 2023
      ],
      isLoading: false,
      focusTopics: [
        'Backend Development',
        'DevOps',
        'Microservices',
        'Cloud Computing',
        'Cyber Security',
        'DevSecOps',
        'Software Architecture',
        'Cloud Architecture',
      ],
      techStacks: [
        '.NET',
        'SQL Server',
        'PostgreSQL',
        'Node.js',
      ],
    }
  },
  name: 'HomePage',
  components: {
    FeaturedProjects,
    DevToPost,
  },
  metaInfo: {
    title: 'Home',
    meta: [
      { name: 'description', content: 'Bervianto Leo Pratama\'s Personal Website.' },
    ]
  },
  updated(): void {
    this.$nextTick(() => {
      if ((window as any).credlyBadge) {
        (window as any).credlyBadge.init();
      }
    });
  },
  mounted(): void {
    this.isLoading = true;
    const announcementPromise = services.get("classes/Announcement");

    Promise.allSettled([announcementPromise]).then((result) => {
      const announcementData = result[0];
      if (announcementData.status === 'fulfilled') {
        this.announcements = announcementData.value.data.results;
      }
    }).finally(() => {
      this.isLoading = false;
      // Load Credly script dynamically
      const script = document.createElement('script');
      script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
      script.async = true;
      script.onload = () => {
        this.$nextTick(() => {
          if ((window as any).credlyBadge) {
            (window as any).credlyBadge.init();
          }
        });
      };
      document.head.appendChild(script);
    })
  }
});
