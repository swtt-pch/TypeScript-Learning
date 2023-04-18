const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const env = process.env.ENV
export default {
    port: 3000,
    dbUri: 
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.qc545ze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    env: env
}