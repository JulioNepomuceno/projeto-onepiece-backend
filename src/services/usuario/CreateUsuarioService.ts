import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UsuarioRequest {
    nome: string;
    email: string;
    senha: string;
}

class CreateUsuarioService {

    async execute({ nome, email, senha }: UsuarioRequest) {

        //verificar se enviou um email
        if (!email) {
            throw new Error("Email é obrigatório");
        }

        const usuarioAlreadyExists = await prismaClient.usuarios.findFirst({
            where: {
                email: email
            }
        })
        // verificando se email ja existe
        if (usuarioAlreadyExists) {
            throw new Error("Esse e-mail já está cadastrado");
        }

        const senhaHash = await hash(senha,8);

        //cadastro usuario
        const usuario = await prismaClient.usuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaHash
            },
            select:{
                id:true,
                nome:true,
                email:true
            }
        })


        return usuario;


    }
}

export { CreateUsuarioService }