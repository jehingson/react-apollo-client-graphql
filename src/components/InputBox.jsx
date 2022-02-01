import React from 'react';
import styled from 'styled-components';
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { Notify } from './Notify';
import { useFormAddPost } from '../hooks/useFormAddPost';



const initialForm = {
  title: '',
  description: '',
  image: ''
}

const validationsForm = (form) => {
  let errors = {};

  if (!form.title.trim()) {
    errors.title = "El titulo es requerido"
  }
  if (!form.title.trim() > 50) {
    errors.title = "Titulo debe ser menor a 50 caracteres"
  }

  if (!form.description.trim()) {
    errors.description = "La descripción es requerida"
  }
  if (!form.description.trim() > 240) {
    errors.description = "Descripción debe ser menor de 240 caracteres"
  }

  return errors
}



function InputBox() {
  const {
    form,
    handleChange,
    handleBlur,
    handleSubmit,
    errorsMessage,
    completeMessage,
    errors,
    loading,
  } = useFormAddPost(initialForm, validationsForm)

  return <InputBoxContainer>
    <div className="top-box">
      <Notify errorsMessage={errorsMessage} completeMessage={completeMessage} />
      <img src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdCUyMGJveHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" a alt="" />
    
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe el titulo de tu publicación"
          type="text"
          name="title"
          required
          value={form.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
          {errors.title && <p className="error input">{errors.title}</p>}
        <textarea
          placeholder="Escribe la description de tu publicacion"
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {errors.description && <p className="error text">{errors.description}</p>}
        <button type="submit">Publicar</button>
      </form>
    </div>
    <div className="box-footer">
      <div className="inputIcon">
        <CameraIcon className="photo" />
        <p>Fotos</p>
      </div>
      <div className="inputIcon">
        <VideoCameraIcon className="video" />
        <p>Video en directo</p>
      </div>
      <div className="inputIcon">
        <EmojiHappyIcon className="active" />
        <p>Sentimientos/actividad</p>
      </div>
    </div>
    <div className="image-create">
      <p className="remove">Remove</p>
      <img className="h-10 object-contain" src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdCUyMGJveHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />

    </div>

  </InputBoxContainer>;
}

export default InputBox;

const InputBoxContainer = styled.div`
  background: #0B1924;
  border-radius: .25rem;
  position: relative;
  color: #fff;
  margin-top: 20px;
  padding: 0px 15px 5px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  Z-index: -10;
  .top-box{
    display: flex;
    padding: 20px 0;
    align-items: start;
    width: 85%;
    margin:  0 auto;
    border-bottom: 1px solid #172B3A;
    position: relative;
    >img{
      width: 70px;   
      height:70px;
      object-fit: fit;
      border-radius: 50%;
      margin-top: -5px;
      margin-left: -10px;
    }
   
    >form{
      box-sizing: border-box;
      margin-left: 20px;
      width: 70%;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      
      Z-index: -1;
      >input, >textarea{
        padding: 15px 20px;
        border: 1px solid #172B3A;
        font-size: 16px;
        font-weight: 700;
        margin-left: 20px;
        outline: 0;
        width: 100%;
        border-radius: 5px;
        background: #0F202D;
        color: #8B959C;
        z-index:1;
      }
      >textarea{
        margin-top: 20px;
        font-size: 18px;
      }
      >button{
        border: none;
        margin-top: 15px;
        font-size: 17px;
        padding: 5px 15px;
        border-radius: 5px;
        margin-right: -90%;
        background: #2B93D2;
        color: #ebeced;
        font-weight: 700;
        cursor: pointer;
        &:hover{
          opacity: .8;
        }
      }
      .error{
        margin-top: 55px;
        position: absolute;
        font-weight: 400;
        color: rgb(214, 66, 146);
        font-size: 14px;
        &.input{
          left: 0;
          top: -5px;

        }
        &.text{
          bottom: 23px;
          left: 0;

        }
      }
     
    }
  }
  .box-footer{
    width: 80%;
    margin: auto;
    align-items: center;
    display: flex;
    >div{
      display: flex;
      width: 100%;;
      align-items: center;
     .video, .photo, .active{
       width: 35px;
       color: #8b959c;
       padding: 5px;
       border-radius: 5px;
     } 
     .photo{
       color: #20AE73;
       cursor: pointer;
       &:hover{
         opacity: .8;
         background: #172B3A;
         transition: all ease in .3;
       }
     }
     p{
       font-size:13px;
       color: #8b959c;
       @media (max-width: 480px){
        display: none;
       }
     }

    }
  }
  .image-create{
    width:100%;
    height: 300px;
    overflow: hidden;
    padding: 5px;
    >img{
      margin-top: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .remove{
        font-size: 14px;
        padding: 5px 15px;
        border-radius: 5px;
        background: #d64292;;
        width: 50px;
        color: #ebeced;
        font-weight: 600;
        cursor: pointer;
        &:hover{
          opacity: .8;
        }
    }

  }


`
