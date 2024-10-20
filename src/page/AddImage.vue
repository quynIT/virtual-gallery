<template>
  <div class="container">
    <h2 class="form-title">Upload Ảnh Mới</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="author">Tên tác giả</label>
        <input 
          type="text" 
          id="author" 
          class="form-control" 
          placeholder="Nhập tên tác giả"
          v-model="formData.author"
          required
        >
      </div>

      <div class="form-group">
        <label for="title">Tiêu đề ảnh</label>
        <input 
          type="text" 
          id="title" 
          class="form-control" 
          placeholder="Nhập tiêu đề ảnh"
          v-model="formData.title"
          required
        >
      </div>

      <div class="form-group">
        <label for="description">Nội dung ảnh</label>
        <textarea 
          id="description" 
          class="form-control" 
          placeholder="Mô tả chi tiết về ảnh của bạn"
          v-model="formData.description"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label>Tải ảnh lên</label>
        <div 
          class="file-upload"
          :class="{ 'dragover': isDragging }"
          @dragenter.prevent="isDragging = true"
          @dragleave.prevent="isDragging = false"
          @dragover.prevent
          @drop.prevent="handleDrop"
        >
          <input 
            type="file" 
            accept="image/*"
            @change="handleFileChange"
            ref="fileInput"
            required
          >
          <i>📸</i>
          <p>
            Kéo thả ảnh vào đây hoặc click để chọn file<br>
            <small style="color: #9ca3af">Hỗ trợ: JPG, PNG, GIF</small>
          </p>
          <div v-if="formData.imagePreview" class="image-preview">
            <img :src="formData.imagePreview" alt="Preview">
          </div>
        </div>
      </div>

      <div v-if="uploadProgress > 0 && uploadProgress < 100" class="progress-bar">
        <div class="progress" :style="{ width: uploadProgress + '%' }"></div>
        <span>{{ Math.round(uploadProgress) }}%</span>
      </div>

      <button type="submit" class="submit-btn" :disabled="isSubmitting">
        {{ isSubmitting ? 'Đang xử lý...' : 'Đăng tải' }}
      </button>
    </form>
  </div>
</template>

<script>
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, storage } from '../firebase/config';

export default {
  name: 'AddImage',
  
  data() {
    return {
      formData: {
        author: '',
        title: '',
        description: '',
        image: null,
        imagePreview: null
      },
      isDragging: false,
      isSubmitting: false,
      uploadProgress: 0
    }
  },

  methods: {
    handleFileChange(event) {
      const file = event.target.files[0]
      if (file) {
        this.processFile(file)
      }
    },

    handleDrop(event) {
      this.isDragging = false
      const file = event.dataTransfer.files[0]
      if (file && file.type.startsWith('image/')) {
        this.processFile(file)
      }
    },

    processFile(file) {
      this.formData.image = file
      const reader = new FileReader()
      reader.onload = (e) => {
        this.formData.imagePreview = e.target.result
      }
      reader.readAsDataURL(file)
    },

    async handleSubmit() {
      if (!this.formData.image) {
        alert('Vui lòng chọn một ảnh')
        return
      }

      this.isSubmitting = true
      try {
        // 1. Upload ảnh lên Firebase Storage
        const imageUrl = await this.uploadImage(this.formData.image)
        
        // 2. Lưu metadata vào Firestore
        await this.saveImageData(imageUrl)
        
        this.resetForm()
        alert('Upload thành công!')
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('Có lỗi xảy ra khi upload: ' + error.message)
      } finally {
        this.isSubmitting = false
        this.uploadProgress = 0
      }
    },

    async uploadImage(file) {
      return new Promise((resolve, reject) => {
        // Tạo tên file unique bằng timestamp
        const fileName = `${Date.now()}-${file.name}`
        // Tạo reference đến vị trí lưu file trên Storage
        const storageRef = ref(storage, `images/${fileName}`)
        
        // Tạo upload task
        const uploadTask = uploadBytesResumable(storageRef, file)

        // Theo dõi tiến trình upload
        uploadTask.on('state_changed',
          (snapshot) => {
            // Cập nhật tiến trình
            this.uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          },
          (error) => {
            // Xử lý lỗi
            reject(error)
          },
          async () => {
            // Upload hoàn tất, lấy download URL
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
            resolve(downloadURL)
          }
        )
      })
    },

    async saveImageData(imageUrl) {
      // Tạo document mới trong collection 'images'
      await addDoc(collection(db, 'images'), {
        author: this.formData.author,
        title: this.formData.title,
        description: this.formData.description,
        imageUrl: imageUrl,
        createdAt: serverTimestamp(),
        likes: 0,
        views: 0
      })
    },

    resetForm() {
      this.formData = {
        author: '',
        title: '',
        description: '',
        image: null,
        imagePreview: null
      }
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = ''
      }
    }
  }
}
</script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  *{
    width: 600px;
  }
  .container {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
    width: 100%;
    max-width: 800px; /* Tăng từ 600px lên 800px */
    transform: translateY(20px);
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
    position: relative;
    z-index: 0; /* Thêm z-index thấp hơn navbar */
    margin: 20px auto; /* Thêm margin để tránh bị dính sát các cạnh */
  }
  
  @keyframes fadeIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .form-title {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
    position: relative;
  }
  
  .form-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border-radius: 10px;
  }
  
  .form-group {
    margin-bottom: 25px;
    position: relative;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #666;
    font-weight: 500;
    transform: translateX(0);
    transition: transform 0.3s ease;
  }
  
  .form-group:focus-within label {
    transform: translateX(10px);
    color: #6366f1;
  }
  
  .form-control {
    color: #333;
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  
  .form-control:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
  }
  
  .form-control::placeholder {
    color: #9ca3af;
  }
  
  textarea.form-control {
    min-height: 120px;
    resize: vertical;
  }
  
  .file-upload {
    position: relative;
    display: block;
    background: #f9fafb;
    border: 2px dashed #e5e7eb;
    border-radius: 8px;
    padding: 30px 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .file-upload:hover, .file-upload.dragover {
    background: #f3f4f6;
    border-color: #6366f1;
  }
  
  .file-upload input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
  
  .file-upload i {
    font-size: 40px;
    color: #6366f1;
    margin-bottom: 15px;
  }
  
  .file-upload p {
    font-size: 14px;
    color: #666;
  }
  
  .image-preview {
    margin-top: 15px;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .image-preview img {
    max-width: 100%;
    height: auto;
  }
  
  .submit-btn {
    display: block;
    width: 100%;
    padding: 14px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .submit-btn:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
  }
  
  .submit-btn::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: 0.5s;
  }
  
  .submit-btn:not(:disabled):hover::after {
    left: 100%;
  }
  
  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  .progress-bar {
  width: 100%;
  height: 20px;
  background-color: #f3f4f6;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 10px;
  transition: width 0.3s ease;
}

.progress-bar span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #666;
  font-size: 12px;
  font-weight: 500;
}
  </style>