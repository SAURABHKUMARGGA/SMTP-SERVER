const SMTPServer = require("smtp-server").SMTPServer;
const options = {
    secure:true,
    
}
const server = new SMTPServer(options);



server.listen(465);