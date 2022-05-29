class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError"
    }
}

const averageExams = (valuesExam) => {
    const numberValidation = valuesExam.every(val => typeof val === "number")
    if (!numberValidation) throw new ValidationError("All Values Should Be Number")
    const valueValidation = valuesExam.every(val => val >= 0 && val <= 100)
    if (!valueValidation) throw new ValidationError("All Values Should Be Between 0 and 100")

    const sumValues = valuesExam.reduce((accumulator, val) => accumulator + val, 0)
    return (sumValues != 0 && valuesExam.length > 0) ? sumValues / valuesExam.length : 0
}

const isStudentPassExam = (valuesExam, name) => {
    const minValues = 75
    const average = averageExams(valuesExam)

    return average >= minValues
}

module.exports = {
    averageExams, isStudentPassExam, ValidationError
}