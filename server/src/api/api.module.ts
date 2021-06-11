import { Module , HttpModule} from '@nestjs/common';
import { ApiController } from './api.controller';
import { ScheduleModule } from '@nestjs/schedule'
import { ApiService } from './api.service';

@Module({
  imports:[HttpModule,ScheduleModule.forRoot()],
  controllers: [ApiController],
  providers: [ApiService]
})
export class ApiModule {}
