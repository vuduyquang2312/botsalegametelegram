const mongoose = require('mongoose');

// Định nghĩa Schema
const MailCheckSchema = new mongoose.Schema({
    checkedAt: { type: Date, default: Date.now }
});

// Tạo model từ schema
const MailCheckModel = mongoose.model('MailCheck', MailCheckSchema);

// Xuất model để sử dụng trong ứng dụng của bạn
module.exports = MailCheckModel;
