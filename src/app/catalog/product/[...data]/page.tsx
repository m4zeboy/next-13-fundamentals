interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Home({ params }: ProductProps) {
  const { data } = params
  const [id, size, color] = data
  return (
    <div>
      <h1 className="text-xl font-bold">Product {id}</h1>
      <p>size: {size}</p>
      <p>color: {color}</p>
    </div>
  )
}
