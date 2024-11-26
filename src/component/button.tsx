"use client";
import { useFormStatus } from "react-dom";

export function Button({children}: {children: React.ReactNode}) {
    const { pending } = useFormStatus();
    
    return <button className={`${pending ? "bg-slate-300": "bg-blue-300"}`}>
        {pending ? "pending..." : children}
    </button>
}

