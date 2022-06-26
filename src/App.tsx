import { useEffect } from "react"
import { client } from '../lib/apollo'
import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
query {
  lessons {
  id,
  title
}
}
`

interface Lessons {
  id: string
  title: string
}

function App() {
  // usando o hook useQuery para fazer a chamada na API em graphql para o Graphcms
  const { data } = useQuery(GET_LESSONS_QUERY)

  return (
    // criando o map de todas as lessons para renderizar o title da lesson
    <ul>
      {data?.lessons.map((lesson: Lessons) => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
