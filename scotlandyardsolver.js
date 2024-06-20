
// adjacency list graph using a map of object:Set
class Graph {
    adjacencyList;

    constructor() {
        this.adjacencyList = new Map();
    }

    addNode(node) {
        this.adjacencyList.set(node, new Set());
    }

    addEdge(node1, node2) {
        if (!this.adjacencyList.has(node1)) this.addNode(node1);
        if (!this.adjacencyList.has(node2)) this.addNode(node2);
        this.adjacencyList.get(node1).add(node2);
        this.adjacencyList.get(node2).add(node1);
    }

    getNeighboors(node) {
        return this.adjacencyList.get(node);
    }

    hasEdge(node1, node2) {
        return this.adjacencyList.get(node1).has(node2);
    }

}


// setting up all the graphs
var taxiGraph = new Graph();
var busGraph = new Graph();
var ugGraph = new Graph();
var ferryGraph = new Graph();
var blackGraph = new Graph();

function fillGraphs() {


    // adding all edges to taxi graph
    taxiGraph.addEdge(1, 8);
    taxiGraph.addEdge(1, 9);
    taxiGraph.addEdge(2, 20);
    taxiGraph.addEdge(2, 10);
    taxiGraph.addEdge(3, 4);
    taxiGraph.addEdge(3, 11);
    taxiGraph.addEdge(3, 12);
    taxiGraph.addEdge(4, 13);
    taxiGraph.addEdge(5, 15);
    taxiGraph.addEdge(5, 16);
    taxiGraph.addEdge(6, 7);
    taxiGraph.addEdge(6, 29);
    taxiGraph.addEdge(7, 17);
    taxiGraph.addEdge(8, 18);
    taxiGraph.addEdge(8, 19);
    taxiGraph.addEdge(9, 19);
    taxiGraph.addEdge(9, 20);
    taxiGraph.addEdge(10, 11);
    taxiGraph.addEdge(10, 21);
    taxiGraph.addEdge(10, 34);
    taxiGraph.addEdge(11, 22);
    taxiGraph.addEdge(12, 23);
    taxiGraph.addEdge(13, 14);
    taxiGraph.addEdge(13, 23);
    taxiGraph.addEdge(13, 24);
    taxiGraph.addEdge(14, 15);
    taxiGraph.addEdge(14, 25);
    taxiGraph.addEdge(15, 26);
    taxiGraph.addEdge(15, 28);
    taxiGraph.addEdge(15, 16);
    taxiGraph.addEdge(16, 28);
    taxiGraph.addEdge(16, 29);
    taxiGraph.addEdge(17, 29);
    taxiGraph.addEdge(17, 30);
    taxiGraph.addEdge(18, 43);
    taxiGraph.addEdge(18, 31);
    taxiGraph.addEdge(19, 32);
    taxiGraph.addEdge(20, 33);
    taxiGraph.addEdge(21, 33);
    taxiGraph.addEdge(22, 23);
    taxiGraph.addEdge(22, 34);
    taxiGraph.addEdge(22, 35);
    taxiGraph.addEdge(23, 37);
    taxiGraph.addEdge(24, 37);
    taxiGraph.addEdge(24, 38);
    taxiGraph.addEdge(25, 38);
    taxiGraph.addEdge(25, 39);
    taxiGraph.addEdge(26, 39);
    taxiGraph.addEdge(26, 27);
    taxiGraph.addEdge(27, 28);
    taxiGraph.addEdge(27, 40);
    taxiGraph.addEdge(28, 41);
    taxiGraph.addEdge(29, 41);
    taxiGraph.addEdge(29, 42);
    taxiGraph.addEdge(29, 55);
    taxiGraph.addEdge(30, 42);
    taxiGraph.addEdge(31, 43);
    taxiGraph.addEdge(31, 44);
    taxiGraph.addEdge(32, 44);
    taxiGraph.addEdge(32, 45);
    taxiGraph.addEdge(32, 33);
    taxiGraph.addEdge(33, 46);
    taxiGraph.addEdge(34, 47);
    taxiGraph.addEdge(34, 48);
    taxiGraph.addEdge(35, 36);
    taxiGraph.addEdge(35, 48);
    taxiGraph.addEdge(35, 65);
    taxiGraph.addEdge(36, 37);
    taxiGraph.addEdge(36, 49);
    taxiGraph.addEdge(37, 50);
    taxiGraph.addEdge(38, 50);
    taxiGraph.addEdge(38, 51);
    taxiGraph.addEdge(39, 51);
    taxiGraph.addEdge(39, 52);
    taxiGraph.addEdge(40, 41);
    taxiGraph.addEdge(40, 52);
    taxiGraph.addEdge(40, 53);
    taxiGraph.addEdge(41, 54);
    taxiGraph.addEdge(42, 72);
    taxiGraph.addEdge(42, 56);
    taxiGraph.addEdge(43, 57);
    taxiGraph.addEdge(44, 58);
    taxiGraph.addEdge(45, 58);
    taxiGraph.addEdge(45, 59);
    taxiGraph.addEdge(45, 60);
    taxiGraph.addEdge(45, 46);
    taxiGraph.addEdge(46, 47);
    taxiGraph.addEdge(46, 61);
    taxiGraph.addEdge(47, 62);
    taxiGraph.addEdge(48, 62);
    taxiGraph.addEdge(48, 63);
    taxiGraph.addEdge(49, 50);
    taxiGraph.addEdge(49, 66);
    taxiGraph.addEdge(51, 67);
    taxiGraph.addEdge(51, 52);
    taxiGraph.addEdge(51, 68);
    taxiGraph.addEdge(52, 69);
    taxiGraph.addEdge(53, 54);
    taxiGraph.addEdge(53, 69);
    taxiGraph.addEdge(54, 55);
    taxiGraph.addEdge(54, 70);
    taxiGraph.addEdge(55, 71);
    taxiGraph.addEdge(56, 91);
    taxiGraph.addEdge(57, 58);
    taxiGraph.addEdge(57, 73);
    taxiGraph.addEdge(58, 74);
    taxiGraph.addEdge(58, 59);
    taxiGraph.addEdge(59, 75);
    taxiGraph.addEdge(59, 76);
    taxiGraph.addEdge(60, 76);
    taxiGraph.addEdge(60, 61);
    taxiGraph.addEdge(61, 76);
    taxiGraph.addEdge(61, 62);
    taxiGraph.addEdge(61, 78);
    taxiGraph.addEdge(62, 79);
    taxiGraph.addEdge(63, 64);
    taxiGraph.addEdge(63, 79);
    taxiGraph.addEdge(63, 80);
    taxiGraph.addEdge(64, 65);
    taxiGraph.addEdge(64, 81);
    taxiGraph.addEdge(65, 66);
    taxiGraph.addEdge(65, 82);
    taxiGraph.addEdge(66, 67);
    taxiGraph.addEdge(66, 82);
    taxiGraph.addEdge(67, 84);
    taxiGraph.addEdge(68, 69);
    taxiGraph.addEdge(68, 85);
    taxiGraph.addEdge(69, 86);
    taxiGraph.addEdge(70, 71);
    taxiGraph.addEdge(70, 87);
    taxiGraph.addEdge(71, 72);
    taxiGraph.addEdge(71, 89);
    taxiGraph.addEdge(72, 90);
    taxiGraph.addEdge(72, 91);
    taxiGraph.addEdge(73, 74);
    taxiGraph.addEdge(73, 92);
    taxiGraph.addEdge(74, 75);
    taxiGraph.addEdge(74, 92);
    taxiGraph.addEdge(75, 94);
    taxiGraph.addEdge(76, 77);
    taxiGraph.addEdge(77, 78);
    taxiGraph.addEdge(77, 95);
    taxiGraph.addEdge(77, 96);
    taxiGraph.addEdge(78, 79);
    taxiGraph.addEdge(78, 97);
    taxiGraph.addEdge(79, 98);
    taxiGraph.addEdge(80, 99);
    taxiGraph.addEdge(80, 100);
    taxiGraph.addEdge(81, 100);
    taxiGraph.addEdge(81, 82);
    taxiGraph.addEdge(82, 101);
    taxiGraph.addEdge(83, 101);
    taxiGraph.addEdge(83, 102);
    taxiGraph.addEdge(84, 85);
    taxiGraph.addEdge(85, 103);
    taxiGraph.addEdge(86, 87);
    taxiGraph.addEdge(86, 103);
    taxiGraph.addEdge(86, 104);
    taxiGraph.addEdge(87, 88);
    taxiGraph.addEdge(88, 117);
    taxiGraph.addEdge(88, 89);
    taxiGraph.addEdge(89, 105);
    taxiGraph.addEdge(90, 91);
    taxiGraph.addEdge(90, 105);
    taxiGraph.addEdge(91, 105);
    taxiGraph.addEdge(91, 107);
    taxiGraph.addEdge(92, 93);
    taxiGraph.addEdge(93, 94);
    taxiGraph.addEdge(94, 95);
    taxiGraph.addEdge(95, 122);
    taxiGraph.addEdge(96, 97);
    taxiGraph.addEdge(96, 109);
    taxiGraph.addEdge(97, 98);
    taxiGraph.addEdge(97, 109);
    taxiGraph.addEdge(98, 99);
    taxiGraph.addEdge(98, 110);
    taxiGraph.addEdge(99, 110);
    taxiGraph.addEdge(99, 112);
    taxiGraph.addEdge(100, 101);
    taxiGraph.addEdge(100, 112);
    taxiGraph.addEdge(100, 113);
    taxiGraph.addEdge(101, 114);
    taxiGraph.addEdge(102, 103);
    taxiGraph.addEdge(102, 115);
    taxiGraph.addEdge(104, 116);
    taxiGraph.addEdge(105, 106);
    taxiGraph.addEdge(105, 108);
    taxiGraph.addEdge(106, 107);
    taxiGraph.addEdge(107, 119);
    taxiGraph.addEdge(108, 117);
    taxiGraph.addEdge(108, 119);
    taxiGraph.addEdge(108, 135);
    taxiGraph.addEdge(109, 110);
    taxiGraph.addEdge(109, 124);
    taxiGraph.addEdge(110, 111);
    taxiGraph.addEdge(111, 112);
    taxiGraph.addEdge(111, 124);
    taxiGraph.addEdge(112, 125);
    taxiGraph.addEdge(113, 114);
    taxiGraph.addEdge(113, 125);
    taxiGraph.addEdge(114, 115);
    taxiGraph.addEdge(114, 131);
    taxiGraph.addEdge(114, 132);
    taxiGraph.addEdge(114, 126);
    taxiGraph.addEdge(115, 126);
    taxiGraph.addEdge(115, 127);
    taxiGraph.addEdge(116, 117);
    taxiGraph.addEdge(116, 127);
    taxiGraph.addEdge(116, 118);
    taxiGraph.addEdge(117, 129);
    taxiGraph.addEdge(118, 134);
    taxiGraph.addEdge(118, 142);
    taxiGraph.addEdge(118, 129);
    taxiGraph.addEdge(119, 136);
    taxiGraph.addEdge(120, 121);
    taxiGraph.addEdge(120, 144);
    taxiGraph.addEdge(121, 122);
    taxiGraph.addEdge(121, 145);
    taxiGraph.addEdge(122, 123);
    taxiGraph.addEdge(122, 146);
    taxiGraph.addEdge(123, 124);
    taxiGraph.addEdge(123, 137);
    taxiGraph.addEdge(123, 148);
    taxiGraph.addEdge(123, 149);
    taxiGraph.addEdge(124, 130);
    taxiGraph.addEdge(124, 138);
    taxiGraph.addEdge(125, 131);
    taxiGraph.addEdge(126, 127);
    taxiGraph.addEdge(126, 140);
    taxiGraph.addEdge(127, 133);
    taxiGraph.addEdge(127, 134);
    taxiGraph.addEdge(128, 142);
    taxiGraph.addEdge(128, 143);
    taxiGraph.addEdge(128, 160);
    taxiGraph.addEdge(128, 188);
    taxiGraph.addEdge(128, 172);
    taxiGraph.addEdge(129, 142);
    taxiGraph.addEdge(129, 143);
    taxiGraph.addEdge(129, 135);
    taxiGraph.addEdge(130, 131);
    taxiGraph.addEdge(130, 139);
    taxiGraph.addEdge(132, 140);
    taxiGraph.addEdge(133, 140);
    taxiGraph.addEdge(133, 141);
    taxiGraph.addEdge(134, 141);
    taxiGraph.addEdge(134, 142);
    taxiGraph.addEdge(135, 143);
    taxiGraph.addEdge(135, 161);
    taxiGraph.addEdge(135, 136);
    taxiGraph.addEdge(136, 162);
    taxiGraph.addEdge(137, 147);
    taxiGraph.addEdge(138, 150);
    taxiGraph.addEdge(138, 152);
    taxiGraph.addEdge(139, 140);
    taxiGraph.addEdge(139, 153);
    taxiGraph.addEdge(139, 154);
    taxiGraph.addEdge(140, 154);
    taxiGraph.addEdge(140, 156);
    taxiGraph.addEdge(141, 142);
    taxiGraph.addEdge(141, 158);
    taxiGraph.addEdge(142, 143);
    taxiGraph.addEdge(142, 158);
    taxiGraph.addEdge(143, 160);
    taxiGraph.addEdge(144, 145);
    taxiGraph.addEdge(144, 177);
    taxiGraph.addEdge(145, 146);
    taxiGraph.addEdge(146, 147);
    taxiGraph.addEdge(146, 163);
    taxiGraph.addEdge(147, 164);
    taxiGraph.addEdge(148, 149);
    taxiGraph.addEdge(148, 164);
    taxiGraph.addEdge(149, 150);
    taxiGraph.addEdge(149, 165);
    taxiGraph.addEdge(150, 151);
    taxiGraph.addEdge(151, 152);
    taxiGraph.addEdge(151, 165);
    taxiGraph.addEdge(151, 166);
    taxiGraph.addEdge(152, 153);
    taxiGraph.addEdge(153, 154);
    taxiGraph.addEdge(153, 166);
    taxiGraph.addEdge(153, 167);
    taxiGraph.addEdge(154, 155);
    taxiGraph.addEdge(155, 156);
    taxiGraph.addEdge(155, 167);
    taxiGraph.addEdge(155, 168);
    taxiGraph.addEdge(156, 157);
    taxiGraph.addEdge(156, 169);
    taxiGraph.addEdge(157, 158);
    taxiGraph.addEdge(157, 170);
    taxiGraph.addEdge(158, 159);
    taxiGraph.addEdge(159, 170);
    taxiGraph.addEdge(159, 172);
    taxiGraph.addEdge(159, 186);
    taxiGraph.addEdge(159, 198);
    taxiGraph.addEdge(160, 161);
    taxiGraph.addEdge(160, 173);
    taxiGraph.addEdge(161, 174);
    taxiGraph.addEdge(162, 175);
    taxiGraph.addEdge(163, 177);
    taxiGraph.addEdge(164, 178);
    taxiGraph.addEdge(164, 179);
    taxiGraph.addEdge(165, 179);
    taxiGraph.addEdge(165, 180);
    taxiGraph.addEdge(166, 181);
    taxiGraph.addEdge(166, 183);
    taxiGraph.addEdge(167, 168);
    taxiGraph.addEdge(167, 183);
    taxiGraph.addEdge(168, 184);
    taxiGraph.addEdge(169, 184);
    taxiGraph.addEdge(170, 185);
    taxiGraph.addEdge(171, 173);
    taxiGraph.addEdge(171, 175);
    taxiGraph.addEdge(171, 199);
    taxiGraph.addEdge(172, 187);
    taxiGraph.addEdge(173, 174);
    taxiGraph.addEdge(173, 188);
    taxiGraph.addEdge(174, 175);
    taxiGraph.addEdge(176, 177);
    taxiGraph.addEdge(176, 189);
    taxiGraph.addEdge(178, 191);
    taxiGraph.addEdge(179, 191);
    taxiGraph.addEdge(180, 181);
    taxiGraph.addEdge(180, 193);
    taxiGraph.addEdge(181, 182);
    taxiGraph.addEdge(181, 193);
    taxiGraph.addEdge(182, 183);
    taxiGraph.addEdge(182, 195);
    taxiGraph.addEdge(183, 196);
    taxiGraph.addEdge(184, 185);
    taxiGraph.addEdge(184, 196);
    taxiGraph.addEdge(184, 197);
    taxiGraph.addEdge(185, 186);
    taxiGraph.addEdge(186, 198);
    taxiGraph.addEdge(187, 198);
    taxiGraph.addEdge(187, 188);
    taxiGraph.addEdge(188, 199);
    taxiGraph.addEdge(189, 190);
    taxiGraph.addEdge(190, 191);
    taxiGraph.addEdge(190, 192);
    taxiGraph.addEdge(191, 192);
    taxiGraph.addEdge(192, 194);
    taxiGraph.addEdge(193, 194);
    taxiGraph.addEdge(194, 195);
    taxiGraph.addEdge(195, 197);
    taxiGraph.addEdge(196, 197);
    taxiGraph.addEdge(198, 199);


    // adding all edges to bus graph
    busGraph.addEdge(1, 58);
    busGraph.addEdge(1, 46);
    busGraph.addEdge(3, 22);
    busGraph.addEdge(3, 23);
    busGraph.addEdge(7, 42);
    busGraph.addEdge(13, 14);
    busGraph.addEdge(13, 23);
    busGraph.addEdge(13, 52);
    busGraph.addEdge(14, 15);
    busGraph.addEdge(15, 41);
    busGraph.addEdge(15, 29);
    busGraph.addEdge(22, 23);
    busGraph.addEdge(22, 34);
    busGraph.addEdge(22, 65);
    busGraph.addEdge(23, 67);
    busGraph.addEdge(29, 41);
    busGraph.addEdge(29, 42);
    busGraph.addEdge(29, 55);
    busGraph.addEdge(34, 46);
    busGraph.addEdge(34, 63);
    busGraph.addEdge(41, 52);
    busGraph.addEdge(41, 87);
    busGraph.addEdge(42, 72);
    busGraph.addEdge(46, 58);
    busGraph.addEdge(46, 78);
    busGraph.addEdge(52, 67);
    busGraph.addEdge(52, 86);
    busGraph.addEdge(55, 89);
    busGraph.addEdge(58, 74);
    busGraph.addEdge(58, 77);
    busGraph.addEdge(63, 65);
    busGraph.addEdge(63, 79);
    busGraph.addEdge(63, 100);
    busGraph.addEdge(65, 67);
    busGraph.addEdge(65, 82);
    busGraph.addEdge(67, 82);
    busGraph.addEdge(67, 102);
    busGraph.addEdge(72, 105);
    busGraph.addEdge(72, 107);
    busGraph.addEdge(74, 94);
    busGraph.addEdge(77, 78);
    busGraph.addEdge(77, 94);
    busGraph.addEdge(77, 124);
    busGraph.addEdge(78, 79);
    busGraph.addEdge(82, 100);
    busGraph.addEdge(82, 140);
    busGraph.addEdge(86, 87);
    busGraph.addEdge(86, 102);
    busGraph.addEdge(86, 116);
    busGraph.addEdge(87, 105);
    busGraph.addEdge(89, 105);
    busGraph.addEdge(93, 94);
    busGraph.addEdge(100, 111);
    busGraph.addEdge(102, 127);
    busGraph.addEdge(105, 107);
    busGraph.addEdge(105, 108);
    busGraph.addEdge(107, 161);
    busGraph.addEdge(108, 116);
    busGraph.addEdge(108, 135);
    busGraph.addEdge(111, 124);
    busGraph.addEdge(116, 127);
    busGraph.addEdge(116, 142);
    busGraph.addEdge(122, 123);
    busGraph.addEdge(122, 144);
    busGraph.addEdge(123, 124);
    busGraph.addEdge(123, 144);
    busGraph.addEdge(123, 165);
    busGraph.addEdge(124, 153);
    busGraph.addEdge(127, 133);
    busGraph.addEdge(128, 142);
    busGraph.addEdge(128, 135);
    busGraph.addEdge(128, 161);
    busGraph.addEdge(128, 187);
    busGraph.addEdge(128, 199);
    busGraph.addEdge(133, 140);
    busGraph.addEdge(133, 142);
    busGraph.addEdge(133, 157);
    busGraph.addEdge(140, 154);
    busGraph.addEdge(140, 156);
    busGraph.addEdge(142, 157);
    busGraph.addEdge(144, 163);
    busGraph.addEdge(153, 154);
    busGraph.addEdge(153, 180);
    busGraph.addEdge(153, 184);
    busGraph.addEdge(154, 156);
    busGraph.addEdge(156, 157);
    busGraph.addEdge(156, 184);
    busGraph.addEdge(157, 185);
    busGraph.addEdge(161, 199);
    busGraph.addEdge(163, 176);
    busGraph.addEdge(163, 191);
    busGraph.addEdge(165, 180);
    busGraph.addEdge(165, 191);
    busGraph.addEdge(176, 190);
    busGraph.addEdge(180, 190);
    busGraph.addEdge(180, 184);
    busGraph.addEdge(184, 185);
    busGraph.addEdge(185, 187);
    busGraph.addEdge(190, 191);


    // adding all edges to ug graph
    ugGraph.addEdge(1, 46)
    ugGraph.addEdge(13, 46)
    ugGraph.addEdge(13, 67)
    ugGraph.addEdge(13, 89)
    ugGraph.addEdge(46, 74)
    ugGraph.addEdge(46, 79)
    ugGraph.addEdge(67, 79)
    ugGraph.addEdge(67, 111)
    ugGraph.addEdge(67, 89)
    ugGraph.addEdge(79, 93)
    ugGraph.addEdge(79, 111)
    ugGraph.addEdge(89, 140)
    ugGraph.addEdge(89, 128)
    ugGraph.addEdge(111, 163)
    ugGraph.addEdge(111, 153)
    ugGraph.addEdge(128, 140)
    ugGraph.addEdge(128, 185)
    ugGraph.addEdge(140, 153)
    ugGraph.addEdge(153, 163)
    ugGraph.addEdge(153, 185)


    // adding all edges to ferry graph
    ferryGraph.addEdge(194, 157)
    ferryGraph.addEdge(115, 157)
    ferryGraph.addEdge(115, 108)


    for (graph of [taxiGraph, busGraph, ugGraph, ferryGraph]) {
        for ([node, neighbors] of graph.adjacencyList) {
            for (neighbor of neighbors) {
                blackGraph.addEdge(node, neighbor);
            }
        }
    }

}

fillGraphs();


var circleData = [];
function fillCircleData() {
    circleData[1] = [110, 35];
    circleData[2] = [255, 38];
    circleData[3] = [313, 29];
    circleData[4] = [387, 33];
    circleData[5] = [605, 34];
    circleData[6] = [654, 38];
    circleData[7] = [727, 41];
    circleData[8] = [75, 60];
    circleData[9] = [132, 65];
    circleData[10] = [269, 73];
    circleData[11] = [312, 65];
    circleData[12] = [351, 71];
    circleData[13] = [418, 72];
    circleData[14] = [481, 48];
    circleData[15] = [546, 38];
    circleData[16] = [617, 72];
    circleData[17] = [724, 89];
    circleData[18] = [34, 94];
    circleData[19] = [105, 93];
    circleData[20] = [163, 91];
    circleData[21] = [225, 115];
    circleData[22] = [318, 112];
    circleData[23] = [364, 99];
    circleData[24] = [441, 102];
    circleData[25] = [493, 86];
    circleData[26] = [533, 74];
    circleData[27] = [547, 98];
    circleData[28] = [580, 89];
    circleData[29] = [665, 110];
    circleData[30] = [751, 118];
    circleData[31] = [66, 130];
    circleData[32] = [137, 134];
    circleData[33] = [189, 126];
    circleData[34] = [285, 127];
    circleData[35] = [328, 145];
    circleData[36] = [362, 153];
    circleData[37] = [394, 131];
    circleData[38] = [458, 131];
    circleData[39] = [507, 113];
    circleData[40] = [557, 136];
    circleData[41] = [601, 122];
    circleData[42] = [712, 136];
    circleData[43] = [34, 143];
    circleData[44] = [93, 151];
    circleData[45] = [164, 163];
    circleData[46] = [214, 157];
    circleData[47] = [250, 140];
    circleData[48] = [296, 167];
    circleData[49] = [377, 176];
    circleData[50] = [410, 158];
    circleData[51] = [478, 155];
    circleData[52] = [516, 144];
    circleData[53] = [569, 172];
    circleData[54] = [601, 157];
    circleData[55] = [652, 151];
    circleData[56] = [741, 180];
    circleData[57] = [51, 175];
    circleData[58] = [115, 174];
    circleData[59] = [156, 208];
    circleData[60] = [190, 194];
    circleData[61] = [229, 202];
    circleData[62] = [263, 182];
    circleData[63] = [305, 218];
    circleData[64] = [341, 220];
    circleData[65] = [366, 201];
    circleData[66] = [403, 205];
    circleData[67] = [435, 185];
    circleData[68] = [496, 186];
    circleData[69] = [540, 191];
    circleData[70] = [598, 187];
    circleData[71] = [644, 180];
    circleData[72] = [700, 175];
    circleData[73] = [56, 204];
    circleData[74] = [82, 223];
    circleData[75] = [124, 230];
    circleData[76] = [179, 226];
    circleData[77] = [197, 248];
    circleData[78] = [234, 236];
    circleData[79] = [270, 224];
    circleData[80] = [339, 257];
    circleData[81] = [370, 258];
    circleData[82] = [398, 238];
    circleData[83] = [432, 248];
    circleData[84] = [478, 210];
    circleData[85] = [513, 214];
    circleData[86] = [553, 226];
    circleData[87] = [594, 246];
    circleData[88] = [626, 262];
    circleData[89] = [634, 224];
    circleData[90] = [685, 212];
    circleData[91] = [730, 213];
    circleData[92] = [43, 241];
    circleData[93] = [45, 279];
    circleData[94] = [86, 276];
    circleData[95] = [141, 264];
    circleData[96] = [220, 287];
    circleData[97] = [252, 278];
    circleData[98] = [283, 265];
    circleData[99] = [313, 275];
    circleData[100] = [365, 293];
    circleData[101] = [402, 277];
    circleData[102] = [472, 249];
    circleData[103] = [517, 239];
    circleData[104] = [564, 269];
    circleData[105] = [667, 256];
    circleData[106] = [711, 250];
    circleData[107] = [753, 249];
    circleData[108] = [668, 322];
    circleData[109] = [258, 319];
    circleData[110] = [290, 292];
    circleData[111] = [298, 320];
    circleData[112] = [333, 305];
    circleData[113] = [376, 316];
    circleData[114] = [412, 318];
    circleData[115] = [478, 292];
    circleData[116] = [570, 323];
    circleData[117] = [621, 331];
    circleData[118] = [574, 359];
    circleData[119] = [739, 343];
    circleData[120] = [28, 368];
    circleData[121] = [66, 372];
    circleData[122] = [104, 366];
    circleData[123] = [193, 364];
    circleData[124] = [249, 349];
    circleData[125] = [342, 329];
    circleData[126] = [446, 327];
    circleData[127] = [511, 342];
    circleData[128] = [604, 460];
    circleData[129] = [618, 365];
    circleData[130] = [320, 356];
    circleData[131] = [362, 346];
    circleData[132] = [407, 342];
    circleData[133] = [480, 388];
    circleData[134] = [531, 373];
    circleData[135] = [657, 390];
    circleData[136] = [709, 407];
    circleData[137] = [165, 387];
    circleData[138] = [261, 374];
    circleData[139] = [331, 386];
    circleData[140] = [400, 378];
    circleData[141] = [507, 409];
    circleData[142] = [575, 424];
    circleData[143] = [630, 426];
    circleData[144] = [40, 416];
    circleData[145] = [78, 414];
    circleData[146] = [110, 409];
    circleData[147] = [146, 409];
    circleData[148] = [176, 428];
    circleData[149] = [207, 408];
    circleData[150] = [234, 392];
    circleData[151] = [258, 414];
    circleData[152] = [283, 391];
    circleData[153] = [306, 421];
    circleData[154] = [355, 404];
    circleData[155] = [380, 427];
    circleData[156] = [410, 437];
    circleData[157] = [466, 450];
    circleData[158] = [517, 437];
    circleData[159] = [528, 490];
    circleData[160] = [648, 462];
    circleData[161] = [693, 441];
    circleData[162] = [751, 436];
    circleData[163] = [112, 441];
    circleData[164] = [154, 452];
    circleData[165] = [216, 451];
    circleData[166] = [298, 451];
    circleData[167] = [343, 457];
    circleData[168] = [369, 476];
    circleData[169] = [406, 469];
    circleData[170] = [468, 487];
    circleData[171] = [673, 533];
    circleData[172] = [576, 487];
    circleData[173] = [659, 498];
    circleData[174] = [707, 475];
    circleData[175] = [734, 504];
    circleData[176] = [43, 477];
    circleData[177] = [78, 466];
    circleData[178] = [128, 478];
    circleData[179] = [187, 479];
    circleData[180] = [241, 502];
    circleData[181] = [286, 487];
    circleData[182] = [305, 510];
    circleData[183] = [324, 482];
    circleData[184] = [401, 501];
    circleData[185] = [462, 540];
    circleData[186] = [501, 523];
    circleData[187] = [560, 528];
    circleData[188] = [620, 521];
    circleData[189] = [80, 524];
    circleData[190] = [124, 547];
    circleData[191] = [148, 519];
    circleData[192] = [199, 569];
    circleData[193] = [265, 530];
    circleData[194] = [283, 555];
    circleData[195] = [325, 549];
    circleData[196] = [351, 505];
    circleData[197] = [365, 533];
    circleData[198] = [532, 557];
    circleData[199] = [621, 555];

    for (key in circleData) {
        circleData[key][0] = circleData[key][0] / 788;
        circleData[key][1] = circleData[key][1] / 591;
    }
}
fillCircleData()

var uid = null;
// main function
function scotlandyardsolver() {

    // Used to get all the locations for the circles. 
    //console.log(bigOutput);

    // clear old circles
    canvas.innerHTML = "";

    // get input
    var startPos = parseInt(document.getElementById('xreveallocation').value);
    var tickets = [];
    tickets[0] = getFromDropdown("ticket1");
    tickets[1] = getFromDropdown("ticket2");
    tickets[2] = getFromDropdown("ticket3");
    tickets[3] = getFromDropdown("ticket4");
    tickets[4] = getFromDropdown("ticket5");
    tickets[5] = getFromDropdown("ticket6");


    // input verification
    if (isNaN(startPos) || startPos < 1 || startPos > 199) {
        document.getElementById("feedback").innerHTML = "must be a valid number between 1 and 199. "
        return;
    } else {
        document.getElementById("feedback").innerHTML = ""
    }

    // console.log(uidToPositionAndTickets(getUID(startPos, tickets)));
    // get uid
    var uid = getUID(startPos, tickets);

    // call our function that actually calculates possible locations
    var results = deduceMrXLocation(startPos, tickets);

    // TODO: potentially mark map with startPos of Mr. X

    // debug output
    // document.getElementById("feedback").innerHTML =
    //     document.getElementById("feedback").innerHTML + [...results].join(', ');

    // draw circles on the possible spaces
    for (node of results) {
        drawCircle(...circleData[node], node);
    }


    // save results
    localStorage.setItem(uid, JSON.stringify([...results]));
};

function saveList(uid, uidPrefix, nodeList) {
    localStorage.setItem(uidPrefix + uid, JSON.stringify(nodeList));
}

function saveSet(uid, uidPrefix, nodeSet) {
    localStorage.setItem(uidPrefix + uid, JSON.stringify([...nodeSet]));
}

function loadList(uid, uidPrefix) {
    oldResultsList = JSON.parse(localStorage.getItem(uidPrefix + uid));
    if(oldResultsList == null) {
        return null;
    }
    return (oldResultsList);
}

function loadSet(uid, uidPrefix) {
    oldResultsList = JSON.parse(localStorage.getItem(uidPrefix + uid));
    if(oldResultsList == null) {
        return null;
    }
    return new Set(oldResultsList);
}

function saveDataRemoveNode(uid, uidPrefix, nodeToRemove) {
    // load
    nodeSet = loadSet(uid, uidPrefix);
    if(nodeSet == null) return;
    // edit
    nodeSet.delete(nodeToRemove);
    // save
    saveSet(uid, uidPrefix, nodeSet);
}

function saveDataAddNode(uid, uidPrefix, nodeToAdd) {
    // load
    nodeSet = loadSet(uid, uidPrefix);
    if(nodeSet == null) {
        nodeSet = new Set();
    }
    // edit
    nodeSet.add(nodeToAdd);
    // save
    saveSet(uid, uidPrefix, nodeSet);
}

// calculating which nodes mr. x can currently be at
function deduceMrXLocation(startPos, tickets) {

    //document.getElementById("feedback").innerHTML = document.getElementById("feedback").innerHTML + startPos + " -> ";
    var currentLocations = new Set();
    currentLocations.add(startPos);

    for (i in tickets) {
        var possibleNextLocations = new Set();

        if (tickets[i] == "--") break;

        var graph;
        if (tickets[i] == "Taxi") {
            graph = taxiGraph;
        } else if (tickets[i] == "Bus") {
            graph = busGraph;
        } else if (tickets[i] == "UG") {
            graph = ugGraph;
        } else if (tickets[i] == "Black") {
            graph = blackGraph;
        }

        for (j of currentLocations) {
            // use the graph to update the list of next possible locations
            var nodeNeighbors = graph.getNeighboors(j)
            if (nodeNeighbors == null) {
                // do nothing
                // this exists to prevent trying to union an undefined set
            } else {
                possibleNextLocations = possibleNextLocations.union(nodeNeighbors);
            }
        }
        currentLocations = possibleNextLocations;
    }
    return currentLocations;
}

function getFromDropdown(id) {
    var e = document.getElementById(id);
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    return text;
}


function getUID(startPos, tickets) {
    var output = "" + startPos;
    for(i in tickets) {
        if(tickets[i] == "--") {
            return output;
        } else if (tickets[i] == "Black") {
            output += "X";
        } else {
            output += tickets[i][0];
        }
    }
    return output;
}

function uidToPositionAndTickets(uid) {
    var pos = parseInt(uid);
    var tickets = [];
    for(i in uid) {
        char = uid[i];
        if(char == "T") {
            tickets.push("Taxi");
        } else if (char == "B") {
            tickets.push("Bus");
        } else if (char == "U") {
            tickets.push("UG");
        } else if (char == "X") {
            tickets.push("Black");
        }
    }
    while(tickets.length < 6) {
        tickets.push("--");
    }
    return [pos, tickets];
}


var syImg = document.getElementById("scotlandyardimage");
var canvas = document.getElementById("myCanvas");
var magentaFilter = "invert(56%) sepia(98%) saturate(7488%) hue-rotate(295deg) brightness(116%) contrast(135%)  opacity(45%)";
var yellowFilter = "invert(81%) sepia(88%) saturate(1360%) hue-rotate(355deg) brightness(455%) contrast(106%) opacity(60%)";
var grayFilter = "invert(54%) sepia(0%) saturate(1000%) hue-rotate(224deg) brightness(45%) contrast(87%)  opacity(60%)";

function drawCircle(x, y, node) {
    // TODO - resize canvas, redraw rings on resizing window
    canvas.style.position = "absolute";
    canvas.style.left = syImg.offsetLeft + "px";
    canvas.style.top = syImg.offsetTop + "px";
    canvas.style.width = syImg.width + "px";
    canvas.style.height = syImg.height + "px";
    // canvas.style.pointerEvents = "none"

    let ring = document.createElement("img");
    ring.id = "ring" + node;
    // ring.style.zIndex = 1;
    ring.src = "circle-64.png";
    ring.style.position = "absolute";
    var ratio = syImg.width / 781;
    var diameter = 40 * ratio;
    ring.style.width = diameter + "px";
    ring.style.height = diameter + "px";
    // ring.style.pointerEvents = "none"
    
    ring.style.filter = magentaFilter;
    ring.dataset.numClicks = 0;
    x = x*syImg.width;
    y = y*syImg.height;
    ring.style.left = (x - diameter / 2) + "px"
    ring.style.top = (y - diameter / 2) + "px"
    ring.addEventListener("click",() => ringClick(ring, node));

    canvas.appendChild(ring);
}

function ringClick(ring, node) {
    ring.dataset.numClicks = parseInt(ring.dataset.numClicks) + 1;

    if(ring.dataset.numClicks >= 3 ) {
        ring.dataset.numClicks = 0;
    }

    // remove from savedata
    saveDataRemoveNode(uid, "M", node);
    saveDataRemoveNode(uid, "Y", node);
    saveDataRemoveNode(uid, "G", node);

    if(ring.dataset.numClicks == 0) {
        ring.style.filter = magentaFilter;
        saveDataAddNode(uid, "M", node);
    } else if (ring.dataset.numClicks == 1) {
        ring.style.filter = yellowFilter;
        saveDataAddNode(uid, "Y", node);
    } else {
        ring.style.filter = grayFilter;
        saveDataAddNode(uid, "G", node);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// used to get the location data of each node
// var numClicks = 0;
// var bigOutput = "";
// function imageClick(evt) {
//     var x = (evt.pageX - $('#scotlandyardimage').offset().left);
//     var y = (evt.pageY - $('#scotlandyardimage').offset().top);

//     var out = "node " + numClicks + ", x:" + x + ", y:" + y;
//     console.log(out);
//     bigOutput += out + "\n";

//     drawCircle(x, y);
//     numClicks += 1;
// }

// onReady() function
$(function () {
    // used to get locations for all the circles
    //document.getElementById("scotlandyardimage").addEventListener("click", imageClick);

    syImg = document.getElementById("scotlandyardimage");
    canvas = document.getElementById("myCanvas");

    //TODO remove this :)
    localStorage.clear();

})


// TODO: after visual output is created, make a thing where i can just click next and it shows all the connections of that node (to check that all the data i input was correct)

// TODO: new feature set: ability to mark certain futures as impossible, then the computer remembers it for when we input the next ticket, then the next deduce! will show purple for unmarked futures, and gray for futures only reachable through "impossible" spots
// Todo: button to reset marks? 

// onclick: save all magenta/yellow/gray for each uid 
// when pressing deduce, 
//// if uid not found, create a full magenta save
//// use the closest preceding uid that isn't all magenta
//// create neighbor sets for magenta, yellow, gray
//// then do set subtraction. yellow -= magenta; gray -= (yellow + magenta);
//// then, render the 3 sets


// todo: no more deduce button? it just runs whenever you change an input field?