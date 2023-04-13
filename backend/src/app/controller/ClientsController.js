class ClientsControler {

    getClients(req, res) {
        res.send('Olá, mundo<Get>!');
    }

    addClient(req, res) {
        res.send('Olá, mundo<Post>!');
    }

    updateClient(req, res) {
        res.send('Olá, mundo<Put>!');
    }

    deleteClient(req, res) {
        res.send('Olá, mundo<Delete>!');
    }
}

module.exports = new ClientsControler();