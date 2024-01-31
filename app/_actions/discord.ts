"use server"

import {headers} from "next/headers"

export const sendDiscordMessage = async (message: string) => {
  try {
    const header = headers()
    const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    // A fetch request to send data through the discord
    // webhook, and display it as a message in your
    // discord channel
    await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "**["+ip+"]** "+message,
      }),
    })
  } catch (err: any) {
    // Just in case :)
    console.log(err.message)
  }
}