import { Container } from "./styles"

type CardProps = {
  name: string,
  time: string
}

export const Card = ({ name, time }: CardProps) => {
  return (
    <Container>
      <p>{name}</p>
      <small>{time}</small>
    </Container>
  )
}