import { Test, TestingModule } from '@nestjs/testing';
import { CoffesResolver } from './coffes.resolver';

describe('CoffesResolver', () => {
  let resolver: CoffesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffesResolver],
    }).compile();

    resolver = module.get<CoffesResolver>(CoffesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
