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
          <div className='form-control'>
            <input
              type='text'
              placeholder='Search'
              className='input input-sm input-bordered w-24 md:w-auto'
            />
          </div>
          <div className='dropdown dropdown-end'>
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
          </div>
        </div>
      </div>
    </div>
  )
}
