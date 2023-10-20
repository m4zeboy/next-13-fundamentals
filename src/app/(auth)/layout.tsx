export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1 className="text-xl font-bold">Logo do app</h1>
      {children}
    </div>
  )
}
