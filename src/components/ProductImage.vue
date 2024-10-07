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
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Muffin jelly gingerbread', description: '2 muffin jelly gingerbread' },
          { class: 'item-sub', image: 'https://via.placeholder.com/300x200', alt: 'Sesame snaps chocolate', description: '3 sesame snaps chocolate' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },{ class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
          { class: 'item--large', image: 'https://via.placeholder.com/300x300', alt: 'Oat cake', description: '4 oat cake' },
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
.item--large { grid-column: span 1; grid-row: span 4; }

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
</style>