import { Box, Modal } from "@mui/material";
import { ReactNode } from "react";

export type ModalComponentProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const removeMUIStyles = {
	outline: 'none',
	border: 'none',
	p: 2,
};
export default function ModalComponent({ children, onClose, isOpen }: ModalComponentProps) {
	return (
		<Modal
			open={isOpen}
			onClose={onClose}
			className="flex justify-center items-center"
		>
			<Box sx={removeMUIStyles} className="bg-txaiNeutralBG h-fit w-fit absolute">
				{children}
			</Box>
		</Modal>
	)
}
