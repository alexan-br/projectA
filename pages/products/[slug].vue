<script setup>
  import productData from '@/cms/queries/productBaseSlug';
  const route = useRoute();
  const { data: allProducts, pending: productPending, error: productError } = await useLazyAsyncQuery(productData, {slug:route.params.slug});
  console.log(allProducts)
</script>
<template>
  <div v-if="!productPending && allProducts">
    <div v-for="product in allProducts.allProducts" :key="product.id">
      <h1>{{product.productTitle}}</h1>
      <p>{{ product.productPrice}}€</p>
      <div v-for="gallery in product.productGallery" :key="product.productGallery.id">
        <img v-for="url in gallery.gallery" :key="url.id" :src="url.url" @error="handleImageError(url)">
      </div>
    </div>
  </div>
</template>
