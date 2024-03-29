const obj = {
  id: 1,
  firstname: 'John',
  lastname: 'Doe',
  dob: new Date(),
  grade: 8,
  gender: 'Male',
}
type User = typeof obj
type User2 = Omit<User, 'id'>

const obj2 = {
  id: 1,
  firstname: 'John',
  lastname: 'Doe',
  dob: number,
  grade: 8,
  gender: 'Male',
}

type UserPayload = typeof obj2
const users = [
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
]

type Users = typeof users
