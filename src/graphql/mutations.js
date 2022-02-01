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
    username
    photo
    email
  }
}
`

export const UPLOAD_FILE = gql`
mutation uploadImages($file: Upload!){
  uploadFile(file: $file){
    url
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
mutation createPost($title: String!, $description: String!, $image: String!){
  addPost(
    title: $title,
    description: $description,
    image: $image
  ) {
    id
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