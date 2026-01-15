class GoodsService {
  async getGoods (): Promise<IGoods> {
    await new Promise(resolve => setTimeout(resolve, 500))
    const response = await fetch('/mocks/goods.json')
    return response.json()
  }

  async toggleFavorite (productId: number, currentStatus: boolean) {
    await new Promise(resolve => setTimeout(resolve, 300, productId))

    const newStatus = !currentStatus

    return {
      success: true,
      isFavorite: newStatus
    }
  }

  async addToCart (params: {
    productId: number
    size: IShoeSize
    color: string
  }) {
    const { productId, size, color } = params
    await new Promise(resolve => setTimeout(resolve, 300, { productId, size, color }))

    return
  }
}

export const goodsService = new GoodsService()
