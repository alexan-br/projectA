<script setup>
    import productData from '@/cms/queries/productData';
    const { data: allProducts, pending: productPending, error: productError } = await useLazyAsyncQuery(productData);

</script>
<template v-if="!productPending">
    <div class="banner">
      <h1>ProjectA</h1>
      <p>Be different</p>
    </div>
    <ul class="product-list">
      <div v-if="allProducts" v-for="product in allProducts.allProducts" :key="product.id">
        <NuxtLink :to="`/products/${product.productSlug}`">
          <div class="product-card">
            <img v-if="product.productGallery.length > 0" :src="product.productGallery[0].gallery[0].url" :alt="product.productTitle" @error="handleImageError(product.productGallery[0].url)">
            <h2>{{ product.productTitle }}</h2>
            <p>{{ product.productPrice }}€</p>
            <div v-for="brandInfo in product.productBrand" :key="brandInfo.brandName.brandName">
              <p>
                {{ brandInfo.brandName.brandName }}
              </p>
            </div>
            <div>
              <span v-for="colorInfo in product.productColor" :key="colorInfo.color.colorName">
                <span :style="{ backgroundColor: colorInfo.color.color.cssRgb, padding: '4px', margin: '4px', display: 'inline-block' }"></span>
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </ul>
    
</template>
<style lang="scss">
  a {
    display: block !important;
  }
  .banner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    background-color: rgb(7, 7, 7);
    gap: 10px;
    p {
      letter-spacing: 5px;
    }
  }
  .product-card{
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgb(240, 240, 240);
    padding: 15px;
    border-radius: 15px;
    color: rgb(19, 19, 19);
    img{
      height: 200px;
      object-fit: cover;
    }
  }
</style>