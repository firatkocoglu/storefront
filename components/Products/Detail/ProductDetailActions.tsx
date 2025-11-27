"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { addItemToCart } from "@/lib/cartClient";

export function ProductDetailActions({
  productId,
  stock,
}: {
  productId: number;
  stock: { quantity: number };
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddToCart = async () => {
    if (isSubmitting) return;
    try {
      setIsSubmitting(true);
      await addItemToCart(productId);
    } catch (error) {
      console.error("Error adding item to cart: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-to-cart flex gap-4">
      <Button
        onClick={handleAddToCart}
        variant="outline"
        className="w-1/2 bg-black py-6 text-white"
        disabled={isSubmitting}
      >
        <ShoppingCart />
        {isSubmitting ? "Adding..." : "Add to Cart"}
      </Button>
      {stock && stock.quantity > 10 ? (
        <Badge variant="secondary" className="bg-green-500 text-white dark:bg-green-600">
          In Stock
        </Badge>
      ) : (
        <div className="flex gap-2">
          <Badge variant="destructive" className="bg-red-500 text-white dark:bg-red-600">
            Critical Stock
          </Badge>
          <Badge variant="outline" className="bg-blue-500 text-white dark:bg-blue-600">
            Last {stock?.quantity} products
          </Badge>
        </div>
      )}
    </div>
  );
}
