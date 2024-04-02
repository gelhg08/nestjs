import { Injectable, Body } from '@nestjs/common';
import { Student } from './student.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentService {

    constructor(@InjectModel(Student.name) private studentModel: Model<Student>,){}

    findAll() {
        return this.studentModel.find().exec()
    }

    async create(@Body() body): Promise<Student> {
    const studentData = {
        name: body.name,
        password: body.password,
    }
    const student = new this.studentModel(studentData);
    return await student.save()
    }
}
