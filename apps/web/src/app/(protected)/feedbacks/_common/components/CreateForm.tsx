"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createSchema } from "@/feedbacks/schema/create";

import { useFeedbacksCreate } from "@/feedbacks/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { TypeOf } from "zod";

export const CreateForm = () => {
  const form = useForm<TypeOf<typeof createSchema>>({
    resolver: zodResolver(createSchema),
    defaultValues: {
      title: "",
    },
  });

  const { mutate } = useFeedbacksCreate();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((variables) => mutate(variables))}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Project Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
