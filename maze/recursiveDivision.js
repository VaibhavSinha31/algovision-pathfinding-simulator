// Recursive division builds alternating walls with one deliberate passage each.
export function recursiveDivision(grid,start,end){
  const walls=[],used=new Set();
  const add=n=>{if(n!==start&&n!==end&&!used.has(n.key)){used.add(n.key);walls.push(n)}};
  for(let r=0;r<grid.rows;r++)for(let c=0;c<grid.cols;c++)if(!r||!c||r===grid.rows-1||c===grid.cols-1)add(grid.get(r,c));
  function divide(top,bottom,left,right,horizontal){
    if(bottom-top<4||right-left<4)return;
    if(horizontal){const row=top+2*Math.floor((bottom-top)/4),gap=left+1+2*Math.floor(Math.random()*Math.max(1,(right-left-1)/2));for(let c=left;c<=right;c++)if(c!==gap)add(grid.get(row,c));divide(top,row-1,left,right,false);divide(row+1,bottom,left,right,false)}
    else {const col=left+2*Math.floor((right-left)/4),gap=top+1+2*Math.floor(Math.random()*Math.max(1,(bottom-top-1)/2));for(let r=top;r<=bottom;r++)if(r!==gap)add(grid.get(r,col));divide(top,bottom,left,col-1,true);divide(top,bottom,col+1,right,true)}
  }
  divide(0,grid.rows-1,0,grid.cols-1,grid.rows>grid.cols);return walls;
}
