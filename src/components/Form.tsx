import { SubmitHandler, useForm } from 'react-hook-form'

type MyFormData = {
  firstName: string
  lastName: string
  category: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyFormData>()
  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} placeholder="名前" />
      {errors.firstName && <span>名前は必須です。</span>}
      <input {...register('lastName', { required: true })} placeholder="苗字" />
      {errors.lastName && <span>苗字は必須です。</span>}
      <select {...register('category', { required: true })}>
        <option value="">選択してください</option>
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
      {errors.category && <span>カテゴリーは必須です。</span>}
      <input type="submit" />
    </form>
  )
}
