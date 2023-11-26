<script setup>
    import productData from '@/cms/queries/productData';

    try {
  console.log('Before query execution');
  const { data: allProducts, pending: productPending, error: productError } = await useLazyAsyncQuery(productData);
  console.log('After query execution');
  console.log('allProducts:', allProducts);
  console.log('productPending:', productPending);
  console.log('productError:', productError);
} catch (error) {
  console.error('Error during query execution:', error);
}
</script>
<template>
    <h1>Home</h1>
    <p>test</p>
    <div v-if="allProducts" v-for="product in allProducts.allProducts" :key="product.id">
        <!-- {{ product }}  -->
        <div v-for="gallery in product.productGallery" :key="product.productGallery.id">
            <!-- {{ gallery.gallery }} -->
            <img v-for="url in gallery.gallery" :key="url.id" :src="url.url" @error="handleImageError(url)">
                <!-- {{ url.url }} -->
        </div>
    </div>
</template>