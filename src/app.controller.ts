import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller('coders')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('textico')
  getAll(){
    return `this returns a text`
  }

  @Get(':id')
  getById(@Param() params){
    return `getting coder with id ${params.id}`
  }

  @Get('/id/:id')
  getByIdOnly(@Param('id') id: String){
    return `getting coder with id ${id}`
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  createCoder(@Body() body){
    return `creating coder with data ${(body)}`
  }

/*   @Post()
  createCoder(@Body('name') body){
    return `creating coder with data ${(body)}`
  } */

  @Patch(':id')
  updateCoder(@Param('id') id: String){
    return `updating coder with id ${id}`
  }

  @Delete(':id')
  DeleteCoder(@Param('id') id: String){
    return `Deleting coder with id ${id}`
  }

  @Get('/convert/:id')
  convertNumber(@Param('id') id: number){
    return this.appService.convert(id)
  }
}
