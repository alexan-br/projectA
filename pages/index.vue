<script setup>
    import productData from '@/cms/queries/productData';
    
    const { data: allProducts, pending: productPending, error:productError } = await useLazyAsyncQuery(productData);
    const handleImageError = (url) => {
  console.error('Error loading image:', url);
  // Handle image loading error as needed
};
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