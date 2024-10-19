import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useStore } from "@/store";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export function CartApp() {
  const { cart } = useStore();

  const total = cart?.reduce(
    (acc, item) => acc + item.product.value * item.quantity,
    0
  );
  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <CaretDownIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        {cart.length > 0 ? (
          <ul className="p-5 my-6 flex flex-col gap-5">
            {cart.map((item) => (
              <li
                className="flex bg-blue-400 rounded-md p-5 text-sm flex-col gap-1"
                key={item.product.id}
              >
                <p>{item.product.product}</p>
                <p>
                  {item.product.value.toLocaleString("pt-br", {
                    currency: "brl",
                    style: "currency",
                  })}
                </p>
                <p>{item.quantity}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Carrinho vazio</p>
        )}
        {cart.length > 0 && (
          <DialogFooter>
            <p className="text-orange-500">TOTAL : {total}</p>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
