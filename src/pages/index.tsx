import { useUser } from "@/contexts/userContext";
import loginService, { SignInInfomation } from "@/services/loginService";
import { useState } from "react";

export default function Home() {
  const { setUser } = useUser();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);


  const handleSignIn = async () => {
    const payload: SignInInfomation = {
      username: cpf, password: password, rememberPassword: checkbox
    }
    const response = await loginService.signIn(payload);
    if (!response) {
      alert("User not found");
      return;
    }
    setUser(response);
    alert(`Welcome ${response.name}`)
    return;
  }

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(event.target.checked);
  }
  const handleCPF = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  }
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-txaiGreen600 h-full bg-center flex justify-center items-center flex-col gap-20">
        <img src="./txai_logo.svg" />
        <button onClick={handleSignIn} className="bg-txaiGreen500 w-[330px] h-[40px] rounded-sm">Entrar</button>
      </div>
      <div className="h-full bg-txaiNeutralBG flex justify-evenly items-center flex-col">
        <div className="w-3/5">
          <div className="font-bold text-2xl mb-5">
            Login
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="flex flex-col gap-3">
              <label>
                CPF
              </label>
              <input value={cpf} type="number" onChange={handleCPF} className=" rounded-sm w-full px-5" placeholder="Insira seu CPF, somente os numeros" />
            </div>
            <div className="flex flex-col gap-3">
              <label>
                Senha
              </label>
              <input value={password} onChange={handlePassword} type="password" className="rounded-sm w-full px-5" placeholder="Insira sua senha" />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1">
                <input type="checkbox" checked={checkbox} onChange={handleCheckbox} />
                <label>
                  Lembrar minha senha
                </label>
              </div>
              <div>
                <label className="text-txaiGreen500 hover:cursor-pointer">
                  Esqueci minha senha
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <label>
            Não tem uma conta?
          </label>
          <div className="text-txaiGreen500 hover:cursor-pointer">cadastre-se agora</div>
        </div>
      </div>
    </div>

  )
}
