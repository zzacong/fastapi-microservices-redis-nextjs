import type { SubmitHandler } from 'react-hook-form'
import { useCallback, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import clsx from 'clsx'

interface AddProductProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddProduct({ isOpen, onClose }: AddProductProps) {
  const { handleSubmit, register, setFocus, formState } = useForm<FormValues>()
  const { errors } = formState

  const onSubmit: SubmitHandler<FormValues> = useCallback(async data => {
    console.log(data)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setFocus('name')
    }
  }, [isOpen, setFocus])

  return (
    <motion.div
      animate={{ opacity: [0, 1], transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="relative mx-auto max-w-4xl rounded-lg bg-white px-6 py-10 shadow"
    >
      <Dialog.Title className="mb-10 font-mono text-3xl tracking-tight text-gray-700">
        Add new product
      </Dialog.Title>

      <button
        onClick={onClose}
        className="absolute top-5 right-6 grid place-items-center rounded-full p-2 hover:bg-gray-100"
      >
        <XIcon className="h-6 w-6 text-gray-400" />
      </button>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between"
      >
        <div className="flex flex-col space-y-6">
          <div className="">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Name"
              className={clsx(
                'w-full rounded-md border-gray-400 px-4 placeholder-gray-400 focus:shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                errors.name && 'border-2 border-red-500'
              )}
            />
          </div>
          <div className="">
            <label htmlFor="price" className="sr-only">
              Price
            </label>
            <input
              {...register('price', { required: true, valueAsNumber: true })}
              type="number"
              placeholder="Price"
              className={clsx(
                'w-full rounded-md border-gray-400 px-4 placeholder-gray-400 focus:shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                errors.price && 'border-2 border-red-500'
              )}
            />
          </div>
          <div className="">
            <label htmlFor="quantity" className="sr-only">
              Quantity
            </label>
            <input
              {...register('quantity', { required: true, valueAsNumber: true })}
              type="number"
              placeholder="Quantity"
              className={clsx(
                'w-full rounded-md border-gray-400 px-4 placeholder-gray-400 focus:shadow-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
                errors.quantity && 'border-2 border-red-500'
              )}
            />
          </div>
        </div>

        <div className="pt-10">
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-pink-400 py-2 px-4 font-mono text-xl font-medium text-white"
          >
            Create
          </button>
        </div>
      </form>
    </motion.div>
  )
}

type FormValues = {
  name: string
  price: number
  quantity: number
}
