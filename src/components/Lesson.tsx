import { BsCheckCircle } from 'react-icons/bs'
import { RiGitRepositoryPrivateLine } from 'react-icons/ri'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string
    slug?: string
    availableAt: Date
    type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
    const isLessonAvailable = isPast(availableAt)
    const availabledFormtted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    return (
        <div className=" flex flex-col mt-4">
            <div className="my-2">
                <span className="text-sm font-light block mb-3">
                    {availabledFormtted}
                </span>

                <div className="border border-gray-600 w-full rounded-md p-3 space-y-2 flex flex-col">
                    <header className=" flex justify-between font-light items-center">
                        {isLessonAvailable ? (
                            <span className="text-blue flex items-center space-x-2">

                                <BsCheckCircle /> <span>Conteúdo liberado</span>
                            </span>
                        ) : (
                            <span className="text-blue flex items-center space-x-2">

                                <span className='text-orange'><RiGitRepositoryPrivateLine /></span> <span className='text-orange'>Em breve</span>
                            </span>
                        )}

                        <span className="py-1 px-2 rounded-sm text-xs font-bold border border-green1 block">
                            {type === 'live' ? "Ao vivo" : "Aula prática"}
                        </span>
                    </header>

                    <span>
                        {title}
                    </span>
                </div>
            </div>
        </div>
    )
}

