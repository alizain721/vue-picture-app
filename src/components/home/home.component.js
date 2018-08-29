const axios = require('axios');

export default  {
  name: 'home',
  
  data() {
    return {
      items: []
    }
  },

  mounted(){
    const context = this;
    axios.get('https://api.flickr.com/services/feeds/photos_public.gne',{
      params:{
        tags: "car", 
        format: "json"
      }
    })
    .then(function (response) {
      eval(response.data)
      function jsonFlickrFeed(data) {
        context.load_data(data);
      }
    })
    .catch((err) => {
     console.log(err);
   });
  },

  methods: {
    load_data(data) {
      console.log(data.items)
      data.items.forEach((item) => {
        this.items.push({
          title: item.title,
          image_src: item.media.m,
          tags: item.tags
        })
      });
    }
  }
}
