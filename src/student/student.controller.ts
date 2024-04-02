import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
