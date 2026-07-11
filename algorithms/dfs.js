export function dfs(grid, start, end) {
  const stack = [start], seen = new Set([start.key]), previous = new Map(), visited = [];
  while (stack.length) { const node = stack.pop(); visited.push(node); if (node === end) break;
    const neighbors = grid.neighbors(node).reverse(); for (const next of neighbors) if (!seen.has(next.key) && !next.wall) { seen.add(next.key); previous.set(next.key, node); stack.push(next); }
  }
  return { visited, path: grid.retrace(previous, start, end) };
}
