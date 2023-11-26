export default gql `
query productQuery {
  allProducts {
    productTitle
    productDesc
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