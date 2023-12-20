
// import json server using require method

const jsonserver=require('json-server')



// to create server using json server

const server=jsonserver.create()


const router=jsonserver.router("db.json")



// create middle ware

const middleware=jsonserver.defaults()

// create port for server

const PORT=process.env.PORT || 4000



// use middle ware in server

server.use(middleware)

server.use(router)

// to use port in server

server.listen(PORT,()=>{
    console.log("middle player server started at PORT"+PORT);
})