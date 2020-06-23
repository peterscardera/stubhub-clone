import express from 'express'

const router = express.Router()

router.get('/api/users/currentuser', () => {

})
console.log(router,'roiter')
export { router as currentUserRouter}