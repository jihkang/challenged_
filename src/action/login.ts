"use server";

import z from "zod";

const checkEmail = (email: string) => {
    const regex = /^[^@]*@zod\.com$/;
    return regex.test(email);
}

const checkPassword = (password: string) => {
    const regex = /\d+/;
    return regex.test(password);
}

const valid_data = z.object({
    username: z.string().min(5),
    email: z.string().refine(checkEmail, {message: "Only @zod.com emails are allowed"}),
    password: z.string().min(10, {message: "password should be at least 10 characters long"}).refine(checkPassword, {message: "at least one number (0123456789)"}),
});

export async function handleSubmit(prevState: unknown,formData: FormData) {
    "use server";
    
    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    }

    const result = valid_data.safeParse(data);

    if (!result.success) {
        return {
            result: result.success,
            field_errors: result.error?.flatten().fieldErrors,
            form_errors: result.error?.flatten().formErrors
        };
    }

    return {
        result: result.success
    };
}