export async function generateStaticParams({params}) {
    const posts = await fetch('http://localhost:4000/v1/student/pending-students/id').then((res) => res.json())
   
    return posts.map((post) => ({
      id: post.id,
    }))
  }