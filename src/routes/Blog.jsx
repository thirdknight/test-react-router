import { useFetch } from "../hooks/useFetch"

const Blog = () => {
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')

  if(loading) {
    return <h2>Loading...</h2>
  }
  if(error !== '') {
    return <h2>{error}</h2>
  }

  return (
    <div>
      <h1>Blog</h1>
        {
         data.map(item => (
           <h4 key={item.id}>{item.id} - {item.title}</h4>
         )) 
        }      
    </div>
  )
}

export default Blog
