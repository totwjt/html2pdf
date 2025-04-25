export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Post {
  id: string
  title: string
  content: string
  author: User
  createdAt: Date
  updatedAt: Date
}

export interface Comment {
  id: string
  content: string
  author: User
  postId: string
  createdAt: Date
}