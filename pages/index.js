import config from "../config.json"
import Header from "./components/header"
function HomePage(){
    const mensagem = "Bem vindo ao Alura Tube"
    const header = Header
    const fundoEstilo = { backgroundColor: "red" }
    return <div style = {fundoEstilo}>
        <Header></Header>
    </div>
}

export default HomePage