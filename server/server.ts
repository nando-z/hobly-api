import { PORT, server } from ".";

server.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
