import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide job title"],
        minLength: [3, "Job title must have at least 3 characters!"],
        maxLength: [50, "Job title cannot exceed 50 characters!"],
    },
    description: {
        type: String,
        required: [true, "Please provide job description"],
        minLength: [50, "Job description must have at least 50 characters!"],
        maxLength: [350, "Job description cannot exceed 350 characters!"],
    },
    category: {
        type: String,
        required: [true, "Job category is required!"],
    },
    country: {
        type: String,
        required: [true, "Job country is required!"],
    },
    city: {
        type: String,
        required: [true, "Job city is required!"],
    },
    location: {
        type: String,
        required: [true, "Please provide exact location"],
        minLength: [50, "location must have at least 50 characters!"],
    },
    fixedSalary: {
        type: Number,
        minLength: [5, "fixed salary should be at least 4 digit"],
        maxLength: [9, "fixed salary should not exceed 9 digit"],
    },
    salaryFrom: {
        type: Number,
        minLength: [4, "Salary should be from 4 digit"],
        maxLength: [9, "Salary should not exceed 9 digit"],
    },
    salaryTo: {
        type: Number,
        minLength: [4, "Salary should be from 4 digit"],
        maxLength: [9, "Salary should not exceed 9 digit"],
    },
    expired: {
        type: Boolean,
        default: false,
    },
    jobPostedOn: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);