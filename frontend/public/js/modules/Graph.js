var Graph = (function() {
    var opacity = 0.4;


    function zoomIn(sigmaInstance) {
        sigma.misc.animation.camera(
            sigmaInstance.camera,
            {
                ratio: sigmaInstance.camera.ratio / sigmaInstance.camera.settings('zoomingRatio')
            },
            {
                duration: 200
            }
        );
    }

    function zoomOut(sigmaInstance) {
        sigma.misc.animation.camera(
            sigmaInstance.camera,
            {
                ratio: sigmaInstance.camera.ratio * sigmaInstance.camera.settings('zoomingRatio')
            },
            {
                duration: 200
            }
        );
    }

    function exportData(sigmaInstance) {
        var csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "UserID,";
        csvContent += "UserName,";
        csvContent += "Date,";
        csvContent += "Language,";
        csvContent += "DiffusionLevel,";
        csvContent += "Follower Sum\n";
        var slist = csvContent;
        let atLeastOneWasActivated=false;

        sigmaInstance.graph.nodes().forEach(function(node,i)
        {

            if(node.activated)
            {
                atLeastOneWasActivated = true;
                slist += node.userId+",";
                slist += node.userName+",";
                slist += node.date+",";
                slist += node.lang+",";
                slist += node.level+",";
                slist += node.sumfollowers+"\n";
            }

            csvContent += node.userId+",";
            csvContent += node.userName+",";
            csvContent += node.date+",";
            csvContent += node.lang+",";
            csvContent += node.level+",";
            csvContent += node.sumfollowers+"\n";

        });

        if(atLeastOneWasActivated){
            csvContent = slist;
        }

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        let now = new Date();
        now =now.toISOString().split(".")[0]
            //.replace(":","-");
        link.setAttribute("download", "fng_export_"+now+".csv");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file named "my_data.csv".
    }

    function exportGraphSnapshot(sigmaInstance) {

        var myRenderer = sigmaInstance.renderers[0];
        var img = myRenderer.snapshot({
            format: 'jpg',
            background: 'white',
            labels: true
        });

        var encodedUri = encodeURI(img);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        let now = new Date();
        now =now.toISOString().split(".")[0]
        //.replace(":","-");
        link.setAttribute("download", "fng_export_"+now+".jpg");
        document.body.appendChild(link); // Required for FF

        link.click();


    }

    function createGraph(sigmaInstance, graphJSONURL, colors) {
        var tooltipInstance = sigma.plugins.tooltips(sigmaInstance,sigmaInstance.renderers[0],{});

        var d3Colors = d3.scaleOrdinal(d3.schemeCategory20b);

        colors = Array();
        for(c=0;c<30;c++)
        {
            colors[c] = d3Colors(c)
        }
        sigma.parsers.json(graphJSONURL,
            sigmaInstance,
            function() {
                console.info(graphJSONURL)
                var maxLevel = sigmaInstance.graph.nodes().reduce(function(a,e){return Math.max(a,parseInt(e.level))},0)
                    for (i = 0; i < sigmaInstance.graph.nodes().length; i++) {
                        rx = 0
                        ry = 0
                        sigmaInstance.graph.nodes()[i].x = (maxLevel-sigmaInstance.graph.nodes()[i].level)*400*rx
                        sigmaInstance.graph.nodes()[i].y = (maxLevel-sigmaInstance.graph.nodes()[i].level)*400*ry
                    //sigmaInstance.graph.nodes()[i].size = sigmaInstance.graph.nodes()[i].sumfollowers
                    //sigmaInstance.graph.nodes()[i].size = 10
                        sigmaInstance.graph.nodes()[i].label=""
                        sigmaInstance.graph.nodes()[i].path=[]
                        sigmaInstance.graph.nodes()[i].color="#000000"
                        sigmaInstance.graph.nodes()[i].activated = false;
                        sigmaInstance.graph.nodes()[i].hidden=true;
                    //console.info(sigmaInstance.graph.nodes()[i].level)

                        paths = sigmaInstance.graph.edges().filter(function(e,idx){
                            nId = sigmaInstance.graph.nodes()[i].id;
                            return e.target==nId;
                        })
                    for(j=0;j<paths.length;j++)
                    {
                        sigmaInstance.graph.nodes()[i].path.push(paths[j].source);
                    }

                    console.info(sigmaInstance.graph.nodes()[i].path)
                    sigmaInstance.graph.nodes()[i].size = sigmaInstance.graph.nodes()[i].path.length;

                    if(sigmaInstance.graph.nodes()[i].level==0) {
                        sigmaInstance.graph.nodes()[i].hidden=true;
                    }
            }
            firstLevel = sigmaInstance.graph.nodes().filter(function(e) {
                return e.level == 1;
            });
            for (i = 0; i < sigmaInstance.graph.edges().length; i++) {
                edge = sigmaInstance.graph.edges()[i];

                //console.info(idx)
                //edge.hidden=true;
                edge.color = '#dddddd';
                edge.referenced = 0;
            }

            for (i = 0; i < firstLevel.length; i++) {
                rx = Math.cos(i*(2*Math.PI/firstLevel.length))
                ry = Math.sin(i*(2*Math.PI/firstLevel.length))
                offset = i%5

                if(offset==0)
                {
                    offset=-100


                }
                if(offset==1)
                {
                    offset= 0;
                }
                if(offset==2)
                {
                    offset=  100
                }
                sigmaInstance.graph.nodes(firstLevel[i].id).x = (maxLevel-firstLevel[i].level+1)*(400)*rx+rx*offset
                sigmaInstance.graph.nodes(firstLevel[i].id).y = (maxLevel-firstLevel[i].level+1)*(400)*ry+ry*offset
                sigmaInstance.graph.nodes(firstLevel[i].id).size = sigmaInstance.graph.nodes(firstLevel[i].id).path.length
                sigmaInstance.graph.nodes(firstLevel[i].id).label=""
                sigmaInstance.graph.nodes(firstLevel[i].id).color=colors[colors.length-1]
                sigmaInstance.graph.nodes(firstLevel[i].id).activated = false;
                sigmaInstance.graph.nodes(firstLevel[i].id).hidden=false;
                sigmaInstance.graph.nodes(firstLevel[i].id).angleOffset=i*(2*Math.PI/firstLevel.length);

                //idx = sigmaInstance.graph.nodes().findIndex(function(e,idx){return e.id==firstLevel[i].id})
                stack = [];
                stack.push(firstLevel[i].id);
                while (stack.length > 0) {
                    //sigmaInstance.graph.nodes(firstLevel[i].id).path
                    //sigmaInstance.graph.nodes(firstLevel[i].id).path
                    id = stack.pop()
                    n=sigmaInstance.graph.nodes(id)
                    for(j=0;j<sigmaInstance.graph.nodes(id).path.length;j++)
                    {
                        stack.push(sigmaInstance.graph.nodes(id).path[j])
                        id2 = sigmaInstance.graph.nodes(id).path[j];
                        offset = j%5

                        if(offset==0)
                        {
                            offset=Math.sin(0);


                        }
                        if(offset==1)
                        {
                            offset= Math.sin(Math.PI/2) *150;
                        }
                        if(offset==2)
                        {
                            offset=  Math.sin(Math.PI) *150;

                        }
                        if(offset==3)
                        {
                            offset= Math.sin((3/2)*Math.PI) *150;
                        }
                        if(offset==4)
                        {
                            offset=Math.sin(2*Math.PI) *150;
                        }
                        if(n.level>0)
                        {
                            sigmaInstance.graph.nodes(id2).angleOffset = sigmaInstance.graph.nodes(id).angleOffset+(j-sigmaInstance.graph.nodes(id).path.length/2.0+0.5)*(2*Math.PI/(firstLevel.length/sigmaInstance.graph.nodes(id2).level))
                            sigmaInstance.graph.nodes(id2).x = (maxLevel-sigmaInstance.graph.nodes(id2).level+1)*(400)*Math.cos(sigmaInstance.graph.nodes(id2).angleOffset)+Math.cos(sigmaInstance.graph.nodes(id2).angleOffset)*offset
                            sigmaInstance.graph.nodes(id2).y = (maxLevel-sigmaInstance.graph.nodes(id2).level+1)*(400)*Math.sin(sigmaInstance.graph.nodes(id2).angleOffset)+Math.sin(sigmaInstance.graph.nodes(id2).angleOffset)*offset
                            sigmaInstance.graph.nodes(id2).hidden = false
                            sigmaInstance.graph.nodes(id2).color = colors[colors.length-sigmaInstance.graph.nodes(id2).level]
                        }
                    }
                    n = sigmaInstance.graph.nodes(id);
                    console.info(sigmaInstance.graph.nodes(id).level)
                }
            }

            sigmaInstance.bind('overNode', function(data) {
                n = sigmaInstance.graph.nodes(data.data.node.id);

                //check if link in n.profileImg returns img. Use this img or if not available use default
                var httpsProfilePic = n.profileImg.replace('http', 'https');
                fetch(httpsProfilePic).then(function(response){
                    response.status === 200 ? $('#nodeInfoImg').attr('src', httpsProfilePic) : $('#nodeInfoImg').attr('src', '/img/48-48-placeholder.png');
                }).catch(function(err){
                    $('#nodeInfoImg').attr('src', '/img/48-48-placeholder.png');
                });
                $('#userName').text(n.userName);
                $('#language').text(n.lang);
                $('#joinDate').text(n.date);
                $('#follower').text(n.followers);
                $('#sumfollower').text(n.sumfollowers);
                $('#diffusionlvl').text(n.level);
            });
            sigmaInstance.bind('outNode', function(data) {
                n = sigmaInstance.graph.nodes(data.data.node.id);
                tooltipInstance.close()
            });
            sigmaInstance.bind('clickNode', function(data) {
                //console.info(data.data.node.id)
                //sigmaInstance.zoomToNode(data.data.node, 0.05, data.target.camera);


                stack = [];
                visited = {};
                stack.push(data.data.node.id);
                n = sigmaInstance.graph.nodes(data.data.node.id);
                clear = n.activated;
                if(!clear)
                {
                    sigmaInstance.graph.nodes().forEach(function(n){
                    	if(!n.activated)
                    	{
                        	n.color = colors[n.level];
                        	clr = caculateTransparentColor(n.color, "#ffffff", opacity)
                        	n.color = clr
                        	n.label = "";
                        }
                    })


                    sigmaInstance.graph.edges().forEach(function(e){
                    	if(!e.activated)
                    	{
                        	e.color = "#cccccc"
                        }
                    })
                    n.activated = true;
                    active = true;
                    act = n.activated;
                    while(stack.length>0)
                    {
                        //console.info(stack)
                        n = sigmaInstance.graph.nodes(stack.shift());
                        n.activated = act;

                        visited[n.id] = true;
                        //console.info(visited)
                        if(n.level!=0)
                        {
                            edges = sigmaInstance.graph.edges()
                            for(i=0;i<edges.length;i++)
                            {
                                if(n.id==edges[i].source)
                                {
                                    //console.info("unlocked")
                                    t = sigmaInstance.graph.nodes(edges[i].target)
                                    s = sigmaInstance.graph.nodes(edges[i].source)
                                    //console.info(t.level)
                                    //console.info(n.level)
                                    t.color = colors[t.level]
                                    s.color = colors[s.level]

                                    if(!(edges[i].target in visited))
                                    {
                                        //console.info(active)
                                        //console.info("HIT")
                                        n.label = n.userName;

                                        edges[i].color = "#000000";
                                        edges[i].referenced++;
                                        edges[i].activated = true;
                                        stack.push(edges[i].target)
                                    }
                                }
                                else if(n.id==edges[i].target)
                                {

                                    t = sigmaInstance.graph.nodes(edges[i].source)
                                    if(!(edges[i].source in visited) && t.level < n.level)
                                    {
                                        //console.info("HIT")
                                        n.label = n.userName;
                                        edges[i].color = "#000000";
                                        edges[i].activated = true;
                                            //edges[i].referenced++;

                                        stack.push(edges[i].source)
                                    }
                                }
                                //edges[i].size = 1
                            }
                        }
                    }
                }
                else
                {
                    sigmaInstance.graph.nodes().forEach(function(n){
                        n.color = colors[n.level];
                        n.activated=false;
                        n.label = "";
                    })
                    sigmaInstance.graph.edges().forEach(function(e){
                        e.color = "#cccccc";
                        e.activated = false;

                    })
                }
                sigmaInstance.refresh();
            });
            sigmaInstance.refresh();
            //sigmaInstance.configForceAtlas2({edgeWeightInfluence:1.0})
            //sigmaInstance.startForceAtlas2();
            //setTimeout(function(){sigmaInstance.stopForceAtlas2();},5000);
        });
        sigmaInstance.refresh();
    }

    return {
        createGraph: createGraph,
        zoomIn: zoomIn,
        zoomOut: zoomOut,
        exportData: exportData,
        exportGraphSnapshot: exportGraphSnapshot,
    };
})(sigma, d3);
