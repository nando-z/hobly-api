import { createServer } from "http2";

import { app, port } from "@/index";

createServer(app).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

