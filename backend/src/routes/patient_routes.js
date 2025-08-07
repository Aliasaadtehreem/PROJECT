// routes/patient_routes.js
import express from 'express';
import {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient
} from '../controller/patient_controller.js';

const router = express.Router();

router.post('/', createPatient); // Create patient
router.get('/', getAllPatients); // Get all patients
router.get('/:id', getPatientById); // Get single patient
router.put('/:id', updatePatient); // Update patient
router.delete('/:id', deletePatient); // Delete patient

export default router;
