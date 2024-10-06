import BreadCrumbComponent from "@/components/breadCrumbComponent";
import HeaderComponent from "@/components/headerComponent";
import TableComponent from "@/components/tableComponent";

export default function Products() {
  return (
    <div className="mx-5 flex flex-col w-screen h-screen gap-5">
      <HeaderComponent />
      <BreadCrumbComponent />
      <h2 className="m-2 border-b-4 rounded-sm border-b-txaiGreen500 w-fit p-2 font-bold">Controle de Estoque</h2>
      <button className="w-[202px] h-[40px] text-nowrap bg-txaiGreen600 text-white flex justify-center items-center px-7 py-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 fill-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Cadastrar Produto
      </button>
      <TableComponent />
    </div>
  )
}
