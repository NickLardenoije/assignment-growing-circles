let MyData = [1, 2, 3, 4, 5];

d3.select("svg")
    .selectAll("circle").data(MyData).enter().append("circle")
    .attr("r", 25)
    .attr("cx", (MyData) => MyData * 25)
    .attr("cy", (MyData) => MyData * 25)
    .style("fill", (d, i) =>{
        if (i % 2 === 0) {
            return "green"
        } else{
            return "red"
        }
    })