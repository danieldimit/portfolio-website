var heightLegend = document.getElementById('legend').offsetHeight;
console.info(heightLegend);
var widthLegend = document.getElementById('legend').offsetWidth;

svgLegend = d3
    .select('#legend')
    .append('svg')
    .attr('width', widthLegend)
    .attr('height', heightLegend);

nodeSize = svgLegend
    .append('g')
    .attr('transform', 'translate(0 ' + (heightLegend * 0.10).toString() + ')');
depth = svgLegend
    .append('g')
    .attr('transform', 'translate(0 ' + (heightLegend * 0.12).toString() + ')');
offset = 30;
for (i = 0; i < 5; i++) {
    nodeSize
        .append('circle')
        .attr('cx', offset)
        .attr('cy', 0)
        .attr('r', widthLegend * 0.01 * (i + 3))
        .attr('fill', colors[0]);
    offset += widthLegend * 0.01 * (i + 3) * 3;
}
offset -= widthLegend * 0.01 * (4 + 3) * 3;

nodeSize.append('text').text('Influence ')
    .attr('transform', 'translate(10,-20)')
    .attr('font-size', '20');

g = nodeSize
    .append('g')
    .attr(
        'transform',
        'translate(20 ' + (heightLegend * 0.05).toString() + ')'
    );
g.append('text')
    .text('Less ')
    .attr('transform', 'rotate(0 0,0)')
    .attr('font-size', '14');

g = nodeSize
    .append('g')
    .attr(
        'transform',
        'translate(' + offset + ' ' + (heightLegend * 0.05).toString() + ')'
    );
g.append('text').text('More ')
    .attr('transform', 'rotate(0 0,0)')
    .attr('font-size', '14');

for (i = 1; i < 5; i++) {
    depth
        .append('circle')
        .attr('cx', widthLegend * 0.5)
        .attr('cy', heightLegend * 0.2)
        .attr('r', widthLegend * 0.1 * i)
        .attr('stroke', colors[i])
        .attr('stroke-width', 1.7)
        .attr("stroke-dasharray" ,11)
        .attr('fill', 'None');
    depth
        .append('line')
        .attr('x1', widthLegend * 0.5 - widthLegend * 0.1 * i)
        .attr('y1', heightLegend * 0.2)
        .attr('x2', widthLegend * 0.5 - widthLegend * 0.1 * i)
        .attr('y2', heightLegend * 0.4)
        .attr('style', 'stroke:' + colors[i] + ';stroke-width:2');
    g = depth
        .append('g')
        .attr(
            'transform',
            'translate(' +
            (widthLegend * 0.5 - widthLegend * 0.1 * i).toString() +
            ' ' +
            (heightLegend * 0.4).toString() +
            ')'
        );
    g
        .append('text')
        .text('Diffusion Level ' + (5 - i).toString())
        .attr('x', 0)
        .attr('y', 0)
        .attr('fill', colors[i])
        .attr('transform', 'rotate(55 0,0)');

    //<line x1="21%" y1="30%" x2="21%" y2="60%" style="stroke:#d95f02;stroke-width:2"/>
}
