import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative z-20 bg-gray-900 px-4">
      <div className="flex items-center justify-between py-2">
        <Link href="/" passHref>
          <a className="rounded px-4 text-lg text-white">
            FastAPI Microservices
          </a>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <button className="rounded px-4 py-2 text-white hover:bg-gray-700">
            Sign out
          </button>
        </div>
      </div>
    </header>
  )
}
