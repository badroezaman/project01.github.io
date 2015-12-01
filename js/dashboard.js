jQuery(document).ready(function(){

    "use strict";

    function showTooltip(x, y, contents) {
	     jQuery('<div id="tooltip" class="tooltipflot">' + contents + '</div>').css( {
         position: 'absolute',
         display: 'none',
         top: y + 5,
         left: x - 100
       }).appendTo("body").fadeIn(200);
    }

    /*****SIMPLE CHART*****/

    var ips = [[1, 2.85], [2,3.00], [3, 2.95], [4, 3.05], [5, 3.15], [6, 2.75], [7, 3.15], [8, 3.46]];
    //var retCust = [[0, 0], [1, 8], [2,3], [3, 10], [4, 3], [5, 6], [6,6]];

    var plot = jQuery.plot(jQuery("#basicflot"),
	[{
	    data: ips,
	    label: "Indeks Prestasi Semester",
	    color: "#307AB7",
      points: {
        symbol: "square"
      }
	}
//        {
//	    data: retCust,
//	    label: "Returning Customer",
//	    color: "#034289"
//        }
	],
	{
	    series: {
    		lines: {
          show: true,
          fill: true,
          lineWidth: 1,
          fillColor: {
          colors: [ { opacity: 0.5 }, { opacity: 0.5 } ]
          }
    		},
    		// splines: {
    		//     show: true,
    		//     tension: 0.4,
    		//     lineWidth: 1,
    		//     fill: 0.2
    		// },
    		shadowSize: 0
	    },
	    points: {
		    show: true
	    },
	    legend: {
		    container: '#basicFlotLegend',
        noColumns: 0
	    },
	    grid: {
    		hoverable: true,
    		clickable: false,
    		borderColor: '#ddd',
    		borderWidth: 0,
    		labelMargin: 10,
    		backgroundColor: '#fff'
	    },
	    yaxis: {
		    min: 0,
		    max: 4,
		    color: '#eee'
	    },
	    xaxis: {
		    color: '#eee'
	    }
	});

	var previousPoint = null;
	jQuery("#basicflot").bind("plothover", function (event, pos, item) {
	jQuery("#x").text(pos.x.toFixed(2));
	jQuery("#y").text(pos.y.toFixed(2));

	if(item) {
	    if (previousPoint != item.dataIndex) {
		previousPoint = item.dataIndex;

		jQuery("#tooltip").remove();
		var x = item.datapoint[0].toFixed(2),
		y = item.datapoint[1].toFixed(2);

		showTooltip(item.pageX, item.pageY,
		item.series.label + " " + x + " = " + y);
	    }

	} else {
	    jQuery("#tooltip").remove();
	    previousPoint = null;
	}

    });

    jQuery("#basicflot").bind("plotclick", function (event, pos, item) {
	if (item) {
	    plot.highlight(item.series, item.datapoint);
	}
    });
2.85, 3.00, 2.95, 3.05, 3.15, 2.75, 3.15, 3.46
    jQuery('#sparkline').sparkline([2.85, 3.00, 2.95, 3.05, 3.15, 2.75, 3.15, 3.46], {
	type: 'bar',
        height:'30px',
        barColor: '#307AB7'
    });

    jQuery('#sparkline2').sparkline([2.85, 3.00, 2.95, 3.05, 3.15, 2.75, 3.15, 3.46], {
	type: 'bar',
	height:'30px',
        barColor: '#FF1200'
    });

});
