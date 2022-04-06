import type { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <div className="pl-52">
      <main className="px-6">{children}</main>
    </div>
  )
}
