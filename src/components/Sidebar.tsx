import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";


const GET_LESSONS_QUERY = gql`
 query  {
  lessons(orderBy: availableAt_DESC, stage: PUBLISHED) {
    availableAt
    id
    lessonType
    slug
    title
  }
}

`

interface GetLessonsProps {
    lessons: {
        id: string
        lessonType: 'live' | 'class'
        availableAt: string
        slug: string
        title: string
    }[]
}

export function Sidebar() {
    const { data } = useQuery<GetLessonsProps>(GET_LESSONS_QUERY)
    console.log(data)

    return (
        <aside className="w-[380px] bg-element px-4">
            <span className="py-4 px-2 border-b border-gray-900 block">Cronograma das aulas</span>

            <div className="space-y-1">
                {data?.lessons.map(lesson => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                            slug={lesson.slug}
                        />
                    )
                })}

            </div>
        </aside>
    )
}