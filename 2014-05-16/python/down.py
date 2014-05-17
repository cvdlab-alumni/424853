from larcc import *


DRAW = COMP([VIEW,STRUCT,MKPOLS])

down = assemblyDiagramInit([3,8,2])([[.3,20.1,.3],[.1,.3,2,.2,21,.2,9,.3],[.3,2.7]])
V,CV = down
hpc = SKEL_1(STRUCT(MKPOLS(down)))
hpc = cellNumbering (down,hpc)(range(len(CV)),CYAN,2)
down = STRUCT(MKPOLS(down))

toRemove = [21,23,25,27,29]
down = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]

toMerge = 26
doorDownDiagram = assemblyDiagramInit([3,1,2])([[8,2.5,9.6],[0.1],[2.4,.3]])
down= diagram2cell(doorDownDiagram,down,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(down)))
hpc = cellNumbering (down,hpc)(range(len(down[1])),GREEN,2)
#VIEW(hpc)
toRemove = [44]
down = down[0], [cell for k,cell in enumerate(down[1]) if not (k in toRemove)]



toMerge = 19
doorDownDiagram = assemblyDiagramInit([3,1,2])([[8,2.5,9.6],[0.1],[2.4,.3]])
down= diagram2cell(doorDownDiagram,down,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(down)))
hpc = cellNumbering (down,hpc)(range(len(down[1])),GREEN,2)
toRemove = [48,17]
down = down[0], [cell for k,cell in enumerate(down[1]) if not (k in toRemove)]
#VIEW(hpc)
DRAW(down)
#master = COLOR(rosa)(STRUCT(MKPOLS(master)))