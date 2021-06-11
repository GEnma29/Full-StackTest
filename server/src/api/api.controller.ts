import { Controller, Get} from '@nestjs/common';
import { ApiService } from './api.service';
@Controller('api')
export class ApiController {
  constructor(
    private readonly appService: ApiService
  ) {}
  @Get()
  addData(){
    return this.appService.addData();
  }
}
