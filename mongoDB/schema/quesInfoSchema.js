import mongoose from 'mongoose';

const quesInfoSchema = new mongoose.Schema({
  faculty: { type: String, required: true },
  department: { type: String, required: true },
  degree: { type: String, required: true },
  semester: { type: String, required: true },
  course: { type: String, required: true },
  session: { type: String, required: true },
  exam: { type: String, required: true },
  fileList: { type: Array, required: true, default: [] },
});

const QuesInfo = mongoose.models.QuesInfo || mongoose.model('QuesInfo', quesInfoSchema);

export default QuesInfo;
