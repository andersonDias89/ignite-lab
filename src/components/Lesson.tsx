export function Lesson() {
    return (
        <div className=" flex flex-col mt-4">
            <div className="my-2">
                <span className="text-sm font-light block mb-3">
                    Domingo • 20 de junho • 19h00
                </span>

                <div className="border border-gray-600 w-full rounded-md p-3 space-y-2 flex flex-col">
                    <header className=" flex justify-between font-light items-center">
                        <span>
                            Conteúdo liberado
                        </span>

                        <span className="py-1 px-2 rounded-sm border border-green1 block">
                            Ao vivo
                        </span>
                    </header>

                    <span>
                        Abertura do evento Ignite labs
                    </span>
                </div>
            </div>
        </div>
    )
}

