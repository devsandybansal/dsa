function pattern1(n) {
  // i is responsible for number of rows
  for (let i = 0; i < n; i++) {
    let row = "";
    // j is responsible for number of column
    for (let j = 0; j < n; j++) {
      row = row + " *";
    }
    console.log(row);
  }
}

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + " *";
    }
    console.log(row);
  }
}

function pattern3(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (j = 0; j < i + 1; j++) {
      row = row + " " + (i + 1);
    }
    console.log(row);
  }
}

function pattern4(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + " " + (j + 1);
    }
    console.log(row);
  }
}

function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    // Adding empty spaces
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + " ";
    }

    // Adding stars
    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }

    console.log(row);
  }
}

function pattern6(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let bit = 1;
    for (let j = 0; j < i + 1; j++) {
      row = row + bit;
      if (bit === 1) {
        bit = 0;
      } else {
        bit = 1;
      }
    }
    console.log(row);
  }
}

function pattern7(n) {
  let bit = 1;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row = row + bit;

      // Switch bit
      if (bit === 1) {
        bit = 0;
      } else {
        bit = 1;
      }
    }
    console.log(row);
  }
}

pattern7(5);
