import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  age: { type: Number },
  gender: { type: String },
  medicalHistory: { type: String },
  emergencyContact: { type: String }
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;
