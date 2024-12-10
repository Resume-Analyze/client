import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "./ui/button";
import { profileFormFields } from "../../data/formData";

const resumeFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: "Name must be at least 3 characters long" }),
    email: z
        .string()
        .min(1, { message: "This field has to be filled" })
        .email("Invalid email"),
    phone: z.string().regex(/^\d{10}$/, { message: "Invalid phone number" }),
    address: z
        .string()
        .min(3, { message: "Address must be at least 3 characters long" }),
    city: z
        .string()
        .min(3, { message: "City must be at least 3 characters long" }),
    state: z
        .string()
        .min(3, { message: "State must be at least 3 characters long" }),
    zip: z.string().regex(/^[1-9][0-9]{5}$/, { message: "Invalid zip code" }),
    country: z
        .string()
        .min(3, { message: "Country must be at least 3 characters long" }),
    objective: z
        .string()
        .min(10, { message: "Objective must be at least 10 characters long" }),
    experience: z.array(
        z.object({
            title: z.string().min(3, {
                message: "Title must be at least 3 characters long",
            }),
            company: z.string().min(3, {
                message: "Company must be at least 3 characters long",
            }),
            location: z.string().min(3, {
                message: "Location must be at least 3 characters long",
            }),
            from: z.date().refine((d) => d < new Date(), {
                message: "From date must be in the past",
            }),
            to: z.date().refine((d) => d < new Date(), {
                message: "To date must be in the past",
            }),
            description: z.string().min(10, {
                message: "Description must be at least 10 characters long",
            }),
        })
    ),
    education: z.array(
        z.object({
            school: z.string(),
            degree: z.string(),
            major: z.string(),
            from: z.string(),
            to: z.string(),
            description: z.string(),
        })
    ),
    skills: z.array(z.string()),
    languages: z.array(
        z.object({
            name: z.string(),
            level: z.string(),
        })
    ),
});

const ResumeForm = () => {
    const onSubmit = (data) => {
        console.log(data);
    };
    const form = useForm({ resolver: zodResolver(resumeFormSchema) });

    return (
        <Form {...form} className="space-y-8 container">
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="max-w-sm p-5"
            >
                <div className="grid grid-cols-2 gap-2">
                    {/* Heading for personal section */}
                    <div className="col-span-2">
                        <FormDescription>
                            Personal Information
                        </FormDescription>
                    </div>
                    {profileFormFields.map((c, idx) => (
                        <FormField
                            key={idx}
                            control={form.control}
                            name={c.name}
                            label={c.label}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{c.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={c.placeholder}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                </div>
                <Button type="submit" className="m-2">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default ResumeForm;
