import Link from "next/link";
export default function Nav(){
    return(
        <nav className="bg-blue-500 flex h-20 justify-between items-center">
            <div>
                <h1 className="px-4">LOGO / NOME</h1>
            </div>
            <div className="flex gap-10 px-4">
                <Link href="/" className="border-2 border-dashed p-2">Início</Link>
                <Link href="/projetos"className="border-2 border-dashed p-2">Projetos</Link>
                <Link href="/formulario" className="border-2 border-dashed p-2">New Project</Link>
            </div>
        </nav>
    )
}