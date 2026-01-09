interface IGoodsColorVariant {
  color: string
  thumbnail: string
  images: string[]
  inStock: boolean
  availableSizes: IShoeSize[]
}

interface IGoodsPrice {
  value: string
  currency: string
}

interface IGoodsResponse {
  productId: number
  name: string
  price: IGoodsPrice
  images: string[]
  colorVariants: IGoodsColorVariant[]
  description: string
  details: string
  isFavorite: boolean
}
