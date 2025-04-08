import { Controller, Get } from '@nestjs/common';
import { PythonScriptService } from './python-script.service';

@Controller('harassment')
export class HarassmentController {
  constructor(private readonly pythonScriptService: PythonScriptService) {}

  @Get('ejecutar-script')
  async ejecutarScript(): Promise<string> {
    return this.pythonScriptService.ejecutarScript();
  }
}
