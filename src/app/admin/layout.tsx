export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      <p>Painel de administração</p>
    </div>
  )
}
