from exercise1 import *
rosa = [1,0.855,0.725]

top = assemblyDiagramInit([5,9,2])([[.3,12,.1,8,.3],[.1,4,.3,2,.2,21,.2,9,.3],[.3,2]])
V,CV = top
hpc = SKEL_1(STRUCT(MKPOLS(top)))
hpc = cellNumbering (top,hpc)(range(len(CV)),CYAN,2)
top = STRUCT(MKPOLS(top))

down = assemblyDiagramInit([5,8,2])([[.3,12,.1,8,.3],[.1,.3,2,.2,21,.2,9,.3],[.3,2.7]])

V,CV = down
hpc = SKEL_1(STRUCT(MKPOLS(down)))
hpc = cellNumbering (down,hpc)(range(len(CV)),CYAN,2)
down = STRUCT(MKPOLS(down))

master = COLOR(rosa)(STRUCT(MKPOLS(master)))

stair = spiralStair(width=0.2,R=3,r=0.25,riser=0.1,pitch=4.4,nturns=1.75,steps=36)
stair = larApply(r(0,0,3*PI/4))(stair)
stair = larApply(t(0,-3,0))(stair)
stairColumn = larApply(t(0,-3,0))(larRod(0.25,4.2)())
mod_1 = larQuote1D( 6*[0.2,-3.8] )

"""Stairs"""
stair = spiralStair(width=0.2,R=3,r=0.25,riser=0.1,pitch=4.4,nturns=1.5,steps=24)
stair = larApply(r(0,0,2*PI))(stair)
stair = larApply(t(0,-3,0))(stair)
stairColumn = larApply(t(0,-3,0))(larRod(0.25,4.2)())
stairs3D = evalStruct(Struct([stairColumn,stair,t(0,0,3)]*4))
stairs = (STRUCT(CAT(AA(MKPOLS)(stairs3D))))
"""Pedana"""
pedana = CUBOID([2.5,3,.3])
muro = CUBOID([.5,3,3*5])
pedane = (STRUCT([T([1,2])([8+.3,36+.1+.3+.2+.2+.3])(pedana),T(3)(3)]*5))
palazzo = STRUCT([T([1,2])([8+.3+2.5,36+.1+.3+.2])(muro),pedane,T([1,2])([8+.3,43])(stairs),T(2)(4)(down), T(3)(3)(master), T(3)(6)(master), T(3)(9)(master), T(3)(12)(master), T(3)(15)(top)  ])




VIEW(palazzo)