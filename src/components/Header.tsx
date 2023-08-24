import Link from "next/link"

export const Header = () => {
  return (
    <header className="absolute border w-full py-4 px-40 bg-zinc-200">
      <nav className="flex justify-between items-center">
        <Link href='/'>Logo</Link>
        <ul className="flex items-center gap-8">
          <li><Link href='/'>Inicio</Link></li>
          <li><Link href='/privateroute'>Rota Privada</Link></li>
        </ul>
      </nav>
    </header>
  )
}
