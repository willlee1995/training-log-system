"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import Link from "next/link";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

const profileFormSchema = z.object({
  procedure: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  date: z.date(),
  role: z.string({
    required_error: "Please select a role.",
  }),
  tier: z.string({
    required_error: "Please select a tier.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  supervisor: z.string({
    required_error: "Please select a supervisor.",
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const supervisors = [
  { label: "Dr. K F Fung", value: "fkf156" },
  { label: "Example", value: "exm" },
] as const;
// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {};

export function AddProcedureForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="procedure"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Procedure Name</FormLabel>
              <FormControl>
                <Input placeholder="PICC" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of procedure</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role of IR Fellow</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role in this case" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="PO">Primary Operator</SelectItem>
                  <SelectItem value="A">Assistant</SelectItem>
                  <SelectItem value="S">Supervisor</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tier</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role in this case" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="A">Tier A</SelectItem>
                  <SelectItem value="B">Tier B</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Select Tier for the case</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category in this case" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Neuro">
                    Neurointerventional procedures
                  </SelectItem>
                  <SelectItem value="Arterial">
                    Arterial interventional procedures
                  </SelectItem>
                  <SelectItem value="Venous">
                    Venous and dialysis access interventions
                  </SelectItem>
                  <SelectItem value="Hepatobiliary">
                    Hepatobiliary interventions
                  </SelectItem>
                  <SelectItem value="Thoracic">
                    Thoracic interventions
                  </SelectItem>
                  <SelectItem value="Urogenital">
                    Urogenital interventions
                  </SelectItem>
                  <SelectItem value="Musculoskeletal">
                    Musculoskeletal interventions
                  </SelectItem>
                  <SelectItem value="Paediatric">
                    Paediatric interventions
                  </SelectItem>
                  <SelectItem value="Oncology">
                    Interventional Oncology
                  </SelectItem>
                  <SelectItem value="VA">Vascular anomalies</SelectItem>
                  <SelectItem value="MR">MR guided interventions</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Select Category for the case</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="supervisor"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Supervisor</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? supervisors.find(
                            (supervisor) => supervisor.value === field.value
                          )?.label
                        : "Select supervisor"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandEmpty>No supervisor found</CommandEmpty>
                    <CommandGroup>
                      {supervisors.map((supervisor) => (
                        <CommandItem
                          value={supervisor.label}
                          key={supervisor.value}
                          onSelect={() => {
                            form.setValue("supervisor", supervisor.value);
                          }}
                        >
                          <CheckIcon
                            className={cn(
                              "mr-2 h-4 w-4",
                              supervisor.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {supervisor.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add procedure</Button>
      </form>
    </Form>
  );
}
