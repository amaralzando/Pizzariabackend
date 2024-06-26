import prismaClient from "../../prisma";

interface ProductRequest {
  category_id: string
}

export class ListByCategoryService {
  async execute({ category_id }: ProductRequest) {
    const findByCategory = await prismaClient.product.findMany({
      where: {
        categoryId: category_id
      } 
    })
    return findByCategory;
  }
}