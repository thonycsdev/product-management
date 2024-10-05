import { Roles } from "@/types/roles";
import { User } from "@/types/user";
import fileToBase64 from "@/utils/fileToBase64";
import Link from "next/link";
import React, { useState } from "react";

export default function SignUp() {

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(true);
  const [role, setRole] = useState<Roles>(Roles.USER);
  const [file, setFile] = useState<string>("");


  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const filePath = event.target.files ? event.target.files[0] : undefined
    if (!filePath) return;
    const base64String = await fileToBase64(filePath);
    setFile(base64String);
  }

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  const handleCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  }
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleConfirmationPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === password && password.length > 2) setIsInvalid(false);
    else setIsInvalid(true);

  }

  //any pois o meu minha lsp esta tipando como funcao, nao como atributo
  const handleRole = (event: any) => {
    setRole(event.target.value as Roles);
  }

  const handleSubmit = () => {
    const payload: User = {
      role: role,
      name: name,
      password: password,
      cpf: cpf,
      email: email,
      photo: file
    }

    console.log(payload);
  }


  return <div className="bg-txaiNeutralBG h-screen flex justify-center items-center">
    <div className=" grid grid-cols-1 grid-rows-3 h-4/5 w-3/5">
      <div className="flex justify-start flex-col gap-5">
        <div>
          <img src="./txai_logo_black.svg" />
        </div>
        <div className="font-bold text-3xl">
          Faça seu cadastro
        </div>
        <div className="flex flex-col gap-3">
          <label>Adicione sua foto</label>
          <input onChange={handleFile} className="" id="default_size" type="file" />
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col gap-1">
            <label>
              *Nome completo
            </label>
            <input onChange={handleName} type="text" className="rounded-sm w-[329px] p-3" placeholder="Insira seu nome completo" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *CPF
            </label>
            <input type="number" onChange={handleCpf} className="rounded-sm w-[329px] p-3" placeholder="Insira seu CPF, somente os números" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *E-mail
            </label>
            <input type="email" onChange={handleEmail} className="rounded-sm w-[329px] p-3" placeholder="Insira seu melhor e-mail" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *Nome de usuário
            </label>
            <input type="text" onChange={handleUserName} className="rounded-sm w-[329px] p-3" placeholder="Escolha um nome de usuário" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *Senha
            </label>
            <input onChange={handlePassword} type="password" className=" rounded-sm w-[329px] p-3" placeholder="Crie sua senha" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *Confirmar senha
            </label>
            <input type="password" onChange={handleConfirmationPassword} className=" rounded-sm w-[329px] p-3" placeholder="Confirme sua senha criada" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *Cargo
            </label>
            <select onChange={handleRole} className="rounded-sm w-[329px] p-3" value={role}>
              <option value={Roles.ADMIN}>Administrador</option>
              <option value={Roles.USER}>Usuário</option>
            </select>

          </div>
        </div>
        <div className="flex w-full justify-end pt-5 gap-3">
          <Link href={"/"} className="flex items-center gap-2 hover:cursor-pointer">
            <img src="arrow.svg" className="h-4 w-4" />
            <p>
              Voltar ao login
            </p>
          </Link>
          <button disabled={isInvalid} onClick={handleSubmit} className="disabled:bg-gray-300 w-[143px] h-[40px] bg-txaiGreen600 text-white rounded-lg">
            Concluir cadastro
          </button>
        </div>
      </div>
    </div>
  </div>
}

