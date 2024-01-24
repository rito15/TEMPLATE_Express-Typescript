import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

(async () => {

    const app = express();

    app.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.send("Ok")
        res.status(200);
    });

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());

    const port = Number(process.env.PORT || 4000);
    app.listen(port, () => {
        console.log(`Server running on port ${port} (\u001b[36mhttp://localhost:${port}\u001b[0m)`);
    });
})();