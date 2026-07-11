export function randomMaze(grid,start,end,density=.27){const out=[];for(const row of grid.nodes)for(const n of row)if(n!==start&&n!==end&&Math.random()<density)out.push(n);return out;}
