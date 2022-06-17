import { useState } from "react"
import { Card } from "../../components/Card"
import { Container } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

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
        <header>
          <h1>Lista de Presença</h1>
          <div>
            <strong>Jhonatan</strong>
            <img src="https://github.com/JhonatanGAlves.png" alt="Foto do perfil" />
          </div>
        </header>
        <div className="add-new-student">
          <input
            type="text"
            value={studentName}
            onChange={event => setStudentName(event.target.value)}
            placeholder="Digite o nome..."
          />
          <FontAwesomeIcon
            icon={faAdd}
            onClick={handleAddStudent}
          />
        </div>

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