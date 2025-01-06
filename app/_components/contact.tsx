"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "../_hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { contactFormSchema, ContactSchema } from "../api/contact/schema";
import axios from "axios";
import HomeTitle from "../(home)/_components/home-titles";
import { motion } from "motion/react";

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactSchema) => {
    try {
      await axios.post("/api/contact", values); // Rota de API
      form.reset();
      toast({ title: "Mensagem enviada com sucesso!" });
    } catch (error) {
      console.log(error);
      toast({ variant: "destructive", title: "Ops! Alguma coisa deu errado" });
    }
  };

  return (
    <section className="container mt-10 flex h-[500px] flex-col">
      <div className="flex items-center justify-center">
        <HomeTitle variant="small">Entre em contato comigo</HomeTitle>
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-[450px]"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu e-mail" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Digite uma mensagem" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-full"
                variant={"outline"}
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                Enviar
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
