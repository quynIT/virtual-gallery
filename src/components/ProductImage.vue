<template>
  <div class="bg-gray-100 p-5 mt-32">
    <div class="grid-custom max-w-8xl mx-auto">
      <div v-for="(item, index) in items" :key="index" :class="item.class">
        <div class="bg-white rounded-lg overflow-hidden shadow-sm h-full">
          <img :src="item.image" :alt="item.alt" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
      { class: 'item-sub', image: 'https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg', alt: 'Sesame snaps chocolate', description: '3 sesame snaps chocolate' },
          { class: 'item--large', image: 'https://cdn-media.sforum.vn/storage/app/media/ctvseocps123/hinh-nen-8d-5.jpg', alt: 'Muffin jelly gingerbread', description: '2 muffin jelly gingerbread' },
          { class: 'item-sub', image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-phong-canh-63-1.jpg', alt: 'Sesame snaps chocolate', description: '3 sesame snaps chocolate' },
          { class: 'item--large', image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-phong-canh-7-1.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-phong-canh-6-1.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-phong-canh-10-1.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://1.bp.blogspot.com/-KpObeo9JA3c/XpvD-RoH1-I/AAAAAAAAAaQ/iCgUj5v7MQMzgLMiiW0qlCyxW98XRbmBACLcBGAsYHQ/s1600/hinh-nen-full-hd-1080p-cho-dien-thoai%2B%25281%2529.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://inkythuatso.com/uploads/thumbnails/800/2022/05/hinh-nen-binh-minh-tren-bien-cho-dien-thoai-5-inkythuatso-30-14-54-05.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://m.yodycdn.com/blog/hinh-nen-thien-nhien-4k-yody-vn-101.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://vapa.vn/wp-content/uploads/2022/12/hinh-nen-canh-thien-nhien-001.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://c.wallhere.com/photos/c8/28/3840x5760_px_nature_snow_water-835410.jpg!d', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://images.pexels.com/photos/14558135/pexels-photo-14558135.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://images.pexels.com/photos/3571576/pexels-photo-3571576.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-thien-nhien-18.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-thien-nhien-15.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://i.pinimg.com/736x/07/9e/5b/079e5b9fa1cf1fb80812f8e61b4a4b43.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-thien-nhien-4.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2020/09/ingmar-X4iOjmLEcjY-unsplash.jpg', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2022/07/49-2.jpg', alt: 'Oat cake', description: '4 oat cake' },
      ]
    }
  }
}
</script>

<style>
.grid-custom {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 8px;
}

.item { grid-column: span 1; grid-row: span 1; }
.item-sub { grid-column: span 1; grid-row: span 2; }
.item--large { grid-column: span 1; grid-row: span 4; max-width: 362px; 
  max-height: 486px;}

@media (min-width: 640px) {
  .grid-custom {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid-custom {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-custom {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 639px) {
  .mt-32 {
    margin-top: 21rem;
  }
}
@media (max-width: 539px) {
  .mt-32 {
    margin-top: 17rem;
  }
  .item-sub{
    display: none;
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .mt-32 {
    margin-top: 21rem;
  }
}
img {
  width: 100%; /* Chiều rộng của ảnh bằng chiều rộng của khung */
  height: 100%; /* Chiều cao của ảnh bằng chiều cao của khung */
  object-fit: cover; /* Giữ tỷ lệ ảnh mà không làm méo */
}
</style>