import BreadCrumbComponent from "@/components/breadCrumbComponent";
import HeaderComponent from "@/components/headerComponent";
import ModalComponent from "@/components/modalComponent";
import ProductModal from "@/components/modals/productModal";
import TableComponent from "@/components/tableComponent";
import productService from "@/services/productService";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    productService.getProducts().then(response => {
      setProducts(response);
    }).catch(error => console.error(error));
  }, [])
  return (
    <>
      <ModalComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProductModal type="create" onClose={() => setIsModalOpen(false)} />
      </ModalComponent>
      <div className="mx-5 flex flex-col w-screen h-screen gap-5">
        <HeaderComponent />
        <BreadCrumbComponent />
        <h2 className="m-2 border-b-4 rounded-sm border-b-txaiGreen500 w-fit p-2 font-bold">Controle de Estoque</h2>
        <button onClick={() => setIsModalOpen(true)} className="w-[202px] h-[40px] gap-3 text-nowrap bg-txaiGreen600 text-white flex justify-center items-center  rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 fill-white">
            <path d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Cadastrar Produto
        </button>
        <TableComponent products={products} onDeleteClick={(id) => console.log(id)} onUpdateClick={(p) => console.log(p)} />
      </div>
    </>
  )
}
