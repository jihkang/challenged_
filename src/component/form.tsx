"use client";

import { handleSubmit } from "@/action/login";
import { useActionState } from "react";
import { Button } from "./button";


export default function Form() {
    const [state, action] = useActionState(handleSubmit, null);

    return <div className="w-6/12 bg-yellow-400">
        <form action={action} className="flex flex-col border-2 border-black">
        <input name="email" className="rounded-md border-2 outline-2" type="email" required/>
        <input name="name" className="rounded-md" type="text" required/>
        <input name="password" className={`${state === false ? "focus:outline-red-700" : ""}`} type="password"  required/>
        {
            state === false && <div>
                Error
            </div>
        }
        <Button>
            log in
        </Button>
        {
            state === true && <div>
                welcome back
            </div>
        }
    </form>
    </div>
}