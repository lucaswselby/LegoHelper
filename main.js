// initialize Lego class
class Lego {
constructor(numbers, name, color) {
    this._numbers = numbers;
    this._name = name;
    this._color = color;
    this.picture = "";
}
get numbers() {
    return this._numbers;
}
get name() {
    return this._name;
}
get color() {
    return this._color;
}
}

// initialize LegoSet class
class LegoSet {
constructor(name, number, year, pieces, numberOfPieces) {
    this._name = name;
    this._number = number;
    this._year = year;
    this._pieces = pieces;
    this._numberOfPieces = numberOfPieces;
}
get name() {
    return this._name;
}
get number() {
    return this._number;
}
get year() {
    return this._year;
}
get pieces() {
    return this._pieces;
}
get numberOfPieces() {
    return this._numberOfPieces;
}
}

// initialize Lego pieces
const l0 = new Lego([0], "Tile Round 2 x 2 with Grey and Black Machinery Print", "Black");
const l4164067 = new Lego([4164067], "Bar 1 x 8 with Brick 1 x 2 Curved Top End (Axle Holder Inside Small End)", "Black");
const l611226 = new Lego([611226], "Brick 1 x 12", "Black");
const l300426 = new Lego([300426], "Brick 1 x 2", "Black");
const l4188306 = new Lego([4188306], "Brick 1 x 2 x 5 with Han Solo in Carbonite Print", "Black");
const l362226 = new Lego([362226], "Brick 1 x 3", "Black");
const l301026 = new Lego([301026], "Brick 1 x 4", "Black");
const l4218987 = new Lego([4218987], "Brick 1 x 6 x 5", "Black");
const l300326 = new Lego([300326,4103587], "Brick 2 x 2", "Black");
const l300226 = new Lego([300226], "Brick 2 x 3", "Black");
const l300126 = new Lego([300126], "Brick 2 x 4", "Black");
const l245626 = new Lego([245626,4181144], "Brick 2 x 6", "Black");
const l300726 = new Lego([300726,6037390], "Brick 2 x 8", "Black");
const l330823 = new Lego([330823,330826,4159141,4218982], "Brick Arch 1 x 8 x 2", "Black");
const l265326 = new Lego([265326], "Brick Special 1 x 4 with Groove", "Black");
const l434926 = new Lego([434926], "Equipment Weapon, Loudhailer / Blaster / Space Gun", "Black");
const l613426 = new Lego([613426,4124096], "Hinge Brick 2 x 2 Top Plate Thin", "Black");
const l73587 = new Lego([73587], "Lever Small Base with Black Lever", "Black");
const l371026 = new Lego([371026], "Plate 1 x 4", "Black");
const l346026 = new Lego([346026], "Plate 1 x 8", "Black");
const l244526 = new Lego([244526], "Plate 2 x 12", "Black");
const l302126 = new Lego([302126], "Plate 2 x 3", "Black");
const l302026 = new Lego([302026], "Plate 2 x 4", "Black");
const l303026 = new Lego([303026,303076], "Plate 4 x 10", "Black");
const l303226 = new Lego([303226], "Plate 4 x 6", "Black");
const l395826 = new Lego([395826], "Plate 6 x 6", "Black");
const l304826 = new Lego([304826], "Slope 45° 2 x 1 Triple with Ovoid Bottom Pin", "Black");
const l4143982 = new Lego([4143982], "Slope 75° 2 x 2 x 3 [Hollow Studs]", "Black");
const l244926 = new Lego([244926,244976,4561789,4636202], "Slope Inverted 75° 2 x 1 x 3", "Black");
const l4100333 = new Lego([4100333,4109618,4528334,6037555,6055878,6074034,6096957], "String with End Studs 41L Overall", "Black");
const l370826 = new Lego([370826], "Technic Axle 12", "Black");
const l4144025 = new Lego([4144025], "Technic Brick 4 x 6 Open Center", "Black");
const l662826 = new Lego([662826,4184169], "Technic Pin with Friction Ridges Lengthwise and Towball", "Black");
const l306926 = new Lego([306926], "Tile 1 x 2 with Groove", "Black");
const l243126 = new Lego([243126], "Tile 1 x 4 with Groove", "Black");
const l663626 = new Lego([663626], "Tile 1 x 6 with Groove", "Black");
const l255526 = new Lego([255526], "Tile Special 1 x 1 with Clip and Straight Tips", "Black");
const l368026 = new Lego([368026], "Turntable 2 x 2 Plate, Base", "Black");
const l4206482 = new Lego([4206482,4309323], "Technic Axle Pin with Friction Ridges Lengthwise", "Blue");
const l4143005 = new Lego([4143005], "Technic Pin 1/2", "Blue");
const l4218968 = new Lego([4218968], "Plant, Flower Stem", "Brown");
const l4124050 = new Lego([4124050], "Weapon Lightsaber Hilt without Bottom Ring", "Chrome Silver");
const l4164069 = new Lego([4164069], "Bar 1 x 8 with Brick 1 x 2 Curved Top End (Axle Holder Inside Small End)", "Dark Gray");
const l300527 = new Lego([300527,4114079], "Brick 1 x 1", "Dark Gray");
const l611127 = new Lego([611127,4114327], "Brick 1 x 10", "Dark Gray");
const l300427 = new Lego([300427,4113909], "Brick 1 x 2", "Dark Gray");
const l245427 = new Lego([245427,4113235], "Brick 1 x 2 x 5 with Blocked Open Studs and Bottom Stud Holder with Asymmetric Ridges", "Dark Gray");
const l301027 = new Lego([301027,4114308], "Brick 1 x 4", "Dark Gray");
const l300927 = new Lego([300927,4114082], "Brick 1 x 6", "Dark Gray");
const l300327 = new Lego([300327,4110008], "Brick 2 x 2", "Dark Gray");
const l300727 = new Lego([300727,4116649], "Brick 2 x 8", "Dark Gray");
const l4118869 = new Lego([4118869,4181114], "Brick 8 x 16", "Dark Gray");
const l4118868 = new Lego([4118868,4181131], "Brick 8 x 8", "Dark Gray");
const l365927 = new Lego([365927], "Brick Arch 1 x 4", "Dark Gray");
const l330727 = new Lego([330727,4114517,4218967], "Brick Arch 1 x 6 x 2 - Thick Top with Reinforced Underside", "Dark Gray");
const l245827 = new Lego([245827,4113907], "Brick Special 1 x 2 with Pin", "Dark Gray");
const l4144532 = new Lego([4144532], "Brick Special 1 x 4 with 4 Studs on One Side", "Dark Gray");
const l3000027 = new Lego([3000027], "Brick Special 2 x 2 with 2 Pins and Axle Hole", "Dark Gray");
const l4108048 = new Lego([4108048], "Brick Special 2 x 2 with Pin and Axle Hole", "Dark Gray");
const l4106728 = new Lego([4106728], "Chain 17L", "Dark Gray");
const l302327 = new Lego([302327,4111983], "Plate 1 x 2", "Dark Gray");
const l371027 = new Lego([371027], "Plate 1 x 4", "Dark Gray");
const l302227 = new Lego([302227,4114003], "Plate 2 x 2", "Dark Gray");
const l302027 = new Lego([302027,4112232], "Plate 2 x 4", "Dark Gray");
const l4113911 = new Lego([4113911,4243823], "Plate 4 x 4", "Dark Gray");
const l4121924 = new Lego([4121924], "Plate 6 x 6", "Dark Gray");
const l4107763 = new Lego([4107763], "Plate Round 2 x 2 with Axle Hole Type 1 (+ Opening)", "Dark Gray");
const l4114127 = new Lego([4114127,4141978], "Plate Special 2 x 4 with Pins", "Dark Gray");
const l4133505 = new Lego([4133505,4219468], "Plate Special 3 x 2 with Hole", "Dark Gray");
const l4124098 = new Lego([4124098], "Slope 18° 4 x 2", "Dark Gray");
const l428627 = new Lego([428627,4108045], "Slope 33° 3 x 1", "Dark Gray");
const l4121970 = new Lego([4121970], "Slope 45° 2 x 1 with Bottom Pin", "Dark Gray");
const l4109984 = new Lego([4109984], "Slope 45° 2 x 2", "Dark Gray");
const l1 = new Lego([1], "Slope 45° 2 x 2 with Red Square and Circuitry Print", "Dark Gray");
const l4112039 = new Lego([4112039], "Slope Inverted 33° 3 x 2 [No Connections between Studs]", "Dark Gray");
const l394027 = new Lego([394027], "Support 2 x 2 x 2 Stand with Reach-Through Center Hole", "Dark Gray");
const l4114529 = new Lego([4114529], "Technic Brick 1 x 2 [1 Hole]", "Dark Gray");
const l4109979 = new Lego([4109979], "Tile 1 x 4 with Groove", "Dark Gray");
const l4108155 = new Lego([4108155,4129575], "Tile 1 x 6 with Groove", "Dark Gray");
const l416227 = new Lego([416227], "Tile 1 x 8 with Groove", "Dark Gray");
const l306827 = new Lego([306827,4109986], "Tile 2 x 2 with Groove", "Dark Gray");
const l395702 = new Lego([395702], "Antenna 1 x 4 with Rounded Top", "Light Gray");
const l4185274 = new Lego([4185274,4297346], "Bracket 1 x 2 - 2 x 2", "Light Gray");
const l245302 = new Lego([245302], "Brick 1 x 1 x 5 with Blocked Open or Hollow Stud", "Light Gray");
const l611102 = new Lego([611102], "Brick 1 x 10", "Light Gray");
const l300402 = new Lego([300402], "Brick 1 x 2", "Light Gray");
const l4107533 = new Lego([4107533], "Brick 1 x 2 x 2 with Inside Axle Holder", "Light Gray");
const l362202 = new Lego([362202], "Brick 1 x 3", "Light Gray");
const l235702 = new Lego([235702,235752], "Brick 2 x 2 Corner", "Light Gray");
const l300102 = new Lego([300102,4116259], "Brick 2 x 4", "Light Gray");
const l4114248 = new Lego([4114248,4181123,4190379], "Brick 4 x 6", "Light Gray");
const l614302 = new Lego([614302], "Brick Round 2 x 2 with Axle Hole", "Light Gray");
const l4214931 = new Lego([4214931], "Brick Round Corner 16 x 16", "Light Gray");
const l4159736 = new Lego([4159736], "Brick Round Corner 4 x 4 Full Brick", "Light Gray");
const l4113203 = new Lego([4113203], "Brick Special 1 x 2 with Handle", "Light Gray");
const l458902 = new Lego([458902], "Cone 1 x 1 [No Top Groove]", "Light Gray");
const l393702 = new Lego([393702], "Hinge Brick 1 x 2 Base", "Light Gray");
const l2 = new Lego([2], "Hose Rigid 3mm D. 20L / 16cm", "Light Gray");
const l3 = new Lego([3], "Hose Rigid 3mm D. 9L / 7.2cm", "Light Gray");
const l486502 = new Lego([486502], "Panel 1 x 2 x 1 [Square Corners]", "Light Gray");
const l4171667 = new Lego([4171667], "Panel 1 x 4 x 1 with Rounded Corners [Thick Wall]", "Light Gray");
const l302302 = new Lego([302302], "Plate 1 x 2", "Light Gray");
const l302102 = new Lego([302102], "Plate 2 x 3", "Light Gray");
const l302002 = new Lego([302002], "Plate 2 x 4", "Light Gray");
const l614102 = new Lego([614102], "Plate Round 1 x 1 with Solid Stud", "Light Gray");
const l403202 = new Lego([403202], "Plate Round 2 x 2 with Axle Hole Type 1 (+ Opening)", "Light Gray");
const l254002 = new Lego([254002,254052,4140584], "Plate Special 1 x 2 Side Handle [Free Ends]", "Light Gray");
const l379402 = new Lego([379402], "Plate Special 1 x 2 with 1 Stud without Groove (Jumper)", "Light Gray");
const l4109642 = new Lego([4109642], "Plate Special 1 x 2 with Door Rail", "Light Gray");
const l303902 = new Lego([303902], "Slope 45° 2 x 2", "Light Gray");
const l446002 = new Lego([446002], "Slope 75° 2 x 1 x 3 with Open Stud", "Light Gray");
const l368402 = new Lego([368402,4248057], "Slope 75° 2 x 2 x 3 [Hollow Studs]", "Light Gray");
const l366502 = new Lego([366502], "Slope Inverted 45° 2 x 1", "Light Gray");
const l4220070 = new Lego([4220070], "Support 2 x 2 x 8 with Grooves, Smooth On All Sides, Top Peg", "Light Gray");
const l655302 = new Lego([655302], "Technic Axle 1.5 with Perpendicular Axle Connector (Technic Pole Reverser Handle)", "Light Gray");
const l4186007 = new Lego([4186007], "Technic Axle 3", "Light Gray");
const l3200002 = new Lego([3200002], "Technic Brick 1 x 2 [2 Holes]", "Light Gray");
const l370102 = new Lego([370102], "Technic Brick 1 x 4 [3 Holes]", "Light Gray");
const l4141499 = new Lego([4141499], "Technic Brick 4 x 4 Open Center", "Light Gray");
const l371302 = new Lego([371302,659002,4125313], "Technic Bush", "Light Gray");
const l4141455 = new Lego([4141455], "Technic Gear 20 Tooth Double Bevel with Axle Hole Type 2 [X Opening]", "Light Gray");
const l367302 = new Lego([367302,4184166], "Technic Pin without Friction Ridges Lengthwise", "Light Gray");
const l281902 = new Lego([281902,4113032], "Technic Steering Wheel Small (3 Studs Diameter)", "Light Gray");
const l4 = new Lego([4], "Tile 1 x 2 with Stylised Computer Console Print", "Light Gray");
const l243102 = new Lego([243102], "Tile 1 x 4 with Groove", "Light Gray");
const l5 = new Lego([5], "Tile Round 2 x 2 with Fine Mesh Grill Print", "Light Gray");
const l6 = new Lego([6], "Tile Special 1 x 1 with Clip and Straight Tips", "Light Gray");
const l243202 = new Lego([243202], "Tile Special 1 x 2 with Handle", "Light Gray");
const l4116842 = new Lego([4116842], "Tile Special 2 x 2 with Bar and Stud", "Light Gray");
const l7 = new Lego([7], "Turntable 2 x 2 Plate - Top", "Light Gray");
const l4160344 = new Lego([4160344], "Wedge 4 x 2 Left", "Light Gray");
const l4160326 = new Lego([4160326], "Wedge 4 x 2 Right", "Light Gray");
const l330705 = new Lego([330705,4114073], "Brick Arch 1 x 6 x 2 - Thick Top with Reinforced Underside", "Tan");
const l306205 = new Lego([306205,4117070], "Brick Round 1 x 1 Open Stud", "Tan");
const l4114053 = new Lego([4114053,4218749], "Brick Special 1 x 2 Palisade [aka Log]", "Tan");
const l4114055 = new Lego([4114055,4219064,4523148], "Brick Special 1 x 4 Palisade [aka Log]", "Tan");
const l362305 = new Lego([362305,4121921], "Plate 1 x 3", "Tan");
const l4107588 = new Lego([4107588,4188158,6097342,6185313], "Plate 6 x 12", "Tan");
const l4140562 = new Lego([4140562], "Plate Round 2 x 2 with Axle Hole Type 1 (+ Opening)", "Tan");
const l254005 = new Lego([254005,4125271,4140593], "Plate Special 1 x 2 Side Handle [Free Ends]", "Tan");
const l65625 = new Lego([65625,4133591,4186017,4666579], "Technic Axle Pin without Friction Ridges Lengthwise", "Tan");
const l654105 = new Lego([654105,4179771], "Technic Brick 1 x 1 with Hole", "Tan");
const l4108151 = new Lego([4108151,4157277], "Tile 1 x 6 with Groove", "Tan");
const l416205 = new Lego([416205,4219560,4254817,4544139], "Tile 1 x 8 with Groove", "Tan");
const l4185177 = new Lego([4185177], "Tile 2 x 2 with Groove", "Tan");
const l8 = new Lego([8], "Windscreen 3 x 6 x 5 Bubble with Studs on Top with Octagonal Light Gray Lines Print", "Trans-Brown");
const l306510 = new Lego([306510,306540,6244904], "Brick 1 x 2 without Bottom Tube", "Trans-Clear");
const l3006840 = new Lego([3006840,6223655], "Brick Round 1 x 1 Open Stud", "Trans-Clear");
const l4124073 = new Lego([4124073,6170187], "Bar 4L (Lightsaber Blade / Wand)", "Trans-Light Blue");
const l4101716 = new Lego([4101716,4163917,4223211,4227683,6240225], "Plate Round 1 x 1 with Solid Stud", "Trans-Light Blue");
const l4107106 = new Lego([4107106,4130379,6238675], "Brick Round 1 x 1 Open Stud", "Trans-Neon Green");
const l614149 = new Lego([614149,3005749,6240223], "Plate Round 1 x 1 with Solid Stud", "Trans-Neon Green");
const l3006447 = new Lego([3006447,4129565,4560958], "Antenna 1 x 4 with Rounded Top", "Trans-Neon Orange");
const l4153468 = new Lego([4153468,4219576], "Brick 1 x 4 without Bottom Tubes", "Trans-Neon Orange");
const l614147 = new Lego([614147,3005747,6240218], "Plate Round 1 x 1 with Solid Stud", "Trans-Neon Orange");
const l4109765 = new Lego([4109765,4141741,6124829,6250159], "Tile Special 1 x 2 Grille with Bottom Groove", "Trans-Neon Orange");
const l4124108 = new Lego([4124108,6167284], "Bar 4L (Lightsaber Blade / Wand)", "Trans-Red");
const l3006841 = new Lego([3006841,6238673], "Brick Round 1 x 1 Open Stud", "Trans-Red");
const l614141 = new Lego([614141,3005741,6208450], "Plate Round 1 x 1 with Solid Stud", "Trans-Red");
const l241241 = new Lego([241241,3024441,4118775,4187759,4190187,6250158], "Tile Special 1 x 2 Grille with Bottom Groove", "Trans-Red");
const l300401 = new Lego([300401,4613964], "Brick 1 x 2", "White");
const l300901 = new Lego([300901,300951], "Brick 1 x 6", "White");
const l300301 = new Lego([300301,4103592], "Brick 2 x 2", "White");
const l235701 = new Lego([235701,235751], "Brick 2 x 2 Corner", "White");
const l300101 = new Lego([300101], "Brick 2 x 4", "White");
const l614301 = new Lego([614301], "Brick Round 2 x 2 with Axle Hole", "White");
const l4203583 = new Lego([4203583], "Brick Round 4 x 4 with 4 Side Pin Holes and Center Axle Hole", "White");
const l4143254 = new Lego([4143254], "Brick Special 1 x 4 with 4 Studs on One Side", "White");
const l302101 = new Lego([302101], "Plate 2 x 3", "White");
const l379501 = new Lego([379501], "Plate 2 x 6", "White");
const l265401 = new Lego([265401,4278271], "Plate Round 2 x 2 with Rounded Bottom [Boat Stud]", "White");
const l9 = new Lego([9], "Seat / Chair 2 x 2", "White");
const l428601 = new Lego([428601], "Slope 33° 3 x 1", "White");
const l10 = new Lego([10], "Slope 75° 2 x 1 x 3 with Open Stud", "White");
const l4143976 = new Lego([4143976], "Slope 75° 2 x 2 x 3 [Hollow Studs]", "White");
const l366001 = new Lego([366001], "Slope Inverted 45° 2 x 2 [Ovoid Bottom Pin, Bar-sized Stud Holes]", "White");
const l4140502 = new Lego([4140502,4219172], "Technic Worm Gear", "White");
const l243101 = new Lego([243101], "Tile 1 x 4 with Groove", "White");
const l663601 = new Lego([663601], "Tile 1 x 6 with Groove", "White");
const l416201 = new Lego([416201], "Tile 1 x 8 with Groove", "White");
const l415001 = new Lego([415001], "Tile Round 2 x 2 with Bottom Cross", "White");
const l11 = new Lego([11], "Turntable 4 x 4 Locking Grooved Base", "White");
const l4143673 = new Lego([4143673,4545335], "Turntable 4 x 4 Top, Locking", "White");
const l4141630 = new Lego([4141630], "Plate Special 1 x 2 with Door Rail", "Yellow");
const l12 = new Lego([12], "Minifig Head Plain [Blocked Open Stud]", "Black");
const l13 = new Lego([13], "Hips and Light Gray Legs with Boba Fett Print", "Brown");
const l4140068 = new Lego([4140068], "Helmet, Rocket Pack with Boba Fett Colors Print, Dark Brown Highlights", "Green");
const l14 = new Lego([14], "Torso Armor Plates Green Print (Boba Fett), Light Gray Arms Printed, Dark Gray Hands", "Light Gray");
const l4124172 = new Lego([4124172], "Helmet Darth Vader", "Black");
const l9339 = new Lego([9339,4569093], "Hips and Black Legs", "Black");
const l4124171 = new Lego([4124171,4543045,6010593,6106296,6335646], "Neckwear Cape, Standard [Traditional Starched Fabric]", "Black");
const l4275310 = new Lego([4275310], "Torso Darth Vader (Basic) Print, Black Arms and Hands", "Black");
const l15 = new Lego([15], "Minifig Head Darth Vader, Scars Gray Left, Eyebrows Print [Blocked Open Stud]", "Light Gray");
const l16 = new Lego([16], "Torso Vest and White Shirt Print (Han Solo), Tan Arms, Yellow Hands", "Black");
const l390125 = new Lego([390125,390175], "Hair, Smooth", "Brown");
const l17 = new Lego([17], "Hips and Brown Legs with Gunbelt Print", "Brown");
const l18 = new Lego([18], "Minifig Head Han Solo, Smirk and Brown Eyebrows Print [Blocked Open Stud]", "Yellow");
const l390126 = new Lego([390126,390176], "Hair, Smooth", "Black");
const l4219380 = new Lego([4219380], "Minifig Head Lando Calrissian, Moustache Thin, Standard Grin, Eyebrows, Small Eyelashes Print", "Brown");
const l19 = new Lego([19], "Torso V-Collar Shirt and Dark Blue Trim Print (Lando Calrissian), Medium Blue Arms, Brown Hands", "Medium Blue");
const l20 = new Lego([20], "Neckwear Cape, Standard with Blue Back [Traditional Starched Fabric]", "Yellow");
const l21 = new Lego([21], "Hips and Tan Legs with Pockets, Silver Belt Buckle Print", "Brown");
const l4124069 = new Lego([4124069], "Hair, Smooth", "Tan");
const l4275334 = new Lego([4275334], "Torso Shirt Front Seamed with Patch Pockets Print, Tan Arms, Yellow Hands", "Tan");
const l22 = new Lego([22], "Minifig Head Luke Skywalker, Small Black Eyebrows and Chin Dimple Print [Blocked Open Stud]", "Yellow");
const l23 = new Lego([23], "Hair Long and Half Braided", "Brown");
const l24 = new Lego([24], "Hips and Brown Legs", "Brown");
const l25 = new Lego([25], "Torso Vest with Dark Orange Shirt Print (Leia), Brown Arms, Yellow Hands", "White");
const l26 = new Lego([26], "Minifig Head, Red Lips Small Eyebrows Print [Blocked Open Stud]", "Yellow");
const l74326 = new Lego([74326,4582628], "Hips and White Legs", "Black");
const l27 = new Lego([27], "Helmet Stormtrooper, Dark Blue Vents Print", "White");
const l4275255 = new Lego([4275255], "Torso Armour Stormtrooper Print, White Arms, Black Hands", "White");
const l28 = new Lego([28], "Minifig Head Plain [Blocked Open Stud]", "Yellow");
const l246526 = new Lego([246526,246576], "Brick 1 x 16", "Black");
const l420226 = new Lego([420226,4227815], "Brick 4 x 12", "Black");
const l4110045 = new Lego([4110045], "Brick, Modified 4 x 10 with Cut Corners", "Black");
const l4209683 = new Lego([4209683], "Cockpit 10 x 6 x 2 Curved", "Black");
const l4143372 = new Lego([4143372], "Hinge Cylinder 1 x 2 Locking with 2 Fingers, 9 Teeth and Axle Hole on Ends with Slots", "Black");
const l302326 = new Lego([302326], "Plate 1 x 2", "Black");
const l303126 = new Lego([303126,4243819], "Plate 4 x 4", "Black");
const l303326 = new Lego([303326], "Plate 6 x 10", "Black");
const l4185583 = new Lego([4185583], "Slope 18 4 x 2", "Black");
const l428626 = new Lego([428626], "Slope 33 3 x 1", "Black");
const l655326 = new Lego([655326,4107765], "Technic, Axle 2L with Reverser Handle Axle Connector", "Black");
const l370526 = new Lego([370526], "Technic, Axle 4L", "Black");
const l370626 = new Lego([370626], "Technic, Axle 6L", "Black");
const l370726 = new Lego([370726], "Technic, Axle 8L", "Black");
const l373726 = new Lego([373726], "Technic, Axle 10L", "Black");
const l4107085 = new Lego([4107085,6284699], "Technic, Axle and Pin Connector Angled #1", "Black");
const l653826 = new Lego([653826,4107083,4113805], "Technic, Axle Connector 2L (Ridged with x Hole x Orientation)", "Black");
const l370026 = new Lego([370026], "Technic, Brick 1 x 2 with Hole", "Black");
const l370126 = new Lego([370126], "Technic, Brick 1 x 4 with Holes", "Black");
const l389426 = new Lego([389426], "Technic, Brick 1 x 6 with Holes", "Black");
const l370226 = new Lego([370226], "Technic, Brick 1 x 8 with Holes", "Black");
const l389526 = new Lego([389526], "Technic, Brick 1 x 12 with Holes", "Black");
const l370326 = new Lego([370326], "Technic, Brick 1 x 16 with Holes", "Black");
const l3253226 = new Lego([3253226, 4144026, 4162897, 4188143, 6448394], "Technic, Brick 6 x 8 Open Center", "Black");
const l3252326 = new Lego([3252326, 4142822], "Technic, Liftarm Thick 1 x 3", "Black");
const l4140429 = new Lego([4140429, 4142135], "Technic, Liftarm Thick 1 x 5", "Black");
const l4049026 = new Lego([4049026, 4154767, 4542788, 4645732], "Technic, Liftarm Thick 1 x 9", "Black");
const l4128603 = new Lego([4128603, 4542573], "Technic, Liftarm Thick 1 x 15", "Black");
const l4156980 = new Lego([4156980, 4563044], "Technic, Liftarm, Modified Crank / Pin 1 x 3 - Axle Holes", "Black");
const l655826 = new Lego([655826], "Technic, Pin 3L with Friction Ridges", "Black");
const l4144024 = new Lego([4144024], "Technic, Pin Connector Plate 1 x 2 x 1 2/3 with 2 Holes (Double on Top)", "Black");
const l4144023 = new Lego([4144023], "Technic, Pin Connector Plate with One Hole (Single on Bottom)", "Black");
const l4119589 = new Lego([4119589], "Technic, Pin Double with Axle Hole", "Black");
const l278026 = new Lego([278026, 4121715, 6279875], "Technic, Pin with Short Friction Ridges", "Black");
const l3200126 = new Lego([3200126], "Technic, Plate 2 x 6 with 5 Holes", "Black");
const l656526 = new Lego([656526, 4527766], "Wedge 3 x 2 Left", "Black");
const l656426 = new Lego([656426, 4526931], "Wedge 3 x 2 Right", "Black");
const l4160349 = new Lego([4160349, 4644755, 6078889], "Wedge 4 x 2 Left", "Black");
const l4200486 = new Lego([4200486], "Wedge 16 x 4 Triple Curved with Reinforcements", "Black");
const l4251394 = new Lego([4251394], "Wedge, Plate 8 x 3 Pentagonal Left", "Black");
const l4251393 = new Lego([4251393], "Wedge, Plate 8 x 3 Pentagonal Right", "Black");
const l29 = new Lego([29], "Ball, Bionicle Zamor Sphere with Marbled Trans-Bright Green Pattern", "Bright Green");
const l4578106 = new Lego([4578106], "Slope 45 2 x 1 Double / Inverted with Bottom Stud Holder", "Dark Blue");
const l4194991 = new Lego([4194991], "Technic, Axle Connector 2 x 3 with Ball Joint Socket - Open Sides, Angled Forks with Closed Axle Holes", "Dark Blue");
const l4205004 = new Lego([4205004], "Tile 2 x 2 with Groove", "Dark Blue");
const l4278114 = new Lego([4278114, 4503726], "Windscreen 10 x 6 x 2 Curved", "Dark Blue");
const l4288824 = new Lego([4288824], "Baseplate, Raised 16 x 16 No Studs with Cross Opening, 4 Holes, Marbled Red, Light Gray, Black Pattern", "Dark Bluish Gray");
const l4210978 = new Lego([4210978], "Brick 1 x 2 x 2 with Inside Axle Holder", "Dark Bluish Gray");
const l4211060 = new Lego([4211060], "Brick 2 x 2", "Dark Bluish Gray");
const l4211105 = new Lego([4211105], "Brick 2 x 3", "Dark Bluish Gray");
const l4210697 = new Lego([4210697, 6276873], "Brick, Modified 1 x 2 with Pins", "Dark Bluish Gray");
const l4210892 = new Lego([4210892], "Hinge Plate 1 x 2 Locking with 1 Finger on Side, with Groove", "Dark Bluish Gray");
const l4210650 = new Lego([4210650, 4292000], "Hose, Soft Axle 11L", "Dark Bluish Gray");
const l4211094 = new Lego([4211094], "Plate 2 x 2", "Dark Bluish Gray");
const l4211065 = new Lego([4211065], "Plate 2 x 4", "Dark Bluish Gray");
const l4210997 = new Lego([4210997], "Plate 2 x 8", "Dark Bluish Gray");
const l4210802 = new Lego([4210802], "Plate 8 x 8", "Dark Bluish Gray");
const l4299022 = new Lego([4299022], "Plate, Modified 8 x 8 with Grille and Hole in Center", "Dark Bluish Gray");
const l4210637 = new Lego([4210637], "Slope 18 4 x 2", "Dark Bluish Gray");
const l4211054 = new Lego([4211054], "Slope 45 2 x 2", "Dark Bluish Gray");
const l4210779 = new Lego([4210779], "Slope, Curved 6 x 1 Inverted", "Dark Bluish Gray");
const l4263624 = new Lego([4263624, 4508553], "Technic, Axle 5.5L with Stop", "Dark Bluish Gray");
const l4211137 = new Lego([4211137], "Technic, Brick 1 x 14 with Holes", "Dark Bluish Gray");
const l4210751 = new Lego([4210751, 32523199], "Technic, Liftarm Thick 1 x 3", "Dark Bluish Gray");
const l4210755 = new Lego([4210755, 4534914, 4603472], "Technic, Liftarm Thick 1 x 11", "Dark Bluish Gray");
const l4289258 = new Lego([4289258, 4503381], "Technic, Liftarm, Modified Ball Joint Angled 1 x 2", "Dark Bluish Gray");
const l4211053 = new Lego([4211053], "Tile 1 x 4", "Dark Bluish Gray");
const l4211055 = new Lego([4211055], "Tile 2 x 2 with Groove", "Dark Bluish Gray");
const l4211129 = new Lego([4211129, 6313189], "Tile, Modified 2 x 2 with Pin", "Dark Bluish Gray");
const l4210866 = new Lego([4210866], "Wedge 4 x 2 Triple Left", "Dark Bluish Gray");
const l4210867 = new Lego([4210867], "Wedge 4 x 2 Triple Right", "Dark Bluish Gray");
const l4210786 = new Lego([4210786, 4662199], "Wedge 6 x 2 Inverted Left", "Dark Bluish Gray");
const l4210785 = new Lego([4210785, 4662198], "Wedge 6 x 2 Inverted Right", "Dark Bluish Gray");
const l4180470 = new Lego([4180470, 4636417], "Wedge 6 x 4 Triple Inverted Curved", "Dark Bluish Gray");
const l4210984 = new Lego([4210984], "Wedge, Plate 3 x 6 Cut Corners", "Dark Bluish Gray");
const l4163454 = new Lego([4163454, 4539102], "Brick 1 x 2", "Dark Red");
const l4228230 = new Lego([4228230, 6212048], "Brick 1 x 2 x 5 - Blocked Open Studs, Hollow Studs", "Dark Red");
const l4183880 = new Lego([4183880, 4539099], "Brick, Round 1 x 1 Open Stud", "Dark Red");
const l4267885 = new Lego([4267885, 4508455, 4541384], "Dinosaur Tail End Section / Horn", "Dark Red");
const l30 = new Lego([30], "Slope 75° 2 x 1 x 3 with Open Stud", "Dark Red");
const l4276180 = new Lego([4276180, 4539103, 6267413], "Slope, Inverted 75 2 x 1 x 3", "Dark Red");
const l4211499 = new Lego([4211499, 4518652, 4529241], "Cone 1 x 1 without Top Groove", "Light Bluish Gray");
const l4211515 = new Lego([4211515, 6146223], "Panel 1 x 2 x 1", "Light Bluish Gray");
const l4211396 = new Lego([4211396], "Plate 2 x 3", "Light Bluish Gray");
const l4211763 = new Lego([4211763, 4237084, 6276848], "Plate, Modified 2 x 2 with Pin on Bottom", "Light Bluish Gray");
const l4211728 = new Lego([4211728, 6038002], "Slope 55 6 x 1 x 5 without Bottom Stud Holders", "Light Bluish Gray");
const l4215353 = new Lego([4215353, 4234535], "Slope 65 2 x 2 x 2 with Bottom Tube", "Light Bluish Gray");
const l4211622 = new Lego([4211622, 6271817, 6275844], "Technic Bush", "Light Bluish Gray");
const l4211573 = new Lego([4211573, 6271165], "Technic Bush 1/2 Smooth", "Light Bluish Gray");
const l4211815 = new Lego([4211815], "Technic, Axle 3L", "Light Bluish Gray");
const l4211639 = new Lego([4211639, 32073194], "Technic, Axle 5L", "Light Bluish Gray");
const l4211567 = new Lego([4211567, 6346487], "Technic, Axle and Pin Connector Angled #2 - 180 degrees", "Light Bluish Gray");
const l4211779 = new Lego([4211779, 6273724], "Technic, Axle and Pin Connector Perpendicular 3L with 2 Pin Holes", "Light Bluish Gray");
const l4211543 = new Lego([4211543], "Technic, Axle Connector 2L (Ridged with x Hole x Orientation)", "Light Bluish Gray");
const l4211553 = new Lego([4211553, 6380605], "Technic, Axle Connector with Axle Hole", "Light Bluish Gray");
const l4211705 = new Lego([4211705], "Technic, Brick 1 x 14 with Holes", "Light Bluish Gray");
const l4211634 = new Lego([4211634, 32270194], "Technic, Gear 12 Tooth Double Bevel", "Light Bluish Gray");
const l4211885 = new Lego([4211885, 6031956, 6359714], "Technic, Gear 20 Tooth Bevel", "Light Bluish Gray");
const l4211635 = new Lego([4211635, 32269194], "Technic, Gear 20 Tooth Double Bevel", "Light Bluish Gray");
const l4211565 = new Lego([4211565], "Technic, Gear 24 Tooth with 1 Axle Hole", "Light Bluish Gray");
const l4211510 = new Lego([4211510], "Technic, Gear Worm Screw, Long", "Light Bluish Gray");
const l4211741 = new Lego([4211741, 6348143], "Technic, Liftarm Thin 1 x 2 - Axle Holes", "Light Bluish Gray");
const l4211483 = new Lego([4211483, 4274194], "Technic, Pin 1/2 without Friction Ridges", "Light Bluish Gray");
const l3673194 = new Lego([3673194, 4211807], "Technic, Pin without Friction Ridges", "Light Bluish Gray");
const l4211444 = new Lego([4211444], "Technic, Plate 2 x 4 with 3 Holes", "Light Bluish Gray");
const l4211449 = new Lego([4211449], "Technic, Plate 2 x 8 with 7 Holes", "Light Bluish Gray");
const l4279763 = new Lego([4279763], "Bionicle Mask Olmak", "Pearl Gold");
const l4287937 = new Lego([4287937], "Bionicle Weapon Piraka Drill and Buzz Saw Combination (Reidak)", "Pearl Gold");
const l4175938 = new Lego([4175938, 4236020, 4284479], "Bionicle Claw with Axle", "Pearl Light Gray");
const l4276534 = new Lego([4276534, 4296786], "Bionicle Foot Piraka Mechanical", "Pearl Light Gray");
const l4256503 = new Lego([4256503, 4287623], "Bionicle Foot Visorak with 3 Pin Holes", "Pearl Light Gray");
const l4252695 = new Lego([4252695, 4293395], "Bionicle Visorak Fang with 2 Pin Holes (Oohnorak)", "Pearl Light Gray");
const l4178663 = new Lego([4178663, 4284482], "Bionicle Weapon Air Katana", "Pearl Light Gray");
const l4279767 = new Lego([4279767, 4494303], "Bionicle Weapon Axonn Giant Axe Half", "Pearl Light Gray");
const l4279768 = new Lego([4279768, 4494492], "Bionicle Weapon Lava Chamber Gate Sword", "Pearl Light Gray");
const l4194984 = new Lego([4194984, 4222133, 4284459, 4565908], "Bionicle Weapon Rahkshi Staff of Disintegration (Guurahk)", "Pearl Light Gray");
const l4194983 = new Lego([4194983, 4222150, 4287617], "Bionicle Weapon Rahkshi Staff of Shattering (Panrahk)", "Pearl Light Gray");
const l4227872 = new Lego([4227872, 4296110], "Bionicle Weapon Vahki Staff of Command (Nuurakh)", "Pearl Light Gray");
const l4288100 = new Lego([4288100, 4494490], "Bionicle Zamor Sphere Launcher", "Pearl Light Gray");
const l4275510 = new Lego([4275510, 4296111], "Minifigure, Weapon Bionicle Mini Staff (Whenua)", "Pearl Light Gray");
const l31 = new Lego([31], "Weapon Axe (Toa Nuparu)", "Pearl Light Gray");
const l4288839 = new Lego([4288839], "Weapon Axe Head (Piraka Vezok)", "Pearl Light Gray");
const l32 = new Lego([32], "Weapon Axe Head (Toa Hahli)", "Pearl Light Gray");
const l33 = new Lego([33], "Weapon Blade (Piraka Avak)", "Pearl Light Gray");
const l34 = new Lego([34], "Weapon Blade (Toa Kongu)", "Pearl Light Gray");
const l35 = new Lego([35], "Weapon Blade, Double (Piraka Hakann)", "Pearl Light Gray");
const l36 = new Lego([36], "Weapon Claw (Toa Hewkii)", "Pearl Light Gray");
const l37 = new Lego([37], "Weapon Hammer (Piraka Reidak)", "Pearl Light Gray");
const l38 = new Lego([38], "Weapon Saw, Circular (Toa Matoro)", "Pearl Light Gray");
const l39 = new Lego([39], "Weapon Staff (Piraka Zaktan)", "Pearl Light Gray");
const l40 = new Lego([40], "Weapon Sword (Piraka Thok)", "Pearl Light Gray");
const l41 = new Lego([41], "Weapon Sword (Toa Jaller)", "Pearl Light Gray");
const l4276053 = new Lego([4276053, 4568388, 6270107], "Barb / Claw / Horn / Tooth - Small", "Red");
const l302021 = new Lego([302021], "Plate 2 x 4", "Red");
const l4142865 = new Lego([4142865], "Technic, Axle 2L Notched", "Red");
const l4140806 = new Lego([4140806, 6347789], "Technic, Pin 3L with Friction Ridges and Stop Bush", "Red");
const l4296577 = new Lego([4296577, 4297031, 6024162], "Ball, Bionicle Zamor Sphere", "Trans-Medium Blue");
const l4233225 = new Lego([4233225], "Technic, Axle 16L", "White");
const l70905 = new Lego([70905, 4544151], "Rubber Belt Extra Large (Round Cross Section) - Approx. 5 x 5", "Yellow");
const l4222196 = new Lego([4222196], "Bar 1L with Clip", "Dark Bluish Gray");
const l4288111 = new Lego([4288111, 4541552, 4626928], "Arm Mechanical with Clip [Thin Support]", "Dark Red");
const l4294538 = new Lego([4294538], "Legs Mechanical, Bionicle", "Dark Red");
const l4296949 = new Lego([4296949], "Minifig Head Special, Bionicle Piraka Hakann with Eyes and Teeth Print", "Dark Red");
const l4294145 = new Lego([4294145, 4541488], "Plant / Creature Body Part, Vine / Tail / Tentacle / Bionicle Spine, Spiky", "Dark Red");
const l4294141 = new Lego([4294141], "Torso Mechanical, Bionicle", "Pearl Dark Gray");
const l4294996 = new Lego([4294996, 4623154], "Arm Mechanical with Clip [Thin Support]", "Black");
const l4294543 = new Lego([4294543], "Legs Mechanical, Bionicle", "Black");
const l4296954 = new Lego([4296954], "Minifig Head Special, Bionicle Piraka Reidak with Eyes and Teeth Print", "Black");
const l4288838 = new Lego([4288838, 6024295], "Plant / Creature Body Part, Vine / Tail / Tentacle / Bionicle Spine, Spiky", "Black");
const l4294140 = new Lego([4294140], "Torso Mechanical, Bionicle", "Pearl Gold");
const l4288836 = new Lego([4288836, 4494495], "Torso Mechanical, Bionicle", "Pearl Light Gray");
const l4294993 = new Lego([4294993], "Arm Mechanical with Clip [Thin Support]", "Very Light Bluish Gray");
const l4294537 = new Lego([4294537], "Legs Mechanical, Bionicle", "Very Light Bluish Gray");
const l4296955 = new Lego([4296955], "Minifig Head Special, Bionicle Piraka Thok", "Very Light Bluish Gray");
const l4294150 = new Lego([4294150], "Plant / Creature Body Part, Vine / Tail / Tentacle / Bionicle Spine, Spiky", "Very Light Bluish Gray");
const l4294995 = new Lego([4294995], "Arm Mechanical with Clip [Thin Support]", "Dark Green");
const l4294542 = new Lego([4294542], "Legs Mechanical, Bionicle", "Dark Green");
const l4296952 = new Lego([4296952], "Minifig Head Special, Bionicle Piraka Zaktan with Eyes and Teeth Print", "Dark Green");
const l4294148 = new Lego([4294148, 6369999], "Plant / Creature Body Part, Vine / Tail / Tentacle / Bionicle Spine, Spiky", "Dark Green");
const l4296947 = new Lego([4296947], "Arm Mechanical with Clip [Thin Support]", "Dark Blue");
const l4294541 = new Lego([4294541], "Legs Mechanical, Bionicle", "Dark Blue");
const l4298919 = new Lego([4298919], "Minifig Head Special, Bionicle Inika Toa Hahli with Lime Eyes Print", "Dark Blue");
const l4296946 = new Lego([4296946], "Arm Mechanical with Clip [Thin Support]", "Bright Light Orange");
const l4296943 = new Lego([4296943], "Legs Mechanical, Bionicle", "Bright Light Orange");
const l4297126 = new Lego([4297126, 4298923], "Minifig Head Special, Bionicle Inika Toa Hewkii", "Pearl Dark Gray");
const l4298916 = new Lego([4298916], "Minifig Head Special, Bionicle Inika Toa Jaller Print", "Dark Red");
const l4297125 = new Lego([4297125, 4298922], "Minifig Head Special, Bionicle Inika Toa Nuparu", "Black");
const l4294550 = new Lego([4294550], "Torso Mechanical, Bionicle", "Black");
const l233526 = new Lego([233526, 4523405, 6011815], "Flag 2 x 2 Square", "Black");
const l366626 = new Lego([366626], "Plate 1 x 6", "Black");
const l242026 = new Lego([242026], "Plate 2 x 2 Corner", "Black");
const l303426 = new Lego([303426], "Plate 2 x 8", "Black");
const l254026 = new Lego([254026, 4140588], "Plate, Modified 1 x 2 with Bar Handle on Side - Free Ends", "Black");
const l366526 = new Lego([366526], "Slope, Inverted 45 2 x 1", "Black");
const l4142816 = new Lego([4142816], "Sports Minifigure Stand Soccer with Spring and Green Pin", "Black");
const l4107558 = new Lego([4107558], "Technic, Brick 1 x 14 with Holes", "Black");
const l4111998 = new Lego([4111998, 6271152], "Technic, Liftarm, Modified Bent Thick 1 x 11.5 Double", "Black");
const l370926 = new Lego([370926], "Technic, Plate 2 x 4 with 3 Holes", "Black");
const l306826 = new Lego([306826], "Tile 2 x 2 with Groove", "Black");
const l4211066 = new Lego([4211066], "Hinge Brick 1 x 2 Base", "Dark Bluish Gray");
const l4211001 = new Lego([4211001], "Plate 1 x 4", "Dark Bluish Gray");
const l4211119 = new Lego([4211119], "Plate, Modified 1 x 2 with 1 Stud without Groove (Jumper)", "Dark Bluish Gray");
const l4225733 = new Lego([4225733], "Plate, Modified 2 x 3 with Hole", "Dark Bluish Gray");
const l4244373 = new Lego([4244373, 4504378], "Slope 30 1 x 1 x 2/3", "Dark Bluish Gray");
const l4211135 = new Lego([4211135], "Slope 45 2 x 1", "Dark Bluish Gray");
const l4211000 = new Lego([4211000], "Slope, Inverted 45 2 x 2 with Flat Bottom Pin", "Dark Bluish Gray");
const l3894199 = new Lego([3894199, 4210917], "Technic, Brick 1 x 6 with Holes", "Dark Bluish Gray");
const l4210631 = new Lego([4210631], "Tile, Modified 1 x 2 Grille with Bottom Groove / Lip", "Dark Bluish Gray");
const l4210788 = new Lego([4210788], "Wedge, Plate 4 x 2 Left", "Dark Bluish Gray");
const l4210782 = new Lego([4210782], "Wedge, Plate 4 x 2 Right", "Dark Bluish Gray");
const l4490374 = new Lego([4490374, 6034887, 6264148], "Wheel Wagon Viking with 12 Holes (55mm D.)", "Dark Bluish Gray");
const l4211438 = new Lego([4211438], "Plate 1 x 6", "Light Bluish Gray");
const l4211397 = new Lego([4211397], "Plate 2 x 2", "Light Bluish Gray");
const l4211568 = new Lego([4211568], "Plate, Modified 1 x 2 with Door Rail", "Light Bluish Gray");
const l4211503 = new Lego([4211503], "Tap 1 x 1 with Hole in Nozzle End", "Light Bluish Gray");
const l4211599 = new Lego([4211599, 4233493, 6206249], "Technic, Brick 1 x 2 with Axle Hole", "Light Bluish Gray");
const l4211688 = new Lego([4211688, 4563045], "Technic, Liftarm, Modified Crank / Pin 1 x 3 - Axle Holes", "Light Bluish Gray");
const l4211709 = new Lego([4211709], "Technic, Pin 3L without Friction Ridges", "Light Bluish Gray");
const l4211794 = new Lego([4211794], "Wedge, Plate 3 x 2 Left", "Light Bluish Gray");
const l4211791 = new Lego([4211791], "Wedge, Plate 3 x 2 Right", "Light Bluish Gray");
const l4278076 = new Lego([4278076], "Minifigure, Weapon Sword, Greatsword Angular", "Metallic Gold");
const l4267358 = new Lego([4267358, 4278811], "Minifigure, Weapon Pike / Spear - Round End", "Pearl Light Gray");
const l4226318 = new Lego([4226318, 4278077], "Minifigure, Weapon Sword, Greatsword Angular", "Pearl Light Gray");
const l449521 = new Lego([449521], "Flag 4 x 1 Wave Left", "Red");
const l4178640 = new Lego([4178640, 4290714], "Technic Ball Joint", "Red");
const l4227155 = new Lego([4227155, 6271820], "Technic Bush", "Red");
const l4125189 = new Lego([4125189], "Technic, Axle Connector 2L (Ridged with x Hole x Orientation)", "Red");
const l4186678 = new Lego([4186678, 6371442], "Technic, Liftarm Thin 1 x 2 - Axle Holes", "Red");
const l75854 = new Lego([75854], "Technic, Pin Connector Round 2L without Slot (Pin Joiner Round)", "Red");
const l4211236 = new Lego([4211236, 4262974, 6116613], "Bar 4L (Lightsaber Blade / Wand)", "Reddish Brown");
const l4211294 = new Lego([4211294], "Bar 6.6L with Stop Ring (Patio Umbrella Stand)", "Reddish Brown");
const l4211147 = new Lego([4211147, 6249791, 6278989], "Container, Barrel 2 x 2 x 2", "Reddish Brown");
const l4211162 = new Lego([4211162, 4280114, 4533101], "Container, Treasure Chest Bottom with Slots in Back", "Reddish Brown");
const l4211163 = new Lego([4211163, 6167676, 6254220], "Container, Treasure Chest Lid Curved with Thick Hinge", "Reddish Brown");
const l4211152 = new Lego([4211152], "Plate 1 x 3", "Reddish Brown");
const l4216945 = new Lego([4216945], "Plate 1 x 8", "Reddish Brown");
const l4211247 = new Lego([4211247], "Plate 2 x 6", "Reddish Brown");
const l4211159 = new Lego([4211159], "Plate, Round 2 x 2 with Axle Hole", "Reddish Brown");
const l4490372 = new Lego([4490372], "Tile 1 x 4 with Viking Snakes Pattern", "Reddish Brown");
const l4205470 = new Lego([4205470], "Wedge, Plate 4 x 2 Left", "Reddish Brown");
const l4205469 = new Lego([4205469], "Wedge, Plate 4 x 2 Right", "Reddish Brown");
const l4209002 = new Lego([4209002, 6035545], "Wedge, Plate 12 x 3 Left", "Reddish Brown");
const l4209012 = new Lego([4209012, 6035538], "Wedge, Plate 12 x 3 Right", "Reddish Brown");
const l4272994 = new Lego([4272994], "Minifigure, Weapon Axe, Halberd", "Speckle Black-Silver");
const l4273893 = new Lego([4273893], "Dish 4 x 4 Inverted (Radar) with Solid Stud with Viking Shield Blue / White Sections and Silver Ornament Pattern", "Tan");
const l4273892 = new Lego([4273892], "Dish 4 x 4 Inverted (Radar) with Solid Stud with Viking Shield Dark Red / Yellow Rune Pattern", "Tan");
const l4273891 = new Lego([4273891], "Dish 4 x 4 Inverted (Radar) with Solid Stud with Viking Shield Red / Blue with Black Ornament Pattern", "Tan");
const l4273896 = new Lego([4273896], "Dish 4 x 4 Inverted (Radar) with Solid Stud with Viking Shield Red / White Sections and Red Serpent Pattern", "Tan");
const l614105 = new Lego([614105, 4161734], "Plate, Round 1 x 1", "Tan");
const l4119483 = new Lego([4119483, 6247793], "Rock 1 x 1 Jewel 24 Facet", "Trans-Dark Blue");
const l4113955 = new Lego([4113955, 6247788], "Rock 1 x 1 Jewel 24 Facet", "Trans-Green");
const l6247790 = new Lego([6247790, 41145051], "Rock 1 x 1 Jewel 24 Facet", "Trans-Neon Green");
const l6270106 = new Lego([6270106, 4568387, 4273397], "Barb / Claw / Horn / Tooth - Small", "White");
const l306201 = new Lego([306201], "Brick, Round 1 x 1 Open Stud", "White");
const l4170326 = new Lego([4170326, 4237083, 4293876, 6313603], "Plate, Modified 2 x 2 with Pin on Bottom", "White");
const l234324 = new Lego([234324, 626924], "Minifigure, Utensil Goblet", "Yellow");
const l395726 = new Lego([395726], "Antenna 4H - Round Top", "Black");
const l245326 = new Lego([245326, 4144539], "Brick 1 x 1 x 5 - Blocked Open Stud or Hollow Stud", "Black");
const l459526 = new Lego([459526, 4190471, 4498907, 4523339], "Brick, Modified 1 x 2 x 2/3 with Studs on Sides", "Black");
const l4584274 = new Lego([4584274], "Brick, Modified Facet 2 x 2", "Black");
const l449726 = new Lego([449726], "Minifigure, Weapon Pike / Spear - Round End", "Black");
const l4114206 = new Lego([4114206], "Minifigure, Weapon Sword, Shamshir/Katana (Square Guard) with Uncapped Pommel and Hole in Hilt", "Black");
const l4550017 = new Lego([4550017, 4617547, 6330189], "Plate, Modified 1 x 1 with Open O Clip Thick (Vertical Grip)", "Black");
const l614126 = new Lego([614126], "Plate, Round 1 x 1", "Black");
const l4109969 = new Lego([4109969, 4551360, 6170085, 6251330], "Scorpion", "Black");
const l403223 = new Lego([403223], "Plate, Round 2 x 2 with Axle Hole", "Blue");
const l4211087 = new Lego([4211087], "Brick, Modified 1 x 2 with Pin", "Dark Bluish Gray");
const l4219836 = new Lego([4219836, 4539518, 4542586], "Minifigure, Weapon Knives, 2 on Sprue", "Dark Bluish Gray");
const l4182993 = new Lego([4182993, 4500517], "Plate, Round Corner 6 x 6", "Dark Bluish Gray");
const l4211111 = new Lego([4211111], "Technic, Brick 1 x 2 with Hole", "Dark Bluish Gray");
const l4536677 = new Lego([4536677, 6278987], "Container, Barrel 2 x 2 x 2", "Dark Brown");
const l4114348 = new Lego([4114348, 6248461, 6270003], "Plant Brick, Round 1 x 1 with 3 Bamboo Leaves", "Green");
const l4535738 = new Lego([4535738, 6319336], "Plate, Modified 1 x 2 with Clip on End (Horizontal Grip)", "Light Bluish Gray");
const l4523159 = new Lego([4523159], "Plate, Round 1 x 1", "Pearl Gold");
const l4563682 = new Lego([4563682, 6320327], "Brick, Modified 1 x 1 x 3 with 2 Clips (Vertical Grip) - Hollow Stud", "Red");
const l302321 = new Lego([302321], "Plate 1 x 2", "Red");
const l4588003 = new Lego([4588003, 6337002], "Plate, Modified 1 x 1 with Open O Clip Thick (Vertical Grip)", "Red");
const l4244371 = new Lego([4244371, 4504379, 5074621], "Slope 30 1 x 1 x 2/3", "Red");
const l4211200 = new Lego([4211200], "Brick 2 x 2 Corner", "Reddish Brown");
const l4507139 = new Lego([4507139, 4569088, 6280160], "Minifigure, Weapon Bow, Longbow with Arrow Drawn", "Reddish Brown");
const l4260486 = new Lego([4260486, 4504376], "Slope 30 1 x 1 x 2/3", "Reddish Brown");
const l4211219 = new Lego([4211219], "Tile, Modified 1 x 2 with Bar Handle", "Reddish Brown");
const l614101 = new Lego([614101], "Plate, Round 1 x 1", "White");
const l4515349 = new Lego([4515349], "Plate, Round 4 x 4 with Hole", "Yellow");
const l4612327 = new Lego([4612327, 4667794], "Hips and Black Legs with Gray Belt and Black Markings Print", "Black");
const l4612652 = new Lego([4612652, 4613387, 6023653], "Torso Robe, Brown Rope, Gold Medallion and Black Undershirt Print, Black Arms and Hands", "Black");
const l4114503 = new Lego([4114503, 4551359, 4569110, 4646772, 6030459], "Wrap, Ninja, with Clip", "Black");
const l4611426 = new Lego([4611426, 4613392, 6044996], "Minifig Head Cole, Raised Bushy Eyebrows, White Pupils, Chin Dimple Print", "Yellow");
const l4581280 = new Lego([4581280], "Arch 1 x 3 x 2", "Black");
const l233926 = new Lego([233926, 4159140, 4519925, 6075062], "Arch 1 x 5 x 4 - Continuous Bow", "Black");
const l4116854 = new Lego([4116854], "Arch 1 x 5 x 4 Inverted", "Black");
const l245426 = new Lego([245426], "Brick 1 x 2 x 5 - Blocked Open Studs or Hollow Studs", "Black");
const l300826 = new Lego([300826], "Brick 1 x 8", "Black");
const l4515356 = new Lego([4515356, 4533771], "Brick, Modified 1 x 1 with Open U Clip (Vertical Grip) - Solid Stud", "Black");
const l4558957 = new Lego([4558957], "Brick, Round 4 x 4 with Hole", "Black");
const l4533572 = new Lego([4533572, 4535834, 6337273], "Door, Frame 1 x 4 x 6 with 2 Holes on Top and Bottom", "Black");
const l452826 = new Lego([452826], "Minifigure, Utensil Frying Pan", "Black");
const l4537058 = new Lego([4537058], "Panel 1 x 4 x 5 Wall with Window", "Black");
const l3024626 = new Lego([3024626, 4271754], "Panel 3 x 4 x 6 Turret Wall with Window", "Black");
const l408526 = new Lego([408526], "Plate, Modified 1 x 1 with U Clip Thick (Vertical Grip)", "Black");
const l379426 = new Lego([379426], "Plate, Modified 1 x 2 with 1 Stud without Groove (Jumper)", "Black");
const l4565323 = new Lego([4565323], "Plate, Modified 2 x 2 with Groove and 1 Stud in Center (Jumper)", "Black");
const l403226 = new Lego([403226], "Plate, Round 2 x 2 with Axle Hole", "Black");
const l609126 = new Lego([609126, 6184784, 6383142], "Slope, Curved 2 x 1 x 1 1/3 with Recessed Stud", "Black");
const l4185272 = new Lego([4185272, 6021752], "Slope, Curved 2 x 2 with 3 Side Ports Recessed", "Black");
const l3203926 = new Lego([3203926, 4107081, 6331716], "Technic, Axle Connector with Axle Hole", "Black");
const l4548278 = new Lego([4548278, 4562148, 6173124], "Technic, Liftarm, Modified Bar 1 x 2", "Black");
const l4289542 = new Lego([4289542, 6278155, 6439040], "Bar 1L with Clip Mechanical Claw - Cut Edges and Hole on Side", "Dark Bluish Gray");
const l4211095 = new Lego([4211095], "Brick, Modified 1 x 2 with Log Profile", "Dark Bluish Gray");
const l4268139 = new Lego([4268139], "Brick, Modified 1 x 4 with Log Profile", "Dark Bluish Gray");
const l4210678 = new Lego([4210678], "Plate 2 x 10", "Dark Bluish Gray");
const l3032199 = new Lego([3032199, 4211115], "Plate 4 x 6", "Dark Bluish Gray");
const l4226358 = new Lego([4226358], "Plate 6 x 16", "Dark Bluish Gray");
const l4210967 = new Lego([4210967], "Plate, Modified 1 x 8 with Door Rail", "Dark Bluish Gray");
const l4211045 = new Lego([4211045], "Slope 33 3 x 1", "Dark Bluish Gray");
const l4261715 = new Lego([4261715], "Slope 33 3 x 4", "Dark Bluish Gray");
const l4226221 = new Lego([4226221], "Slope 45 2 x 1 Double with Bottom Stud Holder", "Dark Bluish Gray");
const l4211068 = new Lego([4211068], "Slope, Inverted 33 3 x 1", "Dark Bluish Gray");
const l4210639 = new Lego([4210639], "Technic, Brick 1 x 1 with Hole", "Dark Bluish Gray");
const l4211052 = new Lego([4211052], "Tile 1 x 2 with Groove", "Dark Bluish Gray");
const l4211069 = new Lego([4211069, 6030710], "Tile, Modified 1 x 1 with Clip", "Dark Bluish Gray");
const l4540178 = new Lego([4540178], "Wheel Hard Plastic with Small Cleats and Flanges", "Dark Bluish Gray");
const l4566532 = new Lego([4566532], "Plate 1 x 10", "Dark Purple");
const l4566522 = new Lego([4566522], "Plate, Round 1 x 1", "Dark Purple");
const l4225265 = new Lego([4225265, 6109814], "Slope 45 2 x 1", "Dark Purple");
const l4218700 = new Lego([4218700, 4579024, 6109766], "Slope, Curved 2 x 2 x 2/3 with Two Studs and Curved Sides", "Dark Purple");
const l4566804 = new Lego([4566804, 6167896], "Vehicle, Mudguard 2 x 4 with Flared Wings", "Dark Purple");
const l4566927 = new Lego([4566927, 6031821], "Technic, Axle 3L with Stud", "Dark Tan");
const l4612900 = new Lego([4612900], "Minifigure, Weapon Sword, Shamshir/Katana (Square Guard) with Uncapped Pommel and Hole in Hilt", "Flat Silver");
const l4211628 = new Lego([4211628, 6116608], "Bar 4L (Lightsaber Blade / Wand)", "Light Bluish Gray");
const l4599496 = new Lego([4599496], "Bar 1 x 4 x 6 Grille with End Protrusions", "Light Bluish Gray");
const l4211428 = new Lego([4211428], "Brick 1 x 3", "Light Bluish Gray");
const l4211392 = new Lego([4211392], "Brick 1 x 8", "Light Bluish Gray");
const l4211795 = new Lego([4211795, 4274668], "Brick 2 x 6", "Light Bluish Gray");
const l4558953 = new Lego([4558953], "Brick, Modified 1 x 1 with Stud on Side", "Light Bluish Gray");
const l4211580 = new Lego([4211580], "Brick, Modified 1 x 2 with Bar Handle on Side", "Light Bluish Gray");
const l4211526 = new Lego([4211526], "Brick, Round 2 x 2 with Axle Hole", "Light Bluish Gray");
const l4211582 = new Lego([4211582, 4512049, 4516716, 6258886, 6292172], "Chain 21 Links (16-17L)", "Light Bluish Gray");
const l4519882 = new Lego([4519882, 4610149], "Door 1 x 4 x 6 Barred with Stud Handle", "Light Bluish Gray");
const l4212074 = new Lego([4212074, 4539481, 4581155], "Minifigure, Weapon Lightsaber Hilt Straight", "Light Bluish Gray");
const l4215513 = new Lego([4215513], "Panel 1 x 1 x 1 Corner", "Light Bluish Gray");
const l4211445 = new Lego([4211445], "Plate 1 x 4", "Light Bluish Gray");
const l4211353 = new Lego([4211353], "Plate 2 x 2 Corner", "Light Bluish Gray");
const l4211406 = new Lego([4211406], "Plate 2 x 8", "Light Bluish Gray");
const l4239371 = new Lego([4239371, 4293831], "Plate 6 x 14", "Light Bluish Gray");
const l4211451 = new Lego([4211451], "Plate, Modified 1 x 2 with 1 Stud without Groove (Jumper)", "Light Bluish Gray");
const l4612621 = new Lego([4612621], "Plate, Modified 4 x 4 with 2 x 2 Open Center", "Light Bluish Gray");
const l4515351 = new Lego([4515351], "Plate, Round 4 x 4 with Hole", "Light Bluish Gray");
const l4211773 = new Lego([4211773], "Slope 45 2 x 3", "Light Bluish Gray");
const l4211519 = new Lego([4211519, 6285778], "Slope, Curved 2 x 1 x 1 1/3 with Recessed Stud", "Light Bluish Gray");
const l4179576 = new Lego([4179576], "Support 1 x 1 x 6 Solid Pillar", "Light Bluish Gray");
const l4211805 = new Lego([4211805, 44294194], "Technic, Axle 7L", "Light Bluish Gray");
const l4211550 = new Lego([4211550, 6296859], "Technic, Axle and Pin Connector Angled #1", "Light Bluish Gray");
const l4502595 = new Lego([4502595], "Technic, Axle Connector Hub with 3 Axles", "Light Bluish Gray");
const l4520320 = new Lego([4520320, 6347715], "Technic, Pin 1/2 with 2L Bar Extension (Flick Missile)", "Light Bluish Gray");
const l2555194 = new Lego([2555194, 4211369, 6030711], "Tile, Modified 1 x 1 with Clip", "Light Bluish Gray");
const l4211357 = new Lego([4211357], "Tile, Modified 1 x 2 with Bar Handle", "Light Bluish Gray");
const l4600267 = new Lego([4600267, 6147169], "Bar 4L (Lightsaber Blade / Wand)", "Pearl Gold");
const l4600271 = new Lego([4600271, 4640843, 6328909], "Bar 1L with Top Stud and 2 Side Studs (Connector Perpendicular)", "Pearl Gold");
const l4611904 = new Lego([4611904, 4617082], "Barb / Claw / Horn / Tooth - Medium", "Pearl Gold");
const l4600501 = new Lego([4600501, 6323688], "Chain 5 Links", "Pearl Gold");
const l4505990 = new Lego([4505990], "Minifigure, Utensil Goblet", "Pearl Gold");
const l4538126 = new Lego([4538126], "Minifigure, Utensil Telescope", "Pearl Gold");
const l4600519 = new Lego([4600519], "Minifigure, Weapon Throwing Star (Shuriken) with Smooth Grips", "Pearl Gold");
const l393821 = new Lego([393821, 6078079], "Hinge Brick 1 x 2 Top Plate", "Red");
const l265421 = new Lego([265421, 4163711, 4248830, 4278275, 4617080], "Plate, Round 2 x 2 with Rounded Bottom (Boat Stud)", "Red");
const l4593768 = new Lego([4593768], "Spider with Round Abdomen and Clip", "Red");
const l4543094 = new Lego([4543094, 4615070], "Technic Ball Joint with Through Axle Hole", "Red");
const l4119033 = new Lego([4119033, 4163144, 4190216, 4254606, 6332580], "Technic, Axle and Pin Connector Angled #1", "Red");
const l4513174 = new Lego([4513174], "Technic, Axle Connector 2L (Smooth with x Hole + Orientation)", "Red");
const l4225469 = new Lego([4225469], "Brick, Modified 1 x 1 with Headlight", "Reddish Brown");
const l4520638 = new Lego([4520638], "Container, Box 2 x 2 x 2 - Top Opening", "Reddish Brown");
const l4211150 = new Lego([4211150], "Plate 1 x 2", "Reddish Brown");
const l4211186 = new Lego([4211186], "Plate 2 x 4", "Reddish Brown");
const l4211207 = new Lego([4211207], "Plate 4 x 8", "Reddish Brown");
const l4264669 = new Lego([4264669], "Plate 6 x 12", "Reddish Brown");
const l4211282 = new Lego([4211282, 4277751], "Stairs 7 x 4 x 6 Straight Open", "Reddish Brown");
const l4211204 = new Lego([4211204], "Tile 1 x 6", "Reddish Brown");
const l4273965 = new Lego([4273965, 6051378, 6108518], "Minifigure, Weapon Axe Head with Clip", "Speckle Black-Silver");
const l4101763 = new Lego([4101763, 4143352, 4523145], "Technic, Brick 1 x 2 with Holes", "Tan");
const l4514700 = new Lego([4514700, 6163898, 6321092, 6450487], "Wave Angular Double with Bar Handle (Electric Zigzag) with Marbled Trans-Purple Pattern", "Trans-Light Blue");
const l4540865 = new Lego([4540865, 4640865, 6100033, 6289248], "Minifigure, Plume Feather Triple Compact / Flame / Water", "Trans-Neon Orange");
const l4497943 = new Lego([4497943, 6171762], "Bar with Light Cover (Bulb) / Bionicle Barraki Eye", "Trans-Red");
const l4113954 = new Lego([4113954, 6247785], "Rock 1 x 1 Jewel 24 Facet", "Trans-Red");
const l4189801 = new Lego([4189801, 6251290], "Tile 1 x 2 with Groove", "Trans-Red");
const l4548009 = new Lego([4548009], "Wave Rounded Straight Large with Bar End (Flame) with Marbled Trans-Orange Pattern", "Trans-Red");
const l4296948 = new Lego([4296948, 4622904], "Arm Mechanical, Exo-Force / Bionicle, Thin Support", "White");
const l4566256 = new Lego([4566256, 4613941, 6270092], "Barb / Claw / Horn / Tooth - Medium", "White");
const l4273397 = new Lego([4273397, 4568387, 6270106], "Barb / Claw / Horn / Tooth - Small", "White");
const l4600307 = new Lego([4600307], "Bone, Long", "White");
const l4600294 = new Lego([4600294], "Bone, Short", "White");
const l246501 = new Lego([246501], "Brick 1 x 16", "White");
const l4182304 = new Lego([4182304, 4508454, 6110023], "Dinosaur Tail End Section / Horn", "White");
const l4603309 = new Lego([4603309], "Large Figure Tail", "White");
const l82359 = new Lego([82359], "Minifigure, Head Skull Standard Pattern - Blocked Open Stud", "White");
const l486501 = new Lego([486501], "Panel 1 x 2 x 1", "White");
const l302301 = new Lego([302301], "Plate 1 x 2", "White");
const l408101 = new Lego([408101, 4632566, 6281990], "Plate, Modified 1 x 1 with Light Attachment - Thick Ring", "White");
const l4556152 = new Lego([4556152], "Plate, Modified 1 x 2 with 2 U Clips (Horizontal Grip)", "White");
const l4222017 = new Lego([4222017], "Plate, Modified 1 x 2 with Bar Handle on Side - Closed Ends", "White");
const l3003301 = new Lego([3003301], "Plate, Modified 2 x 2 with Bar Frame Octagonal", "White");
const l4565324 = new Lego([4565324, 6126046], "Plate, Modified 2 x 2 with Groove and 1 Stud in Center (Jumper)", "White");
const l4191825 = new Lego([4191825], "Slope 45 2 x 1 Triple with Inside Bar", "White");
const l4542616 = new Lego([4542616], "Support 1 x 6 x 5 Girder Rectangular", "White");
const l4125554 = new Lego([4125554, 6271870], "Technic, Axle and Pin Connector Angled #2 - 180 degrees", "White");
const l4125562 = new Lego([4125562, 4233486, 6178921], "Technic, Brick 1 x 2 with Axle Hole", "White");
const l370901 = new Lego([370901], "Technic, Plate 2 x 4 with 3 Holes", "White");
const l255501 = new Lego([255501, 6030716], "Tile, Modified 1 x 1 with Clip", "White");
const l4179875 = new Lego([4179875], "Wedge, Plate 3 x 2 Left", "White");
const l4179874 = new Lego([4179874], "Wedge, Plate 3 x 2 Right", "White");
const l3212324 = new Lego([3212324, 4239601, 6271167], "Technic Bush 1/2 Smooth", "Yellow");
const l4602970 = new Lego([4602970, 6045042, 6152382, 6296334], "Leg Skeleton with Black Square Foot", "White");
const l4609295 = new Lego([4609295, 6037870, 6146060, 6252200], "Arm Skeleton Bent with Clips at 90° [Vertical Grip]", "White");
const l4612347 = new Lego([4612347], "Torso Skeleton - Angular Rib Cage with Black Holes and Cracks and White Loincloth Print", "White");
const l4612985 = new Lego([4612985, 4613928], "Minifig Head Bonezai, Skull Cracked with Red Eyes and Grin Print [Blocked Open Stud]", "White");
const l4612346 = new Lego([4612346], "Torso Skeleton - Angular Rib Cage with Black Holes and Cracks and Gray Loincloth Print", "White");
const l4611434 = new Lego([4611434], "Minifig Head Chopov, Cracked Skull with Holes Print [Blocked Open Stud]", "White");
const l4612333 = new Lego([4612333, 4614105, 4631529, 4667796], "Hips and Red Legs with Dark Red Belt Print", "Red");
const l3017721 = new Lego([3017721, 4121918, 4610823, 4614104, 4641677, 6020153], "Wrap, Ninja, with Clip", "Red");
const l4611424 = new Lego([4611424, 4613390], "Minifig Head Kai, Stern Eyebrows, White Pupils, Frown, Scar Across Left Eye Print [Blocked Open Stud]", "Yellow");
const l4612645 = new Lego([4612645, 4612999, 6023483], "Torso Robe with Brown Rope, Gold Medallion and Dark Red Undershirt Print, Red Arms, Black Hands", "Red");
const l4616331 = new Lego([4616331], "Helmet Ninja, Samurai", "Flat Silver");
const l4616311 = new Lego([4616311, 4630112], "Minifig Head Garmadon, Red Eyes, White Teeth and Silver Wrinkles Print [Blocked Open Stud]", "Black");
const l4616334 = new Lego([4616334, 4630117, 6023669], "Torso Muscles and Purple Belt Print, Black Arms and Hands", "Black");
const l4526756 = new Lego([4526756, 6155002], "Hair Short Bob Cut", "Black");
const l4631535 = new Lego([4631535, 4667798, 6023508], "Hips and Red Legs with Ninja Robes and Gold Fireball Print", "Red");
const l4616366 = new Lego([4616366, 4617505, 6023677], "Torso Robe and Gold Fireball Print, Yellow Arms and Hands", "Red");
const l4616378 = new Lego([4616378, 4617510], "Minifig Head Nya, Eyelashes, Red Eyeshadow, Red Lips / Red Bandanna Covering Mouth Print", "Yellow");
const l4602984 = new Lego([4602984, 6034840], "Torso Skeleton, Angular Rib Cage with Black Holes and Cracks and Red Loincloth Print", "White");
const l4611924 = new Lego([4611924, 6020678], "Minifig Head Special, Skull with Bar, Lower Jaw with Ninjago Cracked Dark Red Skull Print", "White");
const l4612771 = new Lego([4612771, 6020675], "Minifig Head Special, Skull with Clip, Upper Jaw with Forehead Nails Print", "White");
const l4298653 = new Lego([4298653], "Minifigure Jet Pack with Stud On Front", "Black");
const l4515172 = new Lego([4515172, 4519849, 4556158], "Plate, Modified 1 x 2 with 2 U Clips (Horizontal Grip)", "Black");
const l4225201 = new Lego([4225201], "Plate, Modified 1 x 2 with Bar Handle on Side - Closed Ends", "Black");
const l4155558 = new Lego([4155558], "Support 1 x 1 x 5 1/3 Spiral Staircase Axle", "Black");
const l4519244 = new Lego([4519244], "Technic, Axle Connector 2 x 3 with Ball Joint Socket - Closed Sides, Angled Forks with Closed Axle Holes", "Black");
const l3200026 = new Lego([3200026], "Technic, Brick 1 x 2 with Holes", "Black");
const l4189110 = new Lego([4189110, 4206482, 4309323], "Technic, Axle 1L with Pin with Friction Ridges", "Blue");
const l4210723 = new Lego([4210723], "Hinge Brick 1 x 2 Locking with 1 Finger Vertical End", "Dark Bluish Gray");
const l45429941 = new Lego([45429941], "Large Figure Head Rock Monster King, Jaw Lower with Trans-Neon Green Teeth", "Dark Bluish Gray");
const l45429942 = new Lego([45429942], "Large Figure Head Rock Monster King, Jaw Upper with Molded Trans-Neon Green Teeth and Printed Black and Red Eyes Pattern", "Dark Bluish Gray");
const l4210635 = new Lego([4210635], "Plate 2 x 2 Corner", "Dark Bluish Gray");
const l4216973 = new Lego([4216973], "Plate, Modified 1 x 1 with U Clip (Horizontal Grip)", "Dark Bluish Gray");
const l4542272 = new Lego([4542272], "Plate, Modified 1 x 2 with Angular Extension with Molded Flexible Light Bluish Gray Tip Pattern", "Dark Bluish Gray");
const l42 = new Lego([42], "Slope 45 2 x 1 Double (Undetermined Type)", "Dark Bluish Gray");
const l4210797 = new Lego([4210797, 6411327], "Slope, Curved 2 x 1 x 1 1/3 with Recessed Stud", "Dark Bluish Gray");
const l4210862 = new Lego([4210862], "Slope, Inverted 45 2 x 2 Double Convex", "Dark Bluish Gray");
const l4498096 = new Lego([4498096], "Technic, Brick Modified 2 x 2 with 2 Ball Joints", "Dark Bluish Gray");
const l4524353 = new Lego([4524353], "Technic, Brick Modified 2 x 2 with Ball Socket and Axle Hole - Angled Forks with Flat Ends and Open Sides", "Dark Bluish Gray");
const l4221775 = new Lego([4221775], "Antenna Small Base with Black Lever (4592 / 4593)", "Light Bluish Gray");
const l4211811 = new Lego([4211811, 4277927, 6009014, 6117967], "Bracket 1 x 2 - 2 x 2", "Light Bluish Gray");
const l4211388 = new Lego([4211388], "Brick 1 x 2", "Light Bluish Gray");
const l4211387 = new Lego([4211387], "Brick 2 x 2", "Light Bluish Gray");
const l4211385 = new Lego([4211385], "Brick 2 x 4", "Light Bluish Gray");
const l4211694 = new Lego([4211694], "Hinge Brick 1 x 2 Locking with 2 Fingers Vertical End, 9 Teeth", "Light Bluish Gray");
const l4539187 = new Lego([4539187, 4616840, 6270081], "Minifigure, Weapon Sword, Spike Flexible 3.5L with Pin", "Light Bluish Gray");
const l3795194 = new Lego([3795194, 4211452], "Plate 2 x 6", "Light Bluish Gray");
const l4211477 = new Lego([4211477, 4632575, 6281998], "Plate, Modified 1 x 1 with Light Attachment - Thick Ring", "Light Bluish Gray");
const l4211632 = new Lego([4211632], "Plate, Modified 1 x 2 with Bar Handle on Side - Free Ends", "Light Bluish Gray");
const l4521921 = new Lego([4521921], "Slope 30 1 x 1 x 2/3", "Light Bluish Gray");
const l4211421 = new Lego([4211421], "Slope 33 3 x 2", "Light Bluish Gray");
const l43 = new Lego([43], "Slope 45 2 x 1 Double / Inverted - without Bottom Tube or Bottom Stud Holder", "Light Bluish Gray");
const l4211409 = new Lego([4211409], "Slope 45 2 x 4", "Light Bluish Gray");
const l4211552 = new Lego([4211552, 6261387], "Technic, Axle and Pin Connector Angled #3 - 157.5 degrees", "Light Bluish Gray");
const l4240013 = new Lego([4240013, 4594243, 6170521], "Wedge, Plate 3 x 4 with Stud Notches", "Light Bluish Gray");
const l4122439 = new Lego([4122439, 4164037], "Plate 1 x 2", "Lime");
const l4521216 = new Lego([4521216, 4540385, 6370977], "Slope 18 2 x 1 x 2/3 with Grille", "Lime");
const l4154506 = new Lego([4154506, 4265684, 6170474], "Technic, Liftarm Thick 1 x 3", "Lime");
const l4175219 = new Lego([4175219, 4281515, 6292485], "Bionicle 1 x 3 Tooth with Axle Hole", "Orange");
const l4538780 = new Lego([4538780, 6270088], "Minifigure, Utensil Dynamite Sticks Bundle", "Red");
const l654121 = new Lego([654121], "Technic, Brick 1 x 1 with Hole", "Red");
const l4124010 = new Lego([4124010, 4540417, 6170290], "Rock 1 x 1 Crystal 5 Point", "Trans-Neon Green");
const l4140733 = new Lego([4140733, 4544094], "Slope 45 2 x 1", "Trans-Neon Green");
const l4542986 = new Lego([4542986], "Wedge 4 x 4 Fractured Polygon Top with Dark Bluish Gray Facets Pattern", "Trans-Neon Green");
const l44 = new Lego([44], "Hips and Blue Legs with Flashlight and Chain Print", "Black");
const l4210645 = new Lego([4210645, 6170695], "Headwear Accessory Glasses / Goggles", "Dark Bluish Gray");
const l4542545 = new Lego([4542545], "Torso Vest, Blue with Tools over Sweaty Shirt Print, Yellow Arms, Dark Bluish Gray Hands", "Light Bluish Gray");
const l4542512 = new Lego([4542512], "Torso Vest, Blue over Sweaty Shirt Print, Yellow Arms, Dark Bluish Gray Hands", "Light Bluish Gray");
const l4542171 = new Lego([4542171], "Minifig Head Engineer, Dual Sided, Silver Plate and Orange Scars, Determined / Scared Print [Blocked Open Stud]", "Yellow");
const l4540418 = new Lego([4540418], "Helmet with Breathing Apparatus and Headlights", "Blue");
const l4535553 = new Lego([4535553], "Hair Short, Tousled with Side Part", "Dark Brown");
const l4542173 = new Lego([4542173], "Minifig Head Power Miner, Dual Sided, Unibrow with Light Bluish Gray Sideburns and Orange Scar, Determined / Scared Print [Blocked Open Stud]", "Yellow");
const l4223247 = new Lego([4223247, 6330086], "Arm Mechanical, Battle Droid", "Black");
const l3005626 = new Lego([3005626, 4226368, 4294570], "Fence 4 x 4 x 2 Quarter Round Spindled with 2 Studs", "Black");
const l4129579 = new Lego([4129579, 4144499, 4250190, 4265484, 6266306], "Hinge Brick 1 x 2 Locking with 1 Finger Vertical End", "Black");
const l4499434 = new Lego([4499434, 4518409], "Projectile Launcher, Cannon, Flat Bottom", "Black");
const l304026 = new Lego([304026, 4121966], "Slope 45 2 x 1", "Black");
const l4112591 = new Lego([4112591, 4125134, 4227682], "Slope, Curved 3 x 2 x 1 with 4 Studs", "Black");
const l4162982 = new Lego([4162982, 6021512], "Tile 1 x 2 with Groove with Avionics SW Copper, Red & Silver Pattern", "Black");
const l4210677 = new Lego([4210677], "Minifigure, Weapon Spear Gun with Rounded Trigger and Thin Spear Base", "Dark Bluish Gray");
const l4211063 = new Lego([4211063], "Plate 1 x 2", "Dark Bluish Gray");
const l4210633 = new Lego([4210633], "Plate, Round 1 x 1", "Dark Bluish Gray");
const l4210908 = new Lego([4210908, 4278274, 4613980], "Plate, Round 2 x 2 with Rounded Bottom (Boat Stud)", "Dark Bluish Gray");
const l4218696 = new Lego([4218696], "Slope, Curved 2 x 2 x 2/3 with Two Studs and Curved Sides", "Dark Bluish Gray");
const l4211064 = new Lego([4211064, 4500464], "Slope, Inverted 33 3 x 2 with Flat Bottom Pin and Connections between Studs", "Dark Bluish Gray");
const l4211086 = new Lego([4211086, 6129590, 6587199], "Technic, Axle 3L with Stud", "Dark Bluish Gray");
const l4210762 = new Lego([4210762], "Technic, Brick 1 x 2 with Holes", "Dark Bluish Gray");
const l4213607 = new Lego([4213607], "Technic, Brick 1 x 4 with Holes", "Dark Bluish Gray");
const l4211050 = new Lego([4211050, 32002199], "Technic, Pin 3/4", "Dark Bluish Gray");
const l4227517 = new Lego([4227517], "Tile, Modified 2 x 3 with 2 U Clips", "Dark Bluish Gray");
const l4505142 = new Lego([4505142, 4570451], "Plate, Round Corner 4 x 4", "Dark Tan");
const l4251129 = new Lego([4251129, 4507047], "Tile 1 x 6", "Dark Tan");
const l4507045 = new Lego([4507045], "Tile 2 x 2 with Groove", "Dark Tan");
const l4293756 = new Lego([4293756], "Wedge 4 x 4 Triple Curved No Studs", "Dark Tan");
const l4505141 = new Lego([4505141, 6038637], "Wedge, Plate 3 x 3 Cut Corner", "Dark Tan");
const l4211394 = new Lego([4211394], "Brick 1 x 4", "Light Bluish Gray");
const l4211471 = new Lego([4211471, 6022155, 6057616, 6404367], "Cone 2 x 2 x 2 - Open Stud", "Light Bluish Gray");
const l4497653 = new Lego([4497653, 6410336], "Cone 3 x 3 x 2", "Light Bluish Gray");
const l4285324 = new Lego([4285324, 4507052], "Cylinder 4 x 4 x 1 2/3 with Pin Holes and Center Bar", "Light Bluish Gray");
const l4211804 = new Lego([4211804], "Hinge Plate 1 x 2 Locking with 2 Fingers on End and 9 Teeth with Bottom Groove", "Light Bluish Gray");
const l3623194 = new Lego([3623194, 4211429], "Plate 1 x 3", "Light Bluish Gray");
const l4211425 = new Lego([4211425], "Plate 1 x 8", "Light Bluish Gray");
const l4211419 = new Lego([4211419], "Plate, Modified 2 x 3 with Hole", "Light Bluish Gray");
const l4211611 = new Lego([4211611], "Plate, Modified 6 x 6 x 2/3 Cross with Dome", "Light Bluish Gray");
const l4299625 = new Lego([4299625], "Projectile Arrow, Liftarm Shaft with Hollow Black Rubber End", "Light Bluish Gray");
const l4180543 = new Lego([4180543], "Slope, Curved 6 x 2", "Light Bluish Gray");
const l4211489 = new Lego([4211489], "Slope, Inverted 33 3 x 1", "Light Bluish Gray");
const l4211436 = new Lego([4211436], "Slope, Inverted 45 2 x 2 with Flat Bottom Pin", "Light Bluish Gray");
const l4211602 = new Lego([4211602], "Slope, Inverted 45 6 x 4 Double with 4 x 4 Cutout", "Light Bluish Gray");
const l4211442 = new Lego([4211442], "Technic, Brick 1 x 8 with Holes", "Light Bluish Gray");
const l4211414 = new Lego([4211414], "Tile 1 x 2 with Groove", "Light Bluish Gray");
const l2431194 = new Lego([2431194, 4211356], "Tile 1 x 4", "Light Bluish Gray");
const l4211439 = new Lego([4211439, 4495467, 4540203], "Turntable 2 x 2 Plate, Top", "Light Bluish Gray");
const l4260934 = new Lego([4260934], "Wedge 6 x 2 Inverted Left", "Light Bluish Gray");
const l4260935 = new Lego([4260935], "Wedge 6 x 2 Inverted Right", "Light Bluish Gray");
const l4505087 = new Lego([4505087], "Wedge 10 x 3 Left", "Light Bluish Gray");
const l4505088 = new Lego([4505088], "Wedge 10 x 3 Right", "Light Bluish Gray");
const l4252368 = new Lego([4252368, 4507056], "Wedge, Plate 2 x 4", "Light Bluish Gray");
const l4211616 = new Lego([4211616], "Wedge, Plate 12 x 6 Left", "Light Bluish Gray");
const l4211617 = new Lego([4211617], "Wedge, Plate 12 x 6 Right", "Light Bluish Gray");
const l4211643 = new Lego([4211643], "Wheel 30mm D. x 13mm (13 x 24 Model Team)", "Light Bluish Gray");
const l409521 = new Lego([409521, 409571, 4143125], "Bar 6.6L with Stop Ring (Patio Umbrella Stand)", "Red");
const l4211183 = new Lego([4211183], "Brick, Round 1 x 1 Open Stud", "Reddish Brown");
const l4506987 = new Lego([4506987], "Minifigure, Headgear Hat, Police", "Reddish Brown");
const l4211190 = new Lego([4211190], "Plate 1 x 4", "Reddish Brown");
const l4245599 = new Lego([4245599], "Tile, Round 2 x 2", "Reddish Brown");
const l4290055 = new Lego([4290055], "Wedge 2 x 16 Triple", "Reddish Brown");
const l4201066 = new Lego([4201066, 4288513], "Brick, Modified 1 x 2 with Bar Handle on Side", "Tan");
const l346005 = new Lego([346005, 4114324], "Plate 1 x 8", "Tan");
const l4217562 = new Lego([4217562], "Plate, Modified 1 x 2 with Bar Handle on Side - Closed Ends", "Tan");
const l4129574 = new Lego([4129574, 4262614], "Windscreen 7 x 4 x 2 Round", "Trans-Brown");
const l618841 = new Lego([618841, 4544720], "Cone 1 x 1 without Top Groove", "Trans-Red");
const l256924 = new Lego([256924, 4124458, 4639064], "Antenna Whip 8H", "Yellow");
const l362224 = new Lego([362224], "Brick 1 x 3", "Yellow");
const l300924 = new Lego([300924], "Brick 1 x 6", "Yellow");
const l614324 = new Lego([614324], "Brick, Round 2 x 2 with Axle Hole", "Yellow");
const l458924 = new Lego([458924, 4525464], "Cone 1 x 1 without Top Groove", "Yellow");
const l394224 = new Lego([394224, 394274, 6022159, 6055404], "Cone 2 x 2 x 2 - Open Stud", "Yellow");
const l4179387 = new Lego([4179387, 4507046, 4639063], "Cone 3 x 3 x 2", "Yellow");
const l486524 = new Lego([486524], "Panel 1 x 2 x 1", "Yellow");
const l371024 = new Lego([371024], "Plate 1 x 4", "Yellow");
const l302124 = new Lego([302124], "Plate 2 x 3", "Yellow");
const l383224 = new Lego([383224], "Plate 2 x 10", "Yellow");
const l244424 = new Lego([244424], "Plate, Modified 2 x 2 with Pin Hole", "Yellow");
const l329824 = new Lego([329824], "Slope 33 3 x 2", "Yellow");
const l4200030 = new Lego([4200030, 6019725, 6338029], "Slope, Curved 1 x 4 x 1 1/3", "Yellow");
const l609124 = new Lego([609124, 4160750, 4160863, 4188357, 4280127, 6361082, 6388492], "Slope, Curved 2 x 1 x 1 1/3 with Recessed Stud", "Yellow");
const l418524 = new Lego([418524, 4494224, 6363273], "Technic Wedge Belt Wheel (Pulley)", "Yellow");
const l4114668 = new Lego([4114668], "Technic, Brick 1 x 2 with Axle Hole (+ Shape) and Inside Side Supports", "Yellow");
const l306924 = new Lego([306924], "Tile 1 x 2 with Groove", "Yellow");
const l241224 = new Lego([241224], "Tile, Modified 1 x 2 Grille with Bottom Groove / Lip", "Yellow");
const l4264028 = new Lego([4264028, 6285508], "Wedge 3 1/2 x 4 with Stud Notches", "Yellow");
const l4294741 = new Lego([4294741, 4639061], "Wedge 4 x 4 Triple Curved No Studs", "Yellow");
const l4262136 = new Lego([4262136], "Wedge 4 x 4 Triple Inverted with Connections between 2 Studs", "Yellow");
const l4160129 = new Lego([4160129, 4248767, 4271087], "Wedge 6 x 2 Left", "Yellow");
const l4160107 = new Lego([4160107, 4248764, 4271084], "Wedge 6 x 2 Right", "Yellow");
const l4247644 = new Lego([4247644, 6307260], "Wedge, Plate 8 x 3 Pentagonal Left", "Yellow");
const l4247642 = new Lego([4247642, 6307262], "Wedge, Plate 8 x 3 Pentagonal Right", "Yellow");
const l269524 = new Lego([269524, 4212501], "Wheel 30mm D. x 13mm (13 x 24 Model Team)", "Yellow");
const l4507019 = new Lego([4507019], "Torso Tunic, Brown Belt, Light Nougat Neck Print, Tan Arms, Light Nougat Hands", "Tan");
const l4162229 = new Lego([4162229, 4507055, 4583630], "Legs Short [without Hole]", "Tan");
const l4507011 = new Lego([4507011], "Minifig Head Anakin Skywalker, Brown Eyebrows and Freckles, Large Pupils Print [Blocked Open Stud]", "Light Nougat");
const l4507010 = new Lego([4507010, 6119361], "Hair Short Tousled", "Dark Tan");
const l4225787 = new Lego([4225787, 4582634], "Hips and Reddish Brown Legs", "Dark Bluish Gray");
const l4286744 = new Lego([4286744], "Minifig Head Standard Grin Print [Blocked Open Stud]", "Light Nougat");
const l4507013 = new Lego([4507013], "Torso Jacket with Dark Bluish Gray Harness Print (Naboo Fighter), Tan Arms, Reddish Brown Hands", "Tan");
const l4211187 = new Lego([4211187, 4507049], "Hat / Helmet, Aviator Cap", "Reddish Brown");
const l4124113 = new Lego([4124113, 6278499], "Leg Mechanical - Droid with Technic Pin", "White");
const l4124160 = new Lego([4124160, 4194011], "Brick Round 2 x 2 x 2 Robot Body with SW R2-D2 Print [with Bottom Axle Holder]", "White");
const l45 = new Lego([45], "Brick Round 2 x 2 Dome Top with Silver and Blue Print (R2-D2)", "White");
const l604626 = new Lego([604626, 4228263, 4254560, 4278015], "Bar 9 x 13 Grille", "Black");
const l4278806 = new Lego([4278806], "Bionicle Rahkshi Chest Section", "Black");
const l4214559 = new Lego([4214559], "Brick, Modified 1 x 1 with Studs on 2 Sides, Opposite", "Black");
const l46 = new Lego([46], "Brick, Modified 1 x 2 with Clip (Vertical Grip) (Undetermined Type)", "Black");
const l306226 = new Lego([306226], "Brick, Round 1 x 1 Open Stud", "Black");
const l4159183 = new Lego([4159183, 4175014, 4508453, 6055070], "Dinosaur Tail End Section / Horn", "Black");
const l4159623 = new Lego([4159623, 4270824, 4278911], "Hinge 1 x 3 Locking with 2 Fingers and Claw End", "Black");
const l393726 = new Lego([393726], "Hinge Brick 1 x 2 Base", "Black");
const l383126 = new Lego([383126], "Hinge Brick 1 x 4 Swivel Base", "Black");
const l383026 = new Lego([383026, 6011458, 6344999], "Hinge Brick 1 x 4 Swivel Top", "Black");
const l4158848 = new Lego([4158848], "Hinge Cylinder 1 x 2 Locking with 1 Finger and Axle Hole on Ends with Slots", "Black");
const l47 = new Lego([47], "Hinge Plate 1 x 2 Locking with 1 Finger on End (Undetermined Type)", "Black");
const l48 = new Lego([48], "Hinge Plate 1 x 2 Locking with 2 Fingers on End (Undetermined Type)", "Black");
const l256626 = new Lego([256626, 4159103, 4532220], "Plant, Tree Palm Top", "Black");
const l379526 = new Lego([379526], "Plate 2 x 6", "Black");
const l383226 = new Lego([383226], "Plate 2 x 10", "Black");
const l303526 = new Lego([303526], "Plate 4 x 8", "Black");
const l302826 = new Lego([302826], "Plate 6 x 12", "Black");
const l302726 = new Lego([302726], "Plate 6 x 16", "Black");
const l408126 = new Lego([408126, 4632571, 6281993], "Plate, Modified 1 x 1 with Light Attachment - Thick Ring", "Black");
const l601926 = new Lego([601926, 601976], "Plate, Modified 1 x 1 with U Clip (Horizontal Grip)", "Black");
const l244426 = new Lego([244426], "Plate, Modified 2 x 2 with Pin Hole", "Black");
const l304526 = new Lego([304526, 4189064], "Slope 45 2 x 2 Double Convex Corner", "Black");
const l303826 = new Lego([303826], "Slope 45 2 x 3", "Black");
const l4278910 = new Lego([4278910], "Technic Bush 1/2 Smooth", "Black");
const l3206226 = new Lego([3206226, 4109810], "Technic, Axle 2L Notched", "Black");
const l4173970 = new Lego([4173970, 4200326, 6273708], "Technic, Axle and Pin Connector Perpendicular 3L with 2 Pin Holes", "Black");
const l654126 = new Lego([654126], "Technic, Brick 1 x 1 with Hole", "Black");
const l4233487 = new Lego([4233487], "Technic, Brick 1 x 2 with Axle Hole (x Shape)", "Black");
const l3232426 = new Lego([3232426, 4226981, 6222427], "Technic, Brick 4 x 4 Open Center", "Black");
const l4121619 = new Lego([4121619, 4218868], "Technic, Disk 3 x 3", "Black");
const l4164133 = new Lego([4164133, 4167726, 6338428], "Technic, Liftarm Thin 1 x 2 - Axle Holes", "Black");
const l663226 = new Lego([663226, 4107828, 6331723], "Technic, Liftarm Thin 1 x 3 - Axle Holes", "Black");
const l3225026 = new Lego([3225026, 4128557, 6327162], "Technic, Liftarm, Modified L-Shape Quarter Ellipse Thin 3 x 5", "Black");
const l373826 = new Lego([373826], "Technic, Plate 2 x 8 with 7 Holes", "Black");
const l402526 = new Lego([402526, 6051914, 6096842], "Train Bogie Plate (Tile, Modified 6 x 4 with 5mm Pin)", "Black");
const l4221663 = new Lego([4221663], "Turntable 4 x 4 Square Base with Same Color Top (3403 / 3404)", "Black");
const l245026 = new Lego([245026, 4227684], "Wedge, Plate 3 x 3 Cut Corner", "Black");
const l241926 = new Lego([241926], "Wedge, Plate 3 x 6 Cut Corners", "Black");
const l4160025 = new Lego([4160025], "Wedge, Plate 4 x 4 Cut Corner", "Black");
const l4197514 = new Lego([4197514], "Wheel Skateboard Mags", "Black");
const l4219825 = new Lego([4219825], "Turntable 2 x 2 Plate with Light Bluish Gray Top (3680 / 3679)", "Blue");
const l4220973 = new Lego([4220973, 4541748], "Arch 1 x 8 x 2", "Dark Bluish Gray");
const l4211098 = new Lego([4211098], "Brick 1 x 1", "Dark Bluish Gray");
const l4211075 = new Lego([4211075], "Brick 1 x 2 x 5 - Blocked Open Studs or Hollow Studs", "Dark Bluish Gray");
const l4211103 = new Lego([4211103], "Brick 1 x 4", "Dark Bluish Gray");
const l4211100 = new Lego([4211100], "Brick 1 x 6", "Dark Bluish Gray");
const l4210798 = new Lego([4210798], "Brick 1 x 12", "Dark Bluish Gray");
const l4210783 = new Lego([4210783], "Brick 1 x 16", "Dark Bluish Gray");
const l4211109 = new Lego([4211109], "Brick 2 x 2 Corner", "Dark Bluish Gray");
const l4227007 = new Lego([4227007], "Brick 2 x 2 x 3", "Dark Bluish Gray");
const l4211085 = new Lego([4211085], "Brick 2 x 4", "Dark Bluish Gray");
const l4224257 = new Lego([4224257, 4279060], "Brick, Round Corner 4 x 4 Full Brick", "Dark Bluish Gray");
const l4215386 = new Lego([4215386, 4535931, 6452530], "Brick, Round Corner 4 x 4 Macaroni Wide with 3 Studs", "Dark Bluish Gray");
const l4210726 = new Lego([4210726, 6265693], "Hinge Plate 1 x 2 Locking with 1 Finger On Top", "Dark Bluish Gray");
const l4211043 = new Lego([4211043], "Plate 2 x 3", "Dark Bluish Gray");
const l4225356 = new Lego([4225356], "Plate, Modified 1 x 1 with Tooth Horizontal", "Dark Bluish Gray");
const l4210760 = new Lego([4210760, 4234534], "Slope 65 2 x 2 x 2 with Bottom Tube", "Dark Bluish Gray");
const l4210696 = new Lego([4210696], "Slope 75 2 x 2 x 3 - Hollow Studs", "Dark Bluish Gray");
const l4218668 = new Lego([4218668, 4570879, 6063277], "Slope, Curved 3 x 2 x 2/3 with Two Studs, Wing End", "Dark Bluish Gray");
const l4211096 = new Lego([4211096], "Slope, Inverted 45 2 x 1", "Dark Bluish Gray");
const l4242036 = new Lego([4242036], "Technic, Axle and Pin Connector 2 x 7 with 2 Ball Joint Sockets, Rounded Ends", "Dark Bluish Gray");
const l4210857 = new Lego([4210857, 6273715], "Technic, Axle and Pin Connector Perpendicular 3L with 2 Pin Holes", "Dark Bluish Gray");
const l4210655 = new Lego([4210655, 6280395], "Technic, Axle and Pin Connector Perpendicular Double", "Dark Bluish Gray");
const l4234599 = new Lego([4234599], "Technic, Axle and Pin Connector Perpendicular Double Split", "Dark Bluish Gray");
const l4210935 = new Lego([4210935, 6178919], "Technic, Brick 1 x 2 with Axle Hole", "Dark Bluish Gray");
const l4261932 = new Lego([4261932, 4522937], "Technic, Liftarm Thick 1 x 13", "Dark Bluish Gray");
const l4210638 = new Lego([4210638, 6279883], "Technic, Liftarm, Modified Bent Thick 1 x 9 (6 - 4)", "Dark Bluish Gray");
const l4210667 = new Lego([4210667, 6271830], "Technic, Liftarm, Modified Bent Thick L-Shape 2 x 4", "Dark Bluish Gray");
const l4289250 = new Lego([4289250], "Bionicle Ball Joint 3 x 3 x 2 90 degrees with 2 Ball Joint and Axle Hole", "Dark Green");
const l4289875 = new Lego([4289875], "Bionicle Ball Joint 4 x 4 x 2 90 degrees with 2 Ball Joint and Axle Hole", "Dark Green");
const l4276582 = new Lego([4276582, 4498042], "Bionicle Toa Nuva Leg Section", "Dark Green");
const l4260505 = new Lego([4260505, 4522211], "Dinosaur Tail / Neck Base Section with Black Technic Pin", "Dark Green");
const l4260497 = new Lego([4260497, 6114670], "Dinosaur Tail / Neck Middle Section with Pin", "Dark Green");
const l4273402 = new Lego([4273402], "Dragon Head Viking Beaked", "Dark Green");
const l4276567 = new Lego([4276567], "Dragon Wing 19 x 11 with Marbled Dark Red Trailing Edge Pattern", "Dark Green");
const l4245567 = new Lego([4245567, 6013798, 6013975], "Plate 1 x 3", "Dark Green");
const l4276568 = new Lego([4276568, 6064112], "Plate, Modified 2 x 3 with Hole", "Dark Green");
const l4227557 = new Lego([4227557], "Technic, Axle and Pin Connector 2 x 5 with 2 Ball Joint Sockets, Open Sides", "Dark Green");
const l4227783 = new Lego([4227783], "Technic, Axle Connector 2 x 3 with Ball Joint Socket and Axle Socket with Molded Black Rubber Insert Pattern", "Dark Green");
const l4227559 = new Lego([4227559], "Technic, Axle Connector 2 x 3 with Ball Joint Socket - Open Sides, Angled Forks with Closed Axle Holes", "Dark Green");
const l4260494 = new Lego([4260494], "Technic, Brick 1 x 4 with Holes", "Dark Green");
const l4278009 = new Lego([4278009, 6114552], "Wedge 4 x 4 Triple Curved No Studs", "Dark Green");
const l4269028 = new Lego([4269028, 4652932], "Wedge 6 x 4 Triple Curved", "Dark Green");
const l4177046 = new Lego([4177046, 4539105], "Tile 2 x 2 with Groove", "Dark Red");
const l4248832 = new Lego([4248832, 4613613, 6135541], "Vehicle, Mudguard 2 x 4 with Flared Wings", "Dark Red");
const l4276259 = new Lego([4276259], "Bionicle Claw with Axle", "Dark Tan");
const l4223108 = new Lego([4223108], "Minifigure, Weapon Sword, Greatsword Angular", "Flat Dark Gold");
const l383228 = new Lego([383228], "Plate 2 x 10", "Green");
const l4116671 = new Lego([4116671], "Plate 4 x 6", "Green");
const l4141691 = new Lego([4141691, 4223986, 6247196, 6398657], "Plate 4 x 10", "Green");
const l302928 = new Lego([302928, 4279059], "Plate 4 x 12", "Green");
const l4208191 = new Lego([4208191, 4651215], "Wedge, Plate 4 x 4 Cut Corner", "Green");
const l4211660 = new Lego([4211660, 6276874], "Brick, Modified 1 x 2 with Pins", "Light Bluish Gray");
const l4211881 = new Lego([4211881], "Hinge Brick 2 x 2 Top Plate", "Light Bluish Gray");
const l4211585 = new Lego([4211585], "Minifigure, Head (Plain) - Blocked Open Stud", "Light Bluish Gray");
const l4211525 = new Lego([4211525], "Plate, Round 1 x 1", "Light Bluish Gray");
const l4211508 = new Lego([4211508], "Pneumatic T Piece Second Version (T Bar with Ball in Center)", "Light Bluish Gray");
const l4211466 = new Lego([4211466], "Technic, Brick 1 x 6 with Holes", "Light Bluish Gray");
const l4211610 = new Lego([4211610, 6271831], "Technic, Liftarm, Modified Bent Thick L-Shape 2 x 4", "Light Bluish Gray");
const l4255123 = new Lego([4255123, 4278809], "Bionicle Chest Armor, Toa Hordika", "Pearl Light Gray");
const l4187593 = new Lego([4187593, 4278812], "Bionicle Weapon 5 x 5 Shield with Dual Scoop Prongs", "Pearl Light Gray");
const l462321 = new Lego([462321], "Plate, Modified 1 x 2 with Bar Arm Up (Undetermined Type)", "Red");
const l317621 = new Lego([317621, 4188189], "Plate, Modified 2 x 3 with Hole", "Red");
const l306821 = new Lego([306821], "Tile 2 x 2 with Groove", "Red");
const l4226966 = new Lego([4226966], "Brick 1 x 1 x 5 - Blocked Open Stud or Hollow Stud", "Reddish Brown");
const l4211220 = new Lego([4211220, 4245312], "Brick 1 x 3", "Reddish Brown");
const l4211193 = new Lego([4211193], "Brick 1 x 6", "Reddish Brown");
const l4216668 = new Lego([4216668], "Brick 2 x 3", "Reddish Brown");
const l4215429 = new Lego([4215429, 4597260, 4617863, 6096716], "Brick 2 x 10", "Reddish Brown");
const l4211180 = new Lego([4211180], "Brick, Modified 1 x 2 with Log Profile", "Reddish Brown");
const l4211181 = new Lego([4211181], "Brick, Modified 1 x 4 with Log Profile", "Reddish Brown");
const l4211206 = new Lego([4211206], "Minifigure, Utensil Seat / Chair 2 x 2", "Reddish Brown");
const l4272222 = new Lego([4272222, 4534563], "Panel 2 x 6 x 6 with Log Profile (Palisade)", "Reddish Brown");
const l4216695 = new Lego([4216695, 4613975], "Plate 2 x 2", "Reddish Brown");
const l4211214 = new Lego([4211214], "Plate 2 x 10", "Reddish Brown");
const l4225700 = new Lego([4225700], "Plate 2 x 12", "Reddish Brown");
const l4267033 = new Lego([4267033, 6037499], "Plate, Modified 1 x 8 with Pin Hole and Bucket (Catapult)", "Reddish Brown");
const l4272154 = new Lego([4272154, 4272825], "Rock 4 x 4 Octagonal Boulder, Bottom", "Speckle Black-Silver");
const l4272152 = new Lego([4272152, 4272824], "Rock 4 x 4 Octagonal Boulder, Top", "Speckle Black-Silver");
const l303405 = new Lego([303405, 4113988], "Plate 2 x 8", "Tan");
const l265405 = new Lego([265405, 4140561, 4278422], "Plate, Round 2 x 2 with Rounded Bottom (Boat Stud)", "Tan");
const l4225609 = new Lego([4225609, 4500453], "Slope, Inverted 33 3 x 2 with Flat Bottom Pin without Connections between Studs", "Tan");
const l612647 = new Lego([612647], "Wave Rounded Straight with Bar End and Small Pins (Castle Dragon Flame / Seaweed / Water)", "Trans-Neon Orange");
const l4190222 = new Lego([4190222], "Dragon Wing", "Trans-Red");
const l4276773 = new Lego([4276773, 4551723], "Torso Armour with Leather Collar and 3 Waist Rondels Print, Dark Red Arms, Yellow Hands", "Dark Bluish Gray");
const l4168950 = new Lego([4168950, 4552006], "Hips and Black Legs", "Dark Red");
const l4277226 = new Lego([4277226, 4278504], "Helmet Viking with Side Horn Holes", "Metallic Gold");
const l4143210 = new Lego([4143210, 4543048, 4552503, 4667764, 6117295, 6132209, 6352103], "Neckwear Cape, Standard [Traditional Starched Fabric]", "Red");
const l4276756 = new Lego([4276756], "Minifig Head Knight / King / Wizard / Warrior, White Beard with Sideburns and Eyebrows, Gritted Teeth Print [Blocked Open Stud]", "Yellow");
const l4274023 = new Lego([4274023], "Helmet Viking with Side Horn Holes", "Speckle Black-Silver");
const l4276757 = new Lego([4276757], "Minifig Head Karzon / Warrior, Brown Beard with Stubble, Yelling Mouth Print [Blocked Open Stud]", "Yellow");
const l4276774 = new Lego([4276774], "Torso Armour with Metal Collar and Belt, and Brown Straps Print, Yellow Arms and Hands", "Yellow");
const l4276775 = new Lego([4276775], "Torso Armor, Chain Mail and Leather Shoulder Belt with Axe Print, Sand Green Arms, Yellow Hands", "Dark Bluish Gray");
const l4226869 = new Lego([4226869, 6004681], "Hips and Dark Green Legs", "Dark Green");
const l4187305 = new Lego([4187305], "Minifig Head, Beard with Gray Hair, Moustache, and Angry Eyebrows Print", "Yellow");
const l73418 = new Lego([73418, 4600197], "Hips and Blue Legs", "Black");
const l4276777 = new Lego([4276777], "Torso Armor, Viking, 2 Shoulder Rondels and Waist Rondel Print, Sand Blue Arms, Yellow Hands", "Dark Blue");
const l4276244 = new Lego([4276244], "Minifig Head Aquaraider / King / Dwarf / Warrior, Light Brown Beard with Sideburns and Eyebrows Print [Blocked Open Stud]", "Yellow");
const l49 = new Lego([49], "Torso Armor, Scale Mail and Diagonal Leather Belt Print, Light Bluish Gray Arms, Yellow Hands", "Dark Bluish Gray");
const l4276760 = new Lego([4276760], "Minifig Head Warrior, Chain Mail Balaclava, Brown Beard and Eyebrows, Gritted Teeth, White Pupils Print [Blocked Open Stud]", "Light Bluish Gray");
const l4273018 = new Lego([4273018], "Minifig Neckwear Armor Breastplate with Leg Protection [Plain]", "Speckle Black-Silver");
const l4162916 = new Lego([4162916, 4569107], "Hips and Dark Blue Legs", "Dark Blue");
const l4276468 = new Lego([4276468], "Torso Mail Armour with 2 Shoulder Rondels and Crossed Belts Print, Dark Blue Arms, Yellow Hands", "Dark Bluish Gray");
const l4215503 = new Lego([4215503], "Minifig Head Harry Osborn / Aquaraider / Knight / Dwarf, Brown Eyebrows, Vertical Cheek Lines, Chin Dimple Print [Blocked Open Stud]", "Yellow");
const l4225880 = new Lego([4225880], "Minifig Head King Jayko / King Mathias / Warrior / Wizard / Knight / , Gray Beard Fading to White Hair, White Pupils Print [Blocked Open Stud]", "Yellow");
const l4222693 = new Lego([4222693, 4570433], "Hips and Dark Bluish Gray Legs", "Dark Bluish Gray");
const l4225875 = new Lego([4225875], "Minifig Head Rascus / Soldier / Knight / Warrior / Soccer Player, Male, Messy Black Hair, Goatee Print", "Yellow");
const l602026 = new Lego([602026], "Bar 7 x 3 with 2 Clips (Ladder)", "Black");
const l50 = new Lego([50], "Brick 1 x 2 x 5 with Scorpion and Dark Red Pattern", "Black");
const l4114381 = new Lego([4114381, 4217119], "Brick 8 x 8", "Black");
const l3007226 = new Lego([3007226, 4181042], "Brick 12 x 24", "Black");
const l292126 = new Lego([292126, 6170566], "Brick, Modified 1 x 1 with Bar Handle", "Black");
const l407026 = new Lego([407026], "Brick, Modified 1 x 1 with Headlight", "Black");
const l458926 = new Lego([458926, 4518219, 4529236], "Cone 1 x 1 without Top Groove", "Black");
const l4157086 = new Lego([4157086], "Door, Frame 2 x 8 x 6 Swivel without Bottom Notches", "Black");
const l51 = new Lego([51], "Flag 2 x 2 Square, Dual Pattern, Scorpion and Lion with Crown", "Black");
const l3038626 = new Lego([3038626, 4167106], "Hinge Brick 1 x 2 Locking with 1 Finger Vertical End and 2 Fingers Vertical End, 9 Teeth", "Black");
const l4129975 = new Lego([4129975, 4144502], "Hinge Brick 1 x 2 Locking with 2 Fingers Vertical End, 9 Teeth", "Black");
const l393826 = new Lego([393826], "Hinge Brick 1 x 2 Top Plate", "Black");
const l384826 = new Lego([384826, 4118867], "Minifigure, Weapon Axe, Halberd", "Black");
const l4105221 = new Lego([4105221], "Pane for Window 1 x 2 x 2 2/3 Twisted Bar with Rounded Top", "Black");
const l4106347 = new Lego([4106347], "Panel 1 x 1 x 1 Corner", "Black");
const l486526 = new Lego([486526, 6146220], "Panel 1 x 2 x 1", "Black");
const l302226 = new Lego([302226], "Plate 2 x 2", "Black");
const l4166619 = new Lego([4166619], "Plate 8 x 8", "Black");
const l462326 = new Lego([462326], "Plate, Modified 1 x 2 with Bar Arm Up (Undetermined Type)", "Black");
const l281726 = new Lego([281726], "Plate, Modified 2 x 2 with Pin Holes", "Black");
const l329826 = new Lego([329826], "Slope 33 3 x 2", "Black");
const l4160393 = new Lego([4160393], "Slope, Curved 6 x 1", "Black");
const l366026 = new Lego([366026], "Slope, Inverted 45 2 x 2 with Flat Bottom Pin", "Black");
const l416226 = new Lego([416226], "Tile 1 x 8", "Black");
const l4221774 = new Lego([4221774], "Turntable 2 x 2 Plate with Light Bluish Gray Top (3680 / 3679)", "Black");
const l4161332 = new Lego([4161332], "Wedge, Plate 4 x 2 Left", "Black");
const l4160869 = new Lego([4160869], "Wedge, Plate 4 x 2 Right", "Black");
const l52 = new Lego([52], "Plastic Flag with Lion with Crown Pattern, Complete Sheet", "Blue");
const l4224049 = new Lego([4224049, 4277935], "Bracket 1 x 2 - 2 x 2", "Blue-Violet");
const l4224046 = new Lego([4224046], "Brick 1 x 2 x 5 - Blocked Open Studs or Hollow Studs", "Blue-Violet");
const l4224048 = new Lego([4224048], "Brick 1 x 6", "Blue-Violet");
const l4223708 = new Lego([4223708], "Brick, Round 1 x 1 Open Stud", "Blue-Violet");
const l4223720 = new Lego([4223720], "Flag 4 x 1 Wave Left", "Flag 4 x 1 Wave Left", "Blue-Violet");
const l53 = new Lego([53], "Horse Barding, Ruffled Edge with Knights Kingdom II Lion with Crown Pattern", "Blue-Violet");
const l4227044 = new Lego([4227044], "Horse Battle Helmet, Angular", "Blue-Violet");
const l4224050 = new Lego([4224050], "Slope, Inverted 45 2 x 2 with Flat Bottom Pin", "Blue-Violet");
const l4226986 = new Lego([4226986], "Tile 1 x 6", "Blue-Violet");
const l4226985 = new Lego([4226985], "Tile 2 x 2 with Groove", "Blue-Violet");
const l4226977 = new Lego([4226977], "Wedge 12 x 3 Left", "Blue-Violet");
const l4226976 = new Lego([4226976], "Wedge 12 x 3 Right", "Blue-Violet");
const l70501 = new Lego([70501], "Minifigure, Utensil Coins on Sprue (10, 20, 30, 40) Type 1", "Chrome Gold");
const l4226978 = new Lego([4226978], "Baseplate 8 x 16", "Dark Bluish Gray");
const l4211088 = new Lego([4211088], "Brick 1 x 2", "Dark Bluish Gray");
const l4217133 = new Lego([4217133], "Brick 8 x 16", "Dark Bluish Gray");
const l4211097 = new Lego([4211097], "Brick, Round 4 x 4 with 4 Side Pin Holes and Center Axle Hole", "Dark Bluish Gray");
const l4227021 = new Lego([4227021], "Castle Turret Top 4 x 8 x 2 1/3", "Dark Bluish Gray");
const l4226982 = new Lego([4226982], "Door 2 x 5 x 5 Swivel, Bracket Base", "Dark Bluish Gray");
const l4219902 = new Lego([4219902], "Minifigure, Weapon Lance", "Dark Bluish Gray");
const l4210660 = new Lego([4210660], "Plate, Modified 1 x 2 with Bar Handle on Side - Free Ends", "Dark Bluish Gray");
const l4227027 = new Lego([4227027], "Hinge Brick 1 x 2 Locking with 1 Finger Horizontal End", "Dark Red");
const l4164219 = new Lego([4164219, 4539061], "Plate 1 x 4", "Dark Red");
const l4167500 = new Lego([4167500, 4226508, 4243840, 4613268, 6134368], "Plate 4 x 4", "Dark Red");
const l4162216 = new Lego([4162216, 4609925], "Slope 45 2 x 2", "Dark Red");
const l4163459 = new Lego([4163459, 6251599], "Wedge 6 x 2 Left", "Dark Red");
const l4163457 = new Lego([4163457, 6251602], "Wedge 6 x 2 Right", "Dark Red");
const l4177396 = new Lego([4177396, 6005069], "Wedge 12 x 3 Left", "Dark Red");
const l4177387 = new Lego([4177387, 6005098], "Wedge 12 x 3 Right", "Dark Red");
const l4157270 = new Lego([4157270, 6171101], "Frog", "Green");
const l4221600 = new Lego([4221600], "Arch 1 x 6 x 2 - Thick Top with Reinforced Underside", "Light Bluish Gray");
const l4221589 = new Lego([4221589], "Arch 1 x 8 x 2", "Light Bluish Gray");
const l4211605 = new Lego([4211605], "Arch 4 x 12 x 6 Wall with Grooves", "Light Bluish Gray");
const l54 = new Lego([54], "Baseplate, Raised 32 x 48 x 6 with 4 Corner Pits with Dark Bluish Gray and Light Bluish Gray Rock Pattern", "Light Bluish Gray");
const l4211389 = new Lego([4211389], "Brick 1 x 1", "Light Bluish Gray");
const l4211362 = new Lego([4211362], "Brick 1 x 1 x 5 - Blocked Open Stud or Hollow Stud", "Light Bluish Gray");
const l4211564 = new Lego([4211564], "Brick 1 x 2 x 2 with Inside Axle Holder", "Light Bluish Gray");
const l4211363 = new Lego([4211363], "Brick 1 x 2 x 5 - Blocked Open Studs or Hollow Studs", "Light Bluish Gray");
const l4211879 = new Lego([4211879], "Brick 1 x 3 x 5", "Light Bluish Gray");
const l4211393 = new Lego([4211393], "Brick 1 x 6", "Light Bluish Gray");
const l4211522 = new Lego([4211522], "Brick 1 x 12", "Light Bluish Gray");
const l4211366 = new Lego([4211366], "Brick 1 x 16", "Light Bluish Gray");
const l4211650 = new Lego([4211650], "Brick 2 x 2 x 3", "Light Bluish Gray");
const l4211386 = new Lego([4211386], "Brick 2 x 3", "Light Bluish Gray");
const l4211476 = new Lego([4211476], "Brick, Modified 1 x 1 with Headlight", "Light Bluish Gray");
const l4211752 = new Lego([4211752, 6356172], "Brick, Modified 2 x 2 with Pins and Axle Hole", "Light Bluish Gray");
const l4224281 = new Lego([4224281], "Brick, Modified 2 x 2 x 6 with Groove", "Light Bluish Gray");
const l4223716 = new Lego([4223716], "Castle Turret Top 4 x 8 x 2 1/3", "Light Bluish Gray");
const l4222833 = new Lego([4222833, 6005319], "Panel 3 x 4 x 6 Turret Wall with Window", "Light Bluish Gray");
const l4223087 = new Lego([4223087], "Panel 3 x 8 x 6 with Window", "Light Bluish Gray");
const l4211488 = new Lego([4211488], "Slope 33 3 x 1", "Light Bluish Gray");
const l4211614 = new Lego([4211614], "Slope 45 2 x 1", "Light Bluish Gray");
const l4211411 = new Lego([4211411], "Slope 45 2 x 1 Triple with Inside Bar", "Light Bluish Gray");
const l4211410 = new Lego([4211410], "Slope 45 2 x 2", "Light Bluish Gray");
const l4211494 = new Lego([4211494], "Slope 75 2 x 1 x 3 - Open Stud", "Light Bluish Gray");
const l4211684 = new Lego([4211684], "Slope 75 2 x 2 x 3 - Hollow Studs", "Light Bluish Gray");
const l4211437 = new Lego([4211437], "Slope, Inverted 45 2 x 1", "Light Bluish Gray");
const l4216248 = new Lego([4216248], "Slope, Inverted 75 2 x 1 x 3", "Light Bluish Gray");
const l4211481 = new Lego([4211481], "Tile 1 x 8", "Light Bluish Gray");
const l4211350 = new Lego([4211350], "Tile, Modified 1 x 2 Grille with Bottom Groove / Lip", "Light Bluish Gray");
const l4223104 = new Lego([4223104], "Minifigure, Weapon Sword, Greatsword Angular", "Pearl Sand Blue");
const l4223109 = new Lego([4223109], "Minifigure, Weapon Sword, Greatsword Angular", "Red");
const l4224626 = new Lego([4224626, 4511955, 4516713], "Chain 21 Links (16-17L)", "Reddish Brown");
const l4211300 = new Lego([4211300], "Fence 1 x 4 x 2 Spindled with 2 Studs", "Reddish Brown");
const l4223690 = new Lego([4223690, 4550846], "Minifigure, Weapon Axe, Halberd", "Reddish Brown");
const l4211196 = new Lego([4211196, 6434369], "Minifigure, Weapon Crossbow", "Reddish Brown");
const l4223737 = new Lego([4223737], "Rock 4 x 4 Octagonal Boulder, Bottom", "Reddish Brown");
const l4223736 = new Lego([4223736], "Rock 4 x 4 Octagonal Boulder, Top", "Reddish Brown");
const l4223106 = new Lego([4223106], "Minifigure, Weapon Sword, Greatsword Angular", "Reddish Gold");
const l30045 = new Lego([30045, 300405, 4109995], "Brick 1 x 2", "Tan");
const l300105 = new Lego([300105, 4114319], "Brick 2 x 4", "Tan");
const l4120133 = new Lego([4120133, 6109894], "Spider with Round Abdomen and Clip", "Trans-Neon Green");
const l55 = new Lego([55], "Minifigure, Shield Octagonal Long with Stud with Knights Kingdom Danju Wolf Pattern (Printed Version)", "Very Light Bluish Gray");
const l56 = new Lego([56], "Minifigure, Shield Octagonal Long with Stud with Knights Kingdom Jayko Hawk Pattern (Printed Version)", "Very Light Bluish Gray");
const l57 = new Lego([57], "Minifigure, Shield Octagonal Long with Stud with Knights Kingdom Rascus Monkey Pattern (Printed Version)", "Very Light Bluish Gray");
const l58 = new Lego([58], "Minifigure, Shield Octagonal Long with Stud with Knights Kingdom Santis Bear Pattern (Printed Version)", "Very Light Bluish Gray");
const l59 = new Lego([59], "Minifigure, Shield Octagonal Long with Stud with Knights Kingdom Vladek Scorpion Pattern (Printed Version)", "Very Light Bluish Gray");
const l365901 = new Lego([365901], "Arch 1 x 4", "White");
const l301001 = new Lego([301001], "Brick 1 x 4", "White");
const l4109791 = new Lego([4109791], "Brick 2 x 2 x 3", "White");
const l245801 = new Lego([245801, 4160228], "Brick, Modified 1 x 2 with Pin", "White");
const l393701 = new Lego([393701], "Hinge Brick 1 x 2 Base", "White");
const l4121830 = new Lego([4121830], "Horse with Black Eyes, White Pupils and Dark Orange Bridle Pattern", "White");
const l4162427 = new Lego([4162427], "Minifigure, Head Skull Evil with Eyebrows, Black Print Pattern - Blocked Open Stud", "White");
const l623101 = new Lego([623101], "Panel 1 x 1 x 1 Corner", "White");
const l304001 = new Lego([304001, 4121932], "Slope 45 2 x 1", "White");
const l303901 = new Lego([303901], "Slope 45 2 x 2", "White");
const l446001 = new Lego([446001], "Slope 75 2 x 1 x 3 - Open Stud", "White");
const l306901 = new Lego([306901], "Tile 1 x 2 with Groove", "White");
const l60 = new Lego([60], "Tile 1 x 2 with Groove with Locket and Chain Pattern", "White");
const l4226289 = new Lego([4226289], "Turntable 2 x 2 Plate with Light Bluish Gray Top (3680 / 3679)", "White");
const l4223107 = new Lego([4223107], "Minifigure, Weapon Sword, Greatsword Angular", "Yellow");
const l4225785 = new Lego([4225785], "Hips and Dark Purple Legs", "Light Bluish Gray");
const l4224092 = new Lego([4224092, 4298620], "Helmet, Standard", "Dark Purple");
const l61 = new Lego([61], "Torso, Dark Purple Arms, Light Bluish Gray Hands [Plain]", "Dark Purple");
const l62 = new Lego([62], "Minifig Head Danju, Beard Light Brown Sideburns, Goatee, Moustache, White Pupils Print", "Yellow");
const l63 = new Lego([63], "Minifig Neckwear Armor Breastplate with Leg Protection, Danju Geometric Print", "Dark Purple");
const l4223089 = new Lego([4223089], "Headwear Accessory Visor for Danju Minifig", "Dark Purple");
const l4223954 = new Lego([4223954], "Hips and Medium Blue Legs", "Light Bluish Gray");
const l4223090 = new Lego([4223090], "Headwear Accessory Visor Fanciful for Jayko Minifig", "Medium Blue");
const l4223918 = new Lego([4223918, 4298610], "Helmet, Standard", "Medium Blue");
const l64 = new Lego([64], "Minifig Neckwear Armor Breastplate with Leg Protection, Jayko Geometric Print", "Medium Blue");
const l4225929 = new Lego([4225929], "Torso, Medium Blue Arms, Light Bluish Gray Hands [Plain]", "Medium Blue");
const l4225878 = new Lego([4225878], "Minifig Head Jayko / Sir Kentis, Pupils, Black Hair, Eyebrows and Wide Smile Print (Jayko)", "Yellow");
const l4100457 = new Lego([4100457], "Crown", "Chrome Gold");
const l65 = new Lego([65], "Torso Armor, Lion with Crown Print, Royal Blue Arms, Black Hands", "Light Bluish Gray");
const l4225786 = new Lego([4225786], "Hips and Dark Bluish Gray Legs", "Royal Blue");
const l4225783 = new Lego([4225783], "Hips and Green Legs", "Dark Bluish Gray");
const l4223092 = new Lego([4223092], "Headwear Accessory Visor Fanciful for Rascus Minifig", "Green");
const l4114193 = new Lego([4114193, 4298622, 6095717], "Helmet, Standard", "Green");
const l66 = new Lego([66], "Minifig Neckwear Armor Breastplate with Leg Protection, Rascus Geometric Print", "Green");
const l4225903 = new Lego([4225903], "Torso, Green Arms, Dark Bluish Gray Hands [Plain]", "Green");
const l4225784 = new Lego([4225784], "Hips and Red Legs", "Dark Bluish Gray");
const l4223091 = new Lego([4223091], "Headwear Accessory Visor Fanciful for Santis Minifig", "Red");
const l244621 = new Lego([244621, 244671, 4106304, 4298617, 4610060, 6020371], "Helmet, Standard", "Red");
const l67 = new Lego([67], "Minifig Neckwear Armor Breastplate with Leg Protection, Santis Geometric Print", "Red");
const l68 = new Lego([68], "Torso, Red Arms, Dark Bluish Gray Hands [Plain]", "Red");
const l69 = new Lego([69], "Minifig Head Santis, Beard Full, Long Mouth, Thick Eyebrows, White Pupils Print [Blocked Open Stud]", "Yellow");
const l4226000 = new Lego([4226000, 6310398], "Helmet Castle with Cheek Protection Angled", "Black");
const l70 = new Lego([70], "Torso Armor with Scorpion Print, Dark Red Arms, Black Hands", "Black");
const l71 = new Lego([71], "Minifig Head King / Shadow Knight, Beard with Trimmed Chin, Full Cheeks, Striped Sideburns, Scowl Eyebrows, White Pupils Print [Blocked Open Stud]", "Yellow");
const l4223094 = new Lego([4223094], "Headwear Accessory Visor Fanciful for Vladek Minifig", "Black");
const l244626 = new Lego([244626, 4106307, 4298619, 4654642, 6020155], "Helmet, Standard", "Black");
const l72 = new Lego([72], "Minifig Neckwear Armor Breastplate with Leg Protection, Vladek Geometric Print", "Black");
const l4225928 = new Lego([4225928, 4647383, 6001778, 6245788], "Torso, Black Arms and Hands [Plain]", "Black");
const l9444 = new Lego([9444], "Hips and Black Legs", "Red");
const l4225877 = new Lego([4225877], "Minifig Head Vladek / Dracus / Knight, Sideburns with White Stripes, Frown and Facial Hair, White Pupils Print (Vladek) [Blocked Open Stud]", "Yellow");
const l626501 = new Lego([626501, 4142875], "Arm Skeleton", "White");
const l626601 = new Lego([626601, 6038450, 6240495], "Leg Skeleton", "White");
const l626001 = new Lego([626001], "Torso Skeleton [Thin Shoulder Pins]", "White");
const l4141255 = new Lego([4141255,4547765], "Cylinder 3 x 6 x 2 2/3 Horizontal - Round Connections Between Interior Studs", "Black");
const l4184617 = new Lego([4184617], "Flag 2 x 2 Trapezoid", "Black");
const l4163904 = new Lego([4163904], "Hinge Brick 2 x 2 Locking with 1 Finger Vertical and Axle Hole (x Shape)", "Black");
const l4507820 = new Lego([4507820], "Hinge Cylinder 1 x 3 Locking with 1 Finger and 2 Fingers on Ends, 9 Teeth, with Hole", "Black");
const l400626 = new Lego([400626,4569095,6034000], "Minifigure, Utensil Tool Spanner Wrench / Screwdriver", "Black");
const l4504187 = new Lego([4504187], "Plate, Modified 1 x 2 with Racers Car Grille", "Black");
const l658326 = new Lego([658326,6271649], "Plate, Modified 1 x 6 with Train Wagon End", "Black");
const l4541191 = new Lego([4541191], "Slope 18 2 x 1 x 2/3 with Grille", "Black");
const l4143539 = new Lego([4143539,4290713], "Technic Ball Joint", "Black");
const l237626 = new Lego([237626], "Tile, Round 2 x 2 with Lifting Ring Thin", "Black");
const l4191191 = new Lego([4191191], "Wedge 4 x 4 x 2/3 Triple Curved", "Black");
const l4189120 = new Lego([4189120,4282744], "Bracket 1 x 2 - 1 x 4", "Blue");
const l4247103 = new Lego([4247103,4514398], "Plate, Modified 1 x 2 with Bar Handle on Side - Closed Ends", "Blue");
const l4560180 = new Lego([4560180,4654678], "Tile 2 x 4", "Blue");
const l4210725 = new Lego([4210725], "Brick, Modified 1 x 4 with Studs on Side", "Dark Bluish Gray");
const l4212529 = new Lego([4212529,6347464,30395199], "Hook Tow Ball", "Dark Bluish Gray");
const l4210644 = new Lego([4210644,4261908], "Minifigure, Utensil Handlebars", "Dark Bluish Gray");
const l4210794 = new Lego([4210794], "Plate 6 x 8", "Dark Bluish Gray");
const l4521185 = new Lego([4521185,4540386], "Slope 18 2 x 1 x 2/3 with Grille", "Dark Bluish Gray");
const l4278424 = new Lego([4278424,4502068], "Vehicle, Air Scoop Engine Top 2 x 2", "Dark Bluish Gray");
const l4297454 = new Lego([4297454,6060830,6064621], "Cone 2 x 2 x 2 - Open Stud", "Dark Purple");
const l4255409 = new Lego([4255409,4567509], "Slope 30 1 x 1 x 2/3", "Dark Purple");
const l4225012 = new Lego([4225012,4567508,6264053,6331924], "Slope 33 3 x 1", "Dark Purple");
const l4518845 = new Lego([4518845,4569911], "Technic, Panel Engine Block Half / Side Intake", "Dark Purple");
const l4225185 = new Lego([4225185,6057988], "Tile 1 x 4", "Dark Purple");
const l4517749 = new Lego([4517749,6262492], "Wedge 4 x 6 x 2/3 Triple Curved", "Dark Purple");
const l4295260 = new Lego([4295260], "Tile 1 x 2 with Groove with White 100 Paper Bill Money Pattern", "Green");
const l4223363 = new Lego([4223363], "Brick, Modified 1 x 1 with 3 Loudspeakers / Space Positioning Rockets", "Light Bluish Gray");
const l4261357 = new Lego([4261357], "Minifigure, Utensil Space Gun / Torch", "Light Bluish Gray");
const l4211576 = new Lego([4211576], "Panel 1 x 2 x 2 - Hollow Studs", "Light Bluish Gray");
const l3023194 = new Lego([3023194,4211398], "Plate 1 x 2", "Light Bluish Gray");
const l4211479 = new Lego([4211479], "Plate, Modified 1 x 1 with U Clip Thick (Vertical Grip)", "Light Bluish Gray");
const l4512360 = new Lego([4512360], "Technic, Axle Connector 2L (Smooth with x Hole + Orientation)", "Light Bluish Gray");
const l4558169 = new Lego([4558169], "Tile 1 x 3", "Light Bluish Gray");
const l4299119 = new Lego([4299119,6109684], "Wheel 18mm D. x 14mm with Pin Hole, Fake Bolts and Shallow Spokes", "Light Bluish Gray");
const l4518406 = new Lego([4518406], "Plate, Modified 1 x 4 with Angled Tubes", "Pearl Light Gray");
const l4211189 = new Lego([4211189], "Plate 2 x 3", "Reddish Brown");
const l4211197 = new Lego([4211197], "Slope 33 3 x 1", "Reddish Brown");
const l4211199 = new Lego([4211199], "Slope 45 2 x 1", "Reddish Brown");
const l4211202 = new Lego([4211202], "Slope 45 2 x 2", "Reddish Brown");
const l4211195 = new Lego([4211195], "Slope, Inverted 33 3 x 1", "Reddish Brown");
const l4211222 = new Lego([4211222], "Slope, Inverted 45 2 x 1", "Reddish Brown");
const l4211221 = new Lego([4211221], "Slope, Inverted 45 2 x 2 with Flat Bottom Pin", "Reddish Brown");
const l4189803 = new Lego([4189803,6268111], "Panel 1 x 2 x 2 - Hollow Studs", "Trans-Brown");
const l4244362 = new Lego([4244362,6245250], "Slope 30 1 x 1 x 2/3", "Trans-Clear");
const l3005748 = new Lego([3005748,6005748,6240221], "Plate, Round 1 x 1", "Trans-Green");
const l4524365 = new Lego([4524365,6171764], "Bar with Light Cover (Bulb) / Bionicle Barraki Eye", "Trans-Orange");
const l4222960 = new Lego([4222960,6240227], "Plate, Round 1 x 1", "Trans-Orange");
const l4529318 = new Lego([4529318,4567340,6172235,6337603], "Cone 1 x 1 with Top Groove", "Trans-Purple");
const l4244367 = new Lego([4244367,4260942,6245272], "Slope 30 1 x 1 x 2/3", "Trans-Yellow");
const l4570039 = new Lego([4570039], "Windscreen 4 x 4 x 1", "Trans-Yellow");
const l4521048 = new Lego([4521048,4568389,6014033,6270110], "Barb / Claw / Horn / Tooth - Small", "Yellow");
const l300124 = new Lego([300124], "Brick 2 x 4", "Yellow");
const l3039624 = new Lego([3039624,4142726,4163290,6146964], "Hinge 1 x 2 Locking with 2 Fingers, 9 Teeth and Tow Ball Socket", "Yellow");
const l4144579 = new Lego([4144579,4218725], "Hinge Brick 1 x 6 Locking with 1 Finger Vertical End and 2 Fingers Vertical End, 9 Teeth", "Yellow");
const l403224 = new Lego([403224], "Plate, Round 2 x 2 with Axle Hole", "Yellow");
const l654124 = new Lego([654124], "Technic, Brick 1 x 1 with Hole", "Yellow");
const l9553 = new Lego([9553], "Vehicle, Steering Stand 1 x 2 with Black Steering Wheel", "Yellow");
const l383826 = new Lego([383826, 4550642], "Minifig Neckwear Airtanks", "Black");
const l4568359 = new Lego([4568359], "Helmet Space", "Dark Bluish Gray");
const l4551179 = new Lego([4551179], "Hips and Dark Bluish Gray Legs with Space Police 3 Pockets Print", "Dark Bluish Gray");
const l4551188 = new Lego([4551188], "Torso Spacesuit with Red Police Badge, Belt with Pouches / Radio on Back Print, Dark Bluish Gray Arms, Black Hands", "Dark Bluish Gray");
const l244741 = new Lego([244741, 4569898, 6173916, 6244788], "Headwear Accessory Visor For Standard Helmet", "Trans-Red");
const l4542167 = new Lego([4542167], "Minifig Head Doc, Thin Eyebrows, Determined / Open Mouth Grin with Teeth Print", "Yellow");
const l4552671 = new Lego([4552671], "Hips and Black Legs with Kneepads, Chain and Belt Print", "Black");
const l4570199 = new Lego([4570199], "Torso Leather Jacket with Zip, Red Lines and Logo Print, Light Bluish Gray Arms, Black Hands", "Black");
const l4570195 = new Lego([4570195], "Minifig Head Special, Alien with Tongue and Yellow Eyes, Dark Purple Scales Print (Squidtron)", "Light Bluish Gray");
const l4184645 = new Lego([4184645,4277932,6048855,6117973], "Bracket 1 x 2 - 2 x 2", "Black");
const l4535765 = new Lego([4535765,6320309], "Brick, Modified 1 x 1 with Clip (Horizontal Grip)", "Black");
const l71155 = new Lego([71155,6018431,6123960,6236969], "Net, String 10 x 10 Square", "Black");
const l4515368 = new Lego([4515368], "Plate, Modified 1 x 2 with Bar Handle on End", "Black");
const l4535771 = new Lego([4535771,4552347], "Technic, Liftarm, Modified T-Shape Thick 3 x 3", "Black");
const l3039126 = new Lego([3039126,4140670], "Tire 30.4 x 14 Offset Tread", "Black");
const l4538782 = new Lego([4538782], "Wheel Hard Plastic with Small Cleats and Flanges", "Black");
const l4514553 = new Lego([4514553,6299413], "Technic, Pin 3L with Friction Ridges", "Blue");
const l4211099 = new Lego([4211099], "Brick 1 x 8", "Dark Bluish Gray");
const l4210636 = new Lego([4210636], "Brick, Modified 1 x 2 with Grille / Fluted Profile", "Dark Bluish Gray");
const l4249139 = new Lego([4249139], "Brick, Round 2 x 2 with Axle Hole", "Dark Bluish Gray");
const l4211007 = new Lego([4211007], "Minifigure, Utensil Pickaxe", "Dark Bluish Gray");
const l4211006 = new Lego([4211006], "Minifigure, Utensil Shovel / Spade - Handle with Round End", "Dark Bluish Gray");
const l4210720 = new Lego([4210720], "Plate 6 x 14", "Dark Bluish Gray");
const l4210658 = new Lego([4210658,6296856,32013199], "Technic, Axle and Pin Connector Angled #1", "Dark Bluish Gray");
const l4210688 = new Lego([4210688,6262899], "Technic, Axle and Pin Connector Angled #4 - 135 degrees", "Dark Bluish Gray");
const l4516546 = new Lego([4516546,6084613], "Technic, Axle Connector 2L (Smooth with x Hole + Orientation)", "Dark Bluish Gray");
const l4210752 = new Lego([4210752,4495931], "Technic, Liftarm Thick 1 x 7", "Dark Bluish Gray");
const l4210673 = new Lego([4210673,4281516,6276837], "Technic, Liftarm, Modified Bent Thick 1 x 9 (7 - 3)", "Dark Bluish Gray");
const l4211472 = new Lego([4211472,6019212,6254807], "Bracket 2 x 2 - 2 x 2 with 2 Holes", "Light Bluish Gray");
const l4211391 = new Lego([4211391,6037399], "Brick 2 x 8", "Light Bluish Gray");
const l4211491 = new Lego([4211491], "Container, Box 2 x 2 x 2", "Light Bluish Gray");
const l4211492 = new Lego([4211492], "Container, Box 2 x 2 x 2 Door with Slot", "Light Bluish Gray");
const l4211847 = new Lego([4211847], "Cylinder 3 x 6 x 2 2/3 Horizontal - Round Connections Between Interior Studs", "Light Bluish Gray");
const l4211512 = new Lego([4211512], "Dish 2 x 2 Inverted (Radar)", "Light Bluish Gray");
const l4211767 = new Lego([4211767], "Engine, Large", "Light Bluish Gray");
const l4211475 = new Lego([4211475], "Plate, Round 2 x 2 with Axle Hole", "Light Bluish Gray");
const l4521897 = new Lego([4521897], "Technic Circular Saw Blade 9 x 9 with Pin Hole and Teeth in Same Direction", "Light Bluish Gray");
const l4209329 = new Lego([4209329,4278756], "Technic Driving Ring Extension", "Light Bluish Gray");
const l4535768 = new Lego([4535768], "Technic, Axle 9L", "Light Bluish Gray");
const l4211535 = new Lego([4211535], "Technic, Brick 1 x 1 with Hole", "Light Bluish Gray");
const l4211848 = new Lego([4211848,6421513], "Technic, Brick 6 x 8 Open Center", "Light Bluish Gray");
const l4211655 = new Lego([4211655], "Technic, Liftarm Thick 1 x 3", "Light Bluish Gray");
const l4225033 = new Lego([4225033,6282158], "Technic, Pin Connector Perpendicular 3L with 4 Pins", "Light Bluish Gray");
const l4122447 = new Lego([4122447,4164022,4613965], "Brick 1 x 2", "Lime");
const l4122449 = new Lego([4122449,4234716], "Brick 1 x 4", "Lime");
const l4122453 = new Lego([4122453,4165967], "Brick 2 x 4", "Lime");
const l4122445 = new Lego([4122445,4164023,4534667,4537936], "Plate 2 x 4", "Lime");
const l4160080 = new Lego([4160080,4504850], "Plate 4 x 4", "Lime");
const l4183133 = new Lego([4183133], "Plate, Round 1 x 1", "Lime");
const l4298015 = new Lego([4298015,4504372], "Slope 30 1 x 1 x 2/3", "Lime");
const l4537930 = new Lego([4537930], "Slope, Curved 2 x 4 x 2/3 without Bottom Tubes", "Lime");
const l4537928 = new Lego([4537928], "Slope, Curved 3 x 1", "Lime");
const l4212708 = new Lego([4212708,4529679], "Slope, Inverted 45 2 x 2 with Flat Bottom Pin", "Lime");
const l4263118 = new Lego([4263118,4651764,6170475,6286222], "Technic, Liftarm, Modified Bent Thick L-Shape 3 x 5", "Lime");
const l4160085 = new Lego([4160085,4164025,4500125], "Tile 1 x 2 with Groove", "Lime");
const l4164021 = new Lego([4164021], "Tile 1 x 4", "Lime");
const l4500755 = new Lego([4500755,6146890], "Wedge 4 x 6 x 2/3 Triple Curved", "Lime");
const l4538376 = new Lego([4538376,6100879,6170793], "Propeller 8 Blade 5 Diameter", "Orange");
const l300521 = new Lego([300521], "Brick 1 x 1", "Red");
const l4118897 = new Lego([4118897,6344178], "Technic, Axle Connector with Axle Hole", "Red");
const l306921 = new Lego([306921], "Tile 1 x 2 with Groove", "Red");
const l4514554 = new Lego([4514554,6321305], "Technic, Pin 3L without Friction Ridges", "Tan");
const l4530473 = new Lego([4530473], "Windscreen 5 x 8 x 2", "Trans-Brown");
const l389910 = new Lego([389910,626440,6238856], "Minifigure, Utensil Cup", "Trans-Clear");
const l302410 = new Lego([302410,302440,3000840,6252041], "Plate 1 x 1", "Trans-Clear");
const l302310 = new Lego([302310,622540,4167842,6240204], "Plate 1 x 2", "Trans-Clear");
const l4114505 = new Lego([4114505,6247790], "Rock 1 x 1 Jewel 24 Facet", "Trans-Neon Green");
const l4244369 = new Lego([4244369,6245265], "Slope 30 1 x 1 x 2/3", "Trans-Orange");
const l4107579 = new Lego([4107579,4506697,6003297,6271349], "Technic, Axle and Pin Connector Angled #5 - 112.5 degrees", "White");
const l9551 = new Lego([9551], "Vehicle, Steering Stand 1 x 2 with Black Steering Wheel", "White");
const l4543322 = new Lego([4543322], "Arm Rock Monster Large, Left", "Dark Bluish Gray");
const l4543325 = new Lego([4543325], "Arm Rock Monster Large, Right", "Dark Bluish Gray");
const l4543005 = new Lego([4543005], "Body Rock Monster Large with Dark Bluish Gray Top Pattern", "Trans-Neon Green");
const l4542169 = new Lego([4542169], "Minifig Head Rex, Dual Sided, Stubble, Gray Smudge, Orange Scars, Determined / Alarmed Print [Blocked Open Stud]", "Yellow");
const l4497254 = new Lego([4497254, 4524353], "Technic Brick Special 2 x 2 with Ball Receptacle Reinforced and Axle Hole", "Dark Bluish Gray");
const l4290452 = new Lego([4290452], "Minifig Head Ha-Ya-To, Dual Sided, Green Eyes, Smirk / Open Mouth Smirk Print [Blocked Open Stud]", "Yellow");
const l4292017 = new Lego([4292017,6031455], "Hair Angular Swept Back", "Red");
const l4521335 = new Lego([4521335], "Torso Silver Body Armour with Dark Orange Camouflage Print, White Arms, Black Hands", "White");
const l256926 = new Lego([256926,6164379,6265148], "Antenna Whip 8H", "Black");
const l409526 = new Lego([409526], "Bar 6.6L with Stop Ring (Patio Umbrella Stand)", "Black");
const l4107182 = new Lego([4107182,4143705,4248831], "Minifigure, Utensil Space Scanner Tool", "Black");
const l383926 = new Lego([383926], "Plate, Modified 1 x 2 with Bar Handles - Flat Ends, Low Attachment", "Black");
const l604126 = new Lego([604126], "Propeller 3 Blade 3 Diameter with Axle Hole", "Black");
const l459926 = new Lego([459926], "Tap 1 x 1 with Hole in Nozzle End", "Black");
const l4248204 = new Lego([4248204,6284188], "Technic Knob Cog / Gear / Wheel", "Black");
const l4107084 = new Lego([4107084,6271346], "Technic, Axle and Pin Connector Angled #5 - 112.5 degrees", "Black");
const l3205426 = new Lego([3205426,4107742,4140801,6321745], "Technic, Pin 3L with Friction Ridges and Stop Bush", "Black");
const l4211002 = new Lego([4211002], "Plate 2 x 6", "Dark Bluish Gray");
const l4497253 = new Lego([4497253], "Technic, Brick Modified 2 x 2 with Ball Joint and Axle Hole", "Dark Bluish Gray");
const l4288114 = new Lego([4288114,4494600], "Arm Mechanical, Exo-Force / Bionicle, Thin Support", "Pearl Light Gray");
const l302221 = new Lego([302221,4613974], "Plate 2 x 2", "Red");
const l379521 = new Lego([379521], "Plate 2 x 6", "Red");
const l254021 = new Lego([254021,4140585], "Plate, Modified 1 x 2 with Bar Handle on Side - Free Ends", "Red");
const l4129539 = new Lego([4129539], "Slope 18 4 x 2", "Red");
const l428621 = new Lego([428621], "Slope 33 3 x 1", "Red");
const l304021 = new Lego([304021,4121934], "Slope 45 2 x 1", "Red");
const l304921 = new Lego([304921,4258056], "Slope 45 2 x 1 Double / Inverted (Undetermined Type)", "Red");
const l4234526 = new Lego([4234526,4251818], "Slope 65 2 x 2 x 2 with Bottom Tube", "Red");
const l4500462 = new Lego([4500462], "Slope, Inverted 33 3 x 2 with Flat Bottom Pin and Connections between Studs", "Red");
const l366021 = new Lego([366021], "Slope, Inverted 45 2 x 2 with Flat Bottom Pin", "Red");
const l4189936 = new Lego([4189936,6262898], "Technic, Axle and Pin Connector Angled #4 - 135 degrees", "Red");
const l4119331 = new Lego([4119331], "Technic, Axle Connector 2 x 3 with Ball Joint Socket - Open Sides, Angled Forks with Closed Axle Holes", "Red");
const l370921 = new Lego([370921], "Technic, Plate 2 x 4 with 3 Holes", "Red");
const l4180533 = new Lego([4180533,4372321], "Wedge, Plate 3 x 2 Left", "Red");
const l4180504 = new Lego([4180504,4372221], "Wedge, Plate 3 x 2 Right", "Red");
const l4178728 = new Lego([4178728,6278445], "Wedge, Plate 4 x 4 Cut Corner", "Red");
const l459805 = new Lego([459805,4125218,4262527], "Bracket 3 x 2 - 2 x 2 Inverted (Space Seat)", "Tan");
const l4163015 = new Lego([4163015,4286384], "Windscreen 6 x 4 x 2 Wedge Curved", "Trans-Brown");
const l474043 = new Lego([474043,3006343,6245293,6398233], "Dish 2 x 2 Inverted (Radar)", "Trans-Dark Blue");
const l618844 = new Lego([618844], "Cone 1 x 1", "Trans-Yellow");
const l614144 = new Lego([614144,3005744,6240216], "Plate, Round 1 x 1", "Trans-Yellow");
const l287701 = new Lego([287701], "Brick, Modified 1 x 2 with Grille / Fluted Profile", "White");
const l4163475 = new Lego([4163475,4289534,6297272], "Cylinder 4 x 4 x 1 2/3 with Pin Holes and Center Bar", "White");
const l379401 = new Lego([379401], "Plate, Modified 1 x 2 with 1 Stud without Groove (Jumper)", "White");
const l241201 = new Lego([241201], "Tile, Modified 1 x 2 Grille with Bottom Groove / Lip", "White");
const l4287943 = new Lego([4287943], "Bionicle Foot Piraka Clawed with Marbled Pearl Light Gray Talons Pattern", "Dark Blue");
const l4276529 = new Lego([4276529], "Bionicle Piraka Arm Section with 2 Ball Joint", "Dark Blue");
const l4284582 = new Lego([4284582], "Bionicle Piraka Leg Lower Section with 2 Ball Joint", "Dark Blue");
const l4284567 = new Lego([4284567], "Bionicle Piraka Leg Upper Section Cover", "Dark Blue");
const l4279753 = new Lego([4279753], "Bionicle Piraka Spine Flexible with Mask and Arm Covers, Vezok", "Dark Blue");
const l4218719 = new Lego([4218719,4278741,4288210], "Bionicle Toa Metru Arm Lower Section with 2 Ball Joint", "Dark Blue");
const l4287936 = new Lego([4287936,4494484], "Bionicle Piraka Torso with 2 Ball Joint", "Pearl Light Gray");
const l4279746 = new Lego([4279746,4287137], "Bionicle Weapon Piraka Water Harpoon (Vezok)", "Pearl Light Gray");
const l4287097 = new Lego([4287097], "Bionicle Hips / Lower Torso with 2 Ball Joint and 7 Tooth Half Gear", "Sand Blue");
const l4287093 = new Lego([4287093], "Technic, Axle and Pin Connector 2 x 5 with 2 Ball Joint Sockets, Open Sides", "Sand Blue");
const l4287095 = new Lego([4287095], "Technic, Axle and Pin Connector 2 x 7 with 2 Ball Joint Sockets, Rounded Ends", "Sand Blue");
const l4198400 = new Lego([4198400,4265059], "Technic, Axle Connector 2 x 3 with Ball Joint Socket - Open Sides, Angled Forks with Closed Axle Holes", "Sand Blue");
const l4288205 = new Lego([4288205], "Bionicle Head Connector Block Eye/Brain Stalk (Piraka) - Light-Up", "Trans-Neon Orange");
const l4290480 = new Lego([4290480], "Bionicle Head Connector Block (Piraka) with Glow In Dark Teeth Pattern", "White");
const l653626 = new Lego([653626,4173668,6261371], "Technic, Axle and Pin Connector Perpendicular", "Black");
const l4248305 = new Lego([4248305], "Technic, Axle Connector 2 x 3 with Ball Joint Socket - Open Sides, Angled Forks with Closed Axle Holes", "Bright Light Orange");
const l4219217 = new Lego([4219217,4289249,4540593], "Bionicle Ball Joint 3 x 3 x 2 90 degrees with 2 Ball Joint and Axle Hole", "Dark Bluish Gray");
const l4217832 = new Lego([4217832,4278473], "Bionicle Head Connector Block (Toa Metru)", "Dark Bluish Gray");
const l4219221 = new Lego([4219221,4548195], "Bionicle Foot with Ball Joint Socket 2 x 3 x 5", "Dark Red");
const l4218956 = new Lego([4218956,4286359], "Bionicle Mask Huna (Toa Metru)", "Dark Red");
const l4218960 = new Lego([4218960,4278744], "Bionicle Toa Metru Arm Lower Section with 2 Ball Joint", "Dark Red");
const l4177440 = new Lego([4177440,4284480], "Bionicle 1 x 3 Tooth with Axle Hole", "Pearl Light Gray");
const l73 = new Lego([73], "Minifigure Cape Cloth, Standard - Starched Fabric - 4.0cm Height with Light Gray Stars and Copyright Symbol Pattern", "Black");
const l4153354 = new Lego([4153354], "Rat / Mouse", "Dark Gray");
const l4120318 = new Lego([4120318,4159752], "Cone 1 x 1", "Dark Pink");
const l4158958 = new Lego([4158958], "Minifigure, Headgear Hat, Wizard / Witch", "Dark Pink");
const l4119498 = new Lego([4119498,4243576,6195315], "Plate, Round 1 x 1", "Dark Pink");
const l4141174 = new Lego([4141174,4216479,6170298], "Plate, Round 1 x 1 with Flower Edge (4 Knobs / Petals)", "Dark Pink");
const l4158342 = new Lego([4158342], "Container, Cupboard 2 x 3 x 2 - Solid Studs", "Dark Turquoise");
const l4121532 = new Lego([4121532], "Panel 1 x 2 x 1", "Dark Turquoise");
const l4141376 = new Lego([4141376], "Minifigure, Utensil Broom", "Earth Orange");
const l4153281 = new Lego([4153281], "Owl, Rounded Features", "Light Gray");
const l4158309 = new Lego([4158309], "Plate 8 x 8", "Light Green");
const l74 = new Lego([74], "Minifigure, Utensil Book 2 x 3 with Red and Yellow Bottles, Flasks and Sparkles Pattern", "Light Turquoise");
const l4158327 = new Lego([4158327], "Container, Cupboard 2 x 3 x 2 - Solid Studs", "Medium Orange");
const l4158351 = new Lego([4158351], "Bar 1 x 6 with Hollow Studs", "Orange");
const l4118787 = new Lego([4118787], "Brick 1 x 3", "Orange");
const l4624801 = new Lego([4624801], "Panel 1 x 2 x 1", "Orange");
const l4158362 = new Lego([4158362,4497174,4497175,6210229], "Plate 1 x 8", "Orange");
const l4122468 = new Lego([4122468,4158355], "Plate 2 x 4", "Orange");
const l4121741 = new Lego([4121741], "Plate 2 x 6", "Orange");
const l4118828 = new Lego([4118828], "Slope 45 2 x 2", "Orange");
const l4158353 = new Lego([4158353], "Minifigure, Headgear Hat, Wizard / Witch", "Purple");
const l4159003 = new Lego([4159003], "Support 2 x 2 x 5 Bar on Tile Base with Solid Stud and Stop Ring", "Purple");
const l75 = new Lego([75], "Minifigure, Utensil Book 2 x 3 with Mushrooms and Vine Pattern", "Red");
const l4158307 = new Lego([4158307], "Plate 8 x 8", "Sand Green");
const l4106556 = new Lego([4106556,6274736], "Minifigure, Utensil Crystal Ball Globe 2 x 2 x 2", "Trans-Clear");
const l4100381 = new Lego([4100381], "Panel 1 x 2 x 3 - Solid Studs", "Trans-Clear");
const l618843 = new Lego([618843,4567331], "Cone 1 x 1", "Trans-Dark Blue");
const l4129911 = new Lego([4129911], "Tile 1 x 2 with Groove with Gold Stars Pattern", "Trans-Dark Blue");
const l4143577 = new Lego([4143577,4222652,4655286,6291400], "Bar 4L (Lightsaber Blade / Wand)", "Trans-Dark Pink");
const l4129857 = new Lego([4129857,4280215], "Container, Treasure Chest Bottom with Slots in Back", "Trans-Dark Pink");
const l4129858 = new Lego([4129858], "Container, Treasure Chest Lid Curved with Thick Hinge", "Trans-Dark Pink");
const l4128675 = new Lego([4128675], "Minifigure, Utensil Flask with Handle / Jug", "Trans-Dark Pink");
const l4129917 = new Lego([4129917,6247796], "Rock 1 x 1 Jewel 24 Facet", "Trans-Dark Pink");
const l3006848 = new Lego([3006848,6238046], "Brick, Round 1 x 1 Open Stud", "Trans-Green");
const l4141532 = new Lego([4141532], "Plate, Round 1 x 1 with Flower Edge (4 Knobs / Petals)", "Trans-Light Blue");
const l4119482 = new Lego([4119482,6247792], "Rock 1 x 1 Jewel 24 Facet", "Trans-Light Blue");
const l4124054 = new Lego([4124054,6170186], "Bar 4L (Lightsaber Blade / Wand)", "Trans-Neon Green");
const l458949 = new Lego([458949,618849], "Cone 1 x 1", "Trans-Neon Green");
const l4118778 = new Lego([4118778], "Scorpion", "Trans-Neon Orange");
const l4288245 = new Lego([4288245,6133300,6334830], "Arch 3 x 6 x 5 Ornamented", "White");
const l4141530 = new Lego([4141530], "Brick, Round 1 x 1 x 2/3 with Flower Edge (4 Knobs on Base)", "White");
const l625101 = new Lego([625101,4140370,4220184], "Cat, Crouching", "White");
const l458901 = new Lego([458901], "Cone 1 x 1", "White");
const l453601 = new Lego([453601,4109736,4520636,6360040], "Container, Cupboard 2 x 3 Drawer", "White");
const l453301 = new Lego([453301,4248214,4261470], "Container, Cupboard 2 x 3 x 2 Door", "White");
const l4108192 = new Lego([4108192,4140297,4226364], "Minifigure, Utensil Goblet", "White");
const l256601 = new Lego([256601,4119517,4499753,4532219], "Plant, Tree Palm Top", "White");
const l462301 = new Lego([462301], "Plate, Modified 1 x 2 with Bar Arm Up (Horizontal Arm 6mm)", "White");
const l203901 = new Lego([203901,4107861,4119500], "Support 2 x 2 x 7 Lamp Post, 6 Base Flutes", "White");
const l76 = new Lego([76], "Tile 1 x 2 with Groove with HP Spider, Bone, and Bag Pattern", "White");
const l9341 = new Lego([9341,4583501,6006026], "Hips and Blue Legs", "Blue");
const l4157065 = new Lego([4157065], "Hair Mid-Length", "Brown");
const l77 = new Lego([77], "Torso Sweater with Big Collar Print, Medium Blue Arms, Yellow Hands", "Medium Blue");
const l78 = new Lego([78], "Minifig Head Hermione Granger, Eyelashes, Peach Lips, Smile Print [Blocked Open Stud]", "Yellow");

// initialize sets
// set year from https://www.lego.com/en-us/service/buildinginstructions
const s10123 = new LegoSet("Cloud City", 10123, 2003, [l0, l4164067, l611226, l300426, l4188306, l362226, l301026, l4218987, l300326, l300226, l300126, l245626, l300726, l330823, l265326, l434926, l613426, l73587, l371026, l346026, l244526, l302126, l302026, l303026, l303226, l395826, l304826, l4143982, l244926, l4100333, l370826, l4144025, l662826, l306926, l243126, l663626, l255526, l368026, l4206482, l4143005, l4218968, l4124050, l4164069, l300527, l611127, l300427, l245427, l301027, l300927, l300327, l300727, l4118869, l4118868, l365927, l330727, l245827, l4144532, l3000027, l4108048, l4106728, l302327, l371027, l302227, l302027, l4113911, l4121924, l4107763, l4114127, l4133505, l4124098, l428627, l4121970, l4109984, l1, l4112039, l394027, l4114529, l4109979, l4108155, l416227, l306827, l395702, l4185274, l245302, l611102, l300402, l4107533, l362202, l235702, l300102, l4114248, l614302, l4214931, l4159736, l4113203, l458902, l393702, l2, l3, l486502, l4171667, l302302, l302102, l302002, l614102, l403202, l254002, l379402, l4109642, l303902, l446002, l368402, l366502, l4220070, l655302, l4186007, l3200002, l370102, l4141499, l371302, l4141455, l367302, l281902, l4, l243102, l5, l6, l243202, l4116842, l7, l4160344, l4160326, l330705, l306205, l4114053, l4114055, l362305, l4107588, l4140562, l254005, l65625, l654105, l4108151, l416205, l4185177, l8, l306510, l3006840, l4124073, l4101716, l4107106, l614149, l3006447, l4153468, l614147, l4109765, l4124108, l3006841, l614141, l241241, l300401, l300901, l300301, l235701, l300101, l614301, l4203583, l4143254, l302101, l379501, l265401, l9, l428601, l10, l4143976, l366001, l4140502, l243101, l663601, l416201, l415001, l11, l4143673, l4141630, l12, l13, l4140068, l14, l4124172, l9339, l4124171, l4275310, l15, l16, l390125, l17, l18, l390126, l4219380, l19, l20, l21, l4124069, l4275334, l22, l23, l24, l25, l26, l74326, l27, l4275255, l28], [1, 2, 2, 10, 1, 2, 2, 1, 9, 1, 7, 2, 14, 2, 6, 4, 1, 1, 3, 2, 1, 2, 3, 2, 2, 1, 4, 6, 1, 1, 1, 1, 4, 1, 7, 1, 8, 1, 1, 3, 2, 2, 1, 12, 4, 1, 17, 6, 1, 6, 2, 5, 1, 6, 1, 8, 2, 1, 6, 1, 3, 8, 36, 4, 5, 1, 1, 1, 1, 7, 4, 4, 1, 1, 2, 1, 10, 8, 6, 8, 10, 2, 4, 2, 2, 4, 2, 4, 2, 5, 7, 1, 4, 2, 4, 1, 1, 1, 2, 1, 1, 2, 2, 4, 11, 3, 2, 1, 2, 1, 4, 6, 8, 1, 2, 2, 2, 6, 1, 2, 1, 1, 1, 1, 1, 2, 8, 1, 1, 1, 1, 1, 1, 11, 21, 2, 1, 1, 5, 1, 2, 3, 12, 4, 2, 1, 2, 2, 1, 2, 8, 22, 8, 4, 12, 10, 1, 2, 4, 9, 3, 4, 5, 2, 2, 1, 1, 3, 1, 1, 1, 4, 2, 1, 3, 2, 4, 2, 1, 2, 6, 1, 1, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
const s8624 = new LegoSet("Race for the Mask of Life", 8624, 2006, [l362226, l301026, l246526, l300126, l420226, l4110045, l4209683, l4143372, l302326, l371026, l303126, l303226, l303026, l303326, l4185583, l428626, l655326, l370526, l370626, l370726, l373726, l370826, l4107085, l653826, l370026, l370126, l389426, l370226, l389526, l370326, l3253226, l3252326, l4140429, l4049026, l4128603, l4156980, l655826, l4144024, l4144023, l4119589, l613426, l278026, l3200126, l656526, l656426, l4160349, l4200486, l4251394, l4251393, l4206482, l29, l4578106, l4194991, l4205004, l4278114, l4288824, l4210978, l4211060, l4211105, l4210697, l4210892, l4210650, l4211094, l4211065, l4210997, l4210802, l4299022, l4210637, l4211054, l4210779, l4263624, l4211137, l4210751, l4210755, l4289258, l4211053, l4211055, l4211129, l4210866, l4210867, l4210786, l4210785, l4180470, l4210984, l4163454, l4228230, l4183880, l4267885, l30, l4276180, l4211499, l4211515, l4211396, l4211763, l4211728, l4215353, l4211622, l4211573, l4211815, l4211639, l4211567, l4211779, l4211543, l4211553, l4211705, l4211634, l4211885, l4211635, l4211565, l4211510, l4211741, l4211483, l3673194, l4211444, l4211449, l4279763, l4287937, l4175938, l4276534, l4256503, l4252695, l4178663, l4279767, l4279768, l4194984, l4194983, l4227872, l4288100, l4275510, l31, l4288839, l32, l33, l34, l35, l36, l37, l38, l39, l40, l41, l4276053, l302021, l4142865, l4140806, l65625, l4296577, l4233225, l70905, l4222196, l4288111, l4294538, l4296949, l4294145, l4294141, l4294996, l4294543, l4296954, l4288838, l4294140, l4288836, l4294993, l4294537, l4296955, l4294150, l4294995, l4294542, l4296952, l4294148, l4296947, l4294541, l4298919, l4296946, l4296943, l4297126, l4298916, l4297125, l4294550], [2, 4, 2, 4, 1, 1, 1, 1, 2, 6, 1, 1, 2, 4, 4, 2, 1, 1, 3, 2, 7, 3, 7, 8, 7, 2, 1, 1, 5, 2, 1, 1, 1, 2, 2, 6, 2, 4, 4, 4, 2, 35, 1, 1, 1, 2, 4, 1, 1, 4, 4, 4, 2, 3, 1, 1, 4, 8, 5, 4, 1, 3, 8, 7, 2, 1, 2, 2, 2, 4, 3, 2, 2, 4, 2, 2, 7, 4, 1, 1, 1, 1, 2, 1, 8, 6, 4, 2, 2, 2, 1, 1, 3, 4, 2, 2, 7, 3, 4, 3, 1, 2, 6, 18, 1, 2, 1, 1, 1, 1, 2, 4, 5, 3, 2, 2, 2, 2, 1, 2, 2, 8, 1, 2, 2, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 2, 5, 2, 5, 2, 2, 1, 16, 4, 2, 1, 2, 3, 4, 2, 1, 1, 3, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1]);
const s7020 = new LegoSet("Army of Vikings with Heavy Artillery Wagon", 7020, 2006, [l300326, l265326, l233526, l613426, l302326, l366626, l242026, l303426, l244526, l303226, l254026, l366526, l4142816, l370826, l370026, l370226, l4107558, l4111998, l278026, l370926, l306826, l255526, l4206482, l4222196, l4211066, l4211001, l4210997, l4211119, l4225733, l4244373, l4211135, l4211000, l3894199, l4211137, l4210755, l4210631, l4210788, l4210782, l4490374, l4211438, l4211397, l4211568, l4211503, l4211573, l4211815, l4211639, l4211553, l4211599, l4211688, l4211483, l4211709, l4211794, l4211791, l4278076, l4267358, l4226318, l449521, l4178640, l4227155, l4125189, l4186678, l75854, l4211236, l4211294, l4211147, l4211162, l4211163, l4211152, l4216945, l4211247, l4211159, l4490372, l4205470, l4205469, l4209002, l4209012, l4272994, l4273893, l4273892, l4273891, l4273896, l614105, l4119483, l4113955, l6247790, l6270106, l306201, l4170326, l234324, l4225787, l4276773, l4277226, l4273397, l4276756, l4226869, l4274023, l4276757, l4276774, l4276775, l4225880, l4276468, l4168950, l4276760, l4222693, l4225875, l4187305, l9339, l4276777, l4276244], [1, 2, 2, 2, 2, 2, 2, 3, 4, 1, 2, 1, 2, 1, 9, 2, 2, 4, 13, 2, 2, 4, 6, 6, 2, 6, 2, 8, 4, 4, 2, 2, 3, 2, 2, 2, 1, 1, 4, 3, 2, 8, 2, 4, 1, 10, 2, 3, 1, 2, 4, 1, 1, 1, 5, 1, 1, 10, 5, 1, 4, 1, 6, 2, 1, 1, 1, 12, 5, 2, 1, 2, 3, 3, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 18, 1, 2, 2, 2, 2, 1, 14, 1, 2, 7, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1]);
const s2516 = new LegoSet("Ninja Training Outpost", 2516, 2011, [l395726, l245326, l459526, l4584274, l449726, l4114206, l242026, l4550017, l254026, l614126, l4109969, l403223, l4211087, l4219836, l4182993, l4211111, l4536677, l4114348, l4535738, l4523159, l4563682, l302321, l4588003, l4244371, l4142865, l4211200, l4507139, l4260486, l4211219, l614101, l4515349, l4612327, l4612652, l4114503, l4611426], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 4, 2, 1, 1, 2, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1]);
const s2505 = new LegoSet("Garmadon's Dark Fortress", 2505, 2011, [l4581280, l233926, l4116854, l300426, l245426, l300826, l611226, l4515356, l4584274, l4558957, l4533572, l452826, l4114206, l4537058, l3024626, l302026, l408526, l379426, l4565323, l403226, l4143982, l609126, l4185272, l370526, l370726, l3203926, l370126, l4548278, l278026, l306926, l4143005, l4289542, l4211095, l4268139, l4210678, l3032199, l4226358, l4210967, l4182993, l4211045, l4261715, l4226221, l4211068, l4210639, l4211052, l4211069, l4210984, l4540178, l4566532, l4566522, l4225265, l4218700, l4566804, l4566927, l4612900, l4211628, l4599496, l4211428, l4211392, l4211795, l4558953, l4211580, l4211526, l4211582, l4519882, l4212074, l4215513, l4211445, l4211353, l4211406, l4239371, l4211451, l4612621, l4515351, l4211773, l4211519, l4179576, l4211815, l4211805, l4211550, l4502595, l4520320, l4211483, l2555194, l4211357, l4600267, l4600271, l4611904, l4600501, l4505990, l4538126, l4600519, l393821, l265421, l4593768, l4543094, l4227155, l4142865, l4119033, l4513174, l4225469, l4520638, l4211150, l4216945, l4211186, l4211247, l4211207, l4264669, l4211282, l4211204, l4273965, l362305, l4101763, l4185177, l4514700, l4540865, l4497943, l3006841, l4113954, l4189801, l4548009, l4296948, l4566256, l4273397, l4600307, l4600294, l246501, l300101, l306201, l614301, l4182304, l4603309, l82359, l486501, l302301, l408101, l4556152, l4222017, l3003301, l4565324, l4191825, l4542616, l4125562, l370901, l255501, l4179875, l4179874, l4602970, l4609295, l4612347, l4612985, l4612346, l4611434, l4612333, l3017721, l4611424, l4612645, l9339, l4616331, l4616311, l4616334, l4526756, l4631535, l4616366, l4616378, l4602984, l4611924, l4612771], [2, 4, 6, 4, 6, 1, 2, 2, 16, 2, 5, 1, 1, 6, 4, 1, 2, 6, 2, 5, 2, 2, 1, 1, 2, 2, 3, 2, 4, 4, 5, 2, 6, 13, 1, 3, 1, 2, 4, 4, 6, 6, 2, 4, 3, 1, 2, 2, 4, 21, 6, 2, 2, 1, 1, 1, 4, 4, 2, 2, 10, 6, 3, 2, 1, 1, 4, 11, 2, 1, 2, 8, 1, 3, 2, 2, 8, 2, 2, 4, 2, 4, 4, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 4, 1, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2, 4, 1, 1, 3, 2, 12, 12, 4, 2, 2, 1, 3, 15, 3, 6, 6, 4, 2, 7, 2, 2, 2, 1, 1, 2, 2, 5, 4, 4, 3, 3, 6, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
const s8962 = new LegoSet("Crystal King", 8962, 2009, [l4298653, l4515172, l4225201, l4155558, l4519244, l3200026, l278026, l4189110, l4210723, l45429941, l45429942, l4211094, l4210635, l4210997, l4216973, l4542272, l4210637, l42, l4211054, l4210797, l4210862, l4498096, l4524353, l4221775, l4211811, l4211388, l4211387, l4211385, l4211694, l4539187, l3795194, l4211477, l4211632, l4521921, l4211421, l43, l4211409, l4211552, l4502595, l3673194, l4240013, l4122439, l4521216, l4154506, l4175219, l4538780, l654121, l65625, l614149, l4124010, l4140733, l4542986, l44, l4210645, l4542545, l4542512, l4542171, l4540418, l4535553, l4542173], [1, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 6, 2, 1, 6, 3, 1, 2, 9, 6, 8, 4, 7, 1, 2, 1, 1, 3, 4, 7, 2, 2, 6, 8, 2, 8, 2, 2, 1, 1, 2, 12, 2, 1, 3, 1, 2, 1, 2, 4, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1]);
const s7660 = new LegoSet("Naboo N-1 Starfighter and Vulture Droid", 7660, 2007, [l4223247, l3005626, l4129579, l303426, l254026, l4499434, l304026, l4112591, l370526, l373726, l655826, l4162982, l368026, l4210677, l4211063, l4211065, l4210633, l4210908, l4244373, l4218696, l4211064, l4211086, l4210762, l4213607, l4211050, l4211069, l4227517, l4505142, l4251129, l4507045, l4293756, l4505141, l4211388, l4211394, l4211471, l4497653, l4285324, l4211804, l3623194, l4211438, l4211425, l4211397, l4211419, l4211611, l4299625, l4180543, l4211489, l4211436, l4211602, l4211442, l4211414, l2431194, l4211439, l4260934, l4260935, l4505087, l4505088, l4252368, l4211616, l4211617, l4211643, l409521, l4140806, l4211183, l4506987, l4211190, l4245599, l4290055, l4201066, l346005, l4217562, l4129574, l618841, l241241, l256924, l362224, l300924, l614324, l458924, l394224, l4179387, l486524, l371024, l302124, l383224, l244424, l329824, l4200030, l609124, l418524, l4114668, l306924, l241224, l4264028, l4294741, l4262136, l4160129, l4160107, l4247644, l4247642, l269524, l4507019, l4162229, l4507011, l4507010, l4225787, l4286744, l4507013, l4210645, l4211187, l4124113, l4124160, l45], [10, 1, 2, 1, 9, 1, 1, 1, 2, 2, 4, 1, 1, 1, 24, 2, 13, 3, 2, 1, 2, 2, 2, 2, 6, 2, 1, 2, 4, 3, 2, 2, 5, 2, 2, 2, 4, 2, 2, 2, 1, 5, 3, 1, 1, 1, 2, 10, 1, 2, 2, 4, 1, 3, 3, 1, 1, 2, 1, 1, 2, 3, 2, 2, 1, 6, 2, 4, 1, 2, 1, 1, 2, 2, 3, 2, 2, 2, 3, 3, 2, 2, 3, 2, 3, 4, 2, 2, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1]);
const s7019 = new LegoSet("Viking Fortress against the Fafnir Dragon", 7019, 2005, [l4223247, l604626, l4278806, l300426, l300126, l4214559, l46, l306226, l4159183, l4159623, l393726, l383126, l383026, l4158848, l47, l48, l256626, l302326, l346026, l302126, l302026, l379526, l303426, l383226, l303126, l303226, l303526, l303026, l395826, l302826, l302726, l408126, l601926, l408526, l4225201, l244426, l304526, l303826, l4278910, l3206226, l370526, l370626, l4173970, l3203926, l654126, l4233487, l370026, l389426, l3232426, l4121619, l4140429, l4049026, l4164133, l663226, l3225026, l655826, l4144024, l278026, l373826, l402526, l4221663, l245026, l241926, l4160025, l4197514, l4189110, l4219825, l4220973, l4211098, l4211075, l4211103, l4211100, l4210798, l4210783, l4211060, l4211109, l4227007, l4211085, l4224257, l4215386, l4210726, l4211094, l4211043, l4211065, l4210997, l3032199, l4226358, l4225356, l4210637, l4244373, l4211045, l4210760, l4210696, l4210797, l4218668, l4210779, l4211068, l4211096, l4211000, l4211086, l4242036, l4210857, l4210655, l4234599, l4210935, l4210762, l4261932, l4289258, l4210638, l4210667, l4211052, l4211055, l4289250, l4289875, l4276582, l4260505, l4260497, l4273402, l4276567, l4245567, l4276568, l4227557, l4227783, l4227559, l4260494, l4278009, l4269028, l4267885, l4177046, l4248832, l4276259, l4223108, l383228, l4116671, l4141691, l302928, l4208191, l4211628, l4211660, l4211881, l4211585, l4215513, l4211525, l4211508, l4211489, l4211622, l4211573, l4211815, l4211639, l4211805, l4211466, l4211610, l4211483, l4211709, l4255123, l4187593, l4267358, l4226318, l393821, l462321, l317621, l4142865, l306821, l4211236, l4211294, l4226966, l4211220, l4211193, l4216668, l4215429, l4225469, l4211180, l4211181, l4211162, l4211163, l4211206, l4272222, l4211150, l4211190, l4216695, l4211214, l4225700, l4264669, l4267033, l4211204, l4273965, l4272994, l4272154, l4272152, l4273893, l4273892, l4273891, l4273896, l303405, l265405, l4225609, l4113955, l612647, l4190222, l4273397, l4182304, l4276773, l4168950, l4277226, l4143210, l4276756, l4274023, l4276757, l4276774, l4276775, l4226869, l4187305, l73418, l4276777, l4276244, l49, l4276760, l4273018, l4162916, l4276468, l4215503], [6, 3, 1, 1, 2, 1, 6, 18, 1, 1, 4, 8, 8, 1, 2, 4, 6, 2, 4, 3, 2, 1, 1, 1, 2, 2, 6, 8, 2, 2, 2, 2, 6, 3, 1, 1, 2, 2, 2, 4, 2, 1, 2, 4, 8, 3, 1, 2, 1, 4, 2, 1, 2, 4, 2, 13, 4, 12, 1, 1, 2, 4, 1, 8, 2, 8, 1, 2, 64, 20, 6, 8, 2, 2, 7, 7, 6, 4, 4, 4, 2, 1, 10, 5, 1, 2, 1, 12, 2, 4, 10, 25, 2, 2, 3, 1, 1, 16, 15, 1, 2, 4, 1, 2, 2, 8, 2, 2, 2, 4, 3, 3, 3, 4, 1, 1, 1, 1, 2, 2, 2, 4, 1, 5, 2, 1, 1, 7, 1, 3, 4, 1, 2, 2, 8, 2, 8, 2, 4, 3, 6, 2, 25, 4, 2, 3, 4, 2, 3, 1, 2, 1, 13, 3, 1, 3, 9, 3, 1, 8, 8, 5, 1, 3, 1, 4, 2, 4, 10, 1, 16, 62, 50, 1, 1, 3, 19, 6, 1, 2, 2, 1, 1, 2, 4, 5, 1, 3, 3, 2, 3, 2, 1, 1, 1, 2, 4, 10, 2, 37, 12, 1, 3, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1]);
const s8781 = new LegoSet("Castle of Morcia", 8781, 2004, [l395726, l602026, l604626, l300426, l245426, l50, l362226, l300226, l4114381, l3007226, l292126, l407026, l46, l458926, l4157086, l51, l3038626, l4129975, l393826, l384826, l449726, l4105221, l4106347, l486526, l302326, l366626, l302226, l302126, l303426, l303126, l303226, l4166619, l408526, l379426, l462326, l281726, l614126, l4109969, l329826, l304026, l4160393, l366526, l366026, l370026, l370226, l306926, l663626, l416226, l306826, l255526, l4221774, l4221663, l245026, l4161332, l4160869, l52, l4224049, l4224046, l4224048, l4223708, l4223720, l53, l4227044, l4224050, l4226986, l4226985, l4226977, l4226976, l70501, l4226978, l4211088, l4211103, l4211100, l4227007, l4211085, l4217133, l4211097, l4227021, l4226982, l4219902, l4211001, l4211094, l4210660, l4228230, l4183880, l4227027, l4164219, l4167500, l4162216, l4163459, l4163457, l4177396, l4177387, l4223108, l4157270, l4221600, l4221589, l4211605, l54, l4211389, l4211362, l4211388, l4211564, l4211363, l4211879, l4211394, l4211393, l4211522, l4211366, l4211387, l4211650, l4211386, l4211476, l4211752, l4224281, l4223716, l4222833, l4223087, l4211488, l4211614, l4211411, l4211410, l4215353, l4211494, l4211684, l4211437, l4211436, l4216248, l4211481, l4211350, l4226318, l4223104, l4223109, l4224626, l4211162, l4211163, l4211300, l4223690, l4211196, l4211186, l4223737, l4223736, l4223106, l30045, l300105, l306205, l65625, l4120133, l612647, l614141, l55, l56, l57, l58, l59, l365901, l300401, l301001, l4109791, l245801, l306201, l393701, l4121830, l4162427, l623101, l486501, l302301, l304001, l303901, l446001, l306901, l60, l4226289, l4223107, l4225785, l4224092, l61, l62, l63, l4223089, l4223954, l4223090, l4223918, l64, l4225929, l4225878, l4100457, l65, l4225786, l4225880, l4225783, l4223092, l4114193, l66, l4225903, l4225875, l4225784, l4223091, l244621, l67, l68, l69, l4226000, l70, l4168950, l71, l4223094, l244626, l72, l4225928, l9444, l4225877, l626501, l626601, l82359, l626001], [5, 2, 1, 3, 2, 4, 4, 2, 4, 1, 2, 4, 4, 1, 1, 2, 2, 2, 2, 3, 8, 2, 2, 5, 16, 1, 8, 4, 1, 3, 2, 5, 2, 6, 1, 1, 4, 5, 1, 2, 2, 2, 2, 2, 2, 3, 4, 2, 5, 4, 4, 2, 2, 1, 1, 1, 6, 4, 8, 6, 5, 1, 1, 8, 8, 4, 1, 1, 1, 1, 11, 2, 1, 4, 3, 1, 4, 2, 1, 3, 2, 2, 4, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 14, 6, 43, 10, 2, 2, 2, 16, 1, 3, 1, 2, 2, 2, 1, 2, 4, 3, 2, 4, 6, 24, 6, 4, 12, 22, 2, 4, 2, 2, 1, 3, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 1, 14, 4, 1, 6, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 3, 4, 2, 6, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1]);
const s5982 = new LegoSet("Smash 'n' Grab", 5982, 2009, [l301026,l300826,l300726,l458926,l4141255,l4184617,l4163904,l4507820,l400626,l302126,l244526,l254026,l4504187,l658326,l4541191,l329826,l4143539,l373726,l4107558,l3253226,l278026,l237626,l4191191,l4189120,l4247103,l403223,l4560180,l4210725,l4212529,l4210644,l4211001,l4210794,l4521185,l4244373,l4211064,l4263624,l4211069,l4227517,l4278424,l4297454,l4255409,l4225012,l4518845,l4225185,l4517749,l4295260,l4223363,l4211526,l4211499,l4261357,l4539187,l4211576,l3023194,l4211479,l4211763,l4211410,l4512360,l4520320,l4558169,l4299119,l4518406,l4211189,l4211197,l4211199,l4211202,l4211195,l4211222,l4211221,l4189803,l4244362,l3005748,l614149,l4524365,l4222960,l4529318,l614141,l4244367,l4570039,l4521048,l300124,l3039624,l4144579,l403224,l654124,l9553,l383826,l4568359,l4551179,l4551188,l244741,l4542167,l4552671,l4570199,l4570195], [1,4,1,2,2,2,1,2,1,2,1,2,2,1,2,2,2,2,2,1,8,1,1,1,1,1,1,1,1,2,1,1,6,2,2,2,2,1,2,2,6,4,2,3,1,2,1,1,2,2,2,2,5,4,2,1,2,2,4,2,2,1,1,2,1,1,2,3,1,2,1,3,2,4,2,1,2,1,2,1,1,1,6,10,1,1,1,1,1,1,1,1,1,1]);
const s8963 = new LegoSet("Rock Wrecker", 8963, 2009, [l4184645,l4535765,l71155,l242026,l303426,l4515368,l370726,l4535771,l662826,l278026,l255526,l3039126,l4538782,l4189110,l4514553,l4211099,l4210636,l4249139,l4211007,l4211006,l4210794,l4210720,l4210908,l4211054,l4211086,l4263624,l4210658,l4210688,l4210857,l4516546,l4210752,l4210673,l4211472,l4211391,l4211491,l4211492,l4211847,l4211512,l4211767,l4211396,l4211475,l4211503,l4521897,l4209329,l4535768,l4211535,l4211848,l4211655,l4520320,l4225033,l4211350,l4299119,l4122447,l4122449,l4122453,l4122445,l4160080,l4183133,l4521216,l4298015,l4537930,l4537928,l4212708,l4263118,l4160085,l4164021,l4500755,l4538376,l300521,l4538780,l302321,l4142865,l4118897,l306921,l65625,l4514554,l4530473,l389910,l302410,l302310,l4244362,l4114505,l4244369,l4107579,l9551,l4543322,l4543325,l4543005,l4124010,l44,l4540418,l4210645,l4542545,l4542169], [4,2,1,4,2,2,1,2,1,8,3,2,2,5,3,1,4,1,1,1,1,1,1,4,5,1,1,2,2,2,1,2,5,1,1,1,1,2,1,4,2,4,4,2,1,2,1,1,1,1,1,4,2,3,9,3,1,2,10,2,2,4,4,6,2,3,1,4,1,1,4,4,2,1,2,10,1,1,3,3,2,2,2,2,1,1,1,1,3,1,1,1,1,1]);
const s8111 = new LegoSet("River Dragon", 8111, 2007, [l4497254,l74326,l4290452,l4292017,l4521335,l256926,l409526,l4184645,l407026,l4515356,l306226,l4107182,l4515172,l383926,l604126,l428626,l244926,l459926,l4248204,l4107084,l3205426,l278026,l306926,l4211060,l4211002,l4211086,l4210935,l4498096,l4497253,l4211508,l4211815,l4288114,l302321,l302221,l379521,l254021,l4129539,l428621,l304021,l304921,l4234526,l4500462,l366021,l4142865,l4189936,l4119331,l654121,l370921,l306921,l4180533,l4180504,l4178728,l459805,l4217562,l65625,l4163015,l474043,l618844,l614144,l287701,l4163475,l379401,l241201,l458924], [4,1,1,1,1,1,1,1,1,1,2,2,1,2,2,1,1,1,1,2,1,2,1,1,1,1,3,2,2,2,2,6,2,1,1,2,2,2,2,2,2,1,2,4,2,2,2,2,1,1,1,2,1,1,2,1,1,1,2,2,2,6,2,2]);
const s8902 = new LegoSet("Vezok", 8902, 2006, [l3206226,l370526,l3205426,l278026,l4189110,l29,l4287943,l4276529,l4284582,l4284567,l4279753,l4218719,l4210650,l4263624,l4211550,l4287936,l4279746,l4288100,l4287097,l4287093,l4287095,l4198400,l4288205,l4290480], [1,1,1,6,1,4,2,1,2,2,1,1,1,1,1,1,1,1,1,2,2,5,1,1]);
const s8725 = new LegoSet("Balta", 8725, 2005, [l3206226,l653626,l278026,l4248305,l4219217,l4217832,l4242036,l4219221,l4218956,l4218960,l4211639,l4177440,l4178663], [1,1,1,4,2,1,1,3,1,2,1,2,2]);
const s4723 = new LegoSet("Diagon Alley Shops", 4723, 2001, [l73,l70501,l4153354,l4120318,l4158958,l4119498,l4141174,l4158342,l4121532,l4141376,l4157270,l4153281,l4158309,l74,l4158327,l4158351,l4118787,l4624801,l4158362,l4122468,l4121741,l4118828,l4158353,l4159003,l4143210,l75,l4158307,l4106556,l4100381,l618843,l4129911,l4143577,l4129857,l4129858,l4128675,l4129917,l3006848,l4113955,l4124073,l4141532,l4119482,l4124054,l458949,l614149,l4118778,l612647,l4124108,l618841,l4288245,l4141530,l625101,l458901,l453601,l453301,l4108192,l256601,l462301,l203901,l76,l9341,l4157065,l77,l78], [1,1,1,1,1,8,1,1,1,1,1,1,1,1,3,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2,1,1,4,2,1,1,1,2,1,1,1,1,1]);
const sets = [s10123, s8624, s7020, s2516, s2505, s8962, s7660, s7019, s8781, s5982, s8963, s8111, s8902, s8725, s4723];

// checks each set for duplicate pieces
sets.forEach(set => {
    let pieces = [];
    set.pieces.forEach(piece => {
        if (pieces.includes(piece)) {
            document.getElementsByTagName("BODY")[0].style.backgroundColor = "rgb(255, 0, 0)";
            document.getElementsByTagName("FOOTER")[0].innerHTML = `l${piece.numbers[0]} is a duplicate in s${set.number}`;
        }
        else {
            pieces.push(piece);
        }
    });
});

// initializes allPieces array
let allPieces = [];
sets.forEach(set => {
set.pieces.forEach(piece => {
    if (!allPieces.includes(piece)) {
    allPieces.push(piece);
    }
});
});

allPieces.forEach(piece => {
  // adds pictures to Lego objects
  piece.picture = `<img src="images/${piece.numbers[0]}.jpg" alt="${piece.numbers[0]}" title="${piece.numbers[0]}">`;

  // adds options to search list
  document.getElementById("pieces").innerHTML += `<option value="${piece.name}">`;
});

// catches if set.pieces.length != set.numberOfPieces.length
sets.forEach(set => {
  if (set.pieces.length != set.numberOfPieces.length) {
    document.getElementsByTagName("FOOTER")[0].innerHTML += `s${set.number}.pieces.length != s${set.number}.numberOfPieces.length<br/>`;
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "red";
  }
});

// automates new sets
/*
use pictures from https://rebrickable.com/
copy details from https://www.bricklink.com/v2/main.page
*/
let input = ``;
let noInput = input ? false : true;
let customPartNumber = 78;
if (input) {
  // removes unnecessary information
  input = input.replaceAll("  +	", "");
  input = input.replaceAll("*	", "");
  input = input.replaceAll(/	PG	\d /g, "");
  input = input.replaceAll("	PG	", "");
  while (input.includes("  ")) {
    input = input.replaceAll("  ", " ");
  }
  input = input.replaceAll("\n", "</br>");

  // pulls data from remaining text
  let addedPieces = [];
  let addedPieceQuantities = [];
  let pictureCodes = [];
  while (input) {
    let name = input.substring(0, input.indexOf("</br>"));
    input = input.substring(input.indexOf("</br>") + "</br>".length);
    let quantity = input.substring(0, input.indexOf("	"));
    input = input.substring(input.indexOf("	") + "	".length);
    let pictureCode = input.substring(0, input.indexOf("	"));
    input = input.substring(input.indexOf("	") + "	".length);
    let color = input.substring(0, input.indexOf(name) - 1);
    if (input.substring(0, input.indexOf(name) - 1).includes("(")) {
      color = input.substring(0, input.indexOf("(") - 1);
      input = input.substring(input.indexOf(")"));
    }
    input = input.substring(input.indexOf(name) + name.length + "</br>".length);
    input = input.substring(input.indexOf("</br>") + "</br>".length); // removes Catalog line
    if (input.substring(0, input.indexOf("</br>")).includes("Part Color Code Missing")) {
      let missingCode = true;
      allPieces.forEach(piece => {
        if (piece.name === name && piece.color === color) {
          missingCode = false;
          input = input.replace("Part Color Code Missing", piece.numbers[0]);
        }
      });
      if (missingCode) {
        input = input.replace("Part Color Code Missing", ++customPartNumber);
      }
    }
    let numbers = input.substring(0, input.indexOf("</br>")).split(" or ").sort((a, b) => a - b);
    input = input.substring(input.indexOf("</br>") + "</br>".length);
    addedPieces.push(`l${numbers[0]}`);
    addedPieceQuantities.push(quantity);

    // displays Lego variables to be added
    let addPiece = true;
    allPieces.forEach(piece => {
      if (piece.numbers[0] == numbers[0]) {
        addPiece = false;
      }
    });
    if (addPiece) {
      pictureCodes.push({
        pictureCode: pictureCode,
        number: numbers[0],
        color: color
      });
      document.getElementsByTagName("FOOTER")[0].innerHTML += `const l${numbers[0]} = new Lego([${numbers.join(", ")}], "${name}", "${color}");</br>`;
    }
  }

  // displays codes for pictures to be added
  document.getElementsByTagName("FOOTER")[0].innerHTML += `</br>${addedPieces.join(", ")}</br>${addedPieceQuantities.join(", ")}</br></br>
  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Number</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
    ${pictureCodes.reduce((prev, code) => {
      return prev + `<tr>
        <td>${code.pictureCode}</td>
        <td id="${code.number}">${code.number}</td>
        <td>${code.color}</td>
      </tr>`;
    }, "")}
    </tbody>
  </table></br></br>New custom part number: ${customPartNumber}`;

  // turns the picture number green when you click on it
  pictureCodes.forEach(code => {
    document.getElementById(code.number).onclick = () => {
      document.getElementById(code.number).style.backgroundColor = "rgb(0, 255, 0)";
    };
  });
}

// lists the current count of all pieces
let loaded = 0;
let increment = 100;
const pieceCounts = () => allPieces.map(piece => document.getElementById(`l${piece.numbers[0]}`) ? document.getElementById(`l${piece.numbers[0]}`).value : sets.reduce((prev, next) => prev + next.pieces.includes(piece) ? next.numberOfPieces[next.pieces.indexOf(piece)] : 0, 0));
const listPieceCounts = () => {
  document.getElementById("pieceCounts").value = pieceCounts().join(", ");
};

// removes incomplete sets
const removeIncompletesets = (organizedsets, currentPieceCounts) => {
  return organizedsets.filter(set => {
    for (let i = 0; i < set.pieces.length; i++) {
      if (currentPieceCounts[allPieces.indexOf(set.pieces[i])] < set.numberOfPieces[i]) {
          return false;
      }
    }
    return true;
  });
};

// lists the sets you are able to complete
const listCompletedSets = () => {
  // organizes sets by age and removes incomplete sets
  let currentPieceCounts = [...pieceCounts()];
  let organizedCompleteSets = removeIncompletesets(sets.sort((a, b) => a.year - b.year), currentPieceCounts);

  // while there are sets remaining...
  document.getElementById("organizedCompleteSets").innerHTML = "";
  while (organizedCompleteSets.length) {

    // adds next set to completable sets
    document.getElementById("organizedCompleteSets").innerHTML += `<li>${organizedCompleteSets[0].name}</li>`;

    // subtract set pieces from currentPieceCounts
    for (let i = 0; i < organizedCompleteSets[0].pieces.length; i++) {
      currentPieceCounts[allPieces.indexOf(organizedCompleteSets[0].pieces[i])] -= organizedCompleteSets[0].numberOfPieces[i];
    }

    // removes incomplete sets
    organizedCompleteSets = removeIncompletesets(organizedCompleteSets, currentPieceCounts);
  }
};

// loads more Lego pieces
const loadMore = () => {
  for (let i = loaded; i < loaded + increment && i < allPieces.length; i++) {
    document.getElementsByTagName("TABLE")[0].innerHTML += `<tr id="l${allPieces[i].numbers[0]}row">
      <td>${allPieces[i].picture}</td>
      <td class="description">${allPieces[i].name}</td>
      <td class="custom-number-input">
        <input type="number" id="l${allPieces[i].numbers[0]}" min="0" value="${sets.reduce((prev, next) => {
          let pieceCount = 0;
          for (let j = 0; j < next.pieces.length; j++) {
            if (next.pieces[j] === allPieces[i]) {
              pieceCount += next.numberOfPieces[j];
            }
          }
          return prev + pieceCount;
        }, 0)}">
        <button class="arrow up" id="l${allPieces[i].numbers[0]}up">▲</button>
        <button class="arrow down" id="l${allPieces[i].numbers[0]}down">▼</button>
      </td>
    </tr>`;
  }

  for (let i = loaded; i < loaded + increment && i < allPieces.length; i++) {
    // updates piece counts with typed input
    document.getElementById(`l${allPieces[i].numbers[0]}`).onchange = () => {
      listPieceCounts();
      listCompletedSets();
    };
  
    // arrow buttons increment the value
    document.getElementById(`l${allPieces[i].numbers[0]}up`).onclick = () => {
      document.getElementById(`l${allPieces[i].numbers[0]}`).value++;
      listPieceCounts();
      listCompletedSets();
    };
    document.getElementById(`l${allPieces[i].numbers[0]}down`).onclick = () => {
      if (document.getElementById(`l${allPieces[i].numbers[0]}`).value > 0) {
        document.getElementById(`l${allPieces[i].numbers[0]}`).value--;
        listPieceCounts();
        listCompletedSets();
      }
    };
  }
  loaded += increment;
}
document.getElementById("loadMore").onclick = loadMore;

// display pieces with counters
if (noInput) {
  loadMore();

  // add color filter
  let colors = [];
  allPieces.forEach(piece => {
    if (!colors.includes(piece.color)) {
        colors.push(piece.color);
    }
  });
  colors.forEach(color => {
    document.getElementById("colors").innerHTML += `<option value="${color}">`;
  });
  document.getElementById("colorFilter").onchange = () => {
    // hides all rows
    allPieces.forEach(piece => {
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "none";
    });

    // resets search options
    document.getElementById("pieces").innerHTML = "";

    allPieces.forEach(piece => {
      if (piece.color === document.getElementById("colorFilter").value) {
        // shows rows for the selected color
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "table-row";

        // adds selected color to search
        document.getElementById("pieces").innerHTML += `<option value="${piece.name}">`;
      }

      // shows all pieces if no color is selected
      else if (!colors.includes(document.getElementById("colorFilter").value)) {
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "table-row";
      }
    });
  }

  // show only searched pieces
  document.getElementById("search").onchange = () => {
    allPieces.forEach(piece => {
      if (piece.name.includes(document.getElementById("search").value) && (!document.getElementById("colorFilter").value || document.getElementById("colorFilter").value === piece.color)) {
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "table-row";

        // highlights searched value in the description
        document.getElementById(`l${piece.numbers[0]}row`).getElementsByClassName("description")[0].innerHTML = document.getElementById(`l${piece.numbers[0]}row`).getElementsByClassName("description")[0].textContent.replace(document.getElementById("search").value, `<span style="background-color: yellow;">${document.getElementById("search").value}</span>`);
      }
      else {
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "none";

        // unhighlights searched words
        document.getElementById(`l${piece.numbers[0]}row`).getElementsByClassName("description")[0].innerHTML = document.getElementById(`l${piece.numbers[0]}row`).getElementsByClassName("description")[0].textContent.replace(`<span style="background-color: yellow;">${document.getElementById("search").value}</span>`, document.getElementById("search").value);
      }
    });
  }

  // submit button updates piece counters
  document.getElementById("pieceCountsSubmit").onclick = () => {
    const counts = document.getElementById("pieceCounts").value.split(", ");
    if (counts.length === allPieces.length) {
      for (let i = 0; i < counts.length; i++) {
        document.getElementById(`l${allPieces[i].numbers[0]}`).value = counts[i];
      }
      document.getElementById("errorText").innerHTML = "Piece Counts Updated";
    }
    else {
      document.getElementById("errorText").innerHTML = "Input does not match number of pieces.";
    }
  }
}