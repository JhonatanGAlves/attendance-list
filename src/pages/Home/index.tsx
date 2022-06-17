import { Container } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  return (
    <Container>
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
      />
      <button>Adicionar</button>
    </Container>
  )
}