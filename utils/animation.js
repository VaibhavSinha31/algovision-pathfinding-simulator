const delays={slow:32,normal:13,fast:4,instant:0};
export const pause = ms => new Promise(resolve=>setTimeout(resolve,ms));
export async function animate(nodes, callback, speed){ const delay=delays[speed]; if(!delay){ nodes.forEach(callback); return; } for(const node of nodes){ callback(node); await pause(delay); } }
