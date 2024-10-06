import { useUser } from "@/contexts/userContext";

export default function HeaderComponent() {
	const { user } = useUser();
	return (<div className="p-6 flex justify-between border-gray-50 border-2 border-solid">
		<div className="flex gap-3 justify-center items-center">
			<img src="bars.svg" className="h-6 w-6" />
			<img src="txai_logo_black.svg" />
		</div>
		<div className="flex justify-center items-center gap-8">
			<div className="flex items-center gap-2 justify-center">
				<img src="question.svg" className="w-6 h-6" />
				Suporte
			</div>
			<div className="flex items-center gap-2 justify-center">
				<img src="calendar.svg" className="w-6 h-6" />
				Acessar Calendário
			</div>
			<div className="flex items-center gap-2 justify-center">
				<img src="bell.svg" className="w-6 h-6" />
			</div>
			<div className="flex items-center gap-2 justify-center">
				<img src="user.svg" className="w-6 h-6" />
				{user?.name}
				<img src="chevron.svg" className="w-6 h-6" />

			</div>
		</div>
	</div>);
}
