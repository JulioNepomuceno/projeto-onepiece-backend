import prismaClient from "../../prisma";

class DetalheUsuarioService{

    async execute(usuarioId: string){

        const usuario = await prismaClient.usuarios.findFirst({
            where:{
                id:usuarioId
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

export {DetalheUsuarioService}