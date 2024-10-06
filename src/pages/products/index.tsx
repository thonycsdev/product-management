import BreadCrumbComponent from "@/components/breadCrumbComponent";
import HeaderComponent from "@/components/headerComponent";
import ModalComponent from "@/components/modalComponent";
import ProductDeleteModal from "@/components/modals/productDeleteModal";
import ProductModal from "@/components/modals/productModal";
import TableComponent from "@/components/tableComponent";
import productService from "@/services/productService";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [modalType, setModalType] = useState<"create" | "update">("create");
  useEffect(() => {
    fetchData();
  }, [])


  function fetchData() {
    productService.getProducts().then(response => {
      setProducts(response);
    }).catch(error => console.error(error));
  }

  const handleUpdateClick = (product: Product) => {
    if (!product) return;
    setSelectedProduct(product);
    setModalType("update");
    setIsModalOpen(true);
  }

  const handleCadastrarClick = () => {
    setModalType("create");
    setIsModalOpen(true);
  }

  const handleTableRowDeleteClick = (id: number) => {
    setSelectedId(id);
    setIsModalDeleteOpen(true);
  }

  // B)
  const handleSuccess = () => {
    fetchData();
    setIsModalOpen(false);
    setIsModalDeleteOpen(false);
  }
  return (
    <>
      <ModalComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProductModal onSuccess={handleSuccess} type={modalType} onClose={() => setIsModalOpen(false)} product={selectedProduct} />
      </ModalComponent>
      <ModalComponent isOpen={isModalDeleteOpen} onClose={() => setIsModalDeleteOpen(false)}>
        <ProductDeleteModal onSuccess={handleSuccess} id={selectedId} onClose={() => setIsModalDeleteOpen(false)} />
      </ModalComponent>
      <div className="mx-5 flex flex-col w-screen h-screen gap-5 px-3">
        <HeaderComponent />
        <BreadCrumbComponent />
        <h2 className="m-2 border-b-4 rounded-sm border-b-txaiGreen500 w-fit p-2 font-bold">Controle de Estoque</h2>
        <button onClick={handleCadastrarClick} className="w-[202px] h-[40px] gap-3 text-nowrap bg-txaiGreen600 text-white flex justify-center items-center  rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 fill-white">
            <path d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Cadastrar Produto
        </button>
        <TableComponent products={products} onDeleteClick={handleTableRowDeleteClick} onUpdateClick={handleUpdateClick} />
      </div>
    </>
  )
}
