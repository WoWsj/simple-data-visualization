d3.csv("https://raw.githubusercontent.com/WoWsj/visualize_practice/master/result.csv").then(function(dataset)
{
    const width = 850;
    const height = 600;
        
        var count=0;
        var ncount = 0;

        var loc = new Array(44);
        for(var i=0;i<44;i++)
        {
        loc[i] = 0;
        }
        for(var i=0;i<dataset.length;i++)
        {
                var tmp = dataset[i]["locationTranslation"];
                if(dataset[i]["isSexualCrime"] == "TRUE")
                {
                    switch(tmp)
                    {
                        case "Convenience Store":
                            loc[0]++;
                            continue;
                        case "Parking/Drop Lot/Garage":
                            loc[1]++;
                            continue;
                        case "Highway/Road/Alley/Street/Sidewalk":
                            loc[2]++;
                            continue;
                        case "Residence/Home":
                            loc[3]++;
                            continue;
                        case "Commercial/Office Building":
                            loc[4]++;
                            continue;
                        case "Other/Unknown":
                            loc[5]++;
                            continue;
                        case "Bank/Savings and Loan":
                            loc[6]++;
                            continue;
                        case "Park/Playground":
                            loc[7]++;
                            continue;
                        case "Specialty Store":
                            loc[8]++;
                            continue;
                        case "Department/Discount Store":    
                            loc[9]++;
                            continue;
                        case "Hotel/Motel/Etc.":
                            loc[10]++;
                            continue;
                        case "Government/Public Building":
                            loc[11]++;
                            continue;
                        case "Restaurant":
                            loc[12]++;
                            continue;
                        case "Amusement Park":
                            loc[13]++;
                            continue;
                        case "Rental Storage Facility":
                            loc[14]++;
                            continue;
                        case "Bar/Night Club":
                            loc[15]++;
                            continue;
                        case "Shopping Mall":
                            loc[16]++;
                            continue;
                        case "Air/Bus/Train Terminal":
                            loc[17]++;
                            continue;
                        case "Grocery/Supermarket":
                            loc[18]++;
                            continue;
                        case "Construction Site":
                            loc[19]++;
                            continue;
                        case "Daycare Facility":
                            loc[20]++;
                            continue;
                        case "Church/Synagogue/Temple/Mosque":    
                            loc[21]++;
                            continue;                        
                        case "School-College/University":
                            loc[22]++;
                            continue;
                        case "Service/Gas Station":
                            loc[23]++;
                            continue;
                        case "Drug Store/Dr.'s Office/Hospital":
                            loc[24]++;
                            continue;
                        case "Auto Dealership New/Used":
                            loc[25]++;
                            continue;
                        case "ATM Separate from Bank":
                            loc[26]++;
                            continue;
                        case "School-Elementary/Secondary":
                            loc[27]++;
                            continue;
                        case "Arena/Stadium/Fairgrounds/Coliseum":
                            loc[28]++;
                            continue;
                        case "Jail/Prison/Penitentiary/Corrections Facility":
                            loc[29]++;
                            continue;
                        case "Industrial Facility":
                            loc[30]++;
                            continue;
                        case "Lake/Waterway/Beach":    
                            loc[31]++;
                            continue;
                        case "Vacant Lot":
                            loc[32]++;
                            continue;
                        case "Cyberspace":
                            loc[33]++;
                            continue;
                        case "Field/Greenbelt/Woods":
                            loc[34]++;
                            continue;
                        case "Shelter-Mission/Homeless":
                            loc[35]++;
                            continue;
                        case "Liquor Store":
                            loc[36]++;
                            continue;
                        case "Military Installation":
                            loc[37]++;
                            continue;
                        case "Dock/Warf/Freight/Modal Terminal":
                            loc[38]++;
                            continue;
                        case "Rest Area":
                            loc[39]++;
                            continue;
                        case "Camp/Campground":
                            loc[40]++;
                            continue;
                        case "Tribal Lands":
                            loc[41]++;
                            continue;
                        case "Farm Facility":
                            loc[42]++;
                            continue;
                        case "Gambling Facility/Casino/Race Track":    
                            loc[43]++;
                            continue;
                        default:
                            continue;
                    }
                }
        }

        var data = [
                {name : "Convenience Store" ,value : loc[0], color : '#efa86b'},
                {name : "Parking/Drop Lot/Garage" ,value : loc[1], color : '#c1484f'},
                {name : "Highway/Road/Alley/Street/Sidewalk" ,value : loc[2], color : '#d35d50'},
                {name : "Residence/Home" ,value : loc[3], color : '#f4c13c'},
                {name : "Commercial/Office Building" ,value : loc[4], color : '#fae8a4'},
                {name : "Other/Unknown" ,value : loc[5], color : '#df7454'},
                {name : "Bank/Savings and Loan" ,value : loc[6], color : '#efa86b'},
                {name : "Park/Playground" ,value : loc[7], color : '#e88d5d'},
                {name : "Specialty Store" ,value : loc[8], color : '#efa86b'},
                {name : "Department/Discount Store" ,value : loc[9], color : '#f8d690'},
                {name : "Hotel/Motel/Etc." ,value : loc[10], color : '#efa86b'},
                {name : "Government/Public Building" ,value : loc[11], color : '#efa86b'},
                {name : "Restaurant" ,value : loc[12], color : '#efa86b'},
                {name : "Amusement Park" ,value : loc[13], color : '#efa86b'},
                {name : "Rental Storage Facility" ,value : loc[14], color : '#efa86b'},
                {name : "Bar/Night Club" ,value : loc[15], color : '#efa86b'},
                {name : "Shopping Mall" ,value : loc[16], color : '#efa86b'},
                {name : "Air/Bus/Train Terminal" ,value : loc[17], color : '#efa86b'},
                {name : "Grocery/Supermarket" ,value : loc[18], color : '#efa86b'},
                {name : "Construction Site" ,value : loc[19], color : '#efa86b'},
                {name : "Daycare Facility" ,value : loc[20], color : '#efa86b'},
                {name : "Church/Synagogue/Temple/Mosque" ,value : loc[21], color : '#efa86b'},
                {name : "School-College/University" ,value : loc[22], color : '#efa86b'},
                {name : "Service/Gas Station" ,value : loc[23], color : '#efa86b'},
                {name : "Drug Store/Dr.'s Office/Hospital" ,value : loc[24], color : '#efa86b'},
                {name : "Auto Dealership New/Used" ,value : loc[25], color : '#efa86b'},
                {name : "ATM Separate from Bank" ,value : loc[26], color : '#efa86b'},
                {name : "School-Elementary/Secondary" ,value : loc[27], color : '#efa86b'},
                {name : "Arena/Stadium/Fairgrounds/Coliseum" ,value : loc[28], color : '#efa86b'},
                {name : "Jail/Prison/Penitentiary/Corrections Facility" ,value : loc[29], color : '#efa86b'},
                {name : "Industrial Facility" ,value : loc[30], color : '#efa86b'},
                {name : "Lake/Waterway/Beach" ,value : loc[31], color : '#efa86b'},
                {name : "Vacant Lot" ,value : loc[32], color : '#efa86b'},
                {name : "Cyberspace" ,value : loc[33], color : '#efa86b'},
                {name : "Field/Greenbelt/Woods" ,value : loc[34], color : '#efa86b'},
                {name : "Shelter-Mission/Homeless" ,value : loc[35], color : '#efa86b'},
                {name : "Liquor Store" ,value : loc[36], color : '#efa86b'},
                {name : "Military Installation" ,value : loc[37], color : '#efa86b'},
                {name : "Dock/Warf/Freight/Modal Terminal" ,value : loc[38], color : '#efa86b'},
                {name : "Rest Area" ,value : loc[39], color : '#efa86b'},
                {name : "Camp/Campground" ,value : loc[40], color : '#efa86b'},
                {name : "Tribal Lands" ,value : loc[41], color : '#efa86b'},
                {name : "Farm Facility" ,value : loc[42], color : '#efa86b'},
                {name : "Gambling Facility/Casino/Race Track" ,value : loc[43], color : '#efa86b'},
        ];



 
const arc = d3.arc().innerRadius(75).outerRadius(Math.min(width, height) / 2);
 
const arcLabel = (() => {
  const radius = Math.min(width, height) / 2 * 0.8;
  return d3.arc().innerRadius(radius).outerRadius(radius);
})();
 
const pie = d3.pie()
  .sort((a, b) => b.value - a.value)
  .value(d => d.value);
 
const arcs = pie(data);

var div = d3.select("body").append("div")	
.attr("class", "tooltip")				
.style("opacity", 0);  
 
const svg = d3.select('#sexualpiechart').append('svg').style('width', width).style('height', height)
  .attr('text-anchor', 'middle')
  .style('font-size', '12px sans-serif');
 
const g = svg.append('g')
  .attr('transform', `translate(${width/2}, ${height/2})`);
 
g.selectAll('path')
  .data(arcs)
  .enter().append('path')
    .attr('fill', d => d.data.color)
    .attr('stroke', 'white')
    .attr('d', arc)
    .on("mouseover", function(d) {
        d3.select(this)
        .attr('opacity', '.55');
        
        div.transition()		
            .duration(200)		
            .style("opacity", .9);		
        div	.html("place :"+"<b>"+ d.data.name+"</b>"+"<br/>"+"count :"+"<b>"+d.data.value+"</b>")	
            .style("left", (d3.event.pageX+10) + "px")		
            .style("top", (d3.event.pageY -30) + "px");
        })					
        .on("mouseout", function(d) {	
        d3.select(this)
        .attr('opacity', '1');
        
        div.transition()		
            .duration(500)		
            .style("opacity", 0);
        })
  .append('title')
    .text(d => `${d.data.name}: ${d.data.value}`);
 
const text = g.selectAll('text')
  .data(arcs)
  .enter()
  .append('text')
  .attr('transform', d => `translate(${arcLabel.centroid(d)})`)
    .attr('dy', '0.35em');
 
text.filter(d => (d.endAngle - d.startAngle > 0.09))
.append('tspan')
  .attr('x', 0)
  .attr('y', '-0.7em')
  .style('font-weight', 'bold')
  .text(d => d.data.name)
 
text.filter(d => (d.endAngle - d.startAngle > 0.15))
  .append('tspan')
  .attr('x', 0)
  .attr('y', '0.7em')
  .attr('fill-opacity', 0.7)
  .text(d => d.data.value);
 
svg.node();
    });