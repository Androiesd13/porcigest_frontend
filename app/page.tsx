import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="max-w-4xl mx-auto py-4 flex items-center justify-between ">
        <div className="logo flex gap-2 items-center">
          <img src="" alt="" className="bg-primary w-10 h-10 rounded-full"/>
          <h3 className="text-2xl">Porcigest</h3>
        </div>
        <nav>
          <ul className="flex gap-4 items-center">
            <li className="uppercase"><a href="" className="hover:underline">About us</a></li>
            <li className="uppercase"><Link href="/login" className="hover:underline">Log in</Link></li>
            <li className="uppercase bg-secondary px-2 py-1 rounded font-medium hover:bg-secondary-dark"><Link href="/registro">Sing up</Link></li>
          </ul>
        </nav>
      </header>
      <main className="max-w-4xl m-auto mt-8">
        <h1 className="text-6xl mb-3">Bienvenido a Porcigest</h1>
        <p className="text-lg">El mejor sistema de gestion para unidades porcinas desarrollado en el <strong className="color-primary">C.A.S.A</strong></p>
      </main>
    </>
  );
}
