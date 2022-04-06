import Head from 'next/head'

import { useState } from 'react'
import {
  Content,
  ProductsTable,
  Header,
  Sidebar,
  AddProduct,
  Modal,
} from '$components'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>FastAPI Microservices App</title>
      </Head>

      <Header />
      <Sidebar />

      <Content>
        <div className="pt-10">
          <button
            onClick={() => setIsOpen(p => !p)}
            className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-2 font-semibold text-white"
          >
            Add
          </button>
          <ProductsTable />
        </div>
      </Content>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AddProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}
