const Book = require("../Model/Book")

exports.getBook = async (req, res) => {
    try {
        const data = await Book.find()
        return res.json({ errors: false, data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.postBook = async (req, res) => {
    try {
        const data = await Book.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.putBook = async (req, res) => {
    try {
        const data = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const data = await Book.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}