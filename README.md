# AlgoVision — Visual Pathfinding Simulator

AlgoVision is a polished, dependency-free pathfinding visualizer built with HTML, CSS, and ES6 JavaScript modules. Draw walls and weighted terrain, generate mazes, and watch graph algorithms make their decisions in real time.

## Features
- Responsive grid with draggable start and target nodes
- Wall drawing and Shift-drag weighted terrain
- Animated BFS, DFS, and weighted Dijkstra traversal
- Random and recursive-division mazes
- Four animation speeds, live metrics, toasts, loading state, and keyboard shortcuts

## Run locally
Open the folder in VS Code and run `index.html` with Live Server. No packages or build step are needed.

## Shortcuts
- `Space`: visualize
- `M`: generate maze
- `R`: clear board

## Structure
`algorithms/` contains independent search implementations; `maze/` contains generation strategies; `utils/` contains the grid model, animation helpers, and priority queue.

## Future improvements
Add A*, bidirectional search, saved layouts, and optional sound design.
