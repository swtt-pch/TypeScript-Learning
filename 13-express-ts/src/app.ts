// 1 - project init
//console.log("Express + TS")

// 2- init express
import express, {NextFunction, Request, Response} from "express";
import { IProduct, IUser } from "./interfaces";

const app = express()

app.use(express.json())

// 11 - middleware for all routers
function showPath(req: Request, res: Response, next: NextFunction){
    console.log(req.path)
    next()
}

app.use(showPath)

app.get("/", (req, res) => {
    return res.send("Hello Express!");
})

// 3 - post router
app.post("/api/product", (req, res) => {
    console.log(req.body)

    return res.send("Product added!")
})

// 4 - all router
app.all("/api/product/check", (req, res)=> {
    if(req.method ===  "POST"){
        return res.send("Something has been inserted")
    } else if (req.method === "GET"){
        return res.send("Content Readed")
    } else {
        return res.send("Cannot complete this action...")
    }
})

// 5 - interface do express
app.get("/api/interfaces", (req: Request, res: Response)=> {
    return res.send("Interfaces!")
})

// 6 - Send Json
app.get("/api/json", (req: Request, res: Response) => {
    const product: IProduct = {
        name: "T-shirt",
        price: 30.00,
        color: "blue",
        size: ["P", "M", "G"]
    }
    return res.json(product)
})

// 7 - router parameters
app.get("/api/product/:id", (req:Request, res: Response)=> {
    const products: IProduct[] = [{name: "T-shirt", price: 30.00, color: "blue", size: ["P", "M", "G"]}, {name: "Shoes", price: 70.00, color: "red", size: ["M", "G"]}]
    console.log(req.params)
    const id = req.params.id

    if(parseInt(id) > products.length || parseInt(id) <= 0) {
        return res.send("Product not found...")
    } 

    return res.send(products[parseInt(id) - 1])
    
})

// 8 - complex routers 
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params)
    const {id, reviewId} = req.params

    return res.send(`Acessando a review ${reviewId} do produto ${id}`)
})

function getUser(req:Request, res: Response){
    console.log(`Resgatando o usuario com id: ${req.params.id}`)
    return res.send("O usuario foi encontrado")
}

// 9 - router handler
app.get("/api/user/:id", getUser)

// 10 - Middleware
function checkUser(req: Request, res: Response, next: NextFunction){
    if(req.params.id === '1'){
        console.log("Pode seguir")
        next()
    } else {
        console.log("Acesso restrito")
    }
}

app.get("/api/user/:id/access", checkUser ,(req: Request, res: Response) => {
    return res.json({msg: "Bem vindo à area administrativa"})
})

// 12 - req and res Generics
app.get("/api/user/:id/details/:name", (req: Request<IUser>, res: Response<{status: boolean}>) => {
    console.log(`ID: ${req.params.id}`)
    console.log(`Name: ${req.params.name}`)

    return res.json({status: true})
})

// 13 - errors
app.get("/api/error",  (req: Request, res: Response) => {
    try{
        throw new Error("Algo deu errado")
    } catch (e: any) {
        res.status(500).json({msg: e.message})
    }
})

app.listen(3000, () => {
    console.log("App TS + Express")
})