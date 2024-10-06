import { Product } from "@/types/product";
import { addDays } from "date-fns";
import { ChangeEvent, useEffect, useState } from "react";

export type ProductModalProps = {
	type: "create" | "update";
	product?: Product;
	onClose: () => void;
}

export default function ProductModal(props: ProductModalProps) {
	const title = checkTitle(props.type);
	const buttonText = checkButtonText(props.type);
	const [product, setProduct] = useState<Product>({} as Product);

	useEffect(() => {
		const productFromProps = checkProductState(props.product);
		setProduct(productFromProps);
	}, [])

	const handleName = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		if (value) setProduct({ ...product, name: value })
		return;
	}
	const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
		const date = event.target.valueAsDate;
		if (date) {
			const localDate = addDays(date, 1);
			setProduct({ ...product, createdAt: localDate });
		}


	}
	const handleQuantity = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.valueAsNumber;
		if (value) setProduct({ ...product, amount: value })
		return;


	}
	const handlePrice = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.valueAsNumber;
		if (value) setProduct({ ...product, price: value })
		return;
	}

	const handleSubmit = () => {
		console.log(product);
	}
	return (
		<div className="w-[500px] h-[500px]">
			<div className="grid grid-cols-1 auto-rows-auto h-full w-fit">
				<div className="flex pb-2 justify-between border-b-txaiGreen500 border-solid border-b-2 rounded-sm h-fit">
					<div className="text-xl">
						{title}
					</div>
					<svg onClick={props.onClose} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</div>
				<div className="flex flex-col justify-start gap-10 h-fit">
					<div className="flex flex-col w-full">
						<label>
							Data de cadastro:
						</label>
						<input onChange={handleDate} className="bg-transparent border-b-txaiGreen500 border-solid border-b-2 w-[317px] h-[32px]" type="date" value={formatProductDate(product.createdAt)} />
					</div>
					<div className="grid grid-cols-3 grid-rows-1 gap-5">
						<div className="flex flex-col col-span-2">
							<label>
								Nome do produto:
							</label>
							<input type="text" onChange={handleName} value={product.name} className="border-txaiGreen500 border-solid border-2 w-[317px] h-[32px] rounded-lg p-5" />
						</div>
						<div className="flex flex-col">
							<label>
								Quantidade:
							</label>
							<input type="number" onChange={handleQuantity} value={product.amount} className="border-txaiGreen500 border-solid border-2  h-[32px] rounded-lg p-5" />
						</div>
					</div>
					<div className="flex flex-col w-1/2">
						<label>
							Valor R$
						</label>
						<input type="number" onChange={handlePrice} value={product.price} className="decoration-transparent border-txaiGreen500 border-solid border-2 w-[317px] h-[32px] rounded-lg p-5" />
					</div>
				</div>
				<div className="w-full h-fit flex justify-end">
					<button onClick={props.onClose} className="px-5 py-1 rounded-sm">Cancelar</button>
					<button onClick={handleSubmit} className="bg-txaiGreen600 text-white font-bold px-5 py-1 rounded-sm">{buttonText}</button>
				</div>
			</div>
		</div>
	);
}


function checkProductState(product?: Product) {
	if (product) return product;
	const newProduct: Product = {
		price: 0,
		name: "",
		amount: 0,
	};
	return newProduct;
}

function checkButtonText(type: "create" | "update") {
	if (type === "create") return "Cadastrar";
	return "Atualizar";
}
function checkTitle(type: "create" | "update") {
	if (type === "create") return "Cadastrar novo produto";
	return "Gerenciar produto";
}


function formatProductDate(date: Date | undefined) {

	if (date) return formatDateToInputFormat(date);
	return formatDateToInputFormat(new Date());

}

function formatDateToInputFormat(date: Date) {

	const y = date.getFullYear();
	const m = String(date.getMonth() + 1).padStart(2, '0'); // `getMonth()` retorna o mês de 0 a 11
	const d = String(date.getDate()).padStart(2, '0');
	const fmt = `${y}-${m}-${d}`;
	return fmt;
}
