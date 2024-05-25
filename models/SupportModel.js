const mongoose = require('mongoose');

const SupportSchema = new mongoose.Schema({
    username: { type: String, required: true },
    supportButton: { type: String, required: true },
    issueText: { type: String, required: true },
    status: { 
        type: String, 
        required: true, 
        enum: ['đang chờ phản hồi', 'đã phản hồi'],
        default: 'đang chờ phản hồi'
    },
    createdAt: { type: Date, default: Date.now }
});

const SupportModel = mongoose.model('Support', SupportSchema);

module.exports = SupportModel;
