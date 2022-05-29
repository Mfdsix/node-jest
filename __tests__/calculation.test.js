const { averageExams, isStudentPassExam } = require("../calculation")

describe("Average Calculation Test", () => {
    test("Number Validation", () => {
        const values = ["a", 70, 100, 90]
        try {
            averageExams(values)
        } catch (e) {
            expect(e.name).toEqual("ValidationError")
            expect(e.message).toEqual("All Values Should Be Number")
        }
    })
    test("Number Range Validation", () => {
        const values = [-20, 150, 100, 90]
        try {
            averageExams(values)
        } catch (e) {
            expect(e.name).toEqual("ValidationError")
            expect(e.message).toEqual("All Values Should Be Between 0 and 100")
        }
    })
    test("Success Average", () => {
        const values = [50, 70, 100, 90]
        expect(averageExams(values)).toEqual(77.5)
    })
})