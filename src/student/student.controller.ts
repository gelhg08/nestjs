import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService: StudentService) {}
    @Get('all')
    obtainStudents () {
        return this.studentService.findAll();
    }

    @Post()
    createStudents(@Body() body) {
        return this.studentService.create(body)
    }

    @Put(':id') 
    async update(@Param('id') id: string, @Body() updateData: any) {
        const updateStudent = await this.studentService.update(id, updateData)
        return updateStudent
    }
        
}
