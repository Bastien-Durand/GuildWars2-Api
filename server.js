const app = require('express')()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})
