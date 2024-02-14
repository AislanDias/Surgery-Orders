import { Controller, Get } from '@nestjs/common'
import { PrismaService } from '@/infra/prisma/prisma.service'

@Controller('/test-route')
export class TestController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async createQueries() {
    // CREATE PROCEDURES
    await this.prisma.procedures.createMany({
      data: [
        { name: 'Radiofrequência' },
        { name: 'Lipoaspiracao' },
        { name: 'Peeling ultrassônico' },
        { name: 'Microagulhamento' },
        { name: 'Lipo Cavitação' },
        { name: 'Drenagem Linfática' },
        { name: 'Criolipólise' },
        { name: 'Carboxiterapia' },
        { name: 'Preenchimento Facial' },
        { name: 'Toxina Botulínica' },
        { name: 'Tecarterapia' },
      ],
    })

    // CREATE HOSPITALS
    await this.prisma.hospital.createMany({
      data: [
        { name: 'Hospital de Amor' },
        { name: 'Hospital Israelita' },
        { name: 'Hospital do Einstein' },
        { name: 'Hospital de São Paulo' },
        { name: 'Hospital de Esperança' },
        { name: 'Hospital de Carinho' },
        { name: 'Hospital do Cuidado' },
        { name: 'Hospital do Idoso' },
      ],
    })

    // CREATE ROOMS
    await this.prisma.room.createMany({
      data: [
        { hospitalId: 1, name: 'Sala 001' },
        { hospitalId: 1, name: 'Sala 002' },
        { hospitalId: 2, name: 'Sala 001' },
        { hospitalId: 2, name: 'Sala 002' },
        { hospitalId: 2, name: 'Sala 003' },
        { hospitalId: 3, name: 'Sala 001' },
        { hospitalId: 3, name: 'Sala 002' },
        { hospitalId: 3, name: 'Sala 003' },
        { hospitalId: 4, name: 'Sala 001' },
        { hospitalId: 4, name: 'Sala 002' },
        { hospitalId: 4, name: 'Sala 003' },
        { hospitalId: 5, name: 'Sala 001' },
        { hospitalId: 5, name: 'Sala 002' },
        { hospitalId: 5, name: 'Sala 003' },
        { hospitalId: 6, name: 'Sala 001' },
        { hospitalId: 6, name: 'Sala 002' },
        { hospitalId: 6, name: 'Sala 003' },
        { hospitalId: 7, name: 'Sala 111' },
        { hospitalId: 8, name: 'Sala 333' },
      ],
    })
  }
}
