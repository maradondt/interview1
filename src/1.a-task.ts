/* eslint-disable @typescript-eslint/no-unused-vars */

// Given a set of two-dimensional points, compute a bounding box area.

// Для заданного набора двумерных точек вычислите площадь ограничивающего прямоугольника.

type Points = Array<[number, number]>;
const getBoundingBoxArea = (points: Points) => {
  //
};

const points: Points = [
  [1, 1],
  [2, 3],
  [5, 5],
];
const points2: Points = [
  [-10, -10],
  [23, 13],
  [22, 33],
  [2, 3],
  [50, 50],
];
console.log(getBoundingBoxArea(points)); //16
console.log(getBoundingBoxArea(points2)); //3600
