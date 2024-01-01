import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SongsPage',
  metaInfo: {
    title: 'Songs'
  },
  data() {
    return {
      trackData: [
        'https://open.spotify.com/embed/track/0ZUoF50WvrxucLmFKxuxv6',
        'https://open.spotify.com/embed/track/4lu7xSX0x9gRmG1QAApWQN',
        'https://open.spotify.com/embed/track/3NyxWuYU0s2GA6oZgDRQep',
        'https://open.spotify.com/embed/track/3FYIfyziD8T4CvxnpLePb4',
        'https://open.spotify.com/embed/track/7jLNptdHMIjgnd46Up3sx4',
        'https://open.spotify.com/embed/track/7ePyrOcnlE6KPWgsy2ouQB',
        'https://open.spotify.com/embed/track/0zQE5JOKWYFg2hQWWhuChj',
        'https://open.spotify.com/embed/track/4q4Uzzu5VOOUFLjDDLsruS'
      ],
      youtubeData: [
        'https://www.youtube.com/embed/CkQ8zSDlJmk',
        'https://www.youtube.com/embed/2fissTmiQOU'
      ],
    };
  }
});
