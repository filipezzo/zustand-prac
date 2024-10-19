import { Products, useStore } from "@/store";
import { BugPlay } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function CartItem({ product }: { product: Products }) {
  const [isAdding, setIsAdding] = useState(false);
  const [count, setCount] = useState(0);

  const { addToCart } = useStore();

  const handleAddItem = () => {
    if (count > 0) {
      addToCart({ product, quantity: count });
      setCount(0);
      setIsAdding(false);
    }
  };
  return (
    <Card>
      <CardContent>
        <strong>{product.product}</strong>
        <p>
          {product.value.toLocaleString("pt-br", {
            currency: "brl",
            style: "currency",
          })}
        </p>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)}>Adicionar</Button>
        )}
        {isAdding && (
          <div className="flex mt-5 items-center gap-2">
            <Button
              disabled={count === 0}
              onClick={() =>
                setCount((prev) => {
                  return prev === 0 ? 0 : prev - 1;
                })
              }
            >
              -
            </Button>
            <strong>{count}</strong>
            <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
            <Button onClick={handleAddItem}>
              <BugPlay />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
