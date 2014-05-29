from larcc import *
from finestraPorta import *

DRAW = COMP([VIEW,STRUCT,MKPOLS])

"""Stairs"""
stair = spiralStair(width=0.2,R=2,r=0.25,riser=0.1,pitch=4.4,nturns=1.5,steps=24)
stair = larApply(r(0,0,PI/2))(stair)
stair = larApply(t(0,-3,0))(stair)
stairColumn = larApply(t(0,-3,0))(larRod(0.25,4.2)())
stairs3D = evalStruct(Struct([stairColumn,stair,t(0,0,3 )]*4))
stairs = (STRUCT(CAT(AA(MKPOLS)(stairs3D))))


 
master = assemblyDiagramInit([5,7,2])([[.3,20.7*8-.3,.1,20,.3],[.3,8,20.8,8,.1,10,.3],[.3,2.7]])
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
"""TOP e DOWN corridoio"""

#FINESTRA
glass_mat = [0,0.19,0.39,1, 0,0,0,0.2, 0,0,0,1, 0,0,0,1, 100]

glass = CUBOID([4,0.3,2.4])
glass = MATERIAL(glass_mat)(glass)
glassCorridory = T([1,3])([.3+20.7*8-.3+.1+1,.3])(STRUCT([glass,T(1)(14)]*2))


pedana = CUBOID([2,2,.3])
muro = CUBOID([.5,3,3*5])
pedane = (STRUCT([T([1,2])([-2,37.5+4])(pedana),T(3)(3)]*5))
rosa = [1,0.855,0.725]
master = COLOR(rosa)(STRUCT(MKPOLS(master)))
master = STRUCT([master,glassCorridory])
corridor = STRUCT([master,T([3])([3])]*5)
corridoioPalazzo = STRUCT([pedane,corridor,T([1,2])([-2,37.4+5+2+.25/2])(stairs)])

"""vetrata scale d'emergenza"""
b1 = BEZIER(S1)([[0,0,0],[0,0,15]])
b2 = BEZIER(S1)([[-10,5,0],[-10,5,15]])
b3 = BEZIER(S1)([[0,10,0],[0,10,15]])
controls = [b1,b2,b3]
knots = [0,0,0,1,1,1] # periodic B-spline

tbspline = TBSPLINE(S2)(2)(knots)(controls)
dom = larModelProduct([larDomain([10]),larDom(knots)])
#dom = larIntervals([32,48],'simplex')([1,3])
vetrata = larMap(tbspline)(dom)
glass_mat = [0,0.19,0.39,1, 0,0,0,0.2, 0,0,0,1, 0,0,0,1, 100]
vetrata= MATERIAL(glass_mat)(STRUCT( MKPOLS(vetrata) ))
portaPrincipale = T([1,3])([.3+20.7*8-.3+.1+1,.3])(STRUCT([doorBalcony,T(1)(2)]*2))
porta2principale = STRUCT([portaPrincipale,T(1)(14)]*2)
corridoioPalazzo = STRUCT([corridoioPalazzo,T(2)(37.2)(vetrata),porta2principale])
