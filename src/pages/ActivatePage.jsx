import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function ActivatePage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const { activateUser } = useAuthContext();

	useEffect(() => {
		activateUser(searchParams.get("uid"), searchParams.get("token"));
	}, []);
	return (
		<div>
			<h1>Идет активация...</h1>
		</div>
	);
}

export default ActivatePage;