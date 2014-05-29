from larcc import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])

"""Stairs"""
stair = spiralStair(width=0.2,R=2,r=0.25,riser=0.1,pitch=4.4,nturns=1.5,steps=24)
stair = larApply(r(0,0,PI/2))(stair)
stair = larApply(t(0,-3,0))(stair)
stairColumn = larApply(t(0,-3,0))(larRod(0.25,4.2)())
stairs3D = evalStruct(Struct([stairColumn,stair,t(0,0,3 )]*4))
stairs = (STRUCT(CAT(AA(MKPOLS)(stairs3D))))

master = assemblyDiagramInit([5,7,2])([[.3,41.4*4,.1,20,.3],[.3,8,21.1,8,.1,10,.3],[.3,2.7]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),GREEN,2)
#VIEW(hpc)
toRemove = [0,1,2,3,4,5,6,7,14,15,16,17,18,19,20,21,25,39,45,46,47,49,53]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)

"""corridor Door"""
toMerge = 29
doorCorridorDiagram = assemblyDiagramInit([5,1,2])([[1,4,10,4,1],[.1],[2.4,.3]])
master = diagram2cell(doorCorridorDiagram,master,toMerge)

"""corridor window"""
toMerge = 25
windowCorridorDiagram = assemblyDiagramInit([5,1,2])([[1,4,10,4,1],[.3],[2.4,.3]])
master = diagram2cell(windowCorridorDiagram,master,toMerge)

"""emergency Door"""
toMerge = 3
doorCorridorDiagram = assemblyDiagramInit([1,3,2])([[.3],[4,2,4],[2.4,.3]])
master = diagram2cell(doorCorridorDiagram,master,toMerge)


hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)
#VIEW(hpc)
toRemove = [6,46,50,56,60,66]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
"""pedane scala a spirale"""

pedana = CUBOID([2,2,.3])
muro = CUBOID([.5,3,3*5])
pedane = (STRUCT([T([1,2])([-2,37.5+4])(pedana),T(3)(3)]*5))
rosa = [1,0.855,0.725]
master = COLOR(rosa)(STRUCT(MKPOLS(master)))
corridor = STRUCT([master,T([3])([3])]*4)
corridorPalazzo = STRUCT([pedane,corridor,T([1,2])([-2,37.4+5+2+.25/2])(stairs)])


#VIEW(corridorPalazzo)
