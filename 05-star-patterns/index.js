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

pattern4(6);
