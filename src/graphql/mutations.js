import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  register(
    username: $username,
    email: $email
    password: $password
  ) {
    username
    email
    password
  }
}
`
export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  signIn(
    email: $email,
    password: $password) {
    token
    uid
  }
}
`

export const UPDATE_USER = gql`
    mutation {
    updateUser(
    username: "Json dev update"
    photo: "url/images"
  ) {
    username
    photo
  }
}
`

export const ADD_POST = gql`
mutation {
  addPost(
    title: "Node.js"
    description: "Node developer tools"
    image: "https://images"
  ) {
    title
    description
    image
  }
}
`

export const UPDATE_POST =gql`
mutation {
  updatePost(id: 9, title: "hola", description: "munco") {
    id
    description
    title
  }
}
`

export const DELETE_POST =gql`
mutation {
  deletePost(id: 2) {
  id
  }
}
`