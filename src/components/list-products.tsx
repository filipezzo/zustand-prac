import { Products } from "@/store";
import { useEffect, useState } from "react";
import { CartItem } from "./cart-item";

const productsx: Products[] = [
  {
    id: "1",
    product: "Laptop Dell XPS 13",
    value: 7999.99,
  },
  {
    id: "2",
    product: "Smartphone Samsung Galaxy S22",
    value: 4499.99,
  },
  {
    id: "3",
    product: "Headset Logitech G Pro X",
    value: 999.99,
  },
  {
    id: "4",
    product: 'Monitor UltraWide LG 34"',
    value: 2999.99,
  },
  {
    id: "5",
    product: "Teclado Mecânico Corsair K70 RGB",
    value: 799.99,
  },
  {
    id: "6",
    product: "Mouse Gamer Razer DeathAdder V2",
    value: 399.99,
  },
  {
    id: "7",
    product: "SSD NVMe Samsung 970 EVO Plus 1TB",
    value: 899.99,
  },
  {
    id: "8",
    product: "Placa de Vídeo NVIDIA RTX 3070",
    value: 4499.99,
  },
  {
    id: "9",
    product: "Cadeira Gamer DXRacer",
    value: 1299.99,
  },
  {
    id: "10",
    product: "Smartwatch Apple Watch Series 7",
    value: 3799.99,
  },
];

export function ListProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchUser = () => {
      setTimeout(() => {
        setProducts(productsx);
        setLoading(false);
      }, 1500);
    };

    try {
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <ul className="p-5 grid gap-5 grid-cols-3 my-10">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
