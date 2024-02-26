import { useEffect, useState } from 'react'
import Container from '../shared/Container'
import StudentCard from './StudentCard'
import { getFn, setFn } from '../../firebase/firebaseDb'
import { Link } from 'react-router-dom'

export default function Students() {
  const [data, setData] = useState([
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      dob: '2000-12-05T05:30:00.000Z',
      grade: 8,
      gender: 'Male',
    },
    {
      id: 2,
      firstname: 'Alice',
      lastname: 'Smith',
      dob: '1999-08-20T05:30:00.000Z',
      grade: 10,
      gender: 'Female',
    },
    {
      id: 3,
      firstname: 'Michael',
      lastname: 'Johnson',
      dob: '2002-05-10T05:30:00.000Z',
      grade: 7,
      gender: 'Male',
    },
    {
      id: 4,
      firstname: 'Emily',
      lastname: 'Brown',
      dob: '2003-02-18T05:30:00.000Z',
      grade: 9,
      gender: 'Female',
    },
  ])

  /* -- GET ALL USERS -- */
  useEffect(() => {
    getFn('/data/')
      .then((res: any) => {
        // console.log(res)
        // console.log(Object.values(res))
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
          data?.map((element, i) => <StudentCard key={i} {...element} />)
        )}
        {/* <StudentCard />
        <StudentCard />
        <StudentCard /> 
        <StudentCard /> */}

        <Link
          to='create'
          id='adduser'
          className='btn btn-outline btn-success btn-sm fixed left-[80%]'
        >
          Create user
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-5 w-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
            />
          </svg>
        </Link>
      </div>
    </Container>
  )
}
