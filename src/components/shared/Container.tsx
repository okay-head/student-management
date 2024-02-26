type TChildren = {
  children: React.ReactNode
  classVars: string
}
export default function Container({ children, classVars = '' }: TChildren) {
  return (
    <div
      className={`container-custom mx-auto max-w-4xl px-4 pt-32 ${classVars}`}
    >
      {children}
    </div>
  )
}
