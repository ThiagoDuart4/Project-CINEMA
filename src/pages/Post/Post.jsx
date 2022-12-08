import React from "react";
import { Link } from "react-router-dom";
import  '../Post/post.css'
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Headers/Headers";
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from "../../services/Api";
import { useNavigate } from 'react-router-dom';




const validarInput  = yup.object({
  nome: yup.string().required("O Nome é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
  ano: yup.string().required("O Ano é obrigatório").max(4, "O Ano precisa ter menos de 4 caracteres"),
  sinopse: yup.string().required("O conteúdo é obrigatório").max(500, "O conteúdo precisa ter menosde 500 caracteres"),
  duração:yup.string().required("O conteúdo é obrigatório").max(10, "O conteúdo precisa ter menosde 10 caracteres"),
  gênero:yup.string().required("O conteúdo é obrigatório").max(30, "O conteúdo precisa ter menosde 30 caracteres"),
  direção:yup.string().required("O conteúdo é obrigatório").max(30, "O conteúdo precisa ter menosde 30 caracteres"),
  roteiro :yup.string().required("O conteúdo é obrigatório").max(30, "O conteúdo precisa ter menosde 30 caracteres"),
  elenco:yup.string().required("O conteúdo é obrigatório").max(50, "O conteúdo precisa ter menosde 50 caracteres"),
  image:yup.string().required("O conteúdo é obrigatório")
})


function NoPage() {

  let navigate = useNavigate()

const { register,handleSubmit, formState:{errors} } = useForm({
  resolver: yupResolver(validarInput)
})


const addPost =  inputValue =>api.post("https://test-api-fawn.vercel.app/filmes" ,inputValue)
.then(() => {
  console.log("Deu tudo certo")

})
.catch(() => {
  console.log("DEU ERRADO")
  navigate('/')
})



  return (
    <div>
      <Header></Header>
      <main>
          <div className="filmes-post">
           
            <div className="caixa-input">

              <form onSubmit={handleSubmit(addPost)} >
                <div className="input-post">
                    <label > Nome:</label>
                    <input type="text"  name ="nome"{...register('nome')} placeholder="Digite o nome do filme" />
                    <p className="error-css">{errors.nome?.message}</p>
                </div>
                <div className="input-post">
                    <label> Ano: </label>
                    <input type="text" name ="ano"{...register('ano')} placeholder="Digite o Ano do Filme" />
                    <p className="error-css">{errors.ano?.message}</p>
                </div>
                <div className="input-post">
                    <label> Duração: </label>
                    <input type="text" name ="duração"{...register('duração')} placeholder="Digite a duração"/>
                    <p className="error-css">{errors.duração?.message}</p>
                </div>
                <div className="input-post">
                    <label> Gênero :</label>
                    <input type="text" name ="gênero"{...register('gênero')}  placeholder="Digite o Genero"/>
                    <p className="error-css">{errors.gênero?.message}</p>
                </div>
                <div className="input-post">
                    <label> Direção: </label>
                    <input type="text" name ="direção"{...register('direção')}  placeholder="Digite a direção"/>
                    <p className="error-css">{errors.direção?.message}</p>
                </div>
                <div className="input-post">
                    <label> Roteiro: </label>
                    <input type="text" name ="roteiro"{...register('roteiro')} placeholder="Digite o(s) roteirista(s)" />
                    <p className="error-css">{errors.roteiro?.message}</p>
                </div>
                <div className="input-post">
                    <label> Elenco:</label>
                    <input type="text" name ="elenco"{...register('elenco')} placeholder="Digite o Elenco" />
                    <p className="error-css">{errors.elenco?.message}</p>
                </div>
                <div className="input-post">
                    <label> Image:</label>
                    <input type="text" name ="image"{...register('image')} placeholder="Digite a URL da imagem"/>
                    <p className="error-css">{errors.image?.message}</p>
                </div>
                <div className="input-post">
                    <label > Sinopse:</label>
                    <textarea type="text" name ="sinopse"{...register('sinopse')}  placeholder="Digite A sinopse"/>
                    <p className="error-css">{errors.sinopse?.message}</p>
                </div>

                <div className="btn-enviar">
                  <button>enviar</button>
                </div>
              </form>

            </div>
            
          </div>
          
      </main>
      
      <Footer></Footer>
    </div>

  );
  }
  export default NoPage;