import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useStore } from "@/store";
import { User } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function DialogApp() {
  const [email, setEmail] = useState("");
  const { user, changeEmail } = useStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      return;
    }
    changeEmail(email);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>
          <User />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Atualizar o seu email</DialogTitle>
          <DialogDescription>
            <p>{user.name}</p>
            <p>seu email é: {user.email}</p>
            <form onSubmit={handleSubmit}>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                className="my-4"
                required
              />
              <Button type="submit">Mudar email</Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
