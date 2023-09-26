/**
 * Partials 
 * Based on REST API - PATCH functionality. 
 * Where you only specify the fields you want to update in an object.
 */

interface Assignment {
  readonly matricNo: string;
  readonly course: string;
  grade?: number;
  marked?: boolean;
}

const updateAssignment = (assignment: Assignment, dataToUpdate: Partial<Assignment> = {}): Assignment => {
  return { ...assignment, ...dataToUpdate };
}

let assignment: Assignment = updateAssignment({
  matricNo: "M2100607",
  course: "MAT111"
}, { grade: 90, marked: true }
);

// assignment["matricNo"] = "M2100908" // A student is now trying to steal somebody's mark 😂😂. This cannot be allowed.
console.log(assignment);

/**
 * `Required` and `Readonly` 
 * `Required` makes an object fields totally required. Even if set to optional initially.
 * `Readonly` makes an object to be immutable.
 */

let readonlyAssignment: Readonly<Assignment>;
let requiredAssignment: Required<Assignment>;

readonlyAssignment = {
  matricNo: "M2105667",
  course: "GST100",
  grade: 70
}

// readonlyAssignment["marked"] = true; // Cannot assign to 'marked' because it is a read-only property.

console.log(readonlyAssignment);

requiredAssignment = {
  matricNo: "M200015",
  course: "EMG211",
  // Both `grade` and `marked` has to be specified regardless of them being optional .
  grade: 90,
  marked: true
}

/**
 * Record 
 * Takes two arguments. 
 * The first is the key type and the second is the value type.
 */

type Grade = "A" | "B" | "C" | "D" | "F";
type Course = "MAT" | "ENG" | "PHY" | "CHM";
interface Result {
  [index: string]: Grade;
}
let resultSheet: Record<string, Result>;

resultSheet = {
  "codewitgabi": {
    "MAT": "B",
    "PHY": "A",
    "CHM": "A"
  },
  "studentAnother": {
    "MAT": "B",
    "PHY": "A",
    "CHM": "C"
  } 
};

console.log(resultSheet);

/**
 * Pick and Omit 
 * `Pick` picks keys from an object type to use for a new type. 
 * `Omit` removes keys from an object that won't be needed for the new type.
 */
type resultForMat = Pick<Assignment, "matricNo" | "grade">

let mickeyMatResult: resultForMat;

mickeyMatResult = {
  matricNo: "M2105667",
  grade: 85
};

console.log(mickeyMatResult);

mickeyMatResult = {
  matricNo: "M2105667",
  // grade: 85 would work
  // marked: true // won't work since it's nit specified in the type.
};

console.log(mickeyMatResult)


type storeMarkedAssignment = Omit<Assignment, "grade" | "matricNo">

let markedAssignment: storeMarkedAssignment;

markedAssignment = {
  course: "MAT",
  marked: true,
  // grade: "B" // Won't work
}

console.log(markedAssignment)


/**
 * Exclude and Extract 
 * They are similar to `Pick` and `Omit` just that they while the latters work with interfaces, the formers work with literal types. 
 * `Exclude` => `Omit`
 * `Extract` => `Pick`
 */

type goodGrades = Extract<Grade, "A" | "B" | "C">
type badGrades = Exclude<Grade, "A" | "B" | "C">

let gg: goodGrades;
let bg: badGrades;

gg = "A";
gg = "C";
// gg = "F"; // Not a valid good grade.

bg = "F";
bg = "D";
// bg = "A"; // Not a valid bad grade.


/**
 * NonNullable 
 * Works on literal types and removes values such as null or undefined.
 */

type allStudents = "Mike" | "Ziko" | "Jenny" | null | undefined;
type validStudents = NonNullable<allStudents>

let aS: allStudents;
aS = null;
aS = undefined;
aS = "Mike";

let vs: validStudents;
vs = "Ziko";
// vs = null; // can't assign to null


/**
 * Parameters 
 * Generates a type from a function's parameter.
 */

const logResult = (course: Course, grade: Grade): void => {
  console.log(course, grade);
}

logResult("MAT", "C")
logResult("PHY", "F")
// logResult("EMG", "Z")

type funcParams = Parameters<typeof logResult>

let funcArgs: funcParams;

funcArgs = ["CHM", "B"];
// funcArgs = ["EMG", "B"]; // Can't work.

logResult(...funcArgs);