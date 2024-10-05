import { User } from "@/types/user";
import { createContext, Dispatch, ReactNode, useContext, useState } from "react";

type UserContextType = {
	user: User | undefined;
	setUser: Dispatch<React.SetStateAction<User | undefined>>;
}
const UserContext = createContext<UserContextType | undefined>(undefined);


export const useUser = () => {
	const context = useContext(UserContext);
	if (!context)
		throw new Error("Context not initialized");
	return context;
}


export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | undefined>(undefined);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}
