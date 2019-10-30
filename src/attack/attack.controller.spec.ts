import { Test, TestingModule } from '@nestjs/testing';
import { AttackController } from './attack.controller';

describe('Attack Controller', () => {
  let controller: AttackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttackController],
    }).compile();

    controller = module.get<AttackController>(AttackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
