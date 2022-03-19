import { ConfigService } from '@nestjs/config';

export function logConfig(configService: ConfigService) {
  console.log('isDevelopment:', configService.get('isDevelopment'));
  console.log('isProduction:', configService.get('isProduction'));
  console.log('serverPort:', configService.get('serverPort'));
  // console.log('authSecret:', configService.get('authSecret'));
  // console.log(
  //   'userPasswordHashSalt:',
  //   configService.get('userPasswordHashSalt'),
  // );
  console.log('database.host:', configService.get('database.host'));
  // console.log('database.port:', configService.get('database.port'));
  console.log('database.username:', configService.get('database.username'));
  console.log('database.password:', configService.get('database.password'));
  console.log('database.name:', configService.get('database.name'));
  // console.log(
  //   'database.typeormLoggingMode:',
  //   configService.get('database.typeormLoggingMode'),
  // );
}
