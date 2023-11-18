export function auth(req, res, next) {
    console.log(req.headers)

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).send("You are not authenticated!")
        return
    }

    const auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':')
    const user = auth[0]
    const pass = auth[1]

    if (user == 'admin' && pass == 'password') {
        next()
    } else {
        res.status(401).send("You are not authenticated!")
        return
    }

}