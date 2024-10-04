<template>
    <div class="bg-gray-100 p-5">
      <div class="grid-custom max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(item, index) in items" :key="index" :class="item.class">
          <div class="relative bg-white rounded-lg overflow-hidden shadow-sm h-full">
            <img :src="item.image" :alt="item.alt" class="w-full h-full object-cover">
            <div class="absolute bottom-0 left-0 bg-white bg-opacity-75 p-1 text-xs">
              <p>{{ item.description }}</p>
            </div>
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
          { class: 'item-sub', image: 'https://via.placeholder.com/300x200', alt: 'Sesame snaps chocolate', description: '3 sesame snaps chocolate' },
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
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(70px, auto);
    gap: 8px;
  }
  .item { grid-column: span 1; grid-row: span 1; }
  .item-sub { grid-column: span 1; grid-row: span 2;}
  .item--large { grid-column: span 1; grid-row: span 4; }
  .grid-custom {
    grid-auto-rows: auto; 
}
  </style>