function calculateOttoCycleEfficiency(compressionRatio) {
    const gamma = 1.4; // gamma value 

     // Calculate efficiency using the formula
    const efficiency = 1 - Math.pow(1 / compressionRatio, gamma - 1);
    const Result = efficiency*100

     return Result.toFixed(4);
}

const table = document.querySelector("table")
const compressionRatio = [6, 7, 8, 9, 10,12,14,16,18,22,25,35,45, 50, 75, 90, 100];


compressionRatio.forEach(ratio => {
const efficiency = calculateOttoCycleEfficiency(ratio);
const row = table.insertRow(-1);
const cell1 = row.insertCell(0);
const cell2 = row.insertCell(1);

cell1.textContent = ratio;
cell2.textContent = efficiency;
});
// graph
const compressionRatios = [6, 7, 8, 9, 10, 12 ,14 ,16 ,18 ,22 ,25 ,35 ,45, 50, 75, 90, 100];
const efficiencies = [];

// Calculate efficiencies and populate the array
compressionRatios.forEach(ratio => {
const efficiency = calculateOttoCycleEfficiency(ratio);
efficiencies.push(efficiency);
});
const ctx = document.getElementById('myChart').getContext('2d');

// plot graph
const myChart = new Chart(ctx, {
type: 'line', // Specify the chart type
data: {
labels: compressionRatios, // X-axis labels
datasets: [{
label: 'Otto Cycle Efficiency',
data: efficiencies, // Y-axis data
borderColor: 'blue', // Line color
fill: false, // Do not fill the area under the line
}]
},
options: {
scales: {
x: {
  type: 'linear', // Use linear scale for X-axis
  position: 'bottom',
  title: {
    display: true,
    text: 'Compression Ratio'
  }
},
y: {
  beginAtSix: true,
  title: {
    display: true,
    text: 'Efficiency'
  }
}
},
responsive: true,
maintainAspectRatio: true
}
});

function CalculateEfficiency(){
  let r = Number(document.getElementById("rvalue").value);
  let Gamma = 1.4; 
  if(r>=1  && r<=8){
  let Efficiency = 1 - Math.pow(1/ r,Gamma -1);
  let FinalValue = Efficiency*100;
  FinalValue = FinalValue.toFixed(4);
  let Result =  document.getElementById("result");
  Result.innerHTML = `The Efficiency of Otto Cycle is ${FinalValue} %`;
  }
  else if(r>=9){
    let Result =  document.getElementById("result");
    Result.innerHTML = "If The Compression Ratio Value is Above 8 ,The Knocking Phenomenon Will Occur"; 
  }
  else if(r<0){
    let Result =  document.getElementById("result");
    Result.innerHTML = "Please Enter a Positive Value"; 
  }
  else {
     let Result =  document.getElementById("result");
     Result.innerHTML = "Please Enter  a Numerical Value"; 
  }
}             


