import { Component, Vue } from 'vue-property-decorator';

@Component(
  {
    name: 'FavoriteAudio',
    metaInfo: {
      title: 'Favorite Audio'
    },
  }
)
export default class FavoriteAudio extends Vue {
  public favAudio: object[] = [
    {
      id: 1,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/148688836&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 2,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/153646617&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 3,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308440489&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 4,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/258155138&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 5,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/241679073&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 6,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/148190234&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 7,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/194052730&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 8,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/191454310&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 9,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/463715610&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 10,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/952664497&color=%23cccfd3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 11,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/877060252&color=%23cccfd3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 12,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/338436983&color=%23cccfd3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 13,
      srcAudio:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/172156106&color=%23cccfd3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    },
    {
      id: 14,
      srcAudio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1066587745&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    }
  ];
  public currentPage: number = 1;
  public perPage: number = 6;
  public perPageSelection: number[] = [6, 9, 12];

  get total() {
    return this.favAudio.length;
  }

  get paginatedItems() {
    const pageNumber = this.currentPage - 1;
    return this.favAudio.slice(
      pageNumber * this.perPage,
      (pageNumber + 1) * this.perPage
    );
  }
}
