export async function handleSubmit(prevState: unknown,formData: FormData) {
    const data = {
        email: formData.get("email"),
        password: formData.get("password"),
    }

    if (data.password === "12345")
        return true;

    return false;
}