"use client";

import { handleSubmit } from "@/action/login";
import { useActionState, useEffect, useState } from "react";
import { Button } from "./button";

export default function Form() {
    const [state, action] = useActionState(handleSubmit, {
        field_errors: {},
        result: null,
        formData: null
    });

    const [formValues, setFormValues] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="w-6/12 h-fit bg-blue-800">
            <form action={action} className="flex flex-col border-2 border-black">
                <input 
                    name="email" 
                    type="email" 
                    value={formValues.email}
                    onChange={handleInputChange}
                    className={`${state?.field_errors?.email ? "focus:outline-red-500" : ""}`} 
                    required
                />
                {state?.field_errors?.email?.map((item, index) => <li key={index}>{item}</li>)}
                
                <input 
                    name="username" 
                    type="text" 
                    value={formValues.username}
                    onChange={handleInputChange}
                    className={`${state?.field_errors?.username ? "focus:outline-red-500" : ""}`} 
                    required
                />
                {state?.field_errors?.username?.map((item, index) => <li key={index}>{item}</li>)}
                
                <input 
                    name="password" 
                    type="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    className={`${state?.field_errors?.password ? "focus:outline-red-500" : ""}`} 
                    required
                />
                {state?.field_errors?.password?.map((item, index) => <li key={index}>{item}</li>)}
                
                <Button>
                    Log in
                </Button>
                
                {state?.result === true && (
                    <div className="text-green-500">Welcome back!</div>
                )}
                
                {state?.result === false && (
                    <div className="text-red-500">Login failed. Please try again.</div>
                )}
            </form>
        </div>
    );
}