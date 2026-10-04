// 2
export interface ProductQuery {
  page?: string;
  limit?: string;
}

// 3
export interface ProductParams {
  id: string;
}

export interface UpdateProductBody {
  name: string;
  price: number;
}
