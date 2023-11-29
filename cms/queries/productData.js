export default gql `
query productQuery {
  allProducts {
    productTitle
    productDesc
    productPrice
    productSlug
    id
    productBrand {
      brandName {
        brandName
      }
    }
    productColor {
      color {
        colorName
        color {
          cssRgb
        }
      }
    }
    productGallery {
      gallery {
        url
      }
    }
  }
}
`