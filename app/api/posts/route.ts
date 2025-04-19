import { Post } from '../../interfaces/posts'

const posts: Post[] = [
  {
    id: 1,
    title: 'Next.js is awesome',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare, diam a ultrices laoreet, justo nisl sodales nisl, at porta massa dui id leo. Cras mauris metus, pulvinar non erat at, varius euismod erat.',
    date: new Date().toDateString(),
  },
  {
    id: 2,
    title: 'Deploying a Next.js app is fun',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare, diam a ultrices laoreet, justo nisl sodales nisl, at porta massa dui id leo. Cras mauris metus, pulvinar non erat at, varius euismod erat.',
    date: new Date().toDateString(),
  },
  {
    id: 3,
    title: 'Next.js is the best',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare, diam a ultrices laoreet, justo nisl sodales nisl, at porta massa dui id leo. Cras mauris metus, pulvinar non erat at, varius euismod erat.',
    date: new Date().toDateString(),
  },
]
 
export async function GET() {
  return Response.json(posts)
}