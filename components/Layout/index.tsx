import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface LayoutProps {
   children: React.ReactNode,
   title?: string
}

export default function Layout (props:LayoutProps) {
   const {children, title} = props

  return (
    <div>
      <Head>
         <title>{title}</title>
      </Head>
      <Navbar />
      <div className="h-full min-h-fit block justify-center py-8 px-6 bg-white w-4/5 m-auto mt-2 mb-2 rounded-lg text-[black]">{children}</div>
      <Footer/>
    </div>
  )
}
