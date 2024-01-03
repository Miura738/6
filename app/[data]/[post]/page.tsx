export default function Page({ params }: { params: { data: string,post: string } }) {
  return (
    <>
    <div>My Data: {params.data}</div>
    <div>My Post: {params.post}</div>
    </>
  )
}