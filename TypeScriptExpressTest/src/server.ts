import bunyan from "bunyan";
import myApplication from "./app";


const log = bunyan.createLogger({
  name: "error",
  serializers: bunyan.stdSerializers,
});

// const Logger = require('bunyan')
// const log = new Logger({name:'server'})

const PORT = process.env.PORT || 8000;

const server = myApplication();

server.listen(PORT, () => {
  log.info(`server started in port ${PORT}`);
});
