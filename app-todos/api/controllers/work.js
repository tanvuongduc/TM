//import Work Model
const Work = require('../models/Work')

//các hàm xử lý cho Work (create, getAll, getOne, update)
const createWork = (req, res, next) => {
    console.log('req.body content', req.body)
    //tạo object model
    const newWork = new Work(req.body)
    console.log('new work', newWork);
    //lưu dữ liệu
    newWork.save()
        .then(work => {
            return res.status(201).json({ work })
        })
        .catch(err => next(err))
}

const getAll = (req, res, next) => {
    //promise
    Work.find({})
        .then(works => {
            return res.status(200).json({ works })
        })
        .catch(err => next(err))
}

const getOneWork = async (req, res, next) => {
    const { userId } = req.params

    //get user
    const user = await User.findById(userId).populate('works')
    console.log('get work', user.works);
    return res.status(200).json({ works: user.works })
}

const updateWork = async (req, res, next) => {

    const { workID } = req.params

    const newWork = req.body

    const result = await Work.findByIdAndUpdate(workID, newWork)
    return res.status(200).json({ work: result })
}

const deleteOneWork = async (req, res, next) => {
    console.log('Lấy 1 công việc cần xoá', req.params);
    const { workID } = req.params

    const work = await Work.deleteOne({ _id: workID })
    console.log('work info delete', work);
    return res.status(200).json({ work })
}

module.exports = {
    createWork,
    getAll,
    getOneWork,
    updateWork,
    deleteOneWork
}
