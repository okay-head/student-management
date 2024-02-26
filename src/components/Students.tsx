import { useEffect, useState } from 'react'
import Container from './shared/Container'
import StudentCard from './StudentCard'
import { getFn } from '../firebase/firebaseDb'

export default function Students() {
  const [data, setData] = useState<Users | null>(null)

  /* -- GET ALL USERS -- */
  useEffect(() => {
    getFn('/data/')
      .then((res: any) => {
        setData(Object.values(res))
      })
      .catch((err: any) => console.error(err))
  }, [])

  return (
    <Container>
      <h1 className='mb-8 border-b pb-3 text-4xl font-semibold'>
        All Students
      </h1>
      <div className='tasks-container relative grid grid-cols-2 gap-x-4 gap-y-8'>
        {!data ? (
          <h2>No data</h2>
        ) : (
          data?.map((element) => <StudentCard key={element.id} {...element} />)
        )}
      </div>
    </Container>
  )
}
