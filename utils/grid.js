export class Node { constructor(row,col){ this.row=row; this.col=col; this.key=`${row}-${col}`; this.wall=false; this.weight=false; this.element=null; } }
export class Grid {
  constructor(rows, cols){ this.rows=rows; this.cols=cols; this.nodes=Array.from({length:rows},(_,r)=>Array.from({length:cols},(_,c)=>new Node(r,c))); }
  get(r,c){ return this.nodes[r]?.[c]; }
  neighbors(node){ return [[-1,0],[0,1],[1,0],[0,-1]].map(([r,c])=>this.get(node.row+r,node.col+c)).filter(Boolean); }
  retrace(previous,start,end){ if (start!==end&&!previous.has(end.key)) return []; const path=[]; let current=end; while(current){ path.unshift(current); if(current===start) break; current=previous.get(current.key); } return path; }
}
