type TChildren = {
  children: React.ReactNode
}
export default function Container({ children }: TChildren) {
  return (
    <div className='container-custom mx-auto max-w-4xl px-4 pt-32'>
      {children}
    </div>
  )
}
