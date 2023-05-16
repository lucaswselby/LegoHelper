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
const l300326 = new Lego([300326, 4103587], "Brick 2 x 2", "Black");
const l300226 = new Lego([300226], "Brick 2 x 3", "Black");
const l300126 = new Lego([300126], "Brick 2 x 4", "Black");
const l245626 = new Lego([245626, 4181144], "Brick 2 x 6", "Black");
const l300726 = new Lego([300726, 6037390], "Brick 2 x 8", "Black");
const l330823 = new Lego([330823, 330826, 4159141, 4218982], "Brick Arch 1 x 8 x 2", "Black");
const l265326 = new Lego([265326], "Brick Special 1 x 4 with Groove", "Black");
const l434926 = new Lego([434926], "Equipment Weapon, Loudhailer / Blaster / Space Gun", "Black");
const l4124096 = new Lego([4124096, 613426], "Hinge Brick 2 x 2 Top Plate Thin", "Black");
const l73587 = new Lego([73587], "Lever Small Base with Black Lever", "Black");
const l371026 = new Lego([371026], "Plate 1 x 4", "Black");
const l346026 = new Lego([346026], "Plate 1 x 8", "Black");
const l244526 = new Lego([244526], "Plate 2 x 12", "Black");
const l302126 = new Lego([302126], "Plate 2 x 3", "Black");
const l302026 = new Lego([302026], "Plate 2 x 4", "Black");
const l303026 = new Lego([303026, 303076], "Plate 4 x 10", "Black");
const l303226 = new Lego([303226], "Plate 4 x 6", "Black");
const l395826 = new Lego([395826], "Plate 6 x 6", "Black");
const l304826 = new Lego([304826], "Slope 45° 2 x 1 Triple with Ovoid Bottom Pin", "Black");
const l4143982 = new Lego([4143982], "Slope 75° 2 x 2 x 3 [Hollow Studs]", "Black");
const l244926 = new Lego([244926, 244976, 4561789, 4636202], "Slope Inverted 75° 2 x 1 x 3", "Black");
const l4100333 = new Lego([4100333, 4109618, 4528334, 6037555, 6055878, 6074034, 6096957], "String with End Studs 41L Overall", "Black");
const l370826 = new Lego([370826], "Technic Axle 12", "Black");
const l4144025 = new Lego([4144025], "Technic Brick 4 x 6 Open Center", "Black");
const l4184169 = new Lego([4184169, 662826], "Technic Pin with Friction Ridges Lengthwise and Towball", "Black");
const l306926 = new Lego([306926], "Tile 1 x 2 with Groove", "Black");
const l243126 = new Lego([243126], "Tile 1 x 4 with Groove", "Black");
const l663626 = new Lego([663626], "Tile 1 x 6 with Groove", "Black");
const l255526 = new Lego([255526], "Tile Special 1 x 1 with Clip and Straight Tips", "Black");
const l368026 = new Lego([368026], "Turntable 2 x 2 Plate, Base", "Black");
const l4206482 = new Lego([4206482, 4309323], "Technic Axle Pin with Friction Ridges Lengthwise", "Blue");
const l4143005 = new Lego([4143005], "Technic Pin 1/2", "Blue");
const l4218968 = new Lego([4218968], "Plant, Flower Stem", "Brown");
const l4124050 = new Lego([4124050], "Weapon Lightsaber Hilt without Bottom Ring", "Chrome Silver");
const l4164069 = new Lego([4164069], "Bar 1 x 8 with Brick 1 x 2 Curved Top End (Axle Holder Inside Small End)", "Dark Gray");
const l300527 = new Lego([300527, 4114079], "Brick 1 x 1", "Dark Gray");
const l4114327 = new Lego([4114327, 611127], "Brick 1 x 10", "Dark Gray");
const l300427 = new Lego([300427, 4113909], "Brick 1 x 2", "Dark Gray");
const l245427 = new Lego([245427, 4113235], "Brick 1 x 2 x 5 with Blocked Open Studs and Bottom Stud Holder with Asymmetric Ridges", "Dark Gray");
const l301027 = new Lego([301027, 4114308], "Brick 1 x 4", "Dark Gray");
const l300927 = new Lego([300927, 4114082], "Brick 1 x 6", "Dark Gray");
const l300327 = new Lego([300327, 4110008], "Brick 2 x 2", "Dark Gray");
const l300727 = new Lego([300727, 4116649], "Brick 2 x 8", "Dark Gray");
const l4118869 = new Lego([4118869, 4181114], "Brick 8 x 16", "Dark Gray");
const l4118868 = new Lego([4118868, 4181131], "Brick 8 x 8", "Dark Gray");
const l365927 = new Lego([365927], "Brick Arch 1 x 4", "Dark Gray");
const l330727 = new Lego([330727, 4114517, 4218967], "Brick Arch 1 x 6 x 2 - Thick Top with Reinforced Underside", "Dark Gray");
const l245827 = new Lego([245827, 4113907], "Brick Special 1 x 2 with Pin", "Dark Gray");
const l4144532 = new Lego([4144532], "Brick Special 1 x 4 with 4 Studs on One Side", "Dark Gray");
const l3000027 = new Lego([3000027], "Brick Special 2 x 2 with 2 Pins and Axle Hole", "Dark Gray");
const l4108048 = new Lego([4108048], "Brick Special 2 x 2 with Pin and Axle Hole", "Dark Gray");
const l4106728 = new Lego([4106728], "Chain 17L", "Dark Gray");
const l302327 = new Lego([302327, 4111983], "Plate 1 x 2", "Dark Gray");
const l371027 = new Lego([371027], "Plate 1 x 4", "Dark Gray");
const l302227 = new Lego([302227, 4114003], "Plate 2 x 2", "Dark Gray");
const l302027 = new Lego([302027, 4112232], "Plate 2 x 4", "Dark Gray");
const l4113911 = new Lego([4113911, 4243823], "Plate 4 x 4", "Dark Gray");
const l4121924 = new Lego([4121924], "Plate 6 x 6", "Dark Gray");
const l4107763 = new Lego([4107763], "Plate Round 2 x 2 with Axle Hole Type 1 (+ Opening)", "Dark Gray");
const l4114127 = new Lego([4114127, 4141978], "Plate Special 2 x 4 with Pins", "Dark Gray");
const l4133505 = new Lego([4133505, 4219468], "Plate Special 3 x 2 with Hole", "Dark Gray");
const l4124098 = new Lego([4124098], "Slope 18° 4 x 2", "Dark Gray");
const l4108045 = new Lego([4108045, 428627], "Slope 33° 3 x 1", "Dark Gray");
const l4121970 = new Lego([4121970], "Slope 45° 2 x 1 with Bottom Pin", "Dark Gray");
const l4109984 = new Lego([4109984], "Slope 45° 2 x 2", "Dark Gray");
const l1 = new Lego([1], "Slope 45° 2 x 2 with Red Square and Circuitry Print", "Dark Gray");
const l4112039 = new Lego([4112039], "Slope Inverted 33° 3 x 2 [No Connections between Studs]", "Dark Gray");
const l394027 = new Lego([394027], "Support 2 x 2 x 2 Stand with Reach-Through Center Hole", "Dark Gray");
const l4114529 = new Lego([4114529], "Technic Brick 1 x 2 [1 Hole]", "Dark Gray");
const l4109979 = new Lego([4109979], "Tile 1 x 4 with Groove", "Dark Gray");
const l4108155 = new Lego([4108155, 4129575], "Tile 1 x 6 with Groove", "Dark Gray");
const l416227 = new Lego([416227], "Tile 1 x 8 with Groove", "Dark Gray");
const l306827 = new Lego([306827, 4109986], "Tile 2 x 2 with Groove", "Dark Gray");
const l395702 = new Lego([395702], "Antenna 1 x 4 with Rounded Top", "Light Gray");
const l4185274 = new Lego([4185274, 4297346], "Bracket 1 x 2 - 2 x 2", "Light Gray");
const l245302 = new Lego([245302], "Brick 1 x 1 x 5 with Blocked Open or Hollow Stud", "Light Gray");
const l611102 = new Lego([611102], "Brick 1 x 10", "Light Gray");
const l300402 = new Lego([300402], "Brick 1 x 2", "Light Gray");
const l4107533 = new Lego([4107533], "Brick 1 x 2 x 2 with Inside Axle Holder", "Light Gray");
const l362202 = new Lego([362202], "Brick 1 x 3", "Light Gray");
const l235702 = new Lego([235702, 235752], "Brick 2 x 2 Corner", "Light Gray");
const l300102 = new Lego([300102, 4116259], "Brick 2 x 4", "Light Gray");
const l4114248 = new Lego([4114248, 4181123, 4190379], "Brick 4 x 6", "Light Gray");
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
const l254002 = new Lego([254002, 254052, 4140584], "Plate Special 1 x 2 Side Handle [Free Ends]", "Light Gray");
const l379402 = new Lego([379402], "Plate Special 1 x 2 with 1 Stud without Groove (Jumper)", "Light Gray");
const l4109642 = new Lego([4109642], "Plate Special 1 x 2 with Door Rail", "Light Gray");
const l303902 = new Lego([303902], "Slope 45° 2 x 2", "Light Gray");
const l446002 = new Lego([446002], "Slope 75° 2 x 1 x 3 with Open Stud", "Light Gray");
const l368402 = new Lego([368402, 4248057], "Slope 75° 2 x 2 x 3 [Hollow Studs]", "Light Gray");
const l366502 = new Lego([366502], "Slope Inverted 45° 2 x 1", "Light Gray");
const l4220070 = new Lego([4220070], "Support 2 x 2 x 8 with Grooves, Smooth On All Sides, Top Peg", "Light Gray");
const l655302 = new Lego([655302], "Technic Axle 1.5 with Perpendicular Axle Connector (Technic Pole Reverser Handle)", "Light Gray");
const l4186007 = new Lego([4186007], "Technic Axle 3", "Light Gray");
const l3200002 = new Lego([3200002], "Technic Brick 1 x 2 [2 Holes]", "Light Gray");
const l370102 = new Lego([370102], "Technic Brick 1 x 4 [3 Holes]", "Light Gray");
const l4141499 = new Lego([4141499], "Technic Brick 4 x 4 Open Center", "Light Gray");
const l371302 = new Lego([371302, 4125313, 659002], "Technic Bush", "Light Gray");
const l4141455 = new Lego([4141455], "Technic Gear 20 Tooth Double Bevel with Axle Hole Type 2 [X Opening]", "Light Gray");
const l367302 = new Lego([367302, 4184166], "Technic Pin without Friction Ridges Lengthwise", "Light Gray");
const l281902 = new Lego([281902, 4113032], "Technic Steering Wheel Small (3 Studs Diameter)", "Light Gray");
const l4 = new Lego([4], "Tile 1 x 2 with Stylised Computer Console Print", "Light Gray");
const l243102 = new Lego([243102], "Tile 1 x 4 with Groove", "Light Gray");
const l5 = new Lego([5], "Tile Round 2 x 2 with Fine Mesh Grill Print", "Light Gray");
const l6 = new Lego([6], "Tile Special 1 x 1 with Clip and Straight Tips", "Light Gray");
const l243202 = new Lego([243202], "Tile Special 1 x 2 with Handle", "Light Gray");
const l4116842 = new Lego([4116842], "Tile Special 2 x 2 with Bar and Stud", "Light Gray");
const l7 = new Lego([7], "Turntable 2 x 2 Plate - Top", "Light Gray");
const l4160344 = new Lego([4160344], "Wedge 4 x 2 Left", "Light Gray");
const l4160326 = new Lego([4160326], "Wedge 4 x 2 Right", "Light Gray");
const l330705 = new Lego([330705, 4114073], "Brick Arch 1 x 6 x 2 - Thick Top with Reinforced Underside", "Tan");
const l306205 = new Lego([306205, 4117070], "Brick Round 1 x 1 Open Stud", "Tan");
const l4114053 = new Lego([4114053, 4218749], "Brick Special 1 x 2 Palisade [aka Log]", "Tan");
const l4114055 = new Lego([4114055, 4219064, 4523148], "Brick Special 1 x 4 Palisade [aka Log]", "Tan");
const l362305 = new Lego([362305, 4121921], "Plate 1 x 3", "Tan");
const l4107588 = new Lego([4107588, 4188158, 6097342, 6185313], "Plate 6 x 12", "Tan");
const l4140562 = new Lego([4140562], "Plate Round 2 x 2 with Axle Hole Type 1 (+ Opening)", "Tan");
const l254005 = new Lego([254005, 4125271, 4140593], "Plate Special 1 x 2 Side Handle [Free Ends]", "Tan");
const l4133591 = new Lego([4133591, 4186017, 4666579, 65625], "Technic Axle Pin without Friction Ridges Lengthwise", "Tan");
const l4179771 = new Lego([4179771, 654105], "Technic Brick 1 x 1 with Hole", "Tan");
const l4108151 = new Lego([4108151, 4157277], "Tile 1 x 6 with Groove", "Tan");
const l416205 = new Lego([416205, 4219560, 4254817, 4544139], "Tile 1 x 8 with Groove", "Tan");
const l4185177 = new Lego([4185177], "Tile 2 x 2 with Groove", "Tan");
const l8 = new Lego([8], "Windscreen 3 x 6 x 5 Bubble with Studs on Top with Octagonal Light Gray Lines Print", "Trans-Brown");
const l306510 = new Lego([306510, 306540, 6244904], "Brick 1 x 2 without Bottom Tube", "Trans-Clear");
const l3006840 = new Lego([3006840, 6223655], "Brick Round 1 x 1 Open Stud", "Trans-Clear");
const l4124073 = new Lego([4124073, 6170187], "Bar 4L (Lightsaber Blade / Wand)", "Trans-Light Blue");
const l4101716 = new Lego([4101716, 4163917, 4223211, 4227683, 6240225], "Plate Round 1 x 1 with Solid Stud", "Trans-Light Blue");
const l4107106 = new Lego([4107106, 4130379, 6238675], "Brick Round 1 x 1 Open Stud", "Trans-Neon Green");
const l3005749 = new Lego([3005749, 614149, 6240223], "Plate Round 1 x 1 with Solid Stud", "Trans-Neon Green");
const l3006447 = new Lego([3006447, 4129565, 4560958], "Antenna 1 x 4 with Rounded Top", "Trans-Neon Orange");
const l4153468 = new Lego([4153468, 4219576], "Brick 1 x 4 without Bottom Tubes", "Trans-Neon Orange");
const l3005747 = new Lego([3005747, 614147, 6240218], "Plate Round 1 x 1 with Solid Stud", "Trans-Neon Orange");
const l4109765 = new Lego([4109765, 4141741, 6124829, 6250159], "Tile Special 1 x 2 Grille with Bottom Groove", "Trans-Neon Orange");
const l4124108 = new Lego([4124108, 6167284], "Bar 4L (Lightsaber Blade / Wand)", "Trans-Red");
const l3006841 = new Lego([3006841, 6238673], "Brick Round 1 x 1 Open Stud", "Trans-Red");
const l3005741 = new Lego([3005741, 614141, 6208450], "Plate Round 1 x 1 with Solid Stud", "Trans-Red");
const l241241 = new Lego([241241, 3024441, 4118775, 4187759, 4190187, 6250158], "Tile Special 1 x 2 Grille with Bottom Groove", "Trans-Red");
const l300401 = new Lego([300401, 4613964], "Brick 1 x 2", "White");
const l300901 = new Lego([300901, 300951], "Brick 1 x 6", "White");
const l300301 = new Lego([300301, 4103592], "Brick 2 x 2", "White");
const l235701 = new Lego([235701, 235751], "Brick 2 x 2 Corner", "White");
const l300101 = new Lego([300101], "Brick 2 x 4", "White");
const l614301 = new Lego([614301], "Brick Round 2 x 2 with Axle Hole", "White");
const l4203583 = new Lego([4203583], "Brick Round 4 x 4 with 4 Side Pin Holes and Center Axle Hole", "White");
const l4143254 = new Lego([4143254], "Brick Special 1 x 4 with 4 Studs on One Side", "White");
const l302101 = new Lego([302101], "Plate 2 x 3", "White");
const l379501 = new Lego([379501], "Plate 2 x 6", "White");
const l265401 = new Lego([265401, 4278271], "Plate Round 2 x 2 with Rounded Bottom [Boat Stud]", "White");
const l9 = new Lego([9], "Seat / Chair 2 x 2", "White");
const l428601 = new Lego([428601], "Slope 33° 3 x 1", "White");
const l10 = new Lego([10], "Slope 75° 2 x 1 x 3 with Open Stud", "White");
const l4143976 = new Lego([4143976], "Slope 75° 2 x 2 x 3 [Hollow Studs]", "White");
const l366001 = new Lego([366001], "Slope Inverted 45° 2 x 2 [Ovoid Bottom Pin, Bar-sized Stud Holes]", "White");
const l4140502 = new Lego([4140502, 4219172], "Technic Worm Gear", "White");
const l243101 = new Lego([243101], "Tile 1 x 4 with Groove", "White");
const l663601 = new Lego([663601], "Tile 1 x 6 with Groove", "White");
const l416201 = new Lego([416201], "Tile 1 x 8 with Groove", "White");
const l415001 = new Lego([415001], "Tile Round 2 x 2 with Bottom Cross", "White");
const l11 = new Lego([11], "Turntable 4 x 4 Locking Grooved Base", "White");
const l4143673 = new Lego([4143673, 4545335], "Turntable 4 x 4 Top, Locking", "White");
const l4141630 = new Lego([4141630], "Plate Special 1 x 2 with Door Rail", "Yellow");
const l12 = new Lego([12], "Minifig Head Plain [Blocked Open Stud]", "Black");
const l13 = new Lego([13], "Hips and Light Gray Legs with Boba Fett Print", "Brown");
const l4140068 = new Lego([4140068], "Helmet, Rocket Pack with Boba Fett Colors Print, Dark Brown Highlights", "Green");
const l14 = new Lego([14], "Torso Armor Plates Green Print (Boba Fett), Light Gray Arms Printed, Dark Gray Hands", "Light Gray");
const l4124172 = new Lego([4124172], "Helmet Darth Vader", "Black");
const l4569093 = new Lego([4569093, 9339], "Hips and Black Legs", "Black");
const l4124171 = new Lego([4124171, 4543045, 6010593, 6106296, 6335646], "Neckwear Cape, Standard [Traditional Starched Fabric]", "Black");
const l4275310 = new Lego([4275310], "Torso Darth Vader (Basic) Print, Black Arms and Hands", "Black");
const l15 = new Lego([15], "Minifig Head Darth Vader, Scars Gray Left, Eyebrows Print [Blocked Open Stud]", "Light Gray");
const l16 = new Lego([16], "Torso Vest and White Shirt Print (Han Solo), Tan Arms, Yellow Hands", "Black");
const l390125 = new Lego([390125, 390175], "Hair, Smooth", "Brown");
const l17 = new Lego([17], "Hips and Brown Legs with Gunbelt Print", "Brown");
const l18 = new Lego([18], "Minifig Head Han Solo, Smirk and Brown Eyebrows Print [Blocked Open Stud]", "Yellow");
const l390126 = new Lego([390126, 390176], "Hair, Smooth", "Black");
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
const l4582628 = new Lego([4582628, 74326], "Hips and White Legs", "Black");
const l27 = new Lego([27], "Helmet Stormtrooper, Dark Blue Vents Print", "White");
const l4275255 = new Lego([4275255], "Torso Armour Stormtrooper Print, White Arms, Black Hands", "White");
const l28 = new Lego([28], "Minifig Head Plain [Blocked Open Stud]", "Yellow");
const allPieces = [l0, l4164067, l611226, l300426, l4188306, l362226, l301026, l4218987, l300326, l300226, l300126, l245626, l300726, l330823, l265326, l434926, l4124096, l73587, l371026, l346026, l244526, l302126, l302026, l303026, l303226, l395826, l304826, l4143982, l244926, l4100333, l370826, l4144025, l4184169, l306926, l243126, l663626, l255526, l368026, l4206482, l4143005, l4218968, l4124050, l4164069, l300527, l4114327, l300427, l245427, l301027, l300927, l300327, l300727, l4118869, l4118868, l365927, l330727, l245827, l4144532, l3000027, l4108048, l4106728, l302327, l371027, l302227, l302027, l4113911, l4121924, l4107763, l4114127, l4133505, l4124098, l4108045, l4121970, l4109984, l1, l4112039, l394027, l4114529, l4109979, l4108155, l416227, l306827, l395702, l4185274, l245302, l611102, l300402, l4107533, l362202, l235702, l300102, l4114248, l614302, l4214931, l4159736, l4113203, l458902, l393702, l2, l3, l486502, l4171667, l302302, l302102, l302002, l614102, l403202, l254002, l379402, l4109642, l303902, l446002, l368402, l366502, l4220070, l655302, l4186007, l3200002, l370102, l4141499, l371302, l4141455, l367302, l281902, l4, l243102, l5, l6, l243202, l4116842, l7, l4160344, l4160326, l330705, l306205, l4114053, l4114055, l362305, l4107588, l4140562, l254005, l4133591, l4179771, l4108151, l416205, l4185177, l8, l306510, l3006840, l4124073, l4101716, l4107106, l3005749, l3006447, l4153468, l3005747, l4109765, l4124108, l3006841, l3005741, l241241, l300401, l300901, l300301, l235701, l300101, l614301, l4203583, l4143254, l302101, l379501, l265401, l9, l428601, l10, l4143976, l366001, l4140502, l243101, l663601, l416201, l415001, l11, l4143673, l4141630, l12, l13, l4140068, l14, l4124172, l4569093, l4124171, l4275310, l15, l16, l390125, l17, l18, l390126, l4219380, l19, l20, l21, l4124069, l4275334, l22, l23, l24, l25, l26, l4582628, l27, l4275255, l28];

// adds pictures to Lego objects
allPieces.forEach(piece => {
  piece.picture = `<img src="images/${piece.numbers[0]}.jpg" alt="${piece.numbers[0]}" title="${piece.numbers[0]}">`;
});

// initialize sets
const s10123 = new Set("Cloud City", 10123, [l0, l4164067, l611226, l300426, l4188306, l362226, l301026, l4218987, l300326, l300226, l300126, l245626, l300726, l330823, l265326, l434926, l4124096, l73587, l371026, l346026, l244526, l302126, l302026, l303026, l303226, l395826, l304826, l4143982, l244926, l4100333, l370826, l4144025, l4184169, l306926, l243126, l663626, l255526, l368026, l4206482, l4143005, l4218968, l4124050, l4164069, l300527, l4114327, l300427, l245427, l301027, l300927, l300327, l300727, l4118869, l4118868, l365927, l330727, l245827, l4144532, l3000027, l4108048, l4106728, l302327, l371027, l302227, l302027, l4113911, l4121924, l4107763, l4114127, l4133505, l4124098, l4108045, l4121970, l4109984, l1, l4112039, l394027, l4114529, l4109979, l4108155, l416227, l306827, l395702, l4185274, l245302, l611102, l300402, l4107533, l362202, l235702, l300102, l4114248, l614302, l4214931, l4159736, l4113203, l458902, l393702, l2, l3, l486502, l4171667, l302302, l302102, l302002, l614102, l403202, l254002, l379402, l4109642, l303902, l446002, l368402, l366502, l4220070, l655302, l4186007, l3200002, l370102, l4141499, l371302, l4141455, l367302, l281902, l4, l243102, l5, l6, l243202, l4116842, l7, l4160344, l4160326, l330705, l306205, l4114053, l4114055, l362305, l4107588, l4140562, l254005, l4133591, l4179771, l4108151, l416205, l4185177, l8, l306510, l3006840, l4124073, l4101716, l4107106, l3005749, l3006447, l4153468, l3005747, l4109765, l4124108, l3006841, l3005741, l241241, l300401, l300901, l300301, l235701, l300101, l614301, l4203583, l4143254, l302101, l379501, l265401, l9, l428601, l10, l4143976, l366001, l4140502, l243101, l663601, l416201, l415001, l11, l4143673, l4141630, l12, l13, l4140068, l14, l4124172, l4569093, l4124171, l4275310, l15, l16, l390125, l17, l18, l390126, l4219380, l19, l20, l21, l4124069, l4275334, l22, l23, l24, l25, l26, l4582628, l27, l4275255, l28], [1, 2, 2, 10, 1, 2, 2, 1, 9, 1, 7, 2, 14, 2, 6, 4, 1, 1, 3, 2, 1, 2, 3, 2, 2, 1, 4, 6, 1, 1, 1, 1, 4, 1, 7, 1, 8, 1, 1, 3, 2, 2, 1, 12, 4, 1, 17, 6, 1, 6, 2, 5, 1, 6, 1, 8, 2, 1, 6, 1, 3, 8, 36, 4, 5, 1, 1, 1, 1, 7, 4, 4, 1, 1, 2, 1, 10, 8, 6, 8, 10, 2, 4, 2, 2, 4, 2, 4, 2, 5, 7, 1, 4, 2, 4, 1, 1, 1, 2, 1, 1, 2, 2, 4, 11, 3, 2, 1, 2, 1, 4, 6, 8, 1, 2, 2, 2, 6, 1, 2, 1, 1, 1, 1, 1, 2, 8, 1, 1, 1, 1, 1, 1, 11, 21, 2, 1, 1, 5, 1, 2, 3, 12, 4, 2, 1, 2, 2, 1, 2, 8, 22, 8, 4, 12, 10, 1, 2, 4, 9, 3, 4, 5, 2, 2, 1, 1, 3, 1, 1, 1, 4, 2, 1, 3, 2, 4, 2, 1, 2, 6, 1, 1, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
const sets = [s10123];

// catches if set.pieces.length != set.numberOfPieces.length
sets.forEach(set => {
  if (set.pieces.length != set.numberOfPieces.length) {
    document.getElementsByTagName("FOOTER")[0].innerHTML += `s${set.number}.pieces.length != s${set.number}.numberOfPieces.length<br/>`;
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "red";
  }
});

// display pieces with counters
for (let i = 0; i < s10123.pieces.length; i++) {
  document.getElementsByTagName("TABLE")[0].innerHTML +=
    `<tr id="l${s10123.pieces[i].numbers[0]}row">
      <td>${s10123.pieces[i].picture}</td><td class="description">${s10123.pieces[i].name}</td>
      <td>
        <div class="custom-number-input">
          <input type="number" id="l${s10123.pieces[i].numbers[0]}" min="0" value="0">
          <button class="arrow up">▲</button>
          <button class="arrow down">▼</button>
        </div>
      </td>
    </tr>`;

  // source: ChatGPT
  // Get the input element
  const input = document.querySelector('.custom-number-input input');
  // Get the arrow buttons
  const upButton = document.querySelector('.custom-number-input .arrow.up');
  const downButton = document.querySelector('.custom-number-input .arrow.down');
  // Add event listeners to the arrow buttons
  upButton.addEventListener('click', () => {
    incrementValue(1);
  });
  downButton.addEventListener('click', () => {
    incrementValue(-1);
  });
  // Function to increment or decrement the value of the input
  function incrementValue(increment) {
    const step = input.step ? parseFloat(input.step) : 1;
    const newValue = parseFloat(input.value) + step * increment;
    
    if (input.max && newValue > parseFloat(input.max)) {
      input.value = input.max;
    } else if (input.min && newValue < parseFloat(input.min)) {
      input.value = input.min;
    } else {
      input.value = newValue;
    }
  }

}

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