import { useEffect, useState } from 'react'
import Container from '../shared/Container'
import StudentCard from './StudentCard'
import { getFn, setFn } from '../../firebase/firebaseDb'
import { Link } from 'react-router-dom'

export default function Students() {
  const [data, setData] = useState<Users | null>(null)

  /* -- GET ALL USERS -- */
  useEffect(() => {
    getFn('/data/')
      .then((res: any) => {
        // console.log(res)
        setData(Object.values(res))
      })
      .catch((err: any) => console.error(err))
  }, [])

  return (
    <Container>
      <h1 className='mb-10 text-4xl font-semibold underline'>Students</h1>
      <div className='tasks-container relative grid grid-cols-2 gap-x-4 gap-y-8'>
        {!data ? (
          <h2>No data</h2>
        ) : (
          data?.map((element) => <StudentCard key={element.id} {...element} />)
        )}
        {/* <StudentCard />
        <StudentCard />
        <StudentCard /> 
        <StudentCard /> */}
      </div>
    </Container>
  )
}
