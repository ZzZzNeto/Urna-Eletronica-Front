import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Urna Eletronica</h1>
      <div className='buttons'>
        <Link className='button' href="/report/">Gerar Relatorio</Link>
        <Link className='button' href="/votar/">Votar</Link>
      </div>
    </main>
  )
}
