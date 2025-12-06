import mongoose, { Document } from "mongoose";
export interface StudentDetail extends Document {
    name: string;
    age: number;
    place: string;
}
export declare const Student: mongoose.Model<StudentDetail, {}, {}, {}, mongoose.Document<unknown, {}, StudentDetail, {}, {}> & StudentDetail & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=student.d.ts.map