<template>
  <div v-if="!productPending && allProducts">
    <div v-for="product in allProducts.allProducts" :key="product.id">
      <h1>{{product.productTitle}}</h1>
      <p>{{ product.productPrice}}€</p>
      <div class="gallery">
        <div v-for="(gallery, galleryIndex) in product.productGallery" :key="galleryIndex">
          <img
            v-for="(url, imgIndex) in gallery.gallery"
            :key="imgIndex"
            :src="url.url"
            @error="handleImageError(url)"
            :class="{ 'main-image': galleryIndex === selectedGalleryIndex && imgIndex === selectedImageIndex }"
            @click="changeMainImage(galleryIndex, imgIndex)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import productData from '@/cms/queries/productBaseSlug';

const route = useRoute();
const selectedGalleryIndex = ref(0);
const selectedImageIndex = ref(0);

const { data: allProducts, pending: productPending, error: productError } = await useLazyAsyncQuery(productData, { slug: route.params.slug });

const changeMainImage = (galleryIndex, imgIndex) => {
  selectedGalleryIndex.value = galleryIndex;
  selectedImageIndex.value = imgIndex;
};
</script>
<style lang="scss">
.gallery {
  overflow: hidden;
  position: relative;
  > * {
    img + img{
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    &:first-child {
      width: 500px;
      height: 500px;
      object-fit: cover;
    }
  }
}
</style>
