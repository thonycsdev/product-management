import Link from "next/link";

export default function SignUp() {
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
          <input className="" id="default_size" type="file" />
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col gap-1">
            <label>
              *Nome completo
            </label>
            <input type="text" className=" rounded-sm w-[329px] p-3" placeholder="Insira seu nome completo" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *CPF
            </label>
            <input type="number" className=" rounded-sm w-[329px] p-3" placeholder="Insira seu CPF, somente os números" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *E-mail
            </label>
            <input type="email" className=" rounded-sm w-[329px] p-3" placeholder="Insira seu melhor e-mail" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *Nome de usuário
            </label>
            <input type="text" className=" rounded-sm w-[329px] p-3" placeholder="Escolha um nome de usuário" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *Senha
            </label>
            <input type="text" className=" rounded-sm w-[329px] p-3" placeholder="Crie sua senha" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *Confirmar senha
            </label>
            <input type="text" className=" rounded-sm w-[329px] p-3" placeholder="Confirme sua senha criada" />
          </div>
          <div className="flex flex-col gap-1">
            <label>
              *Cargo
            </label>
            <select className="rounded-sm w-[329px] p-3">
              <option value="ADMIN">Administrador</option>
              <option value="USER">Usuário</option>
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
          <button className="w-[143px] h-[40px] bg-txaiGreen600 text-white rounded-lg">
            Concluir cadastro
          </button>
        </div>
      </div>
    </div>
  </div>
}

