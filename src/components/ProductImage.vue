<template>
  <div class="bg-gray-100 p-5 mt-32">
    <div class="grid-custom max-w-8xl mx-auto">
      <div v-for="(item, index) in combinedItems" :key="index" :class="item.class">
        <div class="bg-white rounded-lg overflow-hidden shadow-sm h-full">
          <img :src="item.imageUrl || item.image" :alt="item.title || item.alt" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/config'

export default {
  data() {
    return {
      defaultItems: [
        { 
          class: 'item-sub', 
          image: 'https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg', 
          alt: 'Sesame snaps chocolate', 
          description: '3 sesame snaps chocolate' 
        },
        { 
          class: 'item--large', 
          image: 'https://cdn-media.sforum.vn/storage/app/media/ctvseocps123/hinh-nen-8d-5.jpg', 
          alt: 'Muffin jelly gingerbread', 
          description: '2 muffin jelly gingerbread' 
        },
        { 
          class: 'item-sub', 
          image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-phong-canh-63-1.jpg', 
          alt: 'Sesame snaps chocolate', 
          description: '3 sesame snaps chocolate' 
        },
        { 
          class: 'item--large', 
          image: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-phong-canh-7-1.jpg', 
          alt: 'Oat cake', 
          description: '4 oat cake' 
        }
      ],
      firebaseItems: []
    }
  },

  computed: {
    combinedItems() {
      // Thêm class item--large vào mỗi item từ Firebase
      const formattedFirebaseItems = this.firebaseItems.map(item => ({
        ...item,
        class: 'item--large'
      }))
      // Kết hợp items mặc định với items từ Firebase
      return [...this.defaultItems, ...formattedFirebaseItems]
    }
  },

  mounted() {
    this.getImagesFromFirebase()
  },

  methods: {
    getImagesFromFirebase() {
      // Tạo query để lấy ảnh từ collection 'images', sắp xếp theo thời gian tạo
      const q = query(collection(db, 'images'), orderBy('createdAt', 'desc'))
      
      // Sử dụng onSnapshot để lắng nghe real-time updates
      onSnapshot(q, (snapshot) => {
        this.firebaseItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
      }, (error) => {
        console.error("Error fetching images: ", error)
      })
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
.item--large { 
  grid-column: span 1; 
  grid-row: span 4; 
  max-width: 362px; 
  max-height: 486px;
}

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


@media (max-width: 539px) {
  
  .item-sub {
    display: none;
  }
}


img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>