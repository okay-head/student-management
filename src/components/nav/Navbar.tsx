import { Link } from 'react-router-dom'

export default function Navbar() {
  const isSignedIn = false
  return (
    <div>
      <div className='navbar fixed z-10 bg-base-100 shadow lg:px-8'>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost text-xl'>
            Students
          </Link>
        </div>
        <div className='flex-none gap-2'>
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

          {/* <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input input-sm input-bordered w-24 md:w-auto'
            />
          </div> */}
          {/* <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='avatar btn btn-circle btn-ghost'
            >
              <div className='w-9 rounded-full'>
                <img alt='Avatar' src='/user.webp' />
              </div>
            </div>
            {isSignedIn ? (
              <ul
                tabIndex={0}
                className='menu dropdown-content menu-sm z-[1] mt-3 w-48 rounded-box border border-[var(--fallback-bc,oklch(var(--bc)/0.2))] bg-base-100 shadow lg:px-2 lg:py-4'
              >
                <li>
                  <Link to='user/tasks' className='justify-between'>
                    My tasks
                  </Link>
                </li>
                <li>
                  <Link to='user/logout'>Logout</Link>
                </li>
              </ul>
            ) : (
              <ul
                tabIndex={0}
                className='menu dropdown-content menu-sm z-[1] mt-3 w-48 rounded-box border border-[var(--fallback-bc,oklch(var(--bc)/0.2))] bg-base-100 shadow lg:px-2 lg:py-4'
              >
                <li>
                  <Link to='auth/signin' className='justify-between'>
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div> */}
        </div>
      </div>
    </div>
  )
}
