#edificio2 2
from larcc import * 
from pyplasm import *

def face2edge(FV):
        edges = AA(sorted)(CAT([TRANS([face[:-1],face[1:]]) for face in FV]))
        return AA(eval)(set(AA(str)(edges)))

#coordinate vertici
V = [[0,0],[3,0],[7,0],[0,4],[3,4],[7,4]]

#celle
FV = [[0,1,4,3,0],[1,2,5,4,1]]

model = MKPOLS((V,FV))
#VIEW(STRUCT(model))

EV= face2edge(FV)

#creo la topologia
modelEdges=(V,EV)
modelFaces=(V,FV)
#VIEW(EXPLODE(1.2,1.2,1)(MKPOLS((modelEdges))))
#VIEW(EXPLODE(1.2,1.2,1)(MKPOLS((modelFaces))))

V0=AA(LIST)([0.,1.2,2.4,3.6])
C0V=AA(LIST)(range(4))
C1V = [[0,1],[1,2],[2,3]]

#print mi da numero di celle e vertii in questo caso 4
modelFloor = V0,C0V
modelWall = V0,C1V

#stampa il pavimento su piu piani
#pavimento pieno
mod2D = larModelProduct([modelFaces,modelFloor])

#pavimento trasparente
mod1d = larModelProduct([modelEdges,modelFloor])

#pavimenti con aggiunta mura
mod11d = larModelProduct([modelEdges,modelWall])

#VIEW(STRUCT(MKPOLS((mod11d))))

#VIEW(EXPLODE(1.3,1.3,1.3)(MKPOLS(mod11d) + MKPOLS(mod2D)))

piani = STRUCT(AA(COLOR(BLUE))(MKPOLS(mod1d)) + MKPOLS(mod2D))
wall = STRUCT(MKPOLS(mod11d))
edificio2 = STRUCT([piani,wall])
