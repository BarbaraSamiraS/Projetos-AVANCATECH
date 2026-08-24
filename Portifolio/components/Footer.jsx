
export default function Footer(){
    return(
        <footer className="bg-blue-500 flex h-20 justify-between items-center">
            <div>
                <h1 className="px-4">Nome do Aluno</h1>
            </div>
            <div className="flex gap-5 px-4">
                <span className="border-dashed border-2 p-2 w-7 h-7 rounded-full"></span>
                <span className="border-dashed border-2 p-2 w-7 h-7 rounded-full"></span>
                <span className="border-dashed border-2 p-2 w-7 h-7 rounded-full"></span>
            </div>
        </footer>
    )
}
