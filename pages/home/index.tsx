/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout"
import Image from "next/image"
import Images from "../../assets/images/img.jpg"
import Girl from "../../assets/images/girl.jpg"

export default function index() {
  return (
    <Layout title="Home">
      <div className="text-left mr-auto w-full mb-4">
         Welcome <span className="font-semibold">&nbsp; Home</span>
      </div>
      <div className="">
         <Image src={Images} alt="gambar" height={100} />
         <img src='../../assets/images/img.jpg' alt="gambar" />
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia reiciendis, voluptas ea nulla minus laborum similique fuga recusandae corrupti!</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia reiciendis, voluptas ea nulla minus laborum similique fuga recusandae corrupti!</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia reiciendis, voluptas ea nulla minus laborum similique fuga recusandae corrupti!</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia reiciendis, voluptas ea nulla minus laborum similique fuga recusandae corrupti!</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia reiciendis, voluptas ea nulla minus laborum similique fuga recusandae corrupti!</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia reiciendis, voluptas ea nulla minus laborum similique fuga recusandae corrupti!</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia reiciendis, voluptas ea nulla minus laborum similique fuga recusandae corrupti!</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia reiciendis, voluptas ea nulla minus laborum similique fuga recusandae corrupti!</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia reiciendis, voluptas ea nulla minus laborum similique fuga recusandae corrupti!</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores mollitia reiciendis, voluptas ea nulla minus laborum similique fuga recusandae corrupti!</p>

         <Image src={Girl} alt="" height={100} />
      </div>
   </Layout>
  )
}
