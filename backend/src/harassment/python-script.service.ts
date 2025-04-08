import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { join } from 'path';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class PythonScriptService {
  async ejecutarScript(): Promise<string> {
    const rutaScript = join(__dirname, '..', '..', 'scripts', 'codigo-python', 'codigos_base', 'cambiar-harassmentRisk.py');

    try {
      const { stdout, stderr } = await execAsync(`python "${rutaScript}"`);

      if (stderr) {
        console.error('Error al ejecutar el script:', stderr);
      }

      return stdout || 'Script ejecutado con éxito';
    } catch (error) {
      console.error('Error en ejecución:', error);
      throw new Error('Falló la ejecución del script');
    }
  }
}
