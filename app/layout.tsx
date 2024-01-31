import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Shooketh – AI bot fine-tuned on Shakespeare's literary works",
  description:
    "Shooketh is an AI bot built with the Vercel AI SDK and fine-tuned on Shakespeare's literary works."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   <>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
          height="0"
          width="0"
          className="hidden invisible"
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      {/* <!-- Google Tag Manager --> */}
      <Script id="google-tag-management">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',"${process.env.GTM_ID}");

`}</Script>
</>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
