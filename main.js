// checks each set for duplicate pieces
sets.forEach(set => {
  let pieces = [];
  set.pieces.forEach(piece => {
      if (pieces.includes(piece)) {
          document.getElementsByTagName("BODY")[0].style.backgroundColor = "red";
          document.getElementsByTagName("HEADER")[0].innerHTML = `l${piece.numbers[0]} is a duplicate in s${set.number}`;
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
//allPieces = allPieces.sort((a, b) => a.numbers[0] - b.numbers[0]);

// adds pictures to Lego objects
allPieces.forEach(piece => {
  piece.picture = `<img src="images/${piece.numbers[0]}.jpg" alt="${piece.numbers[0]}" title="${piece.numbers[0]}">`;
});

// catches if set.pieces.length != set.numberOfPieces.length
sets.forEach(set => {
  if (set.pieces.length !== set.numberOfPieces.length) {
    document.getElementsByTagName("HEADER")[0].innerHTML += `</br>s${set.number}.pieces.length != s${set.number}.numberOfPieces.length<br/>`;
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "red";
  }
});

// initializes allPieceCounts array
let allPieceCounts = [];
allPieces.forEach(piece => {
  let sum = 0;
  sets.forEach(set => {
    if (set.pieces.includes(piece)) {
      sum += set.numberOfPieces[set.pieces.indexOf(piece)];
    }
  });
  allPieceCounts.push(sum);
});
if (allPieces.length !== allPieceCounts.length) {
  document.getElementsByTagName("BODY").style.backgroundColor = "red";
  document.getElementsByTagName("HEADER").innerHTML += "</br>allPieces.length !== allPieceCounts.length";
}

// automates new sets
/*
use pictures from https://rebrickable.com/
copy details from https://www.bricklink.com/v2/main.page
*/
let input = `Torso Mechanical, Battle Droid
*	1	30375	Blue Torso Mechanical, Battle Droid
Catalog: Parts: Minifigure, Body Part
4144309 or 4508613	PG	
  +	Arm Mechanical, Battle Droid
*	2	30377	Dark Turquoise Arm Mechanical, Battle Droid
Catalog: Parts: Minifigure, Body Part
4142991	PG	
  +	Minifigure, Head, Modified Martian with Clip, Eyes Plain Pattern
*	1	x117px1	Dark Turquoise Minifigure, Head, Modified Martian with Clip, Eyes Plain Pattern
Catalog: Parts: Minifigure, Head, Modified
Part Color Code Missing	PG	
  +	Legs Martian Angular
*	1	30530	Orange Legs Martian Angular
Catalog: Parts: Minifigure, Legs, Modified
4143045
Hinge Brick 1 x 2 Top Plate
*	1	3938	Black Hinge Brick 1 x 2 Top Plate
Catalog: Parts: Hinge
393826	PG	
  +	Hinge Plate 1 x 2 Locking with 1 Finger on Top
*	2	30383	Black Hinge Plate 1 x 2 Locking with 1 Finger on Top
Catalog: Parts: Hinge
6338799 or 3038326 or 4142992 or 4144575	PG	
  +	Plate, Round 2 x 2 with Rounded Bottom (Boat Stud)
*	1	2654	Black Plate, Round 2 x 2 with Rounded Bottom (Boat Stud)
Catalog: Parts: Plate, Round
4617551 or 265426 or 4278359	PG	
  +	Brick, Modified 1 x 2 with Grille / Fluted Profile
*	1	2877	Dark Gray Brick, Modified 1 x 2 with Grille / Fluted Profile
Catalog: Parts: Brick, Modified
287727 or 4124092	PG	
  +	Plate 2 x 6
*	1	3795	Dark Gray Plate 2 x 6
Catalog: Parts: Plate
379527	PG	
  +	Plate, Modified 1 x 2 with Bar Handle on Side - Free Ends
*	1	2540	Dark Gray Plate, Modified 1 x 2 with Bar Handle on Side - Free Ends
Catalog: Parts: Plate, Modified
254027 or 4109721 or 4140589	PG	
  +	Tile 1 x 2 with Life on Mars (LoM) Elliptical Display Pattern
*	1	3069px12	Dark Gray Tile 1 x 2 with Life on Mars (LoM) Elliptical Display Pattern
Catalog: Parts: Tile, Decorated
Part Color Code Missing	PG	
  +	Plate 2 x 6
*	1	3795	Green Plate 2 x 6
Catalog: Parts: Plate
379528	PG	
  +	Dish 4 x 4 Inverted (Radar) with Solid Stud with Life on Mars (LoM) Hoses and Machinery Pattern
*	1	3960px3	Light Gray Dish 4 x 4 Inverted (Radar) with Solid Stud with Life on Mars (LoM) Hoses and Machinery Pattern
Catalog: Parts: Dish, Decorated
Part Color Code Missing	PG	
  +	Hinge Brick 1 x 2 Base
*	1	3937	Light Gray Hinge Brick 1 x 2 Base
Catalog: Parts: Hinge
393702	PG	
  +	Hinge Plate 1 x 8 with Angled Side Extensions, 9 Teeth and Rounded Plate Underside
*	2	30407	Light Gray Hinge Plate 1 x 8 with Angled Side Extensions, 9 Teeth and Rounded Plate Underside
Catalog: Parts: Hinge
4215615 or 4143114	PG	
  +	Tile, Modified 1 x 2 Grille with Bottom Groove
*	2	2412b	Orange Tile, Modified 1 x 2 Grille with Bottom Groove
Catalog: Parts: Tile, Modified
4125254	PG	
  +	Wedge, Plate 3 x 6 Cut Corners
*	1	2419	Sand Green Wedge, Plate 3 x 6 Cut Corners
Catalog: Parts: Wedge, Plate
4143042
`;
let noInput = input ? false : true;
let customPartNumber = 541;
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
      document.getElementById(code.number).style.backgroundColor = "lime";
    };
  });
}

// lists the current count of all pieces
const listPieceCounts = () => {
  document.getElementById("pieceCounts").value = allPieceCounts.join(", ");
};

// removes incomplete sets
const removeIncompleteSets = (organizedsets, currentPieceCounts) => {
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
  let currentPieceCounts = [...allPieceCounts];
  let organizedCompleteSets = removeIncompleteSets(sets.sort((a, b) => a.year - b.year), currentPieceCounts);

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
    organizedCompleteSets = removeIncompleteSets(organizedCompleteSets, currentPieceCounts);
  }
};

// display pieces with counters
if (noInput) {

  // adds pieces to webpage
  for (let i = 0; i < allPieces.length; i++) {
    let newRow = document.createElement("tr");
    newRow.setAttribute("id", `l${allPieces[i].numbers[0]}row`);
    if (sets.length > 1) {
      newRow.style.display = "none";
    }
    newRow.innerHTML = `<td>${allPieces[i].picture}</td>
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
    </td>`;
    document.getElementsByTagName("TABLE")[0].appendChild(newRow);

    // adds options to search list
    document.getElementById("pieces").innerHTML += `<option value="${allPieces[i].name}">`;
  }

  // enables counters
  for (let i = 0; i < allPieces.length; i++) {
    // updates piece counts with typed input
    document.getElementById(`l${allPieces[i].numbers[0]}`).onchange = () => {
      listPieceCounts();
      listCompletedSets();
    };
  
    // arrow buttons increment the value
    document.getElementById(`l${allPieces[i].numbers[0]}up`).onclick = () => {
      allPieceCounts[i] = Number(++document.getElementById(`l${allPieces[i].numbers[0]}`).value);
      listPieceCounts();
      listCompletedSets();
    };
    document.getElementById(`l${allPieces[i].numbers[0]}down`).onclick = () => {
      if (document.getElementById(`l${allPieces[i].numbers[0]}`).value > 0) {
        allPieceCounts[i] = Number(--document.getElementById(`l${allPieces[i].numbers[0]}`).value);
        listPieceCounts();
        listCompletedSets();
      }
    };
  }

  // add color filter
  let colors = [];
  allPieces.forEach(piece => {
    if (!colors.includes(piece.color)) {
        colors.push(piece.color);
    }
  });
  colors.sort((a, b) => {return a < b ? -1 : 1;});
  colors.forEach(color => {
    document.getElementById("colorFilter").innerHTML += `<option value="${color}">${color}</option>`;
  });
  document.getElementById("colorFilter").onchange = () => {
    // hides all rows
    allPieces.forEach(piece => {
      if (document.getElementById(`l${piece.numbers[0]}row`)) {
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "none";
      }
    });

    // resets search options
    document.getElementById("pieces").innerHTML = "";

    allPieces.forEach(piece => {
      if (piece.color === document.getElementById("colorFilter").value && document.getElementById(`l${piece.numbers[0]}row`)) {
        // shows rows for the selected color
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "table-row";

        // adds selected color to search
        document.getElementById("pieces").innerHTML += `<option value="${piece.name}">`;
      }

      // shows all pieces if no color is selected
      else if (!colors.includes(document.getElementById("colorFilter").value) && document.getElementById(`l${piece.numbers[0]}row`)) {
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "table-row";
      }
    });
  }

  // show only searched pieces
  document.getElementById("search").onchange = () => {
    allPieces.forEach(piece => {
      if (piece.name.includes(document.getElementById("search").value) && (document.getElementById("colorFilter").value === "All" || document.getElementById("colorFilter").value === piece.color) && document.getElementById(`l${piece.numbers[0]}row`)) {
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "table-row";

        // highlights searched value in the description
        document.getElementById(`l${piece.numbers[0]}row`).getElementsByClassName("description")[0].innerHTML = document.getElementById(`l${piece.numbers[0]}row`).getElementsByClassName("description")[0].textContent.replace(document.getElementById("search").value, `<span style="background-color: yellow;">${document.getElementById("search").value}</span>`);
      }
      else if (document.getElementById(`l${piece.numbers[0]}row`)) {
        document.getElementById(`l${piece.numbers[0]}row`).style.display = "none";

        // unhighlights searched words
        document.getElementById(`l${piece.numbers[0]}row`).getElementsByClassName("description")[0].innerHTML = document.getElementById(`l${piece.numbers[0]}row`).getElementsByClassName("description")[0].textContent.replace(`<span style="background-color: yellow;">${document.getElementById("search").value}</span>`, document.getElementById("search").value);
      }
    });
  }

  // submit button updates piece counters
  document.getElementById("pieceCountsSubmit").onclick = () => {
    if (document.getElementById("pieceCounts").value.split(", ").length === allPieces.length) {
      allPieceCounts = document.getElementById("pieceCounts").value.split(", ").map(value => {return Number(value)});
      for (let i = 0; i < allPieceCounts.length && document.getElementById(`l${allPieces[i].numbers[0]}`); i++) {
        document.getElementById(`l${allPieces[i].numbers[0]}`).value = allPieceCounts[i];
      }
      document.getElementById("errorText").innerHTML = "Piece Counts Updated";
    }
    else {
      document.getElementById("errorText").innerHTML = "Input does not match number of pieces.";
    }
  }
}