class GoodsService {
  async toggleFavorite (productId: string, currentStatus: boolean): Promise<IToggleFavoriteResponse> {
    await new Promise(resolve => setTimeout(resolve, 300))

    const newStatus = !currentStatus

    return {
      success: true,
      isFavorite: newStatus,
      productId
    }
  }

  async getFavoriteStatus (productId: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 200))

    return productId.startsWith('favorite-')
  }
}

export const goodsService = new GoodsService()
