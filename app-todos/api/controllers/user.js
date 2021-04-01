const User = require('../models/User')


const createUser = (req, res, next) => {
    console.log('req.body content', req.body)
    //tạo object model
    const newUser = new User(req.body)
    console.log('new uswe', newUser);
    //lưu dữ liệu
    newUser.save()
        .then(user => {
            return res.status(201).json({ user })
        })
        .catch(err => next(err))
}

const getAllUser = (req, res, next) => {
    //promise
    User.find({})
        .then(users => {
            return res.status(200).json({ users })
        })
        .catch(err => next(err))
}

const getOneUser = async (req, res, next) => {

    console.log('lấy 1 user', req.params);
    const { userId } = req.params
    //dùng async/await
    const user = await User.findById(userId)
    console.log('user info', user);
    return res.status(200).json({ user })
}

const replaceUser = async (req, res, next) => {
    //replace thay thế thông tin của user để cập nhật bằng update
    const { userId } = req.params

    const newUser = req.body

    const result = await User.findByIdAndUpdate(userId, newUser)
    return res.status(200).json({ user: result })
}

const updateUser = async (req, res, next) => {
    //coppy nội dung trong replaceUser để update
    const { userId } = req.params

    const newUser = req.body

    const result = await User.findByIdAndUpdate(userId, newUser)
    return res.status(200).json({ user: result })
}

module.exports = {
    createUser,
    getAllUser,
    updateUser,
    // deleteOneUser,
    getOneUser,
    replaceUser
}
