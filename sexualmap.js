
 var w = 850;
 var h = 600;
 var svg = d3.select("#sexualmap")
 .append("svg")
 .attr("preserveAspectRatio", "xMinYMin meet")
 .attr("viewBox", "0 0 " + w + " " + h)
 .classed("svg-content", true);

 var projection = d3.geoMercator().translate([w/2, h/2]).scale(200000).center([-111.93,33.39]);
 var path = d3.geoPath().projection(projection);
    
// load data  
d3.json("https://raw.githubusercontent.com/WoWsj/visualize_practice/master/Zoning_Districts.geojson").then(function(value)
{
    var police = d3.csv("https://raw.githubusercontent.com/WoWsj/visualize_practice/master/result.csv").then(function(data)
    {
        var arry = new Array();
        var home = new Array();
    for(var i=0;i<data.length;i++)
    {
        if(data[i]["isSexualCrime"] == "TRUE")
        {
            if(data[i]["locationTranslation"] == "Residence/Home" || data[i]["locationTranslation"] == "Hotel/Motel/Etc.")
            {
                home.push(data[i]);
            }
            else
            {
            arry.push(data[i]);
            }
        }

    }


    
    svg.selectAll("path")
    .data(value.features)
    .enter()
    .append("path")
    .attr("fill", "gray")
    .attr("stroke","white")
    .attr("d", path);

    svg.selectAll("circle")
    .data(arry)
    .enter()
    .append("circle")
    .attr("transform", function(d) {
        return "translate(" + projection([
        d.X, d.Y]) + ")"})
    .attr("r", 0.75)
    .attr("fill", "red")
    .attr("id","sexualother");

    var homedata = svg.selectAll("circle")
    .data(home);

    homedata.enter()
    .append("circle")
    .attr("transform", function(d) {
        return "translate(" + projection([
        d.X, d.Y]) + ")"})
    .attr("r", 0.75)
    .attr("id","sexualhome")
    .attr("fill", "red")
    .merge(homedata);

    d3.select("#sexualhome").on("click", function(){
		// Determine if current line is visible
		var active   = home.active ? false : true ,
		  newOpacity = active ? 0 : 1;
		// Hide or show the elements
		d3.selectAll("circle#sexualhome").style("opacity", newOpacity);
		// Update whether or not the elements are active
		home.active = active;
    })
    
    d3.select("#sexualelse").on("click", function(){
		// Determine if current line is visible
		var active   = other.active ? false : true ,
		  newOpacity = active ? 0 : 1;
		// Hide or show the elements
		d3.selectAll("circle#sexualother").style("opacity", newOpacity);
		// Update whether or not the elements are active
		other.active = active;
	})
    
    });
});