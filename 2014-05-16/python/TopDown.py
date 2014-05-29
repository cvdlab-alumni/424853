#TopDown.py
from larcc import *
DRAW = COMP([VIEW,STRUCT,MKPOLS])

down = assemblyDiagramInit([1,1,2])([[20.7],[33.1],[.3,2.7]])
V,CV = down
hpc = SKEL_1(STRUCT(MKPOLS(down)))
hpc = cellNumbering (down,hpc)(range(len(CV)),CYAN,2)
down = T(2)(4.2)(STRUCT(MKPOLS(down)))

top = assemblyDiagramInit([5,10,2])([[.3,12,.1,8,20.7,.3],[.1,4,.3,2,.2,21,.2,9,10.4,.3],[.3,2]])
V,CV = top
hpc = SKEL_1(STRUCT(MKPOLS(top)))
hpc = cellNumbering (top,hpc)(range(len(CV)),CYAN,2)
top = STRUCT(MKPOLS(top))
topDown = (STRUCT([down,T(3)(3*5)(top)] ))
topDown = STRUCT([topDown,T(1)(20.7)]*8)
#VIEW(topDown)

