import { PriorityQueue } from '../utils/priorityQueue.js';
export function dijkstra(grid, start, end) {
  const pq = new PriorityQueue(), distances = new Map([[start.key, 0]]), previous = new Map(), visited = [], settled = new Set(); pq.enqueue(start, 0);
  while (!pq.isEmpty()) { const node = pq.dequeue(); if (settled.has(node.key)) continue; settled.add(node.key); visited.push(node); if (node === end) break;
    for (const next of grid.neighbors(node)) { if (next.wall) continue; const distance = distances.get(node.key) + (next.weight ? 8 : 1); if (distance < (distances.get(next.key) ?? Infinity)) { distances.set(next.key, distance); previous.set(next.key, node); pq.enqueue(next, distance); } }
  }
  return { visited, path: grid.retrace(previous, start, end), cost: distances.get(end.key) };
}
