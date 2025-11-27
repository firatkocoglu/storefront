import { post } from "./clientApi";

type CartAddResponse = {
  data: {
    id: number;
    user_id: number;
    status: string;
    expires_at: string;
    subtotal_gross: number;
    items: CartItem[];
  };
};

type CartItem = {
  data: {
    id: number;
    cart_id: number;
    product_id: number;
    quantity: number;
    unit_gross_price: number;
    line_subtotal_gross: number;
  };
};

export async function ensureCartToken(): Promise<void> {
  /*
   * check cookies for cart token
   * if present return;
   * else request createGuestCart
   * set cookie and return;
   */
  if (typeof window === "undefined") return;

  const hasCartToken = document.cookie.includes("cart_token");

  if (!hasCartToken) {
    await post("/guest/cart", {});
  }
  return;
}

export async function addItemToCart(productId: number): Promise<CartAddResponse> {
  try {
    await ensureCartToken();
    return await post<CartAddResponse>("/guest/cart/add-item", {
      product_id: productId,
    });
  } catch (error) {
    console.error("Cannot request adding item to cart: ", error);
    throw error;
  }
}
