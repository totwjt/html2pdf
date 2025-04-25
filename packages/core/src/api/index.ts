import type { User, Post, Comment } from '../models'

const API_BASE_URL = 'https://api.example.com'

export const api = {
  async getUser(id: string): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/users/${id}`)
    return response.json()
  },

  async getPosts(): Promise<Post[]> {
    const response = await fetch(`${API_BASE_URL}/posts`)
    return response.json()
  },

  async getPost(id: string): Promise<Post> {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`)
    return response.json()
  },

  async getComments(postId: string): Promise<Comment[]> {
    const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`)
    return response.json()
  },

  async createPost(post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Promise<Post> {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    return response.json()
  }
}