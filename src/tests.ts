// /*
//     The task is to remove from the object tree all nodes
//     where the Alive property is false. However, if a node
//     has an Alive property that is true, all of its parents
//     and children should remain in the tree.

//     Extra:
//     Perform the task using recursive and iterative algorithms,
//     explain in which cases each one should be used, as well as
//     the advantages and disadvantages of each approach.
// */
// /** Base node item class */
// // import { nodeCleaner } from "./4_test_nodesCleaner";

// export class NodeItemWithUtils {
//   constructor(
//     public id: number,
//     public alive: boolean,
//     public children: NodeItemWithUtils[],
//     public parent?: NodeItemWithUtils
//   ) {}

//   AliveToString() {
//     return this.alive ? "T" : "F";
//   }

//   T() {
//     return this.CreateChild(this, true);
//   }

//   F() {
//     return this.CreateChild(this, false);
//   }

//   private CreateChild = (parent: NodeItemWithUtils, alive: boolean) => {
//     var child = new NodeItemWithUtils(
//       (parent.children.length > 0
//         ? parent.children[parent.children.length - 1].id
//         : parent.id * 10) + 1,
//       alive,
//       [],
//       parent
//     );
//     parent.children.push(child);
//     return child;
//   };
// }

// /** HELPERS */
// const getPadding = (count: number) => {
//   const array: string[] = [];
//   for (let i = 0; i <= count - 1; i++) {
//     array[i] = "-";
//   }
//   return array.join("");
// };

// const stringifyNode = (node: NodeItemWithUtils, level = 0): string => {
//   return (
//     `${getPadding(level)}${node.AliveToString()}${node.id}` +
//     "\n" +
//     (node.children.length > 0
//       ? node.children.map((child) => stringifyNode(child, level + 1)).join("")
//       : "")
//   );
// };

// /** TESTS */
// const runTests = () => {
//   const formatExpected = (str: string) =>
//     str
//       .split("\n")
//       .filter((x) => x.length !== 0)
//       .map((x) => x.trim())
//       .join("\n");

//   /** TEST 1 */
//   (() => {
//     const root = new NodeItemWithUtils(1, true, []);
//     const l11 = root.F();
//     const l12 = root.T();
//     l11.F().T();
//     l12.F().T();
//     root.T().F();
//     root.F().T();

//     nodeCleaner(root);

//     const treeAsString = stringifyNode(root).trim();

//     const expectedTree = `
//     T1
//     -F11
//     --F111
//     ---T1111
//     -T12
//     --F121
//     ---T1211
//     -T13
//     --F131
//     -F14
//     --T141`;

//     console.log(
//       "4_test_nodesCleaner.ts Test 1: ",
//       treeAsString === formatExpected(expectedTree)
//     );
//   })();

//   /** TEST 2 */
//   (() => {
//     // var root = new Node(1, null, true, new List<Node>());
//     const root = new NodeItemWithUtils(1, false, []);
//     root.F().F().F();
//     root.F().T().F();

//     nodeCleaner(root);

//     const treeAsString = stringifyNode(root).trim();

//     const expectedTree = `
//     F1
//     -F12
//     --T121
//     ---F1211`;
//     console.log(
//       "4_test_nodesCleaner.ts Test 2: ",
//       treeAsString === formatExpected(expectedTree)
//     );
//   })();

//   /** TEST 3 */
//   (() => {
//     // var root = new Node(1, null, true, new List<Node>());
//     const root = new NodeItemWithUtils(1, false, []);
//     root.F().F().T();
//     root.F().T().T();
//     root.T().T().T();
//     root.F().T().T();
//     root.F().F().T();
//     root.F().F().F();
//     var l11 = root.F();
//     l11.F();
//     l11.T();
//     l11.F().F();
//     l11.F().T();
//     l11.T().F();
//     l11.T().T();

//     var l12 = root.T();
//     l12.F();
//     l12.T();
//     l12.F().F();
//     l12.F().T();
//     l12.T().F();
//     l12.T().T();

//     nodeCleaner(root);

//     const treeAsString = stringifyNode(root).trim();

//     const expectedTree = `
//     F1
//     -F11
//     --F111
//     ---T1111
//     -F12
//     --T121
//     ---T1211
//     -T13
//     --T131
//     ---T1311
//     -F14
//     --T141
//     ---T1411
//     -F15
//     --F151
//     ---T1511
//     -F17
//     --T172
//     --F174
//     ---T1741
//     --T175
//     ---F1751
//     --T176
//     ---T1761
//     -T18
//     --F181
//     --T182
//     --F183
//     ---F1831
//     --F184
//     ---T1841
//     --T185
//     ---F1851
//     --T186
//     ---T1861`;
//     console.log(
//       "4_test_nodesCleaner.ts Test 3: ",
//       treeAsString === formatExpected(expectedTree)
//     );
//   })();
// };

// export default runTests;

// const helper = `
//       F           F
//      / \         /
//     T  F        T

//      F           F
//     / \         / \
//    T   F       T   F
//       / \         /
//      T   F       T
//       `;
