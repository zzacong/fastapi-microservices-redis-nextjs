export default function Sidebar() {
  return (
    <nav className="fixed inset-y-0 left-0 z-10 h-screen w-52 bg-slate-100 pt-20">
      <div className="sticky">
        <ul className="flex flex-col">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-lg font-medium text-blue-500 hover:bg-gray-200"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-lg font-medium text-blue-500 hover:bg-gray-200"
            >
              People
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
