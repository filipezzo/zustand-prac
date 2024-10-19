import { create } from "zustand";

export type Products = {
  id: string;
  product: string;
  value: number;
};

type CartItem = {
  product: Products;
  quantity: number;
};

type Store = {
  cart: CartItem[];
  user: {
    name: string;
    email: string;
  };
};

type Actions = {
  changeEmail: (email: string) => void;
  addToCart: ({
    product,
    quantity,
  }: {
    product: Products;
    quantity: number;
  }) => void;
};

export const useStore = create<Store & Actions>()((set) => ({
  cart: [],
  user: {
    name: "Filipe",
    email: "xxxx@xxx.com",
  },
  changeEmail: (email: string) =>
    set((state) => ({ user: { ...state.user, email } })),

  addToCart: ({ product, quantity }) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }

      return {
        cart: [...state.cart, { product, quantity }],
      };
    }),
}));
