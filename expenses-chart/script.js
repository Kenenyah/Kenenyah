
const main = async()=>{
    const reponse = await fetch('./data.json');
    const days = await reponse.json();

       
    console.log(days)

// ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

const labels = [];
days.forEach(day => {
    labels.push(day.day);
});
const daysData = [];
days.forEach(day => {
    daysData.push(day.amount);
});
const data = {
  labels: labels,
  datasets: [{
    label: '',
    data: daysData,
    backgroundColor: [
      'hsl(10, 79%, 65%)',
      'hsl(10, 79%, 65%)',
      'hsl(186, 34%, 60%)',
      'hsl(10, 79%, 65%)',
      'hsl(10, 79%, 65%)',
      'hsl(10, 79%, 65%)',
      'hsl(10, 79%, 65%)'
    ],
    hoverBackgroundColor: [
      'hsl(10, 79%, 75%)',
      'hsl(10, 79%, 75%)',
      'hsl(186, 34%, 75%)',
      'hsl(10, 79%, 75%)',
      'hsl(10, 79%, 75%)',
      'hsl(10, 79%, 75%)',
      'hsl(10, 79%, 75%)'
    ],
    // hoverBorderColor: [
    //   'hsl(10, 79%, 65%)',
    //   'hsl(10, 79%, 65%)',
    //   'hsl(186, 34%, 60%)',
    //   'hsl(10, 79%, 65%)',
    //   'hsl(10, 79%, 65%)',
    //   'hsl(10, 79%, 65%)',
    //   'hsl(10, 79%, 65%)'
    // ],
    // borderColor: [
    //   'hsl(10, 79%, 65%)',
    //   'hsl(10, 79%, 65%)',
    //   'hsl(186, 34%, 60%)',
    //   'hsl(10, 79%, 65%)',
    //   'hsl(10, 79%, 65%)',
    //   'hsl(10, 79%, 65%)',
    //   'hsl(10, 79%, 65%)'
    // ],
    borderRadius: 4,
    borderSkipped:false,
    borderWidth: 0
  }]
};


const config = {
    type: 'bar',
    data: data,
    options: {
            onHover:(event, chartElement) =>{
                if(chartElement.length === 1){
                    event.native.target.style.cursor = 'pointer';
                }
                if(chartElement.length === 0){
                    event.native.target.style.cursor = 'default';
                }
            },
            plugins: {
                tooltip:{
                    displayColors:false,
                    callbacks:{
                        title:()=>{''},
                        label:(context) =>{
                            
                            return '$'+context.formattedValue;
                        }
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    display:false,
                    grid:{
                        display:false
                    }
                },
                x:{
                    grid:{
                        drawBorder: false,
                        display:false
                    }
                },
                ticks:{
                    display:false
                },
            },
        }
    };


//   const config = {
//     type: 'bar',
//     data: data,
//     options: {
//         scales: {
//           yAxis: {
            
            
//           }
//         }
//       }
//   };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}
main();

