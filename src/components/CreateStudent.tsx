import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ErrorMsg from './shared/ErrorMsg'
import Container from './shared/Container'
import { useNavigate } from 'react-router-dom'
import { setFn } from '../firebase/firebaseDb'

export default function CreateStudent() {
  const navigate = useNavigate()
  const addUser = ({ firstname, lastname, dob, grade, gender }: User2) => {
    /* -- ADD USER -- */
    const insertId = Date.now()
    const payload: UserPayload = {
      id: Number(insertId),
      firstname,
      lastname,
      dob: dob.getTime(),
      grade,
      gender,
    }

    // --- Send to db ---
    setFn(`/data/${insertId}`, payload)
      .then(() => {
        alert('user created')
        console.log('successfully set?')
        navigate('/')
      })
      .catch((message) => {
        console.error(message)
      })
  }

  const formSchema = z.object({
    firstname: z
      .string()
      .trim()
      .min(1, 'firstname is required')
      .max(15, 'firstname too long'),
    lastname: z
      .string()
      .trim()
      .min(1, 'lastname is required')
      .max(15, 'lastname too long'),
    dob: z.date(),
    grade: z.number().int().min(0).max(10),
    gender: z.string().min(1, 'Please select your gender'),
  })

  //single source of truth
  type TForm = z.infer<typeof formSchema>

  //initialising react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // watch,
  } = useForm<TForm>({
    defaultValues: {
      firstname: '',
      lastname: '',
      dob: new Date(),
      grade: 0,
      gender: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmitHandler: SubmitHandler<TForm> = (data: any) => {
    addUser(data)
    console.log(data)
    reset() // reset the form
  }
  const onErrorHandler: SubmitErrorHandler<TForm> = (err) => console.error(err)

  return (
    <Container classVars={'mb-10'}>
      <form
        id='form'
        name='form'
        onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}
      >
        <div className='form-container relative mx-auto max-w-md rounded-md border border-[var(--fallback-bc,oklch(var(--bc)/0.2))] px-6 py-10 lg:px-8'>
          <h1 className='mb-8 block text-2xl font-bold'>Insert student data</h1>
          {/* -- firstname -- */}
          <div className='relative'>
            <label
              htmlFor='firstname'
              className='-mb-1 mt-3 block text-sm font-semibold'
            >
              Firstname
            </label>
            <input
              {...register('firstname')}
              className='input input-sm input-bordered mb-2 mt-2 w-full'
              type='text'
              name='firstname'
              id='firstname'
              placeholder=''
            />
            <ErrorMsg>{errors?.firstname?.message}</ErrorMsg>
          </div>
          {/* -- lastname -- */}
          <div className='relative'>
            <label
              htmlFor='lastname'
              className='-mb-1 mt-3 block text-sm font-semibold'
            >
              Lastname
            </label>

            <input
              {...register('lastname')}
              className='input input-sm input-bordered mb-2 mt-2 w-full'
              type='text'
              name='lastname'
              id='lastname'
              placeholder=''
            />
            <ErrorMsg>{errors?.lastname?.message}</ErrorMsg>
          </div>

          {/* -- dob -- */}
          <div className='relative'>
            <label
              htmlFor='dob'
              className='-mb-1 mt-3 block text-sm font-semibold'
            >
              DOB
            </label>

            <input
              {...register('dob', { valueAsDate: true })}
              className='input input-sm input-bordered mb-2 mt-2 w-full'
              type='date'
              name='dob'
              id='dob'
              placeholder='Enter dob'
            />
            <ErrorMsg>{errors?.dob?.message}</ErrorMsg>
          </div>

          {/* -- grade -- */}
          <div className='relative'>
            <label
              htmlFor='grade'
              className='-mb-1 mt-3 block text-sm font-semibold'
            >
              Grade(0-10)
            </label>

            <input
              {...register('grade', { valueAsNumber: true })}
              className='input input-sm input-bordered mb-2 mt-2 w-full'
              type='number'
              name='grade'
              id='grade'
              placeholder='Enter grade'
            />
            <ErrorMsg>{errors?.grade?.message}</ErrorMsg>
          </div>

          {/* gender checkboxes */}
          <div className='relative mb-4 mt-3 flex flex-col'>
            <div className='text-sm font-semibold'>Gender</div>
            <div>
              <div className='form-check mt-1'>
                <label htmlFor='Male'>
                  <input
                    {...register('gender', { required: true })}
                    type='radio'
                    name='gender'
                    value='Male'
                    className='form-check-input'
                    id='Male'
                  />{' '}
                  Male
                </label>
              </div>
              <div className='form-check'>
                <label htmlFor='Female'>
                  <input
                    {...register('gender', { required: true })}
                    type='radio'
                    name='gender'
                    value='Female'
                    className='form-check-input'
                    id='Female'
                  />{' '}
                  Female
                </label>
              </div>

              <ErrorMsg>{errors?.gender?.message}</ErrorMsg>
              {/* <div className='text-danger mt-3'>
                {errors.gender?.type === 'required' && 'Tell us your gender.'}
              </div> */}
            </div>
          </div>
          <div>
            <button
              form='form'
              id='submit'
              className='btn btn-wide mx-auto mb-2 mt-8  block'
            >
              <span className='text-container mx-auto max-w-max'>Insert</span>
            </button>
          </div>
        </div>
      </form>
    </Container>
  )
}
