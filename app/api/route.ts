import connect from "@/libs/connect"
import { NextResponse } from "next/server"

export const GET=async()=>{
    await connect()
    return new NextResponse('meow')
}