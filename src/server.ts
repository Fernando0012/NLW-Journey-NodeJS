//console.log('Hello World')// instalar npx tsx para rodar em typescript e coloque o comando npx tsx para rodar a aplicação e npx tsx watch (nome do arquivo) para continuar olhando o arquivo/ Lembre de mudar no script do package.json para "dev": "tsx watch src/server.ts"

//IMPORTANDO O FASTIFY
import fastify from "fastify";
import cors from "@fastify/cors";
import {createTrip} from "./routes/create-trip";
import {confirmTrip} from "./routes/confirm-trip"
import { confirmParticipants } from "./routes/confirm-participant";
//IMPORTANDO O PRISMAxx
import { prisma } from "./lib/prisma";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { create } from "domain";
import { createActivity } from "./routes/create-activity";
import { getActivities } from "./routes/get-activities";
import { createLink } from "./routes/create-link";
import { getLinks } from "./routes/get-link";
import { getParticipants } from "./routes/get-partcipants";
import { createInvite } from "./routes/create-invite";
import { updateTrip } from "./routes/update-trip";
import { getTripDetails } from "./routes/get-trip-details";
import { getParticipant } from "./routes/get-participant";
import { errorHandler } from "./error-handler";
import { env } from "./env";

//CRIANDO A APLICAÇÃO
const app = fastify()

app.register(cors, {
    origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipants)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)
app.register(getParticipants)
app.register(createInvite)
app.register(updateTrip)
app.register(getTripDetails)
app.register(getParticipant)

// APLICAÇÃO ESCUTANDO UMA PORTA
app.listen({port: env.PORT}).then(() => {
    console.log('Server running!')
})