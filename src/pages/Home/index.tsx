import { Card } from "../../components/Card"
import { Container } from "./styles"

export const Home = () => {
  return (
    <Container>
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
      />
      <button>Adicionar</button>
      <hr />
      <Card name="Jhonatan Alves" time="22:52:19" />
      <Card name="Chaiene Thomaz" time="12:62:22" />
    </Container>
  )
}