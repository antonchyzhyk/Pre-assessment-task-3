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

type TGoodsDetailsType = 'title-with-subtitle' | 'paragraph'

interface IGoodsDetails {
  type: TGoodsDetailsType
  title: string
  subtitle?: string
}

interface IGoodsResponse {
  productId: number
  name: string
  price: IGoodsPrice
  images: string[]
  colorVariants: IGoodsColorVariant[]
  description: string
  details: IGoodsDetails[]
  shippingInformation: string
  isFavorite: boolean
}
