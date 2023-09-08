import Image from 'next/image'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  return (
    <Layout title='Hello'>
      <div className='flex flex-row gap-6 items-center justify-center h-96'>
        <button className='bg-gray-400 h-fit py-2 px-6 rounded-lg text-sm font-medium text-[black]' type='button' onClick={() => router.push("/login")}>Login</button>
        <button className='bg-gray-400 h-fit py-2 px-6 rounded-lg text-sm font-medium text-[black]' type='button' onClick={() => router.push("/register")}>Register</button>
      </div>
    </Layout>
  )
}


// why next js ?
// 1. easy to setup project
// 2. file system routing
// 3. client side navigation
// 4. easy to deploy
// 5. seo friendly
// 6. pre rendering page
