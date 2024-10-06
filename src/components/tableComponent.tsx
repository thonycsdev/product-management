'use client'
import { Product } from "@/types/product";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";

type TableComponentProps = {
	products: Product[],
	onUpdateClick: (product: Product) => void;
	onDeleteClick: (id: number) => void;

}

interface Column {
	id: "createdAt" | "name" | "amount" | "price" | "unitPrice";
	label: string;
	minWidth?: number;
	align?: 'center' | 'right';
	format?: (value: number) => string;
}

const columns: readonly Column[] = [
	{ id: 'createdAt', label: 'Data de cadastro', minWidth: 100 },
	{ id: 'name', label: 'Nome', minWidth: 170 },
	{
		id: 'unitPrice',
		label: 'Valor unitário',
		minWidth: 170,
		align: 'center',
		format: (value: number) => value.toFixed(2),
	},
	{
		id: 'amount',
		label: 'Quantidade',
		minWidth: 170,
		align: 'center',
		format: (value: number) => value.toString(),
	},
	{
		id: 'price',
		label: 'Valor Total',
		minWidth: 170,
		align: 'center',
		format: (value: number) => value.toFixed(2),
	},
];


function createData(products: Product[]): Product[] {

	if (!products) return [];
	const data: Product[] = products.map(product => {
		const unit_price = product.price / product.amount;
		return { ...product, unitPrice: unit_price };
	});
	return data;
}

export default function TableComponent(props: TableComponentProps) {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const rows: Product[] = createData(props.products);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const checkTableCellType = (value: any, column: Column) => {

		if (new Date(value).getTime() && typeof value != "number") {
			return new Date(value).toLocaleDateString('pt-BR');
		} else if (column.format && typeof value === "number") {
			return column.format(value);
		}
		return value;

	}

	return (
		<Paper className="w-[98%]">
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
							<TableCell><br /></TableCell>
							<TableCell><br /></TableCell>
						</TableRow>

					</TableHead>
					<TableBody>
						{rows
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{checkTableCellType(value, column)}
												</TableCell>
											);
										})}
										<TableCell align="center" className="hover:cursor-pointer">
											<img src="gear.svg" className="w-6 h-6" />
										</TableCell>
										<TableCell align="center" className="hover:cursor-pointer">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6 fill-red-200 w-6 h-6">
												<path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
											</svg>
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper >
	);
}
