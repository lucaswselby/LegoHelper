// initialize Lego class
class Lego {
  constructor(numbers, name, color) {
    this._numbers = numbers;
    this._name = name;
    this._color = color;
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

// initialize set class
class Set {
  constructor(name, number, pieces, numberOfPieces) {
    this._name = name;
    this._number = number;
    this._pieces = pieces;
    this._numberOfPieces = numberOfPieces;
  }
  get name() {
    return this._name;
  }
  get number() {
    return this._number;
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
const l656426 = new Lego([656426, 4526931], "Wedge 3 x 2  Right", "Black");
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
const l4263624 = new Lego([4263624, 4508553], "Technic, Axle  5.5L with Stop", "Dark Bluish Gray");
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
const l4211815 = new Lego([4211815], "Technic, Axle  3L", "Light Bluish Gray");
const l4211639 = new Lego([4211639, 32073194], "Technic, Axle  5L", "Light Bluish Gray");
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
const l4142865 = new Lego([4142865], "Technic, Axle  2L Notched", "Red");
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

// initialize sets
const s10123 = new Set("Cloud City", 10123, [l0, l4164067, l611226, l300426, l4188306, l362226, l301026, l4218987, l300326, l300226, l300126, l245626, l300726, l330823, l265326, l434926, l613426, l73587, l371026, l346026, l244526, l302126, l302026, l303026, l303226, l395826, l304826, l4143982, l244926, l4100333, l370826, l4144025, l662826, l306926, l243126, l663626, l255526, l368026, l4206482, l4143005, l4218968, l4124050, l4164069, l300527, l611127, l300427, l245427, l301027, l300927, l300327, l300727, l4118869, l4118868, l365927, l330727, l245827, l4144532, l3000027, l4108048, l4106728, l302327, l371027, l302227, l302027, l4113911, l4121924, l4107763, l4114127, l4133505, l4124098, l428627, l4121970, l4109984, l1, l4112039, l394027, l4114529, l4109979, l4108155, l416227, l306827, l395702, l4185274, l245302, l611102, l300402, l4107533, l362202, l235702, l300102, l4114248, l614302, l4214931, l4159736, l4113203, l458902, l393702, l2, l3, l486502, l4171667, l302302, l302102, l302002, l614102, l403202, l254002, l379402, l4109642, l303902, l446002, l368402, l366502, l4220070, l655302, l4186007, l3200002, l370102, l4141499, l371302, l4141455, l367302, l281902, l4, l243102, l5, l6, l243202, l4116842, l7, l4160344, l4160326, l330705, l306205, l4114053, l4114055, l362305, l4107588, l4140562, l254005, l65625, l654105, l4108151, l416205, l4185177, l8, l306510, l3006840, l4124073, l4101716, l4107106, l614149, l3006447, l4153468, l614147, l4109765, l4124108, l3006841, l614141, l241241, l300401, l300901, l300301, l235701, l300101, l614301, l4203583, l4143254, l302101, l379501, l265401, l9, l428601, l10, l4143976, l366001, l4140502, l243101, l663601, l416201, l415001, l11, l4143673, l4141630, l12, l13, l4140068, l14, l4124172, l9339, l4124171, l4275310, l15, l16, l390125, l17, l18, l390126, l4219380, l19, l20, l21, l4124069, l4275334, l22, l23, l24, l25, l26, l74326, l27, l4275255, l28], [1, 2, 2, 10, 1, 2, 2, 1, 9, 1, 7, 2, 14, 2, 6, 4, 1, 1, 3, 2, 1, 2, 3, 2, 2, 1, 4, 6, 1, 1, 1, 1, 4, 1, 7, 1, 8, 1, 1, 3, 2, 2, 1, 12, 4, 1, 17, 6, 1, 6, 2, 5, 1, 6, 1, 8, 2, 1, 6, 1, 3, 8, 36, 4, 5, 1, 1, 1, 1, 7, 4, 4, 1, 1, 2, 1, 10, 8, 6, 8, 10, 2, 4, 2, 2, 4, 2, 4, 2, 5, 7, 1, 4, 2, 4, 1, 1, 1, 2, 1, 1, 2, 2, 4, 11, 3, 2, 1, 2, 1, 4, 6, 8, 1, 2, 2, 2, 6, 1, 2, 1, 1, 1, 1, 1, 2, 8, 1, 1, 1, 1, 1, 1, 11, 21, 2, 1, 1, 5, 1, 2, 3, 12, 4, 2, 1, 2, 2, 1, 2, 8, 22, 8, 4, 12, 10, 1, 2, 4, 9, 3, 4, 5, 2, 2, 1, 1, 3, 1, 1, 1, 4, 2, 1, 3, 2, 4, 2, 1, 2, 6, 1, 1, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
const s8624 = new Set("Race for the Mask of Life", 8624, [l362226, l301026, l246526, l300126, l420226, l4110045, l4209683, l4143372, l302326, l371026, l303126, l303226, l303026, l303326, l4185583, l428626, l655326, l370526, l370626, l370726, l373726, l370826, l4107085, l653826, l370026, l370126, l389426, l370226, l389526, l370326, l3253226, l3252326, l4140429, l4049026, l4128603, l4156980, l655826, l4144024, l4144023, l4119589, l613426, l278026, l3200126, l656526, l656426, l4160349, l4200486, l4251394, l4251393, l4206482, l29, l4578106, l4194991, l4205004, l4278114, l4288824, l4210978, l4211060, l4211105, l4210697, l4210892, l4210650, l4211094, l4211065, l4210997, l4210802, l4299022, l4210637, l4211054, l4210779, l4263624, l4211137, l4210751, l4210755, l4289258, l4211053, l4211055, l4211129, l4210866, l4210867, l4210786, l4210785, l4180470, l4210984, l4163454, l4228230, l4183880, l4267885, l30, l4276180, l4211499, l4211515, l4211396, l4211763, l4211728, l4215353, l4211622, l4211573, l4211815, l4211639, l4211567, l4211779, l4211543, l4211553, l4211705, l4211634, l4211885, l4211635, l4211565, l4211510, l4211741, l4211483, l3673194, l4211444, l4211449, l4279763, l4287937, l4175938, l4276534, l4256503, l4252695, l4178663, l4279767, l4279768, l4194984, l4194983, l4227872, l4288100, l4275510, l31, l4288839, l32, l33, l34, l35, l36, l37, l38, l39, l40, l41, l4276053, l302021, l4142865, l4140806, l65625, l4296577, l4233225, l70905, l4222196, l4288111, l4294538, l4296949, l4294145, l4294141, l4294996, l4294543, l4296954, l4288838, l4294140, l4288836, l4294993, l4294537, l4296955, l4294150, l4294995, l4294542, l4296952, l4294148, l4296947, l4294541, l4298919, l4296946, l4296943, l4297126, l4298916, l4297125, l4294550], [2, 4, 2, 4, 1, 1, 1, 1, 2, 6, 1, 1, 2, 4, 4, 2, 1, 1, 3, 2, 7, 3, 7, 8, 7, 2, 1, 1, 5, 2, 1, 1, 1, 2, 2, 6, 2, 4, 4, 4, 2, 35, 1, 1, 1, 2, 4, 1, 1, 4, 4, 4, 2, 3, 1, 1, 4, 8, 5, 4, 1, 3, 8, 7, 2, 1, 2, 2, 2, 4, 3, 2, 2, 4, 2, 2, 7, 4, 1, 1, 1, 1, 2, 1, 8, 6, 4, 2, 2, 2, 1, 1, 3, 4, 2, 2, 7, 3, 4, 3, 1, 2, 6, 18, 1, 2, 1, 1, 1, 1, 2, 4, 5, 3, 2, 2, 2, 2, 1, 2, 2, 8, 1, 2, 2, 1, 2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 2, 5, 2, 5, 2, 2, 1, 16, 4, 2, 1, 2, 3, 4, 2, 1, 1, 3, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1]);
const sets = [s10123, s8624];

// initializes allPieces array
// source: ChatGPT
const allPieces = sets.flatMap(set => set.pieces).filter((piece, index, self) => self.indexOf(piece) === index);

// adds pictures to Lego objects
allPieces.forEach(piece => {
  piece.picture = `<img src="images/${piece.numbers[0]}.jpg" alt="${piece.numbers[0]}" title="${piece.numbers[0]}">`;
});

// catches if set.pieces.length != set.numberOfPieces.length
sets.forEach(set => {
  if (set.pieces.length != set.numberOfPieces.length) {
    document.getElementsByTagName("FOOTER")[0].innerHTML += `s${set.number}.pieces.length != s${set.number}.numberOfPieces.length<br/>`;
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "red";
  }
});

// display pieces with counters
allPieces.forEach(piece => {
  document.getElementsByTagName("TABLE")[0].innerHTML +=
    `<tr id="l${piece.numbers[0]}row">
      <td>${piece.picture}</td>
      <td class="description">${piece.name}</td>
      <td>
        <div class="custom-number-input">
          <input type="number" id="l${piece.numbers[0]}" min="0" value="0">
          <button class="arrow up" id="l${piece.numbers[0]}up">▲</button>
          <button class="arrow down" id="l${piece.numbers[0]}down">▼</button>
        </div>
      </td>
    </tr>`;
});

// arrow buttons increment the value
allPieces.forEach(piece => {
  document.getElementById(`l${piece.numbers[0]}up`).onclick = () => {
    document.getElementById(`l${piece.numbers[0]}`).value++;
  };
  document.getElementById(`l${piece.numbers[0]}down`).onclick = () => {
    if (document.getElementById(`l${piece.numbers[0]}`).value > 0) {
      document.getElementById(`l${piece.numbers[0]}`).value--;
    }
  };
});

// add color filters
let colors = [];
allPieces.forEach(piece => {
  if (!colors.includes(piece.color)) {
    colors.push(piece.color);
  }
});
colors.forEach(color => {
  document.getElementById("colorFilters").innerHTML += `<div><input type="checkbox" id="${color}" name="${color}" checked><label for="${color}">${color}</label></div>`;
});
colors.forEach(color => {
  document.getElementById(color).onclick = () => {

    // TO-DO: (de)selects select all
    if (document.getElementById(color).checked) {
      document.getElementById("selectAll").checked = true;
      colors.forEach(col => {
        if (!document.getElementById(col).checked) {
          document.getElementById("selectAll").checked = false;
        }
      });
    }
    else {
      document.getElementById("selectAll").checked = false;
    }

    // hides all rows
    allPieces.forEach(piece => {
      document.getElementById(`l${piece.numbers[0]}row`).style.display = "none";
    });

    // shows rows that have checked colors
    colors.forEach(col => {
      if (document.getElementById(col).checked) {
        allPieces.forEach(piece => {
          if (piece.color === col) {
            document.getElementById(`l${piece.numbers[0]}row`).style.display = "table-row";
          }
        });
      }
    });
  }
});

// select all colors
document.getElementById("selectAll").onclick = () => {

  // displays all colors
  if (document.getElementById("selectAll").checked) {
    colors.forEach(color => {
      document.getElementById(color).checked = true;
      allPieces.forEach(piece => {
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "table-row";
      });
    });
  }

  // hides all colors
  else {
    colors.forEach(color => {
      document.getElementById(color).checked = false;
      allPieces.forEach(piece => {
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "none";
      });
    });
  }
}