d3.csv("https://raw.githubusercontent.com/WoWsj/visualize_practice/master/result.csv").then(function(dataset)
{
    const width = 850;
    const height = 500;
    const margin = {top: 40, left: 40, bottom: 40, right: 40};
    
    var hour = new Array(24);
    for(var i=0;i<24;i++)
    {
        hour[i] = 0;
    }
    for(var i=0;i<dataset.length;i++)
    {
            if(dataset[i]["isViolentCrime"] == "TRUE")
            {
            var tmp = dataset[i]["hour"];
            hour[tmp]++;
            }
    }

     
    const data = [
        {name: '0', value: hour[0]},
        {name: '1', value: hour[1]},
        {name: '2', value: hour[2]},
        {name: '3', value: hour[3]},
        {name: '4', value: hour[4]},
        {name: '5', value: hour[5]},
        {name: '6', value: hour[6]},
        {name: '7', value: hour[7]},
        {name: '8', value: hour[8]},
        {name: '9', value: hour[9]},
        {name: '10', value: hour[10]},
        {name: '11', value: hour[11]},
        {name: '12', value: hour[12]},
        {name: '13', value: hour[13]},
        {name: '14', value: hour[14]},
        {name: '15', value: hour[15]},
        {name: '16', value: hour[16]},
        {name: '17', value: hour[17]},
        {name: '18', value: hour[18]},
        {name: '19', value: hour[19]},
        {name: '20', value: hour[20]},
        {name: '21', value: hour[21]},
        {name: '22', value: hour[22]},
        {name: '23', value: hour[23]},

      ];
     
    const x = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.2);
     
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);
     
    const xAxis = g => g
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x)
        .tickSizeOuter(0));
     
    const yAxis = g => g
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y))
      .call(g => g.select('.domain').remove());
    
    var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);  

    const svg = d3.select('#violenttimebarchart').append('svg').style('width', width).style('height', height);
     
    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);
    svg.append('g')
      .attr('fill', 'steelblue')
      .selectAll('rect').data(data).enter().append('rect')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.value))
      .attr('height', d => y(0) - y(d.value))
      .attr('width', x.bandwidth())
      .on("mouseover", function(d) {
        d3.select(this)
        .attr('fill','lightblue');	
        div.transition()		
            .duration(200)		
            .style("opacity", .9);		
        div	.html("hour :"+"<b>"+ d.name+"</b>"+"<br/>"+"count :"+"<b>"+d.value+"</b>")	
            .style("left", (d3.event.pageX+10) + "px")		
            .style("top", (d3.event.pageY -30) + "px");	
        })					
        .on("mouseout", function(d) {	
        d3.select(this)
        .attr('fill','steelblue');	
	
        div.transition()		
            .duration(500)		
            .style("opacity", 0);	
        });
     
    svg.node();
    });