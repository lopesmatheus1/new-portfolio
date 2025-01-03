"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { contactFormSchema, ContactSchema } from "../_api/contact/schema";
import { useToast } from "../_hooks/use-toast";
import axios from "axios";

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
   //TODO FIX
   
    // try {
    //   await axios.post("/_api/contact", values);
    //   form.reset();
    // } catch (error) {
    //   console.log(error);
    //   toast({ variant: "destructive", title: "Ops! Alguma coisa deu errado" });
    // }
  };

  return (
    <section className="container mt-10 flex h-[500px] flex-col">
      <div>
        <h2 className="text-center text-3xl font-extralight lg:text-left lg:text-4xl">
          Entre em contato comigo
        </h2>
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="w-full max-w-[450px]">
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

              <Button className="w-full" variant={"outline"} type="submit">
                Enviar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
