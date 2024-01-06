import { Test, TestingModule } from '@nestjs/testing';
import { MagazineService } from './magazine.service';

describe('MagazineService', () => {
  let service: MagazineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MagazineService],
    }).compile();

    service = module.get<MagazineService>(MagazineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('testing getById method', () => {
    expect(typeof service.viewMagazine(1)).not.toBe(null);
  });
});
