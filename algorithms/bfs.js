export function bfs(grid, start, end) {
  const queue = [start], seen = new Set([start.key]), previous = new Map(), visited = [];
  while (queue.length) { const node = queue.shift(); visited.push(node); if (node === end) break;
    for (const next of grid.neighbors(node)) if (!seen.has(next.key) && !next.wall) { seen.add(next.key); previous.set(next.key, node); queue.push(next); }
  }
  return { visited, path: grid.retrace(previous, start, end) };
}
