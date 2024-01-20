import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';


interface AuthRequest {
    email: string;
    senha: string;
}
class AuthUsuarioService {

    async execute({ email, senha }: AuthRequest) {

        //Verificar se o email existe
        const usuario = await prismaClient.usuarios.findFirst({
            where: {
                email: email
            }
        })
        console
        if (!usuario) {
            throw new Error("Email ou Senha incorreto");
        }

        // verificar se a senha que ele mandou esta correta
        const senhaMatch = await compare(senha, usuario.senha);
       
        if (!senhaMatch) {
            throw new Error("Email ou Senha incorreto");
        }

        //gerando um token JWT e devolver os dados do usuario
        const token = sign(
            {
              nome: usuario.nome,
              email: usuario.email,
            },
            process.env.JWT_SECRET, 
            {
            subject: usuario.id,
            expiresIn: '30d'
            }
        )

        return {
            id: usuario.id,
            nome: usuario.nome,
            email:usuario.email,
            token:token
        }

    }
}

export { AuthUsuarioService };