import { useState, useEffect } from "react"
import { Card } from "../../components/Card"
import { Container } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

type Students = {
  name: string,
  time: string
}

export const Home = () => {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState<Students[]>([])
  const [user, setUser] = useState({ name: '', avatar: '' })

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.github.com/users/JhonatanGAlves")
      const data = await response.data

      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fetchData().catch(error => console.error(error))
  }, [])

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
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="Foto do perfil" />
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