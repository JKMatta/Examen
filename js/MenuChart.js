      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var servicios = new google.visualization.DataTable();
        servicios.addColumn('string', 'Topping');
        servicios.addColumn('number', 'Slices');
        servicios.addRows([
          ['Este Mes', 3],
          ['Mes Anterior', 2]
        ]);

        var insumos = new google.visualization.DataTable();
        insumos.addColumn('string', 'Topping');
        insumos.addColumn('number', 'Slices');
        insumos.addRows([
          ['Este Mes', 43],
          ['Mes Anterior', 32]
        ]);

        var ganancias = new google.visualization.DataTable();
      ganancias.addColumn('number', 'Ganancia');
      ganancias.addColumn('number', 'Servicios');

      ganancias.addRows([
        [1, 3],   [2, 6],  [3, 4],  [4, 7],  [5, 8],  [6, 9],
        [7, 13],  [8, 10],  [9, 15],  [10, 18],  [11, 14], [12, 21]
      ]);

      var options = {
        hAxis: {
          title: 'Mes'
        },
        vAxis: {
          title: 'Servicios'
        }
      };

        // Instantiate and draw our chart, passing in some options.
        var chartServicios = new google.visualization.PieChart(document.getElementById('chart_div'));
        chartServicios.draw(servicios);

        // Instantiate and draw our chart, passing in some options.
        var chartInsumos = new google.visualization.PieChart(document.getElementById('chart_div2'));
        chartInsumos.draw(insumos);

        var chartGanancias = new google.visualization.LineChart(document.getElementById('chart_div3'));
        chartGanancias.draw(ganancias, options);
    }
      


      

      