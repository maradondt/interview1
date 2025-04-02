/* eslint-disable @typescript-eslint/no-unused-vars */

// Given a set of two-dimensional points, compute a bounding box area.

// Для заданного набора двумерных точек вычислите площадь ограничивающего прямоугольника.

type Points = Array<[number, number]>;
const getBoundingBoxArea = (points: Points) => {
  //
};

const points1: Points = [
  [-1, -3],
  [115, 10],
  [101, 101],
  [103, 42],
  [10, 131],
  [-49, -142],
  [-31, -133],
  [-27, -103],
];
const points2: Points = [
  [-152, 313],
  [15, 130],
  [24, 36],
  [244, 24],
  [24, 47],
  [46, 36],
  [26, 24],
  [57, 35],
  [15, 64],
  [74, 68],
  [37, 75],
  [48, 64],
  [59, 354],
  [15, 24],
  [-49, -242],
];

console.log(getBoundingBoxArea(points1)); // 44772
console.log(getBoundingBoxArea(points2)); // 236016
