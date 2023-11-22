import { NextResponse } from 'next/server'
export async function GET(req: Request, res: Response) {
     let response = await fetch('https://jsonplaceholder.typicode.com/todos');
     const todos = await  response.json();
     return NextResponse.json(todos);
 }