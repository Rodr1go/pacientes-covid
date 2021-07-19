import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Paciente from 'App/Models/Paciente'

/**
 * Resourceful controller for interacting with patients
 */
export default class PacientesController {
  /**
   * Show a list of all patients.
   * GET patients
   */
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1);
    const limit = 5;
    const pacientes = await Database
      .from('pacientes')
      .paginate(page, limit);
      
    return response.send(pacientes);
  }
  
  /**
   * Create/save a new patient.
   * POST patients
   */
  public async store({ request, response }: HttpContextContract) {
    try {
      const dados = request.all() as Partial<Paciente>
      const paciente = await Paciente.create(dados)
      
      return response.status(201).send(paciente);
    } catch(error) {
      return response
        .status(400)
        .send({ message: 'Não foi possível cadastrar o paciente!' });
    }
  }
  
  /**
   * Update patient details.
   * PUT or PATCH patients/:id
   */
  public async update({ request, response, params: {id} }: HttpContextContract) {
    
    try {
      const paciente = await Paciente.findOrFail(id);
      const { nome, idade, teste } = request.all();
      paciente.merge({ nome, idade, teste });
      await paciente.save();
      
      return response.send(paciente);
    } catch(error) {
      return response
        .status(400)
        .send({ message: 'Não foi possível atualizar este paciente!' });
    }
  }
  
  /**
   * Delete a patient with id.
   * DELETE patients/:id
   */
  public async destroy({ response, params: {id} }: HttpContextContract) {
    
    try {
      const paciente = await Paciente.findOrFail(id);
      paciente.delete();
      
      return response.status(204);
    } catch(error) {
      return response
        .status(500)
        .send({message: 'Não foi possível deletar o paciente!'});
    }
  }
}
