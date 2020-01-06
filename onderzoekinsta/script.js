const EventBus = new Vue();

const posts = [
   {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic4.jpg',
    likes: 0,
    upVoted: false,
    caption: "--",
    filter: 'perpetua'
   },
   {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic3.jpg',
    likes: 5,
    upVoted: false,
    caption: '--',
   },
   {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic1.jpg',
    likes: 3,
    upVoted: false,
    caption: '--',
    filter: 'lofi'
  },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic2.jpg',
    likes: 4,
    upVoted: false,
    caption: '--',
  },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic5.jpg',
    likes: 2,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic6.jpg',
    likes: 3,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic7.jpg',
    likes: 2,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic8.jpg',
    likes: 4,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic9.jpg',
    likes: 4,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic10.jpg',
    likes: 3,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic11.jpg',
    likes: 5,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic12.jpg',
    likes: 3,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic13.jpg',
    likes: 0,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic14.jpg',
    likes: 2,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic15.jpg',
    likes: 1,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic16.jpg',
    likes: 4,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic17.jpg',
    likes: 1,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic18.jpg',
    likes: 2,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic19.jpg',
    likes: 1,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic20.jpg',
    likes: 4,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic21.jpg',
    likes: 2,
    upVoted: false,
    caption: '--',
   },
  {
    username: 'Gen Z',
    userImage: 'images/pf1.png',
    postImage: 'images/postpic22.jpg',
    likes: 4,
    upVoted: false,
    caption: '--',
   }
]

const filters = [
  { name: 'normal' }, { name: 'clarendon' }, { name: 'gingham' }, { name: 'moon' }, { name: 'lark' }, { name: 'reyes' }, { name: 'juno' }, { name: 'slumber' }, { name: 'aden' }, { name: 'perpetua' }, { name: 'mayfair' }, { name: 'rise' }, { name: 'hudson' }, { name: 'valencia' }, { name: 'xpro2' }, { name: 'willow' }, { name: 'lofi' }, { name: 'inkwell' }, { name: 'nashville' }
]

Vue.component('instagram-post', {
  template: 
  `
    <div class="instagram-post">
      <div class="header level">
          <div class="level-left">
            <figure class="image is-32x32">
              <img :src="post.userImage" />
            </figure>
            <span class="username">{{post.username}}</span>
          </div>
      </div>
      <div class="image-container"
           :class="post.filter"
           :style="{ backgroundImage: 'url(' + post.postImage + ')' }"
           @dblclick="like">
      </div>
      <div class="content">
        <div class="heart">
          <i class="far fa-heart fa-lg"
            :class="{'fas': !this.post.upVoted,  'fas': this.post.upVoted}"
            @click="like">
          </i>
        </div>
        <p class="likes">{{post.likes}} likes</p>
        <p class="caption"><span>{{post.username}}</span> {{post.caption}}</p>
      </div>
    </div>
  `,
  props: ['post'],
  methods: {
    like() {
      this.post.upVoted ? this.post.likes-- : this.post.likes++;
      this.post.upVoted = !this.post.upVoted;
    }
  }
});

Vue.component('filter-type', {
  template:
  `
   <div class="filter-type">
     <p>{{filter.name}}</p>
    <div class="img"
         :class="filter.name"
         :style="{ backgroundImage: 'url(' + image + ')' }"
         @click="selectFilter">
    </div> 
   </div>
  `,
  props: ['filter', 'image'],
  methods: {
    selectFilter() {
      EventBus.$emit('selectFilter', {filter: this.filter.name});
    }
  }
});

new Vue({
  el: "#app",
  data: {
    posts,
    image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg',
    caption: '',
    filterType: 'normal',
    step: 1,
    showDetails: false,
    fileInput: ''
  },
  created () {
    EventBus.$on('selectFilter', (evt) => {
      this.filterType = evt.filter;
    })
  },
  methods: {
    fileUpload(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image = files[0];
      this.createImage();
    },
    createImage() {
      const image = new Image();
      const reader = new FileReader();

      reader.onload = e => {
        this.image = e.target.result;
        this.step = 2;
      };
      reader.readAsDataURL(this.image);
    },
    uploadRandomImage() {
      const randomImages = [
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/cat.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/sushi.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/velvet_monkey.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pineapple.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_ocean.jpg'
      ];
      
      this.image = randomImages[Math.floor(Math.random() * randomImages.length)];
      this.step = 2;
    },
    goToHome() {
      this.image = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg';
      this.caption = '';
      this.filterType = 'normal';
      this.step = 1;
    },
    sharePost() {
      const post = {
        username: 'codepen',
        userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/codepen_logo.png',
        postImage: this.image,
        likes: 0,
        caption: this.caption,
        filter: this.filterType
      }
      
      this.posts.unshift(post);
      this.goToHome();
    }
  }
});