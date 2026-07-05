// link: https://www.codewars.com/kata/5701800886306a876a001031/train/typescript

export function lineupStudents(students: string): string[] {
  return students
    .split(' ')
    .sort((a, b) => {
      if (a.length !== b.length) {
        return b.length - a.length;
      }
      return b.localeCompare(a);
    });
}