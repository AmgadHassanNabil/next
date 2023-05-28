import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData)
{
    "use server"

    const title = data.get("title")?.valueOf();
    if (typeof title !== "string" || title.length === 0)
        throw new Error("Invalid Title");
    await prisma.todo.create({ data: { title, complete: false } });
    redirect("/");
}

export default function New()
{
    return <>
        <header>
            <h1>New</h1>
        </header>

        <form action={createTodo}>
            <input type="text" name="title" />
            <button type="submit">Create</button>
        </form>
    </>
}