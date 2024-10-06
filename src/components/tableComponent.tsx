'use client'
import { Product } from "@/types/product";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState } from "react";

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


function createData(product: Product): Product {
	const unit_price = product.price / product.amount;
	return { ...product, unitPrice: unit_price };
}

const rows = [
	createData({
		id: 1,
		price: 19.99,
		name: "Trakinas",
		amount: 10,
		createdAt: new Date(),
		updatedAt: new Date(),
	}),
	createData({
		id: 2,
		price: 19.99,
		name: "Trakinas",
		amount: 10,
		createdAt: new Date(),
		updatedAt: new Date(),
	}),
	createData({
		id: 3,
		price: 19.99,
		name: "Trakinas",
		amount: 10,
		createdAt: new Date(),
		updatedAt: new Date(),
	}),
	createData({
		id: 4,
		price: 19.99,
		name: "Trakinas",
		amount: 10,
		createdAt: new Date(),
		updatedAt: new Date(),
	}),
];
export default function TableComponent() {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const checkTableCellType = (value: any, column: Column) => {

		if (typeof value === typeof new Date()) {
			return new Date(value).toLocaleDateString('pt-BR');
		} else if (column.format && typeof value === "number") {
			return column.format(value);
		}
		return value;

	}

	return (
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
		</Paper>
	);
}
