import Link from "next/link";

//nao dinamico, n exista tela de gestao
export default function BreadCrumbComponent() {
	return (
		<div className="flex p-10 gap-5">
			<div className="flex items-center gap-3 hover:cursor-pointer">
				<img src="home.svg" className="h-4 w-4 " />
				<Link href={"/"}>Home</Link>
			</div>
			<div>/</div>
			<Link href={"/"} className="hover:cursor-pointer">Gestão</Link>
			<div>/</div>
			<Link className="text-txaiGreen600 hover:cursor-pointer" href={"/product"}>Product</Link>
		</div>
	);
}
