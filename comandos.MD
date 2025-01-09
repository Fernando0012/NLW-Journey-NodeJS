curl -X POST http://localhost:3333/trips
comando do prima (npx prisma migrate dev)
prisma studio (npx prisma studio)
comando do serve (npm run dev)

### Para teste de envio de email
instalar nodemailer
npm i nodemailer

'const account = await nodemailer.createTestAccount()'
esse comando cria uma caixa fictícia para testar o envio de email na aplicação

'const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email'
})'

O STMP.ETHEREAL.EMAIL e uma ferramenta que o nodemailer usa

SITE GRATUITO PARA COM OUTRO METODO DE TESTE DE ENVIO DE EMAIL 
mailtrap