import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Paciente from 'App/Models/Paciente'

export default class PacienteSeeder extends BaseSeeder {
  public async run () {
    await Paciente.createMany([
      {
        nome: 'John Doe',
        idade: 25,
        teste: 'Negativo'
      },
      {
        nome: 'Aline Carolina Pires',
        idade: 28,
        teste: 'Negativo'
      },
      {
        nome: 'Emanuelly Bruna',
        idade: 17,
        teste: 'Positivo'
      },
      {
        nome: 'Diego Manoel',
        idade: 18,
        teste: 'Positivo'
      },
      {
        nome: 'Heitor Henrico',
        idade: 22,
        teste: 'Positivo'
      },
      {
        nome: 'Milena Rafaela',
        idade: 23,
        teste: 'Negativo'
      }
    ]);
  }
}
