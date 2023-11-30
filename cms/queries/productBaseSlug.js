export default gql `
query productQuery($slug: String) {
  allProducts(filter: {productSlug: {eq: $slug}}) {
    productTitle
    productDesc
    productPrice
    id
    productColor {
      color {
        colorName
        color {
          cssRgb
        }
      }
    }
    productBrand {
      brandName {
        brandName
      }
    }
    productGallery {
      gallery {
        filename
        url
      }
    }
  }
}
`