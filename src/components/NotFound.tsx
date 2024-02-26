import { Link } from 'react-router-dom'
import Container from './shared/Container'

export default function NotFound() {
  return (
    <Container>
      <section>
        <div className='mx-auto max-w-7xl items-center px-8 py-12 md:px-12 lg:px-16 lg:py-24'>
          <div className='max-auto w-full justify-center text-center lg:p-10'>
            <div className='mx-auto w-full justify-center'>
              <h1 className='mt-8 text-5xl font-medium tracking-tighter'>
                404 Not found
              </h1>
            </div>
            <div className='mx-auto mt-6 flex max-w-xl flex-col items-center justify-center gap-3 lg:flex-row'>
              <Link
                to='/'
                className='text-primary link-hover link inline-flex items-center justify-center text-sm font-semibold duration-200 focus:outline-none focus-visible:outline-gray-600'
              >
                Back to home →
              </Link>{' '}
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
