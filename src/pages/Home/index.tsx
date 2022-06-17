import { useState } from "react"
import { Card } from "../../components/Card"
import { Container } from "./styles"

type Students = {
  name: string,
  time: string
}

export const Home = () => {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState<Students[]>([])

  const handleAddStudent = () => {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
    }

    setStudents(prevState => [...prevState, newStudent])
  }

  return (
    <Container>
      <>
        <h1>Lista de Presença</h1>
        <input
          type="text"
          value={studentName}
          onChange={event => setStudentName(event.target.value)}
          placeholder="Digite o nome..."
        />
        <button onClick={handleAddStudent}>Adicionar</button>
        <hr />

        {students.map(student => (
          <Card
            key={student.time}
            name={student.name}
            time={student.time}
          />
        ))}
      </>
    </Container>
  )
}